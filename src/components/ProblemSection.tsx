import { motion } from "framer-motion";

const pains = [
  {
    emoji: "😶",
    text: "Tu gagnes ta vie, mais à la fin du mois, tu ne sais jamais vraiment où c'est passé.",
  },
  {
    emoji: "💸",
    text: "Tu achètes quand tu es fatigué·e, stressé·e, quand tu t'ennuies ou quand tu te compares.",
  },
  {
    emoji: "😔",
    text: "Après chaque dépense impulsive, tu culpabilises — mais le schéma se répète.",
  },
  {
    emoji: "🤯",
    text: "Tu as trop de bruit mental autour de l'argent. Ça te prend de l'énergie sans que rien n'avance.",
  },
  {
    emoji: "🔄",
    text: "Tu as essayé des apps de budget. Elles ne tiennent pas, parce qu'elles ne changent pas le comportement.",
  },
  {
    emoji: "🫥",
    text: "Tu voudrais mettre de côté, avancer sur un projet, investir — mais tu ne sais pas par quoi commencer.",
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

const ProblemSection = () => {
  return (
    <section id="pourquoi" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Pourquoi l'argent fait mal</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-6">
            Ce n'est pas un problème de revenu.{" "}
            <span className="text-gradient">C'est un problème de clarté.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            La plupart des difficultés financières ne viennent pas d'un manque d'argent. Elles viennent de décisions prises sous émotion, d'un flou permanent, d'un silence gêné sur le sujet, et de l'absence d'un système simple au quotidien.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {pains.map((p, i) => (
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
          Si tu te reconnais, Noory a été conçu exactement pour ça.
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
