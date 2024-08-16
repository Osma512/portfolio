import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

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
          <h1 className="text-2xl md:text-3xl 2xl:text-5xl">Sufiyan Chishty</h1>
        </Link>
        <div className="hidden md:block">
          <ul className="flex gap-4 md:gap-8 text-lg md:text-[18px] 2xl:text-2xl">
          {
              isAboutPage ? (<Link to="/">
                <li className="hover:underline hover:text-[#D3E97A]">Home</li>
              </Link>) : (
                <>
                <a href="#projects">
                <li className="hover:underline hover:text-[#D3E97A]">Projects</li>
                </a>
              </>
            )
            }
            <Link to="about">
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
            <Link to="about" >
              <li className="hover:underline hover:text-[#D3E97A]">About</li>
            </Link>
            <a href="#contact">
              <li className="hover:underline hover:text-[#D3E97A]">Contact</li>
            </a>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
