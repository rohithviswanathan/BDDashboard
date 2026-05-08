import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden content-wrapper">
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
          <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <button
              onClick={() => console.log("Start Free Trial clicked")}
              className="btn-primary flex items-center justify-center gap-2 hover:scale-110 transition-transform active:scale-95 group"
            >
              Start Free Trial <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => console.log("Watch Demo clicked")}
              className="btn-secondary hover:scale-105 transition-transform active:scale-95"
            >
              Watch Demo
            </button>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-600 pt-6">
            <div className="animate-bounce-up hover:animate-glow-pulse transition-all" style={{ animationDelay: "0s" }}>
              <p className="font-black text-transparent bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-lg">10,000+</p>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-blue-200 to-red-200"></div>
            <div className="animate-bounce-up hover:animate-glow-pulse transition-all" style={{ animationDelay: "0.1s" }}>
              <p className="font-black text-transparent bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-lg">99.9%</p>
              <p className="text-gray-600">Uptime SLA</p>
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-blue-200 to-red-200"></div>
            <div className="animate-bounce-up hover:animate-glow-pulse transition-all" style={{ animationDelay: "0.2s" }}>
              <p className="font-black text-transparent bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-lg">24/7</p>
              <p className="text-gray-600">Support</p>
            </div>
          </div>
        </div>

        <div className="animate-slide-in-right">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-red-600 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-slate-700 shadow-2xl overflow-hidden animate-float">
              {/* Mock Dashboard */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-bold">Sales Pipeline</h3>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="animate-fade-in-up" style={{ animationDelay: "0s" }}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">Negotiation</span>
                      <span className="text-blue-400 font-semibold">$450K</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">Proposal</span>
                      <span className="text-red-400 font-semibold">$320K</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full w-1/2"></div>
                    </div>
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
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
                    <span className="text-white font-black text-lg animate-pulse">
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
  );
}
