// src/components/ContactForm.jsx
import React, { useState } from "react";
import emailjs from "emailjs-com";  // Import EmailJS SDK

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // for success / error message

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setStatus("Please fill in all fields before sending.");
      return;
    }

    // Set up EmailJS parameters
    const serviceID = "service_gl5cu3y";  // Get this from EmailJS
    const templateID = "template_jfe33nj";  // Get this from EmailJS

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    // Send email using EmailJS
    emailjs
      .send(serviceID, templateID, templateParams, "RTXQOGvPgaV9OqrIm")  // Your EmailJS user ID
      .then(
        (response) => {
          console.log("Success:", response);
          setStatus("Message sent successfully!");
          // Clear form after successful submission
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log("Error:", error);
          setStatus("Oops! Something went wrong.");
        }
      );
  };

  return (
    <section id="contact" className="contact-form-section py-20 px-10 bg-bgDark">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-teal-400">Get in Touch</h2>
      </div>
      <form
        className="max-w-4xl mx-auto p-8 bg-black bg-opacity-60 backdrop-blur-lg rounded-lg shadow-lg border border-white"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg text-teal-400">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-3 mt-2 text-white rounded-lg focus:outline-none bg-gray-800 border border-white focus:ring-2 focus:ring-teal-400"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg text-teal-400">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 mt-2 text-white rounded-lg focus:outline-none bg-gray-800 border border-white focus:ring-2 focus:ring-teal-400"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-lg text-teal-400">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            className="w-full p-3 mt-2 text-white rounded-lg focus:outline-none bg-gray-800 border border-white focus:ring-2 focus:ring-teal-400"
            rows="4"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-teal-400 text-white font-bold rounded-lg hover:bg-teal-500 transition duration-300"
        >
          Send Message
        </button>

        {status && (
          <p className="mt-4 text-center text-sm text-textMuted">{status}</p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
