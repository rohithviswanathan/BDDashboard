import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative py-20 md:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10 -mt-8">
        <div className="space-y-8 animate-slide-in-left">
          {/* Badge */}
          <div className="inline-block">
            <div className="badge">
              Complete Sales Intelligence
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-6xl md:text-7xl font-black leading-tight text-slate-900 drop-shadow-sm">
            Drive Business{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-600 via-red-600 to-blue-600 bg-clip-text">
              Growth with Data
            </span>
          </h2>

          {/* Subheading */}
          <p className="text-xl text-slate-900 leading-relaxed max-w-lg font-semibold drop-shadow-lg bg-white/40 backdrop-blur-sm p-6 rounded-lg border border-white/60">
            Nexus is the all-in-one dashboard for business development teams.
            Track leads, manage pipelines, analyze performance, and close more
            deals with powerful insights.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {/* Primary Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="relative px-8 py-4 font-bold text-white text-lg rounded-xl overflow-hidden group transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #ef4444 100%)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-2">
                Start Free Trial
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>

            {/* Secondary Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="relative px-8 py-4 font-bold text-slate-900 text-lg rounded-xl overflow-hidden group transition-all duration-300 hover:scale-105 active:scale-95 bg-white shadow-md hover:shadow-lg border border-slate-200"
            >
              <div className="absolute inset-0 bg-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center gap-2">
                ▶ Watch Demo
              </div>
            </button>
          </div>

          {/* Stats Section */}
          <div className="flex items-center gap-6 text-sm text-slate-700 pt-6 bg-white/80 p-6 rounded-xl border border-slate-200 backdrop-blur-sm max-w-sm animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="animate-bounce-up hover:scale-110 transition-all" style={{ animationDelay: "0s" }}>
              <p className="font-black text-2xl text-slate-900">10K+</p>
              <p className="text-slate-600 text-sm">Active Users</p>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-slate-300 to-transparent"></div>
            <div className="animate-bounce-up hover:scale-110 transition-all" style={{ animationDelay: "0.1s" }}>
              <p className="font-black text-2xl text-slate-900">99.9%</p>
              <p className="text-slate-600 text-sm">Uptime SLA</p>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-slate-300 to-transparent"></div>
            <div className="animate-bounce-up hover:scale-110 transition-all" style={{ animationDelay: "0.2s" }}>
              <p className="font-black text-2xl text-slate-900">24/7</p>
              <p className="text-slate-600 text-sm">Support</p>
            </div>
          </div>
        </div>

       {/* Right Side - Dashboard Card */}
        <div className="animate-slide-in-right">
          <div className="relative group animate-float">
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-400 to-red-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>

            {/* Dashboard Card */}
            <div className="relative bg-white rounded-3xl p-8 border border-slate-200 shadow-xl overflow-hidden">
              {/* Mock Dashboard */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-slate-900 font-bold text-lg">Sales Pipeline</h3>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDuration: "2s" }}></div>
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDuration: "2s", animationDelay: "0.4s" }}></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDuration: "2s", animationDelay: "0.8s" }}></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600 font-medium">Negotiation</span>
                      <span className="text-blue-600 font-bold">$450K</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-blue-500 h-2 rounded-full w-3/4 animate-pulse" style={{ animationDuration: "3s" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600 font-medium">Proposal</span>
                      <span className="text-red-600 font-bold">$320K</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-red-500 h-2 rounded-full w-1/2 animate-pulse" style={{ animationDuration: "3s", animationDelay: "0.5s" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-600 font-medium">Discovery</span>
                      <span className="text-green-600 font-bold">$280K</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-green-500 h-2 rounded-full w-2/3 animate-pulse" style={{ animationDuration: "3s", animationDelay: "1s" }}></div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="flex justify-between">
                    <span className="text-slate-500 text-sm">Total Pipeline</span>
                    <span className="text-slate-900 font-black text-lg animate-pulse" style={{ animationDuration: "2s" }}>
                      $1.05M
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}