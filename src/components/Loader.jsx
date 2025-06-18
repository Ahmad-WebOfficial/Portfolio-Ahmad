
import React from "react";
import logo from "../images/img555.jpg"; 

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black text-white gap-6">
      <img
        src={logo}
        alt="Logo"
        className="w-32 h-32 md:w-40 md:h-40 object-contain animate-pulse drop-shadow-xl"
      />

      <h1 className="text-3xl md:text-5xl font-extrabold text-center animate-pulse tracking-widest text-indigo-400 drop-shadow-lg">
        Muhammad Ahmad Fridi
      </h1>

      <div className="flex space-x-2 mt-2">
        <span className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce"></span>
      </div>

      <p className="text-sm text-gray-400 tracking-widest mt-2">
        Loading Portfolio...
      </p>
    </div>
  );
};

export default Loader;
