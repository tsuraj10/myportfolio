import React from "react";
import { Helmet } from "react-helmet";

const About= () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-3xl mx-auto p-8 bg-gray-800 rounded-2xl shadow-lg">
        <h1 className="text-4xl mb-6 text-center text-cyan-400 font-bold">
          About Me
        </h1>
        <p className="text-lg leading-relaxed text-cyan-200 text-justify mb-6">
          Hi, I&apos;m Suraj Thapa, a passionate and dedicated web developer
          with a knack for creating dynamic and responsive web applications.
          With a strong foundation in front-end and back-end technologies, I
          specialize in delivering seamless user experiences and efficient
          solutions. My expertise includes HTML, CSS, JavaScript, React, and
          Node.js. I&apos;m committed to continuous learning and staying updated
          with the latest industry trends to build innovative and impactful web
          projects. Let&apos;s connect and create something amazing together!
        </p>
        <div className="flex justify-center">
          <a
            href="/mycv.pdf"
            download
            className="inline-block mt-4 px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md transition-colors duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
