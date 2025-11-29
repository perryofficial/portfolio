import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Certifications from "../components/Certifications";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <ContactForm />
    </>
  );
};

export default Home;
