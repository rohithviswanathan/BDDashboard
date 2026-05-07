import React, { useState } from "react";
import { ChevronRight, Mail, Phone, MapPin, Star, TrendingUp, Zap } from "lucide-react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
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
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-lg">N</span>
            </div>
            <h1 className="text-2xl font-black text-transparent bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text">
              Nexus
            </h1>
          </div>
          <nav className="flex items-center gap-3">
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
            <div className="badge">✨ Elevate Your Business</div>
            <h2 className="text-6xl md:text-7xl font-black leading-tight">
              Strategic Growth{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-600 via-red-600 to-blue-600 bg-clip-text">
                Made Simple
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Transform your business vision into reality with our strategic
              consulting services. We deliver results that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button className="btn-primary flex items-center justify-center gap-2">
                Get Started <ChevronRight size={18} />
              </button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-red-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-red-50 rounded-3xl p-12 border border-blue-100 shadow-2xl animate-float">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                      <TrendingUp size={28} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Revenue Growth</p>
                      <p className="text-2xl font-black text-blue-600">
                        +156%
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center text-white">
                      <Star size={28} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Client Success Rate</p>
                      <p className="text-2xl font-black text-red-600">
                        99.2%
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-red-600 rounded-xl flex items-center justify-center text-white">
                      <Zap size={28} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Average Time to Results</p>
                      <p className="text-2xl font-black text-transparent bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text">
                        45 Days
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="badge mb-6 justify-center">Our Expertise</div>
            <h2 className="section-title">Premium Services</h2>
            <p className="section-subtitle">
              Comprehensive solutions crafted to accelerate your business growth
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Strategic Planning",
                desc: "Develop winning strategies that align with your market vision and competitive landscape.",
                color: "from-blue-600",
              },
              {
                icon: "📊",
                title: "Market Intelligence",
                desc: "Deep insights into industry trends, competitive positioning, and growth opportunities.",
                color: "from-red-600",
              },
              {
                icon: "🚀",
                title: "Growth Acceleration",
                desc: "Proven frameworks to scale operations, revenue, and market presence rapidly.",
                color: "from-blue-600",
              },
              {
                icon: "💼",
                title: "Business Development",
                desc: "Build partnerships, enter new markets, and create sustainable business opportunities.",
                color: "from-red-600",
              },
              {
                icon: "⚡",
                title: "Operational Excellence",
                desc: "Optimize workflows, reduce costs, and maximize efficiency across all departments.",
                color: "from-blue-600",
              },
              {
                icon: "🎓",
                title: "Team Development",
                desc: "Build high-performance teams with tailored training and leadership programs.",
                color: "from-red-600",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group feature-card"
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                <div className={`text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
                <div
                  className={`h-1 w-12 bg-gradient-to-r ${service.color} to-red-600 rounded-full mt-4 transform origin-left group-hover:w-20 transition-all duration-300`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="badge mb-6 justify-center">Investment Plans</div>
            <h2 className="section-title">Transparent Pricing</h2>
            <p className="section-subtitle">
              Choose the package that perfectly fits your growth objectives
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter Growth",
                price: "₹2,99,000",
                period: "/month",
                description: "Perfect for emerging businesses",
                features: [
                  "Strategic roadmap development",
                  "Monthly strategy sessions",
                  "Market analysis reports",
                  "Email support",
                  "Up to 5 team members",
                ],
                cta: "Get Started",
              },
              {
                name: "Premium Partnership",
                price: "₹7,99,000",
                period: "/month",
                description: "Ideal for scaling companies",
                featured: true,
                features: [
                  "Everything in Starter",
                  "Dedicated growth consultant",
                  "Weekly strategy calls",
                  "Custom market research",
                  "Business development support",
                  "Priority 24/7 support",
                  "Up to 15 team members",
                ],
                cta: "Start Free Trial",
              },
              {
                name: "Enterprise Excellence",
                price: "Custom",
                period: "based on needs",
                description: "For large-scale transformation",
                features: [
                  "Everything in Premium",
                  "C-suite advisory board",
                  "Daily operational support",
                  "Custom team training",
                  "Merger & acquisition advisory",
                  "Unlimited team members",
                  "Dedicated account manager",
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
                  <div className="absolute -top-4 right-8 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-6 ${plan.featured ? "text-blue-100" : "text-gray-600"}`}>
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className={`${plan.featured ? "text-blue-100" : "text-gray-500"} text-sm`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`${plan.featured ? "text-yellow-300" : "text-blue-600"} text-xl font-black`}>
                        ✓
                      </span>
                      <span className={plan.featured ? "text-blue-50" : "text-gray-700"}>
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

      {/* Why Choose Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center">
            Why Choose Nexus?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Successful Engagements" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "15+", label: "Years of Expertise" },
              { number: "50%", label: "Avg Revenue Growth" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-black mb-2">{stat.number}</div>
                <p className="text-blue-100 text-lg">{stat.label}</p>
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
              <div className="badge mb-6">Let's Connect</div>
              <h2 className="text-5xl font-black mb-6 text-gray-900">
                Ready for Growth?
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Schedule a consultation with our team and discover how we can
                transform your business into a growth powerhouse.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-blue-50 rounded-xl border border-blue-200">
                <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-gray-900">Phone</p>
                  <p className="text-gray-600">+91 (800) NEXUS-ONE</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-red-50 rounded-xl border border-red-200">
                <Mail className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-gray-900">Email</p>
                  <p className="text-gray-600">hello@nexusgrowth.com</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-gradient-to-br from-blue-50 to-red-50 rounded-xl border border-blue-200">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-gray-900">Address</p>
                  <p className="text-gray-600">
                    Sector 74A, DLF Corporate Greens, Gurugram, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-10 border border-gray-200">
              <h3 className="text-3xl font-bold mb-8 text-gray-900">
                Schedule Consultation
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
                  placeholder="Business Email"
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
                  name="subject"
                  placeholder="Company Name"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent font-medium"
                />
                <textarea
                  name="message"
                  placeholder="Tell us about your goals..."
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent font-medium resize-none"
                />
                <button type="submit" className="btn-primary w-full text-lg py-4">
                  Schedule Call
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-red-600 to-blue-600 opacity-90"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBjMC0zLjMtMi43LTYtNi02cy02IDIuNy02IDYgMi43IDYgNiA2IDYtMi43IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Start Your Growth Journey Today
          </h2>
          <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of successful companies that have transformed their
            business with Nexus. Let's build something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg">
              Start Free Trial
            </button>
            <button className="px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              Book a Demo
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
                  <span className="text-white font-black">N</span>
                </div>
                <h3 className="text-white font-black text-lg">Nexus</h3>
              </div>
              <p className="text-sm">
                Strategic consulting for visionary businesses ready to scale.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Strategy Consulting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Business Growth
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Team Development
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
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © 2026 Nexus Growth. All rights reserved.
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
