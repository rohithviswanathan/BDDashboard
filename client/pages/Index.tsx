import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import PricingSection from "@/components/landing/PricingSection";
import ContactSection from "@/components/landing/ContactSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import TrustedPartnersSection from "@/components/landing/TrustedPartnersSection";
import InsightsSection from "@/components/landing/InsightsSection";
import { Reveal } from "@/components/landing/Reveal";
import { LandingScrollChrome } from "@/components/landing/LandingScrollChrome";
import { ScrollLazySection } from "@/components/landing/ScrollLazySection";
import bg_image from "@/assets/jpg/bg_image.jpg";

export default function Index() {
  return (
    <div className="relative min-h-screen">
      <LandingScrollChrome backgroundImageUrl={bg_image} />

      <Header />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      <div className="relative z-20 motion-safe:animate-[fadeIn_0.8s_ease-out_both]">
        <Reveal y={18} variant="fadeUp" amount={0.2}>
          <HeroSection />
        </Reveal>

        <Reveal variant="clip" y={24} amount={0.08}>
          <FeaturesSection />
        </Reveal>

        <ScrollLazySection>
          <Reveal variant="fadeRight" amount={0.15}>
            <InsightsSection />
          </Reveal>
        </ScrollLazySection>

        <ScrollLazySection>
          <Reveal variant="fadeUp" y={28} amount={0.1}>
            <TrustedPartnersSection />
          </Reveal>
        </ScrollLazySection>

        <ScrollLazySection>
          <Reveal variant="fadeLeft" amount={0.1}>
            <UseCasesSection />
          </Reveal>
        </ScrollLazySection>

        <Reveal variant="zoom" amount={0.12}>
          <PricingSection />
        </Reveal>

        <Reveal variant="fadeUp" y={26} amount={0.08}>
          <ContactSection />
        </Reveal>

        <Reveal variant="clip" y={20} amount={0.25}>
          <CTASection />
        </Reveal>
      </div>

      <Footer />
    </div>
  );
}
