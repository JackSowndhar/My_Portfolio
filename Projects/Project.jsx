import React from "react";
import "./Project.scss";

const Project = () => {
  return (
    <section id="projects" className="project-section">
      <div className="container">
        <h2 className="section-title">PROJECTS</h2>

        <div className="project-card">
          <h3>Sadhana Cart - Full Stack E-commerce Web App</h3>
          <ul>
            <li>React.js, HTML, CSS, Firebase, JavaScript</li>
            <li>
              Responsive e-commerce website with real-time product upload and
              price control
            </li>
            <li>
              User/admin login, authentication, blacklist handling, and product
              cart
            </li>
            <li>Firebase for auth, storage, and real-time database</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Weather App - Real-time Weather Forecast</h3>
          <ul>
            <li>React.js, HTML, CSS, JavaScript, OpenWeatherMap API</li>
            <li>Real-time weather updates for any city using Weather API</li>
            <li>
              Features: temperature, humidity, wind speed, weather icons, search
            </li>
            <li>Responsive design with modern UI</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Nestify Market - E-commerce Console App</h3>
          <ul>
            <li>Java, JDBC, MySQL, JavaMail API</li>
            <li>Console-based marketplace with OTP email authentication</li>
            <li>Integrated MySQL for accounts, products, transactions</li>
            <li>Role-based login and automated payout logic</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Banking Application</h3>
          <ul>
            <li>Java, JDBC, MySQL</li>
            <li>
              Banking system supporting register/login, balance check,
              deposit/withdraw
            </li>
            <li>Used JDBC for CRUD and secure DB operations</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Project;
