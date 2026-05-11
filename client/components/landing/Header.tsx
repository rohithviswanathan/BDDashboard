import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 header-smooth-transition ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-2xl border-b border-slate-200/50 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.12)]' 
          : 'bg-white/88 backdrop-blur-xl border-b border-white/30 shadow-[0_4px_24px_-6px_rgba(15,23,42,0.08)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 flex-shrink-0 cursor-pointer group header-logo-glow"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative w-10 h-10">
              {/* Multi-layer glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out" />
              
              {/* Logo box with smooth scale */}
              <div className="relative w-10 h-10 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg flex items-center justify-center font-black text-white text-lg group-hover:scale-125 transition-transform duration-500 ease-out shadow-lg">
                N
              </div>
            </div>

            {/* Brand name */}
            <h1 className="text-2xl font-black bg-gradient-to-r from-blue-600 via-blue-700 to-red-600 bg-clip-text text-transparent whitespace-nowrap group-hover:opacity-80 transition-opacity duration-400 ease-out">
              Nexus
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {['Features', 'Insights', 'Pricing', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleScroll(item.toLowerCase())}
                className="header-nav-item relative px-4 py-2 font-semibold text-sm text-gray-700 group transition-colors duration-300 ease-out hover:text-gray-900"
              >
                <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300 ease-out">
                  {item}
                </span>
                <div className="header-nav-underline" />
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="hidden sm:block relative px-6 py-2 text-gray-700 font-semibold text-sm rounded-xl overflow-hidden group border border-gray-300 transition-all duration-500 ease-out hover:border-blue-600"
            >
              {/* Smooth background slide */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              
              {/* Glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out shadow-inner" />
              
              <span className="relative group-hover:text-blue-600 transition-colors duration-400 ease-out">
                Login
              </span>
            </button>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="relative px-6 py-2 font-semibold text-sm rounded-xl overflow-hidden group text-white transition-all duration-500 ease-out shadow-lg hover:shadow-2xl header-button-glow"
            >
              {/* Base gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-500 ease-out" />
              
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
              
              {/* Premium shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-full group-hover:translate-x-0 header-shimmer transition-transform duration-700 ease-out" />
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-500 ease-out" />
              
              {/* Text with smooth scale */}
              <span className="relative inline-block group-hover:translate-y-[-1px] transition-transform duration-400 ease-out">
                Start Free
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Animated bottom border */}
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-all duration-700 ease-out ${
        isScrolled ? 'opacity-100 shadow-lg shadow-blue-400/30' : 'opacity-0'
      }`} />
    </header>
  );
}
