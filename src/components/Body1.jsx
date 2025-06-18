import React, { useState } from "react";
import { Link } from "react-router-dom";
import img22 from "../images/img88.jpg" 

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row items-center justify-between lg:p-30 px-8 py-16 bg-[#1b263b] min-h-screen">
        <div className="text-left space-y-4 md:w-166">
          <h1 className="text-5xl font-bold text-black">Muhammad Ahmad Fridi</h1>
          <h2 className="text-xl text-green-500 lg:text-2xl font-semibold">
            Frontend Developer
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            I specialize in Web Development and Mobile Development.
          </p>
          <Link to="/contact">
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow-md transition duration-300">
              Let's Get Started
            </button>
          </Link>
        </div>

        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            alt="Muhammad Ahmad Fridi"
            src={img22}
            onClick={openModal}
            className="cursor-pointer w-63 h-63 md:w-80 md:h-80 rounded-full object-cover object-top mb-4 shadow-lg border-4 border-white"
          />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-3xl font-bold"
          >
            ❌
          </button>
          <img
            src={img22}
            alt="Full Size"
            className="max-w-full max-h-full rounded-lg shadow-2xl border-4 border-white"
          />
        </div>
      )}
    </div>
  );
};

export default HeroSection;