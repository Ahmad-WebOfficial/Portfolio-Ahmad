import React from "react";
import img1 from "../images/img77.jpg";
import imgNews from "../images/news.jpg";
import imgClock from "../images/clock.jpg";
import books from "../images/books.jpg";
import nexcent from "../images/nexcent.jpg";
import graph from "../images/Graph.jpg";
import api from "../images/api.jpg";
import fa from "../images/fashion.jpg";
import cle from "../images/Clean.jpg";

import chatVideo from "../images/chat.mp4";
import ecommerceVideo from "../images/e-commerus.mp4";

import Head from "../components/Head";
import Foter from "../components/Foter";

const ProjectManager = () => {
  const projects = [
    {
      name: "Nexus News",
      url: "https://perfect-news.vercel.app/",
      image: imgNews,
    },
    {
      name: "Digital Clock",
      url: "https://perfect-clock-ten.vercel.app/",
      image: imgClock,
    },
    {
      name: "Nexcent Project",
      url: "https://perfect-nexcent.vercel.app/",
      image: nexcent,
    },
    {
      name: "Books  Porject",
      url: "https://perfect-books.vercel.app/",
      image: books,
    },
    {
      name: "Grphs Project",
      url: "https://perfect-graphs.vercel.app/",
      image: graph,
    },
    {
      name: "API Project",
      url: "https://perfect-product-api.vercel.app/",
      image: api,
    },
    {
      name: "Cleaning Project",
      url: "https://wix-cleanic-project.vercel.app/",
      image: cle,
    },
    {
      name: "Fashion Project",
      url: "https://mejiwoo-fashion-project.vercel.app/",
      image: fa,
    },
  ];

  return (
    <>
      <div className="mt-15">
        <Head />
      </div>

      <div className="h-full bg-[#1a282e] flex flex-col mt-15 items-center p-5 md:p-10 text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Muhammad Ahmad Fridi
        </h1>

        <p className="text-center text-gray-300 max-w-2xl mb-10">
          I am Muhammad Ahmad Fridi, a passionate Fullsatck Developer dedicated
          to building modern, responsive, and user-friendly websites. I have
          successfully completed multiple projects in web development using
          React, Tailwind CSS, and JavaScript Nodejs and MongoDB. Many more
          projects are in progress as I continue to learn and grow.
        </p>
      </div>

      <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8">My Projects</h1>

        <ul className="w-full max-w-md space-y-3">
          {projects.map((project, i) => (
            <li
              key={i}
              className="flex justify-between items-center bg-gray-800 p-3 rounded hover:bg-green-700 transition cursor-pointer"
              onClick={() => window.open(project.url, "_blank")}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-45 h-40 object-cover rounded-lg border border-gray-700"
                />
                <span className="text-lg font-semibold">
                  {project.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full bg-black text-white">
        <h2 className="text-3xl font-bold text-center py-6">
          FullStack Projects
        </h2>

        <div className="w-full h-screen">
          <video
            src={chatVideo}
            controls
            className="w-full h-full object-contain"
          />
        </div>

        <div className="w-full h-screen mt-15">
          <video
            src={ecommerceVideo}
            controls
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="mt-35">
        <Foter />
      </div>
    </>
  );
};

export default ProjectManager;
