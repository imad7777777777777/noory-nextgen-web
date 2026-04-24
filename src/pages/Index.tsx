import { useSEO } from "@/hooks/useSEO";
import { APP_STORE_URL, BASE_URL, LANG, ORG_NOORY, WEBSITE_NOORY } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import TransformationSection from "@/components/TransformationSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProfileQuizSection from "@/components/ProfileQuizSection";
import ForWhoSection from "@/components/ForWhoSection";
import DifferenceSection from "@/components/DifferenceSection";
import ProductDepthSection from "@/components/ProductDepthSection";
import PhilosophySection from "@/components/PhilosophySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  useSEO({
    title: "Noory — Coaching financier comportemental | Gère ton argent sans culpabilité",
    description: "Découvre ton profil financier et suis 28 jours de coaching adapté à ta psychologie. Micro-actions quotidiennes, zéro jugement. Gratuit 7 jours sur iPhone.",
    url: "/",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        ORG_NOORY,
        WEBSITE_NOORY,
        {
          "@type": "MobileApplication",
          "@id": `${BASE_URL}/#app`,
          name: "Noory",
          operatingSystem: "iOS",
          applicationCategory: "FinanceApplication",
          description:
            "Coaching financier comportemental. Micro-actions quotidiennes, zéro jugement.",
          offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
          downloadUrl: APP_STORE_URL,
          inLanguage: LANG,
          publisher: { "@id": `${BASE_URL}/#organization` },
        },
      ],
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <TransformationSection />
      <HowItWorksSection />
      <ProfileQuizSection />
      <ForWhoSection />
      <DifferenceSection />
      <ProductDepthSection />
      <PhilosophySection />
      <TestimonialsSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
};

export default Index;
