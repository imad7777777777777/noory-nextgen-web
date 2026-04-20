import { useMemo } from "react";
import { useSEO } from "@/hooks/useSEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AProposPage = () => {
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          name: "Noory",
          url: "https://noory.io",
          logo: "https://noory.io/og-image.png",
          description:
            "App de coaching financier comportemental basée sur la finance comportementale. Identifie ton profil financier et suis 28 jours de coaching personnalisé.",
          email: "contact.noory.app@gmail.com",
          sameAs: [
            "https://www.instagram.com/noory_app",
            "https://www.tiktok.com/@imad.argent.ethique",
            "https://www.youtube.com/@Imadargentethique",
          ],
          founder: {
            "@type": "Person",
            name: "Imad",
          },
        },
        {
          "@type": "Person",
          name: "Imad",
          jobTitle: "Fondateur & développeur",
          worksFor: {
            "@type": "Organization",
            name: "Noory",
          },
          nationality: "FR",
          email: "contact.noory.app@gmail.com",
          description:
            "Fondateur et développeur de Noory, app de coaching financier comportemental pour les francophones.",
        },
      ],
    }),
    []
  );

  useSEO({
    title: "À propos de Noory | Coaching financier comportemental",
    description:
      "Découvre l'histoire de Noory, sa méthode basée sur la finance comportementale (Kahneman, Thaler) et son fondateur Imad. Une app française de coaching financier sans jugement.",
    url: "/a-propos",
    jsonLd,
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-gray-800 mb-10">
            À propos de Noory
          </h1>

          <div className="space-y-10 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                L'histoire
              </h2>
              <p className="mb-4">
                Noory est né d'un constat simple : les apps de budget ne
                marchent pas. Pas parce qu'elles sont mal faites, mais parce
                qu'elles répondent à la mauvaise question. Elles te montrent
                combien tu dépenses. Mais elles ne t'aident pas à comprendre
                pourquoi.
              </p>
              <p className="mb-4">
                J'ai creusé la finance comportementale — les travaux de Daniel
                Kahneman, Richard Thaler, Dan Ariely — et j'ai découvert que
                notre rapport à l'argent est d'abord psychologique. Nos
                décisions financières sont pilotées par nos émotions, nos
                habitudes et nos croyances, pas par notre intelligence.
              </p>
              <p>
                J'ai construit Noory autour de cette idée : un coach qui
                comprend ta psychologie financière et t'accompagne pour changer
                tes réflexes. Pas un tableau de bord. Un compagnon.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                Le fondateur
              </h2>
              <p>
                Je suis Imad, fondateur et développeur de Noory. Basé en France,
                je travaille seul sur ce projet depuis 2025. Mon objectif :
                aider les jeunes francophones à construire une relation saine
                avec l'argent, sans jugement et sans jargon.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                La méthode
              </h2>
              <p className="mb-3">Noory repose sur 3 piliers scientifiques :</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>La finance comportementale</strong> (Kahneman, Thaler)
                  : nos biais cognitifs influencent nos décisions financières
                </li>
                <li>
                  <strong>La psychologie des habitudes</strong> (BJ Fogg, James
                  Clear) : de petites actions répétées créent des changements
                  durables
                </li>
                <li>
                  <strong>Le coaching personnalisé</strong> : chaque profil
                  financier a ses propres forces et pièges
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-display font-bold text-gray-800 mb-3">
                Contact
              </h2>
              <p>
                Une question ? Un retour ?{" "}
                <a
                  href="mailto:contact.noory.app@gmail.com"
                  className="text-primary hover:underline"
                >
                  contact.noory.app@gmail.com
                </a>
                <br />
                Instagram :{" "}
                <a
                  href="https://www.instagram.com/noory_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @noory_app
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

export default AProposPage;
