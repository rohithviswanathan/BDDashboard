import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Mail, Phone, MapPin } from "lucide-react";

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-black bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
            ConsultAI
          </h1>
          <nav className="flex items-center gap-3">
            <button className="btn-secondary">Login</button>
            <button className="btn-primary">Sign Up</button>
            <button className="btn-primary">As a Guest</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="badge">✨ AI-Powered Consulting Solutions</div>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Transform Your Business with{" "}
              <span className="text-transparent bg-gradient-to-r from-black to-gray-500 bg-clip-text">
                Intelligent AI
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Leverage advanced AI technology to streamline operations, enhance
              decision-making, and accelerate growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary">Get Started</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="animate-slide-up">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 h-96 flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-5xl">🚀</span>
                </div>
                <p className="text-gray-700 font-semibold">
                  Your AI-Powered Dashboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Comprehensive solutions designed to elevate your business
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📊",
                title: "Data Analytics",
                desc: "Deep insights into market trends and business metrics",
              },
              {
                icon: "🤖",
                title: "AI Automation",
                desc: "Streamline workflows and reduce manual tasks",
              },
              {
                icon: "💡",
                title: "Strategic Consulting",
                desc: "Expert guidance for growth and transformation",
              },
              {
                icon: "🔐",
                title: "Enterprise Security",
                desc: "Protect your assets with advanced security measures",
              },
              {
                icon: "🌍",
                title: "Global Reach",
                desc: "Support across multiple regions and time zones",
              },
              {
                icon: "⚡",
                title: "Quick Implementation",
                desc: "Fast deployment with minimal disruption",
              },
            ].map((service, idx) => (
              <div key={idx} className="feature-card">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Pricing Plans</h2>
            <p className="section-subtitle">
              Choose the perfect plan for your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "₹99,000",
                features: [
                  "Basic Analytics Dashboard",
                  "Up to 5 Users",
                  "Email Support",
                  "Monthly Reports",
                ],
              },
              {
                name: "Professional",
                price: "₹299,000",
                featured: true,
                features: [
                  "Advanced AI Features",
                  "Up to 20 Users",
                  "Priority Support",
                  "Custom Reports",
                  "API Access",
                ],
              },
              {
                name: "Enterprise",
                price: "₹999,000",
                features: [
                  "Full AI Suite",
                  "Unlimited Users",
                  "24/7 Dedicated Support",
                  "Custom Integration",
                  "Compliance & Security",
                ],
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 transition-all ${
                  plan.featured
                    ? "bg-gray-900 text-white scale-105 shadow-2xl border-2 border-gold"
                    : "bg-white border border-gray-200 hover:shadow-xl"
                }`}
              >
                {plan.featured && (
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1 bg-gold text-black text-xs font-bold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-gold text-xl">✓</span>
                      <span className={plan.featured ? "text-gray-200" : ""}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={
                    plan.featured
                      ? "btn-gold w-full"
                      : "btn-primary w-full"
                  }
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Feature Comparison</h2>
            <p className="section-subtitle">
              Detailed breakdown of all available features
            </p>
          </div>
          <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
            <table className="w-full">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-8 py-4 text-left font-semibold">Feature</th>
                  <th className="px-8 py-4 text-center font-semibold">
                    Starter
                  </th>
                  <th className="px-8 py-4 text-center font-semibold">
                    Professional
                  </th>
                  <th className="px-8 py-4 text-center font-semibold">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Analytics Dashboard", starter: true, pro: true, ent: true },
                  { feature: "AI Insights", starter: false, pro: true, ent: true },
                  { feature: "API Access", starter: false, pro: true, ent: true },
                  { feature: "Custom Integration", starter: false, pro: false, ent: true },
                  { feature: "Dedicated Support", starter: false, pro: true, ent: true },
                  { feature: "24/7 Support", starter: false, pro: false, ent: true },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-8 py-4 font-semibold text-gray-900">
                      {row.feature}
                    </td>
                    <td className="px-8 py-4 text-center">
                      {row.starter ? "✓" : "—"}
                    </td>
                    <td className="px-8 py-4 text-center">
                      {row.pro ? "✓" : "—"}
                    </td>
                    <td className="px-8 py-4 text-center">
                      {row.ent ? "✓" : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="section-title">Get In Touch</h2>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 h-80 flex flex-col items-center justify-center">
              <div className="text-7xl mb-4">📧</div>
              <p className="text-gray-700 text-center font-semibold">
                We're here to help
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex gap-3 items-start mb-4">
                <MapPin className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-black">Our Office</p>
                  <p className="text-gray-600 text-sm">
                    3rd Floor, Tower 3A, Sector 74A, Gurugram, India 122004
                  </p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <Phone className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-black">Contact</p>
                  <p className="text-gray-600 text-sm">+91 (800) CONSULT-1</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="email"
                name="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="tel"
                name="phone"
                placeholder="98765 43210"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                name="subject"
                placeholder="How can we help?"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <textarea
                name="message"
                placeholder="Describe your request..."
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300">
            Join thousands of companies using ConsultAI to drive growth and
            innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-100">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">ConsultAI</h3>
              <p className="text-sm">
                Empowering businesses with intelligent AI solutions.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#features" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
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
              <h4 className="text-white font-semibold mb-4">Legal</h4>
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
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © 2026 ConsultAI. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                Twitter
              </a>
              <a href="#" className="hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
