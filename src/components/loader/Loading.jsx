import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BiCrosshair } from "react-icons/bi";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 3600;

    let frame;
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#02060f] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#03141c] via-[#02060f] to-[#010409]" />
      <motion.div
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.08, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[420px] h-[420px] bg-teal-500/15 rounded-full blur-[110px] pointer-events-none"
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-3 rounded-2xl border border-teal-500/20 border-t-teal-400/70"
          />
          <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-500/25 to-cyan-500/10 border border-teal-400/40">
            <BiCrosshair className="text-teal-300 text-3xl" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[11px] font-semibold tracking-[0.28em] text-teal-400/90 uppercase mb-3"
        >
          AHMADTECH
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="text-2xl sm:text-3xl md:text-2xl mt-1 font-extrabold tracking-tight bg-gradient-to-r from-white via-teal-100 to-teal-300 bg-clip-text text-transparent mb-2"
        >
          Muhammad Ahmad Fridi
        </motion.h1>



        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="w-full max-w-[240px]"
        >
          <div className="flex items-center justify-between mb-2 text-[11px] tracking-wider uppercase">
            <span className="text-slate-500">Loading</span>
            <span className="text-teal-300 font-semibold tabular-nums">
              {progress}%
            </span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-slate-800/90 overflow-hidden border border-teal-500/15">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-teal-500 to-cyan-400 shadow-[0_0_12px_rgba(45,212,191,0.45)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
