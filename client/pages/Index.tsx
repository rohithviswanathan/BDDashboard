"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import PricingSection from "@/components/landing/PricingSection";
import ContactSection from "@/components/landing/ContactSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import TrustedPartnersSection from "@/components/landing/TrustedPartnersSection";
import bg_image from "@/assets/jpg/bg_image.jpg";

function ScrollReveal({ children, delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.animation = `fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms forwards`;
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} style={{ opacity: 0, willChange: "opacity, transform" }}>
      {children}
    </div>
  );
}

export default function Index() {
  return (
    <div className="relative min-h-screen">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <Header />

      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat w-screen h-screen"
        style={{
          backgroundImage: `url('${bg_image}')`,
          zIndex: 0,
          backgroundAttachment: "fixed",
          top: "var(--header-height, 65px)",
        }}
      />

      <div className="fixed inset-0 bg-gradient-to-br from-[rgba(255,255,255,0.4)] to-[rgba(255,255,255,0.4)] z-10 pointer-events-none" style={{ top: "var(--header-height, 65px)" }} />

      <div className="relative z-20">
        <ScrollReveal delay={0}>
          <HeroSection />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <FeaturesSection />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <TrustedPartnersSection />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <UseCasesSection />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <PricingSection />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <ContactSection />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <CTASection />
        </ScrollReveal>
      </div>

      <Footer />
    </div>
  );
}