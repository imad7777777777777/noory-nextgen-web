import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPhone from "@/assets/hero-phone.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden pt-16">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/8 rounded-full blur-[100px] animate-pulse-glow" />

      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary">
            <Sparkles size={14} />
            Coach financier comportemental
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Vos finances,{" "}
            <span className="text-gradient">vos valeurs,</span>{" "}
            vos objectifs.
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            Noory vous aide à épargner, investir et lancer un business — sans intérêt ni spéculation. Reprenez le contrôle, une micro‑action à la fois.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary group">
              <a href="https://noory-finance-control.lovable.app/register" className="flex items-center gap-2">
                Commencer gratuitement
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
              <a href="https://noory-finance-control.lovable.app/login">Se connecter</a>
            </Button>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-6 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-xs text-muted-foreground font-semibold"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">+325</span> utilisateurs nous font confiance
            </p>
          </div>
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] scale-75" />
            <img
              src={heroPhone}
              alt="Noory App — tableau de bord finances"
              className="relative z-10 w-72 md:w-80 lg:w-96 animate-float drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
