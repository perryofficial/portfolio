// src/components/About.jsx
import React from "react";

const About = () => {
    return (
        <section id="about" className="bg-bgDark text-textMain min-h-screen pt-24">
            {/* About Section Header */}
            <h2 className="text-4xl font-semibold text-textMain text-center mb-8">About</h2>

            <div className="max-w-6xl mx-auto px-4 mt-12 flex flex-col md:flex-row gap-12 items-center justify-between">

                {/* Left Column: Profile Image */}
                <div className="w-1/3 flex justify-center">
                    <img
                        src="/portfolioimg.jpg"   // <-- your public folder image
                        alt="Profile"
                        className="rounded-full w-64 h-64 object-cover shadow-lg border border-accent"
                    />
                </div>

                {/* Right Column */}
                <div className="w-full md:w-2/3">
                    <h3 className="text-3xl font-semibold text-textMain">
                        Hey, My Name is Prajwal Naik
                    </h3>

                    <p className="text-lg text-textMuted mt-4">
                        Aspiring Results-driven Full Stack Developer with experience in designing and 
                        developing web applications using React for the front-end and Node.js for the 
                        back-end. Proficient in MongoDB, SQL, and integrating RESTful APIs. Strong 
                        problem-solving skills focused on clean code and performance optimization.
                    </p>

                    {/* Skills Box */}
                    <div className="mt-8 p-6 bg-bgDarkAlt bg-opacity-60 backdrop-blur-md rounded-lg shadow-lg">
                        <h4 className="text-xl font-semibold text-textMain">Skills</h4>

                        <div className="mt-4 flex flex-wrap gap-3">
                            {[
                                "HTML", "CSS", "JavaScript", "React", "MongoDB", "Node.js",
                                "Express", "SQL", "Flask", "Python", "Machine Learning",
                                "REST APIs", "Firebase"
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="border border-accent text-accent py-1 px-4 rounded-full text-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
