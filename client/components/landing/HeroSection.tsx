import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { landingEase } from "@/components/landing/Reveal";

export default function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative py-24 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-20 items-center relative z-10 md:-mt-4">
        <div className="space-y-8">
          <div className="inline-block">
            <div className="badge shadow-sm">Complete Sales Intelligence</div>
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-slate-900">
            Drive Business{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-red-600 bg-clip-text">
              Growth with Data
            </span>
          </h2>

          <p className="landing-glass-panel text-lg md:text-xl text-slate-800 leading-relaxed max-w-lg font-medium p-6 md:p-7">
            Nexus is the all-in-one dashboard for business development teams.
            Track leads, manage pipelines, analyze performance, and close more
            deals with powerful insights.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="relative px-8 py-4 font-bold text-white text-base md:text-lg rounded-2xl overflow-hidden group shadow-lg shadow-blue-600/25 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/30 active:translate-y-0"
              style={{
                background:
                  "linear-gradient(135deg, #2563eb 0%, #1d4ed8 42%, #dc2626 100%)",
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center justify-center gap-2">
                Start Free Trial
                <ChevronRight
                  size={20}
                  className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                />
              </span>
            </button>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="relative px-8 py-4 font-bold text-slate-900 text-base md:text-lg rounded-2xl overflow-hidden group transition-[transform,box-shadow,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] landing-glass-panel hover:-translate-y-0.5 hover:bg-white/85 active:translate-y-0"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-slate-100/0 via-slate-200/40 to-slate-100/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative flex items-center justify-center gap-2">
                ▶ Watch Demo
              </span>
            </button>
          </div>

          <div className="landing-glass-panel flex flex-wrap items-stretch gap-6 sm:gap-8 text-sm text-slate-700 p-6 max-w-lg">
            {[
              { label: "10K+", sub: "Active Users" },
              { label: "99.9%", sub: "Uptime SLA" },
              { label: "24/7", sub: "Support" },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`flex items-center gap-6 sm:gap-8 ${i > 0 ? "sm:border-l sm:border-slate-200/80 sm:pl-8" : ""}`}
              >
                <div className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5">
                  <p className="font-black text-2xl text-slate-900 tracking-tight">
                    {s.label}
                  </p>
                  <p className="text-slate-600 text-sm font-medium">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          className="relative"
          initial={false}
          animate={
            reduce
              ? undefined
              : {
                  y: [0, -7, 0],
                }
          }
          transition={
            reduce
              ? undefined
              : {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        >
          <div className="relative group">
            <div className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-br from-blue-500/25 via-white/40 to-red-500/20 blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />

            <div className="relative landing-glass-panel rounded-3xl p-8 md:p-9 overflow-hidden ring-1 ring-slate-200/40">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-red-50/40 pointer-events-none" />
              <div className="relative space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-slate-900 font-bold text-lg tracking-tight">
                    Sales Pipeline
                  </h3>
                  <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500 motion-safe:animate-pulse" />
                    <span
                      className="w-2 h-2 rounded-full bg-red-500 motion-safe:animate-pulse"
                      style={{ animationDelay: "0.35s" }}
                    />
                    <span
                      className="w-2 h-2 rounded-full bg-emerald-500 motion-safe:animate-pulse"
                      style={{ animationDelay: "0.7s" }}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { stage: "Negotiation", amt: "$450K", pct: "75%", bar: "bg-blue-500" },
                    { stage: "Proposal", amt: "$320K", pct: "50%", bar: "bg-red-500" },
                    {
                      stage: "Discovery",
                      amt: "$280K",
                      pct: "66%",
                      bar: "bg-emerald-500",
                    },
                  ].map((row, i) => (
                    <div key={row.stage}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-600 font-medium">
                          {row.stage}
                        </span>
                        <span
                          className={`font-bold ${
                            row.bar.includes("blue")
                              ? "text-blue-600"
                              : row.bar.includes("red")
                                ? "text-red-600"
                                : "text-emerald-600"
                          }`}
                        >
                          {row.amt}
                        </span>
                      </div>
                      <div className="w-full bg-slate-200/90 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-2 rounded-full ${row.bar}`}
                          initial={{ width: reduce ? row.pct : "0%" }}
                          whileInView={{ width: row.pct }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.05,
                            delay: 0.12 + i * 0.08,
                            ease: landingEase,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200/80">
                  <div className="flex justify-between items-baseline">
                    <span className="text-slate-500 text-sm font-medium">
                      Total Pipeline
                    </span>
                    <span className="text-slate-900 font-black text-lg tracking-tight">
                      $1.05M
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
