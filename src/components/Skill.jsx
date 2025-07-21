// src/components/Skills.jsx
import React from "react";
import { skillsData } from "../portfolioData";

function Skills() {
  return (
    <section id="skills" className="py-16 text-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-3xl">🛠️</span>
          </div>
          <h2 className="text-4xl font-bold text-white drop-shadow-lg">
            Skills
          </h2>
        </div>

        {/* Dynamic Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillsData.map((category) => (
            <SkillCategory key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Reusable Skill Category Component
function SkillCategory({ category }) {
  return (
    <div className="group">
      <div
        className={`bg-gradient-to-br ${category.gradient} p-1 rounded-2xl shadow-2xl`}
      >
        <div className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 h-full border border-gray-700/50">
          {/* Category Header */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl">{category.icon}</span>
            <h3 className="text-xl font-bold text-gray-100">
              {category.title}
            </h3>
          </div>

          {/* Skills List */}
          <div className="space-y-4">
            {category.skills.map((skill, skillIndex) => (
              <SkillItem key={skillIndex} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Skill Item Component
function SkillItem({ skill }) {
  return (
    <div className="group-hover:scale-105 transition-transform duration-200">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-lg">{skill.icon}</span>
        <span className="font-medium text-gray-100">{skill.name}</span>
        <span className="ml-auto text-sm text-indigo-300 font-semibold">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-700/70 rounded-full h-2 border border-gray-600/50">
        <div
          className="bg-gradient-to-r from-indigo-400 to-purple-500 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Skills;
