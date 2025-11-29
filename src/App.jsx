// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  // Navbar component
import Hero from "./components/Hero";      // Hero component
import About from "./components/About";    // About section
import EducationSection from "./components/EducationSection";  // Education section
import ExperienceSection from "./components/ExperienceSection"; // Work Experience section
import Projects from "./components/Projects";  // Projects section
import Certifications from "./components/Certifications"; // Certificates section
import ContactForm from "./components/ContactForm";  // Contact Form section
import Footer from "./components/Footer";  // Footer component

import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bgDark text-textMain">
        {/* Navbar */}
        <Navbar />

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<EducationSection />} />
          <Route path="/experience" element={<ExperienceSection />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
