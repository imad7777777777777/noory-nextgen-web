import { X, Check } from "lucide-react";

const comparisons = [
  { old: "Un tableur de budget que tu abandonnes en 10 jours", noory: "Un rituel quotidien que tu retrouves avec envie" },
  { old: "Des conseils culpabilisants sur les réseaux", noory: "Un ton humain, sans jugement, sans pression" },
  { old: "De la complexité financière incompréhensible", noory: "Des micro-actions simples que tu peux faire maintenant" },
  { old: "Des promesses de richesse rapide et irréaliste", noory: "Un progrès calme, concret, et durable" },
  { old: "Un tracker de dépenses sans aucun impact sur tes habitudes", noory: "Un coach comportemental qui t'aide à changer ce qui coince" },
];

const DifferenceSection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Ce qui nous rend différents</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground">
            Pas une app de budget.{" "}
            <span className="text-gradient">Pas un outil de plus.</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Noory ne te demande pas de tout noter. Il t'aide à mieux décider.
          </p>
        </div>

        <div className="space-y-5">
          {comparisons.map((c, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-5 rounded-2xl bg-rose-pastel/60 border border-border/50">
                <X size={18} className="text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/60 leading-relaxed">{c.old}</p>
              </div>
              <div className="flex items-start gap-3 p-5 rounded-2xl bg-emerald-pastel/60 border border-border/50">
                <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80 leading-relaxed">{c.noory}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
