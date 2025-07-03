import { useState } from "react";

import { Menu, X } from "lucide-react";
import logo from "../../../assets/logo.png";
import { ModeToggle } from "@/components/mode-toggle";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Books", path: "/books" },
    { name: "Add Book", path: "/create-book" },
    { name: "Borrow Summary", path: "/borrow-summary" },
  ];

  return (
    <nav className="bg-background border-b border-border shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-primary"
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <span>LibraryMS</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary underline"
                    : "text-muted-foreground hover:text-primary"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <ModeToggle />
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none text-foreground"
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-sm font-medium px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
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
