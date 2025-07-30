import React, { useState } from "react";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const [webProjects] = useState([
    { name: "Nexcent", url: "https://perfect-nexcent.vercel.app/" },
    { name: "Nexus News", url: "https://perfect-news.vercel.app/" },
    { name: "Nexus Shop", url: "https://perfect-shop-ecommerce.vercel.app/" },
    { name: "Weather App", url: "https://perfect-weather-api.vercel.app/" },
  ]);

  const [creativeProjects] = useState([
    { name: "YouTube Website", url: "https://perfect-youtube.vercel.app/" },
    { name: "Live TV Streaming", url: "https://perfect-live-tv.vercel.app/" },
    { name: "Image Generator", url: "https://perfect-image.vercel.app/" },
    { name: "Text to Voice", url: "https://perfect-voice.vercel.app/" },
  ]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    setSelectedSkill(null); // Reset selected skill when switching sections
  };

  const renderProjects = (projects) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-4 rounded shadow hover:shadow-lg transition duration-300"
          title={`Open ${project.name}`}
        >
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="text-blue-500 truncate">{project.url}</p>
        </a>
      ))}
    </div>
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="w-full max-w-4xl">
        {activeIndex === 0 ? renderProjects(webProjects) : renderProjects(creativeProjects)}
      </div>
      <div className="flex mt-6 space-x-4">
        {[0, 1].map((index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-3 w-3 rounded-full ${
              index === activeIndex ? "bg-green-400" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
