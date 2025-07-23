import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Skills from "./components/Skill";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="shiny-bg min-h-screen text-white dark:bg-black dark:text-white transition-colors duration-300 shadow-inner shadow-black/10 dark:shadow-white/10">
      <Navbar />

      <Hero />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-12">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="text-center py-8 text-gray-600 dark:text-gray-400 border-t border-black/10 dark:border-white/10">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Priyanshu Sharma - Built with React
          & Tailwind CSS
        </p>
      </footer>
    </div>
  );
}

export default App;
