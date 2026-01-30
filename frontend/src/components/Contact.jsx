export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold">
          Contact Us
        </h2>

        <p className="mt-6 text-slate-300">
          Reach out to discuss how we can support your business or healthcare initiative.
        </p>

        <a
          href="mailto:reachus@advaitprimeconsultancy.com"
          className="mt-8 inline-block rounded-md bg-white px-8 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-200"
        >
          Email Us
        </a>
      </div>
    </section>
  );
}
