import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { BASE_URL, LANG, ORG_NOORY, WEBSITE_NOORY } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const APP_STORE =
  "https://apps.apple.com/fr/app/noory-finance-objectifs/id6746418972";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  title: string;
  icon: string;
  items: FaqItem[];
}

const faqCategories: FaqCategory[] = [
  {
    title: "L'app Noory",
    icon: "📱",
    items: [
      {
        question: "C'est quoi Noory exactement ?",
        answer:
          "Noory est une app de coaching financier comportemental. Elle t'aide à comprendre ton rapport à l'argent grâce à la psychologie, et te propose un parcours de 28 jours personnalisé pour transformer tes habitudes financières. Pas de tableurs, pas de jugement — juste un accompagnement doux et concret.",
      },
      {
        question: "Est-ce que Noory est gratuite ?",
        answer:
          "Noory propose un essai gratuit de 7 jours avec accès complet à toutes les fonctionnalités. Après l'essai, un abonnement permet de continuer le parcours. Tu peux annuler à tout moment, sans engagement.",
      },
      {
        question: "Sur quels appareils Noory est disponible ?",
        answer:
          "Noory est actuellement disponible sur iPhone (iOS). Une version Android est en cours de développement.",
      },
      {
        question: "Noory est-elle une app de budget ?",
        answer:
          "Non. Noory n'est pas une app de budget classique. Elle ne te demande pas de noter chaque dépense ou de catégoriser tes transactions. Noory travaille sur ta psychologie financière : comprendre pourquoi tu dépenses, identifier tes déclencheurs émotionnels, et transformer tes habitudes en profondeur.",
      },
      {
        question: "Est-ce que mes données financières sont en sécurité ?",
        answer:
          "Noory ne se connecte à aucun compte bancaire et ne collecte aucune donnée financière sensible. L'app travaille uniquement sur tes comportements, tes émotions et tes objectifs. Ta vie privée est totalement respectée.",
      },
    ],
  },
  {
    title: "Les profils financiers",
    icon: "🧩",
    items: [
      {
        question: "C'est quoi un profil financier ?",
        answer:
          "Un profil financier comportemental décrit ta façon de vivre l'argent au quotidien. Il prend en compte tes émotions, tes croyances et tes habitudes. Noory a identifié 5 profils : le Dépensier Émotionnel, le Navigateur à Vue, le Quêteur de Sérénité, le Bâtisseur Bloqué et l'Investisseur Paralysé. Chaque profil a ses forces et ses fragilités.",
      },
      {
        question: "Comment je découvre mon profil ?",
        answer:
          "Tu peux faire le quiz directement sur notre site — ça prend 2 minutes. Tu recevras ton profil avec une explication détaillée et des conseils adaptés. Dans l'app, le quiz est encore plus complet et débouche sur un parcours personnalisé de 28 jours.",
      },
      {
        question: "Est-ce que mon profil peut changer ?",
        answer:
          "Oui. Ton profil financier n'est pas figé. Il reflète ton rapport actuel à l'argent, qui évolue avec le temps, les expériences et le travail sur soi. Après un parcours Noory, beaucoup d'utilisateurs constatent un changement significatif dans leur façon de vivre l'argent.",
      },
      {
        question: "Est-ce que je peux avoir plusieurs profils ?",
        answer:
          "Oui, c'est même très fréquent. La plupart des gens se reconnaissent dans un profil principal et un profil secondaire. Par exemple, tu peux être un Dépensier Émotionnel avec des traits de Navigateur à Vue. Le quiz identifie ton profil dominant pour te proposer le parcours le plus pertinent.",
      },
      {
        question:
          "Les profils sont-ils basés sur de la vraie recherche ?",
        answer:
          "Oui. Les profils Noory s'appuient sur les travaux en finance comportementale (behavioral finance), notamment ceux de Daniel Kahneman, Richard Thaler et Brad Klontz. Ils intègrent les concepts d'aversion à la perte, de biais cognitifs et de scripts financiers (money scripts) validés par la recherche.",
      },
    ],
  },
  {
    title: "Coaching et méthode",
    icon: "🎯",
    items: [
      {
        question: "Comment fonctionne le parcours de 28 jours ?",
        answer:
          "Chaque jour, Noory te propose une micro-action (2 à 5 minutes) adaptée à ton profil. Ça peut être un exercice de réflexion, un défi concret, une question à te poser avant un achat, ou un moment de prise de conscience. Le parcours est progressif : il commence par la compréhension de ton rapport à l'argent et avance vers des actions concrètes.",
      },
      {
        question: "C'est quoi le SOS Achat ?",
        answer:
          "Le SOS Achat est un outil intégré à l'app que tu peux utiliser quand tu sens une envie d'achat impulsif monter. Il te pose 3 questions simples pour créer une pause entre l'émotion et l'acte d'achat. Ce n'est pas un outil de privation — c'est un espace de réflexion pour que chaque achat devienne un vrai choix.",
      },
      {
        question: "Est-ce que Noory me dit comment investir ?",
        answer:
          "Non. Noory n'est pas un conseiller financier et ne donne pas de recommandations d'investissement. L'app t'aide à comprendre tes blocages émotionnels face à l'investissement et à construire les bases (épargne de sécurité, budget clair) avant de te lancer. Pour l'investissement concret, consulte un professionnel certifié.",
      },
      {
        question:
          "Je n'ai pas de problème d'argent, Noory est quand même pour moi ?",
        answer:
          "Oui. Noory n'est pas réservée aux personnes en difficulté financière. L'app aide aussi les personnes qui gèrent bien leur argent mais vivent du stress, de la culpabilité ou de l'anxiété autour de leurs finances. Mieux comprendre ta psychologie financière peut transformer ton rapport à l'argent, même si tes comptes sont au vert.",
      },
      {
        question: "Quelle est la différence entre Noory et un psy ?",
        answer:
          "Noory n'est pas un substitut à une thérapie. C'est un outil de développement personnel centré sur l'argent. Si tu traverses une période de détresse financière ou psychologique sévère, nous te recommandons de consulter un professionnel de santé. Noory est complémentaire : elle travaille spécifiquement sur tes comportements financiers au quotidien.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    ORG_NOORY,
    WEBSITE_NOORY,
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/faq#faq`,
      url: `${BASE_URL}/faq`,
      name: "FAQ Noory",
      inLanguage: LANG,
      isPartOf: { "@id": `${BASE_URL}/#website` },
      mainEntity: faqCategories.flatMap((cat) =>
        cat.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        }))
      ),
    },
  ],
};

