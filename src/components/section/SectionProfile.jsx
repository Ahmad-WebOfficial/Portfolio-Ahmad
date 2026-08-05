import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import fridiImg from "../../images/ahmadfridi.jpeg";

const ProfileSection = () => {
  return (
    <div className="bg-[#030712] text-white font-sans py-16 px-6 relative overflow-hidden selection:bg-teal-500 selection:text-black">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 relative z-10">
        <div className="w-full lg:w-auto flex justify-center flex-shrink-0">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/55 group"
            >
              <img
                src={fridiImg}
                alt="Muhammad Ahmad Fridi"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="w-full flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <h1 className="text-2xl text-center lg:text-left sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
                <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Muhammad Ahmad Fridi
                </span>
              </h1>

              <h3 className="text-lg md:text-xl font-semibold text-slate-300 mb-4 tracking-wide text-center lg:text-left">
                Full Stack Developer
              </h3>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl">
                I build scalable, modern applications with a strong focus on
                clean architecture, delightful UX, and performance. My toolkit
                spans HTML, CSS, JavaScript, React.js, Next.js, Node.js,
                Express.js, Tailwind CSS, RESTful APIs, PostgreSQL and MongoDB —
                bringing ideas to life from concept to production with robust
                APIs and smooth interfaces.
              </p>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-lg mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                  className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 text-center hover:border-teal-500/40 transition shadow-lg"
                >
                  <span className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                    Experience
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white">
                    2+ years
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: 0.45, ease: "easeOut" }}
                  className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 text-center hover:border-teal-500/40 transition shadow-lg"
                >
                  <span className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                    Speciality
                  </span>
                  <span className="text-base sm:text-lg font-bold text-teal-400 truncate block">
                    FullStack
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
                  className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 text-center hover:border-teal-500/40 transition shadow-lg"
                >
                  <span className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                    Focus
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white truncate block">
                    Performance{" "}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
