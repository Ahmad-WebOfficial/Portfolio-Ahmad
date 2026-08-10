import React from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const AboutMe = () => {
  return (
    <div className="bg-gradient-to-b from-[#02060f] via-[#041526] to-[#02060f] text-white font-sans py-20 px-6 sm:px-8 relative overflow-hidden">
      <motion.div
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-950/25 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.14, delayChildren: 0.1 },
            },
          }}
          className="flex flex-col items-center text-center"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
            }}
            className="text-[11px] font-semibold tracking-[0.22em] text-teal-400 uppercase mb-3"
          >
            Who I am
          </motion.span>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
            }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-teal-300 via-white to-teal-300 bg-clip-text text-transparent"
          >
            About Me
          </motion.h2>

          <motion.div
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              show: {
                opacity: 1,
                scaleX: 1,
                transition: { duration: 0.6, ease },
              },
            }}
            className="h-px w-16 bg-gradient-to-r from-transparent via-teal-400 to-transparent mb-7 origin-center"
          />

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
            }}
            className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 max-w-3xl"
          >
            I am a Full Stack Developer passionate about building robust web
            applications, scalable architectures, and seamless user interfaces.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
            }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-3xl"
          >
            I love turning complex ideas into high-performance, user-friendly
            products that make a real impact.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
