"use client";

import { motion } from "framer-motion";

export function TheLab() {
  return (
    <motion.section
      id="beyond"
      className="py-24 flex flex-col items-center justify-center text-center px-4 min-h-[40vh]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight text-[#1C1C1E]">
        Architecting Logic
      </h2>
      <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed">
        Testing my problem-solving skills through technical puzzles and pattern recognition.
      </p>
    </motion.section>
  );
}
