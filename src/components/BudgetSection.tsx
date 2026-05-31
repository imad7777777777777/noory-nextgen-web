import { PieChart, Wallet, TrendingUp, HeartHandshake } from "lucide-react";
import IPhoneFrame from "@/components/IPhoneFrame";
import AppStoreBadge from "@/components/AppStoreBadge";
// TODO(Imad): screen-budget.webp est un PLACEHOLDER (copie de l'écran d'accueil).
// Remplacer par une vraie capture du budget (vue ACCUEIL : revenus/charges/dépenses
// + donut Besoin/Confort/Plaisir) AVANT de déployer en prod.
import screenBudget from "@/assets/screen-budget.webp";

const points = [
  {
    icon: PieChart,
    title: "Une répartition automatique 70 / 20 / 10",
    description: "Besoin, Confort, Plaisir : Noory répartit ton argent et te montre, d'un coup d'œil, où tu en es face à ta cible — sans saisie interminable.",
    bg: "bg-emerald-pastel",
  },
  {
    icon: Wallet,
    title: "Tes charges fixes en enveloppes",
    description: "Loyer, abonnements, assurances, transport… Tu répartis tes charges fixes en quelques secondes et tu vois ce qu'il te reste vraiment à vivre.",
    bg: "bg-amber-pastel",
  },
  {
    icon: TrendingUp,
    title: "Un vrai plan pour tes objectifs",
    description: "Fixe un objectif — un coussin, un projet, 100 000 € — et Noory calcule combien placer chaque mois, intérêts composés compris.",
    bg: "bg-sky-pastel",
  },
  {
    icon: HeartHandshake,
    title: "Des alertes douces, zéro culpabilité",
    description: "« Tes besoins prennent beaucoup de place — c'est normal certains mois. » Des messages qui t'orientent, jamais qui te jugent.",
    bg: "bg-rose-pastel",
  },
];

const BudgetSection = () => {
  return (
    <section id="budget" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Ton argent, au clair</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground">
            Un budget qui pense à ta place.{" "}
            <span className="text-gradient">Pas un tableur.</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Aussi central que ton rituel quotidien : Noory répartit ton argent, suit tes dépenses et te montre exactement où tu en es — calmement, sans jargon.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          <div className="flex justify-center lg:order-1 order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-pastel rounded-full blur-[80px] scale-90 opacity-50" />
              <IPhoneFrame className="relative z-10 w-56 md:w-64 lg:w-72">
                <img
                  src={screenBudget}
                  alt="Noory — budget comportemental : répartition Besoin, Confort, Plaisir et suivi des dépenses du mois"
                  className="w-full"
                />
              </IPhoneFrame>
            </div>
          </div>

          <div className="space-y-8 lg:order-2 order-1">
            {points.map((p) => (
              <div key={p.title} className="flex gap-5">
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${p.bg} flex items-center justify-center`}>
                  <p.icon size={20} className="text-foreground/70" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1.5 text-foreground">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}

            <AppStoreBadge className="mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetSection;
