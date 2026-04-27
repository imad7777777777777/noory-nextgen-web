export const BASE_URL = "https://noory.io";
export const LANG = "fr-FR";

export const APP_STORE_URL =
  "https://apps.apple.com/fr/app/noory-finance-objectifs/id6746418972";

export const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

/**
 * Convert "YYYY-MM-DD" to ISO 8601 with Europe/Paris timezone.
 * Hardcoded +02:00 (CEST) — minor inaccuracy in winter (CET = +01:00) but
 * Google Rich Results accepts it and avoids tz library overhead.
 */
export function toIsoDate(yyyyMmDd: string): string {
  return `${yyyyMmDd}T00:00:00+02:00`;
}

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
    "https://www.linkedin.com/in/imad-noory-3b2242403/",
    APP_STORE_URL,
  ],
} as const;

export const PERSON_IMAD = {
  "@type": "Person",
  "@id": `${BASE_URL}/a-propos#imad`,
  name: "Imad",
  jobTitle: "Fondateur Noory",
  description:
    "Cofondateur de Noory, l'app française de coaching financier comportemental. Écrit sur la psychologie de l'argent, les biais cognitifs et les habitudes financières.",
  url: `${BASE_URL}/a-propos`,
  image: {
    "@type": "ImageObject",
    url: `${BASE_URL}/imad-founder.webp`,
    width: 400,
    height: 400,
  },
  worksFor: { "@id": `${BASE_URL}/#organization` },
  knowsAbout: [
    "finance comportementale",
    "psychologie financière",
    "biais cognitifs",
    "habitudes financières",
  ],
  sameAs: [
    "https://www.tiktok.com/@imad.argent.ethique",
    "https://www.linkedin.com/in/imad-noory-3b2242403/",
  ],
} as const;

export const WEBSITE_NOORY = {
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Noory",
  inLanguage: LANG,
  publisher: { "@id": `${BASE_URL}/#organization` },
} as const;
