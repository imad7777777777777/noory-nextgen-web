import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const comparisons = [
  {
    old: "Un tableur de budget que tu abandonnes en 10 jours",
    noory: "Un rituel quotidien que tu retrouves avec envie",
  },
  {
    old: "Des conseils culpabilisants sur les réseaux",
    noory: "Un ton humain, sans jugement, sans pression",
  },
  {
    old: "De la complexité financière incompréhensible",
    noory: "Des micro-actions simples que tu peux faire maintenant",
  },
  {
    old: "Des promesses de richesse rapide et irréaliste",
    noory: "Un progrès calme, concret, et durable",
  },
  {
    old: "Un tracker de dépenses sans aucun impact sur tes habitudes",
    noory: "Un coach comportemental qui t'aide à changer ce qui coince",
  },
];

const DifferenceSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Ce qui nous rend différents</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Pas une app de budget.{" "}
            <span className="text-gradient">Pas un outil de plus.</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Noory ne te demande pas de tout noter. Il t'aide à mieux décider.
          </p>
        </motion.div>

        <div className="space-y-5">
          {comparisons.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="grid md:grid-cols-2 gap-4"
            >
              <div className="flex items-start gap-3 p-5 rounded-xl bg-destructive/5 border border-destructive/10">
                <X size={18} className="text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">{c.old}</p>
              </div>
              <div className="flex items-start gap-3 p-5 rounded-xl bg-accent/5 border border-accent/15">
                <Check size={18} className="text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/90 leading-relaxed">{c.noory}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferenceSection;
