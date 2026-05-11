export default function PricingSection() {
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

  const handlePriceButtonClick = (planName: string) => {
    console.log(`${planName} plan selected`);
    // Could redirect to checkout or scroll to contact form
  };

  return (
    <section id="pricing" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-red-50/20 to-white content-wrapper">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 animate-fade-in-up">
          <div className="badge mb-4 justify-center">💰 Transparent Pricing</div>
          <div className="section-divider" style={{ margin: "1rem auto 2rem" }}></div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">Plans for Every Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Start free. Scale as you grow. No credit card required.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-10 animate-scale-in-smooth smooth-transition ${
                plan.featured
                  ? "bg-gradient-to-br from-blue-600 via-blue-700 to-red-600 text-white md:scale-105 ring-2 ring-offset-4 ring-blue-400 premium-shadow hover:shadow-2xl hover:scale-110"
                  : "bg-white border-2 border-gray-200 hover:border-blue-400 hover:shadow-2xl glass-effect"
              }`}
              style={{
                animationDelay: `${idx * 150}ms`,
              }}
            >
              {plan.featured && (
                <div className="absolute -top-4 right-8 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider animate-swing">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p
                className={`text-sm mb-6 ${
                  plan.featured ? "text-blue-100" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>

              <div className="mb-8">
                <span className="text-5xl font-black">{plan.price}</span>
                <span
                  className={`${
                    plan.featured ? "text-blue-100" : "text-gray-500"
                  } text-sm`}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 animate-fade-in-up"
                    style={{
                      animationDelay: `${idx * 150 + i * 50}ms`,
                    }}
                  >
                    <span
                      className={`${
                        plan.featured ? "text-yellow-300" : "text-blue-600"
                      } text-xl font-black`}
                    >
                      ✓
                    </span>
                    <span
                      className={
                        plan.featured ? "text-blue-50" : "text-gray-700"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePriceButtonClick(plan.name)}
                className={`w-full py-4 rounded-xl font-bold text-lg smooth-transition hover:scale-105 active:scale-95 premium-button ${
                  plan.featured
                    ? "bg-white text-blue-600 hover:bg-gray-50 hover:shadow-2xl"
                    : "bg-gradient-to-r from-blue-600 to-red-600 text-white hover:shadow-2xl"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
