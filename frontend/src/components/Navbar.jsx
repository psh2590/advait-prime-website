import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        {/* Brand */}
        <NavLink
          to="/"
          className="text-lg font-bold tracking-tight text-white"
        >
          Advait Prime
        </NavLink>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-6 text-sm font-medium text-slate-300">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white" : "hover:text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-white" : "hover:text-white"
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/services"
            className="hover:text-white"
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className="hover:text-white"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
