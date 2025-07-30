import React from "react";
import Header from "../components/Header"; 
import Footer from "../components/Footer";

const skills = [
  {
    title: "HTML",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    description: "Markup language for web pages",
    color: "bg-orange-100",
    titleColor: "text-gray-800",
  },
  {
    title: "CSS",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    description: "Styling language for web pages",
    color: "bg-blue-100",
    titleColor: "text-gray-800",
  },
  {
    title: "JavaScript",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    description: "Programming language for web development",
    color: "bg-yellow-100",
    titleColor: "text-gray-800",
  },
  {
    title: "React",
    logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
    description: "JavaScript library for building UI",
    color: "bg-cyan-100",
    titleColor: "text-gray-800",
  },
  {
    title: "React Native",
    logo: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    description: "Build mobile apps with React",
    color: "bg-blue-100",
    titleColor: "text-gray-800",
  },
  {
    title: "Firebase",
    logo: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
    description: "Backend services & realtime DB",
    color: "bg-yellow-100",
    titleColor: "text-gray-800",
  },
  {
    title: "Tailwind CSS",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    description: "Utility-first CSS framework",
    color: "bg-teal-100",
    titleColor: "text-gray-800",
  },
  {
    title: "C++",
    logo: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
    description: "High-performance programming language",
    color: "bg-gray-200",
    titleColor: "text-gray-800",
  },
  {
    title: "SPM",
    logo: "https://cdn-icons-png.flaticon.com/512/919/919841.png",
    description: "Swift Package Manager basics",
    color: "bg-purple-100",
    titleColor: "text-gray-800",
  },
  {
    title: "Src & Se",
    logo: "https://cdn-icons-png.flaticon.com/512/149/149852.png",
    description: "Source and software engineering",
    color: "bg-indigo-100",
    titleColor: "text-gray-800",
  },
  {
    title: "Python Basic",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    description: "Basic programming with Python",
    color: "bg-green-100",
    titleColor: "text-gray-800",
  },
  {
    title: "MongoDB",
    logo: "https://cdn-icons-png.flaticon.com/512/528/528101.png",
    description: "NoSQL database for modern apps",
    color: "bg-green-200",
    titleColor: "text-gray-800",
  },
  {
    title: "Node.js",
    logo: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    description: "JavaScript runtime for backend",
    color: "bg-lime-100",
    titleColor: "text-gray-800",
  },
  {
    title: "API",
    logo: "https://cdn-icons-png.flaticon.com/512/595/595655.png",
    description: "Connect services with REST APIs",
    color: "bg-blue-50",
    titleColor: "text-gray-800",
  },
  {
    title: "GitHub",
    logo: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    description: "Version control and collaboration",
    color: "bg-gray-100",
    titleColor: "text-gray-800",
  },
];

const ProfilePage = () => {
  return (
    <>
      <div className="mt-16">
        <Header />
      </div>

      <div className="text-white mt-12 flex flex-col items-center justify-center min-h-screen px-4 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Muhammad Ahmad Fridi
        </h1>

        <p className="text-center text-gray-300 max-w-2xl mb-10">
          I'm a passionate developer with hands-on experience in both front-end
          and backend technologies. Skilled in HTML, CSS, JavaScript, React,
          React Native, Firebase and more. Always eager to learn and build
          modern web and mobile apps.
        </p>

        <section className="w-full max-w-6xl bg-[#162039] rounded-lg py-6 px-4 md:px-10">
          <p className="text-center font-semibold text-white text-[1.6rem] md:text-[2rem]">
            Skills
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className={`${skill.color} p-5 rounded-2xl shadow-md flex flex-col items-center text-center`}
              >
                <img
                  src={skill.logo}
                  alt={`${skill.title} logo`}
                  className="w-16 h-16 object-contain mb-3"
                />
                <h2 className={`${skill.titleColor} text-xl font-bold mb-2`}>
                  {skill.title}
                </h2>
                <p className="text-sm text-gray-700">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="mt-24">
        <Footer />
      </div>
    </>
  );
};

export default ProfilePage;
