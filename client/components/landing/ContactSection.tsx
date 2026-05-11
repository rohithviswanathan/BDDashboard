import { useState, type ChangeEvent, type FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    alert("✅ Your demo request has been sent!");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    setErrors({});
  };

  return (
    <section
      id="contact"
      className="landing-section-bg py-28 md:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 lg:gap-16">
        <div className="space-y-8">
          <div>
            <div className="badge mb-6 shadow-sm">Get In Touch</div>
            <h2 className="text-4xl sm:text-5xl font-black mb-5 text-slate-900 tracking-tight">
              Ready to Transform Your Sales?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Join thousands of business development teams using Nexus to close
              more deals faster. Schedule a demo with our team today.
            </p>
          </div>

          <div className="space-y-4">
            <button
              type="button"
              onClick={() => (window.location.href = "tel:+18558639873")}
              className="w-full flex gap-4 p-5 md:p-6 rounded-2xl text-left landing-glass-panel ring-1 ring-slate-200/70 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(37,99,235,0.2)] cursor-pointer group bg-gradient-to-br from-blue-50/80 to-white/60"
            >
              <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5 transition-transform duration-500 group-hover:scale-105" />
              <div>
                <p className="font-bold text-slate-900">Phone</p>
                <p className="text-slate-600 text-sm md:text-base">
                  +1 (855) NEXUS-BD
                </p>
              </div>
            </button>
            <button
              type="button"
              onClick={() =>
                (window.location.href = "mailto:sales@nexusgrowth.io")
              }
              className="w-full flex gap-4 p-5 md:p-6 rounded-2xl text-left landing-glass-panel ring-1 ring-slate-200/70 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(220,38,38,0.15)] cursor-pointer group bg-gradient-to-br from-red-50/70 to-white/60"
            >
              <Mail className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5 transition-transform duration-500 group-hover:scale-105" />
              <div>
                <p className="font-bold text-slate-900">Email</p>
                <p className="text-slate-600 text-sm md:text-base">
                  sales@nexusgrowth.io
                </p>
              </div>
            </button>
            <div className="flex gap-4 p-5 md:p-6 rounded-2xl landing-glass-panel ring-1 ring-slate-200/70 bg-gradient-to-br from-slate-50/90 via-white/70 to-blue-50/40">
              <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-900">Headquarters</p>
                <p className="text-slate-600 text-sm md:text-base">
                  San Francisco, CA
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="relative landing-glass-panel rounded-2xl p-8 md:p-10 ring-1 ring-slate-200/70 shadow-[0_24px_48px_-28px_rgba(15,23,42,0.12)] overflow-hidden">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/30 via-transparent to-red-50/25 pointer-events-none opacity-60" />
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 tracking-tight">
                Schedule a Demo
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                {(["name", "email", "phone", "company"] as const).map((field) => (
                  <div key={field}>
                    <input
                      type={
                        field === "email"
                          ? "email"
                          : field === "phone"
                            ? "tel"
                            : "text"
                      }
                      name={field}
                      placeholder={
                        field === "name"
                          ? "Your Name"
                          : field === "email"
                            ? "Work Email"
                            : field === "phone"
                              ? "Phone Number"
                              : "Company Name"
                      }
                      value={formData[field]}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-200/90 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-400 font-medium transition-[border-color,box-shadow] duration-300 hover:border-slate-300"
                    />
                    {errors[field] && (
                      <p className="text-red-600 text-sm mt-1.5">{errors[field]}</p>
                    )}
                  </div>
                ))}
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us about your team..."
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200/90 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-400 font-medium resize-none transition-[border-color,box-shadow] duration-300 hover:border-slate-300"
                  />
                  {errors.message && (
                    <p className="text-red-600 text-sm mt-1.5">{errors.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-lg font-bold text-white bg-gradient-to-r from-blue-600 via-blue-600 to-red-600 shadow-lg shadow-blue-600/25 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/30 active:translate-y-0"
                >
                  Schedule Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
