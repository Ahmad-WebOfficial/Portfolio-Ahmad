import React, { useState } from "react";
import { SiFiverr } from "react-icons/si";
import { FaUpwork } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { BiCrosshair } from "react-icons/bi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#02060f] via-[#050f1f] to-[#02060f] backdrop-blur-2xl border-b border-teal-500/30 text-white shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3.5">
        <div
          onClick={() => scrollToSection("home")}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500/30 to-cyan-500/10 border border-teal-400/50 shadow-[0_0_20px_rgba(20,184,166,0.35)] group-hover:scale-105 transition duration-300">
            <BiCrosshair className="text-teal-400 text-2xl animate-spin-slow" />
            <div className="absolute inset-0 rounded-xl bg-teal-400/20 blur-md"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-extrabold tracking-wider bg-gradient-to-r from-teal-300 via-cyan-200 to-teal-400 bg-clip-text text-transparent leading-tight">
              AHMADTECH
            </span>
            <span className="text-[9px] font-bold tracking-[0.2em] text-teal-400/80 uppercase">
              DEVELOPMENT
            </span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-teal-400 transition cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-teal-400 transition cursor-pointer"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="hover:text-teal-400 transition cursor-pointer"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-teal-400 transition cursor-pointer"
          >
            Project View
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-teal-400 transition cursor-pointer"
          >
            Get in Touch
          </button>
        </nav>

        <div className="hidden sm:flex items-center space-x-3">
          <a
            href="https://www.fiverr.com/ahmadfridi"
            target="_blank"
            rel="noopener noreferrer"
            className="w-32 h-10 flex items-center justify-center space-x-2 px-3 rounded-xl bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/40 text-emerald-400 hover:text-white hover:bg-emerald-600/20 hover:border-emerald-400 shadow-lg shadow-emerald-950/40 transition duration-300 group"
            title="Fiverr"
          >
            <SiFiverr className="text-2xl group-hover:scale-110 transition shrink-0" />
            <span className="text-xs font-semibold tracking-wide">Fiverr</span>
          </a>

          <a
            href="https://www.upwork.com/freelancers/~0102bc76b960560f23"
            target="_blank"
            rel="noopener noreferrer"
            className="w-32 h-10 flex items-center justify-center space-x-2 px-3 rounded-xl bg-gradient-to-r from-lime-950/50 to-slate-900 border border-lime-500/40 text-lime-400 hover:text-white hover:bg-lime-600/20 hover:border-lime-400 shadow-lg shadow-lime-950/40 transition duration-300 group"
            title="Upwork"
          >
            <FaUpwork className="text-base group-hover:scale-110 transition shrink-0" />
            <span className="text-xs font-semibold tracking-wide">Upwork</span>
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl focus:outline-none p-1.5 bg-slate-900/80 rounded-xl border border-teal-500/30"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col space-y-4 px-6 py-6 md:hidden bg-gradient-to-b from-[#02060f]/98 via-[#04111f]/98 to-[#02060f]/98 border-b border-teal-500/20 text-sm text-slate-200 backdrop-blur-2xl shadow-2xl">
          <button
            onClick={() => scrollToSection("home")}
            className="text-left hover:text-teal-400 font-medium py-1 transition"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-left hover:text-teal-400 font-medium py-1 transition"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-left hover:text-teal-400 font-medium py-1 transition"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-left hover:text-teal-400 font-medium py-1 transition"
          >
            Project View
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-left hover:text-teal-400 font-medium py-1 transition"
          >
            Get in Touch
          </button>

          <div className="flex items-center space-x-3 pt-4 border-t border-slate-800">
            <a
              href="https://www.fiverr.com/ahmadfridi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 h-10 flex items-center justify-center space-x-2 px-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600/20 transition"
            >
              <SiFiverr className="text-2xl shrink-0" />
              <span className="text-xs font-semibold">Fiverr</span>
            </a>

            <a
              href="https://www.upwork.com/freelancers/~0102bc76b960560f23"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 h-10 flex items-center justify-center space-x-2 px-3 rounded-xl bg-lime-950/40 border border-lime-500/40 text-lime-400 hover:bg-lime-600/20 transition"
            >
              <FaUpwork className="text-base shrink-0" />
              <span className="text-xs font-semibold">Upwork</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
