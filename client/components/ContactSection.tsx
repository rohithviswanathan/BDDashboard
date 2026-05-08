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
    <section className="py-24 px-4 sm:px-6 lg:px-8 content-wrapper">
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
            <div className="flex gap-4 p-6 bg-blue-50 rounded-xl border border-blue-200 animate-bounce-up">
              <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-gray-900">Phone</p>
                <p className="text-gray-600">+1 (855) NEXUS-BD</p>
              </div>
            </div>
            <div className="flex gap-4 p-6 bg-red-50 rounded-xl border border-red-200 animate-bounce-up" style={{ animationDelay: "0.1s" }}>
              <Mail className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-gray-900">Email</p>
                <p className="text-gray-600">sales@nexusgrowth.io</p>
              </div>
            </div>
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
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-10 border border-gray-200 shadow-xl">
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
