// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-bgDark text-textMain py-4 z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        {/* Name on the Left */}
        <Link to="/" className="text-2xl font-bold">
          <span className="text-accent">N.</span> Prajwal
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 text-sm font-medium">
          <Link to="/about" className="hover:text-accent transition-colors">
            About
          </Link>
          <Link to="/education" className="hover:text-accent transition-colors">
            Education
          </Link>
          <Link to="/experience" className="hover:text-accent transition-colors">
            Experience
          </Link>
          <Link to="/projects" className="hover:text-accent transition-colors">
            Projects
          </Link>
          <Link to="/certifications" className="hover:text-accent transition-colors">
            Certificates
          </Link>
          <Link to="/contact" className="hover:text-accent transition-colors">
            Contact
          </Link>
        </div>

        {/* Download CV Button */}
        <a
          href="/PrajwalNaik_FD9324743092.pdf"  // Correct link to the CV file in the public folder
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
