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
              <strong>Frontend:</strong> HTML5, CSS3, Bootstrap, JavaScript,
              React.js
            </li>
            <li>
              <strong>Backend:</strong> Java, JDBC, MySQL, JavaMail (Jakarta
              Mail API)
            </li>
            <li>
              <strong>Tools & Platforms:</strong> Git, GitHub, VS Code,
              IntelliJ, Linux
            </li>
          </ul>
        </div>

        <div className="career-objective">
          <h3>Career Objective</h3>
          <p>
            Motivated and self-driven Front-End Developer with hands-on
            experience in building responsive web interfaces and Java-based
            console applications. Passionate about delivering real-world
            solutions using modern web technologies. Seeking an entry-level role
            to grow as a full-stack developer and contribute to impactful
            projects.
          </p>{" "}
          <br />
          <h3>Interests</h3>
          <p>
            Apart from my technical skills, I’m also a sports person — which
            helps me stay active and focused and I enjoy playing volleyball and
            watching movies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
