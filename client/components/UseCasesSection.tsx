export default function UseCasesSection() {
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

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 content-wrapper">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="badge mb-6 justify-center">Use Cases</div>
          <h2 className="section-title">Built for Your Industry</h2>
          <p className="section-subtitle">
            Nexus adapts to any business development scenario
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {useCases.map((useCase, idx) => (
            <div
              key={idx}
              className="p-8 border-2 border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-xl transition-all duration-300 animate-bounce-up bg-white/70 backdrop-blur"
              style={{
                animationDelay: `${idx * 150}ms`,
              }}
            >
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {useCase.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {useCase.desc}
              </p>
              <div className="flex flex-col gap-2">
                {useCase.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-blue-600 font-semibold animate-slide-in-left"
                    style={{
                      animationDelay: `${idx * 150 + i * 100}ms`,
                    }}
                  >
                    <span className="text-red-600">✓</span> {stat}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
