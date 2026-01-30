export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Our Services
        </h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Real Estate & Land Investment Advisory",
            "Business & Industrial Consulting",
            "Healthcare Consulting & Hospital Management",
          ].map((service) => (
            <div
              key={service}
              className="rounded-xl border bg-slate-50 p-8 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {service}
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Strategic guidance focused on long-term value creation,
                risk management, and operational excellence.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
