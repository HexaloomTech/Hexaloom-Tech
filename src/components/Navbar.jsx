import React, { useState } from "react";
import logo from "/logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="text-white p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-2">
      <img src={logo} alt="logo" className="w-15"/>
        <h1 className="text-xl font-bold flex text-violet-400 items-center">Hexaloom Technologies</h1>
        </div>
        {/* Hamburger & Close Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {menuOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "About", "projects", "Blog", "Team", "Contact"].map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-violet-400">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
     

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden text-center py-4 space-y-4">
          {["Home", "About", "projects", "Blog", "Team", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block hover:text-violet-400"
                onClick={() => setMenuOpen(false)} // Close menu on click
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
