import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const APP_STORE = "https://apps.apple.com/fr/app/noory-finance-objectifs/id6746418972";

const profileLinks = [
  { label: "Dépensier Émotionnel", slug: "depensier-emotionnel" },
  { label: "Navigateur à Vue", slug: "navigateur-a-vue" },
  { label: "Quêteur de Sérénité", slug: "queteur-de-serenite" },
  { label: "Bâtisseur Bloqué", slug: "batisseur-bloque" },
  { label: "Investisseur Paralysé", slug: "investisseur-paralyse" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="text-xl font-display font-bold tracking-tight text-foreground">
              Noory
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              Moins subir. Plus choisir.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-3">Explorer</h4>
            <div className="flex flex-col gap-2">
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link>
              <Link to="/quiz" className="text-sm text-muted-foreground hover:text-primary transition-colors">Quiz — Ton profil</Link>
              <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
              <a href={APP_STORE} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                App Store
              </a>
            </div>
          </div>

          {/* Profiles */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-3">Profils financiers</h4>
            <div className="flex flex-col gap-2">
              {profileLinks.map((p) => (
                <Link
                  key={p.slug}
                  to={`/profil/${p.slug}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Blog articles */}
          <div>
            <h4 className="text-sm font-bold text-foreground mb-3">Articles populaires</h4>
            <div className="flex flex-col gap-2">
              <Link to="/blog/depenses-impulsives-comment-arreter" className="text-sm text-muted-foreground hover:text-primary transition-colors">Dépenses impulsives</Link>
              <Link to="/blog/gerer-son-argent-sans-stress" className="text-sm text-muted-foreground hover:text-primary transition-colors">Gérer sans stress</Link>
              <Link to="/blog/profil-financier-psychologie-argent" className="text-sm text-muted-foreground hover:text-primary transition-colors">Profils financiers</Link>
              <Link to="/blog/investir-debutant-peur" className="text-sm text-muted-foreground hover:text-primary transition-colors">Investir sans peur</Link>
            </div>
          </div>
        </div>

        {/* Social + copyright */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} Noory. Tous droits réservés.</span>
            <span>·</span>
            <Link to="/confidentialite" className="hover:text-primary transition-colors">Confidentialité</Link>
            <span>·</span>
            <Link to="/cgu" className="hover:text-primary transition-colors">CGU</Link>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/noory_app" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram @noory_app">
              <Instagram size={18} />
            </a>
            <a href="https://www.tiktok.com/@imad.argent.ethique" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors text-xs font-bold" aria-label="TikTok">
              TT
            </a>
            <a href="https://www.youtube.com/@Imadargentethique" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors text-xs font-bold" aria-label="YouTube">
              YT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
