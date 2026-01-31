export default function RealEstate() {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Real Estate Advisory
          </h1>
          <p className="text-slate-300 max-w-3xl">
            Strategic real estate advisory services focused on land acquisition,
            asset optimisation, commercial feasibility, and structured execution
            for investors, developers, and landowners.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            Land Acquisition & Investment Advisory
          </h2>
          <p className="mb-6 text-slate-600 max-w-4xl">
            We assist clients in identifying and evaluating land and property
            opportunities through structured due diligence, market assessment,
            and investment viability analysis.
          </p>

          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>Land identification and investment opportunity assessment</li>
            <li>Market benchmarking and valuation advisory</li>
            <li>Risk profiling and investment feasibility analysis</li>
            <li>Support during negotiation and transaction structuring</li>
          </ul>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            Commercial Feasibility & Project Advisory
          </h2>
          <p className="mb-6 text-slate-600 max-w-4xl">
            Our advisory approach focuses on assessing commercial viability
            and aligning project concepts with regulatory, financial, and
            market realities.
          </p>

          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>Project feasibility and land-use assessment</li>
            <li>Highest and best-use analysis</li>
            <li>Cost, revenue, and return modelling</li>
            <li>Advisory support for phased development planning</li>
          </ul>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-16 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            Stakeholder & Transaction Coordination
          </h2>
          <p className="mb-6 text-slate-600 max-w-4xl">
            We provide structured coordination between landowners, developers,
            investors, and professional advisors to ensure clarity and smooth
            execution throughout the transaction lifecycle.
          </p>

          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>Coordination between landowners, developers, and investors</li>
            <li>Transaction support and documentation coordination</li>
            <li>Regional liaison and on-ground follow-ups</li>
            <li>Support during negotiation and closure stages</li>
          </ul>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            Advisory for Development & Expansion Projects
          </h2>
          <p className="mb-6 text-slate-600 max-w-4xl">
            We work with clients on new developments and expansion initiatives
            by providing advisory inputs that support structured planning and
            efficient execution.
          </p>

          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>Advisory support for residential and commercial developments</li>
            <li>Land aggregation and project structuring</li>
            <li>Coordination with consultants and regulatory stakeholders</li>
            <li>Execution support through regional presence</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            Planning a Real Estate Investment or Development?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Engage with us for professional real estate advisory services that
            bring clarity, structure, and execution discipline to your projects.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-md font-semibold"
          >
            Speak with Our Real Estate Advisory Team
          </a>
        </div>
      </section>
    </div>
  );
}
