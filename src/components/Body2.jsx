import React, { useEffect, useState } from "react";
import { FaLaptopCode, FaServer, FaCogs } from "react-icons/fa";

const DevStackSection = () => {
  const [zoomIn, setZoomIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setZoomIn(true), 100);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center px-4 py-16 text-white">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Full Stack Developer
      </h1>

      <div
        className={`flex flex-col md:flex-row items-center gap-10 transition-all duration-700 ${
          zoomIn ? "scale-100 opacity-100" : "scale-50 opacity-0"
        }`}
      >
        <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:scale-105 transition duration-300 text-center">
          <FaLaptopCode className="text-5xl text-blue-400 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold">Frontend</h2>
          <p className="text-sm mt-2 text-gray-300">
            HTML, CSS, JavaScript, React js, Tailwind
          </p>
        </div>

        <div className="text-4xl font-bold text-green-400">+</div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:scale-105 transition duration-300 text-center">
          <FaServer className="text-5xl text-yellow-400 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold">Backend</h2>
          <p className="text-sm mt-2 text-gray-300">
            Node.js,MongoDB,APIs,Firebase
          </p>
        </div>

        <div className="text-4xl font-bold text-green-400">=</div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:scale-105 transition duration-300 text-center">
          <FaCogs className="text-5xl text-purple-400 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold">Full Stack</h2>
          <p className="text-sm mt-2 text-gray-300">
            Complete Web Solutions
          </p>
        </div>
      </div>

      <div className="mt-16 max-w-2xl bg-gray-800 p-6 rounded-xl shadow-lg text-center transition-all duration-700">
        <h3 className="text-2xl font-bold text-green-400 mb-4">
          🚀 My Future Vision
        </h3>
        <p className="text-gray-300 text-base leading-relaxed">
          As a passionate Full Stack Developer, my next goal is to **build a
          software house** that delivers powerful web solutions. I’ve also
          started freelancing on platforms like Fiverr and Upwork to expand my
          skills and network. Every project I take is a step toward building a
          digital empire!
        </p>
      </div>
    </div>
  );
};

export default DevStackSection;
