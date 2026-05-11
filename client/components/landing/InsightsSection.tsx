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

const MARQUEE_ITEMS = [...INSIGHTS, ...INSIGHTS];

export default function InsightsSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="insights"
      className="relative py-24 md:py-28 overflow-hidden"
      aria-labelledby="insights-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 md:mb-12">
        <motion.div
          className="max-w-3xl text-left"
          data-insights-intro=""
          initial={reduce ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: landingEase }}
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
            <div
              className="hidden sm:block w-1 shrink-0 rounded-full bg-gradient-to-b from-blue-600 via-blue-500 to-red-600 self-stretch min-h-[6.5rem]"
              aria-hidden
            />
            <div className="min-w-0 flex-1 border-l-4 border-blue-600/85 pl-4 sm:border-l-0 sm:pl-0">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.28em] text-blue-700 mb-3 sm:mb-4">
                Latest thinking
              </p>
              <h2
                id="insights-heading"
                className="text-3xl sm:text-4xl md:text-[2.65rem] font-black text-slate-900 tracking-tight text-balance leading-[1.12] mb-2"
              >
                Ideas that help you see around corners —{" "}
                <span className="leading-[1.4] insights-grad-motion text-transparent bg-gradient-to-r from-blue-600 via-red-600 to-blue-600 bg-clip-text">
                  built for BD leaders
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed text-pretty">
                Research, perspectives, and field notes on how teams scale
                pipeline quality without slowing down execution.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative w-full">
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-14 sm:w-24 bg-gradient-to-r from-[hsl(210_40%_98%)] via-[hsl(210_40%_98%_/_0.85)] to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-14 sm:w-24 bg-gradient-to-l from-[hsl(210_40%_98%)] via-[hsl(210_40%_98%_/_0.85)] to-transparent"
          aria-hidden
        />

        <div className="insights-track-wrap px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="flex gap-5 md:gap-7 insights-marquee w-max py-1">
            {MARQUEE_ITEMS.map((item, idx) => (
              <article
                key={`${item.title}-${idx}`}
                className="group/card shrink-0 w-[min(85vw,21rem)] sm:w-[24rem] md:w-[26rem] landing-glass-panel landing-hover-card rounded-2xl p-7 md:p-8 ring-1 ring-slate-200/60 flex flex-col justify-between min-h-[16.5rem] md:min-h-[17.5rem] cursor-default bg-white/95 backdrop-blur-md"
              >
                <div className="relative z-10">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-3 transition-colors duration-300 group-hover/card:text-blue-800">
                    {item.tag}
                  </p>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 leading-snug mb-3 transition-colors duration-300 group-hover/card:text-blue-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-[0.95rem] leading-relaxed">
                    {item.blurb}
                  </p>
                </div>
                <button
                  type="button"
                  className="relative z-10 mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 rounded-lg px-1 py-1 -mx-1 transition-[transform,color,gap] duration-300 hover:gap-3 hover:text-blue-800"
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  Talk to us
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5" />
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes insights-gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        .insights-grad-motion {
          background-size: 220% auto;
          animation: insights-gradient-shift 9s linear infinite;
        }
        [data-insights-intro]:hover .insights-grad-motion {
          animation-play-state: paused;
        }
        @keyframes insights-marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(calc(-100% / 2), 0, 0);
          }
        }
        .insights-marquee {
          animation: insights-marquee 38s linear infinite;
          will-change: transform;
        }
        .insights-track-wrap:hover .insights-marquee {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .insights-grad-motion {
            animation: none;
            background-position: 0% 50%;
          }
          .insights-marquee {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
