import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
        <div
      className="min-h-10 min-w-10 bg-blue-300"
      style={{ backgroundImage: "url('bg1.jpg')" }}    
        >

</div>

        <div className="max-w-3xl mx-auto">
          <p className="text-gray-600 leading-relaxed">
            I'm a passionate developer with expertise in building modern web applications.
            I love creating elegant solutions to complex problems and am always eager
            to learn new technologies and methodologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;