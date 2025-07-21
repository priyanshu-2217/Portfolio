import React from "react";

function About() {
  return (
    <section id="about" className="py-16 text-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header with Enhanced Visibility */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-3xl">👨‍💻</span>
          </div>
          <h2 className="text-4xl font-bold text-white drop-shadow-lg">
            About Me
          </h2>
        </div>

        {/* Content with Background Cards for Visibility */}
        <div className="space-y-6">
          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl">
            <p className="text-xl leading-relaxed text-gray-100">
              I'm{" "}
              <span className="font-bold text-indigo-300 text-shadow">
                Priyanshu Sharma
              </span>
              , a creative and passionate web developer with extensive
              experience in building responsive and interactive websites using
              modern frameworks like React.
            </p>
          </div>

          <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl">
            <p className="text-xl leading-relaxed text-gray-100">
              I specialize in the{" "}
              <span className="font-bold text-indigo-300">MERN stack</span> and
              love turning complex problems into simple, beautiful, and
              intuitive solutions. When I'm not coding, I enjoy exploring new
              technologies and contributing to open-source projects.
            </p>
          </div>

          {/* Personality Traits */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-purple-600/30 backdrop-blur-sm rounded-xl p-6 text-center border border-purple-500/30">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-lg text-gray-100">
                Goal-Oriented
              </h3>
            </div>
            <div className="bg-indigo-600/30 backdrop-blur-sm rounded-xl p-6 text-center border border-indigo-500/30">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold text-lg text-gray-100">
                Innovation Driven
              </h3>
            </div>
            <div className="bg-blue-600/30 backdrop-blur-sm rounded-xl p-6 text-center border border-blue-500/30">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-semibold text-lg text-gray-100">
                Team Player
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
