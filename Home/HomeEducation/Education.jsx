import React from "react";
import "./Education.scss";

const Education = () => {
  return (
    <section id="contact" className="education-section">
      <div className="container">
        <h2 className="section-title">EDUCATION</h2>

        <div className="training">
          <h3>Course & Training</h3>
        </div>

        <div className="education-details">
          <ul>
            <li>
              <strong>Java Full-Stack Web Development - </strong>Besant
              Technologies - Bangalore (2025)
            </li>
            <li>
              <strong>BCA</strong> – Sivagamiammal College of Arts & Science -
              Krishnagiri (2021 - 2024)
            </li>
            <li>
              <strong>HSC </strong> – Govt. Higher Secondary School -
              Krishnagiri (2020 - 2021)
            </li>
            <li>
              <strong>SSLC </strong> – Govt. High School - Krishnagiri (2018 -
              2019)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
