import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Healthcare */}
        <Link
          to="/healthcare-advisory"
          className="border rounded-xl p-6 hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-3">
            Healthcare Advisory
          </h3>
          <p className="text-slate-600">
            End-to-end hospital management and healthcare consulting.
          </p>
        </Link>
        
        {/* Real Estate */}
        <Link
          to="/real-estate-advisory"
          className="border rounded-xl p-6 hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-3">
            Real Estate Advisory
          </h3>
          <p className="text-slate-600">
            Land acquisition, feasibility, and structured real estate advisory.
          </p>
        </Link>

        {/* Business */}
        <Link
          to="/business-advisory"
          className="border rounded-xl p-6 hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold mb-3">
            Business Advisory
          </h3>
          <p className="text-slate-600">
            Industrial facilitation, sourcing advisory, and coordination support.
          </p>
        </Link>

      </div>
    </div>
  );
}

