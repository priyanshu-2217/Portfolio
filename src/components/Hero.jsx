import React from "react";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <header
      className="min-h-screen flex flex-col items-center justify-center
                       bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700
                       text-gray-100 px-6 py-12 animate-heroReveal"
    >
      <div className="max-w-4xl text-center">
        {/* Animated Name */}
        <div className="mb-8 h-20 flex items-center justify-center">
          <span className="text-5xl md:text-6xl font-extrabold mr-4">
            Hi 👋, I'm
          </span>
          <span className="text-indigo-300 text-5xl md:text-6xl font-extrabold">
            <Typewriter
              options={{
                strings: ["Priyanshu", "Sharma", "Priyanshu Sharma"],
                autoStart: true,
                loop: true,
                delay: 150,
                deleteSpeed: 75,
                pauseFor: 2000,
              }}
            />
          </span>
        </div>

        {/* Call-to-Action */}
        <a
          href="#projects"
          className="inline-block mb-12 px-10 py-4 bg-indigo-500 text-white
                     font-bold rounded-full shadow-lg hover:bg-indigo-400
                     transition-transform transform hover:scale-105"
        >
          View My Work
        </a>

        {/* Exciting Animated Info Box */}
        <div
          className="relative rounded-3xl p-1
                        bg-gradient-to-br from-purple-600 via-pink-500 to-red-500
                        animate-gradient-xy shadow-pink-500/60 shadow-2xl"
        >
          {/* Glowing Pulse Overlay */}
          <div
            className="absolute inset-0 rounded-3xl blur-lg opacity-50
                          bg-gradient-to-br from-purple-600 via-pink-500 to-red-500
                          animate-pulse-slow"
          ></div>
          {/* Inner Frosted Card */}
          <div
            className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8
                          border border-white/20"
          >
            <div className="grid md:grid-cols-2 gap-6 text-lg">
              <p className="flex items-center gap-3">
                <span className="text-2xl">🔭</span>
                Always working on exciting web projects and exploring new
                technologies.
              </p>
              <p className="flex items-center gap-3">
                <span className="text-2xl">💻</span>
                Skilled in the{" "}
                <span className="font-bold text-indigo-300">MERN stack</span>.
              </p>
              <p className="flex items-center gap-3">
                <span className="text-2xl">👯</span>
                Looking to collaborate on new projects.
              </p>
              <p className="flex items-center gap-3">
                <span className="text-2xl">💬</span>
                Ask me about anything!
              </p>
              <p className="flex items-center gap-3">
                <span className="text-2xl">📫</span>
                <a
                  href="mailto:priyan90204@gmail.com"
                  className="underline decoration-indigo-300 hover:text-indigo-200"
                >
                  priyan90204@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                Fun fact: I think I am funny 😎
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
