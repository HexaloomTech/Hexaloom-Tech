import React, { useState, useEffect } from "react";
import logo from "/Hexa-logo.png";
import { CiMenuFries } from "react-icons/ci";
import { LiaTimesSolid } from "react-icons/lia";
import { IoSunnyOutline } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#151515cc]  backdrop-blur-lg text-white p-4">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-28 md:w-40" />
        </div>

        {/* Hamburger & Close Icon (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl focus:outline-none cursor-pointer"
        >
          {menuOpen ? <LiaTimesSolid /> : <CiMenuFries />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg bg-[#61616161] p-2 px-6 rounded-full font-medium">
          {["Home", "About", "Services", "Blog", "Team"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="hover:text-violet-400 cursor-pointer transition-all"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact & Theme Toggle (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="contact" smooth={true} duration={500}>
            <button className="bg-[#61616161] px-5 py-2 rounded-full whitespace-nowrap cursor-pointer hover:text-violet-400 hover:bg-opacity-70 transition">
              Contact Us
            </button>
          </Link>
          <div className="bg-[#61616161] p-2 rounded-full cursor-pointer hover:bg-opacity-70">
            <IoSunnyOutline className="text-2xl" />
          </div>
        </div>
      </div>

      {/* Mobile Menu (Full-Screen Overlay) */}
      <div
        className={`fixed inset-0 bg-[#151515cc] bg-opacity-90 backdrop-blur-lg flex flex-col items-center text-center justify-center transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-40 overflow-hidden w-screen h-screen`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-4xl text-white"
        >
          <LiaTimesSolid />
        </button>
        <ul className="text-white space-y-8 text-2xl font-semibold">
          {["Home", "About", "Services", "Blog", "Team"].map((item) => (
            <li key={item}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="hover:text-violet-400 cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-violet-500 px-6 py-3 rounded-full cursor-pointer text-white hover:bg-violet-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
