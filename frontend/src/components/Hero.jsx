export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Advait Prime <span className="text-indigo-300">Consultancy</span>
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-200">
          Professional advisory services with <span className="font-semibold text-white">10+ years</span> of
          industry experience across business, real estate, and healthcare consulting.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-lg bg-indigo-500 px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-indigo-600"
          >
            Contact Us
          </a>

          <a
            href="#services"
            className="rounded-lg border border-white/30 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
