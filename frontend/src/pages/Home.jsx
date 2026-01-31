import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import About from "../components/AboutPreview"; // optional short intro component
// If you don’t have AboutPreview, remove this import and section

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Preview (optional but recommended) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
            Advisory Built on Experience & Execution
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Advait Prime Consultancy & Services delivers structured advisory across
            healthcare, business, and real estate domains — combining strategic
            clarity with on-ground execution support.
          </p>
        </div>
      </section>

      {/* SERVICES SECTION (Navbar scrolls here) */}
      <section id="services" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14 text-slate-900">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Real Estate */}
            <Link
              to="/real-estate-advisory"
              className="border rounded-xl p-8 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                Real Estate Advisory
              </h3>
              <p className="text-slate-600">
                Land acquisition, feasibility assessment, investment structuring,
                and transaction coordination for real estate projects.
              </p>
            </Link>

            {/* Business */}
            <Link
              to="/business-advisory"
              className="border rounded-xl p-8 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                Business Advisory
              </h3>
              <p className="text-slate-600">
                Industrial facilitation, raw material sourcing advisory,
                supplier-buyer coordination, and execution support.
              </p>
            </Link>

            {/* Healthcare */}
            <Link
              to="/healthcare-advisory"
              className="border rounded-xl p-8 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">
                Healthcare Advisory
              </h3>
              <p className="text-slate-600">
                End-to-end hospital management, operational structuring,
                compliance support, and healthcare consulting.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Looking for Structured Advisory Support?
          </h3>
          <p className="text-slate-300 max-w-2xl mx-auto mb-6">
            Engage with Advait Prime for professional advisory services driven by
            experience, execution discipline, and measurable outcomes.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-md font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
