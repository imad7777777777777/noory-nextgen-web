import { useSEO } from "@/hooks/useSEO";
import { APP_STORE_URL, BASE_URL, LANG, ORG_NOORY, WEBSITE_NOORY } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import TransformationSection from "@/components/TransformationSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import JourneySection from "@/components/JourneySection";
import ProfileQuizSection from "@/components/ProfileQuizSection";
import ForWhoSection from "@/components/ForWhoSection";
import DifferenceSection from "@/components/DifferenceSection";
import ProductDepthSection from "@/components/ProductDepthSection";
import PhilosophySection from "@/components/PhilosophySection";
import SocialProofSection from "@/components/SocialProofSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HomepageFaqSection, { homepageFaq } from "@/components/HomepageFaqSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  useSEO({
    title: "Coaching financier comportemental — Quiz profil & app",
    description: "Comprends pourquoi tu gères ton argent comme tu le fais. Quiz de profil financier + 28 jours de coaching. Zéro jugement. Gratuit 7 jours sur iPhone.",
    url: "/",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        ORG_NOORY,
        WEBSITE_NOORY,
        {
          "@type": "SoftwareApplication",
          "@id": `${BASE_URL}/#app`,
          name: "Noory",
          operatingSystem: "iOS",
          applicationCategory: "Finance",
          description:
            "Coaching financier comportemental. Micro-actions quotidiennes, zéro jugement.",
          offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
          downloadUrl: APP_STORE_URL,
          inLanguage: LANG,
          publisher: { "@id": `${BASE_URL}/#organization` },
        },
        {
          "@type": "FAQPage",
          "@id": `${BASE_URL}/#faq`,
          inLanguage: LANG,
          isPartOf: { "@id": `${BASE_URL}/#website` },
          mainEntity: homepageFaq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        },
      ],
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <JourneySection />
        <TransformationSection />
        <HowItWorksSection />
        <ProfileQuizSection />
        <ForWhoSection />
        <DifferenceSection />
        <ProductDepthSection />
        <PhilosophySection />
        <SocialProofSection />
        <TestimonialsSection />
        <HomepageFaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
