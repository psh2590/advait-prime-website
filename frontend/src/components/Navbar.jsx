export default function Navbar() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary">
          Advait Prime Consultancy
        </h1>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#" className="hover:text-primary">Home</a>
          <a href="#" className="hover:text-primary">Services</a>
          <a href="#" className="hover:text-primary">Healthcare</a>
          <a href="#" className="hover:text-primary">Contact</a>
        </nav>
      </div>
    </header>
  );
}
