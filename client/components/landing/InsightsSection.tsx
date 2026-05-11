import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { landingEase } from "@/components/landing/Reveal";

const INSIGHTS = [
  {
    tag: "Perspective | Pipeline",
    title: "Designing the data-driven BD org of tomorrow",
    blurb:
      "How revenue teams operationalize pipeline hygiene, forecasting discipline, and executive-ready narratives in one system.",
  },
  {
    tag: "Report | Revenue",
    title: "Forecast accuracy without the spreadsheet chaos",
    blurb:
      "Survey-backed patterns from teams that cut cycle time by unifying activity, opportunity stage, and leading indicators.",
  },
  {
    tag: "Brief | Enablement",
    title: "From first meeting to signed order: a repeatable motion",
    blurb:
      "Playbooks, mutual success plans, and live pipeline reviews that keep complex deals moving with fewer surprises.",
  },
  {
    tag: "Blog | Leadership",
    title: "Next-gen revenue war rooms on a single pane of glass",
    blurb:
      "Why modern BD leaders anchor weekly reviews on live dashboards instead of static decks.",
  },
  {
    tag: "Guide | Integrations",
    title: "When your CRM, inbox, and calendar finally agree",
    blurb:
      "Practical integration patterns that reduce duplicate work and keep customer truth in one place.",
  },
];

/**
 * TM-style horizontal editorial strip: rich cards, snap scroll, in-view motion.
 */
export default function InsightsSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="insights"
      className="relative landing-section-bg py-24 md:py-28 overflow-hidden"
      aria-labelledby="insights-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-14">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: landingEase }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700 mb-3">
            Latest thinking
          </p>
          <h2
            id="insights-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight max-w-4xl"
          >
            Ideas that help you see around corners —{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-red-600 bg-clip-text">
              built for BD leaders
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl leading-relaxed">
            Research, perspectives, and field notes on how teams scale pipeline
            quality without slowing down execution.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-28 bg-gradient-to-r from-[hsl(210_40%_98%)] via-[hsl(210_40%_98%_/_0.75)] to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-28 bg-gradient-to-l from-[hsl(210_40%_98%)] via-[hsl(210_40%_98%_/_0.75)] to-transparent"
          aria-hidden
        />

        <div
          className="flex gap-5 md:gap-7 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory scrollbar-thin scroll-pl-4"
          style={{
            scrollbarWidth: "thin",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {INSIGHTS.map((item, idx) => (
            <motion.article
              key={item.title}
              className="snap-start shrink-0 w-[min(88vw,22rem)] sm:w-[26rem] md:w-[28rem] landing-glass-panel rounded-2xl p-7 md:p-8 ring-1 ring-slate-200/60 flex flex-col justify-between min-h-[17.5rem] md:min-h-[18.5rem]"
              initial={reduce ? false : { opacity: 0, y: 28, rotate: idx % 2 === 0 ? -0.4 : 0.4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.65,
                delay: reduce ? 0 : idx * 0.06,
                ease: landingEase,
              }}
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-3">
                  {item.tag}
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm md:text-[0.95rem] leading-relaxed">
                  {item.blurb}
                </p>
              </div>
              <button
                type="button"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 group"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Talk to us
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
