import React from "react";
import img1 from "../images/img77.jpg";
import img2 from "../images/img5s.jpg"; // example image
import img3 from "../images/img6.jpg";
import img4 from "../images/img7.jpg";
import img5 from "../images/img8.jpg";
import img6 from "../images/img9.jpg";
import img7 from "../images/img10.jpg";
import img8 from "../images/img11.jpg";
import img9 from "../images/img12.jpg";
import Head from "../components/Head";
import Foter from "../components/Foter";

const ProjectManager = () => {
  const projects = [
    { name: "Nexus News", url: "https://perfect-nexcent.vercel.app/", image: img2 },
    { name: "Digital Clock", url: "https://perfect-clock-ten.vercel.app/", image: img3 },
    { name: "LoginCraft", url: "https://logincraft.vercel.app/", image: img4 },
    { name: "QuickQR Generator", url: "https://quickqr.vercel.app/", image: img5 },
    { name: "React Portfolio", url: "https://fridi-portfolio.vercel.app/", image: img6 },
    { name: "FindMyJob App", url: "https://findmyjob.vercel.app/", image: img7 },
    { name: "ToDo Tracker", url: "https://simpletodo.vercel.app/", image: img8 },
    { name: "Text Analyzer", url: "https://texttoolx.vercel.app/", image: img9 },
  ];

  return (
    <>
      <div className="mt-15">
        <Head />
      </div>

      <div className="h-full bg-[#1a282e] flex flex-col mt-15 items-center p-5 md:p-10 text-white">
        <img
          src={img1}
          alt="Muhammad Ahmad Fridi"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-contain mb-4 shadow-lg border-4 border-white"
        />

        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Muhammad Ahmad Fridi
        </h1>

        <p className="text-center text-gray-300 max-w-2xl mb-10">
          I am Muhammad Ahmad Fridi, a passionate Frontend Developer dedicated
          to building modern, responsive, and user-friendly websites. I have
          successfully completed multiple projects in web development using
          React, Tailwind CSS, and JavaScript. Many more projects are in
          progress, as I continue to learn and grow in this fast-moving tech
          world. My mission is to create impactful digital experiences that
          solve real-world problems.
        </p>
      </div>

      <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8">My Projects</h1>

        <ul className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <li
              key={i}
              onClick={() => window.open(project.url, "_blank")}
              className="cursor-pointer bg-gray-800 p-4 rounded-lg hover:bg-green-700 transition shadow-md flex flex-col items-center"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded mb-3 border border-gray-700"
              />
              <h3 className="text-lg font-semibold">{project.name}</h3>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-25">
        <Foter />
      </div>
    </>
  );
};

export default ProjectManager;
