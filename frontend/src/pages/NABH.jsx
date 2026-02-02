export default function NABH() {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* HERO */}
      <section className="bg-[#0b3a5c] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              NABH Certification Support for Hospitals & Healthcare Institutions
            </h1>

            <p className="text-slate-200 mb-6">
              Advait Prime provides end-to-end advisory and implementation support
              to help hospitals achieve NABH accreditation through structured
              planning, documentation, training, and compliance alignment.
            </p>

            <ul className="list-disc list-inside space-y-2 text-slate-100">
              <li>Gap analysis as per NABH standards</li>
              <li>Policy & SOP documentation support</li>
              <li>Staff training & awareness programs</li>
              <li>Internal audit & pre-assessment preparation</li>
              <li>Support until final NABH assessment</li>
            </ul>
          </div>

          {/* Lead Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-slate-900">
              Get NABH Certification Support
            </h2>

            <form
              action="https://formsubmit.co/advait.prime@gmail.com"
              method="POST"
              className="space-y-4"
            >
              {/* FormSubmit config */}
              <input type="hidden" name="_subject" value="NABH Certification Enquiry" />
              <input type="hidden" name="_captcha" value="false" />

              <input
                type="text"
                name="hospital_name"
                required
                placeholder="Hospital / Healthcare Facility Name"
                className="w-full px-4 py-3 rounded-md border border-slate-300 
                           bg-white text-slate-900 placeholder-slate-400 
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="text"
                name="contact_person"
                required
                placeholder="Contact Person Name"
                className="w-full px-4 py-3 rounded-md border border-slate-300 
                           bg-white text-slate-900 placeholder-slate-400 
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="tel"
                name="phone"
                required
                placeholder="Contact Number"
                className="w-full px-4 py-3 rounded-md border border-slate-300 
                           bg-white text-slate-900 placeholder-slate-400 
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-md border border-slate-300 
                           bg-white text-slate-900 placeholder-slate-400 
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <select
                name="hospital_type"
                className="w-full px-4 py-3 rounded-md border border-slate-300 
                           bg-white text-slate-900 placeholder-slate-400 
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
                <option value="">Hospital Type</option>
                <option>Multi-speciality Hospital</option>
                <option>Single-speciality Hospital</option>
                <option>Nursing Home</option>
                <option>Clinic / Medical Centre</option>
                <option>Diagnostic Centre</option>
              </select>

              <textarea
                name="message"
                rows="3"
                placeholder="Briefly describe your requirement"
                className="w-full px-4 py-3 rounded-md border border-slate-300 
                           bg-white text-slate-900 placeholder-slate-400 
                           focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
              >
                Request NABH Support
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-10 text-center">
            Our NABH Support Approach
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Assessment</h3>
              <p className="text-slate-600 text-sm">
                Detailed gap analysis against NABH standards
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Documentation</h3>
              <p className="text-slate-600 text-sm">
                SOPs, policies & compliance records
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Training</h3>
              <p className="text-slate-600 text-sm">
                Staff sensitisation & role-based training
              </p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">Certification</h3>
              <p className="text-slate-600 text-sm">
                Final audit preparation & handholding
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-slate-900 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">
          Start Your NABH Accreditation Journey with Confidence
        </h3>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Work with experienced healthcare advisors who understand both
          operational realities and NABH compliance requirements.
        </p>
      </section>
    </div>
  );
}
