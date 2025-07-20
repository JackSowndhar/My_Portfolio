import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="home" className="contact-section">
      <div className="container">
        <h2 className="section-title">CONTACT</h2>

        <div className="contact-info">
          <p>
            <strong>Location:</strong> Bangalore, India
          </p>
          <p>
            <strong>Phone:</strong> +91 83004 37618
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:sowndharsowndhar888@gmail.com">
              sowndharsowndhar888@gmail.com
            </a>
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a 
              href="https://github.com/JackSowndhar"
              target="_blank"
              rel="noreferrer">
              github.com/JackSowndhar
            </a>
          </p>

          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://linkedin.com/in/sowndhar-murugesan-386846344/"
              target="_blank"
              rel="noreferrer" >
              linkedin.com/in/sowndhar-murugesan
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
