// src/data/portfolioData.js

export const projectsData = [
  {
    id: 1,
    title: "Blog App (MERN Stack)",
    description:
      "A full-featured blog application built using the MERN stack (MongoDB, Express, React, Node.js). Includes authentication, post management, and responsive design.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    icon: "📝",
    gradient: "from-blue-500 to-purple-600",
    githubLink: "https://github.com/priyanshu-2217/blog-app", // Optional
    liveLink: "https://your-blog-app.com", // Optional
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "This portfolio, built with React and TailwindCSS, showcases my skills, projects, and profiles with modern dark theme design.",
    tech: ["React", "Tailwind CSS", "Vite"],
    icon: "🌐",
    gradient: "from-green-500 to-blue-500",
    githubLink: "https://github.com/priyanshu-2217/portfolio",
  },
  {
    id: 3,
    title: "Stock Search App",
    description:
      "A React-based app to search for stocks and view real-time data, including sentiment analysis and market trends.",
    tech: ["React", "API Integration", "Charts"],
    icon: "📈",
    gradient: "from-yellow-500 to-red-500",
  },
];

export const skillsData = [
  {
    id: 1,
    title: "Frontend",
    icon: "🎨",
    gradient: "from-pink-500 to-purple-600",
    skills: [
      { name: "React", level: 90, icon: "⚛️" },
      { name: "HTML5", level: 95, icon: "🏗️" },
      { name: "CSS3", level: 90, icon: "🎨" },
      { name: "Tailwind CSS", level: 85, icon: "💨" },
    ],
  },
  {
    id: 2,
    title: "Backend",
    icon: "⚙️",
    gradient: "from-green-500 to-blue-600",
    skills: [
      { name: "Node.js", level: 85, icon: "🟢" },
      { name: "Express", level: 80, icon: "🚀" },
      { name: "MongoDB", level: 75, icon: "🍃" },
      { name: "MySQL", level: 70, icon: "🐬" },
    ],
  },
  {
    id: 3,
    title: "Programming",
    icon: "💻",
    gradient: "from-yellow-500 to-red-600",
    skills: [
      { name: "JavaScript", level: 90, icon: "📜" },
      { name: "Java", level: 80, icon: "☕" },
      { name: "Git", level: 85, icon: "🌿" },
    ],
  },
  // Add new skill categories here!
];
