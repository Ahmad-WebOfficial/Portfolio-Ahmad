import React from "react";
import { motion } from "framer-motion";
import { BiCrosshair } from "react-icons/bi";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#02060f] via-[#050f1f] to-[#02060f] text-white overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/30 to-cyan-500/10 border border-teal-400/50 shadow-[0_0_30px_rgba(20,184,166,0.4)] mb-6"
        >
          <BiCrosshair className="text-teal-400 text-3xl animate-spin-slow" />
          <div className="absolute inset-0 rounded-2xl bg-teal-400/20 blur-lg"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg sm:text-2xl font-medium text-slate-300 tracking-wide mb-2"
        >
          Welcome to my site
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-teal-300 via-cyan-300 to-teal-400 bg-clip-text text-transparent uppercase drop-shadow-lg mb-8"
        >
          Muhammad Ahmad Fridi
        </motion.h1>

        <div className="w-48 h-1.5 bg-slate-800/80 rounded-full overflow-hidden relative border border-teal-500/20">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-y-0 w-full bg-gradient-to-r from-transparent via-teal-400 to-transparent rounded-full shadow-[0_0_12px_#2dd4bf]"
          />
        </div>

        <span className="text-[11px] font-bold tracking-[0.3em] text-slate-500 uppercase mt-4">
          LOADING SYSTEM...
        </span>
      </div>
    </div>
  );
};

export default Loader;
