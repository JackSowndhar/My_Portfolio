import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/contact">Contact</Link>
        <Link to="/address">Address</Link>
      </div>
      <div className="footer-bottom">
        <p>
          ( © {new Date().getFullYear()} ) Made with ❤️ by{"  "}
          <span className="Fname"> SOWNDHAR</span>
        </p>
        <p >THANKS FOR VISITING!🙌</p>
      </div>
    </footer>
  );
};

export default Footer;
