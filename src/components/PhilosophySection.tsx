import { motion } from "framer-motion";

const values = [
  {
    emoji: "🌱",
    title: "Pensé pour la vraie vie",
    text: "Pas pour un monde idéal. Pour quelqu'un qui bosse, qui doute, qui a pas toujours la motivation. Noory s'adapte à ça.",
  },
  {
    emoji: "🧩",
    title: "Des micro-progrès, pas des miracles",
    text: "On ne te promet pas de richesse rapide. On t'aide à faire un petit pas utile par jour. C'est comme ça que ça tient.",
  },
  {
    emoji: "🤝",
    title: "Sans honte, sans pression",
    text: "Noory ne te juge jamais. Pas de culpabilité, pas de score humiliant. Un accompagnement humain, à ton rythme.",
  },
  {
    emoji: "🧭",
    title: "Aligné avec tes valeurs",
    text: "Pas de spéculation, pas de promesses toxiques, pas de finance agressive. Une approche éthique, sobre, ancrée dans le réel.",
  },
];

const PhilosophySection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Notre philosophie</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Pas pour devenir riche vite.{" "}
            <span className="text-gradient">Pour devenir plus solide.</span>
          </h2>
        </motion.div>

        <div className="space-y-5">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-xl glass"
            >
              <span className="text-2xl flex-shrink-0">{v.emoji}</span>
              <div>
                <h3 className="font-bold mb-1">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
