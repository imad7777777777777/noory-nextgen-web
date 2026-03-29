import { motion } from "framer-motion";
import { ShieldCheck, Eye, Sprout, Wind } from "lucide-react";

const outcomes = [
  {
    icon: ShieldCheck,
    title: "Tu dépenses moins sous l'impulsion",
    description: "Tu apprends à reconnaître le déclencheur avant qu'il ne te coûte. Le SOS achat de Noory t'aide à faire une pause au bon moment.",
  },
  {
    icon: Eye,
    title: "Tu vois plus clair avant chaque décision",
    description: "Tu comprends pourquoi tu dépenses, ce qui fuit, et ce qui compte vraiment. L'argent devient lisible.",
  },
  {
    icon: Sprout,
    title: "Ton épargne commence à vouloir dire quelque chose",
    description: "Plus un sacrifice vague. Un choix concret. Tu épargnes pour un projet réel, un coussin, une liberté tangible.",
  },
  {
    icon: Wind,
    title: "Tes projets avancent, avec moins de dispersion",
    description: "Moins de bruit mental. Plus de marge. Tu avances jour après jour vers ce qui compte — sans t'épuiser.",
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
          <p className="text-sm uppercase tracking-widest text-accent mb-4">Ce qui change concrètement</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Après quelques jours,{" "}
            <span className="text-gradient">tu le sens.</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Pas de transformation miracle. Des micro-progrès réels qui changent ta façon de vivre ton argent.
          </p>
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
