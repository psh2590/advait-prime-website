export default function Healthcare() {
  return (
    <section id="healthcare" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 text-center">
          Healthcare & Hospital Services
        </h2>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-slate-700">
          {[
            "Hospital planning & setup",
            "Operational management",
            "Medical equipment advisory",
            "Regulatory & compliance support",
          ].map((item) => (
            <li
              key={item}
              className="rounded-lg bg-white p-6 shadow-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
