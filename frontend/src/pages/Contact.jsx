export default function Contact() {
  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-slate-300 max-w-3xl">
            Connect with Advait Prime Consultancy & Services to discuss your
            healthcare, business, or real estate advisory requirements.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <div className="border rounded-xl p-8 bg-white text-center">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-slate-600 break-words">
              reachus@advaitprimeconsultancy.com
            </p>
          </div>

          {/* Call */}
          <div className="border rounded-xl p-8 bg-white text-center">
            <div className="text-3xl mb-4">📞</div>
            <h3 className="font-semibold text-lg mb-2">Call</h3>
            <p className="text-slate-600">
              +91 95064 74980
            </p>
          </div>

          {/* WhatsApp */}
          <div className="border rounded-xl p-8 bg-white text-center">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
            <a
              href="https://wa.me/919506474980"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Simple Contact Form (no backend dependency) */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 text-center">
            Send Us Your Requirement
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              rows="4"
              placeholder="Briefly describe your requirement"
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>

          <p className="text-sm text-slate-500 mt-4 text-center">
            Our team will get back to you at the earliest.
          </p>
        </div>
      </section>
    </div>
  );
}
