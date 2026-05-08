import { BarChart3 } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 animate-slide-down">
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
  );
}
