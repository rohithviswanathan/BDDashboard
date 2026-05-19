import { motion, useReducedMotion } from "framer-motion";
import { landingEase } from "@/components/landing/Reveal";

export default function FeaturesSection() {
  const reduce = useReducedMotion();

  const features = [
    {
      number: "01",
      title: "Sales Pipeline Management",
      desc: "Visual pipeline management with drag-and-drop stages. Track every opportunity from initial contact to closed deal.",
    },
    {
      number: "02",
      title: "Lead Intelligence",
      desc: "Comprehensive lead database with automatic enrichment, scoring, and qualification to identify high-value prospects.",
    },
    {
      number: "03",
      title: "Activity Tracking",
      desc: "Track all customer interactions, emails, calls, and meetings in one unified timeline for complete visibility.",
    },
    {
      number: "04",
      title: "Analytics & Reporting",
      desc: "Real-time dashboards with customizable reports. Monitor win rates, pipeline velocity, and forecast accuracy.",
    },
    {
      number: "05",
      title: "Team Collaboration",
      desc: "Built-in collaboration tools with task assignments, notes, and real-time updates across your entire team.",
    },
    {
      number: "06",
      title: "Advanced Integrations",
      desc: "Seamless integration with email, calendar, and popular business tools. Sync data automatically across platforms.",
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : 0.07, delayChildren: 0.06 },
    },
  };

  return (
    <section
      id="features"
      className="landing-section-bg py-28 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
          initial={reduce ? false : { opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: landingEase }}
        >
          <div className="badge mb-6 justify-center shadow-sm">Powerful Features</div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 text-slate-900 tracking-tight">
            Everything You Need
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Build, manage, and scale your business development operations with
            our comprehensive platform
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
        >
          {features.map((feature, idx) => (
            <motion.div
              key={feature.number}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 24,
                  x: reduce ? 0 : idx % 2 === 0 ? -36 : 36,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  x: 0,
                  transition: { duration: 0.64, ease: landingEase },
                },
              }}
              className="group relative"
            >
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500/20 to-red-500/15 opacity-0 blur-2xl transition-opacity duration-500 ease-out group-hover:opacity-100" />

              <div className="relative z-0 h-full landing-glass-panel landing-hover-card rounded-2xl p-8 border border-slate-300">
                <div className="relative z-10 text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-red-600 bg-clip-text mb-5 tracking-tight transition-transform duration-500 group-hover:scale-[1.03] origin-left">
                  {feature.number}
                </div>

                <h3 className="relative z-10 text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-700 transition-colors duration-400">
                  {feature.title}
                </h3>

                <p className="relative z-10 text-slate-600 leading-relaxed mb-6 text-[0.95rem] md:text-base">
                  {feature.desc}
                </p>

                <div className="relative z-10 h-0.5 w-12 rounded-full bg-gradient-to-r from-blue-600 to-red-600 group-hover:w-full transition-[width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
