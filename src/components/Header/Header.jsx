import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // State to control the mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className="navbar text-white"
      style={{ fontFamily: "Bebas Neue, sans-serif" }}
    >
      <nav className="flex justify-between items-center w-full px-6 py-4 md:px-[60px] md:py-[24px]">
        <Link to="/">
          <h1 className="text-2xl md:text-3xl">Sufiyan Chishty</h1>
        </Link>
        <div className="hidden md:block">
          <ul className="flex gap-4 md:gap-8 text-lg md:text-[18px]">
            <Link to="/">
              <li className="hover:underline hover:text-[#D3E97A]">Work</li>
            </Link>
            <Link to="#about">
              <li className="hover:underline hover:text-[#D3E97A]">About</li>
            </Link>
            <a href="#contact">
              <li className="hover:underline hover:text-[#D3E97A]">Contact</li>
            </a>
          </ul>
        </div>
        <div className="block md:hidden">
          <button
            id="menu-toggle"
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <i className="ri-menu-line text-3xl"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="block md:hidden px-6 py-4 bg-black">
          <ul className="flex flex-col gap-4 text-lg">
            <Link to="/" onClick={toggleMobileMenu}>
              <li className="hover:underline hover:text-[#D3E97A]">Work</li>
            </Link>
            <Link to="#about" onClick={toggleMobileMenu}>
              <li className="hover:underline hover:text-[#D3E97A]">About</li>
            </Link>
            <Link to="#contact" onClick={toggleMobileMenu}>
              <li className="hover:underline hover:text-[#D3E97A]">Contact</li>
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
