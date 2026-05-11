import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
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
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50/20 to-white content-wrapper">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 animate-slide-in-left">
          <div className="space-y-6">
            <div className="badge mb-4">📞 Get In Touch</div>
            <div className="section-divider"></div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
              Ready to Transform Your Sales?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              Join thousands of business development teams using Nexus to
              close more deals faster. Schedule a demo with our team today.
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => window.location.href = "tel:+18558639873"}
              className="w-full flex gap-4 p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl border border-blue-200 animate-bounce-up hover:bg-blue-100/70 hover:shadow-lg hover:border-blue-400 smooth-transition cursor-pointer group premium-card glass-effect"
            >
              <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1 group-hover:scale-125 group-hover:-rotate-12 smooth-transition" />
              <div className="text-left">
                <p className="font-bold text-gray-900 text-lg">Phone</p>
                <p className="text-gray-600 font-medium">+1 (855) NEXUS-BD</p>
              </div>
            </button>
            <button
              onClick={() => window.location.href = "mailto:sales@nexusgrowth.io"}
              className="w-full flex gap-4 p-6 bg-gradient-to-br from-red-50 to-red-100/50 rounded-2xl border border-red-200 animate-bounce-up hover:bg-red-100/70 hover:shadow-lg hover:border-red-400 smooth-transition cursor-pointer group premium-card glass-effect"
              style={{ animationDelay: "0.1s" }}
            >
              <Mail className="w-6 h-6 text-red-600 flex-shrink-0 mt-1 group-hover:scale-125 group-hover:-rotate-12 smooth-transition" />
              <div className="text-left">
                <p className="font-bold text-gray-900 text-lg">Email</p>
                <p className="text-gray-600 font-medium">sales@nexusgrowth.io</p>
              </div>
            </button>
            <div className="flex gap-4 p-6 bg-gradient-to-br from-blue-50 to-red-50 rounded-xl border border-blue-200 animate-bounce-up" style={{ animationDelay: "0.2s" }}>
              <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-gray-900">Headquarters</p>
                <p className="text-gray-600">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-slide-in-right">
          <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-3xl p-10 border border-gray-200 glass-effect premium-shadow">
            <h3 className="text-3xl md:text-4xl font-black mb-2 gradient-text">
              Schedule a Demo
            </h3>
            <p className="text-gray-600 mb-8 font-medium">Get a personalized walkthrough in 15 minutes</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent font-medium transition-all hover:border-blue-300"
              />
              <input
                type="email"
                name="email"
                placeholder="Work Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent font-medium transition-all hover:border-blue-300"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent font-medium transition-all hover:border-blue-300"
              />
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent font-medium transition-all hover:border-blue-300"
              />
              <textarea
                name="message"
                placeholder="Tell us about your team..."
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent font-medium resize-none transition-all hover:border-blue-300"
              />
              <button type="submit" className="btn-primary w-full text-lg py-4 hover:scale-105 transition-transform">
                Schedule Demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
