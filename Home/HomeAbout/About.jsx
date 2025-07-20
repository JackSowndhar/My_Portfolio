import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">ABOUT ME</h2>

        <div className="skills">
          <h3>Technical Skills</h3>
          <ul>
            <li>
              <strong>Frontend:</strong> HTML5, CSS3, Bootstrap, JavaScript, React.js
            </li>
            <li>
              <strong>Backend:</strong> Java, JDBC, MySQL, JavaMail (Jakarta Mail API)
            </li>
            <li>
              <strong>Tools & Platforms:</strong> Git, GitHub, VS Code, IntelliJ, Linux
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
