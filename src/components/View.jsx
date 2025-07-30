import React from "react";
import { FaLaptopCode, FaServer, FaCogs } from "react-icons/fa";

const DevStackSection = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center px-4 py-16 text-white">
      <h1 className="text-4xl font-bold mb-10 text-center">Full Stack Developer</h1>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Frontend */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:scale-105 transition duration-300 text-center">
          <FaLaptopCode className="text-5xl text-blue-400 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold">Frontend</h2>
          <p className="text-sm mt-2 text-gray-300">
            HTML, CSS, JavaScript, React, Tailwind
          </p>
        </div>

        {/* "+" Icon */}
        <div className="text-4xl font-bold text-green-400">+</div>

        {/* Backend */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:scale-105 transition duration-300 text-center">
          <FaServer className="text-5xl text-yellow-400 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold">Backend</h2>
          <p className="text-sm mt-2 text-gray-300">
            Node.js, Express, MongoDB, APIs
          </p>
        </div>

        {/* "=" Icon */}
        <div className="text-4xl font-bold text-green-400">=</div>

        {/* Full Stack */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-md hover:scale-105 transition duration-300 text-center">
          <FaCogs className="text-5xl text-purple-400 mb-4 mx-auto" />
          <h2 className="text-xl font-semibold">Full Stack</h2>
          <p className="text-sm mt-2 text-gray-300">
            Complete Web Solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default DevStackSection;
