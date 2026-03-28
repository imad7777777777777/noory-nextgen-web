import { motion } from "framer-motion";
import { Target, Compass, BarChart3, Lightbulb, UserCheck, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Objectifs étape par étape",
    description: "Fixez des objectifs concrets et suivez votre progression avec un accompagnement clair.",
  },
  {
    icon: BarChart3,
    title: "Suivi visuel et intuitif",
    description: "Comprenez instantanément l'état de vos finances grâce à des visuels clairs.",
  },
  {
    icon: Compass,
    title: "Opportunités personnalisées",
    description: "Découvrez des idées d'épargne, business et investissement alignées avec vos valeurs.",
  },
  {
    icon: Lightbulb,
    title: "Idées concrètes",
    description: "Des suggestions impactantes pour mieux gérer votre argent au quotidien.",
  },
  {
    icon: UserCheck,
    title: "Conseils sur mesure",
    description: "Des recommandations parfaitement adaptées à votre profil et vos objectifs.",
  },
  {
    icon: ShieldCheck,
    title: "0% Riba, 100% transparent",
    description: "Une gestion financière respectueuse de vos valeurs, sans intérêt ni spéculation.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-4">Fonctionnalités</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Tout ce qu'il faut pour{" "}
            <span className="text-gradient">reprendre le contrôle</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group bg-card-gradient border border-border rounded-xl p-6 hover:border-primary/40 transition-colors shadow-card"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <f.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
