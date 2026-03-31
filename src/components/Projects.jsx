import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../data/projects"; // Importing the projects data from projects.js

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevProject();
      } else if (e.key === "ArrowRight") {
        nextProject();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextProject();
    }, 5000); // Change every 5 seconds

    return () => clearInterval(autoSlide);
  }, []);
  const project = projects[currentIndex];

  return (
    <div className="max-w-2xl mx-auto p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl mb-6 text-cyan-400 text-center">Projects</h1>
      <div className="flex items-center justify-center">
        <button
          onClick={prevProject}
          className="p-2 text-cyan-400 hover:text-cyan-300"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:translate-y-1 hover:shadow-xl max-w-sm mx-4">
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
            <p className="text-sm mt-2 text-blue-200">
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
        <button
          onClick={nextProject}
          className="p-2 text-cyan-400 hover:text-cyan-300"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="flex justify-center mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full mx-1 ${index === currentIndex ? "bg-cyan-400" : "bg-gray-600"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
