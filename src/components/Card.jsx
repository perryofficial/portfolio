import React from "react";

const Card = ({ title, time, degree, score, location, alignment }) => {
  return (
    <div className={`relative w-1/2 ${alignment} p-4`}>
      {/* Card with Blurred Background */}
      <div className="relative bg-bgDarkAlt bg-opacity-60 backdrop-blur-md p-6 rounded-lg shadow-lg">
        {/* Card Content */}
        <h3 className="text-2xl font-semibold text-textMain mb-2">{title}</h3>
        <p className="text-sm text-textMuted mb-2">{degree}</p>
        <p className="text-sm text-textMuted mb-4">{time}</p>
        <p className="text-lg text-textMuted mb-4">{score}</p>
        <p className="text-sm text-textMuted">{location}</p>
      </div>
    </div>
  );
};

export default Card;
