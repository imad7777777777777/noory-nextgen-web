import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import TransformationSection from "@/components/TransformationSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ForWhoSection from "@/components/ForWhoSection";
import DifferenceSection from "@/components/DifferenceSection";
import ProductDepthSection from "@/components/ProductDepthSection";
import PhilosophySection from "@/components/PhilosophySection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <TransformationSection />
      <HowItWorksSection />
      <ForWhoSection />
      <DifferenceSection />
      <ProductDepthSection />
      <PhilosophySection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
};

export default Index;
