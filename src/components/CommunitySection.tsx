import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "+325", label: "utilisateurs intéressés" },
  { value: "+350", label: "idées analysées" },
  { value: "+20", label: "projets accompagnés" },
  { value: "100%", label: "sans intérêt" },
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-4">Communauté</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
            Rejoignez une communauté engagée vers une{" "}
            <span className="text-gradient">finance plus saine</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Échangez avec des centaines d'utilisateurs partageant votre vision. Épargnez, entreprenez et investissez ensemble.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass rounded-xl p-6 text-center"
            >
              <p className="text-3xl md:text-4xl font-extrabold text-gradient mb-1">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary group">
            <a href="https://noory-finance-control.lovable.app/register" className="flex items-center gap-2">
              Rejoindre la communauté
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
