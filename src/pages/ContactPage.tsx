import { useMemo } from "react";
import { Mail, Star, Instagram } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { APP_STORE_URL, BASE_URL, LANG, ORG_NOORY } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

const CONTACT_EMAIL = "contact.noory.app@gmail.com";
const TIKTOK_URL = "https://www.tiktok.com/@imad.argent.ethique";
const INSTAGRAM_URL = "https://www.instagram.com/noory_app";

const ContactPage = () => {
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        ORG_NOORY,
        {
          "@type": "ContactPage",
          "@id": `${BASE_URL}/nous-contacter#webpage`,
          url: `${BASE_URL}/nous-contacter`,
          name: "Nous contacter — Noory",
          inLanguage: LANG,
          isPartOf: { "@id": `${BASE_URL}/#website` },
          about: { "@id": `${BASE_URL}/#organization` },
          mainEntity: {
            "@type": "Organization",
            name: "Noory",
            email: CONTACT_EMAIL,
            url: BASE_URL,
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: CONTACT_EMAIL,
                availableLanguage: ["French", "English"],
              },
            ],
          },
        },
      ],
    }),
    []
  );

  useSEO({
    title: "Nous contacter — Noory",
    description:
      "Une question, un retour, un bug ? Écris-nous directement. Chaque message est lu par l'équipe Noory — on répond à tout.",
    url: "/nous-contacter",
    jsonLd,
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Nous contacter" },
        ]}
      />
      <main className="pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="mb-12 mt-6">
            <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">
              Nous contacter
            </p>
            <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground leading-tight">
              Une question ? Un retour ?{" "}
              <span className="text-gradient">On t'écoute.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Noory est un projet indépendant. Chaque message est lu
              personnellement par l'équipe. N'hésite pas à nous écrire — que ce
              soit pour un bug, une suggestion, ou juste pour nous dire ce que
              tu penses de l'app.
            </p>
          </div>

          {/* Email card */}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group block rounded-2xl border border-border bg-card p-7 hover:border-primary/40 transition-colors mb-6"
          >
            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-pastel flex items-center justify-center">
                <Mail size={22} className="text-foreground/70" />
              </div>
              <div className="min-w-0">
                <h2 className="text-lg font-bold text-foreground mb-1.5">
                  Écris-nous par email
                </h2>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  La meilleure manière de nous joindre. On répond généralement
                  sous 48 h.
                </p>
                <span className="text-base font-medium text-primary group-hover:underline break-words">
                  {CONTACT_EMAIL}
                </span>
              </div>
            </div>
          </a>

          {/* Secondary cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-pastel flex items-center justify-center mb-4">
                <Star size={20} className="text-foreground/70" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-1.5">
                Laisse un avis
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Ton retour sur l'App Store nous aide énormément.
              </p>
            </a>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="w-11 h-11 rounded-xl bg-rose-pastel flex items-center justify-center mb-4">
                <Instagram size={20} className="text-foreground/70" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-1.5">
                Suis-nous ailleurs
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Instagram{" "}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @noory_app
                </a>{" "}
                · TikTok{" "}
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @imad.argent.ethique
                </a>
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-secondary/60 p-6 text-sm text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">À noter :</strong> Noory n'est
              pas un service financier réglementé. Pour toute question
              juridique, fiscale ou d'investissement, consulte un professionnel
              agréé. On reste un outil de coaching comportemental — et on
              l'assume.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
