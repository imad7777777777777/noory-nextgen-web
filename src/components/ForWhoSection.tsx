import { motion } from "framer-motion";

const audiences = [
  {
    emoji: "🛍️",
    title: "Je dépense trop sous l'émotion",
    description: "Fatigue, stress, comparaison… tu achètes pour compenser. Noory t'aide à voir le schéma et à reprendre la main.",
  },
  {
    emoji: "🐢",
    title: "J'ai du mal à épargner régulièrement",
    description: "Tu veux mettre de côté, mais ça ne dure jamais. Noory transforme l'épargne en habitude douce et concrète.",
  },
  {
    emoji: "🎯",
    title: "Je veux avancer sur un projet sans me disperser",
    description: "Un business, un voyage, un changement de vie. Noory t'aide à structurer tes finances autour de ce projet.",
  },
  {
    emoji: "🧘",
    title: "Je veux investir avec plus de calme",
    description: "Pas de spéculation. Pas de panique. Noory t'aide à poser les bases d'un investissement aligné avec tes valeurs.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const ForWhoSection = () => {
  return (
    <section id="pour-qui" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-4">Pour qui</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Si tu te reconnais ici,{" "}
            <span className="text-gradient">Noory est fait pour toi.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {audiences.map((a) => (
            <motion.div
              key={a.title}
              variants={item}
              className="bg-card/50 border border-border rounded-2xl p-7 hover:border-primary/25 transition-colors"
            >
              <span className="text-3xl mb-4 block">{a.emoji}</span>
              <h3 className="text-lg font-bold mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ForWhoSection;
