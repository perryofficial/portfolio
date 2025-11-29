import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-blue text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-lg">© 2025 Prajwal Naik. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          {/* Email Icon */}
          <a
            href="mailto:naikprajwal20@gmail.com"
            className="text-white border-2 border-teal-400 hover:bg-teal-400 hover:text-white p-3 rounded-full transition duration-300 transform hover:scale-105"
          >
            <i className="fa fa-envelope text-2xl"></i>
          </a>
          
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/prajwal-naik-354542215/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border-2 border-teal-400 hover:bg-teal-400 hover:text-white p-3 rounded-full transition duration-300 transform hover:scale-105"
          >
            <i className="fa fa-linkedin text-2xl"></i>
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/perryofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white border-2 border-teal-400 hover:bg-teal-400 hover:text-white p-3 rounded-full transition duration-300 transform hover:scale-105"
          >
            <i className="fa fa-github text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
