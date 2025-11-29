import React from "react";

const CertificationCard = ({
  title,
  description,
  issuingOrganization,
  imgSrc,
  link,
}) => {
  return (
    <div className="certification-card relative flex flex-col w-full sm:w-[45%] md:w-[30%] p-6 rounded-lg shadow-lg backdrop-blur-md bg-white bg-opacity-20">
      <div className="certification-image mb-4">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-[200px] object-cover rounded-md"
        />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-300 mb-4">{description}</p>
      <div className="text-xs text-gray-400 mb-4">
        <strong>Issued by: </strong> {issuingOrganization}
      </div>
      <a
        href={link}
        className="text-blue-400 hover:underline text-sm"
        target="_blank" // Open in new tab
        rel="noopener noreferrer"
      >
        View Certificate
      </a>
    </div>
  );
};

export default CertificationCard;
