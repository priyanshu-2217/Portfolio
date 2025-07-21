import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Skills from "./components/Skill";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-lg text-white px-8 py-4 flex justify-between items-center shadow-lg border-b border-white/20">
        <div className="text-2xl font-bold text-indigo-300">
          Priyanshu Sharma
        </div>
        <ul className="flex gap-6 font-medium">
          <li>
            <a
              href="#about"
              className="hover:text-indigo-300 transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-indigo-300 transition-colors duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-indigo-300 transition-colors duration-300"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-indigo-300 transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section with Animation */}
      <Hero />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-12">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 border-t border-white/10">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Priyanshu Sharma - Built with React
          & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}

export default App;
