export default function Business() {
  return (
    <section className="bg-slate-950 min-h-screen py-24">
      <div className="mx-auto max-w-4xl px-4 text-slate-100">
        <h1 className="text-3xl font-bold">
          Business & Industrial Consulting
        </h1>

        <p className="mt-6 text-slate-300">
          Advait Prime Consultancy & Services provides structured consulting and facilitation support to businesses, factories, 
		  and industrial entities for sourcing, coordination, and execution of commercial requirements. 
		  We act as a professional interface between manufacturers, suppliers, buyers, and operational stakeholders to ensure clarity, efficiency, 
		  and timely engagement.
        </p>

        <ul className="mt-8 space-y-3 list-disc list-inside text-slate-300">
          <li>Industrial raw material sourcing facilitation</li>
		  <li>Supplier and buyer coordination</li>
		  <li>Factory-to-factory business facilitation</li>
		  <li>Commercial requirement assessment</li>
          <li>Process optimization & cost control</li>
          <li>Market entry & growth strategy</li>
          <li>Risk assessment & compliance guidance</li>
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



