import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPhone from "@/assets/hero-phone.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden pt-20 pb-16">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[160px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-accent/6 rounded-full blur-[120px] animate-pulse-glow" />

      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8 max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary/90">
            Coach comportemental · Micro-actions · Clarté
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight">
            Une relation plus calme{" "}
            <span className="text-gradient">avec ton argent.</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Noory t'aide à faire moins d'erreurs émotionnelles avec l'argent. Des micro-actions quotidiennes pour épargner, avancer sur tes projets, et reprendre le contrôle — sans pression, sans jugement.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary group">
              <a href="https://noory-finance-control.lovable.app/register" className="flex items-center gap-2">
                Commencer gratuitement
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
              <a href="https://noory-finance-control.lovable.app/login">J'ai déjà un compte</a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground/70 pt-2">
            Gratuit · Sans carte bancaire · Pensé pour la vraie vie
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/15 rounded-full blur-[100px] scale-75" />
            <img
              src={heroPhone}
              alt="Noory — ton coach argent au quotidien"
              className="relative z-10 w-64 md:w-72 lg:w-80 animate-float drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
