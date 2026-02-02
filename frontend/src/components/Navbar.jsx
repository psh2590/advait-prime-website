import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  /* ------------------------------------
     Scroll lock for mobile menu
  ------------------------------------ */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  /* ------------------------------------
     Services click handler (desktop + mobile)
  ------------------------------------ */
  const handleServicesClick = () => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/#services");
      return;
    }

    const section = document.getElementById("services");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  /* ------------------------------------
     Active link styling
  ------------------------------------ */
  const navClass = ({ isActive }) =>
    `relative pb-1 transition
     ${
       isActive
         ? "text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-amber-400"
         : "text-slate-200 hover:text-white"
     }`;

  return (
    <header className="sticky top-0 z-50 bg-[#0b3a5c] shadow-md">
      {/* ================= Header Row ================= */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo + Brand */}
        <NavLink to="/" className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="Advait Prime"
            className="h-14 md:h-16 w-auto object-contain"
          />
          <div className="text-white leading-tight">
            <div className="text-lg md:text-xl font-bold">
              Advait Prime Consultancy & Services
            </div>
            <div className="text-xs md:text-sm text-slate-200">
              Strategic Consultancy for Real Estate, Business & Healthcare Projects
            </div>
          </div>
        </NavLink>

        {/* ================= Desktop Navigation ================= */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {/* IMPORTANT: end prop fixes double underline */}
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About Us
          </NavLink>

          {/* Services = BUTTON (NOT NavLink) */}
          <button
            onClick={handleServicesClick}
            className="relative pb-1 text-slate-200 hover:text-white transition"
          >
            Services
          </button>

          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
        </nav>

        {/* ================= Hamburger ================= */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* ================= Mobile Menu ================= */}
      <div
        className={`md:hidden bg-[#0b3a5c] border-t border-white/10 transition-all duration-300 ease-in-out
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4 text-sm font-medium">

          <NavLink onClick={() => setOpen(false)} to="/" end className={navClass}>
            Home
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/about" className={navClass}>
            About Us
          </NavLink>

          {/* Services button for mobile */}
          <button
            onClick={handleServicesClick}
            className="text-left text-slate-200 hover:text-white transition"
          >
            Services
          </button>

          <NavLink onClick={() => setOpen(false)} to="/contact" className={navClass}>
            Contact
          </NavLink>

        </nav>
      </div>
    </header>
  );
}
