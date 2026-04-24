import { useSEO } from "@/hooks/useSEO";
import { BASE_URL, LANG } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

const CguPage = () => {
  useSEO({
    title: "Conditions Générales d'Utilisation | Noory",
    description:
      "Conditions Générales d'Utilisation de l'application Noory. Coaching financier comportemental sur iPhone.",
    url: "/cgu",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${BASE_URL}/cgu#webpage`,
      url: `${BASE_URL}/cgu`,
      name: "Conditions Générales d'Utilisation",
      inLanguage: LANG,
      isPartOf: { "@id": `${BASE_URL}/#website` },
    },
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>
      <Navbar />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "CGU" },
        ]}
      />
      <main className="pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-gray-800 mb-2 mt-6">
            Conditions Générales d'Utilisation
          </h1>
          <p className="text-sm text-gray-500 mb-10">
            Dernière mise à jour : 13 avril 2026
          </p>

          <div className="prose-legal space-y-8 text-gray-700 leading-relaxed">
            {/* 1 */}
            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                1. Présentation du service
              </h2>
              <p>
                Noory est une application mobile de coaching financier
                comportemental disponible sur iPhone via l'App Store.
                L'application propose un parcours de 28 jours personnalisé selon
                le profil psychologique financier de l'utilisateur, comprenant
                des leçons, des micro-actions et des réflexions quotidiennes.
              </p>
              <p className="mt-2">
                Éditeur : Imad, entrepreneur individuel, France.
                <br />
                Contact :{" "}
                <a
                  href="mailto:contact.noory.app@gmail.com"
                  className="text-primary hover:underline"
                >
                  contact.noory.app@gmail.com
                </a>
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                2. Acceptation des conditions
              </h2>
              <p>
                En téléchargeant et en utilisant Noory, tu acceptes les
                présentes Conditions Générales d'Utilisation. Si tu n'acceptes
                pas ces conditions, tu ne dois pas utiliser l'application.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                3. Accès au service
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>L'inscription nécessite une adresse email valide.</li>
                <li>
                  La Semaine 1 du parcours (7 jours) est accessible
                  gratuitement.
                </li>
                <li>
                  Les Semaines 2 à 4 nécessitent un abonnement premium.
                </li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                4. Abonnement premium
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Prix : 5,99€/mois ou abonnement annuel (prix affiché dans
                  l'app)
                </li>
                <li>
                  Le paiement est effectué via l'App Store d'Apple
                </li>
                <li>
                  L'abonnement se renouvelle automatiquement sauf annulation
                </li>
                <li>
                  Tu peux annuler à tout moment dans les réglages de ton compte
                  Apple (Réglages &gt; ton nom &gt; Abonnements)
                </li>
                <li>
                  Aucun remboursement n'est effectué pour la période en cours
                  après annulation
                </li>
                <li>
                  La gestion des abonnements est soumise aux conditions d'Apple
                </li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                5. Contenu de l'application
              </h2>
              <p className="mb-3">
                Le contenu proposé par Noory (leçons, actions, réflexions,
                conseils) est à visée éducative et de développement personnel.
              </p>
              <p className="font-semibold mb-2">Noory ne fournit PAS :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  De conseil en investissement au sens réglementaire
                </li>
                <li>De conseil fiscal ou juridique</li>
                <li>
                  De service bancaire ou de gestion de patrimoine
                </li>
                <li>De diagnostic psychologique ou médical</li>
              </ul>
              <p className="mt-3">
                Les informations partagées ne remplacent pas l'avis d'un
                professionnel qualifié (conseiller financier agréé, psychologue,
                comptable).
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                6. Responsabilité de l'utilisateur
              </h2>
              <p className="mb-3">Tu es responsable de :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>L'exactitude des informations que tu fournis</li>
                <li>La confidentialité de tes identifiants de connexion</li>
                <li>
                  Tes décisions financières (Noory est un outil
                  d'accompagnement, pas un gestionnaire de tes finances)
                </li>
              </ul>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                7. Propriété intellectuelle
              </h2>
              <p>
                L'ensemble du contenu de l'application Noory (textes,
                illustrations, design, code, marque) est protégé par le droit
                d'auteur et reste la propriété exclusive de l'éditeur. Toute
                reproduction, distribution ou utilisation sans autorisation est
                interdite.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                8. Disponibilité du service
              </h2>
              <p>
                Nous nous efforçons de maintenir l'application disponible en
                permanence, mais ne garantissons pas une disponibilité
                ininterrompue. Des interruptions temporaires peuvent survenir
                pour maintenance ou mise à jour.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                9. Modification des conditions
              </h2>
              <p>
                Nous nous réservons le droit de modifier ces conditions. Les
                modifications prennent effet dès leur publication. L'utilisation
                continue de l'application vaut acceptation des nouvelles
                conditions.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                10. Résiliation
              </h2>
              <p>
                Nous pouvons suspendre ou résilier ton accès en cas de violation
                des présentes conditions. Tu peux cesser d'utiliser Noory à tout
                moment et demander la suppression de ton compte.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                11. Droit applicable
              </h2>
              <p>
                Les présentes conditions sont régies par le droit français. En
                cas de litige, les tribunaux français sont compétents.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                12. Contact
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

export default CguPage;
