// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-bgDark text-textMain py-4 z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        
        {/* Name on Left */}
        <a href="#home" className="text-2xl font-bold">
          <span className="text-accent">N.</span> Prajwal
        </a>

        {/* Navigation */}
        <div className="flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#education" className="hover:text-accent transition-colors">Education</a>
          <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
          <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          <a href="#certifications" className="hover:text-accent transition-colors">Certificates</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>

        {/* Download CV */}
        <a
          href="/PrajwalNaik_FD9324743092.pdf"
          download
          className="border border-accent text-accent px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent hover:text-bgDark transition-colors"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
