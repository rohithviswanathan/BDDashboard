export default function CTASection() {
  return (
    <section className="relative py-24 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden content-wrapper">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-700 to-gray-800" />
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-800/40 via-transparent to-gray-600/35 mix-blend-soft-light" />
      <div className="absolute inset-0 opacity-[0.12] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBjMC0zLjMtMi43LTYtNi02cy02IDIuNy02IDYgMi43IDYgNiA2IDYtMi43IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_120%,rgba(0,0,0,0.2),transparent_55%)]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-5 tracking-tight drop-shadow-sm">
          Start Closing More Deals <span className="leading-[1.4]">Today</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-100/95 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          Get access to Nexus free for 14 days. No credit card. No installation.
          Try it now and see why thousands of teams trust us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-10 py-4 rounded-xl bg-white text-gray-800 font-bold text-base md:text-lg transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-lg shadow-black/15 hover:-translate-y-1 hover:scale-[1.03] hover:bg-slate-50 hover:shadow-2xl active:translate-y-0 active:scale-100"
          >
            Try Free for 14 Days
          </button>
          <button
            type="button"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="px-10 py-4 rounded-xl border border-white/70 text-white font-bold text-base md:text-lg backdrop-blur-sm bg-white/5 transition-[transform,background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.03] hover:bg-white/15 hover:border-white hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] active:translate-y-0 active:scale-100"
          >
            Request Demo
          </button>
        </div>
      </div>
    </section>
  );
}