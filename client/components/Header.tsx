export default function Header() {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg flex items-center justify-center font-black text-white text-lg">
              N
            </div>
            <h1 className="text-2xl font-black text-transparent bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text whitespace-nowrap">
              Nexus
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleScroll("features")}
              className="text-gray-700 font-semibold hover:text-blue-600 transition-colors duration-200 text-sm"
            >
              Features
            </button>
            <button
              onClick={() => handleScroll("pricing")}
              className="text-gray-700 font-semibold hover:text-blue-600 transition-colors duration-200 text-sm"
            >
              Pricing
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="text-gray-700 font-semibold hover:text-blue-600 transition-colors duration-200 text-sm"
            >
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => console.log("Login clicked")}
              className="hidden sm:block px-4 py-2 text-gray-700 font-semibold text-sm border-2 border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
            >
              Login
            </button>
            <button
              onClick={() => console.log("Start Free Trial clicked")}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-sm rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 active:scale-95"
            >
              Start Free
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
