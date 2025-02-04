import React, { useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation check
    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      setSuccess("");
      return;
    }

    // If all fields are filled, simulate a successful submission
    setSuccess("Message sent successfully!");
    setError("");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-b from-black via-gray-900 to-black min-h-screen">
      <main className="text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl mb-4 text-white">Contact Me</h1>
        <p className="text-xl mb-8 text-white text-center">
          Feel free to reach out to me through the following methods.
        </p>
        <form
          className="text-white w-full max-w-lg bg-gray-700 p-8 rounded-lg shadow-md"
          onSubmit={handleSubmit}
        >
          {success && <p className="text-green-400">{success}</p>}
          {error && <p className="text-red-400">{error}</p>}
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-semibold text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-600 rounded-md text-gray-800 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-semibold text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-600 rounded-md text-gray-800 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-semibold text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border border-gray-600 rounded-md text-gray-800 focus:border-blue-500 focus:outline-none resize-vertical min-h-40"
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Send
          </button>
        </form>
        <p className="text-xl mt-8 mb-4 text-white">
          Or directly contact me through:
        </p>
        <div className="flex justify-center mt-6">
          <a
            href="https://www.facebook.com/suraj.thapa.9861015025"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 mx-2"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/suraj__thapa10/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-700 mx-2"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </main>
    </div>
  );
};

export default Contact;
