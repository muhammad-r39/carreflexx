import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="relative shadow-sm z-30">
      <div className="mx-auto flex justify-between items-center py-[30px] 2xl:py-[47px] px-[30px] md:px-[50px] 2xl:px-[94px]">
        {/* Logo */}
        <div className="site-branding">
          <Link to="/">
            <img
              src="img/logo.png"
              alt="Site Logo"
              className="h-[40px] md:h-[60px] 2xl:h-[72px]"
            />
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span
            className="block w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out"
            style={{
              transform: menuOpen
                ? "rotate(45deg) translateY(5px)"
                : "rotate(0)",
            }}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ease-in-out ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className="block w-6 h-0.5 bg-black transition-transform duration-300 ease-in-out"
            style={{
              transform: menuOpen
                ? "rotate(-45deg) translateY(-5px)"
                : "rotate(0)",
            }}
          ></span>
        </button>

        <nav
          className={`absolute md:relative top-full left-0 w-full md:w-auto md:flex items-center bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          } md:block border-t md:border-t-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 w-full md:w-auto p-4 md:p-0 2xl:me-[60px]">
            <li>
              <Link
                to="/"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                À PROPOS
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
