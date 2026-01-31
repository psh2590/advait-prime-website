import { NavLink, useLocation } from "react-router-dom";
/*import logo from "../assets/logo.png";*/

export default function Navbar() {
  const location = useLocation();

  const handleServicesClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      document
        .getElementById("services")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        {/* Logo + Brand */}
     <NavLink to="/" className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="Advait Prime Consultancy & Services"
          className="h-8 w-auto md:h-10"
        />
        <span className="text-white font-bold text-base md:text-lg">
          Advait Prime Consultancy & Services
        </span>
      </NavLink>


        {/* Nav */}
        <nav className="flex gap-6 text-sm text-slate-300">
          <NavLink to="/" className="hover:text-white">Home</NavLink>
          <NavLink to="/about" className="hover:text-white">About Us</NavLink>

          <NavLink
            to="/#services"
            onClick={handleServicesClick}
            className="hover:text-white"
          >
            Services
          </NavLink>

          <NavLink to="/contact" className="hover:text-white">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

