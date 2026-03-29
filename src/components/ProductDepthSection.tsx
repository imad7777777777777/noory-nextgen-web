import { motion } from "framer-motion";
import { Zap, Heart, ShieldAlert, CalendarCheck, Repeat, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Actions utiles",
    description: "Chaque jour, une micro-action concrète adaptée à ton focus : épargne, projet, investissement ou habitude.",
  },
  {
    icon: Heart,
    title: "Motivations & déclics",
    description: "Des phrases, des réflexions et des perspectives pour recadrer ta relation à l'argent — sans leçon de morale.",
  },
  {
    icon: ShieldAlert,
    title: "SOS achat",
    description: "Tu es sur le point de craquer ? Le SOS t'aide à faire une pause, à identifier le déclencheur, et à choisir en conscience.",
  },
  {
    icon: CalendarCheck,
    title: "Rappel du lendemain",
    description: "Avant de finir ta journée, pose ton intention pour demain. Un petit geste qui change la dynamique.",
  },
  {
    icon: Repeat,
    title: "Rituel quotidien",
    description: "Écrire, réfléchir, agir. Un espace calme pour te recentrer sur ce qui compte financièrement — en moins de 3 minutes.",
  },
  {
    icon: TrendingUp,
    title: "Progression douce",
    description: "Pas de score agressif. Une progression visible qui reflète ta régularité et tes efforts réels, jour après jour.",
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

const ProductDepthSection = () => {
  return (
    <section id="app" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-4">Ce que tu trouves dans l'app</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Un compagnon quotidien.{" "}
            <span className="text-gradient">Pas un tableau de bord.</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Noory ne te montre pas des graphiques. Il t'accompagne dans tes décisions, tes doutes et tes progrès.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="bg-card/60 border border-border rounded-2xl p-6 hover:border-primary/25 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <f.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-base font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductDepthSection;
