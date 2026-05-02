import { BookOpenCheck, Users, BrainCircuit } from "lucide-react";
import AppStoreBadge from "@/components/AppStoreBadge";

const signals = [
  {
    icon: Users,
    label: "Des centaines d'utilisateurs",
    detail:
      "Une communauté qui grandit chaque semaine, en France et au-delà.",
    bg: "bg-emerald-pastel",
  },
  {
    icon: BrainCircuit,
    label: "5 profils psychologiques",
    detail:
      "Une typologie comportementale issue de la finance comportementale, pas un quiz lifestyle.",
    bg: "bg-amber-pastel",
  },
  {
    icon: BookOpenCheck,
    label: "Inspiré de Daniel Kahneman",
    detail:
      "Conçu à partir des travaux du prix Nobel d'économie sur les biais cognitifs et la prise de décision.",
    bg: "bg-sky-pastel",
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/40">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">
            Pourquoi Noory
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground">
            Une approche{" "}
            <span className="text-gradient">sérieuse, pas solennelle.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {signals.map((s) => (
            <div
              key={s.label}
              className="bg-card border border-border rounded-2xl p-7 text-center"
            >
              <div
                className={`w-12 h-12 rounded-xl ${s.bg} flex items-center justify-center mx-auto mb-5`}
              >
                <s.icon size={22} className="text-foreground/70" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">
                {s.label}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <AppStoreBadge />
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
