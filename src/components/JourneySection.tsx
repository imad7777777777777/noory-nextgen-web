import { Compass, Footprints, Sparkles } from "lucide-react";

const journeySteps = [
  {
    icon: Compass,
    title: "Découvre ton profil financier",
    description:
      "Réponds à quelques questions sur ton rapport à l'argent. En 2 minutes, Noory identifie ton profil psychologique parmi 5 comportements financiers.",
    bg: "bg-emerald-pastel",
  },
  {
    icon: Footprints,
    title: "Suis ton parcours personnalisé",
    description:
      "Chaque jour, un rituel de 5 minutes adapté à ta psychologie : une action concrète, une réflexion guidée, un pas de plus vers le contrôle.",
    bg: "bg-amber-pastel",
  },
  {
    icon: Sparkles,
    title: "Transforme tes habitudes",
    description:
      "Jour après jour, tu construis de nouveaux réflexes financiers. Pas de théorie — des résultats visibles sur ton budget et ton stress.",
    bg: "bg-rose-pastel",
  },
];

const JourneySection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">
            En 3 étapes
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground">
            Comment ça marche,{" "}
            <span className="text-gradient">vraiment.</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Pas un nouveau budget à tenir. Un parcours guidé qui part de ta
            psychologie et te ramène à des actions simples au quotidien.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {journeySteps.map((step, i) => (
            <div
              key={step.title}
              className="relative bg-card border border-border rounded-2xl p-7 hover:border-primary/30 transition-colors"
            >
              <div
                className={`w-11 h-11 rounded-xl ${step.bg} flex items-center justify-center mb-5`}
              >
                <step.icon size={22} className="text-foreground/70" />
              </div>
              <span className="absolute top-6 right-6 text-xs font-bold text-muted-foreground/50 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-bold mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
