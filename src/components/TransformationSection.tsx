import { ShieldCheck, Eye, Sprout, Wind } from "lucide-react";

const outcomes = [
  {
    icon: ShieldCheck,
    title: "Tu dépenses moins sous l'impulsion",
    description: "Tu apprends à reconnaître le déclencheur avant qu'il ne te coûte. Le SOS achat de Noory t'aide à faire une pause au bon moment.",
    bg: "bg-emerald-pastel",
  },
  {
    icon: Eye,
    title: "Tu vois plus clair avant chaque décision",
    description: "Tu comprends pourquoi tu dépenses, ce qui fuit, et ce qui compte vraiment. L'argent devient lisible.",
    bg: "bg-amber-pastel",
  },
  {
    icon: Sprout,
    title: "Ton épargne commence à vouloir dire quelque chose",
    description: "Plus un sacrifice vague. Un choix concret. Tu épargnes pour un projet réel, un coussin, une liberté tangible.",
    bg: "bg-rose-pastel",
  },
  {
    icon: Wind,
    title: "Tes projets avancent, avec moins de dispersion",
    description: "Moins de bruit mental. Plus de marge. Tu avances jour après jour vers ce qui compte — sans t'épuiser.",
    bg: "bg-sky-pastel",
  },
];

const TransformationSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Ce qui change concrètement</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground">
            Après quelques jours,{" "}
            <span className="text-gradient">tu le sens.</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Pas de transformation miracle. Des micro-progrès réels qui changent ta façon de vivre ton argent.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {outcomes.map((o) => (
            <div
              key={o.title}
              className="group bg-card border border-border rounded-2xl p-7 hover:border-primary/30 transition-all"
            >
              <div className={`w-11 h-11 rounded-xl ${o.bg} flex items-center justify-center mb-5`}>
                <o.icon size={22} className="text-foreground/70" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-foreground">{o.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{o.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
