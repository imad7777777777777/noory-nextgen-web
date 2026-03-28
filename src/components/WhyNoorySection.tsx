import { motion } from "framer-motion";

const problems = [
  {
    emoji: "😶",
    text: "Tu gagnes correctement ta vie, mais tu ne sais pas où part ton argent.",
  },
  {
    emoji: "💸",
    text: "Tu achètes sous le coup de l'émotion — fatigue, stress, comparaison, ennui.",
  },
  {
    emoji: "😔",
    text: "Tu culpabilises après chaque dépense, mais tu recommences quand même.",
  },
  {
    emoji: "🔄",
    text: "Tu as essayé des apps de budget. Ça a duré deux semaines.",
  },
  {
    emoji: "🤯",
    text: "Tu as trop de bruit mental autour de l'argent. Pas assez de clarté.",
  },
  {
    emoji: "🫥",
    text: "Tu as des projets. Mais entre les fuites invisibles et le manque de structure, rien n'avance.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const WhyNoorySection = () => {
  return (
    <section id="pourquoi" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Pourquoi Noory existe</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-6">
            Le problème, c'est rarement{" "}
            <span className="text-gradient">ton salaire.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            La plupart des galères financières ne viennent pas d'un manque d'argent. Elles viennent de la confusion, des émotions, du manque de structure, et d'un silence gêné autour du sujet. Noory est né pour ça.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {problems.map((p, i) => (
            <motion.div
              key={i}
              variants={item}
              className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card/40 hover:border-primary/20 transition-colors"
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">{p.emoji}</span>
              <p className="text-foreground/90 leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center text-muted-foreground text-lg"
        >
          Si tu te reconnais, tu n'es pas seul·e. Et Noory est fait pour ça.
        </motion.p>
      </div>
    </section>
  );
};

export default WhyNoorySection;
