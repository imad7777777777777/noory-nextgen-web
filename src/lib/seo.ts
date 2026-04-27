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
