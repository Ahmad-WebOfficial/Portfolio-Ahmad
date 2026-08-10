import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import robotImg from "../../images/robot.png";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const Home = () => {
  const fullText = "Web Developer";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
          setTypingSpeed(100);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setTypingSpeed(150);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, typingSpeed]);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socials = [
    {
      href: "https://x.com/ahmadfridi7",
      label: "X",
      path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
    },
    {
      href: "https://www.linkedin.com/in/muhammad-ahmad-fridi-b4780035a/",
      label: "LinkedIn",
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    },
    {
      href: "https://github.com/Ahmad-WebOfficial",
      label: "GitHub",
      path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    },
    {
      href: "https://wa.me/923298708298",
      label: "WhatsApp",
      path: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.124-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z",
    },
  ];

  return (
    <div className="min-h-screen bg-[#02060f] text-white font-sans relative overflow-hidden selection:bg-teal-500 selection:text-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(4,47,46,0.25),transparent_70%)] pointer-events-none" />
      <motion.div
        animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-teal-950/25 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ opacity: [0.25, 0.45, 0.25], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-cyan-900/15 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="absolute inset-0 pointer-events-none opacity-80">
        {[
          { top: "15%", left: "20%", delay: 0, size: "text-teal-300 text-xs" },
          { top: "35%", left: "55%", delay: 0.5, size: "text-white text-sm" },
          { top: "25%", left: "75%", delay: 1, size: "text-teal-200 text-xs" },
          { top: "65%", left: "15%", delay: 0.8, size: "text-white text-sm" },
          { top: "75%", left: "65%", delay: 1.5, size: "text-teal-300 text-xs" },
          { top: "45%", left: "85%", delay: 0.3, size: "text-white text-xs" },
          { top: "85%", left: "35%", delay: 1.2, size: "text-teal-200 text-sm" },
        ].map((star, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.25, 1, 0.25], scale: [0.85, 1.25, 0.85], y: [0, -8, 0] }}
            transition={{
              duration: 2.6 + (i % 3) * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: star.delay,
            }}
            className={`absolute drop-shadow-[0_0_8px_#2dd4bf] ${star.size}`}
            style={{ top: star.top, left: star.left }}
          >
            {i % 2 === 0 ? "✦" : "✧"}
          </motion.div>
        ))}
      </div>

      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-36 md:pt-32 pb-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="md:col-span-7 md:p-3 flex flex-col items-start w-full"
        >
          <motion.h2
            variants={fadeUp}
            className="text-xl md:text-2xl font-semibold text-slate-300 mb-4 md:mb-3 tracking-wide flex items-center gap-1"
          >
            <span>{displayText}</span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.9, repeat: Infinity }}
              className="inline-block w-0.5 h-6 bg-teal-400"
            />
          </motion.h2>

          <motion.h1
            variants={fadeUp}
            className="text-2xl sm:text-5xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight md:leading-none"
          >
            Hello, I'm
            <span className="block mt-2 md:mt-3 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Muhammad Ahmad Fridi
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-slate-400 text-base md:text-lg max-w-xl mb-8 md:mb-10 leading-relaxed"
          >
            I turn complex ideas into seamless, high-impact web experiences —
            building modern, scalable, and lightning-fast applications that make
            a difference.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToProjects}
              title="View My Work"
              className="cursor-pointer px-7 py-3.5 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-950 font-bold transition shadow-lg shadow-teal-500/25 flex items-center gap-2"
            >
              View Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              title="View My Resume"
              onClick={() => {
                const pdfUrl = "/Ahmad-Mern-Developer.pdf";
                const link = document.createElement("a");
                link.href = pdfUrl;
                link.download = "Muhammad_Ahmad_Fridi_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="cursor-pointer px-7 py-3.5 rounded-full bg-slate-200 hover:bg-white text-slate-950 font-bold transition flex items-center gap-2 shadow-lg"
            >
              My Resume
            </motion.button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 text-slate-400 w-full"
          >
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                whileHover={{ y: -3, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 bg-slate-900/60 hover:bg-slate-800 hover:text-teal-400 rounded-full border border-slate-800/80 transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d={s.path} />
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.88, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease }}
          className="hidden md:col-span-5 md:flex relative justify-center items-center"
        >
          <div className="relative w-full max-w-sm md:max-w-md aspect-square flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.55, 0.35] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 bg-teal-500/15 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full h-full flex flex-col items-center justify-center overflow-hidden"
            >
              <img
                src={robotImg}
                alt="Robot Character"
                className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(20,184,166,0.35)]"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
