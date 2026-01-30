export default function RealEstate() {
  return (
    <section className="bg-slate-950 min-h-screen py-24">
      <div className="mx-auto max-w-4xl px-4 text-slate-100">
        <h1 className="text-3xl font-bold">
          Real Estate & Land Investment Advisory
        </h1>

        <p className="mt-6 text-slate-300">
          We provide strategic advisory services for land acquisition,
          real estate investment planning, valuation, and feasibility
          analysis for long-term value creation.
        </p>

        <ul className="mt-8 space-y-3 list-disc list-inside text-slate-300">
          <li>Land acquisition & due diligence</li>
          <li>Investment feasibility & ROI analysis</li>
          <li>Legal & regulatory coordination</li>
          <li>Project structuring & execution support</li>
        </ul>

        {/* Requirement Form */}
        <form
          action="https://formspree.io/f/XXXXXXXX"
          method="POST"
          className="mt-12 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full rounded bg-slate-800 p-3 text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full rounded bg-slate-800 p-3 text-white"
          />
          <textarea
            name="message"
            placeholder="Describe your requirement"
            rows="4"
            className="w-full rounded bg-slate-800 p-3 text-white"
          />
          <button
            type="submit"
            className="rounded bg-indigo-500 px-6 py-3 font-semibold hover:bg-indigo-600"
          >
            Submit Requirement
          </button>
        </form>
      </div>
    </section>
  );
}

