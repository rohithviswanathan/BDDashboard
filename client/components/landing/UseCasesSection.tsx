import { motion, useReducedMotion } from "framer-motion";
import { landingEase } from "@/components/landing/Reveal";

export default function UseCasesSection() {
  const reduce = useReducedMotion();

  const useCases = [
    {
      title: "B2B SaaS",
      desc: "Manage complex sales cycles with multiple decision makers. Track account progression and accelerate expansion revenue.",
      stats: ["45% faster sales cycles", "3x higher deal velocity"],
    },
    {
      title: "Enterprise Sales",
      desc: "Handle large-scale opportunities with collaborative forecasting and advanced permission management.",
      stats: ["$2M+ average deal size", "6-month+ sales cycles"],
    },
    {
      title: "Professional Services",
      desc: "From consulting to implementation, manage client engagements and project-based revenue streams efficiently.",
      stats: ["80% project success rate", "90% client retention"],
    },
    {
      title: "Real Estate & Development",
      desc: "Track property leads, investor relationships, and complex multi-phase transactions in one platform.",
      stats: ["200+ active deals", "Advanced filtering"],
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.05 },
    },
  };

  return (
    <section
      id="usecases"
      className="landing-section-bg py-28 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.72, ease: landingEase }}
        >
          <div className="badge mb-6 justify-center shadow-sm">Use Cases</div>
          <h2 className="section-title !mb-4">Built for Your Industry</h2>
          <p className="section-subtitle text-slate-600">
            Nexus adapts to any business development scenario
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {useCases.map((useCase, idx) => (
            <motion.div
              key={useCase.title}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 26,
                  x: reduce ? 0 : idx % 2 === 0 ? -32 : 32,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  x: 0,
                  transition: { duration: 0.66, ease: landingEase },
                },
              }}
              className="group relative rounded-2xl p-8 landing-glass-panel ring-1 ring-slate-200/60 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-[0_28px_56px_-24px_rgba(15,23,42,0.15)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-red-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-700 transition-colors duration-400">
                  {useCase.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {useCase.desc}
                </p>
                <div className="flex flex-col gap-2">
                  {useCase.stats.map((stat) => (
                    <div
                      key={stat}
                      className="flex items-center gap-2 text-sm text-blue-700 font-semibold"
                    >
                      <span className="text-red-600" aria-hidden>
                        ✓
                      </span>
                      {stat}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
