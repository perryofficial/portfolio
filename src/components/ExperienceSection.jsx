import React from "react";
import Card from "./Card";

const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-bgDark text-textMain min-h-screen pt-24">
      <h2 className="text-4xl font-semibold text-textMain text-center mb-8">Work Experience</h2>
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative">
          {/* Center Divider */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-accent"></div>
          <div className="space-y-8">
            {/* Branding Catalyst – left */}
            <div className="flex justify-start">
              <Card
                title="Branding Catalyst — Full Stack Developer Intern"
                time="2023"
                degree="Full Stack Developer Intern"
                score="Mumbai, Maharashtra"
                location="Developed frontend and backend modules using the MERN stack and optimized API performance."
                alignment="mr-auto"
              />
            </div>
            {/* Mira Advanced – right */}
            <div className="flex justify-end">
              <Card
                title="Mira Advanced Engineering — Virtual Full Stack Development Intern"
                time="2024"
                degree="Full Stack Development Intern"
                score="Remote"
                location="Built and deployed full-stack applications using React.js, Node.js, and MongoDB. Integrated REST APIs and implemented JWT authentication."
                alignment="ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
