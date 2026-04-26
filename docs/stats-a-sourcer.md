# Statistiques à sourcer ou paraphraser — articles blog

Liste brute des chiffres et études citées sans source dans
`src/data/blogArticles.ts`. **Rien n'a été modifié** : c'est Imad qui
décide article par article s'il :

- ajoute une source (INSEE, Banque de France, IFOP, APA, études
  Thaler / Shefrin / Kahneman / Ariely, etc.),
- reformule sans chiffre précis (« beaucoup de gens », « souvent »),
- supprime la phrase.

Les fourchettes (type « 5 à 10 % ») et les exemples de budget personnel
(type « sur 1 800€ net, c'est 90€ ») **ne sont pas listés** — ce sont
des illustrations pédagogiques, pas des claims factuels.

---

## 1. `fond-urgence-pourquoi-indispensable`

- **Ligne 451** — « Près de 40% des Français n'ont pas 500€ d'épargne
  de précaution. »
  *(Contexte : « Tu as 0€ de côté ? Tu n'es pas seul·e. Près de 40% des
  Français n'ont pas 500€ d'épargne de précaution. Voici le plan simple. »)*
  → Source possible : baromètre Cercle de l'Épargne, Banque de France,
  ou enquêtes INSEE sur l'épargne de précaution.

## 2. `anxiete-financiere-calmer`

- **Ligne 2683** — « Selon une étude de l'American Psychological
  Association, l'argent est la première source de stress dans le monde
  — devant le travail, la santé et les relations. »
  → Référence : APA Stress in America report (année à préciser).

- **Ligne 2683** — « En France, une étude récente montre que 60 % des
  18-35 ans ressentent de l'anxiété liée à leurs finances au moins une
  fois par semaine. »
  *(Contexte : « En France, une étude récente montre que 60 % des 18-35
  ans ressentent de l'anxiété liée à leurs finances au moins une fois
  par semaine. »)*
  → Source à identifier (sondages OpinionWay / Harris Interactive sur
  la santé mentale financière des jeunes, rapports Cofidis/Elabe).

## 3. `methode-enveloppes-budget`

- **Ligne 2594** — « Les études en finance comportementale montrent
  qu'on dépense en moyenne 12 à 18 % de moins quand on paie en cash
  plutôt qu'en carte. »
  → Référence habituelle : travaux de Prelec & Simester (2001, MIT)
  sur le « pain of paying » / effet carte vs cash. Chiffre précis à
  vérifier.

## 4. `parler-argent-tabou-france`

- **Ligne 3071** — « Selon une étude IFOP de 2023, 62 % des Français
  considèrent qu'il est "inconvenant" de parler d'argent, même avec
  ses proches. C'est plus que le sexe (34 %) et la politique (28 %). »
  → Référence IFOP nommée mais à vérifier (commanditaire + lien + date
  exacte). Si l'étude existe, ajouter le lien ; sinon paraphraser.

## 5. `gerer-son-argent-sans-stress`

- **Ligne 1333** — « Les études montrent que 73 % des personnes qui
  commencent un budget strict l'abandonnent en moins de 2 semaines. »
  → Source à identifier.

- **Ligne 1353** — « Les recherches montrent que 70 % des envies
  d'achat disparaissent en 24h. »
  → Source à identifier (littérature impulse buying).

## 6. `depenses-impulsives-comment-arreter`

- **Ligne 1207** — « Paradoxalement, un budget plaisir explicite
  réduit les dépenses impulsives de 30 à 40%. »
  → Source à identifier.

- **Ligne 1274** — « Les études montrent que les achats impulsifs en
  ligne augmentent de 40 % les soirs de semaine entre 20h et 23h. »
  → Source à identifier (stat reprise aussi dans
  `acheter-en-ligne-moins-depenser`).

## 7. `acheter-en-ligne-moins-depenser`

- **Ligne 2830** — « Les études montrent qu'on dépense en moyenne 20 à
  30 % de plus en ligne qu'en magasin pour les mêmes catégories de
  produits. »
  → Source à identifier.

- **Ligne 2830** — « Et les achats impulsifs en ligne augmentent de 40
  % entre 20h et 23h. »
  → Même source que `depenses-impulsives-comment-arreter` ligne 1274.
  ⚠️ Stat identique à celle de `depenses-impulsives-comment-arreter` —
  utiliser la même source Baumeister & Vohs (2007) + framing « fatigue
  décisionnelle » quand on traitera cet article.

- **Ligne 2850** — « Dans 70 % des cas, tu n'en auras plus envie. »
  *(règle d'attente 48h avant achat)*
  → Même famille que la stat « 70 % des envies d'achat disparaissent »
  — unifier ou sourcer.

## 8. `j-achete-quand-je-suis-triste`

- **Ligne 1790** — « Dans 70% des cas, l'envie passe. »
- **Ligne 1822** *(FAQ)* — « Dans 80% des cas, l'envie passe. »
  → Deux chiffres différents pour le même phénomène dans le même
  article. À harmoniser et à sourcer (ou à qualitatif).

## 9. `epargne-automatique-comment-mettre-en-place`

- **Ligne 155** — « Dans 70% des cas, l'envie est passée. »
  → Même stat que ci-dessus, autre article.

- **Ligne 165** — « La psychologie montre que l'épargne nommée progresse
  30% plus vite que l'épargne générique. »
  → Source à identifier (littérature « mental accounting » Thaler,
  ou travaux sur labeled savings).

- **Ligne 222** *(FAQ)* — « La recherche montre entre 18 et 254 jours
  selon la complexité. »
  → Stat UCL 2009 (Lally et al.), DÉJÀ SOURCÉE dans
  `habitudes-financieres-21-jours` (L3452). À synchroniser : reprendre
  la même formulation avec citation UCL.

## 10. `routine-financiere-dimanche`

- **Ligne 524** — « Cette simple habitude règle 50% du problème. »
  → Affirmation sans base — reformuler qualitativement ou supprimer.

- **Ligne 526** — « Parce que l'incertitude est bien pire que la
  réalité, dans 80% des cas. »
  → Même type, à reformuler.

## 11. `tracker-ses-depenses-simplement`

- **Ligne 799** — « Beaucoup de gens découvrent qu'une seule habitude
  représente 40 à 60% de leurs regrets d'achat. »
  → Chiffre sans base — reformuler ou sourcer.

## 12. `relation-saine-argent`

- **Ligne 1022** — « Cet héritage pilote 80% de tes comportements
  actuels, que tu le saches ou non. »
  → Chiffre sans base (transmission comportementale autour de l'argent).

## 13. `premiere-paie-5-reflexes`

- **Ligne 1189** — « Chaque étape supplémentaire dans l'achat réduit la
  conversion de 20 à 30%. »
  → Stat e-commerce — source Baymard Institute ? à vérifier.

## 14. `charge-mentale-financiere`

- **Ligne 1845** — « Les études montrent que les préoccupations
  financières chroniques réduisent les capacités cognitives de manière
  mesurable. »
  → Source : Mani, Mullainathan, Shafir & Zhao, Science 2013 (« Poverty
  impedes cognitive function »). À citer explicitement.

- **Ligne 1863** — « En France, les études montrent que les femmes
  portent une part disproportionnée de la charge mentale financière au
  sein du foyer. »
  → Source à identifier (INSEE, INED, enquêtes genre et économie).

## 15. `couple-et-argent-eviter-les-disputes`

- **Ligne 2368** — « Cette règle élimine 80% des micro-conflits liés
  aux achats quotidiens. »
  → Affirmation sans base.

## 16. `depense-plaisir-sans-culpabiliser`

- **Ligne 2455** — « Ces 3 questions prennent 30 secondes et évitent
  80% des regrets. »
  → Affirmation sans base.

## 17. `defi-epargne-52-semaines`

- **Ligne 303** — « Voici comment faire partie des 10% qui tiennent. »
  *(en parlant du défi 52 semaines)*
  → Affirmation sans base — reformuler qualitativement.

## 18. `depenses-inutiles-couper-sans-souffrir`

- **Ligne 647** — « La moyenne française est entre 80€ et 150€
  d'abonnements mensuels. »
  → Source : études Fluo, Bankin', ou UFC-Que Choisir sur les
  abonnements récurrents. À vérifier.

## 19. `objectif-financier-comment-le-definir`

- **Ligne 862** — « Les personnes qui ont un objectif d'épargne précis
  épargnent en moyenne 2 à 3 fois plus que celles qui "mettent de
  côté" sans but. »
  → Source à identifier.

## 20. `epargner-petit-salaire`

- **Ligne 1516** — « Des études montrent que les personnes qui
  épargnent régulièrement de petites sommes accumulent plus sur 10 ans
  que celles qui font des gros virements occasionnels. »
  → Source à identifier.

- **Ligne 1558** — « La psychologie montre que l'épargne liée à un
  projet concret est 3 fois plus durable que l'épargne générique. »
  → Source à identifier. (Même famille que L862.)

## 21. `epargner-quand-on-a-pas-la-motivation`

- **Ligne 2222** — « La psychologie montre que l'épargne liée à un
  objectif concret est 3 fois plus durable que l'épargne générique. »
  → Même affirmation que L1558 dans un autre article — unifier.

## 22. `arreter-comparer-finances-reseaux`

- **Ligne 3383** — « Le stress financier touche 7 personnes sur 10. »
  → Source à identifier (baromètres Harris/Ipsos sur santé mentale
  financière).

---

## Stats déjà sourcées (ne pas toucher)

- `habitudes-financieres-21-jours` L3452 — « Une étude de
  l'University College London en 2009 a montré que le temps moyen
  pour automatiser un comportement est de 66 jours. » *(Lally et al.,
  source nommée.)*

## À considérer en priorité (haut risque YMYL / visibilité)

1. `anxiete-financiere-calmer` L2683 — santé mentale, trafic SEO
   élevé attendu sur la requête.
2. `fond-urgence-pourquoi-indispensable` L451 — chiffre viral,
   vérifiable, souvent cité.
3. `parler-argent-tabou-france` L3071 — étude IFOP nommée mais non
   liée, facile à fact-checker.
4. `methode-enveloppes-budget` L2594 — chiffre précis « 12-18% »,
   facile à sourcer avec Prelec & Simester.
