// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"  // Add an id to the Hero section for smooth scrolling
      className="min-h-screen bg-gradient-to-b from-bgDark to-bgDarkAlt text-textMain flex flex-col justify-center items-center pt-24"
    >
      <h1 className="text-5xl font-bold">
        Naik <span className="text-accent">Prajwal</span>
      </h1>
      <p className="text-lg md:text-2xl mt-2">Junior Full Stack Developer</p>

      <div className="mt-8 flex gap-6">
        <a
          href="about"  // This will scroll to the About section
          className="border border-accent text-accent px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent hover:text-bgDark transition-colors"
        >
          About Me
        </a>
        <a
          href="/PrajwalNaik_FD9324743092.pdf"
          download
          className="border border-accent text-accent px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent hover:text-bgDark transition-colors"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
