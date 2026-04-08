import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { blogArticles } from "@/data/blogArticles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BlogIndex = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-14"
          >
            <p className="text-sm uppercase tracking-widest text-primary mb-4 font-medium">Blog</p>
            <h1 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-foreground">
              Mieux comprendre ton rapport à l'argent
            </h1>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto leading-relaxed">
              Des articles concrets sur la finance comportementale, l'épargne, et la psychologie de l'argent. Sans jargon, sans jugement.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {blogArticles.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={`/blog/${article.slug}`}
                  className="block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-md hover:scale-[1.01] transition-all"
                >
                  <div className="h-40 bg-gradient-to-br from-emerald-pastel to-amber-pastel flex items-center justify-center">
                    <span className="text-5xl">📝</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span>{new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</span>
                      <span>·</span>
                      <span>{article.readTime} de lecture</span>
                    </div>
                    <h2 className="text-lg font-display font-bold text-foreground mb-2 leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {article.intro}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogIndex;
