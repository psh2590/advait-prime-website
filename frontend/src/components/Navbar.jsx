export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-bold tracking-tight text-slate-900">
          Advait Prime
        </h1>

        <nav className="flex gap-8 text-sm font-medium text-slate-600">
          <a href="#home" className="hover:text-slate-900">Home</a>
          <a href="#services" className="hover:text-slate-900">Services</a>
          <a href="#healthcare" className="hover:text-slate-900">Healthcare</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </nav>
      </div>
    </header>
  );
}
