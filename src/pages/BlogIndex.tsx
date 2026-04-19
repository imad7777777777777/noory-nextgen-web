import { useState } from "react";
import { Link } from "react-router-dom";
import { blogArticles } from "@/data/blogArticles";
import { useSEO } from "@/hooks/useSEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const gradientMap: Record<string, string> = {
  // Emotion articles (rose)
  "j-achete-quand-je-suis-triste": "from-rose-pastel to-amber-pastel",
  "argent-et-emotions-comprendre-le-lien": "from-rose-pastel to-sky-pastel",
  "depense-plaisir-sans-culpabiliser": "from-rose-pastel to-emerald-pastel",
  "culpabilite-argent-depenser": "from-rose-pastel to-amber-pastel",
  "depenses-impulsives-comment-arreter": "from-rose-pastel to-sky-pastel",
  "anxiete-financiere-calmer": "from-rose-pastel to-amber-pastel",
  "arreter-comparer-finances-reseaux": "from-rose-pastel to-emerald-pastel",
  "relation-saine-argent": "from-rose-pastel to-emerald-pastel",
  // Practical articles (emerald)
  "ou-passe-mon-argent-chaque-mois": "from-emerald-pastel to-sky-pastel",
  "no-buy-challenge-comment-faire": "from-emerald-pastel to-amber-pastel",
  "budget-pour-les-nuls": "from-emerald-pastel to-rose-pastel",
  "pourquoi-je-depense-tout-mon-salaire": "from-emerald-pastel to-sky-pastel",
  "epargner-petit-salaire": "from-emerald-pastel to-amber-pastel",
  "premier-salaire-quoi-faire": "from-emerald-pastel to-rose-pastel",
  "methode-enveloppes-budget": "from-emerald-pastel to-sky-pastel",
  "regle-50-30-20-explication": "from-emerald-pastel to-amber-pastel",
  "epargne-de-precaution-combien": "from-emerald-pastel to-sky-pastel",
  "acheter-en-ligne-moins-depenser": "from-emerald-pastel to-rose-pastel",
  "epargne-automatique-comment-mettre-en-place": "from-emerald-pastel to-sky-pastel",
  "defi-epargne-52-semaines": "from-emerald-pastel to-amber-pastel",
  "fond-urgence-pourquoi-indispensable": "from-emerald-pastel to-sky-pastel",
  "depenses-inutiles-couper-sans-souffrir": "from-emerald-pastel to-rose-pastel",
  "tracker-ses-depenses-simplement": "from-emerald-pastel to-amber-pastel",
  "premiere-paie-5-reflexes": "from-emerald-pastel to-sky-pastel",
  // Motivation articles (amber)
  "charge-mentale-financiere": "from-amber-pastel to-rose-pastel",
  "epargner-quand-on-a-pas-la-motivation": "from-amber-pastel to-emerald-pastel",
  "gerer-son-argent-sans-stress": "from-amber-pastel to-sky-pastel",
  "habitudes-financieres-21-jours": "from-amber-pastel to-emerald-pastel",
  "habitudes-financieres-qui-changent-tout": "from-amber-pastel to-emerald-pastel",
  "routine-financiere-dimanche": "from-amber-pastel to-sky-pastel",
  "objectif-financier-comment-le-definir": "from-amber-pastel to-rose-pastel",
  // Couple & relations (sky+rose)
  "couple-et-argent-eviter-les-disputes": "from-sky-pastel to-rose-pastel",
  "money-date-couple": "from-sky-pastel to-rose-pastel",
  "parler-argent-tabou-france": "from-sky-pastel to-amber-pastel",
  // Profile/psychology (sky)
  "profil-financier-psychologie-argent": "from-sky-pastel to-emerald-pastel",
  "investir-debutant-peur": "from-sky-pastel to-amber-pastel",
};

