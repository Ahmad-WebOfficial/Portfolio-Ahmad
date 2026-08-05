import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const EducationAndSkills = () => {
  const education = [
    {
      period: "2023 - 2025",
      title: "Associate Degree Program (ADP)",
      institution: "UMT, Lahore",
      description:
        "Completed Associate Degree Program with a focus on core software development, modern programming fundamentals, and problem-solving methodologies.",
    },
  ];

  const skills = [
    {
      name: "HTML",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
          alt="HTML5"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "CSS",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          alt="CSS3"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
          alt="JavaScript"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "React.js",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          alt="React.js"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "Next.js",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          alt="Next.js"
          className="w-12 h-12 invert"
        />
      ),
    },
    {
      name: "Node.js",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
          alt="Node.js"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "Express.js",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          alt="Express.js"
          className="w-12 h-12 invert"
        />
      ),
    },
    {
      name: "Tailwind CSS",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
          alt="Tailwind CSS"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "RESTful APIs",
      icon: <div className="text-teal-400 font-bold text-lg">API</div>,
    },
    {
      name: "PostgreSQL",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
          alt="PostgreSQL"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
          alt="MongoDB"
          className="w-12 h-12"
        />
      ),
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#02060f] via-[#041526] to-[#02060f] text-white font-sans py-20 px-6 sm:px-8 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-teal-950/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-950/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        <div className="lg:col-span-6 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="text-teal-400 text-2xl">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 16.1V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11.1L16 12l-4 4-4-4-6 4.1z"></path>
                <path d="M2 21h20"></path>
              </svg>
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-teal-300 via-white to-teal-300 bg-clip-text text-transparent">
              My Education
            </h2>
          </motion.div>

          <div className="relative pl-8 border-l-2 border-teal-500/40 space-y-12 w-full">
            {education.map((edu, index) => (
              <AnimatePresence key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="absolute -left-[38px] top-1.5 w-4 h-4 rounded-full bg-teal-500 border-4 border-[#02060f] shadow-[0_0_0_4px_rgba(4,47,46,0.4)]"></div>

                  <span className="text-sm font-semibold text-teal-400 block mb-1.5">
                    {edu.period}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {edu.title}
                  </h3>
                  <p className="text-sm text-slate-400 italic mb-3">
                    {edu.institution}
                  </p>
                  <p className="text-slate-300 text-base leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-10"
          >
            <span className="text-teal-400 text-2xl">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.21 16.31a2 2 0 0 0-1.14-1.76l-3.8-1.35a6 6 0 1 0-6.6 0l-3.8 1.35a2 2 0 0 0-1.14 1.76v.52a2 2 0 0 0 1.14 1.76l3.8 1.35a6 6 0 1 0 6.6 0l3.8-1.35a2 2 0 0 0 1.14-1.76z" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-teal-300 via-white to-teal-300 bg-clip-text text-transparent">
              My Skills
            </h2>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-5 w-full">
            {skills.map((skill, index) => (
              <AnimatePresence key={skill.name}>
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.8 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.08 }}
                  className="flex flex-col items-center justify-center gap-3 cursor-pointer group"
                >
                  <div className="w-24 h-24 bg-[#0b1120]/80 rounded-2xl flex items-center justify-center border border-slate-800/80 group-hover:border-teal-500/50 shadow-xl transition">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-semibold text-slate-300 group-hover:text-teal-300 transition">
                    {skill.name}
                  </span>
                </motion.div>
              </AnimatePresence>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAndSkills;
