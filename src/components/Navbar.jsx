import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/aa.png";
import { Link } from "react-router";

const Navbar = () => {
  const [showSticky, setShowSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkStyle =
    "relative text-sm xl:text-base font-semibold text-white hover:text-[#e4d804] transition duration-300";
  const navLinkUnderline =
    "after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 hover:after:w-full after:bg-[#e4d804] after:transition-all after:duration-300";

  const links = (
    <>
      <li>
        <NavLink to="/" className={`${navLinkStyle} ${navLinkUnderline}`}>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={`${navLinkStyle} ${navLinkUnderline}`}
        >
          CONTACT US
        </NavLink>
      </li>
    </>
  );

  return (
    <div
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-500
        ${
          showSticky
            ? "bg-gray-900 bg-opacity-90 shadow-xl backdrop-blur"
            : "bg-gray-950/60"
        }
      `}
      style={{ backdropFilter: showSticky ? "blur(8px)" : "none" }}
    >
      <div className="mx-auto w-11/12 max-w-7xl flex items-center justify-between py-3">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="w-8 sm:w-10" />
            <h1 className="text-white text-lg sm:text-xl font-extrabold whitespace-nowrap">
              Apple Age
            </h1>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-grow justify-center">
          <ul className="flex space-x-6 items-center">{links}</ul>
        </nav>

        {/* Right Side: Search & Auth */}
        <div className="flex items-center gap-3 lg:gap-4">
          <FaSearch className="text-white text-lg cursor-pointer" />

          {/* Desktop Auth */}
          <div className="hidden lg:block"></div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-900 bg-opacity-95 py-6 px-6">
          <ul className="flex flex-col gap-5 mb-4">{links}</ul>

          {/* Mobile Auth */}
          <div className="mt-4"></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
