import { useParams, Link } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { ArrowLeft } from "lucide-react";
import { blogArticles } from "@/data/blogArticles";
import { useSEO } from "@/hooks/useSEO";
import { BASE_URL, DEFAULT_OG_IMAGE, LANG, ORG_NOORY, PERSON_IMAD, formatDateFr, toIsoDate } from "@/lib/seo";
import AppStoreBadge from "@/components/AppStoreBadge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { renderMarkdownBlocks } from "@/lib/renderMarkdown";

const BlogArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = blogArticles.find((a) => a.slug === slug);

  const jsonLd = useMemo(() => {
    if (!article) return undefined;
    const url = `${BASE_URL}/blog/${article.slug}`;
    const blogPostingSchema = {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: article.title,
      description: article.metaDescription,
      url,
      image: article.image ?? DEFAULT_OG_IMAGE,
      datePublished: toIsoDate(article.date),
      dateModified: toIsoDate(article.dateModified ?? article.date),
      author: PERSON_IMAD,
      publisher: ORG_NOORY,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      inLanguage: LANG,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      ...(article.keywords && article.keywords.length > 0
        ? { keywords: article.keywords.join(", ") }
        : {}),
    };
    const graph: Record<string, unknown>[] = [blogPostingSchema];
    if (article.faq && article.faq.length > 0) {
      graph.push({
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: article.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      });
    }
    return { "@context": "https://schema.org", "@graph": graph };
  }, [article]);

  useSEO({
    title: article?.metaTitle || "Article — Noory",
    description: article?.metaDescription || "",
    url: `/blog/${slug}`,
    type: "article",
    jsonLd,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-display font-bold text-foreground">Article introuvable</h1>
          <Link to="/blog/" className="text-primary mt-4 inline-block">Retour au blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const curatedRelated = (article.relatedSlugs ?? [])
    .map((s) => blogArticles.find((a) => a.slug === s))
    .filter((a): a is typeof blogArticles[number] => Boolean(a));

  const otherArticles = curatedRelated.length > 0
    ? curatedRelated.slice(0, 3)
    : blogArticles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog/" },
          { label: article.title },
        ]}
      />

      <main className="pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <Link
            to="/blog/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 mt-6"
          >
            <ArrowLeft size={16} />
            Retour au blog
          </Link>

          <article>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground mb-4">
              <span>Publié le {formatDateFr(article.date)}</span>
              {article.dateModified && article.dateModified !== article.date && (
                <>
                  <span>·</span>
                  <span>Mis à jour le {formatDateFr(article.dateModified)}</span>
                </>
              )}
              <span>·</span>
              <span>{article.readTime} de lecture</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground mb-6 leading-tight">
              {article.title}
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
              {article.intro}
            </p>

            <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed space-y-6">
              {renderMarkdownBlocks(article.content)}
            </div>

            {article.faq && article.faq.length > 0 && (
              <section className="mt-14">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Questions fréquentes
                </h2>
                <div className="space-y-6">
                  {article.faq.map((item, i) => (
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
              comportemental, pas un service financier réglementé.
            </div>

            {/* CTA */}
            <div className="mt-10 p-8 bg-card border border-border rounded-2xl text-center">
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                Prêt·e à changer ton rapport à l'argent ?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Découvre ton profil financier et suis 28 jours de coaching personnalisé. Zéro jugement. Gratuit 7 jours.
              </p>
              <AppStoreBadge className="mx-auto" />
            </div>
          </article>

          {/* Related articles */}
          {otherArticles.length > 0 && (
            <div className="mt-16">
              <h3 className="text-xl font-display font-bold text-foreground mb-6">
                Tu pourrais aussi aimer
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {otherArticles.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/blog/${a.slug}/`}
                    className="bg-card border border-border rounded-2xl p-5 hover:shadow-md transition-all flex flex-col"
                  >
                    <h4 className="text-sm font-bold text-foreground mb-2 leading-snug">
                      {a.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-3 flex-1">
                      {a.intro}
                    </p>
                    <span className="text-xs text-muted-foreground">
                      {a.readTime} de lecture
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

export default BlogArticlePage;
