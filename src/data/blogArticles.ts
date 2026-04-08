export interface BlogArticle {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  date: string;
  readTime: string;
  intro: string;
  keywords: string[];
  content: string;
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "depenses-impulsives-comment-arreter",
    title: "Dépenses impulsives : comment arrêter le cycle sans se priver",
    metaTitle: "Dépenses impulsives : comment arrêter le cycle sans se priver | Noory",
    metaDescription: "Découvre pourquoi tu achètes sous émotion et comment briser le cycle des achats compulsifs avec la méthode Noory. Sans privation, sans culpabilité.",
    date: "2025-03-15",
    readTime: "6 min",
    intro: "Tu connais cette sensation : tu achètes quelque chose dont tu n'avais pas besoin, et 10 minutes après, tu regrettes. Voici comment en sortir.",
    keywords: ["dépenses impulsives", "achats compulsifs", "arrêter de dépenser"],
    content: `## Pourquoi on achète sous émotion

On aimerait croire que chaque achat est un choix rationnel. Mais la réalité est bien différente. La majorité de nos dépenses impulsives ne viennent pas d'un besoin réel — elles viennent d'une émotion qu'on essaie de calmer.

Tu as eu une journée difficile au travail. Tu scrolles sur ton téléphone. Tu vois une pub. Tu cliques. Tu achètes. Pendant un instant, tu te sens mieux. Et puis la culpabilité arrive. Ce schéma, des millions de personnes le vivent chaque semaine. Et ce n'est pas un manque de volonté — c'est un mécanisme émotionnel profond.

La recherche en finance comportementale montre que nos décisions financières sont pilotées par notre état émotionnel bien plus que par notre logique. Quand on est fatigué, stressé ou en manque d'estime, le cerveau cherche une récompense rapide. L'achat en est une.

## Les 3 déclencheurs principaux

### Le stress

C'est le déclencheur le plus fréquent. Quand on est sous pression — au travail, dans sa vie personnelle, dans ses finances — le cerveau cherche un soulagement immédiat. L'achat crée une micro-dose de dopamine qui procure un sentiment éphémère de contrôle. "Au moins ça, je l'ai choisi."

Le problème, c'est que ce soulagement dure quelques minutes. Et il est souvent suivi d'un stress supplémentaire : celui d'avoir dépensé.

### L'ennui

On en parle moins, mais l'ennui est un déclencheur puissant. Quand tu n'as rien à faire, quand tu te sens vide, quand ta journée manque de stimulation — ton cerveau cherche quelque chose à faire. Et acheter en ligne, c'est facile, accessible, et immédiat.

Les études montrent que les achats impulsifs en ligne augmentent de 40 % les soirs de semaine entre 20h et 23h. Ce n'est pas un hasard. C'est le moment où l'ennui est le plus présent.

### La comparaison sociale

Les réseaux sociaux amplifient un phénomène vieux comme le monde : se comparer aux autres. Quand tu vois quelqu'un afficher un style de vie, un vêtement, un voyage — ton cerveau interprète ça comme un signal de "retard". Et pour compenser, tu achètes.

Ce n'est même pas conscient. C'est une réponse automatique. Et les algorithmes sont conçus pour te pousser vers l'achat juste après t'avoir montré quelque chose qui te fait te sentir en décalage.

## La technique de la pause : le SOS achat

Chez Noory, on a créé un outil simple mais puissant : le **SOS achat**. C'est un bouton que tu presses quand tu sens l'envie monter. Il ne te dit pas "n'achète pas". Il te pose 3 questions :

1. **De quoi j'ai vraiment besoin là, maintenant ?** (Souvent la réponse n'est pas l'objet, mais du repos, de la connexion, ou un moment de calme.)
2. **Est-ce que cet achat me rapproche de mon objectif du mois ?** (Ça remet la perspective.)
3. **Est-ce que dans 48h, j'y penserai encore ?** (La majorité des envies disparaissent en 24 à 48h.)

Ce n'est pas de la privation. C'est une pause. Un espace entre l'envie et l'acte. Et cet espace, c'est là que la liberté commence.

## Remplacer sans se priver

L'erreur classique des méthodes anti-dépenses, c'est de vouloir tout couper. "Arrête d'acheter des cafés dehors." "Annule tous tes abonnements." "Ne sors plus le week-end."

Ça ne marche pas. Parce que tu ne traites pas la cause — tu supprimes juste le symptôme. Et le symptôme revient toujours, sous une autre forme.

L'approche Noory est différente. On ne t'enlève rien. On te propose des **remplacements** :

- Au lieu d'acheter sous stress → un exercice de respiration de 2 minutes dans l'app
- Au lieu d'acheter par ennui → un défi du jour qui stimule ton cerveau autrement
- Au lieu d'acheter par comparaison → un rappel de tes propres progrès (et ils sont réels)

Le but n'est pas de devenir ascète. C'est de retrouver du choix. De passer de "je subis" à "je décide".

## Le changement commence petit

Tu n'as pas besoin de tout changer demain. Tu as besoin d'un premier geste. Ouvre Noory, fais le quiz de profil, et découvre ce qui déclenche vraiment tes achats impulsifs. En 2 minutes, tu auras une photo claire de ton rapport à l'argent.

Et à partir de là, Noory t'accompagne — un jour à la fois, un choix à la fois.

---

*Noory est une app de coaching financier comportemental. 28 jours pour transformer ton rapport à l'argent, sans culpabilité. [Disponible gratuitement sur iPhone.](/quiz)*`
  },
  {
    slug: "gerer-son-argent-sans-stress",
    title: "Gérer son argent sans stress : 5 habitudes douces qui changent tout",
    metaTitle: "Gérer son argent sans stress : 5 habitudes douces | Noory",
    metaDescription: "Découvre 5 habitudes simples pour gérer ton argent sans pression. Pas de budget strict, pas de privation — juste des gestes qui tiennent dans la durée.",
    date: "2025-03-08",
    readTime: "7 min",
    intro: "Les budgets classiques ne marchent pas. Voici 5 habitudes douces, réalistes et durables pour enfin te sentir calme avec ton argent.",
    keywords: ["gérer son argent", "gestion budget simple", "finances personnelles"],
    content: `## Pourquoi les budgets classiques échouent

Soyons honnêtes : combien de fois tu as téléchargé une app de budget, rempli tes catégories pendant 3 jours, puis abandonné ? Tu n'es pas seul·e. Les études montrent que 73 % des personnes qui commencent un budget strict l'abandonnent en moins de 2 semaines.

Pourquoi ? Parce que les budgets classiques reposent sur un principe qui ne fonctionne pas : le contrôle total. Tout noter, tout catégoriser, tout optimiser. C'est épuisant. Et surtout, ça crée de la culpabilité à chaque écart. Tu dépasses ton budget restaurant ? Tu te sens nul·le. Tu craques pour un plaisir ? Tu culpabilises.

Le problème n'est pas toi. C'est la méthode. La gestion financière qui dure dans le temps ne passe pas par le contrôle — elle passe par les **habitudes**. Des petits gestes réguliers qui deviennent automatiques.

## Habitude 1 : Le check-in de 2 minutes

Chaque matin, prends 2 minutes — pas plus — pour regarder ta situation. Pas pour calculer, pas pour analyser, pas pour stresser. Juste pour observer.

"Où j'en suis aujourd'hui ?"

C'est ce que propose le **rituel du matin** dans Noory. Tu ouvres l'app, tu vois ta situation, et tu réponds à une seule question : "Comment je me sens par rapport à mon argent aujourd'hui ?" Ce simple acte de conscience change tout. Parce que la plupart des dégâts financiers viennent du flou. On ne sait pas où on en est, alors on évite de regarder. Et quand on évite, on dépense mal.

Le check-in de 2 minutes, c'est l'antidote au flou.

## Habitude 2 : La règle des 24h

Avant tout achat non-essentiel de plus de 30€, attends 24 heures. C'est tout. Tu ne dis pas non, tu dis "demain".

Cette technique est redoutablement efficace. Les recherches montrent que 70 % des envies d'achat disparaissent en 24h. L'émotion passe, la raison revient, et tu réalises souvent que tu n'en avais pas vraiment besoin.

Noory intègre cette logique avec le **SOS achat** : au lieu de lutter contre l'envie, tu crées un espace. Et dans cet espace, tu retrouves ta capacité à choisir.

## Habitude 3 : L'épargne automatique mini

Oublie les virements de 300€ le 1er du mois. Si ça te stresse, c'est contre-productif. Commence avec un montant ridiculement petit : 5€, 10€, 20€. L'important n'est pas le montant — c'est la régularité.

Programme un virement automatique le jour de ton salaire. Même 10€ par mois, c'est 120€ par an. Ça paraît petit, mais c'est infiniment plus que 0€. Et surtout, ça installe une **identité** : tu deviens quelqu'un qui épargne. Pas beaucoup, mais régulièrement. Et ça change la façon dont tu te perçois.

C'est exactement l'approche de Noory : des objectifs d'épargne concrets, liés à un vrai projet, avec des montants que tu choisis.

## Habitude 4 : Le bilan hebdo sans jugement

Chaque dimanche (ou le jour de ton choix), prends 5 minutes pour faire un petit bilan de ta semaine financière. Pas un audit. Pas un tableau Excel. Juste une question :

"Cette semaine, est-ce que mes dépenses reflètent ce qui compte pour moi ?"

Si oui, bravo. Si non, pas de drame — tu ajustes pour la semaine suivante. Le bilan hebdo, c'est un moment de **conscience**, pas de punition. C'est comme peser un plat quand tu cuisines : tu corriges l'assaisonnement, tu ne jettes pas le plat.

Noory t'envoie un rappel doux chaque semaine pour ce bilan. Pas un rapport de 15 pages — juste une invitation à regarder.

## Habitude 5 : Le rituel du matin financier

Cette habitude est la plus puissante parce qu'elle combine toutes les autres. Le matin, avant de commencer ta journée :

1. Tu ouvres Noory (30 secondes)
2. Tu vois ta micro-action du jour (30 secondes)
3. Tu la fais ou tu la repousses sans culpabilité (30 secondes)

Total : 90 secondes. C'est moins que le temps de faire couler un café.

Ce rituel crée une **ancre**. Il rattache la gestion de ton argent à un moment précis de ta journée. Et comme toute habitude, plus tu le fais, plus ça devient automatique.

Au bout de 28 jours avec Noory, ce rituel est installé. Tu ne le fais plus par effort — tu le fais parce que c'est devenu une partie de ta routine, comme te brosser les dents.

## Commence par une seule habitude

Tu n'as pas besoin d'adopter les 5 en même temps. Choisis celle qui te parle le plus, et tiens-la pendant 7 jours. Puis ajoute la suivante.

Noory est conçu exactement pour ça : t'accompagner un geste à la fois, un jour à la fois.

---

*Essaie Noory gratuitement pendant 7 jours. Coaching financier personnalisé, zéro jugement. [Télécharge sur iPhone.](/quiz)*`
  },
  {
    slug: "profil-financier-psychologie-argent",
    title: "Quel est ton profil financier ? Ce que ta psychologie dit de ton rapport à l'argent",
    metaTitle: "Profil financier : que dit ta psychologie de ton rapport à l'argent ? | Noory",
    metaDescription: "Découvre les 5 profils financiers comportementaux et comprends enfin pourquoi tu gères ton argent comme tu le fais. Quiz gratuit dans l'app Noory.",
    date: "2025-02-28",
    readTime: "8 min",
    intro: "On n'a pas tous le même rapport à l'argent. Découvre les 5 profils financiers comportementaux et ce qu'ils révèlent de ta psychologie.",
    keywords: ["profil financier", "psychologie argent", "relation à l'argent", "finance comportementale"],
    content: `## La finance comportementale : pourquoi ta psychologie compte plus que ton budget

Pendant longtemps, on a cru que bien gérer son argent était une question de connaissances. "Si tu savais comment fonctionne un budget, tu n'aurais pas de problèmes d'argent." C'est faux.

La recherche en finance comportementale — popularisée par le prix Nobel Daniel Kahneman — montre que nos décisions financières sont pilotées par nos émotions, nos croyances, nos peurs et notre histoire personnelle. Pas par notre logique.

C'est pour ça que des personnes très intelligentes peuvent avoir un rapport catastrophique à l'argent. Et que des personnes avec peu de revenus peuvent être remarquablement sereines. La différence n'est pas dans le compte en banque — elle est dans la psychologie.

Chez Noory, on a identifié 5 profils financiers comportementaux. Chacun correspond à une façon spécifique de vivre l'argent, avec ses forces et ses fragilités. Il n'y a pas de "bon" ou "mauvais" profil. Il y a le tien — et le comprendre, c'est le premier pas pour avancer.

## Les 5 profils financiers

### 🧘 Le Quêteur de Sérénité

**Sa devise :** "Je veux juste être tranquille."

Le Quêteur de Sérénité ne cherche pas la richesse. Il cherche la paix. Son rapport à l'argent est marqué par l'anxiété : il vérifie souvent son solde, il anticipe les problèmes, il a du mal à profiter de ce qu'il a parce qu'il pense toujours à ce qui pourrait arriver.

**Ses forces :** prudent, responsable, rarement dans l'excès.
**Ses fragilités :** hyper-vigilance, difficulté à se faire plaisir, stress constant même quand tout va bien.

Le parcours Noory pour ce profil se concentre sur la **confiance** : apprendre à construire un filet de sécurité, puis à relâcher la surveillance.

[→ Découvre le profil complet du Quêteur de Sérénité](/profil/queteur-de-serenite)

### 🧭 Le Navigateur à Vue

**Sa devise :** "Je gère au feeling."

Le Navigateur à Vue vit dans le flou. Il ne sait pas exactement combien il gagne, combien il dépense, combien il lui reste. Il n'est pas irresponsable — il évite juste de regarder. Parce que regarder, c'est anxiogène.

**Ses forces :** adaptable, débrouillard, pas paralysé par l'analyse.
**Ses fragilités :** manque de visibilité, surprises en fin de mois, épargne inexistante.

Le parcours Noory pour ce profil se concentre sur la **clarté** : retrouver de la visibilité sans tomber dans l'obsession du contrôle.

[→ Découvre le profil complet du Navigateur à Vue](/profil/navigateur-a-vue)

### 🛍️ Le Dépensier Émotionnel

**Sa devise :** "J'achète pour me sentir mieux."

Le Dépensier Émotionnel utilise l'argent comme régulateur d'émotions. Stressé ? Il achète. Triste ? Il achète. Content ? Il achète pour "fêter ça". Ce n'est pas de la faiblesse — c'est un mécanisme d'adaptation que le cerveau a développé.

**Ses forces :** généreux, spontané, sait profiter de la vie.
**Ses fragilités :** regrets fréquents, difficulté à épargner, sentiment de perte de contrôle.

Le parcours Noory pour ce profil se concentre sur la **conscience** : identifier les déclencheurs et créer des alternatives.

[→ Découvre le profil complet du Dépensier Émotionnel](/profil/depensier-emotionnel)

### 🏗️ Le Bâtisseur Bloqué

**Sa devise :** "J'ai des projets mais je n'avance pas."

Le Bâtisseur Bloqué sait ce qu'il veut : un apport, un business, un changement de vie. Mais entre le rêve et l'action, il y a un gouffre. Il planifie, il repousse, il se dit "le mois prochain". Et les mois passent.

**Ses forces :** ambitieux, visionnaire, motivé par le sens.
**Ses fragilités :** procrastination, perfectionnisme, décalage entre intentions et actions.

Le parcours Noory pour ce profil se concentre sur le **passage à l'action** : transformer les projets en micro-étapes concrètes.

[→ Découvre le profil complet du Bâtisseur Bloqué](/profil/batisseur-bloque)

### 📊 L'Investisseur Paralysé

**Sa devise :** "Je voudrais investir mais j'ai trop peur."

L'Investisseur Paralysé sait que l'investissement est important. Il a peut-être même commencé à se renseigner. Mais la peur de mal faire, de perdre, de ne pas comprendre — tout ça le fige. Il accumule de l'information sans jamais passer à l'acte.

**Ses forces :** prudent, méthodique, cherche à comprendre avant d'agir.
**Ses fragilités :** paralysie d'analyse, peur de l'erreur, inaction prolongée.

Le parcours Noory pour ce profil se concentre sur la **confiance en action** : poser les bases, commencer petit, avancer malgré l'incertitude.

[→ Découvre le profil complet de l'Investisseur Paralysé](/profil/investisseur-paralyse)

## Et toi, quel est ton profil ?

Tu t'es peut-être reconnu dans un profil. Ou dans plusieurs — c'est normal, on est rarement 100 % un seul type.

Le quiz de profil Noory te donne une réponse claire en 2 minutes. Et à partir de ton profil, l'app construit un parcours de 28 jours totalement adapté à ta psychologie.

Pas de conseils génériques. Pas de "fais un budget". Un accompagnement qui parle à **ta** réalité.

---

*Fais le quiz et découvre ton profil financier. C'est gratuit, ça prend 2 minutes. [Commence ici.](/quiz)*`
  },
  {
    slug: "epargner-petit-salaire",
    title: "Comment épargner avec un petit salaire (même 50€/mois)",
    metaTitle: "Épargner avec un petit salaire : méthode concrète même avec 50€/mois | Noory",
    metaDescription: "Tu penses qu'il faut gagner beaucoup pour épargner ? Faux. Voici une méthode concrète pour mettre de côté même avec un petit salaire.",
    date: "2025-02-20",
    readTime: "6 min",
    intro: "\"Je ne gagne pas assez pour épargner.\" C'est la phrase la plus répandue — et la plus fausse. Voici comment commencer, même avec 50€ par mois.",
    keywords: ["épargner petit salaire", "mettre de côté", "économiser peu de revenus"],
    content: `## Le mythe du "pas assez"

"Quand je gagnerai plus, je commencerai à épargner." Si tu attends ce moment, tu attendras longtemps. Parce que le problème n'est presque jamais le montant — c'est le **mécanisme**.

Des études montrent que les personnes qui épargnent régulièrement de petites sommes accumulent plus sur 10 ans que celles qui font des gros virements occasionnels. Pourquoi ? Parce que la régularité bat le montant. À chaque fois.

Le vrai obstacle, ce n'est pas ton salaire. C'est la croyance que "ça ne sert à rien de mettre si peu". Mais 20€ par mois, c'est 240€ par an. En 5 ans, c'est 1 200€. Avec des intérêts, plus. Et surtout, c'est une **identité** : tu deviens quelqu'un qui épargne. Et ça change tout.

## La méthode des enveloppes simplifiée

La méthode des enveloppes est vieille comme le monde, mais elle marche toujours. Le principe : dès que tu reçois ton salaire, tu répartis l'argent en catégories. Pas 15 catégories — 3 suffisent :

1. **L'essentiel** : loyer, courses, transport, factures. Ce qui ne bouge pas.
2. **Le plaisir** : sorties, achats, loisirs. Ce qui rend la vie agréable.
3. **L'avenir** : épargne, même minuscule. Ce qui te rend plus solide.

La clé, c'est de décider **à l'avance** combien va dans chaque enveloppe. Pas à la fin du mois quand il ne reste rien — au début, quand tu as encore le choix.

Noory t'aide à faire exactement ça : définir tes enveloppes en 2 minutes, et te rappeler chaque jour où tu en es.

## Automatiser 5% dès le 1er du mois

Voici la règle la plus simple et la plus puissante : le jour de ton salaire, 5% part automatiquement sur un compte d'épargne. Pas 20%. Pas 10%. 5%.

Sur un salaire de 1 500€, c'est 75€. Sur 1 200€, c'est 60€. Sur 1 000€, c'est 50€. C'est un montant que tu ne sentiras presque pas — mais qui s'accumule silencieusement.

Le secret, c'est l'automatisation. Si c'est automatique, tu n'as pas besoin de volonté. Tu n'as pas besoin d'y penser. Ça se fait. Et au bout de 3 mois, tu as une petite réserve. Au bout d'un an, tu as un coussin. Et surtout, tu as confiance.

## Couper 3 abonnements inutiles

Combien d'abonnements tu paies chaque mois sans les utiliser ? La moyenne en France est de 5 abonnements actifs. Et au moins 2 sont sous-utilisés ou oubliés.

Fais l'exercice maintenant : regarde tes prélèvements du mois dernier. Est-ce qu'il y a un service que tu n'as pas utilisé depuis plus de 3 semaines ? Annule-le. Tu pourras toujours le reprendre.

En coupant 2 à 3 abonnements inutiles, tu libères souvent entre 15€ et 40€ par mois. C'est de l'argent que tu dépensais sans même le savoir. Et c'est de l'argent qui peut aller directement dans ton épargne.

Noory t'aide à identifier ces fuites invisibles dès la première semaine de ton parcours.

## L'épargne projet vs l'épargne vague

Voici un secret que les banques ne te disent pas : **on épargne mieux quand on sait pourquoi**.

"Mettre de côté" est vague. "Mettre de côté pour un voyage au Japon en septembre" est concret. "Épargner" est abstrait. "Constituer 1 000€ de coussin de sécurité en 8 mois" est un objectif.

La psychologie montre que l'épargne liée à un projet concret est 3 fois plus durable que l'épargne générique. Parce qu'elle a du sens. Parce qu'elle te motive. Parce que tu vois le progrès.

C'est exactement ce que Noory te propose : des **objectifs d'épargne concrets**, avec un montant cible, une deadline, et un suivi visuel de ta progression. Pas un compteur abstrait — un projet qui te parle.

## Commencer maintenant

Tu n'as pas besoin de gagner plus pour commencer. Tu as besoin d'un premier geste. Ouvre Noory, définis ton premier objectif d'épargne — même 30€ par mois — et laisse l'app t'accompagner.

En 28 jours, tu auras une habitude installée. Et tu seras surpris·e de ce que même un petit montant peut construire quand il est régulier.

---

*Noory t'aide à épargner à ton rythme, sans pression. Commence gratuitement pendant 7 jours. [Télécharge sur iPhone.](/quiz)*`
  },
  {
    slug: "culpabilite-argent-depenser",
    title: "Pourquoi tu culpabilises quand tu dépenses (et comment en sortir)",
    metaTitle: "Culpabilité et argent : pourquoi tu te sens coupable de dépenser | Noory",
    metaDescription: "Tu te sens coupable à chaque achat ? Découvre d'où vient cette culpabilité financière et comment retrouver un rapport sain à l'argent.",
    date: "2025-02-12",
    readTime: "7 min",
    intro: "Chaque achat te laisse un goût amer ? Cette culpabilité n'est pas un signe de faiblesse — c'est un mécanisme qu'on peut comprendre et transformer.",
    keywords: ["culpabilité argent", "honte dépenser", "rapport malsain argent"],
    content: `## D'où vient la culpabilité financière ?

Tu achètes un café à 4€ et tu te sens coupable. Tu t'offres un vêtement et tu calcules mentalement combien de repas ça représente. Tu réserves un week-end et tu te demandes si tu le "mérites".

Si tu te reconnais, sache une chose : ce n'est pas un problème d'argent. C'est un problème de **croyance**. Quelque part, tu as appris que dépenser = mal faire. Et cette croyance est devenue automatique.

La culpabilité financière touche des millions de personnes, indépendamment de leurs revenus. Des gens qui gagnent 5 000€ par mois culpabilisent autant que ceux qui en gagnent 1 200€. Parce que le montant n'est pas le sujet. Le sujet, c'est ce que l'argent représente pour toi.

## L'éducation et les croyances familiales

Notre rapport à l'argent se construit très tôt. Avant 7 ans, on a déjà absorbé les croyances financières de notre famille — sans même s'en rendre compte.

- "L'argent ne pousse pas sur les arbres" → croyance de rareté
- "On n'est pas des gens qui gaspillent" → identité de privation
- "Les riches sont malhonnêtes" → honte d'avoir ou de vouloir
- "Il faut souffrir pour mériter" → culpabilité du plaisir

Ces phrases, tu les as peut-être entendues des dizaines de fois. Et même si tu sais intellectuellement qu'elles ne sont pas toujours vraies, elles continuent de guider tes émotions à chaque achat.

La première étape pour en sortir, c'est de les **identifier**. Noory t'aide à explorer ces croyances dès le début de ton parcours, pour comprendre d'où viennent tes réflexes automatiques.

## Dépenser ≠ échouer

Voici une vérité que personne ne te dit dans le monde de la finance personnelle : **dépenser de l'argent n'est pas un échec**. C'est littéralement la raison pour laquelle on en gagne.

L'argent est un outil. Il sert à vivre, à profiter, à construire, à partager. Si tu épargnes tout sans jamais profiter, tu ne gères pas mieux ton argent — tu le séquestres. Et ça crée autant de souffrance que de tout dépenser.

Le rapport sain à l'argent, c'est un **équilibre**. C'est pouvoir mettre de côté ET te faire plaisir. C'est pouvoir épargner pour un projet ET sortir avec tes amis ce week-end. C'est avoir un plan ET être flexible.

## Se donner des permissions

Une technique puissante pour sortir de la culpabilité : les **permissions explicites**. Chaque mois, décide à l'avance d'un montant que tu as le droit de dépenser pour toi, sans justification.

Pas "si j'ai assez". Pas "si j'ai bien épargné avant". Un montant fixe, décidé calmement, pour du plaisir pur.

50€. 80€. 100€. Le montant importe peu. Ce qui compte, c'est la **permission**. Quand tu dépenses dans ce cadre, il n'y a pas de culpabilité possible — parce que c'était prévu. C'était voulu. C'était un choix, pas une impulsion.

Noory intègre cette logique : ton parcours inclut des moments où l'app te dit "aujourd'hui, fais-toi plaisir — c'est dans ton plan." Parce que le plaisir fait partie d'une vie financière saine.

## Le concept de dépense alignée

Au lieu de classer les dépenses en "bien" et "mal", Noory propose un autre filtre : la **dépense alignée**.

Une dépense alignée, c'est une dépense qui reflète tes valeurs et tes priorités. Elle peut être un restaurant, un livre, un cadeau, un cours en ligne — peu importe le montant ou la catégorie. Ce qui compte, c'est qu'elle te rapproche de la personne que tu veux être.

Une dépense non-alignée, c'est une dépense qui ne reflète rien de toi. Tu l'as faite par automatisme, par pression sociale, par compensation. Ce n'est pas "mal" — mais c'est là que tu peux agir.

Le travail n'est pas de supprimer les dépenses non-alignées. C'est de les **voir**. Et une fois que tu les vois, elles diminuent naturellement.

## Ton premier pas vers la liberté

La culpabilité financière n'est pas une fatalité. C'est un schéma qu'on peut comprendre, déconstruire, et remplacer par quelque chose de plus doux.

Noory t'accompagne dans ce travail — pas avec des leçons de morale, mais avec des exercices concrets, des prises de conscience guidées, et un ton qui ne juge jamais.

---

*Libère-toi de la culpabilité financière. Essaie Noory gratuitement pendant 7 jours. [Télécharge sur iPhone.](/quiz)*`
  },
  {
    slug: "investir-debutant-peur",
    title: "Investir quand on a peur : le guide pour débutants paralysés",
    metaTitle: "Investir quand on a peur : guide pour débutants qui n'osent pas | Noory",
    metaDescription: "Tu veux investir mais la peur te bloque ? Ce guide t'explique pourquoi c'est normal et comment faire ton premier pas, même avec 10€.",
    date: "2025-02-05",
    readTime: "7 min",
    intro: "Tu sais que tu devrais investir. Tu te renseignes. Mais tu ne passes jamais à l'acte. Ce guide est pour toi.",
    keywords: ["investir débutant", "peur d'investir", "commencer à investir"],
    content: `## La paralysie de l'analyse

Tu as lu 12 articles sur l'investissement. Tu as regardé 8 vidéos YouTube. Tu as comparé 5 courtiers. Et pourtant... tu n'as toujours pas investi un seul euro.

Ce phénomène porte un nom : la **paralysie d'analyse**. Plus tu te renseignes, plus tu vois de complexité. Plus tu vois de complexité, plus tu as peur de te tromper. Plus tu as peur, moins tu agis.

C'est un cercle vicieux classique chez les débutants. Et le pire, c'est que plus tu attends, plus le sentiment d'urgence grandit ("j'aurais dû commencer il y a 2 ans"), ce qui ajoute de la pression, ce qui ajoute de la paralysie.

Si c'est ton cas, prends une grande respiration. Tu es normal·e. Et tu n'as pas besoin de tout comprendre avant de commencer.

## Pourquoi la peur est normale

La peur d'investir n'est pas irrationnelle. Elle est profondément **logique**. Tu mets ton argent — celui que tu as gagné en travaillant — dans quelque chose que tu ne contrôles pas. C'est normal d'avoir peur.

Cette peur vient de plusieurs sources :

**La peur de perdre.** C'est la plus évidente. Le cerveau humain est programmé pour ressentir la douleur d'une perte 2 fois plus intensément que le plaisir d'un gain. C'est ce qu'on appelle l'aversion à la perte. Même si tu sais rationnellement que l'investissement long terme est positif, ton cerveau refuse de prendre le risque.

**La peur de ne pas comprendre.** Le monde de la finance est volontairement complexe. Le jargon, les acronymes, les graphiques — tout est fait pour que tu te sentes incompétent·e. Et quand on se sent incompétent, on ne bouge pas.

**La peur du jugement.** "Et si je fais un mauvais choix ?" "Et si les autres voient que je ne sais pas ce que je fais ?" Cette peur sociale est sous-estimée, mais elle bloque beaucoup de débutants.

Noory ne te dit pas "n'aie pas peur". Noory te dit "ta peur est valide — et voici comment avancer malgré elle".

## Les 3 questions avant d'investir

Avant de mettre un euro dans quoi que ce soit, réponds à ces 3 questions. Pas besoin de plus.

### 1. Est-ce que j'ai un coussin de sécurité ?

Un coussin de sécurité, c'est 2 à 3 mois de dépenses essentielles sur un compte accessible. Pas plus. Si tu ne l'as pas encore, c'est ta **première priorité**. Avant l'investissement, il y a la sécurité.

Noory t'aide à construire ce coussin en premier, avec un objectif d'épargne dédié et un suivi quotidien.

### 2. Est-ce que cet argent, je peux ne pas y toucher pendant 5 ans ?

L'investissement, ce n'est pas du trading. C'est du temps long. Si tu as besoin de cet argent dans 6 mois pour un loyer ou un projet, ne l'investis pas. L'investissement, c'est de l'argent que tu "oublies" pendant 5, 10, 20 ans.

### 3. Est-ce que je comprends (basiquement) ce dans quoi j'investis ?

Tu n'as pas besoin d'un Master en finance. Mais tu dois pouvoir expliquer en une phrase ce que tu achètes. "J'investis dans un fonds qui suit les 500 plus grandes entreprises américaines." C'est suffisant. Si tu ne peux pas l'expliquer, ne l'achète pas.

## Commencer avec 10€

Voici le conseil le plus contre-intuitif de cet article : **commence avec un montant ridicule**.

10€. Oui, dix euros. Pas pour gagner de l'argent — pour **casser la barrière psychologique**. Le premier investissement est le plus dur. Pas parce qu'il est risqué — parce qu'il est nouveau.

En investissant 10€, tu franchis le pas. Tu ouvres un compte. Tu fais ta première transaction. Tu vois comment ça marche. Et tu réalises que ce n'est pas aussi effrayant que tu l'imaginais.

Ensuite, tu pourras augmenter progressivement. 20€ par mois. 50€. 100€. À ton rythme, selon ta confiance.

## Le DCA expliqué simplement

DCA = Dollar Cost Averaging. En français : investir la même somme, à intervalle régulier, quoi qu'il arrive.

C'est la stratégie la plus simple, la plus éprouvée, et la plus adaptée aux débutants. Voici pourquoi :

- Tu n'as pas besoin de "timer" le marché (personne ne sait le faire)
- Tu achètes plus quand c'est bas, moins quand c'est haut (automatiquement)
- Tu élimines l'émotion de l'équation
- Tu crées une habitude régulière

Concrètement : tu programmes un virement automatique de X€ par mois vers ton compte d'investissement. Et tu ne regardes pas tous les jours. Tu laisses le temps faire son travail.

## Noory t'accompagne

Le module investissement de Noory n'est pas un cours de finance. C'est un **accompagnement émotionnel** pour les personnes qui veulent investir mais qui sont bloquées par la peur.

Semaine par semaine, Noory t'aide à :
- Comprendre d'où vient ta peur (sans jugement)
- Poser les bases (coussin, budget, objectif)
- Faire ton premier geste (même minuscule)
- Tenir dans la durée (sans vérifier ton portefeuille 10 fois par jour)

L'investissement n'est pas réservé aux experts. C'est un outil accessible — quand on a le bon accompagnement.

---

*Prêt·e à faire ton premier pas ? Noory t'accompagne. Coaching financier personnalisé, 7 jours gratuits. [Télécharge sur iPhone.](/quiz)*`
  }
];
