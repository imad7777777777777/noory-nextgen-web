import { Zap, Heart, ShieldAlert, CalendarCheck, Repeat, TrendingUp, PieChart, Wallet, LineChart } from "lucide-react";

const pastelBgs = ["bg-emerald-pastel", "bg-amber-pastel", "bg-sky-pastel", "bg-rose-pastel", "bg-emerald-pastel", "bg-amber-pastel", "bg-sky-pastel", "bg-rose-pastel", "bg-emerald-pastel"];

const features = [
  { icon: PieChart, title: "Budget clair", description: "Ta répartition Besoin / Confort / Plaisir en un coup d'œil, avec ta cible 70-20-10 et tes dépenses du mois." },
  { icon: Wallet, title: "Enveloppes & charges fixes", description: "Loyer, abonnements, assurances, transport… Tu répartis tes charges fixes en quelques secondes." },
  { icon: LineChart, title: "Plan d'investissement", description: "Un objectif chiffré et le montant à placer chaque mois, intérêts composés compris." },
  { icon: Zap, title: "Actions utiles", description: "Chaque jour, une micro-action concrète adaptée à ton focus : épargne, projet, investissement ou habitude." },
  { icon: Repeat, title: "Rituel quotidien", description: "Écrire, réfléchir, agir. Un espace calme pour te recentrer sur ce qui compte financièrement — en moins de 3 minutes." },
  { icon: ShieldAlert, title: "SOS achat", description: "Tu es sur le point de craquer ? Le SOS t'aide à faire une pause, à identifier le déclencheur, et à choisir en conscience." },
  { icon: Heart, title: "Motivations & déclics", description: "Des phrases, des réflexions et des perspectives pour recadrer ta relation à l'argent — sans leçon de morale." },
  { icon: CalendarCheck, title: "Rappel du lendemain", description: "Avant de finir ta journée, pose ton intention pour demain. Un petit geste qui change la dynamique." },
  { icon: TrendingUp, title: "Progression douce", description: "Pas de score agressif. Une progression visible qui reflète ta régularité et tes efforts réels, jour après jour." },
];

const ProductDepthSection = () => {
  return (
    <section id="app" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Ce que tu trouves dans l'app</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground">
            Bien plus qu'un budget.{" "}
            <span className="text-gradient">Un compagnon au quotidien.</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Un budget clair, un rituel simple et un coach qui t'accompagne dans tes décisions — pas juste des chiffres à regarder.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className={`w-10 h-10 rounded-xl ${pastelBgs[i]} flex items-center justify-center mb-4`}>
                <f.icon size={20} className="text-foreground/70" />
              </div>
              <h3 className="text-base font-bold mb-2 text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDepthSection;
