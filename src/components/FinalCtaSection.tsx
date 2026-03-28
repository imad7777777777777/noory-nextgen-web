import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCtaSection = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[160px]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto space-y-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Tu n'as pas besoin d'un outil de plus.{" "}
            <span className="text-gradient">Tu as besoin d'une meilleure relation avec ton argent.</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Noory t'accompagne chaque jour. Avec calme. Avec clarté. Avec des actions à ta portée.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary group">
              <a href="https://noory-finance-control.lovable.app/register" className="flex items-center gap-2">
                Essayer Noory gratuitement
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
              <a href="https://noory-finance-control.lovable.app/login">Se connecter</a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground/60">
            Gratuit · Sans engagement · Conçu pour durer
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
