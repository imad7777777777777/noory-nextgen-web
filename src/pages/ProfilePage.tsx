import { useParams, Link } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { ArrowLeft } from "lucide-react";
import { profiles } from "@/data/profiles";
import { useSEO } from "@/hooks/useSEO";
import AppStoreBadge from "@/components/AppStoreBadge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProfilePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const profile = profiles.find((p) => p.slug === slug);

  const jsonLd = useMemo(() => profile ? {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: profile.metaTitle,
    description: profile.metaDescription,
    url: `https://nooryapp.lovable.app/profil/${profile.slug}`,
    inLanguage: "fr",
    isPartOf: {
      "@type": "WebSite",
      name: "Noory",
      url: "https://nooryapp.lovable.app",
    },
  } : undefined, [profile]);

  useSEO({
    title: profile?.metaTitle || "Profil financier — Noory",
    description: profile?.metaDescription || "",
    url: `/profil/${slug}`,
    jsonLd,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!profile) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-display font-bold text-foreground">Profil introuvable</h1>
          <Link to="/" className="text-primary mt-4 inline-block">Retour à l'accueil</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const otherProfiles = profiles.filter((p) => p.slug !== slug);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <Link
            to="/#pour-qui"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Tous les profils
          </Link>

          {/* Hero */}
          <div className="text-center mb-14">
            <span className="text-6xl mb-4 block">{profile.emoji}</span>
            <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground mb-3">
              {profile.name}
            </h1>
            <p className="text-lg text-muted-foreground italic max-w-lg mx-auto">
              {profile.tagline}
            </p>
          </div>

          {/* Description */}
          <div className="mb-12">
            <p className="text-base text-foreground/80 leading-relaxed">{profile.description}</p>
          </div>

          {/* Tu te reconnais si... */}
          <div className="mb-12 p-8 bg-card border border-border rounded-2xl">
            <h2 className="text-xl font-display font-bold text-foreground mb-5">Tu te reconnais si...</h2>
            <ul className="space-y-3">
              {profile.recognizeSigns.map((sign, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">✓</span>
                  <span className="text-foreground/80 leading-relaxed">{sign}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ce que Noory te propose */}
          <div className="mb-12">
            <h2 className="text-xl font-display font-bold text-foreground mb-4">Ce que Noory te propose</h2>
            <p className="text-foreground/80 leading-relaxed">{profile.nooryOffer}</p>
          </div>

          {/* Semaine par semaine */}
          <div className="mb-14">
            <h2 className="text-xl font-display font-bold text-foreground mb-6">Ton parcours semaine par semaine</h2>
            <div className="space-y-4">
              {profile.weeks.map((week, i) => (
                <div key={i} className="p-5 rounded-2xl bg-card border border-border">
                  <h3 className="font-bold text-foreground mb-1">{week.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{week.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Blog articles related to this profile */}
          <div className="mb-14 p-6 bg-secondary/50 rounded-2xl">
            <h3 className="text-lg font-display font-bold text-foreground mb-4">Articles pour toi</h3>
            <div className="space-y-3">
              <Link to="/blog/profil-financier-psychologie-argent" className="block text-sm text-primary hover:underline">
                Quel est ton profil financier ? Ce que ta psychologie dit de ton rapport à l'argent
              </Link>
              {profile.slug === "depensier-emotionnel" && (
                <>
                  <Link to="/blog/depenses-impulsives-comment-arreter" className="block text-sm text-primary hover:underline">
                    Dépenses impulsives : comment arrêter le cycle sans se priver
                  </Link>
                  <Link to="/blog/j-achete-quand-je-suis-triste" className="block text-sm text-primary hover:underline">
                    J'achète quand je suis triste : comprendre et casser le cycle
                  </Link>
                  <Link to="/blog/acheter-en-ligne-moins-depenser" className="block text-sm text-primary hover:underline">
                    Acheter en ligne sans exploser ton budget : 8 astuces concrètes
                  </Link>
                  <Link to="/blog/arreter-comparer-finances-reseaux" className="block text-sm text-primary hover:underline">
                    Arrêter de comparer tes finances sur les réseaux sociaux
                  </Link>
                </>
              )}
              {profile.slug === "navigateur-a-vue" && (
                <>
                  <Link to="/blog/ou-passe-mon-argent-chaque-mois" className="block text-sm text-primary hover:underline">
                    Où passe mon argent chaque mois ?
                  </Link>
                  <Link to="/blog/budget-pour-les-nuls" className="block text-sm text-primary hover:underline">
                    Budget pour les nuls : par où commencer
                  </Link>
                  <Link to="/blog/methode-enveloppes-budget" className="block text-sm text-primary hover:underline">
                    La méthode des enveloppes : le budget simple qui marche vraiment
                  </Link>
                  <Link to="/blog/regle-50-30-20-explication" className="block text-sm text-primary hover:underline">
                    La règle 50/30/20 : le budget le plus simple du monde
                  </Link>
                </>
              )}
              {profile.slug === "queteur-de-serenite" && (
                <>
                  <Link to="/blog/anxiete-financiere-calmer" className="block text-sm text-primary hover:underline">
                    Anxiété financière : 7 techniques pour calmer ton stress d'argent
                  </Link>
                  <Link to="/blog/epargne-de-precaution-combien" className="block text-sm text-primary hover:underline">
                    Épargne de précaution : combien mettre de côté (et pourquoi)
                  </Link>
                  <Link to="/blog/gerer-son-argent-sans-stress" className="block text-sm text-primary hover:underline">
                    Gérer son argent sans stress : 5 habitudes douces
                  </Link>
                  <Link to="/blog/culpabilite-argent-depenser" className="block text-sm text-primary hover:underline">
                    Pourquoi tu culpabilises quand tu dépenses
                  </Link>
                </>
              )}
              {profile.slug === "batisseur-bloque" && (
                <>
                  <Link to="/blog/epargner-petit-salaire" className="block text-sm text-primary hover:underline">
                    Comment épargner avec un petit salaire (même 50€/mois)
                  </Link>
                  <Link to="/blog/habitudes-financieres-21-jours" className="block text-sm text-primary hover:underline">
                    21 jours pour changer tes habitudes financières
                  </Link>
                  <Link to="/blog/premier-salaire-quoi-faire" className="block text-sm text-primary hover:underline">
                    Premier salaire : quoi faire sans tout claquer
                  </Link>
                  <Link to="/blog/parler-argent-tabou-france" className="block text-sm text-primary hover:underline">
                    Parler d'argent en France : briser le tabou
                  </Link>
                </>
              )}
              {profile.slug === "investisseur-paralyse" && (
                <>
                  <Link to="/blog/investir-debutant-peur" className="block text-sm text-primary hover:underline">
                    Investir quand on a peur : le guide pour débutants paralysés
                  </Link>
                  <Link to="/blog/epargne-de-precaution-combien" className="block text-sm text-primary hover:underline">
                    Épargne de précaution : combien mettre de côté
                  </Link>
                  <Link to="/blog/charge-mentale-financiere" className="block text-sm text-primary hover:underline">
                    Charge mentale financière : comment l'alléger
                  </Link>
                  <Link to="/blog/epargner-petit-salaire" className="block text-sm text-primary hover:underline">
                    Comment épargner avec un petit salaire
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="p-8 bg-emerald-pastel/60 border border-border rounded-2xl text-center mb-14">
            <h3 className="text-xl font-display font-bold text-foreground mb-3">
              Découvre ton parcours personnalisé
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              28 jours de coaching adapté à ton profil {profile.name}. Gratuit 7 jours.
            </p>
            <AppStoreBadge className="mx-auto" />
          </div>

          {/* Other profiles */}
          <div>
            <h3 className="text-xl font-display font-bold text-foreground mb-6">Les autres profils</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {otherProfiles.map((p) => (
                <Link
                  key={p.slug}
                  to={`/profil/${p.slug}`}
                  className="flex items-start gap-4 p-5 bg-card border border-border rounded-2xl hover:shadow-md transition-all"
                >
                  <span className="text-2xl flex-shrink-0">{p.emoji}</span>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">{p.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{p.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
