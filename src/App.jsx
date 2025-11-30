// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <div className="min-h-screen bg-bgDark text-textMain">
      
      <Navbar />

      {/* Single Page Sections */}
      <section id="home"><Hero /></section>
      <section id="about"><About /></section>
      <section id="education"><EducationSection /></section>
      <section id="experience"><ExperienceSection /></section>
      <section id="projects"><Projects /></section>
      <section id="certifications"><Certifications /></section>
      <section id="contact"><ContactForm /></section>

      <Footer />

    </div>
  );
}

export default App;