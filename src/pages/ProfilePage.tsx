import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { profiles } from "@/data/profiles";
import AppStoreBadge from "@/components/AppStoreBadge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProfilePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const profile = profiles.find((p) => p.slug === slug);

  useEffect(() => {
    if (profile) {
      document.title = profile.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", profile.metaDescription);
    }
    window.scrollTo(0, 0);
  }, [profile]);

  if (!profile) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-2xl font-display font-bold text-foreground">Profil introuvable</h1>
          <Link to="/" className="text-primary mt-4 inline-block">← Retour à l'accueil</Link>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-14"
          >
            <span className="text-6xl mb-4 block">{profile.emoji}</span>
            <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground mb-3">
              {profile.name}
            </h1>
            <p className="text-lg text-muted-foreground italic max-w-lg mx-auto">
              {profile.tagline}
            </p>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <p className="text-base text-foreground/80 leading-relaxed">{profile.description}</p>
          </motion.div>

          {/* Tu te reconnais si... */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-12 p-8 bg-card border border-border rounded-2xl"
          >
            <h2 className="text-xl font-display font-bold text-foreground mb-5">Tu te reconnais si...</h2>
            <ul className="space-y-3">
              {profile.recognizeSigns.map((sign, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-primary mt-1 flex-shrink-0">✓</span>
                  <span className="text-foreground/80 leading-relaxed">{sign}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Ce que Noory te propose */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-xl font-display font-bold text-foreground mb-4">Ce que Noory te propose</h2>
            <p className="text-foreground/80 leading-relaxed">{profile.nooryOffer}</p>
          </motion.div>

          {/* Semaine par semaine */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mb-14"
          >
            <h2 className="text-xl font-display font-bold text-foreground mb-6">Ton parcours semaine par semaine</h2>
            <div className="space-y-4">
              {profile.weeks.map((week, i) => (
                <div key={i} className="p-5 rounded-2xl bg-card border border-border">
                  <h3 className="font-bold text-foreground mb-1">{week.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{week.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

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
