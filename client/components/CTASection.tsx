export default function CTASection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden content-wrapper">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-red-600 to-blue-600 opacity-90"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBjMC0zLjMtMi43LTYtNi02cy02IDIuNy02IDYgMi43IDYgNiA2IDYtMi43IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 animate-slide-up">
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
          Start Closing More Deals Today
        </h2>
        <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Get access to Nexus free for 14 days. No credit card. No
          installation. Try it now and see why thousands of teams trust us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-bounce-up" style={{ animationDelay: "0.4s" }}>
          <button
            onClick={() => console.log("Try Free for 14 Days clicked")}
            className="premium-button px-10 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl hover:bg-gray-50 hover:text-red-600 smooth-transition shadow-xl hover:scale-110 active:scale-95 hover:shadow-2xl"
          >
            Try Free for 14 Days
          </button>
          <button
            onClick={() => console.log("Request Demo clicked")}
            className="premium-button px-10 py-4 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white/10 hover:border-gray-100 smooth-transition hover:scale-110 active:scale-95 hover:shadow-2xl"
          >
            Request Demo
          </button>
        </div>
      </div>
    </section>
  );
}
