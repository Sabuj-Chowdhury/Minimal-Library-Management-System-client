import { Link } from "react-router";
import logo from "../../../../public/logo.png";
const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8 ">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-indigo-400 flex">
            <img src={logo} alt="website logo" className="w-12" /> LibraryMS
          </h2>
          <p className="text-sm text-slate-300">
            A minimal and modern system to manage your library efficiently.
            Built with ❤️ using React & TypeScript.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-indigo-300">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/books" className="hover:underline text-slate-200">
                All Books
              </Link>
            </li>
            <li>
              <Link
                to="/create-book"
                className="hover:underline text-slate-200"
              >
                Add Book
              </Link>
            </li>
            <li>
              <Link
                to="/borrow-summary"
                className="hover:underline text-slate-200"
              >
                Borrow Summary
              </Link>
            </li>
          </ul>
        </div>

        {/* Credits */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-indigo-300">
            Credits
          </h3>
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Minimal LibraryMS. All rights reserved.
          </p>
          <p className="text-sm text-slate-400">
            Designed for academic assignment.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
