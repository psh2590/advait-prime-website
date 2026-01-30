export default function Hero() {
  return (
    <section id="home" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-28 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Advait Prime Consultancy & Services
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
          Trusted advisory partner with 10+ years of experience across
          business consulting, real estate advisory, and healthcare management.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#contact"
            className="rounded-md bg-slate-900 px-8 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Get in Touch
          </a>
          <a
            href="#services"
            className="rounded-md border border-slate-300 px-8 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
