"use client";

import React from "react";

interface Partner {
  id: string;
  name: string;
  icon: string;
}

const PARTNERS: Partner[] = [
  { id: "1", name: "SalesForce Pro", icon: "chart" },
  { id: "2", name: "DealTrack", icon: "handshake" },
  { id: "3", name: "PipelineVault", icon: "funnel" },
  { id: "4", name: "LeadGen AI", icon: "target" },
  { id: "5", name: "RevGrowth", icon: "trending" },
  { id: "6", name: "ClientConnect", icon: "network" },
];

const iconMap: Record<string, React.ReactNode> = {
  chart: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  handshake: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  funnel: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 00-1 1v2.586a1 1 0 00.293.707l6.414 6.414v7.293l4-4v-7.293l6.414-6.414A1 1 0 0021 7.586V5a1 1 0 00-1-1H3z" />
    </svg>
  ),
  target: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  trending: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  network: (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM4 20h16a2 2 0 002-2v-2a3 3 0 00-3-3H5a3 3 0 00-3 3v2a2 2 0 002 2z" />
    </svg>
  ),
};

export default function TrustedPartnersSection() {
  const duplicatedPartners = [...PARTNERS, ...PARTNERS];

  return (
    <section className="landing-section-bg relative w-full py-24 md:py-28 overflow-hidden">
      <div className="text-center mb-14 md:mb-16 px-4 max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight text-slate-900 mb-4">
          Our{" "}
          <span className="text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-red-600 bg-clip-text">
            Trusted Partners
          </span>
        </h2>
        <p className="landing-glass-panel text-base md:text-lg text-slate-700 leading-relaxed font-medium p-5 md:p-6 inline-block max-w-2xl">
          Partnering with industry leaders to deliver exceptional business outcomes
        </p>
      </div>

      <div className="relative w-full px-4 overflow-hidden">
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 sm:w-36 bg-gradient-to-r from-[hsl(210_40%_98%)] via-[hsl(210_40%_98%_/_0.65)] to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 sm:w-36 bg-gradient-to-l from-[hsl(210_40%_98%)] via-[hsl(210_40%_98%_/_0.65)] to-transparent"
          aria-hidden
        />

        <div className="flex gap-8 md:gap-12 partners-marquee">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 w-[min(100%,18rem)] sm:w-72 h-44 sm:h-48 group"
            >
              <div className="w-full h-full flex items-center justify-center landing-glass-panel landing-hover-card rounded-3xl ring-1 ring-slate-200/50">
                <div className="text-center space-y-3 md:space-y-4 px-5">
                  <div className="w-[4.5rem] h-[4.5rem] md:w-24 md:h-24 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-red-600 flex items-center justify-center text-white shadow-lg shadow-blue-600/20 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:rotate-3">
                    {iconMap[partner.icon]}
                  </div>
                  <p className="text-sm md:text-base font-semibold text-slate-900 leading-snug tracking-tight">
                    {partner.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes partners-marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(calc(-100% / 2), 0, 0);
          }
        }
        .partners-marquee {
          width: max-content;
          animation: partners-marquee 42s linear infinite;
          will-change: transform;
        }
        .partners-marquee:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .partners-marquee {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
