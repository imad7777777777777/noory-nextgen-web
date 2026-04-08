export interface Profile {
  slug: string;
  emoji: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  description: string;
  recognizeSigns: string[];
  nooryOffer: string;
  weeks: { title: string; description: string }[];
}

export const profiles: Profile[] = [
  {
    slug: "depensier-emotionnel",
    emoji: "🛍️",
    name: "Dépensier Émotionnel",
    metaTitle: "Dépensier Émotionnel : comprends ton profil financier | Noory",
    metaDescription: "Tu achètes pour te sentir mieux ? Découvre le profil Dépensier Émotionnel et comment Noory t'aide à reprendre le contrôle en 28 jours.",
    tagline: "Tu achètes pour compenser. Et après, tu regrettes.",
    description: "Le Dépensier Émotionnel utilise l'argent comme régulateur d'émotions. Stress, ennui, tristesse, excitation — chaque émotion forte peut déclencher un achat. Ce n'est pas un manque de volonté, c'est un mécanisme de compensation que ton cerveau a appris.",
    recognizeSigns: [
      "Tu achètes souvent quand tu es stressé·e, triste ou fatigué·e",
      "Tu ressens de la culpabilité après un achat plaisir",
      "Tu as du mal à résister aux promotions et aux offres limitées",
      "Tu fais régulièrement des achats que tu regrettes le lendemain",
      "Tu sais que tu dépenses trop mais tu n'arrives pas à t'arrêter"
    ],
    nooryOffer: "Ton parcours Noory de 28 jours se concentre sur la conscience émotionnelle. Tu apprendras à identifier tes déclencheurs, à créer un espace entre l'envie et l'achat, et à remplacer les achats compensatoires par des alternatives satisfaisantes. Pas de privation — de la clarté.",
    weeks: [
      { title: "Semaine 1 — Observer", description: "Identifier tes schémas de dépense émotionnelle sans les juger. Le SOS achat devient ton allié." },
      { title: "Semaine 2 — Comprendre", description: "Explorer les émotions derrière tes achats. Stress, ennui ou comparaison — tu mets un nom sur tes déclencheurs." },
      { title: "Semaine 3 — Remplacer", description: "Créer des alternatives concrètes pour chaque déclencheur. Des gestes simples qui calment sans coûter." },
      { title: "Semaine 4 — Ancrer", description: "Installer une routine durable. Tu choisis consciemment — et le réflexe d'achat perd son emprise." }
    ]
  },
  {
    slug: "navigateur-a-vue",
    emoji: "🧭",
    name: "Navigateur à Vue",
    metaTitle: "Navigateur à Vue : comprends ton profil financier | Noory",
    metaDescription: "Tu gères ton argent au feeling sans vraiment savoir où tu en es ? Découvre le profil Navigateur à Vue et le parcours Noory en 28 jours.",
    tagline: "Tu navigues à vue. Tu gères au feeling, sans boussole.",
    description: "Le Navigateur à Vue vit dans le flou financier. Pas par choix — par évitement. Regarder ses comptes est anxiogène, alors il préfère ne pas regarder. Le problème : sans visibilité, chaque fin de mois est une surprise.",
    recognizeSigns: [
      "Tu ne sais pas exactement combien tu dépenses chaque mois",
      "Tu évites de regarder ton solde bancaire",
      "Tu es souvent surpris·e par des prélèvements que tu avais oubliés",
      "Tu n'as pas de vision claire de tes finances à 3 mois",
      "Tu te dis souvent 'je verrai bien' en matière d'argent"
    ],
    nooryOffer: "Ton parcours Noory de 28 jours se concentre sur la clarté progressive. On ne te demande pas de tout tracker — on t'aide à retrouver une vision simple et calme de ta situation. Un check-in de 2 minutes par jour, c'est tout.",
    weeks: [
      { title: "Semaine 1 — Voir", description: "Prendre la photo de ta situation actuelle. Sans jugement, sans stress — juste de la clarté." },
      { title: "Semaine 2 — Structurer", description: "Créer 3 enveloppes simples pour tes dépenses. Pas 15 catégories — juste l'essentiel, le plaisir, l'avenir." },
      { title: "Semaine 3 — Ritualiser", description: "Installer le rituel quotidien de 2 minutes. Ton check-in du matin devient une habitude naturelle." },
      { title: "Semaine 4 — Piloter", description: "Tu sais où tu en es à tout moment. Le flou a laissé place à une sérénité nouvelle." }
    ]
  },
  {
    slug: "queteur-de-serenite",
    emoji: "🧘",
    name: "Quêteur de Sérénité",
    metaTitle: "Quêteur de Sérénité : comprends ton profil financier | Noory",
    metaDescription: "Tu stresses constamment pour ton argent même quand tout va bien ? Découvre le profil Quêteur de Sérénité et le parcours Noory en 28 jours.",
    tagline: "Tu veux juste être tranquille. Mais l'argent ne te laisse jamais en paix.",
    description: "Le Quêteur de Sérénité ne cherche pas la richesse — il cherche la paix. Son rapport à l'argent est marqué par l'hyper-vigilance : il vérifie souvent son solde, anticipe les problèmes, et a du mal à profiter même quand tout va bien.",
    recognizeSigns: [
      "Tu vérifies ton solde bancaire plusieurs fois par semaine (voire par jour)",
      "Tu anticipes toujours le pire scénario financier",
      "Tu as du mal à te faire plaisir même quand tu peux te le permettre",
      "Tu stresses à chaque dépense imprévue, même petite",
      "Tu calcules mentalement en permanence si 'ça va passer'"
    ],
    nooryOffer: "Ton parcours Noory de 28 jours se concentre sur la confiance. Tu apprendras à construire un filet de sécurité concret, puis à relâcher progressivement la surveillance. L'objectif : passer de l'anxiété au calme.",
    weeks: [
      { title: "Semaine 1 — Sécuriser", description: "Poser les bases de ton coussin de sécurité. Un objectif concret pour remplacer l'anxiété vague par un plan clair." },
      { title: "Semaine 2 — Permission", description: "Apprendre à te donner des permissions de dépenser. Pas par excès — par équilibre." },
      { title: "Semaine 3 — Relâcher", description: "Réduire la fréquence de vérification. Remplacer le contrôle par la confiance dans ton système." },
      { title: "Semaine 4 — Sérénité", description: "Tu as un plan, un coussin, et un rythme. L'argent n'est plus une source d'anxiété — c'est un outil maîtrisé." }
    ]
  },
  {
    slug: "batisseur-bloque",
    emoji: "🏗️",
    name: "Bâtisseur Bloqué",
    metaTitle: "Bâtisseur Bloqué : comprends ton profil financier | Noory",
    metaDescription: "Tu as des projets ambitieux mais tu n'avances pas ? Découvre le profil Bâtisseur Bloqué et comment Noory t'aide à passer à l'action en 28 jours.",
    tagline: "Tu as des rêves ambitieux. Mais entre le rêve et l'action, il y a un gouffre.",
    description: "Le Bâtisseur Bloqué sait ce qu'il veut : un apport immobilier, un business, un changement de vie. Mais il repousse sans cesse le premier pas. Il planifie, il se renseigne, il attend 'le bon moment'. Et les mois passent.",
    recognizeSigns: [
      "Tu as des projets financiers clairs mais tu ne commences jamais",
      "Tu te dis souvent 'le mois prochain, je m'y mets'",
      "Tu passes du temps à te renseigner sans passer à l'action",
      "Tu sens un décalage entre tes ambitions et ta réalité financière",
      "Tu repousses tes objectifs d'épargne depuis plus de 6 mois"
    ],
    nooryOffer: "Ton parcours Noory de 28 jours se concentre sur le passage à l'action. On décompose tes grands projets en micro-étapes concrètes et réalisables. Chaque jour, un petit geste qui te rapproche de ton objectif.",
    weeks: [
      { title: "Semaine 1 — Clarifier", description: "Transformer ton projet vague en objectif concret. Montant, deadline, et premier geste." },
      { title: "Semaine 2 — Démarrer", description: "Poser le premier euro. Ouvrir le compte. Faire le virement. Briser l'inertie." },
      { title: "Semaine 3 — Accélérer", description: "Trouver des leviers dans tes dépenses actuelles pour alimenter ton projet sans te priver." },
      { title: "Semaine 4 — Pérenniser", description: "Ton projet avance. Tu as un rythme, un plan, et la preuve que tu peux y arriver." }
    ]
  },
  {
    slug: "investisseur-paralyse",
    emoji: "📊",
    name: "Investisseur Paralysé",
    metaTitle: "Investisseur Paralysé : comprends ton profil financier | Noory",
    metaDescription: "Tu veux investir mais la peur te bloque ? Découvre le profil Investisseur Paralysé et comment Noory t'aide à passer à l'action en 28 jours.",
    tagline: "Tu veux investir. Tu te renseignes. Mais tu ne fais jamais le premier pas.",
    description: "L'Investisseur Paralysé accumule les connaissances sans jamais passer à l'acte. Il a lu des dizaines d'articles, comparé des courtiers, regardé des vidéos — mais la peur de mal faire le fige. Plus il apprend, plus il voit de complexité, et plus il recule.",
    recognizeSigns: [
      "Tu te renseignes sur l'investissement depuis des mois (voire des années)",
      "Tu as peur de perdre ton argent en investissant",
      "Tu compares sans cesse les options sans jamais choisir",
      "Tu te sens incompétent·e face au jargon financier",
      "Tu repousses ton premier investissement 'à plus tard'"
    ],
    nooryOffer: "Ton parcours Noory de 28 jours se concentre sur la confiance en action. Pas de cours de finance — un accompagnement émotionnel pour dépasser la peur et poser tes premières bases d'investisseur·se.",
    weeks: [
      { title: "Semaine 1 — Comprendre ta peur", description: "Explorer d'où vient ta paralysie. Peur de perdre, peur de ne pas comprendre, peur du jugement — on met un nom dessus." },
      { title: "Semaine 2 — Poser les bases", description: "Vérifier ton coussin de sécurité, clarifier ton horizon, et choisir ta stratégie simple (DCA)." },
      { title: "Semaine 3 — Premier geste", description: "Investir ton premier montant — même 10€. Casser la barrière psychologique, pas financière." },
      { title: "Semaine 4 — Tenir", description: "Apprendre à ne pas vérifier tous les jours. Installer la patience comme compétence." }
    ]
  }
];
