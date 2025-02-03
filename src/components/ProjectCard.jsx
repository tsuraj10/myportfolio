import React from 'react';

const ProjectCard = ({ title, description, tech }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;