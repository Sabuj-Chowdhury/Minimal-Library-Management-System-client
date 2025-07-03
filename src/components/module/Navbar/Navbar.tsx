import { Menu, X } from "lucide-react";
import logo from "../../../../public/logo.png";
import { useState } from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Books", path: "/books" },
    { name: "Add Book", path: "/create-book" },
    { name: "Borrow Summary", path: "/borrow-summary" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-indigo-600"
        >
          <img
            src={logo}
            alt="website logo"
            className="w-10 h-10 object-contain"
          />
          <span>LibraryMS</span>
        </Link>

        {/* Desktop Nav */}
        <div className="space-x-6 hidden md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium hover:text-indigo-600 transition ${
                  isActive ? "text-indigo-600 underline" : "text-gray-700"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none text-gray-700"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col  space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-sm font-medium px-3 py-2 rounded-md ${
                    isActive
                      ? "bg-indigo-100 text-indigo-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
