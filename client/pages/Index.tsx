import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import PricingSection from "@/components/landing/PricingSection";
import ContactSection from "@/components/landing/ContactSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import TrustedPartnersSection from "@/components/landing/TrustedPartnersSection";
import { Reveal } from "@/components/landing/Reveal";
import bg_image from "@/assets/jpg/bg_image.jpg";

export default function Index() {
  return (
    <div className="relative min-h-screen">
      <Header />

      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat w-screen h-screen motion-safe:transition-[background-position] motion-safe:duration-[2.5s] motion-safe:ease-out"
        style={{
          backgroundImage: `url('${bg_image}')`,
          zIndex: 0,
          backgroundAttachment: "fixed",
          top: "var(--header-height, 65px)",
        }}
      />

      {/* Layered scrim: depth without washing out the photography */}
      <div
        className="fixed inset-0 z-10 pointer-events-none motion-safe:animate-[fadeIn_1.2s_ease-out_both]"
        style={{ top: "var(--header-height, 65px)" }}
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/55 via-white/35 to-slate-100/45" />
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-600/[0.06] via-transparent to-red-600/[0.05]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_-10%,rgba(255,255,255,0.55),transparent_55%)]" />
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      <div className="relative z-20">
        <Reveal y={16}>
          <HeroSection />
        </Reveal>
        <FeaturesSection />
        <Reveal y={20} delay={0.04}>
          <TrustedPartnersSection />
        </Reveal>
        <Reveal y={20} delay={0.04}>
          <UseCasesSection />
        </Reveal>
        <Reveal y={20} delay={0.04}>
          <PricingSection />
        </Reveal>
        <Reveal y={20} delay={0.04}>
          <ContactSection />
        </Reveal>
        <Reveal y={16} delay={0.03}>
          <CTASection />
        </Reveal>
      </div>

      <Footer />
    </div>
  );
}
