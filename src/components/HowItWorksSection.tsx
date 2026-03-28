import { motion } from "framer-motion";
import heroPhone from "@/assets/hero-phone.png";

const steps = [
  {
    number: "01",
    title: "Choisis ton focus",
    description: "Épargne, projet, investissement ou habitude. Tu définis ce qui compte pour toi maintenant.",
  },
  {
    number: "02",
    title: "Reçois une micro-action utile",
    description: "Chaque jour, une action concrète adaptée à ta situation. Pas de théorie. Du concret.",
  },
  {
    number: "03",
    title: "Réfléchis, note, agis",
    description: "Le rituel Noory t'aide à poser tes pensées, clarifier tes envies, et agir avec intention.",
  },
  {
    number: "04",
    title: "Construis des habitudes calmes",
    description: "Jour après jour, tu développes une discipline douce. Pas de violence, pas de culpabilité. Du progrès réel.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="methode" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-4">La méthode</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Simple. Quotidien.{" "}
            <span className="text-gradient">Pensé pour tenir.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Steps */}
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
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary">{step.number}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1.5">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-[80px] scale-90" />
              <img
                src={heroPhone}
                alt="Noory — micro-actions quotidiennes"
                className="relative z-10 w-56 md:w-64 lg:w-72 drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
