import { Link } from "react-router-dom";
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
      <section className="py-16 px-6 bg-slate-100">
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

  {/*Section 3 NABH Certification CTA */}
<section className="py-16 px-6 bg-indigo-50">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
    
    {/* Left Content */}
    <div>
      <h2 className="text-2xl font-bold mb-4 text-slate-900">
        NABH Certification Advisory & Implementation Support
      </h2>

      <p className="text-slate-700 mb-4">
        Advait Prime supports hospitals and healthcare institutions through the
        complete NABH accreditation journey — from gap analysis and documentation
        to staff training and final assessment readiness.
      </p>

      <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
        <li>NABH gap assessment and readiness evaluation</li>
        <li>Policy, SOP, and documentation support</li>
        <li>Staff training and compliance sensitisation</li>
        <li>Internal audit and pre-assessment preparation</li>
        <li>Handholding till final NABH certification</li>
      </ul>

      <Link
        to="/nabh-certification"
        className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
      >
        Get NABH Certification Support
      </Link>
    </div>

    {/* Right Highlight Card */}
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="font-semibold mb-3 text-slate-900">
        Who Should Opt for NABH Certification?
      </h3>
      <ul className="list-disc list-inside space-y-2 text-slate-600 text-sm">
        <li>Multi-speciality and super-speciality hospitals</li>
        <li>Nursing homes and medical centres</li>
        <li>Hospitals planning expansion or empanelment</li>
        <li>Institutions seeking quality and compliance improvement</li>
      </ul>
    </div>

  </div>
</section>
     {/* Section 4 */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">
            TPA Desk Outsource
          </h2>

           <p className="text-slate-700 mb-4">
              At Advait Prime, we offer comprehensive TPA Desk Outsourcing solutions for hospitals, managing the entire workflow of the TPA 
              desk with precision and compliance. From daily operations to coordination and documentation, we ensure seamless functioning 
              of your TPA desk, allowing your team to focus on patient care. Our services include:
          </p>

          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>Complete assistance in TPA desk setup, enrollment, and activation</li>
            <li>Efficient management of day-to-day TPA desk workflows</li>
            <li>Development and execution of robust operational protocols</li>
            <li>Performance monitoring, data analysis, and insights</li>
            <li>Professional handling of customer and insurer interactions</li>
            <li>Streamlined insurance claim processing and follow-ups</li>
            <li>Specialized expertise in billing accuracy and coding standards</li>
            <li>Support for compliance, audits, and statutory reporting</li>
          </ul>
        </div>
      </section>

           {/* Section 5 */}
      <section className="py-16 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">
            Hospital Software and IT support
          </h2>

           <p className="text-slate-700 mb-4">
              We specialize in delivering end-to-end hospital software and IT support solutions for healthcare institutions. 
              Our solutions are designed to improve operational efficiency, simplify clinical and administrative processes, and 
              support high-quality patient care. 
              Our offerings include customized healthcare software for patient management, scheduling, EMR, billing, and invoicing, 
              along with complete IT support services such as implementation, training, system maintenance, and technical assistance. 
              Through continuous support and expert guidance, we help healthcare organizations stay technologically updated and 
              operationally efficient.

              Connect with us to explore how our healthcare IT solutions can address your organization’s specific needs.
          </p>
         </div>
      </section>

            {/* Section 6 */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">
            Hospital Marketing and Branding
          </h2>

           <p className="text-slate-700 mb-4">
              We offer comprehensive hospital marketing and branding solutions that help healthcare providers enhance visibility, credibility, 
              and patient engagement. Our expertise lies in building strong healthcare brands, creating impactful marketing strategies, and delivering 
              digital experiences that support patient acquisition and retention.

              Our scope of services includes website development, social media marketing, content strategy, SEO, and digital advertising, 
              all customized to align with the hospital’s objectives. Get in touch with us to explore our hospital marketing and branding
              services in detail.

              Connect with us to explore how our healthcare IT solutions can address your organization’s specific needs.
          </p>
         </div>
      </section>

             {/* Section 7 */}
      <section className="py-16 px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">
            Hospital ROHINI Registration
          </h2>

           <p className="text-slate-700 mb-4">
           We offer Hospital ROHINI Registration services to support hospitals with seamless enrollment and compliance. Our service 
           assists hospitals in completing the registration process efficiently, enabling them to be listed on the ROHINI platform and 
           remain compliant with insurance and TPA requirements.

           ROHINI (Registry of Hospitals in Network of Insurance) is a centralized registry of hospitals empanelled with health insurers
           and Third-Party Administrators (TPAs) across India. The registry is developed and maintained by the Insurance Information 
           Bureau of India (IIB), promoted by the Insurance Regulatory and Development Authority of India (IRDAI). It currently includes
           approximately 33,000 verified hospitals, curated through extensive automated and manual de-duplication processes.

           Being registered on ROHINI helps hospitals streamline insurance coordination, improve data accuracy, and enhance operational 
           transparency. Over time, the ROHINI registry is evolving into a comprehensive, single-point reference for information related 
           to health insurance, hospitals, insurers, service providers, customers, and regulators.

           If you require assistance with ROHINI registration or updates, feel free to contact us—we’ll be happy to help.
          </p>
         </div>
      </section>

             {/* Section 8 */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">
            Hospital Empanelment (Govt & Pvt TPA’S )
          </h2>

           <p className="text-slate-700 mb-4">
           We offer Hospital Empanelment services for Government and Private TPAs, supporting both public and private healthcare facilities. 
           Our experienced team provides end-to-end guidance throughout the empanelment process, ensuring accuracy, compliance, and timely 
           approvals.

           We assist hospitals with empanelment across major TPAs and insurance providers, including Apollo, Bajaj Allianz, HDFC ERGO,
           ICICI Lombard, Max Bupa, United India, and Star Health. Our scope of services covers preparation and submission of required 
           documentation, coordination with TPAs for approvals, and execution of the final empanelment agreements. 
           Additionally, we provide ongoing support through monitoring, tracking, and reporting of all empanelment-related activities.
          </p>
         </div>
      </section>      
      
          {/* Section 9 */}
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
