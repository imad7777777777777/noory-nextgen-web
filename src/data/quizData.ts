export type QuizProfile = "prudent" | "explorateur" | "zen" | "ambitieux" | "stratege";

export interface QuizOption {
  label: string;
  profile: QuizProfile;
}

export interface QuizQuestion {
  question: string;
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Quand tu reçois ton salaire, ta première réaction c'est...",
    options: [
      { label: "Soulagement — je peux respirer ce mois-ci", profile: "prudent" },
      { label: "Je sais déjà qu'il ne restera pas grand-chose", profile: "explorateur" },
      { label: "Je fais mes virements épargne tout de suite", profile: "zen" },
      { label: "Je pense à mes projets mais je ne fais rien de concret", profile: "ambitieux" },
    ],
  },
  {
    question: "Face à une dépense imprévue de 300€...",
    options: [
      { label: "Je stresse, je ne sais pas où trouver l'argent", profile: "prudent" },
      { label: "Je la fais sans réfléchir, je verrai après", profile: "explorateur" },
      { label: "J'ai un coussin pour ça, mais ça m'embête quand même", profile: "zen" },
      { label: "Ça me rappelle que je devrais mieux m'organiser", profile: "ambitieux" },
    ],
  },
  {
    question: "Ton rapport à l'investissement...",
    options: [
      { label: "J'y connais rien et ça me fait peur", profile: "stratege" },
      { label: "J'aimerais mais je repousse toujours", profile: "stratege" },
      { label: "Pas une priorité, je veux d'abord stabiliser", profile: "prudent" },
      { label: "J'ai des idées mais pas de plan concret", profile: "ambitieux" },
    ],
  },
  {
    question: "Après un achat plaisir, tu ressens...",
    options: [
      { label: "De la culpabilité", profile: "explorateur" },
      { label: "Rien de spécial", profile: "zen" },
      { label: "De l'inquiétude pour la suite du mois", profile: "prudent" },
      { label: "De la frustration, j'aurais pu mettre ça ailleurs", profile: "ambitieux" },
    ],
  },
  {
    question: "Ta plus grande frustration avec l'argent...",
    options: [
      { label: "Le flou — je ne sais jamais où j'en suis", profile: "prudent" },
      { label: "Mes émotions qui prennent le dessus", profile: "explorateur" },
      { label: "Mes projets qui n'avancent pas", profile: "ambitieux" },
      { label: "La peur de mal faire avec mes placements", profile: "stratege" },
    ],
  },
];

export const profileResults: Record<QuizProfile, { emoji: string; name: string; slug: string; description: string }> = {
  prudent: {
    emoji: "🧘",
    name: "Quêteur de Sérénité",
    slug: "queteur-de-serenite",
    description: "Tu cherches la paix plus que la richesse. Ton rapport à l'argent est marqué par l'anxiété et l'hyper-vigilance. Noory t'aide à construire un filet de sécurité concret et à relâcher la pression.",
  },
  explorateur: {
    emoji: "🛍️",
    name: "Dépensier Émotionnel",
    slug: "depensier-emotionnel",
    description: "Tu utilises l'argent pour gérer tes émotions. Stress, ennui, comparaison — chaque émotion forte peut déclencher un achat. Noory t'aide à identifier tes déclencheurs et à créer des alternatives.",
  },
  zen: {
    emoji: "🧭",
    name: "Navigateur à Vue",
    slug: "navigateur-a-vue",
    description: "Tu gères au feeling, sans vraiment savoir où tu en es. Pas par irresponsabilité — par évitement. Noory t'aide à retrouver de la clarté sans tomber dans l'obsession du contrôle.",
  },
  ambitieux: {
    emoji: "🏗️",
    name: "Bâtisseur Bloqué",
    slug: "batisseur-bloque",
    description: "Tu as des projets ambitieux mais tu n'arrives pas à passer à l'action. Noory t'aide à transformer tes rêves en micro-étapes concrètes et à briser l'inertie.",
  },
  stratege: {
    emoji: "📊",
    name: "Investisseur Paralysé",
    slug: "investisseur-paralyse",
    description: "Tu veux investir mais la peur te bloque. Tu accumules l'information sans jamais agir. Noory t'accompagne émotionnellement pour faire ton premier pas.",
  },
};
