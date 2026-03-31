import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const roles = [
    "Frontend Developer",
    "React Developer",
    "UI/UX Enthusiast",
    "JavaScript Developer",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setOpacity(1);
      }, 500);
    }, 4000);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <main className="relative z-10 min-h-screen py-16 flex flex-col justify-center items-center text-white bg-gradient-to-br from-slate-950 via-indigo-950 to-cyan-950">
      <div className="absolute inset-0 bg-black/35 backdrop-blur-sm z-0"></div>

      <div className="absolute inset-0 bg-black/35 backdrop-blur-sm z-0"></div>

      <div className="relative z-20 flex flex-col md:flex-row justify-between items-center w-full max-w-4xl mb-8 gap-8 md:gap-12 px-4 md:px-6">
        {/* Text Section */}
        <div className="flex-1 pr-0 md:pr-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-bold px-2 sm:px-0">
            Hi, I am Suraj Thapa.
          </h1>
          <p
            className="text-xl sm:text-2xl md:text-2xl mb-2 font-semibold text-blue-300 transition-opacity duration-500"
            style={{ opacity }}
          >
            {roles[roleIndex]} <span className="text-cyan-400">|</span>
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 px-2 sm:px-0">
            I build beautiful, responsive, and user-friendly web experiences
            using React, Tailwind CSS and Vite.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="/mycv.pdf"
              download
              className="inline-block mt-4 px-5 py-3 text-base sm:text-lg md:text-xl text-white bg-blue-600 rounded-md shadow-md transition-transform duration-150 hover:bg-blue-700 hover:scale-105"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end flex-shrink-0 mt-6 md:mt-0">
          <img
            src={`${import.meta.env.BASE_URL}surajj.jpg`}
            alt="My Image"
            width={330}
            height={350}
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full shadow-lg object-cover"
          />
        </div>
      </div>

      <div className="relative z-20 flex flex-wrap justify-center gap-4 max-w-2xl mt-12">
        <Link
          to="/about"
          className="m-4 flex-basis-45 p-6 text-left no-underline border border-gray-300 rounded-md shadow-lg transition-transform duration-150 hover:text-blue-600 hover:border-blue-600 hover:scale-105"
        >
          <h3 className="mb-4 text-xl">About Me &rarr;</h3>
          <p className="text-lg">Learn more about who I am and what I do.</p>
        </Link>

        <Link
          to="/projects"
          className="m-4 flex-basis-45 p-6 text-left no-underline border border-gray-300 rounded-md shadow-lg transition-transform duration-150 hover:text-blue-600 hover:border-blue-600 hover:scale-105"
        >
          <h3 className="mb-4 text-xl">Projects &rarr;</h3>
          <p className="text-lg">Check out some of my latest work.</p>
        </Link>

        <Link
          to="/contact"
          className="m-4 flex-basis-45 p-6 text-left no-underline border border-gray-300 rounded-md shadow-lg transition-transform duration-150 hover:text-blue-600 hover:border-blue-600 hover:scale-105"
        >
          <h3 className="mb-4 text-xl">Contact &rarr;</h3>
          <p className="text-lg">Get in touch with me.</p>
        </Link>
      </div>
    </main>
  );
};

export default Hero;
