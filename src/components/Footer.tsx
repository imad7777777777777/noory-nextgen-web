import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#" className="text-xl font-extrabold tracking-tight text-gradient">
              NOORY
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Vos finances, vos valeurs, vos objectifs.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/noory_app"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@imad.argent.ethique"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors text-xs font-bold"
              aria-label="TikTok"
            >
              TT
            </a>
            <a
              href="https://www.youtube.com/@Imadargentethique"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors text-xs font-bold"
              aria-label="YouTube"
            >
              YT
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Noory. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
