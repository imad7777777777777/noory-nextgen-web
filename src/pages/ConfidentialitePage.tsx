import { useSEO } from "@/hooks/useSEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ConfidentialitePage = () => {
  useSEO({
    title: "Politique de confidentialité | Noory",
    description:
      "Politique de confidentialité de l'application Noory. Découvre comment nous collectons, utilisons et protégeons tes données personnelles.",
    url: "/confidentialite",
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-gray-800 mb-2">
            Politique de confidentialité
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            Dernière mise à jour : 22 avril 2026
          </p>

          <div className="prose-legal space-y-8 text-gray-700 leading-relaxed">
            <p>
              Noory ("nous", "notre", "l'application") est éditée par Imad,
              entrepreneur individuel basé en France.
              <br />
              Contact :{" "}
              <a
                href="mailto:contact.noory.app@gmail.com"
                className="text-primary hover:underline"
              >
                contact.noory.app@gmail.com
              </a>
            </p>

            {/* 1 */}
            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                1. Données collectées
              </h2>
              <p className="mb-3">
                Lors de l'inscription et de l'utilisation de l'app, nous
                collectons :
              </p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>Adresse email (pour l'authentification)</li>
                <li>Prénom (pour personnaliser ton expérience)</li>
                <li>
                  Profil psychologique financier (déterminé via le quiz
                  d'onboarding)
                </li>
                <li>Genre (optionnel, pour adapter les textes)</li>
                <li>
                  Revenus et charges fixes déclarés (pour calculer ta marge
                  budgétaire)
                </li>
                <li>Objectifs financiers et blockers déclarés</li>
                <li>
                  Données de progression (jours complétés, réponses aux
                  réflexions, notes d'action)
                </li>
                <li>
                  Données budgétaires saisies (dépenses, engagements d'épargne)
                </li>
              </ul>
              <p className="font-semibold mb-2">Nous ne collectons PAS :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Tes coordonnées bancaires</li>
                <li>Tes données de carte de crédit</li>
                <li>Tes identifiants bancaires</li>
                <li>Ton historique de transactions bancaires</li>
              </ul>
              <p className="mt-3 font-medium">
                Noory ne se connecte à aucune banque et n'accède à aucun compte
                bancaire.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                2. Utilisation des données
              </h2>
              <p className="mb-3">
                Tes données sont utilisées uniquement pour :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Personnaliser ton parcours de coaching selon ton profil
                </li>
                <li>Afficher ta progression dans l'app</li>
                <li>Calculer et afficher ton budget</li>
                <li>
                  T'envoyer des notifications locales (rappels de rituel, sur ton
                  appareil uniquement)
                </li>
                <li>Améliorer l'application</li>
              </ul>

              <h3 className="text-lg font-display font-bold text-gray-800 mt-6 mb-2">
                Mesure d'audience (PostHog)
              </h3>
              <p className="mb-3">
                Pour améliorer l'application et comprendre comment elle est
                utilisée, nous collectons des données d'usage anonymisées via
                PostHog, hébergé dans l'Union européenne (Irlande).
              </p>
              <p className="mb-3">
                <strong>Ce que nous mesurons</strong> : les étapes d'onboarding
                parcourues, les actions dans l'application (leçons démarrées,
                rituels complétés), et les interactions avec l'écran de
                souscription. Nous ne mesurons jamais le contenu de tes réponses
                personnelles (dépenses, objectifs, messages SOS, etc.).
              </p>
              <p className="mb-3">
                <strong>Base légale</strong> : intérêt légitime (article 6.1.f
                du RGPD). Nous n'utilisons pas de cookies tiers ni de pixel de
                tracking cross-site.
              </p>
              <p className="mb-3">
                <strong>Durée de conservation</strong> : 12 mois maximum.
              </p>
              <p>
                <strong>Ton droit d'opposition</strong> : tu peux t'opposer à
                cette mesure d'audience à tout moment en écrivant à{" "}
                <a
                  href="mailto:contact.noory.app@gmail.com"
                  className="text-primary hover:underline"
                >
                  contact.noory.app@gmail.com
                </a>
                . Nous désactiverons alors PostHog pour ton compte.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                3. Stockage et sécurité
              </h2>
              <p>
                Tes données sont stockées sur Supabase, hébergé en Europe
                (région eu-west-3, Paris). Les données sont chiffrées en transit
                (TLS) et au repos. L'accès aux données est restreint et protégé
                par authentification.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                4. Partage des données
              </h2>
              <p className="mb-3">
                Nous ne vendons, ne louons et ne partageons tes données
                personnelles avec aucun tiers, sauf :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Supabase</strong> (hébergement de la base de données,
                  conforme RGPD)
                </li>
                <li>
                  <strong>RevenueCat</strong> (gestion des abonnements, reçoit
                  uniquement un identifiant anonyme)
                </li>
                <li>
                  <strong>Apple</strong> (traitement du paiement via l'App Store,
                  nous n'avons pas accès à tes données de paiement)
                </li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                5. Cookies et trackers
              </h2>
              <p>
                Le site web noory.io peut utiliser des cookies fonctionnels.
                L'application mobile n'utilise pas de cookies.
              </p>
              <p className="mt-2">
                Nous utilisons le SDK Facebook pour l'attribution publicitaire
                (mesure de performance des campagnes). Tu peux refuser le suivi
                via la fenêtre ATT (App Tracking Transparency) d'Apple qui
                s'affiche au lancement de l'app.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                6. Tes droits (RGPD)
              </h2>
              <p className="mb-3">
                Conformément au Règlement Général sur la Protection des Données,
                tu as le droit de :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Accéder à tes données personnelles</li>
                <li>Rectifier tes données</li>
                <li>Supprimer ton compte et toutes tes données</li>
                <li>T'opposer au traitement de tes données</li>
                <li>Demander la portabilité de tes données</li>
              </ul>
              <p className="mt-3">
                Pour exercer ces droits, contacte-nous :{" "}
                <a
                  href="mailto:contact.noory.app@gmail.com"
                  className="text-primary hover:underline"
                >
                  contact.noory.app@gmail.com
                </a>
                <br />
                Nous répondrons dans un délai de 30 jours.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                7. Suppression du compte
              </h2>
              <p>
                Tu peux demander la suppression complète de ton compte et de
                toutes tes données en nous envoyant un email à{" "}
                <a
                  href="mailto:contact.noory.app@gmail.com"
                  className="text-primary hover:underline"
                >
                  contact.noory.app@gmail.com
                </a>
                . La suppression est effective sous 7 jours ouvrés.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                8. Mineurs
              </h2>
              <p>
                Noory est destinée aux personnes de 18 ans et plus. Nous ne
                collectons pas sciemment de données de mineurs.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                9. Modifications
              </h2>
              <p>
                Nous pouvons mettre à jour cette politique. En cas de changement
                significatif, une notification sera affichée dans l'app.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                10. Contact
              </h2>
              <p>
                Pour toute question :{" "}
                <a
                  href="mailto:contact.noory.app@gmail.com"
                  className="text-primary hover:underline"
                >
                  contact.noory.app@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ConfidentialitePage;
