export default function Business() {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Business & Industrial Advisory
          </h1>
          <p className="text-slate-300 max-w-3xl">
            Practical business advisory and industrial facilitation services designed
            to bridge gaps between suppliers, manufacturers, and commercial stakeholders
            with a focus on execution, coordination, and outcomes.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            Industrial Raw Material Sourcing & Facilitation
          </h2>
          <p className="mb-6 text-slate-600 max-w-4xl">
            We assist manufacturing units and industrial enterprises in identifying,
            evaluating, and facilitating reliable sourcing of raw materials through
            structured coordination and market understanding.
          </p>

          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>Industrial raw material sourcing facilitation</li>
            <li>Understanding grade, quantity, and application requirements</li>
            <li>Cost optimisation through informed supplier alignment</li>
            <li>Coordination across regional and inter-state supply chains</li>
          </ul>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            Supplier & Buyer Coordination
          </h2>
          <p className="mb-6 text-slate-600 max-w-4xl">
            Acting as a neutral professional interface, we enable effective coordination
            between suppliers and buyers to ensure clarity, alignment, and timely execution
            of commercial requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
            <div>Supplier identification and shortlisting</div>
            <div>Buyer requirement validation</div>
            <div>Commercial expectation alignment</div>
            <div>Negotiation support and coordination</div>
            <div>Follow-ups to ensure closure and execution</div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-16 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            Factory-to-Factory Business Facilitation
          </h2>
          <p className="mb-6 text-slate-600 max-w-4xl">
            We support direct factory-to-factory business engagement by facilitating
            structured introductions, requirement mapping, and operational coordination
            to reduce friction and improve transaction efficiency.
          </p>

          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>Direct manufacturer-to-manufacturer facilitation</li>
            <li>Requirement mapping and capability alignment</li>
            <li>Operational and logistical coordination</li>
            <li>Regional follow-ups to support execution</li>
          </ul>
        </div>
      </section>

      {/* Section 4 */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            Commercial Requirement Assessment & Regional Coordination
          </h2>
          <p className="mb-6 text-slate-600 max-w-4xl">
            Our advisory approach begins with a clear understanding of commercial
            requirements, followed by structured coordination and on-ground follow-ups
            to support timely and effective outcomes.
          </p>

          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>Commercial requirement assessment and feasibility review</li>
            <li>Regional coordination across stakeholders</li>
            <li>Execution support through structured follow-ups</li>
            <li>Process-driven engagement rather than transactional brokerage</li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            Need Structured Business or Industrial Facilitation?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Engage with us for professional business advisory and industrial coordination
            services focused on clarity, execution, and long-term value creation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-md font-semibold"
          >
            Discuss Your Business Requirement
          </a>
        </div>
      </section>
    </div>
  );
}
