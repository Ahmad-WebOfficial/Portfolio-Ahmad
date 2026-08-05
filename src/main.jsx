import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Head from "./components/navbar/Header";
import Footer from "./components/navbar/Footer";
import Loader from "./components/loader/Loading";
import SectionHome from "./components/section/SectionHome";
import SectionProfile from "./components/section/SectionProfile";
import SectionAbout from "./components/section/SectionAbout";
import SectionSkills from "./components/section/SectionSkills";
import SectionProjects from "./components/section/SectionProjects";
import SectionContact from "./components/section/SectionContact";

const Home = () => (
  <>
    <Head />
    <div id="home"><SectionHome /></div>
    <SectionProfile />
    <div id="about"><SectionAbout /></div>
    <div id="skills"><SectionSkills /></div>
    <div id="projects"><SectionProjects /></div>
    <div id="contact"><SectionContact /></div>
    <Footer />
  </>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 4 seconds ka loader time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);