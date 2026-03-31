const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-transparent">
      <div className="relative max-w-4xl w-full mx-auto p-8 md:p-12 rounded-3xl shadow-2xl bg-gray-900/60 backdrop-blur-xl border border-white/10 overflow-hidden">
        {/* Soft glow background */}
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-6 tracking-tight">
            About Me
          </h1>

          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>

          <p className="text-base md:text-lg leading-8 text-slate-300 text-justify mb-10">
            Hi, I&apos;m{" "}
            <span className="text-sky-300 font-semibold">Suraj Thapa</span>, a
            passionate and dedicated web developer with a strong interest in
            building dynamic, responsive, and user-friendly web applications. I
            enjoy turning ideas into functional digital experiences that are
            both visually appealing and efficient.
          </p>

          <p className="text-base md:text-lg leading-8 text-slate-400 text-justify mb-10">
            My expertise includes{" "}
            <span className="text-slate-200 font-medium">
              HTML, CSS, JavaScript, React, and Node.js
            </span>
            . I focus on creating clean interfaces, smooth user experiences, and
            practical solutions. I&apos;m always learning new technologies and
            improving my skills to stay current with modern web development.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "Tailwind CSS",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm md:text-base rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex justify-center">
            <a
              href="/mycv.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3 text-lg font-medium text-white bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-200"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