const iconMap: Record<string, string> = {
  "j-achete-quand-je-suis-triste": "😢",
  "charge-mentale-financiere": "🧠",
  "ou-passe-mon-argent-chaque-mois": "🔍",
  "no-buy-challenge-comment-faire": "🚫",
  "budget-pour-les-nuls": "📋",
  "pourquoi-je-depense-tout-mon-salaire": "💸",
  "epargner-quand-on-a-pas-la-motivation": "🎯",
  "argent-et-emotions-comprendre-le-lien": "💛",
  "couple-et-argent-eviter-les-disputes": "💑",
  "depense-plaisir-sans-culpabiliser": "🎁",
  "depenses-impulsives-comment-arreter": "⚡",
  "gerer-son-argent-sans-stress": "🧘",
  "profil-financier-psychologie-argent": "🧩",
  "epargner-petit-salaire": "🐷",
  "culpabilite-argent-depenser": "💛",
  "investir-debutant-peur": "📈",
  "premier-salaire-quoi-faire": "🎓",
  "methode-enveloppes-budget": "✉️",
  "anxiete-financiere-calmer": "🫧",
  "acheter-en-ligne-moins-depenser": "🛒",
  "epargne-de-precaution-combien": "🛡️",
  "parler-argent-tabou-france": "🗣️",
  "regle-50-30-20-explication": "📊",
  "money-date-couple": "💕",
  "arreter-comparer-finances-reseaux": "📱",
  "habitudes-financieres-21-jours": "🔄",
  "epargne-automatique-comment-mettre-en-place": "🏦",
  "habitudes-financieres-qui-changent-tout": "⚡",
  "defi-epargne-52-semaines": "🎯",
  "fond-urgence-pourquoi-indispensable": "🛡️",
  "routine-financiere-dimanche": "☕",
  "depenses-inutiles-couper-sans-souffrir": "✂️",
  "tracker-ses-depenses-simplement": "📝",
  "objectif-financier-comment-le-definir": "🏔️",
  "relation-saine-argent": "💚",
  "premiere-paie-5-reflexes": "🎓",
};

type Category = "all" | "emotions" | "budget" | "couple" | "motivation";

const categoryMap: Record<string, Category[]> = {
  "j-achete-quand-je-suis-triste": ["emotions"],
  "argent-et-emotions-comprendre-le-lien": ["emotions"],
  "depense-plaisir-sans-culpabiliser": ["emotions"],
  "culpabilite-argent-depenser": ["emotions"],
  "depenses-impulsives-comment-arreter": ["emotions"],
  "anxiete-financiere-calmer": ["emotions"],
  "arreter-comparer-finances-reseaux": ["emotions"],
  "relation-saine-argent": ["emotions"],
  "ou-passe-mon-argent-chaque-mois": ["budget"],
  "no-buy-challenge-comment-faire": ["budget"],
  "budget-pour-les-nuls": ["budget"],
  "pourquoi-je-depense-tout-mon-salaire": ["budget"],
  "epargner-petit-salaire": ["budget"],
  "premier-salaire-quoi-faire": ["budget"],
  "methode-enveloppes-budget": ["budget"],
  "regle-50-30-20-explication": ["budget"],
  "epargne-de-precaution-combien": ["budget"],
  "acheter-en-ligne-moins-depenser": ["budget"],
  "epargne-automatique-comment-mettre-en-place": ["budget"],
  "defi-epargne-52-semaines": ["budget"],
  "fond-urgence-pourquoi-indispensable": ["budget"],
  "depenses-inutiles-couper-sans-souffrir": ["budget"],
  "tracker-ses-depenses-simplement": ["budget"],
  "premiere-paie-5-reflexes": ["budget"],
  "charge-mentale-financiere": ["motivation"],
  "epargner-quand-on-a-pas-la-motivation": ["motivation"],
  "gerer-son-argent-sans-stress": ["motivation"],
  "habitudes-financieres-21-jours": ["motivation"],
  "habitudes-financieres-qui-changent-tout": ["motivation"],
  "routine-financiere-dimanche": ["motivation"],
  "objectif-financier-comment-le-definir": ["motivation"],
  "couple-et-argent-eviter-les-disputes": ["couple"],
  "money-date-couple": ["couple"],
  "parler-argent-tabou-france": ["couple"],
  "profil-financier-psychologie-argent": ["emotions"],
  "investir-debutant-peur": ["motivation"],
};

const tabs: { key: Category; label: string }[] = [
  { key: "all", label: "Tous" },
  { key: "emotions", label: "Émotions & psycho" },
  { key: "budget", label: "Budget & pratique" },
  { key: "couple", label: "Couple & relations" },
  { key: "motivation", label: "Motivation" },
];

const BlogIndex = () => {
  const [category, setCategory] = useState<Category>("all");

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

  const sortedArticles = [...blogArticles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const filteredArticles = category === "all"
    ? sortedArticles
    : sortedArticles.filter((a) => categoryMap[a.slug]?.includes(category));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Blog</p>
            <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground">
              Mieux comprendre ton rapport à l'argent
            </h1>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Des articles concrets sur la finance comportementale, l'épargne, et la psychologie de l'argent. Sans jargon, sans jugement.
            </p>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setCategory(tab.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === tab.key
                    ? "bg-primary text-white"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-md hover:scale-[1.01] transition-all"
              >
                <div className={`h-40 bg-gradient-to-br ${gradientMap[article.slug] || "from-emerald-pastel to-amber-pastel"} flex items-center justify-center relative`}>
                  <span className="text-5xl">{iconMap[article.slug] || "📝"}</span>
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
