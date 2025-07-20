import React from "react";
import "./Home.scss";
import SkillBar from "./SkillBar/SkillBar";
import Projects from "./HomeProjects/Projects";
import Education from "../Education/Education";
import Contact from "./HomeContact/Contact";
import Profile from "./Profile/Profile";

const Home = () => {
  return (
    <div>
      <Profile />
      <SkillBar />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
};

export default Home;
