import { useParams, Link } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { comparatifs } from "@/data/comparatifs";
import { useSEO } from "@/hooks/useSEO";
import { BASE_URL, DEFAULT_OG_IMAGE, LANG, ORG_NOORY, PERSON_IMAD, formatDateFr, toIsoDate } from "@/lib/seo";
import AppStoreBadge from "@/components/AppStoreBadge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { renderInlineMarkdown, renderMarkdownBlocks } from "@/lib/renderMarkdown";

const ComparatifPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const comparatif = comparatifs.find((c) => c.slug === slug);

  const jsonLd = useMemo(() => {
    if (!comparatif) return undefined;
    const url = `${BASE_URL}/comparatif/${comparatif.slug}`;
    const articleSchema = {
      "@type": "Article",
      "@id": `${url}#article`,
      headline: comparatif.title,
      description: comparatif.metaDescription,
      url,
      image: DEFAULT_OG_IMAGE,
      datePublished: toIsoDate(comparatif.date),
      dateModified: toIsoDate(comparatif.dateModified ?? comparatif.date),
      author: PERSON_IMAD,
      publisher: ORG_NOORY,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      inLanguage: LANG,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      ...(comparatif.keywords && comparatif.keywords.length > 0
        ? { keywords: comparatif.keywords.join(", ") }
        : {}),
    };
    const graph: Record<string, unknown>[] = [articleSchema];
    if (comparatif.items && comparatif.items.length > 0) {
      graph.push({
        "@type": "ItemList",
        "@id": `${url}#itemlist`,
        name: comparatif.title,
        itemListElement: comparatif.items.map((name, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name,
        })),
      });
    }
    if (comparatif.faq && comparatif.faq.length > 0) {
      graph.push({
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: comparatif.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      });
    }
    return { "@context": "https://schema.org", "@graph": graph };
  }, [comparatif]);

  useSEO({
    title: comparatif?.metaTitle || "Comparatif — Noory",
    description: comparatif?.metaDescription || "",
    url: `/comparatif/${slug}`,
    type: "article",
    jsonLd,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!comparatif) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-display font-bold text-foreground">Comparatif introuvable</h1>
          <Link to="/" className="text-primary mt-4 inline-block">Retour à l'accueil</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = (comparatif.relatedSlugs ?? [])
    .map((s) => comparatifs.find((c) => c.slug === s))
    .filter((c): c is typeof comparatifs[number] => Boolean(c));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Comparatifs" },
          { label: comparatif.title },
        ]}
      />

      <main className="pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <article>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground mb-4 mt-6">
              <span>Publié le {formatDateFr(comparatif.date)}</span>
              {comparatif.dateModified && comparatif.dateModified !== comparatif.date && (
                <>
                  <span>·</span>
                  <span>Mis à jour le {formatDateFr(comparatif.dateModified)}</span>
                </>
              )}
              <span>·</span>
              <span>{comparatif.readTime} de lecture</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground mb-6 leading-tight">
              {comparatif.title}
            </h1>

            <div className="flex items-start gap-3 mb-8 pb-6 border-b border-border">
              <img
                src="/imad-founder.webp"
                alt="Imad, cofondateur de Noory"
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                width={800}
                height={800}
                loading="lazy"
              />
              <div className="text-sm">
                <Link
                  to="/a-propos/"
                  className="font-bold text-foreground hover:underline"
                >
                  Par Imad — Cofondateur de Noory
                </Link>
                <p className="text-muted-foreground mt-0.5 leading-snug">
                  L'équipe Noory écrit sur la finance comportementale depuis 2025. Basée à Marseille.
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 border-l-4 border-primary/30 pl-4 italic">
              {renderInlineMarkdown(comparatif.intro)}
            </p>

            <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed space-y-6">
              {renderMarkdownBlocks(comparatif.content)}
            </div>

            {comparatif.faq && comparatif.faq.length > 0 && (
              <section className="mt-14">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Questions fréquentes
                </h2>
                <div className="space-y-6">
                  {comparatif.faq.map((item, i) => (
                    <div key={i}>
                      <h3 className="text-lg font-display font-bold text-foreground mb-2">
                        {item.q}
                      </h3>
                      <p className="text-base leading-relaxed text-foreground/80">
                        {item.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <div className="mt-12 p-5 bg-gray-100 text-gray-700 text-sm italic rounded-xl leading-relaxed">
              Cet article a une vocation pédagogique. Il ne constitue ni un
              conseil en investissement, ni un conseil financier personnalisé
              au sens de l'article L. 541-1 du Code monétaire et financier.
              Pour toute décision financière importante, consultez un
              conseiller habilité (CIF, CGP). Noory est un outil de coaching
              comportemental, pas un service financier réglementé. Les prix et
              fonctionnalités des applications citées sont indiqués à titre
              indicatif et peuvent évoluer.
            </div>

            {/* CTA */}
            <div className="mt-10 p-8 bg-card border border-border rounded-2xl text-center">
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                Prêt·e à t'attaquer à ce qui te bloque vraiment ?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Découvre ton profil financier en 2 minutes et reçois un accompagnement quotidien adapté. Zéro jugement. Gratuit 7 jours.
              </p>
              <AppStoreBadge className="mx-auto" />
              <p className="mt-4 text-sm text-muted-foreground">
                Sur Android ou ordinateur ?{" "}
                <a
                  href="https://app.noory.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-primary/80"
                >
                  Ouvre Noory dans ton navigateur →
                </a>
              </p>
            </div>
          </article>

          {/* Related comparatifs */}
          {related.length > 0 && (
            <div className="mt-16">
              <h3 className="text-xl font-display font-bold text-foreground mb-6">
                Autres comparatifs
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {related.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/comparatif/${c.slug}/`}
                    className="bg-card border border-border rounded-2xl p-5 hover:shadow-md transition-all flex flex-col"
                  >
                    <h4 className="text-sm font-bold text-foreground mb-2 leading-snug">
                      {c.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-3 flex-1">
                      {c.metaDescription}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {c.readTime} de lecture
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ComparatifPage;