const FaqPage = () => {
  useSEO({
    title: "FAQ — Questions fréquentes sur Noory | Coaching financier comportemental",
    description:
      "Toutes les réponses à tes questions sur Noory : l'app, les profils financiers, le coaching comportemental et la méthode des 28 jours.",
    url: "/faq",
    jsonLd: faqJsonLd,
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "FAQ" },
        ]}
      />
      <main className="pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="text-center mb-14 mt-6">
            <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">
              FAQ
            </p>
            <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground">
              Questions fréquentes
            </h1>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Tout ce que tu veux savoir sur Noory, les profils financiers et
              notre méthode de coaching.
            </p>
          </div>

          {faqCategories.map((category) => (
            <section key={category.title} className="mb-10">
              <h2 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <span>{category.icon}</span>
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {category.items.map((item, idx) => (
                  <AccordionItem key={idx} value={`${category.title}-${idx}`}>
                    <AccordionTrigger className="text-left text-foreground font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          ))}

          <div className="mt-14 text-center bg-card border border-border rounded-2xl p-8">
            <h2 className="text-xl font-display font-bold text-foreground mb-3">
              Tu ne trouves pas ta réponse ?
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Écris-nous sur Instagram{" "}
              <a
                href="https://www.instagram.com/noory_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                @noory_app
              </a>{" "}
              — on répond à tout le monde.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/quiz"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-colors"
              >
                Fais le quiz
              </Link>
              <a
                href={APP_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              >
                Télécharger Noory
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FaqPage;
