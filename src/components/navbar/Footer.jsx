import React from "react";
import { FaUpwork } from "react-icons/fa6";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#02060f] via-[#04111f] to-[#010409] text-white pt-16 px-6 md:px-12 border-t border-teal-500/20 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-center pb-12 border-b border-slate-800/80 gap-8 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
            <span className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-2 block">
              AVAILABLE FOR HIRE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-teal-300 via-white to-teal-300 bg-clip-text text-transparent">
              I am available for <br className="hidden md:block" /> Freelancing.
            </h2>
          </div>

          <div className="flex flex-col space-y-4 text-left bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl shadow-inner w-full lg:w-auto items-start">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                <FaUser className="text-sm" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Full Name
                </span>
                <span className="text-teal-300 font-semibold text-sm sm:text-base">
                  Muhammad Ahmad Fridi
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                <FaEnvelope className="text-sm" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Email Address
                </span>
                <a
                  href="mailto:muhammadahmadfridi71al@gmail.com"
                  className="text-teal-400 hover:text-teal-300 font-medium text-sm sm:text-base transition"
                >
                  muhammadahmadfridi71al@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                <FaPhoneAlt className="text-xs" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Phone Number
                </span>
                <a
                  href="tel:+923298708298"
                  className="text-slate-200 hover:text-white font-medium text-sm sm:text-base transition"
                >
                  +92 3298708298
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 text-center text-slate-500 text-xs sm:text-sm">
          © {currentYear} Muhammad Ahmad Fridi | Full Stack Developer. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
