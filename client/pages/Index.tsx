import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="page-background" />

      {/* Content */}
      <Header />
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <PricingSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </div>
  );
}
