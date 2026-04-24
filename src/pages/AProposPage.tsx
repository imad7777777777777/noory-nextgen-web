import { useMemo } from "react";
import { useSEO } from "@/hooks/useSEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const APP_STORE_URL =
  "https://apps.apple.com/fr/app/noory-finance-objectifs/id6746418972";
const TIKTOK_URL = "https://www.tiktok.com/@imad.argent.ethique";
// LinkedIn à compléter par Imad — pas d'URL publique à exposer pour l'instant
const LINKEDIN_URL = "https://www.linkedin.com/in/TODO";

const AProposPage = () => {
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Imad",
      jobTitle: "Fondateur Noory",
      url: "https://noory.io/a-propos",
      email: "contact.noory.app@gmail.com",
      worksFor: {
        "@type": "Organization",
        name: "Noory",
        url: "https://noory.io",
      },
      sameAs: [TIKTOK_URL, APP_STORE_URL],
    }),
    []
  );

  useSEO({
    title: "À propos — Imad, fondateur de Noory",
    description:
      "Imad, fondateur solo de Noory, basé à Marseille. Pourquoi j'ai créé une app de coaching financier qui parle au comportement plutôt qu'au budget.",
    url: "/a-propos",
    jsonLd,
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFF8F0" }}>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-gray-800 mb-8">
            À propos — Imad, fondateur de Noory
          </h1>

          {/*
            PHOTO À INSÉRER ICI — conserver la convention src/assets/ (comme screen-home.webp, hero-phone.png).
            Ajoute src/assets/imad-founder.webp (ou .jpg), puis remplace ce commentaire par :

              import imadPhoto from "@/assets/imad-founder.webp";
              ...
              <img
                src={imadPhoto}
                alt="Imad, fondateur de Noory"
                className="w-40 h-40 rounded-full object-cover mb-8 shadow-md"
              />
          */}

          <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
            <p>
              Salut, moi c'est Imad. Je suis seul derrière Noory — je code l'app,
              j'écris le contenu, je réponds aux mails. Je vis à Marseille, et
              j'ai lancé ce projet en 2025 parce que je n'ai jamais trouvé d'app
              qui me parlait vraiment.
            </p>

            <p>
              Pendant longtemps, j'ai eu un rapport compliqué à l'argent. Pas
              parce que j'en manquais — mais parce que je ne comprenais pas
              pourquoi je dépensais comme je dépensais. J'ai essayé les apps de
              budget : elles me montraient <em>combien</em> je dépensais, jamais{" "}
              <em>pourquoi</em>. J'ai téléchargé, rempli des catégories, abandonné.
              Trois fois. Cinq fois. Comme tout le monde.
            </p>

            <p>
              En creusant la finance comportementale — Kahneman, Thaler, Ariely —
              j'ai compris que la plupart de nos décisions financières ne sont pas
              rationnelles. Elles sont émotionnelles. Un budget qui ignore ça ne
              marche pas. C'est pour ça que les apps classiques ne tiennent pas :
              elles s'adressent à un cerveau logique qui n'existe pas.
            </p>

            <p>
              Noory est construit à l'envers. On part de ta psychologie, pas de
              tes chiffres. On te fait faire des micro-actions quotidiennes — pas
              un gros plan à suivre pendant six mois. Et on le fait sans jugement.
              Pas de badges de culpabilité, pas de cris quand tu dépasses ton
              budget. Juste un rituel simple, répété, qui t'apprend à te
              comprendre avant de te discipliner.
            </p>

            <p>
              L'éthique compte aussi. Noory ne vend pas tes données, ne te pousse
              pas vers des produits financiers commissionnés, ne te culpabilise
              pas pour te faire rester. On n'est pas un service financier
              réglementé — on est un outil de coaching comportemental. La
              différence est importante, et je la tiens.
            </p>

            <p>
              Si tu veux qu'on parle : <strong>écris-moi directement</strong> à{" "}
              <a
                href="mailto:contact.noory.app@gmail.com"
                className="text-primary hover:underline"
              >
                contact.noory.app@gmail.com
              </a>
              . Je lis tout, je réponds à tout. C'est un des avantages d'être
              seul sur le projet.
            </p>

            <p>Tu peux aussi me trouver ailleurs :</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                TikTok :{" "}
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @imad.argent.ethique
                </a>{" "}
                — là où je parle argent sans tabou et sans jargon
              </li>
              <li>
                App Store :{" "}
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Noory sur iPhone
                </a>{" "}
                — gratuit 7 jours, sans engagement
              </li>
              <li>
                LinkedIn :{" "}
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  profil pro
                </a>
              </li>
            </ul>

            <p className="pt-4">
              Merci d'être passé·e. Si Noory t'aide, même un tout petit peu, j'ai
              fait ce que je voulais faire.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AProposPage;
