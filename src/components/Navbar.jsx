import React from "react";
import { User, FolderKanban, Code2, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-4 right-4 z-50 rounded-2xl bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-lg border border-black/10 dark:border-white/20 text-black dark:text-white px-6 py-3 flex justify-between items-center transition-colors duration-300">
      <div className="text-2xl font-bold text-indigo-500 dark:text-indigo-300">
        PS
      </div>

      <ul className="flex gap-5 items-center">
        <li>
          <a
            href="#about"
            className="hover:text-indigo-500 dark:hover:text-indigo-300"
          >
            <User className="w-8 h-8" />
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="hover:text-indigo-500 dark:hover:text-indigo-300"
          >
            <FolderKanban className="w-8 h-8" />
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="hover:text-indigo-500 dark:hover:text-indigo-300"
          >
            <Code2 className="w-8 h-8" />
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="hover:text-indigo-500 dark:hover:text-indigo-300"
          >
            <Mail className="w-8 h-8" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
