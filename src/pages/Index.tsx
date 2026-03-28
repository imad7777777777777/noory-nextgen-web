import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyNoorySection from "@/components/WhyNoorySection";
import TransformationSection from "@/components/TransformationSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ForWhoSection from "@/components/ForWhoSection";
import DifferenceSection from "@/components/DifferenceSection";
import TrustSection from "@/components/TrustSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyNoorySection />
      <TransformationSection />
      <HowItWorksSection />
      <ForWhoSection />
      <DifferenceSection />
      <TrustSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
};

export default Index;
