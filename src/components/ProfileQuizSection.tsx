import { Link } from "react-router-dom";

const profileCards = [
  {
    emoji: "🧘",
    name: "Quêteur de Sérénité",
    tagline: "Tu gagnes ta vie, mais l'argent te pèse.",
    slug: "queteur-de-serenite",
    bg: "bg-sky-pastel",
  },
  {
    emoji: "😶",
    name: "Navigateur à Vue",
    tagline: "Tu avances au jour le jour, sans visibilité.",
    slug: "navigateur-a-vue",
    bg: "bg-amber-pastel",
  },
  {
    emoji: "😤",
    name: "Dépensier Émotionnel",
    tagline: "Tu achètes sous l'émotion. Après, tu culpabilises.",
    slug: "depensier-emotionnel",
    bg: "bg-rose-pastel",
  },
  {
    emoji: "🚀",
    name: "Bâtisseur Bloqué",
    tagline: "Tu as des projets, mais tes finances ne suivent pas.",
    slug: "batisseur-bloque",
    bg: "bg-emerald-pastel",
  },
  {
    emoji: "📈",
    name: "Investisseur Paralysé",
    tagline: "Tu veux investir, mais la peur te bloque.",
    slug: "investisseur-paralyse",
    bg: "bg-amber-pastel/70",
  },
];

const ProfileQuizSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Ton profil financier</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground">
            Quel est ton profil{" "}
            <span className="text-gradient">financier ?</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg mx-auto">
            On n'a pas tous le même rapport à l'argent. Découvre ton profil pour mieux comprendre tes réflexes — et les transformer.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {profileCards.map((p) => (
            <Link
              key={p.slug}
              to={`/profil/${p.slug}`}
              className={`${p.bg} border border-border/50 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-200 block`}
            >
              <span className="text-4xl mb-4 block">{p.emoji}</span>
              <h3 className="text-lg font-bold mb-2 text-foreground">{p.name}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{p.tagline}</p>
            </Link>
          ))}

          <Link
            to="/quiz"
            className="bg-card border-2 border-dashed border-primary/30 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg hover:border-primary/50 transition-all duration-200 flex flex-col items-center justify-center text-center"
          >
            <span className="text-4xl mb-4 block">🎯</span>
            <h3 className="text-lg font-bold mb-2 text-foreground">Fais le quiz</h3>
            <p className="text-sm text-primary leading-relaxed">Découvre ton profil en 2 minutes</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProfileQuizSection;
