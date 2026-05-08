"use client";

import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import PricingSection from "@/components/landing/PricingSection";
import ContactSection from "@/components/landing/ContactSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import bg_image from "@/assets/jpg/bg_image.jpg";

export default function Index() {
  return (
    <div className="relative min-h-screen">
      {/* Header - Fixed on top */}
      <Header />

      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat w-screen h-screen"
        style={{
          backgroundImage: `url('${bg_image}')`,
          zIndex: 0,
          backgroundAttachment: "fixed",
          top: "var(--header-height, 65px)",
        }}
      />

      {/* Balanced overlay for readability */}
      <div className="fixed inset-0 bg-gradient-to-br from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.4)] z-10 pointer-events-none" style={{ top: "var(--header-height, 65px)" }} />

      {/* Content overlays - scrolls above background */}
      <div className="relative z-20">
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <PricingSection />
        <ContactSection />
        <CTASection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}