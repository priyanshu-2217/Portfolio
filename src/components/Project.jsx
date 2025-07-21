// src/components/Projects.jsx
import React from "react";
import { projectsData } from "../portfolioData";

function Projects() {
  return (
    <section id="projects" className="py-16 text-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-3xl">💼</span>
          </div>
          <h2 className="text-4xl font-bold text-white drop-shadow-lg">
            Projects
          </h2>
        </div>

        {/* Dynamic Projects Grid */}
        <div className="space-y-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Reusable Project Card Component
function ProjectCard({ project }) {
  return (
    <div className="group hover:scale-105 transition-all duration-300">
      <div
        className={`bg-gradient-to-r ${project.gradient} p-1 rounded-2xl shadow-2xl`}
      >
        <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
          <div className="flex items-start gap-6">
            <div className="text-4xl">{project.icon}</div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-100">
                {project.title}
              </h3>
              <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-3 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-2 bg-gray-700/70 rounded-full text-sm font-medium border border-gray-600/50 text-gray-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
