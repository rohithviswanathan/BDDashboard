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

// Icon components
const iconMap: Record<string, React.ReactNode> = {
  chart: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  handshake: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  funnel: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 00-1 1v2.586a1 1 0 00.293.707l6.414 6.414v7.293l4-4v-7.293l6.414-6.414A1 1 0 0021 7.586V5a1 1 0 00-1-1H3z" />
    </svg>
  ),
  target: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  trending: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  network: (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM4 20h16a2 2 0 002-2v-2a3 3 0 00-3-3H5a3 3 0 00-3 3v2a2 2 0 002 2z" />
    </svg>
  ),
};

export default function TrustedPartnersSection() {
  const duplicatedPartners = [...PARTNERS, ...PARTNERS];

  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="text-center mb-16 px-4">
        <h2 className="text-6xl md:text-7xl font-black leading-tight text-slate-900 drop-shadow-sm mb-4">
          Our{" "}
          <span className="text-transparent bg-gradient-to-r from-blue-600 via-red-600 to-blue-600 bg-clip-text">
            Trusted Partners
          </span>
        </h2>
        <p className="text-xl text-slate-900 leading-relaxed max-w-2xl mx-auto font-semibold drop-shadow-lg bg-white/40 backdrop-blur-sm p-6 rounded-lg border border-white/60">
          Partnering with industry leaders to deliver exceptional business outcomes
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full px-4 overflow-hidden">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white/10 to-transparent dark:from-gray-950/10 z-10 pointer-events-none" />

        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white/10 to-transparent dark:from-gray-950/10 z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="flex gap-12 animate-scroll">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="flex-shrink-0 w-72 h-48 group"
            >
              {/* Partner Card */}
              <div className="w-full h-full flex items-center justify-center bg-white rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-400 overflow-hidden group">
                <div className="text-center space-y-4 px-6">
                  {/* Icon with gradient background */}
                  <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-red-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {iconMap[partner.icon]}
                  </div>
                  {/* Partner name */}
                  <p className="text-base font-semibold text-slate-900 leading-tight">
                    {partner.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Animation Definition */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }

        .animate-scroll {
          animation: scroll 15s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}