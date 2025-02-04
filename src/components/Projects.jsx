// src/components/Projects.jsx
import React from "react";
import { projects } from "../data/projects"; // Importing the projects data from projects.js

const Projects = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-gradient-to-b from-black via-gray-900 to-black rounded-lg shadow-lg">
      <h1 className="text-4xl mb-6 text-green-400 text-center">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:translate-y-1 hover:shadow-xl max-w-sm mx-auto"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl mb-2 text-teal-400">{project.title}</h2>
              <p className="text-base leading-6 text-blue-300">
                {project.description}
              </p>
              <p className="text-sm text-blue-200 mt-2">
                <strong>Technologies:</strong> {project.tech.join(", ")}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md transition-colors duration-300 hover:bg-blue-800"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
