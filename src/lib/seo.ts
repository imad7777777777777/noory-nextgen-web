export const BASE_URL = "https://noory.io";
export const LANG = "fr-FR";

export const APP_STORE_URL =
  "https://apps.apple.com/fr/app/noory-finance-objectifs/id6746418972";

export const ORG_NOORY = {
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Noory",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/og-image.png`,
  },
  sameAs: [
    "https://www.instagram.com/noory_app",
    "https://www.tiktok.com/@imad.argent.ethique",
    APP_STORE_URL,
  ],
} as const;

export const PERSON_IMAD = {
  "@type": "Person",
  "@id": `${BASE_URL}/a-propos#imad`,
  name: "Imad",
  jobTitle: "Fondateur Noory",
  url: `${BASE_URL}/a-propos`,
  worksFor: { "@id": `${BASE_URL}/#organization` },
  sameAs: ["https://www.tiktok.com/@imad.argent.ethique"],
} as const;

export const WEBSITE_NOORY = {
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Noory",
  inLanguage: LANG,
  publisher: { "@id": `${BASE_URL}/#organization` },
} as const;
