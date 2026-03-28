import { motion } from "framer-motion";
import { Brain, Eye, Sprout, Wind } from "lucide-react";

const outcomes = [
  {
    icon: Brain,
    title: "Moins de décisions impulsives",
    description: "Tu apprends à reconnaître le moment où l'émotion prend le dessus. Tu gagnes un temps de pause avant chaque dépense inutile.",
  },
  {
    icon: Eye,
    title: "Plus de clarté avant de dépenser",
    description: "Tu sais pourquoi tu dépenses. Tu vois ce qui fuit. Tu comprends tes schémas. L'argent devient lisible.",
  },
  {
    icon: Sprout,
    title: "Une épargne qui a du sens",
    description: "Pas un sacrifice. Un choix. Tu épargnes pour quelque chose de concret — un projet, un coussin, une liberté.",
  },
  {
    icon: Wind,
    title: "Moins de bruit mental",
    description: "L'argent occupe moins d'espace dans ta tête. Tu te sens plus léger·e, plus en contrôle, plus calme face aux imprévus.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TransformationSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[180px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-4">Ce qui change</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Ce que tu ressens{" "}
            <span className="text-gradient">après quelques semaines.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {outcomes.map((o) => (
            <motion.div
              key={o.title}
              variants={item}
              className="group bg-card-gradient border border-border rounded-2xl p-7 hover:border-primary/30 transition-all shadow-card"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <o.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-3">{o.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{o.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TransformationSection;
