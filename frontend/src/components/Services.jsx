export default function Services() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl font-bold mb-8">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Real Estate & Land Investment Advisory",
            "Business & Industrial Consulting",
            "Healthcare Consulting & Hospital Management"
          ].map((s) => (
            <div key={s} className="border p-6 rounded-lg">
              <p className="font-medium">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
