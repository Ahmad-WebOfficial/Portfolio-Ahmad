import React from "react";
import { motion } from "framer-motion";

import saver from "../../images/saver.png";
import delight from "../../images/delight.png";
import imgNews from "../../images/news.jpg";
import cle from "../../images/Clean.jpg";
import fa from "../../images/fashion.png";
import blood from "../../images/pakblood.jpeg";

const ease = [0.22, 1, 0.36, 1];

const projects = [
  {
    name: "Blood Donation",
    url: "https://blooddonation.pk/",
    image: blood,
    description:
      "Developed a real-time digital application infrastructure aimed at optimizing blood donation workflows and platform response times.",
    tags: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
  },
  {
    name: "TopSaver",
    url: "http://topsaver.innovex.biz/",
    image: saver,
    description:
      "A custom web platform built and integrated as a live portfolio reference featuring clean user interfaces and responsive layouts.",
    tags: ["Next.js", "Tailwind CSS", "JavaScript", "Node.js", "PostgreSQL"],
  },
  {
    name: "Delight Crust",
    url: "https://delightcrust.vercel.app/",
    image: delight,
    description:
      "A multi-branch food delivery dashboard featuring role-based authorization rules, dynamic routing parameters, and real-time order tracking.",
    tags: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "MongoDB"],
  },
  {
    name: "Nexus News",
    url: "https://perfect-news.vercel.app/",
    image: imgNews,
    description:
      "A modern and fully responsive news web application delivering up-to-date headlines with smooth category filtering and clean layout design.",
    tags: ["React.js", "Tailwind CSS"],
  },
  {
    name: "Cleaning Project",
    url: "https://wix-cleanic-project.vercel.app/",
    image: cle,
    description:
      "A professional service-oriented web application designed for cleaning businesses with booking schedules and responsive layouts.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Fashion Project",
    url: "https://mejiwoo-fashion-project.vercel.app/",
    image: fa,
    description:
      "An e-commerce fashion storefront featuring product showcases, categories, and smooth responsive user experience.",
    tags: ["React.js", "Tailwind CSS"],
  },
];

const ProjectManager = () => {
  return (
    <div className="bg-gradient-to-b from-[#02060f] via-[#041526] to-[#02060f] text-white font-sans py-20 px-6 sm:px-8 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-teal-950/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-cyan-950/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
          className="flex flex-col items-start mb-12"
        >
          <span className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-2">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-teal-300 via-white to-teal-300 bg-clip-text text-transparent">
            My Featured Projects
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-4 h-px w-24 origin-left bg-gradient-to-r from-teal-400 to-transparent"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: (index % 3) * 0.1,
                ease,
              }}
              whileHover={{ y: -8 }}
              className="bg-[#0b1120]/90 border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between group transition-colors duration-300 hover:border-teal-500/40"
            >
              <div>
                <div className="p-4 pb-0">
                  <div className="h-48 rounded-xl overflow-hidden relative border border-slate-800/60 bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-60" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold bg-slate-900 text-teal-400 border border-slate-800 px-3 py-1.5 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Live Preview - ${project.name}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-teal-300 transition group/link cursor-pointer"
                >
                  <svg
                    className="w-5 h-5 fill-current text-teal-400 group-hover/link:scale-110 transition"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3zM5 5h6V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6h-2v6H5V5z" />
                  </svg>
                  Live Preview
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectManager;
