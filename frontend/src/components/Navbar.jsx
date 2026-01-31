export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-lg font-bold text-white">
          Advait Prime
        </h1>

        <nav className="flex flex-wrap gap-4 text-sm font-medium text-slate-300">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/services/healthcare" className="hover:text-white">Healthcare Advisory</a>
          <a href="/services/real-estate" className="hover:text-white">RealEstate Advisory</a>
          <a href="/business" className="hover:text-white">Business Advisory</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
    </header>
  );
}

