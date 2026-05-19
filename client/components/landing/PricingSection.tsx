import { motion, useReducedMotion } from "framer-motion";
import { landingEase } from "@/components/landing/Reveal";

export default function PricingSection() {
  const reduce = useReducedMotion();

  const plans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "For small teams just starting",
      features: [
        "Up to 5 users",
        "5,000 contacts",
        "Basic pipeline management",
        "Email integration",
        "Weekly reports",
        "Email support",
      ],
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "For growing business dev teams",
      featured: true,
      features: [
        "Up to 25 users",
        "50,000 contacts",
        "Advanced analytics",
        "Full integrations",
        "Real-time reports",
        "Custom workflows",
        "Priority support",
        "API access",
      ],
      cta: "Start Free Trial",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "volume pricing",
      description: "For large-scale operations",
      features: [
        "Unlimited users",
        "Unlimited contacts",
        "Custom workflows",
        "Advanced security",
        "SLA guarantee",
        "Dedicated support",
        "Custom integrations",
        "On-premise option",
      ],
      cta: "Contact Sales",
    },
  ];

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.08 },
    },
  };

  return (
    <section
      id="pricing"
      className="landing-section-bg py-28 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16 md:mb-20 max-w-3xl mx-auto"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: landingEase }}
        >
          <div className="badge mb-6 justify-center shadow-sm">
            Transparent Pricing
          </div>
          <h2 className="section-title !mb-4">Plans for Every Team</h2>
          <p className="section-subtitle text-slate-600">
            Start free. Scale as you grow. No credit card required.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 36,
                  scale: reduce ? 1 : plan.featured ? 0.93 : 0.97,
                },
                visible: {
                  opacity: 1,
                  y: plan.featured ? -4 : 0,
                  scale: plan.featured ? 1.02 : 1,
                  transition: { duration: 0.7, ease: landingEase },
                },
              }}
              className={`group/plan relative z-0 rounded-2xl p-8 md:p-10 flex flex-col ${
                plan.featured
                  ? "bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)] ring-1 ring-white/20 transition-[transform,box-shadow,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_36px_70px_-22px_rgba(0,0,0,0.55)] hover:brightness-110"
                  : "landing-glass-panel landing-hover-card ring-slate-200/70 border border-slate-300"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 right-6 rounded-full bg-white/95 text-gray-800 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest shadow-md">
                  Most Popular
                </div>
              )}

              <h3 className="relative z-10 text-2xl font-bold mb-2 tracking-tight transition-transform duration-300 group-hover/plan:translate-x-0.5">
                {plan.name}
              </h3>
              <p
                className={`relative z-10 text-sm mb-6 leading-relaxed ${
                  plan.featured ? "text-gray-100/95" : "text-slate-600"
                }`}
              >
                {plan.description}
              </p>

              <div className="relative z-10 mb-8">
                <span className="text-4xl md:text-5xl font-black tracking-tight">
                  {plan.price}
                </span>
                <span
                  className={`${
                    plan.featured ? "text-gray-300/90" : "text-slate-500"
                  } text-sm font-medium ml-1`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="relative z-10 space-y-3.5 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 text-lg leading-none ${
                        plan.featured ? "text-gray-300" : "text-black"
                      }`}
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span
                      className={
                        plan.featured ? "text-gray-100/95" : "text-slate-700"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => {
                  if (plan.name === "Enterprise") {
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    });
                    return;
                  }
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`relative z-10 w-full py-3.5 rounded-xl font-bold text-base transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 active:scale-100 ${
                  plan.featured
                    ? "bg-white text-gray-800 hover:bg-slate-50 shadow-lg shadow-black/10"
                    : "bg-gradient-to-r from-black to-gray-700 text-white hover:shadow-lg hover:shadow-black/25"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}