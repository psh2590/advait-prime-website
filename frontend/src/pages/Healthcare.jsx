export default function Healthcare() {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Healthcare Advisory & Hospital Management
          </h1>
          <p className="text-slate-300 max-w-3xl">
            Strategic and operational healthcare consulting designed to improve efficiency,
            compliance, and patient-centric outcomes across hospitals and medical institutions.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">
            End-to-End Hospital Management
          </h2>
          <p className="mb-6 text-slate-600 max-w-4xl">
            We offer complete end-to-end hospital management support covering administrative,
            operational, clinical coordination, and compliance aspects of hospital functioning.
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
            <li>Hospital administration & operational planning</li>
            <li>Manpower planning and deployment</li>
            <li>Process structuring and workflow optimisation</li>
            <li>Billing and revenue cycle management</li>
            <li>Insurance and TPA coordination</li>
            <li>Statutory and regulatory compliance support</li>
          </ul>
        </div>
      </section>

      {/* Section 2 */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">
            Department-Wise Consulting & Management Support
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-slate-700">
            <div>Administrative Services</div>
            <div>Clinical Services (Operational Support)</div>
            <div>Security Services</div>
            <div>Housekeeping & Sanitation</div>
            <div>Engineering & Maintenance</div>
            <div>Billing & Revenue Management</div>
            <div>Front Desk & Patient Coordination</div>
            <div>Laboratory Operations Support</div>
            <div>Insurance & TPA Desk Management</div>
            <div>Statutory & Regulatory Compliance</div>
            <div>Store & Procurement Management</div>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="py-16 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">
            Who Can Engage Us
          </h2>

          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>Multi-speciality and super-speciality hospitals</li>
            <li>Private and trust-run hospitals</li>
            <li>Nursing homes and medical centres</li>
            <li>New hospital projects and expansions</li>
            <li>
              Operational hospitals seeking restructuring or professional support
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            Looking to Strengthen Your Healthcare Operations?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Engage with us for structured healthcare advisory and professional hospital
            management support tailored to your institution’s needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-md font-semibold"
          >
            Contact Our Healthcare Advisory Team
          </a>
        </div>
      </section>
    </div>
  );
}
