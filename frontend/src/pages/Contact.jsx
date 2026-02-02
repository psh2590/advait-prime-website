import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/advait.prime@gmail.com", {
        method: "POST",
        body: data,
      });

      setSubmitted(true);
      form.reset();
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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
          <div className="border rounded-xl p-8 bg-white text-center">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-slate-600 break-words">
              reachus@advaitprimeconsultancy.com
            </p>
          </div>

          <div className="border rounded-xl p-8 bg-white text-center">
            <div className="text-3xl mb-4">📞</div>
            <h3 className="font-semibold text-lg mb-2">Call</h3>
            <p className="text-slate-600">+91 95064 74980</p>
          </div>

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

      {/* Contact Form */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-slate-900 text-center">
            Send Us Your Requirement
          </h2>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
              <h3 className="text-lg font-semibold text-green-700">
                Thank you!
              </h3>
              <p className="text-green-600 mt-2">
                Your query has been submitted successfully.  
                Our team will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="_subject" value="New Query - Advait Prime" />
              <input type="hidden" name="_captcha" value="false" />

              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full border rounded-md p-3"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full border rounded-md p-3"
              />

              <textarea
                name="message"
                rows="4"
                required
                placeholder="Your Requirement"
                className="w-full border rounded-md p-3"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Query"}
              </button>
            </form>
          )}

          {!submitted && (
            <p className="text-sm text-slate-500 mt-4 text-center">
              Our team will get back to you at the earliest.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
