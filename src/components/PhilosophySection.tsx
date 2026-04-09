const values = [
  { emoji: "🌱", title: "Pensé pour la vraie vie", text: "Pas pour un monde idéal. Pour quelqu'un qui bosse, qui doute, qui a pas toujours la motivation. Noory s'adapte à ça." },
  { emoji: "🧩", title: "Des micro-progrès, pas des miracles", text: "On ne te promet pas de richesse rapide. On t'aide à faire un petit pas utile par jour. C'est comme ça que ça tient." },
  { emoji: "🤝", title: "Sans honte, sans pression", text: "Noory ne te juge jamais. Pas de culpabilité, pas de score humiliant. Un accompagnement humain, à ton rythme." },
  { emoji: "🧭", title: "Aligné avec tes valeurs", text: "Pas de spéculation, pas de promesses toxiques, pas de finance agressive. Une approche éthique, sobre, ancrée dans le réel." },
];

const PhilosophySection = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl relative z-10">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Notre philosophie</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground">
            Pas pour devenir riche vite.{" "}
            <span className="text-gradient">Pour devenir plus solide.</span>
          </h2>
        </div>

        <div className="space-y-5">
          {values.map((v, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border"
            >
              <span className="text-2xl flex-shrink-0">{v.emoji}</span>
              <div>
                <h3 className="font-bold mb-1 text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
