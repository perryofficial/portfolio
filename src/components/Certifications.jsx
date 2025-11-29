import React from "react";
import CertificationCard from "./CertificaitonCard";

// Updated Certifications Data
const certificationsData = [
  {
    title: "AWS Academy Cloud Foundations",
    description:
      "Certificate for completing the AWS Academy Cloud Foundations course. This certification validates the foundational skills and knowledge needed to work with AWS cloud services.",
    issuingOrganization: "AWS Academy",
    link: "https://drive.google.com/file/d/1a-DOEKAu1GXUIHX-V8ICK97Zf4XG9CcQ/view?usp=sharing",
    imgSrc: "/aws.png", // Replace with your AWS certificate image
  },
  {
    title: "Internship Certificate - MIRA Advanced Engineering",
    description:
      "Internship certificate for completing practical tasks as an Intern JavaScript Developer with MIRA Advanced Engineering from January 05, 2024 to February 05, 2024.",
    issuingOrganization: "MIRA Advanced Engineering",
    link: "https://drive.google.com/file/d/1xkCAcw_-Z9jGIuyDox7neY346DVXH2xv/view?usp=sharing", // Replace with actual link
    imgSrc: "/intern.png", // Replace with your Internship certificate image
  },
  {
    title: "JavaScript MERN Full Stack",
    description:
      "Certificate for completing the JavaScript MERN Full Stack course, covering React, Node.js, Express, MongoDB, and other essential technologies for full-stack development.",
    issuingOrganization: "Kamal Classes",
    link: "https://drive.google.com/file/d/19EBXugwprYgfZeoQ780MsMqn0nIvycMh/view?usp=sharing", // Replace with actual link
    imgSrc: "/jsCertificate.png", // Replace with your MERN Full Stack certificate image
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section py-20 bg-gradient-to-r from-gray-800 to-gray-900 px-6 sm:px-20">
      <h2 className="text-center text-3xl font-bold text-white mb-10">Certifications</h2>
      <div className="certification-container flex justify-between flex-wrap gap-10 mx-auto">
        {certificationsData.map((certification, index) => (
          <CertificationCard
            key={index}
            title={certification.title}
            description={certification.description}
            issuingOrganization={certification.issuingOrganization}
            imgSrc={certification.imgSrc}
            link={certification.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
