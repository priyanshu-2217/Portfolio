import React from "react";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <header
      className="relative pt-16 min-h-screen flex flex-col justify-center items-center 
                     
                      text-white overflow-hidden px-4"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute w-[100vw] h-[80vw] top-[-20vw] left-1/2 -translate-x-1/2 
                     
                        opacity-25 blur-[120px]"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center flex-1 pt-12 pb-24">
        <div className="max-w-3xl w-full flex flex-col items-center">
          <span className="text-4xl font-semibold text-white mb-4 ">
            Hi 👋, I'm
          </span>
          <div className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
            <span className="block text-5xl md:text-6xl text-indigo-300 font-extrabold mx-auto">
              <Typewriter
                options={{
                  strings: ["Priyanshu Sharma"],
                  autoStart: true,
                  loop: true,
                  delay: 90,
                  deleteSpeed: 65,
                  pauseFor: 2200,
                  cursor: "|",
                }}
              />
            </span>
          </div>

          <h2 className="text-xl md:text-2xl text-center text-[#e1e1fa] font-semibold mb-6">
            A passionate Full Stack Developer
          </h2>

          {/* Frosted-glass info box with your details, styled for vibrance */}
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10 mb-10 max-w-xl mx-auto">
            <ul className="space-y-3 text-lg text-white/90">
              <li className="flex gap-3 items-center">
                <span className="text-2xl">🔭</span>Always working on exciting
                web projects and exploring new technologies.
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-2xl">💻</span>
                <span>
                  Skilled in the
                  <span className="font-bold text-indigo-500 ">
                    {"  "}
                    MERN Stack{"  "}
                  </span>
                  and building full-stack applications.
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-2xl">👯</span>Looking to collaborate on
                new projects.
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-2xl">💬</span>Ask me about anything!
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-2xl">📫</span>
                <a
                  href="mailto:priyan90204@gmail.com"
                  className="no-underline hover:underline-offset-2 decoration-indigo-300 hover:text-indigo-200"
                >
                  priyan90204@gmail.com
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <span className="text-2xl">⚡</span>Fun fact: I think I am funny
                😎
              </li>
            </ul>
          </div>

          {/* Attractive Call-to-action button */}
          <a
            href="#projects"
            className="inline-block px-10 py-4 bg-gradient-to-r from-[#e9baff] via-[#6e54ff] to-[#fb54c0] 
                       text-white font-bold rounded-xl shadow-lg text-lg tracking-wide
                       hover:scale-105 hover:shadow-pink-500/50 transition-all duration-300"
          >
            View My Work
          </a>
        </div>
      </div>

      {/* Stylish floating glowing rectangles for extra polish */}
    </header>
  );
}

export default Hero;
