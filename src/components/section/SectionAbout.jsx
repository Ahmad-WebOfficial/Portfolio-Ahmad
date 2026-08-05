import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="bg-gradient-to-b from-[#02060f] via-[#041526] to-[#02060f] text-white font-sans py-20 px-6 sm:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-950/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-teal-300 via-white to-teal-300 bg-clip-text text-transparent">
              About Me
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl">
              I am a Full Stack Developer passionate about building robust web
              applications, scalable architectures, and seamless user
              interfaces.
            </p>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl">
              I love turning complex ideas into high-performance, user-friendly
              products that make a real impact.
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AboutMe;
