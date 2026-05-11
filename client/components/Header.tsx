export default function Header() {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 smooth-transition premium-shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Premium styling */}
          <div className="flex items-center gap-3 flex-shrink-0 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-700 to-red-600 rounded-xl flex items-center justify-center font-black text-white text-lg shadow-lg group-hover:shadow-xl group-hover:scale-110 smooth-transition">
              N
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-black gradient-text whitespace-nowrap leading-tight">
                Nexus
              </h1>
              <p className="text-xs text-gray-500 font-medium">Business Intelligence</p>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-12">
            {[
              { label: "Features", id: "features" },
              { label: "Pricing", id: "pricing" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="text-gray-700 font-semibold text-sm hover:text-blue-600 relative group smooth-transition"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-red-600 group-hover:w-full smooth-transition"></span>
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <button
              onClick={() => console.log("Login clicked")}
              className="hidden sm:block px-6 py-2.5 text-gray-700 font-semibold text-sm rounded-lg border border-gray-300 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 smooth-transition"
            >
              Login
            </button>
            <button
              onClick={() => console.log("Start Free Trial clicked")}
              className="premium-button px-6 py-2.5 bg-gradient-to-r from-blue-600 to-red-600 text-white font-semibold text-sm rounded-lg hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Start Free
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
