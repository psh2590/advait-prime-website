import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  
// ✅ scroll lock
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  
  const handleServicesClick = (e) => {
    setOpen(false);
    if (location.pathname === "/") {
      e.preventDefault();
      document
        .getElementById("services")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Advait Prime"
            className="h-14 md:h-16 w-auto"
          />
          <span className="text-white font-bold text-lg md:text-xl">
            Advait Prime Consultancy & Services
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
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

        {/* Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <nav className="flex flex-col px-6 py-4 gap-4 text-slate-300">
            <NavLink onClick={() => setOpen(false)} to="/">Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about">About Us</NavLink>
            <NavLink
              to="/#services"
              onClick={handleServicesClick}
            >
              Services
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact">Contact</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}


