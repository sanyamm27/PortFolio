"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const contacts = [
  {
    label: "Email",
    display: "sanyamkumar316@gmail.com",
    href: "mailto:sanyamkumar316@gmail.com",
    isLink: true,
  },
  {
    label: "Phone",
    display: "+91 8925076316",
    href: null,
    isLink: false,
  },
  {
    label: "GitHub",
    display: "github.com/sanyamm27",
    href: "https://github.com/sanyamm27",
    isLink: true,
  },
  {
    label: "LinkedIn",
    display: "linkedin.com/in/sanyam-kumar-008367293",
    href: "https://linkedin.com/in/sanyam-kumar-008367293",
    isLink: true,
  },
];

export function NextSteps() {
  return (
    <motion.section
      id="contact"
      className="py-16 flex flex-col items-center justify-center px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Headings — centered */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1C1C1E] mb-3">
          Let&apos;s Connect
        </h2>
        <p className="text-gray-400 text-base">Let&apos;s build something together.</p>
      </div>

      {/* Centered container — mx-auto centers the block; interior stays left-aligned */}
      <div className="w-full max-w-xl mx-auto">
        <ul className="flex flex-col">
          {contacts.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-8 py-4 border-b border-gray-100"
            >
              {/* Label — w-32 fixed, left-aligned */}
              <span className="w-32 flex-shrink-0 text-xs font-semibold uppercase tracking-widest text-gray-400">
                {item.label}
              </span>

              {/* Value — left-aligned, all values share the same start line */}
              {item.isLink && item.href ? (
                <Link
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="font-semibold text-[#1C1C1E] hover:text-[#5856D6] transition-colors text-sm md:text-base"
                >
                  {item.display}
                </Link>
              ) : (
                <span className="font-semibold text-[#1C1C1E] text-sm md:text-base">
                  {item.display}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
