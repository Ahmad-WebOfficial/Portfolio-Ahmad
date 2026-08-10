import React, { useEffect, useState } from "react";
import { SiFiverr } from "react-icons/si";
import { FaUpwork } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { BiCrosshair } from "react-icons/bi";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

const navLinks = [
  { id: "home", label: "Home", icon: FaHome },
  { id: "about", label: "About", icon: FaUser },
  { id: "skills", label: "Skills", icon: FaCode },
  { id: "projects", label: "Projects", icon: FaBriefcase },
  { id: "contact", label: "Contact", icon: FaEnvelope },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = navLinks.map((l) => document.getElementById(l.id));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const Logo = () => (
    <button
      type="button"
      onClick={() => scrollToSection("home")}
      className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group"
      aria-label="AHMADTECH home"
    >
      <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-teal-500/25 to-cyan-500/10 border border-teal-400/40 group-hover:border-teal-300/70 transition-colors duration-300 shrink-0">
        <BiCrosshair className="text-teal-300 text-xl" />
      </div>
      <div className="flex flex-col items-start leading-none">
        <span className="text-[14px] sm:text-base font-bold tracking-[0.12em] bg-gradient-to-r from-white via-teal-100 to-teal-300 bg-clip-text text-transparent">
          AHMAD<span className="text-teal-400"> TECH</span>
        </span>
        <span className="text-[9px] font-medium tracking-[0.28em] text-teal-500/70 uppercase mt-1">
          Development
        </span>
      </div>
    </button>
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || menuOpen
          ? "bg-gradient-to-r from-[#02060f] via-[#041a24] to-[#02060f] backdrop-blur-xl border-b border-teal-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
          : "bg-gradient-to-r from-[#02060f]/70 via-[#032018]/40 to-[#02060f]/70 backdrop-blur-md border-b border-transparent"
          }`}
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent" />

        <div className="md:hidden max-w-7xl mx-auto flex items-center justify-between px-4 h-16 relative">
          <Logo />

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            title="Open menu"
            className="flex items-center justify-center w-10 h-10 rounded-lg border border-teal-500/30 bg-gradient-to-br from-teal-500/15 to-cyan-500/5 text-white text-xl hover:border-teal-400/60 transition-colors cursor-pointer"
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <HiMenu />
          </button>
        </div>

        {/* Desktop bar */}
        <div className="hidden md:flex max-w-7xl mx-auto justify-between items-center px-6 h-[4.25rem] relative">
          <Logo />

          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                title={link.label}
                onClick={() => scrollToSection(link.id)}
                className={`relative px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200 cursor-pointer ${activeSection === link.id
                  ? "text-teal-300"
                  : "text-slate-400 hover:text-white"
                  }`}
              >
                {link.label}
                <span
                  className={`absolute left-3.5 right-3.5 -bottom-0.5 h-px bg-gradient-to-r from-teal-500 to-cyan-400 transition-all duration-300 ${activeSection === link.id
                    ? "opacity-100 scale-x-100"
                    : "opacity-0 scale-x-50"
                    }`}
                />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://www.fiverr.com/ahmadfridi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg border border-white/10 bg-gradient-to-r from-white/[0.04] to-emerald-500/5 text-slate-300 hover:text-emerald-300 hover:border-emerald-500/40 transition-all duration-200"
              title="Hire on Fiverr"
            >
              <SiFiverr className="text-xl" />
              <span className="text-xs font-medium">Fiverr</span>
            </a>
            <a
              href="https://www.upwork.com/freelancers/~0102bc76b960560f23"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg border border-teal-500/35 bg-gradient-to-r from-teal-500/15 to-cyan-500/10 text-teal-300 hover:from-teal-500/25 hover:to-cyan-500/15 hover:border-teal-400/50 hover:text-teal-200 transition-all duration-200"
              title="Hire on Upwork"
            >
              <FaUpwork className="text-sm" />
              <span className="text-xs font-medium">Upwork</span>
            </a>
          </div>
        </div>
      </header>

      <div
        className={`md:hidden fixed inset-0 z-[60] bg-black/55 backdrop-blur-sm transition-opacity duration-300 ${menuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      <aside
        className={`md:hidden fixed top-0 left-0 z-[70] h-full w-[82%] max-w-[300px] flex flex-col bg-gradient-to-b from-[#041820] via-[#031018] to-[#02060f] border-r border-teal-500/25 shadow-[20px_0_60px_rgba(0,0,0,0.55)] transition-transform duration-300 ease-out ${menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        aria-hidden={!menuOpen}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-teal-500/15 blur-3xl" />
          <div className="absolute bottom-20 right-0 w-32 h-32 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="relative flex items-center justify-between px-5 h-16 border-b border-teal-500/20">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-teal-500/30 to-cyan-500/10 border border-teal-400/40">
              <BiCrosshair className="text-teal-300 text-xl" />
            </div>
            <div className="leading-none">
              <p className="text-sm font-bold tracking-[0.12em] text-white">
                AHMAD<span className="text-teal-400">TECH</span>
              </p>
              <p className="text-[9px] tracking-[0.22em] text-teal-500/70 uppercase mt-1">
                Menu
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-teal-500/30 bg-teal-500/10 text-white text-lg hover:border-teal-400/60 transition-colors"
            aria-label="Close menu"
          >
            <HiX />
          </button>
        </div>

        <nav className="relative flex-1 overflow-y-auto px-4 py-5 flex flex-col gap-5">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = activeSection === link.id;
            return (
              <button
                key={link.id}
                type="button"
                title={link.label}
                onClick={() => scrollToSection(link.id)}
                className={`w-full flex items-center justify-center gap-2.5 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-200 border cursor-pointer ${active
                  ? "text-teal-100 border-teal-400/40 bg-gradient-to-r from-teal-500/25 to-cyan-500/10 shadow-[0_0_20px_rgba(20,184,166,0.15)]"
                  : "text-slate-300 border-white/5 bg-white/[0.02] hover:border-teal-500/30 hover:bg-teal-500/10 hover:text-white"
                  }`}
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-md border shrink-0 ${active
                    ? "border-teal-300/40 bg-gradient-to-br from-teal-400 to-cyan-400 text-[#021016]"
                    : "border-teal-500/20 bg-teal-500/10 text-teal-300"
                    }`}
                >
                  <Icon className="text-[11px]" />
                </span>
                <span className="tracking-wide">{link.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="relative px-4 pb-6 pt-4 border-t border-teal-500/20 flex flex-col gap-4">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-teal-500/80 uppercase text-center">
            Hire me
          </p>
          <a
            href="https://www.fiverr.com/ahmadfridi"
            target="_blank"
            rel="noopener noreferrer"
            title="Fiverr Profile"
            className="w-full h-10 inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/15 to-transparent text-emerald-300 text-xs font-medium hover:border-emerald-400/50 transition-colors cursor-pointer"
          >
            <SiFiverr className="text-xl" />
            Fiverr Profile
          </a>
          <a
            href="https://www.upwork.com/freelancers/~0102bc76b960560f23"
            target="_blank"
            rel="noopener noreferrer"
            title="Upwork Profile"
            className="w-full h-10 inline-flex items-center justify-center gap-2 rounded-xl border border-teal-500/35 bg-gradient-to-r from-teal-500/20 to-cyan-500/10 text-teal-200 text-xs font-medium hover:border-teal-300/55 transition-colors cursor-pointer"
          >
            <FaUpwork className="text-sm" />
            Upwork Profile
          </a>
        </div>
      </aside>
    </>
  );
};

export default Header;
