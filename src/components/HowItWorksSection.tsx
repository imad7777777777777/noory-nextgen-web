import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import IPhoneFrame from "@/components/IPhoneFrame";
import screenRitual from "@/assets/screen-ritual.webp";

const APP_STORE = "https://apps.apple.com/fr/app/noory-finance-objectifs/id6746418972";

const steps = [
  { number: "01", title: "Tu choisis ton cap", description: "Épargne, projet, investissement, habitude. Tu définis ce qui compte pour toi maintenant — pas un objectif abstrait." },
  { number: "02", title: "Noory te propose une action ou un déclic utile", description: "Chaque jour, une micro-action concrète ou une motivation adaptée à ton focus. Pas de théorie. Du concret." },
  { number: "03", title: "Tu écris, tu agis ou tu reportes intelligemment", description: "Le rituel Noory t'aide à poser tes pensées, clarifier tes décisions, et agir avec intention — ou reporter sans culpabilité." },
  { number: "04", title: "Tu construis une discipline plus calme", description: "Jour après jour, tu développes des habitudes financières qui tiennent. Pas de violence. Du progrès réel." },
];

const HowItWorksSection = () => {
  return (
    <section id="methode" className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Comment ça marche</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground">
            Un rituel quotidien.{" "}
            <span className="text-gradient">Pensé pour tenir.</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Pas un tableau de bord que tu ouvres une fois et que tu oublies. Un compagnon que tu retrouves chaque jour.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-pastel flex items-center justify-center">
                  <span className="text-sm font-bold text-foreground/70">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1.5 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}

            <Button size="lg" className="rounded-full group mt-4" asChild>
              <a href={APP_STORE} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Essayer gratuitement
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-amber-pastel rounded-full blur-[80px] scale-90 opacity-50" />
              <IPhoneFrame className="relative z-10 w-56 md:w-64 lg:w-72">
                <img
                  src={screenRitual}
                  alt="Noory — rituel quotidien"
                  className="w-full"
                />
              </IPhoneFrame>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
