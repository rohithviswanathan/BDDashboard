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
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 content-wrapper">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="badge mb-6 justify-center">Powerful Features</div>
          <h2 className="section-title">Everything You Need</h2>
          <p className="section-subtitle">
            Build, manage, and scale your business development operations
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group feature-card animate-slide-up hover:animate-pulse-scale"
              style={{
                animationDelay: `${idx * 100}ms`,
              }}
            >
              <div className="text-5xl font-black text-transparent bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text mb-4">
                {feature.number}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.desc}
              </p>
              <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-red-600 rounded-full mt-4 transform origin-left group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
