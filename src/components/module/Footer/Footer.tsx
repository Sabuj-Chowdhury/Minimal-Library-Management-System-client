import { Link } from "react-router";
import logo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2 text-primary">
            <img src={logo} alt="website logo" className="w-10 h-10" />
            LibraryMS
          </h2>
          <p className="text-sm text-muted-foreground max-w-sm">
            A minimal and modern system to manage your library efficiently.
            Built with ❤️ using React, TypeScript, and Shadcn UI.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/books"
                className="hover:underline text-muted-foreground hover:text-foreground"
              >
                All Books
              </Link>
            </li>
            <li>
              <Link
                to="/create-book"
                className="hover:underline text-muted-foreground hover:text-foreground"
              >
                Add Book
              </Link>
            </li>
            <li>
              <Link
                to="/borrow-summary"
                className="hover:underline text-muted-foreground hover:text-foreground"
              >
                Borrow Summary
              </Link>
            </li>
          </ul>
        </div>

        {/* Credits */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            Credits
          </h3>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Minimal LibraryMS. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed for academic assignment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
