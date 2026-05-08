import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface HomepageFaqItem {
  question: string;
  answer: string;
}

export const homepageFaq: HomepageFaqItem[] = [
  {
    question: "C'est quoi Noory exactement ?",
    answer:
      "Noory est une app iOS de coaching financier comportemental. Elle identifie ton profil psychologique d'argent en 2 minutes, puis t'accompagne sur 28 jours avec des micro-actions quotidiennes (2 à 3 minutes par jour) adaptées à ton profil. L'objectif n'est pas de te donner des conseils en investissement, mais de transformer ton rapport à l'argent — sans culpabilité, sans jargon.",
  },
  {
    question: "Est-ce que Noory est gratuit ?",
    answer:
      "La première semaine est entièrement gratuite, sans carte bancaire requise. Au-delà, l'abonnement premium est à 4,99 € par mois (sans engagement, résiliable à tout moment). Cela couvre l'intégralité du parcours de 28 jours et l'accès continu aux outils.",
  },
  {
    question: "Combien de temps dure le programme ?",
    answer:
      "Le parcours principal s'étend sur 28 jours, avec 2 à 3 minutes d'engagement par jour. Cette durée n'est pas arbitraire : elle correspond au temps moyen nécessaire pour ancrer une nouvelle habitude (étude Lally et al., University College London, 2010). Une fois le parcours terminé, tu continues à utiliser les outils à ton rythme.",
  },
  {
    question: "Est-ce que Noory donne des conseils en investissement ?",
    answer:
      "Non. Noory est explicitement un outil de coaching comportemental, pas un service financier réglementé. Nous ne fournissons pas de conseil en investissement au sens de l'article L. 541-1 du Code monétaire et financier. Pour toute décision financière importante, consulte un conseiller habilité (CIF, CGP).",
  },
  {
    question: "Comment Noory protège mes données ?",
    answer:
      "Tes données restent privées et hébergées en Europe (RGPD). Noory ne se connecte pas à ton compte bancaire et ne lit pas tes transactions — tu choisis ce que tu partages. Notre politique de confidentialité détaille précisément ce qui est collecté, pourquoi, et comment c'est protégé.",
  },
  {
    question: "Noory est disponible sur Android ?",
    answer:
      "Pas encore. Noory est actuellement disponible uniquement sur iPhone (iOS 15 et plus). Une version Android est prévue, mais nous n'avons pas encore communiqué de date. Inscris-toi à notre newsletter ou suis-nous sur Instagram pour être prévenu·e dès la sortie.",
  },
];

const HomepageFaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-24 md:py-32 bg-secondary/40"
      aria-labelledby="homepage-faq-heading"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">
            FAQ
          </p>
          <h2
            id="homepage-faq-heading"
            className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground"
          >
            Les questions qu'on nous pose le plus
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Tout ce que tu veux savoir avant de te lancer — sans détour.
          </p>
        </div>

        <div className="space-y-3">
          {homepageFaq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-foreground text-base md:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-muted-foreground flex-shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-foreground/80 leading-relaxed text-sm md:text-base">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomepageFaqSection;
