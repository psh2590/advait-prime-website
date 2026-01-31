export default function About() {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-slate-300 max-w-3xl">
            Advait Prime Consultancy & Services is a multi-domain advisory firm
            delivering structured, execution-oriented consulting across healthcare,
            business, and real estate ecosystems.
          </p>
        </div>
      </section>

      {/* About Company */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            Our Advisory Approach
          </h2>
          <p className="text-slate-600 max-w-4xl">
            We operate at the intersection of strategy, operations, and on-ground
            execution. Our advisory model is built around practical problem-solving,
            stakeholder coordination, and outcome-driven engagement rather than
            theoretical consulting.
          </p>
          <p className="mt-4 text-slate-600 max-w-4xl">
            With deep exposure across healthcare operations, industrial supply chains,
            infrastructure projects, and land investment advisory, Advait Prime supports
            promoters, business owners, and institutions in making informed and
            implementable decisions.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-slate-900">
            Leadership
          </h2>

          {/* Dr. Ashutosh Pandey */}
          <div className="mb-12 border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-bold text-slate-900">
              Dr. Ashutosh Pandey
            </h3>
            <p className="text-sm font-semibold text-slate-600 mb-4">
              Head – Healthcare Advisory
            </p>

            <p className="text-slate-700 mb-3">
              Dr. Ashutosh Pandey leads the Healthcare Consulting and Hospital Management
              vertical at Advait Prime Consultancy & Services, with over 15 years of
              extensive experience across the healthcare industry.
            </p>

            <p className="text-slate-700 mb-3">
              He brings end-to-end visibility of both the payer and provider sides of
              the healthcare ecosystem, with deep exposure to clinical as well as
              non-clinical hospital operations.
            </p>

            <p className="text-slate-700 mb-3">
              Over the course of his career, Dr. Pandey has worked with multiple leading
              hospitals across Delhi, Uttar Pradesh, and Uttarakhand, progressing through
              senior roles ranging from TPA Head to General Manager.
            </p>

            <p className="text-slate-700 mb-3">
              His experience spans hospital administration, billing and revenue cycle
              management, insurance and TPA desk operations, compliance coordination,
              departmental governance, and workforce planning — enabling a holistic
              approach to hospital management and optimisation.
            </p>

            <p className="text-slate-700">
              At Advait Prime, he supports hospital owners and promoters through end-to-end
              hospital management advisory, department-wise operational structuring,
              insurance optimisation, compliance alignment, and hospital setup or
              restructuring initiatives.
            </p>
          </div>

          {/* Er. Shubham Pandey */}
          <div className="border-l-4 border-blue-600 pl-6">
            <h3 className="text-xl font-bold text-slate-900">
              Er. Shubham Pandey
            </h3>
            <p className="text-sm font-semibold text-slate-600 mb-4">
              Head – Land & Business Advisory
            </p>

            <p className="text-slate-700 mb-3">
              Er. Shubham Pandey leads the Land Investment and Business Advisory vertical
              at Advait Prime Consultancy & Services, bringing extensive multi-sector
              experience across infrastructure, industrial projects, and strategic
              business facilitation.
            </p>

            <p className="text-slate-700 mb-3">
              He has worked across a wide spectrum of PPP (Public–Private Partnership)
              and government-linked projects, contributing to planning, coordination,
              and execution support in large-scale infrastructure and development
              initiatives.
            </p>

            <p className="text-slate-700 mb-3">
              His exposure includes major infrastructure and highway projects such as
              the Purvanchal Expressway, public utility initiatives including the Jal
              Jeevan Mission, and multiple construction and industrial projects involving
              materials coordination and project support.
            </p>

            <p className="text-slate-700 mb-3">
              In addition, he brings hands-on understanding of import–export operations,
              industrial supply chains, and polymer raw material sourcing, enabling
              advisory support for businesses operating across manufacturing,
              infrastructure, and trade-driven environments.
            </p>

            <p className="text-slate-700">
              At Advait Prime, his advisory focus includes land investment and acquisition
              strategy, corporate and industrial facilitation, structured proposal
              assessment, and stakeholder coordination across infrastructure and
              industrial ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            Advisory Built on Experience & Execution
          </h3>
          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            Our leadership-driven approach ensures that every engagement is grounded
            in real-world experience, operational understanding, and measurable outcomes.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-md font-semibold"
          >
            Connect With Us
          </a>
        </div>
      </section>
    </div>
  );
}
