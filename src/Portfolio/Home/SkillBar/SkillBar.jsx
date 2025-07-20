import React, { useEffect, useState } from "react";
import "./SkillBar.scss";

const skillsData = [
  { name: "HTML5", level: 80 },
  { name: "CSS3", level: 85 },
  { name: "Bootstrap", level: 74 },
  { name: "JavaScript", level: 71 },
  { name: "React.js", level: 82 },
  { name: "Java", level: 61 },
  { name: "JDBC", level: 65 },
  { name: "MySQL", level: 68 },
  { name: "FireBase", level: 52 },
  { name: "MONGO DB", level: 60 },
  { name: "Git", level: 46 },
  { name: "GitHub", level: 55 },
  { name: "VS Code", level: 85 },
  { name: "IntelliJ", level: 70 },
  { name: "Linux", level: 54 },
  { name: "AWS", level: 44 },
];

const SkillBar = () => {
  const [progress, setProgress] = useState(skillsData.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) =>
        prev.map((val, i) => (val < skillsData[i].level ? val + 1 : val))
      );
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="skill-section">
      <h2>Technical Skills</h2>
      <div className="skill-list">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-bar">
            <div className="label">
              <span>{skill.name}</span>
              <span>{progress[index]}%</span>
            </div>
            <div className="bar">
              <div
                className="filled"
                style={{ width: `${progress[index]}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillBar;
