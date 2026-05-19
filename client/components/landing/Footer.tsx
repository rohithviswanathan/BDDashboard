import { BarChart3 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-gradient-to-b from-gray-950 via-gray-950 to-black text-gray-400 pt-0 pb-16 px-4 sm:px-6 lg:px-8">
      <div
        className="h-px w-full mb-14 max-w-7xl mx-auto bg-[linear-gradient(90deg,transparent_0%,rgba(100,100,100,0.42)_42%,rgba(80,80,80,0.38)_58%,transparent_100%)]"
        aria-hidden
      />
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-black to-gray-600 rounded-lg flex items-center justify-center cursor-pointer hover:opacity-80" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-black text-lg cursor-pointer hover:opacity-80" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Nexus</h3>
            </div>
            <p className="text-sm">
              The all-in-one business development platform for modern sales
              teams.
            </p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-white transition">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-white transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#privacy" className="hover:text-white transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2026 Nexus. All rights reserved.</p>
          <div className="flex gap-6 mt-6 md:mt-0">
            <a href="#twitter" className="hover:text-white text-sm transition">
              Twitter
            </a>
            <a href="#linkedin" className="hover:text-white text-sm transition">
              LinkedIn
            </a>
            <a href="#github" className="hover:text-white text-sm transition">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
