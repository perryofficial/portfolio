import React from "react";
import ProjectCard from "./ProjectCard";

// Updated Projects Data with Tech Stacks and Descriptions
const projectsData = [
  {
    title: "Menstrual Prediction System",
    description:
      "A Flask-based system that uses machine learning to predict menstrual cycles and fertility windows based on historical data. Implements user authentication for privacy and a simple yet effective prediction algorithm.",
    technologies: [
      "Python",
      "Flask",
      "Machine Learning",
      "Authentication",
      "TensorFlow",
    ],
    link: "https://github.com/perryofficial/periocare",
    imgSrc: "/Menstrual.png", // Use the path relative to public
  },
  {
    title: "Phishing Detection System",
    description:
      "A Flask web app that detects phishing websites by analyzing URL patterns. Uses machine learning models and custom algorithms for classification. The system also features a clean UI built with CSS for better user interaction.",
    technologies: [
      "Python",
      "Flask",
      "Machine Learning",
      "CSS",
      "HTML",
      "JavaScript",
    ],
    link: "https://github.com/perryofficial/phishing-detection",
    imgSrc: "/phishing.png", // Use the path relative to public
  },
  {
    title: "Banking System",
    description:
      "A full-stack banking system using Node.js, Express, and MySQL for backend API, and React for the frontend. Utilizes Sequelize ORM for database interactions. Includes security features like JWT authentication, password hashing with bcrypt, and user authorization.",
    technologies: [
      "Node.js",
      "Express",
      "Sequelize",
      "MySQL",
      "React",
      "Axios",
      "bcryptjs",
      "uuid",
      "dotenv",
      "cors",
      "nodemon",
    ],
    link: "https://github.com/perryofficial/banking-system",
    imgSrc: "/BankingSystem.png", // Use the path relative to public
  },
  {
    title: "Book Review Platform",
    description:
      "A full-stack application built using Node.js, Express, MongoDB, and React, where users can share and read book reviews. Features include user authentication, dynamic review submission, and filtering by genre.",
    technologies: ["Node.js", "Express", "MongoDB", "React", "JWT", "CSS"],
    link: "https://github.com/perryofficial/book-review-platform",
    imgSrc: "/BookReview.png", // Use the path relative to public
  },
  {
    title: "Personal Task Tracker",
    description:
      "A task tracker built using React that helps users organize their personal tasks. It includes features such as task creation, due dates, and task status tracking.",
    technologies: ["React", "JavaScript", "CSS", "HTML"],
    link: "https://github.com/perryofficial/personal-task-tracker",
    imgSrc: "/personaltracker.png", // Use the path relative to public
  },
  {
    title: "IPL Prediction System",
    description:
      "A machine learning-based system to predict the outcome of IPL cricket matches. Uses historical match data, player stats, and team performance to predict the results.",
    technologies: ["Python", "Flask", "Machine Learning", "TensorFlow", "Pandas"],
    link: "https://github.com/perryofficial/ipl-score-and-win-prediction",
    imgSrc: "/iplprediction.png", // Use the path relative to public
  },
  {
    title: "Collaborative Coding Platform",
    description:
      "A platform for real-time collaborative coding. Features include live code sharing, syntax highlighting, and multi-user collaboration for coding projects.",
    technologies: ["Node.js", "Express", "MongoDB", "React", "Socket.IO"],
    link: "https://github.com/perryofficial/codershub",
    imgSrc: "/CodeCollab.png", // Use the path relative to public
  },
];


const Projects = () => {
  return (
    <section id="projects" className="projects-section py-20 bg-gradient-to-r from-blue-1000 to-blue-1300 px-6 sm:px-20">
      <h2 className="text-center text-3xl font-bold text-white mb-10">Projects</h2>
      <div className="project-container flex justify-between flex-wrap gap-10 mx-auto">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            imgSrc={project.imgSrc}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
