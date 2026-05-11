export default function FeaturesSection() {
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

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="badge mb-6 justify-center">
            Powerful Features
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-slate-900">
            Everything You Need
          </h2>
          <p className="text-xl text-slate-700 max-w-2xl mx-auto leading-relaxed">
            Build, manage, and scale your business development operations with our comprehensive platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative"
              style={{
                animation: `slideUp 0.6s ease-out forwards`,
                animationDelay: `${idx * 80}ms`,
              }}
            >
              {/* Glow background on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500/20 to-red-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

              {/* Card */}
              <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                {/* Number */}
                <div className="text-6xl font-black text-transparent bg-gradient-to-r from-blue-600 via-red-600 to-blue-600 bg-clip-text mb-6 group-hover:scale-105 transition-transform duration-500">
                  {feature.number}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-700 leading-relaxed mb-6">
                  {feature.desc}
                </p>

                {/* Animated underline */}
                <div className="flex items-center gap-3">
                  <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-red-600 rounded-full group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
