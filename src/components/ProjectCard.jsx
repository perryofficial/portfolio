import React from "react";

const ProjectCard = ({ title, description, technologies, imgSrc, link }) => {
  return (
    <div className="project-card relative flex flex-col w-full sm:w-[45%] md:w-[30%] p-6 rounded-lg shadow-lg backdrop-blur-md bg-white bg-opacity-20">
      <div className="project-image mb-4">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-[200px] object-cover rounded-md"
        />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-300 mb-4">{description}</p>
      <div className="technologies flex space-x-2 mb-4">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="text-xs font-medium text-gray-400 border border-gray-400 px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={link}
        className="text-blue-400 hover:underline text-sm"
        target="_blank" // Open in new tab
        rel="noopener noreferrer"
      >
        Click Here
      </a>
    </div>
  );
};

export default ProjectCard;
