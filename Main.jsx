import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Project";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Footer from "./Footer/Footer";
import Address from "./Address/Address";

const Main = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/address" element={<Address />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Main;
