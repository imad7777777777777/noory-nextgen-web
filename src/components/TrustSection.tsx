import { motion } from "framer-motion";

const signals = [
  {
    emoji: "🌱",
    text: "Pensé pour la vraie vie — pas pour un monde idéal.",
  },
  {
    emoji: "🧩",
    text: "Conçu pour des micro-progrès durables, pas des transformations spectaculaires.",
  },
  {
    emoji: "🤝",
    text: "Une approche plus humaine de l'argent — sans honte, sans pression.",
  },
  {
    emoji: "👥",
    text: "Déjà testé par une première communauté de bêta-testeurs engagés.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />

      <div className="container mx-auto px-4 md:px-8 max-w-2xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-4">Confiance</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Pas de promesses vides.{" "}
            <span className="text-gradient">Du concret.</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {signals.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-5 rounded-xl glass"
            >
              <span className="text-2xl flex-shrink-0">{s.emoji}</span>
              <p className="text-foreground/85 leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
