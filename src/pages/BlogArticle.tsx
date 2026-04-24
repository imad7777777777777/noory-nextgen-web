import { useParams, Link } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { ArrowLeft } from "lucide-react";
import { blogArticles } from "@/data/blogArticles";
import { useSEO } from "@/hooks/useSEO";
import { BASE_URL, LANG, ORG_NOORY, PERSON_IMAD } from "@/lib/seo";
import AppStoreBadge from "@/components/AppStoreBadge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

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
      datePublished: article.date,
      dateModified: article.dateModified ?? article.date,
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
          <Link to="/blog" className="text-primary mt-4 inline-block">Retour au blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const otherArticles = blogArticles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: article.title },
        ]}
      />

      <main className="pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 mt-6"
          >
            <ArrowLeft size={16} />
            Retour au blog
          </Link>

          <article>
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
              <span>{new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span>·</span>
              <span>{article.readTime} de lecture</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-10 border-l-4 border-primary/30 pl-4 italic">
              {article.intro}
            </p>

            <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed space-y-6">
              {article.content.split("\n\n").map((block, i) => {
                if (block.startsWith("## ")) {
                  return <h2 key={i} className="text-2xl font-display font-bold text-foreground mt-10 mb-4">{block.replace("## ", "")}</h2>;
                }
                if (block.startsWith("### ")) {
                  return <h3 key={i} className="text-xl font-display font-bold text-foreground mt-8 mb-3">{block.replace("### ", "")}</h3>;
                }
                if (block.startsWith("---")) {
                  return <hr key={i} className="border-border my-10" />;
                }
                if (block.startsWith("- ")) {
                  const items = block.split("\n").filter(l => l.startsWith("- "));
                  return (
                    <ul key={i} className="space-y-2 pl-4">
                      {items.map((item, j) => (
                        <li key={j} className="text-base leading-relaxed list-disc list-outside">
                          {renderInlineMarkdown(item.replace("- ", ""))}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.startsWith("1. ") || block.startsWith("2. ") || block.startsWith("3. ")) {
                  const items = block.split("\n").filter(l => /^\d+\./.test(l));
                  return (
                    <ol key={i} className="space-y-2 pl-4">
                      {items.map((item, j) => (
                        <li key={j} className="text-base leading-relaxed list-decimal list-outside">
                          {renderInlineMarkdown(item.replace(/^\d+\.\s*/, ""))}
                        </li>
                      ))}
                    </ol>
                  );
                }
                if (block.startsWith("*") && block.endsWith("*") && !block.startsWith("**")) {
                  return (
                    <p key={i} className="text-sm text-muted-foreground italic bg-secondary/50 p-4 rounded-xl">
                      {renderInlineMarkdown(block.slice(1, -1))}
                    </p>
                  );
                }
                return <p key={i} className="text-base leading-relaxed">{renderInlineMarkdown(block)}</p>;
              })}
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

            <aside className="mt-12 p-5 bg-gray-100 text-gray-600 text-sm italic rounded-xl leading-relaxed">
              Cet article a une vocation pédagogique. Il ne constitue ni un
              conseil en investissement, ni un conseil financier personnalisé
              au sens de l'article L. 541-1 du Code monétaire et financier.
              Pour toute décision financière importante, consultez un
              conseiller habilité (CIF, CGP). Noory est un outil de coaching
              comportemental, pas un service financier réglementé.
            </aside>

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
              <h3 className="text-xl font-display font-bold text-foreground mb-6">À lire aussi</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {otherArticles.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/blog/${a.slug}`}
                    className="bg-card border border-border rounded-2xl p-5 hover:shadow-md transition-all"
                  >
                    <h4 className="text-sm font-bold text-foreground mb-2 leading-snug">{a.title}</h4>
                    <span className="text-xs text-muted-foreground">{a.readTime} de lecture</span>
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

function renderInlineMarkdown(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-bold text-foreground">{part.slice(2, -2)}</strong>;
    }
    const linkMatch = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
    if (linkMatch) {
      const href = linkMatch[2];
      if (href.startsWith("http")) {
        return <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">{linkMatch[1]}</a>;
      }
      return <Link key={i} to={href} className="text-primary underline hover:text-primary/80">{linkMatch[1]}</Link>;
    }
    return <span key={i}>{part}</span>;
  });
}

export default BlogArticlePage;
