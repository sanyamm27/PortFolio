"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Development",
    skills: ["Next.js", "React", "JavaScript", "HTML / CSS"],
  },
  {
    category: "Systems",
    skills: ["SQL", "Database Management (DBMS)", "Git / GitHub", "Firebase"],
  },
  {
    category: "Core CS",
    skills: [
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Machine Learning",
    ],
  },
];

export function TechnicalDNA() {
  return (
    <motion.section
      id="skills"
      className="py-16 flex flex-col items-center justify-center text-center px-4 w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-4xl md:text-5xl font-semibold mb-3 tracking-tight text-[#1C1C1E]">
        What I can do
      </h2>
      <p className="text-gray-400 mb-12 text-sm max-w-md">
        A focused stack spanning modern web, systems design, and computer science fundamentals.
      </p>

      <div className="flex flex-col gap-8 max-w-3xl w-full">
        {skillGroups.map((group) => (
          <div key={group.category} className="flex flex-col items-center gap-3">
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400">
              {group.category}
            </span>
            <ul className="flex flex-wrap justify-center gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="px-4 py-1.5 bg-white border border-[#E5E5EA] rounded-full text-sm font-medium text-[#1C1C1E] shadow-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
