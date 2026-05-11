export default function CTASection() {
  return (
    <section className="relative py-24 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden content-wrapper">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-600 to-red-600" />
      <div className="absolute inset-0 bg-gradient-to-tr from-red-700/40 via-transparent to-blue-500/35 mix-blend-soft-light" />
      <div className="absolute inset-0 opacity-[0.12] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBjMC0zLjMtMi43LTYtNi02cy02IDIuNy02IDYgMi43IDYgNiA2IDYtMi43IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_120%,rgba(0,0,0,0.2),transparent_55%)]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-5 tracking-tight drop-shadow-sm">
          Start Closing More Deals Today
        </h2>
        <p className="text-lg md:text-xl text-blue-50/95 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          Get access to Nexus free for 14 days. No credit card. No installation.
          Try it now and see why thousands of teams trust us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-10 py-4 rounded-xl bg-white text-blue-700 font-bold text-base md:text-lg transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-lg shadow-black/15 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-xl active:translate-y-0"
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
            className="px-10 py-4 rounded-xl border border-white/70 text-white font-bold text-base md:text-lg backdrop-blur-sm bg-white/5 transition-[transform,background-color,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-white/12 hover:border-white active:translate-y-0"
          >
            Request Demo
          </button>
        </div>
      </div>
    </section>
  );
}
