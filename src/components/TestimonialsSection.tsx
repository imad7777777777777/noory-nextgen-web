const testimonials = [
  {
    name: "Sarah",
    age: "29 ans",
    quote: "J'ai arrêté d'acheter par ennui. En 2 semaines, j'ai mis 200€ de côté sans y penser.",
    emoji: "🌿",
  },
  {
    name: "Karim",
    age: "34 ans",
    quote: "Je repoussais mon investissement depuis 2 ans. Noory m'a aidé à faire le premier pas.",
    emoji: "🚀",
  },
  {
    name: "Léa",
    age: "26 ans",
    quote: "Pour la première fois, je ne culpabilise plus quand je me fais plaisir.",
    emoji: "☀️",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Témoignages</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground">
            Ils ont commencé avec{" "}
            <span className="text-gradient">Noory.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-border rounded-2xl p-7 flex flex-col"
            >
              <span className="text-3xl mb-4">{t.emoji}</span>
              <p className="text-foreground/80 leading-relaxed mb-6 flex-1 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.age}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
