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
              className={`relative rounded-2xl p-8 md:p-10 flex flex-col transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                plan.featured
                  ? "bg-gradient-to-br from-blue-700 via-blue-600 to-red-600 text-white shadow-[0_24px_60px_-20px_rgba(37,99,235,0.45)] ring-1 ring-white/20"
                  : "landing-glass-panel ring-slate-200/70 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-24px_rgba(15,23,42,0.14)]"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 right-6 rounded-full bg-white/95 text-blue-700 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest shadow-md">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2 tracking-tight">{plan.name}</h3>
              <p
                className={`text-sm mb-6 leading-relaxed ${
                  plan.featured ? "text-blue-50/95" : "text-slate-600"
                }`}
              >
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="text-4xl md:text-5xl font-black tracking-tight">
                  {plan.price}
                </span>
                <span
                  className={`${
                    plan.featured ? "text-blue-100/90" : "text-slate-500"
                  } text-sm font-medium ml-1`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3.5 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 text-lg leading-none ${
                        plan.featured ? "text-amber-200" : "text-blue-600"
                      }`}
                      aria-hidden
                    >
                      ✓
                    </span>
                    <span
                      className={
                        plan.featured ? "text-blue-50/95" : "text-slate-700"
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
                className={`w-full py-3.5 rounded-xl font-bold text-base transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 active:translate-y-0 ${
                  plan.featured
                    ? "bg-white text-blue-700 hover:bg-slate-50 shadow-lg shadow-black/10"
                    : "bg-gradient-to-r from-blue-600 to-red-600 text-white hover:shadow-lg hover:shadow-blue-600/25"
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
