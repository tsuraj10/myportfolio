import React from 'react';

const Hero = () => {
  return (
    <main className="relative z-10 text-white bg-gradient-to-b from-black via-gray-900 to-black min-h-screen py-16 flex flex-col justify-center items-center">
      <div className="absolute inset-0 bg-transparent bg-opacity-50 z-0"></div>

      <div className="relative z-20 flex justify-between items-center w-full max-w-2xl mb-8">
        <div className="flex-1 pr-4">
          <h1 className="text-3xl mb-4 font-bold">Welcome to My Portfolio!</h1>
          <p className="text-xl mb-8">Hi, I am Suraj Thapa, a Web Developer.</p>
          <a
            href="/mycv.pdf"
            download
            className="inline-block mt-4 px-5 py-3 text-xl text-white bg-blue-600 rounded-md shadow-md transition-transform duration-150 hover:bg-blue-700 hover:scale-105"
          >
            Download CV
          </a>
        </div>
        <div className="flex-shrink-0">
          <img
            src="/surajj.jpg"
            alt="My Image"
            width={330}
            height={350}
            className="rounded-full shadow-lg"
          />
        </div>
      </div>

      <div className="relative z-20 flex items-center justify-center flex-wrap max-w-2xl mt-12">
        <a
          href="/about"
          className="m-4 flex-basis-45 p-6 text-left no-underline border border-gray-300 rounded-md shadow-lg transition-transform duration-150 hover:text-blue-600 hover:border-blue-600 hover:scale-105"
        >
          <h3 className="mb-4 text-xl">About Me &rarr;</h3>
          <p className="text-lg">Learn more about who I am and what I do.</p>
        </a>

        <a
          href="/projects"
          className="m-4 flex-basis-45 p-6 text-left no-underline border border-gray-300 rounded-md shadow-lg transition-transform duration-150 hover:text-blue-600 hover:border-blue-600 hover:scale-105"
        >
          <h3 className="mb-4 text-xl">Projects &rarr;</h3>
          <p className="text-lg">Check out some of my latest work.</p>
        </a>

        <a
          href="/contact"
          className="m-4 flex-basis-45 p-6 text-left no-underline border border-gray-300 rounded-md shadow-lg transition-transform duration-150 hover:text-blue-600 hover:border-blue-600 hover:scale-105"
        >
          <h3 className="mb-4 text-xl">Contact &rarr;</h3>
          <p className="text-lg">Get in touch with me.</p>
        </a>
      </div>
    </main>
  );
};

export default Hero;
