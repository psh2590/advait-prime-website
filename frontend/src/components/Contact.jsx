export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-24">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-bold text-white">Contact Us</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl bg-slate-800 p-6 text-slate-200">
            📧
            <p className="mt-2 font-semibold">Email</p>
            <p className="text-sm">reachus@advaitprimeconsultancy.com</p>
          </div>

          <div className="rounded-xl bg-slate-800 p-6 text-slate-200">
            📞
            <p className="mt-2 font-semibold">Call</p>
            <p className="text-sm">+91 9506474980</p>
          </div>

          <div className="rounded-xl bg-slate-800 p-6 text-slate-200">
            💬
            <p className="mt-2 font-semibold">WhatsApp</p>
            <a
              href="https://wa.me/919506474980"
              className="text-sm text-indigo-400 hover:underline"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
