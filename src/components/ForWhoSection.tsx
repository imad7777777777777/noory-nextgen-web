import { motion } from "framer-motion";

const pastelBgs = ["bg-amber-pastel", "bg-emerald-pastel", "bg-rose-pastel", "bg-sky-pastel", "bg-amber-pastel", "bg-emerald-pastel"];

const audiences = [
  { emoji: "🛍️", title: "Je dépense trop quand je suis stressé·e", description: "Fatigue, pression, comparaison — tu achètes pour compenser. Noory t'aide à voir le schéma et à créer un espace entre l'envie et l'achat." },
  { emoji: "🐢", title: "J'ai du mal à épargner régulièrement", description: "Tu veux mettre de côté, mais ça ne dure jamais. Noory transforme l'épargne en habitude douce, concrète, et reliée à un vrai projet." },
  { emoji: "🎯", title: "Je veux avancer sur un projet sans me disperser", description: "Un voyage, un business, un changement de vie. Noory t'aide à structurer tes finances autour de ce qui compte pour toi." },
  { emoji: "🧘", title: "Je veux investir plus calmement", description: "Pas de spéculation. Pas de panique. Noory t'aide à poser les bases d'un investissement aligné avec tes valeurs et ton rythme." },
  { emoji: "😓", title: "Je veux arrêter de culpabiliser avec l'argent", description: "Tu en as marre de la honte et du silence. Noory t'accompagne sans jugement — avec des actions, pas des leçons." },
  { emoji: "💪", title: "Je veux me sentir plus solide, sans devenir obsessionnel", description: "Tu ne veux pas devenir un expert en finance. Tu veux juste te sentir en contrôle, calme, et capable de faire des choix clairs." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 25 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

const ForWhoSection = () => {
  return (
    <section id="pour-qui" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">À qui ça parle</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground">
            Si tu te reconnais ici,{" "}
            <span className="text-gradient">Noory est fait pour toi.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
        >
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              variants={item}
              className={`${pastelBgs[i]} border border-border/50 rounded-2xl p-6 hover:scale-[1.02] transition-transform`}
            >
              <span className="text-3xl mb-4 block">{a.emoji}</span>
              <h3 className="text-base font-bold mb-2 text-foreground">{a.title}</h3>
              <p className="text-sm text-foreground/60 leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ForWhoSection;
