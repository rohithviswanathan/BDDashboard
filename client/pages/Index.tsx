import React, { useState } from "react";
import {
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  BarChart3,
  Users,
  Zap,
  Shield,
  Activity,
  Settings,
  TrendingUp,
  PieChart,
} from "lucide-react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-black text-transparent bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text">
              Nexus
            </h1>
          </div>
          <nav className="flex items-center gap-3">
            <button className="text-gray-700 font-semibold hover:text-blue-600 transition">
              Features
            </button>
            <button className="text-gray-700 font-semibold hover:text-blue-600 transition">
              Pricing
            </button>
            <button className="btn-secondary">Login</button>
            <button className="btn-primary">Start Free Trial</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-100 rounded-full opacity-30 blur-3xl"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8 animate-slide-in-left">
            <div className="badge">📊 Complete Sales Intelligence</div>
            <h2 className="text-6xl md:text-7xl font-black leading-tight">
              Drive Business{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-600 via-red-600 to-blue-600 bg-clip-text">
                Growth with Data
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Nexus is the all-in-one dashboard for business development teams.
              Track leads, manage pipelines, analyze performance, and close more
              deals with powerful insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="btn-primary flex items-center justify-center gap-2">
                Start Free Trial <ChevronRight size={18} />
              </button>
              <button className="btn-secondary">Watch Demo</button>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-600 pt-6">
              <div>
                <p className="font-black text-blue-600">10,000+</p>
                <p>Active Users</p>
              </div>
              <div>
                <p className="font-black text-red-600">99.9%</p>
                <p>Uptime SLA</p>
              </div>
              <div>
                <p className="font-black text-blue-600">24/7</p>
                <p>Support</p>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-red-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl overflow-hidden">
                {/* Mock Dashboard */}
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-white font-bold">Sales Pipeline</h3>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-300">Negotiation</span>
                        <span className="text-blue-400 font-semibold">$450K</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-300">Proposal</span>
                        <span className="text-red-400 font-semibold">$320K</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-red-500 h-2 rounded-full w-1/2"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-300">Discovery</span>
                        <span className="text-green-400 font-semibold">$280K</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-2/3"></div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-700">
                    <div className="flex justify-between">
                      <span className="text-gray-400 text-sm">Total Pipeline</span>
                      <span className="text-white font-black text-lg">
                        $1,050K
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="badge mb-6 justify-center">Powerful Features</div>
            <h2 className="section-title">Everything You Need</h2>
            <p className="section-subtitle">
              Build, manage, and scale your business development operations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Sales Pipeline Management",
                desc: "Visual pipeline management with drag-and-drop stages. Track every opportunity from initial contact to closed deal.",
                color: "from-blue-600",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Lead Intelligence",
                desc: "Comprehensive lead database with automatic enrichment, scoring, and qualification to identify high-value prospects.",
                color: "from-red-600",
              },
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Activity Tracking",
                desc: "Track all customer interactions, emails, calls, and meetings in one unified timeline for complete visibility.",
                color: "from-blue-600",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Analytics & Reporting",
                desc: "Real-time dashboards with customizable reports. Monitor win rates, pipeline velocity, and forecast accuracy.",
                color: "from-red-600",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Team Collaboration",
                desc: "Built-in collaboration tools with task assignments, notes, and real-time updates across your entire team.",
                color: "from-blue-600",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Advanced Integrations",
                desc: "Seamless integration with email, calendar, and popular business tools. Sync data automatically across platforms.",
                color: "from-red-600",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group feature-card"
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                <div className={`text-blue-600 mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
                <div
                  className={`h-1 w-12 bg-gradient-to-r ${feature.color} to-red-600 rounded-full mt-4 transform origin-left group-hover:w-full transition-all duration-300`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="badge mb-6 justify-center">Use Cases</div>
            <h2 className="section-title">Built for Your Industry</h2>
            <p className="section-subtitle">
              Nexus adapts to any business development scenario
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
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
            ].map((useCase, idx) => (
              <div key={idx} className="p-8 border-2 border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {useCase.desc}
                </p>
                <div className="flex flex-col gap-2">
                  {useCase.stats.map((stat, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-blue-600 font-semibold">
                      <span className="text-red-600">✓</span> {stat}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="badge mb-6 justify-center">Transparent Pricing</div>
            <h2 className="section-title">Plans for Every Team</h2>
            <p className="section-subtitle">
              Start free. Scale as you grow. No credit card required.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl p-10 transition-all duration-500 transform hover:scale-105 ${
                  plan.featured
                    ? "bg-gradient-to-br from-blue-600 to-red-600 text-white shadow-2xl ring-2 ring-offset-4 ring-blue-600 md:scale-105"
                    : "bg-white border-2 border-gray-100 hover:border-blue-200"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 right-8 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider">
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
                    <li key={i} className="flex items-start gap-3">
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
                  className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                    plan.featured
                      ? "bg-white text-blue-600 hover:bg-gray-100 hover:shadow-lg"
                      : "bg-gradient-to-r from-blue-600 to-red-600 text-white hover:shadow-lg"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <div className="badge mb-6">Get In Touch</div>
              <h2 className="text-5xl font-black mb-6 text-gray-900">
                Ready to Transform Your Sales?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join thousands of business development teams using Nexus to
                close more deals faster. Schedule a demo with our team today.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-blue-50 rounded-xl border border-blue-200">
                <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-gray-900">Phone</p>
                  <p className="text-gray-600">+1 (855) NEXUS-BD</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-red-50 rounded-xl border border-red-200">
                <Mail className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-gray-900">Email</p>
                  <p className="text-gray-600">sales@nexusgrowth.io</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-gradient-to-br from-blue-50 to-red-50 rounded-xl border border-blue-200">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-gray-900">Headquarters</p>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-10 border border-gray-200">
              <h3 className="text-3xl font-bold mb-8 text-gray-900">
                Schedule a Demo
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent font-medium"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Work Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent font-medium"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent font-medium"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent font-medium"
                />
                <textarea
                  name="message"
                  placeholder="Tell us about your team..."
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent font-medium resize-none"
                />
                <button type="submit" className="btn-primary w-full text-lg py-4">
                  Schedule Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-red-600 to-blue-600 opacity-90"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBjMC0zLjMtMi43LTYtNi02cy02IDIuNy02IDYgMi43IDYgNiA2IDYtMi43IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Start Closing More Deals Today
          </h2>
          <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get access to Nexus free for 14 days. No credit card. No
            installation. Try it now and see why thousands of teams trust us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg">
              Try Free for 14 Days
            </button>
            <button className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-black text-lg">Nexus</h3>
              </div>
              <p className="text-sm">
                The all-in-one business development platform for modern sales
                teams.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © 2026 Nexus. All rights reserved.
            </p>
            <div className="flex gap-6 mt-6 md:mt-0">
              <a href="#" className="hover:text-white text-sm">
                Twitter
              </a>
              <a href="#" className="hover:text-white text-sm">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white text-sm">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
