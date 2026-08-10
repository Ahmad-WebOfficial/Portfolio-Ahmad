import React from "react";
import { motion } from "framer-motion";
import fridiImg from "../../images/ahmadfridi.jpeg";

const ease = [0.22, 1, 0.36, 1];

const stats = [
  { label: "Experience", value: "2+ years", accent: "text-white" },
  { label: "Speciality", value: "FullStack", accent: "text-teal-400" },
  { label: "Focus", value: "Performance", accent: "text-white" },
];

const ProfileSection = () => {
  return (
    <div className="bg-[#030712] text-white font-sans py-16 px-6 relative overflow-hidden selection:bg-teal-500 selection:text-black">
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"
      />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40, scale: 0.94 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease }}
          className="w-full lg:w-auto flex justify-center flex-shrink-0"
        >
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35 }}
            className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border border-teal-500/20 shadow-2xl bg-slate-900/55 group"
          >
            <img
              src={fridiImg}
              alt="Muhammad Ahmad Fridi"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 ring-1 ring-inset ring-teal-400/10 rounded-3xl pointer-events-none" />
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 0.15 },
            },
          }}
          className="flex flex-col items-center lg:items-start text-center lg:text-left w-full"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
            }}
            className="text-2xl text-center lg:text-left sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-2"
          >
            <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Muhammad Ahmad Fridi
            </span>
          </motion.h1>

          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
            }}
            className="text-lg md:text-xl font-semibold text-slate-300 mb-4 tracking-wide"
          >
            Full Stack Developer
          </motion.h3>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
            }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8 max-w-3xl"
          >
            I build scalable, modern applications with a strong focus on clean
            architecture, delightful UX, and performance. My toolkit spans HTML,
            CSS, JavaScript, React.js, Next.js, Node.js, Express.js, Tailwind
            CSS, RESTful APIs, PostgreSQL and MongoDB — bringing ideas to life
            from concept to production with robust APIs and smooth interfaces.
          </motion.p>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-lg mb-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease, delay: i * 0.05 },
                  },
                }}
                whileHover={{ y: -4, borderColor: "rgba(45,212,191,0.45)" }}
                className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 text-center shadow-lg transition-colors"
              >
                <span className="block text-xs uppercase tracking-wider text-slate-400 mb-1">
                  {stat.label}
                </span>
                <span
                  className={`text-sm sm:text-lg font-bold truncate block ${stat.accent}`}
                >
                  {stat.value}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfileSection;
