import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // 🚨 stops redirect

    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });

      setSubmitted(true);
      form.reset();
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
        <h3 className="text-lg font-semibold text-green-700">
          Thank you!
        </h3>
        <p className="text-green-600 mt-2">
          Your request has been submitted successfully.  
          Our team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      {/* Netlify hidden fields */}
      <input type="hidden" name="form-name" value="contact" />

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full px-4 py-3 bg-white text-slate-900 border rounded-md"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className="w-full px-4 py-3 bg-white text-slate-900 border rounded-md"
      />

      <textarea
        name="message"
        rows="4"
        placeholder="Your message"
        required
        className="w-full px-4 py-3 bg-white text-slate-900 border rounded-md"
      />

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-md font-semibold transition"
      >
        Submit
      </button>
    </form>
  );
}
