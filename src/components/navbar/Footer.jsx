import React, { useEffect, useState } from "react";
import { FaUpwork } from "react-icons/fa6";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowUp,
} from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { BiCrosshair } from "react-icons/bi";

const socialLinks = [
  {
    href: "https://github.com/Ahmad-WebOfficial",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/muhammad-ahmad-fridi-b4780035a/",
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "https://www.fiverr.com/ahmadfridi",
    icon: SiFiverr,
    label: "Fiverr",
  },
  {
    href: "https://www.upwork.com/freelancers/~0102bc76b960560f23",
    icon: FaUpwork,
    label: "Upwork",
  },
];

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="relative text-white overflow-hidden border-t border-teal-500/20 bg-gradient-to-b from-[#03141c] via-[#020b14] to-[#010409]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 left-1/4 w-[280px] sm:w-[420px] h-[180px] sm:h-[280px] bg-teal-500/10 rounded-full blur-[90px]" />
          <div className="absolute bottom-0 right-1/5 w-[220px] sm:w-[380px] h-[140px] sm:h-[220px] bg-cyan-600/10 rounded-full blur-[90px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/45 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pt-10 sm:pt-12 md:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pb-10 sm:pb-12">
            <div className="text-center md:text-left">
              <button
                type="button"
                onClick={() => scrollToSection("home")}
                className="inline-flex items-center gap-3 group mb-3 sm:mb-4"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-teal-500/25 to-cyan-500/10 border border-teal-400/40">
                  <BiCrosshair className="text-teal-300 text-xl" />
                </div>
                <span className="text-base font-bold tracking-[0.12em] bg-gradient-to-r from-white to-teal-300 bg-clip-text text-transparent">
                  AHMAD<span className="text-teal-400"> TECH</span>
                </span>
              </button>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm mx-auto md:mx-0">
                Full-stack developer crafting clean interfaces and reliable
                backends for freelancers and growing teams.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 mt-5">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="w-10 h-10 sm:w-9 sm:h-9 inline-flex items-center justify-center rounded-lg border border-teal-500/20 bg-gradient-to-br from-teal-500/10 to-transparent text-slate-400 hover:text-teal-200 hover:border-teal-400/50 transition-all duration-200 cursor-pointer"
                  >
                    <Icon
                      className={label === "Fiverr" ? "text-lg" : "text-sm"}
                    />
                  </a>
                ))}
              </div>
            </div>

            <div className="w-full md:max-w-lg md:ml-auto">
              <h3 className="text-xs font-semibold tracking-[0.18em] text-teal-500/80 uppercase mb-4 text-center md:text-left">
                Contact
              </h3>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:muhammadahmadfridi71al@gmail.com"
                  className="flex items-center gap-3.5 group rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-500/10 via-[#041820]/60 to-transparent px-4 py-3.5 hover:border-teal-400/45 hover:from-teal-500/15 transition-all duration-300"
                >
                  <span className="w-10 h-10 shrink-0 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 text-[#021016] shadow-[0_0_16px_rgba(45,212,191,0.25)]">
                    <FaEnvelope className="text-sm" />
                  </span>
                  <span className="min-w-0 text-left">
                    <span className="block text-[10px] font-semibold tracking-[0.16em] text-teal-500/80 uppercase mb-0.5">
                      Email
                    </span>
                    <span className="text-[13px] sm:text-sm text-slate-200 group-hover:text-teal-200 transition-colors break-all leading-snug">
                      muhammadahmadfridi71al@gmail.com
                    </span>
                  </span>
                </a>
                <a
                  href="tel:+923298708298"
                  className="flex items-center gap-3.5 group rounded-2xl border border-teal-500/20 bg-gradient-to-br from-teal-500/10 via-[#041820]/60 to-transparent px-4 py-3.5 hover:border-teal-400/45 hover:from-teal-500/15 transition-all duration-300"
                >
                  <span className="w-10 h-10 shrink-0 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 text-[#021016] shadow-[0_0_16px_rgba(45,212,191,0.25)]">
                    <FaPhoneAlt className="text-sm" />
                  </span>
                  <span className="text-left">
                    <span className="block text-[10px] font-semibold tracking-[0.16em] text-teal-500/80 uppercase mb-0.5">
                      Phone
                    </span>
                    <span className="text-[13px] sm:text-sm text-slate-200 group-hover:text-teal-200 transition-colors">
                      +92 329 8708298
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between py-5 sm:py-6 border-t border-teal-500/15">
            <p className="text-[11px] sm:text-sm text-slate-500 text-center sm:text-left order-2 sm:order-1">
              © {currentYear} Muhammad Ahmad Fridi. All rights reserved.
            </p>


          </div>
        </div>
      </footer>

      <button
        type="button"
        onClick={scrollToTop}
        title="Back to top"
        aria-label="Scroll to top"
        className={`fixed bottom-13 right-4 sm:bottom-20 sm:right-8 z-40 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-teal-300/40 bg-gradient-to-br from-teal-400 to-cyan-500 text-[#021016] shadow-[0_10px_30px_rgba(20,184,166,0.35)] transition-all duration-300 hover:scale-105 cursor-pointer ${showTop
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
          }`}
      >
        <FaArrowUp className="text-sm" />
      </button>
    </>
  );
};

export default Footer;
