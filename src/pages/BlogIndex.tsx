import { Link } from "react-router-dom";
import { blogArticles } from "@/data/blogArticles";
import { useSEO } from "@/hooks/useSEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const articleGradients = [
  "from-emerald-pastel to-amber-pastel",
  "from-sky-pastel to-emerald-pastel",
  "from-amber-pastel to-rose-pastel",
  "from-rose-pastel to-sky-pastel",
  "from-emerald-pastel to-sky-pastel",
  "from-amber-pastel to-emerald-pastel",
];

const articleIcons = ["💸", "🧘", "🧠", "🐷", "💛", "📈"];

const BlogIndex = () => {
  useSEO({
    title: "Blog — Finance comportementale & psychologie de l'argent | Noory",
    description: "Articles concrets sur la finance comportementale, l'épargne et la psychologie de l'argent. Conseils sans jargon et sans jugement par Noory.",
    url: "/blog",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Blog Noory",
      description: "Articles sur la finance comportementale et la psychologie de l'argent.",
      publisher: { "@type": "Organization", name: "Noory" },
      inLanguage: "fr",
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Blog</p>
            <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground">
              Mieux comprendre ton rapport à l'argent
            </h1>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Des articles concrets sur la finance comportementale, l'épargne, et la psychologie de l'argent. Sans jargon, sans jugement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {blogArticles.map((article, i) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-md hover:scale-[1.01] transition-all"
              >
                <div className={`h-40 bg-gradient-to-br ${articleGradients[i % articleGradients.length]} flex items-center justify-center relative`}>
                  <span className="text-5xl">{articleIcons[i % articleIcons.length]}</span>
                  <div className="absolute inset-0 bg-white/10" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span>{new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
                    <span>·</span>
                    <span>{article.readTime} de lecture</span>
                  </div>
                  <h2 className="text-lg font-display font-bold text-foreground mb-2 leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {article.intro}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogIndex;
