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
    <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/30 to-white content-wrapper">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 animate-fade-in-up">
          <div className="badge mb-4 justify-center">✨ Powerful Features</div>
          <div className="section-divider" style={{ margin: "1rem auto 2rem" }}></div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">Everything You Need</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Build, manage, and scale your business development operations with industry-leading tools
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="premium-card glass-effect group animate-scale-in-smooth hover:border-blue-200/50"
              style={{
                animationDelay: `${idx * 100}ms`,
              }}
            >
              <div className="text-6xl font-black text-transparent bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text mb-6 group-hover:scale-110 smooth-transition">
                {feature.number}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:gradient-text smooth-transition">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-medium mb-6">
                {feature.desc}
              </p>
              <div className="h-1.5 w-12 bg-gradient-to-r from-blue-600 to-red-600 rounded-full transform origin-left group-hover:w-full smooth-transition"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
