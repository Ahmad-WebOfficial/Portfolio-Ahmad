

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

import { HiMenu, HiX } from "react-icons/hi";
import logo from "../images/img555.jpg"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-2 text-xl font-bold">
          <span>MyPortfolio</span>
          <img src={logo} alt="Logo" className="w-10 ml-3 h-10 rounded-full" />
        </div>

        <nav className="hidden min-[500px]:flex space-x-6 text-sm text-gray-300">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="/skills" className="hover:text-white">
            Skills
          </Link>
          <Link to="/projects" className="hover:text-white">
            Project View
          </Link>
          <Link to="/about" className="hover:text-white">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-white">
            Get in Touch
          </Link>
        </nav>

        <div className="hidden min-[400px]:flex space-x-4 text-gray-300">
          <a
            href="https://www.linkedin.com/in/muhammad-ahmad-fridi-b4780035a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-white text-lg" />
          </a>
          <a
            href="https://github.com/Ahmad-WebOfficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-white text-lg" />
          </a>
          <a
              href="https://www.fiverr.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFiverr  className="hover:text-gray-800 -mt-4 text-6xl" />
            </a>
        </div>

        <div className="min-[400px]:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col space-y-4 px-6 py-4 min-[500px]:hidden bg-gray-900 text-sm text-white">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/skills" onClick={() => setMenuOpen(false)}>
            Skills
          </Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            Project View
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Get in Touch
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
