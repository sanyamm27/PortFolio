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
      className="py-16 flex flex-col items-center justify-center text-center px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-4xl md:text-5xl font-semibold mb-3 tracking-tight text-[#1C1C1E]">
        Let&apos;s Connect
      </h2>
      <p className="text-gray-400 text-base mb-12 max-w-sm">
        Let&apos;s build something together.
      </p>

      {/* Contact list */}
      <ul className="w-full max-w-lg divide-y divide-[#E5E5EA]">
        {contacts.map((item) => (
          <li
            key={item.label}
            className="flex items-center justify-between py-4 px-2 group"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-gray-400 w-24 text-left flex-shrink-0">
              {item.label}
            </span>

            {item.isLink && item.href ? (
              <Link
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-sm md:text-base font-medium text-[#1C1C1E] hover:text-[#5856D6] transition-colors text-right truncate"
              >
                {item.display}
              </Link>
            ) : (
              <span className="text-sm md:text-base font-medium text-[#1C1C1E] text-right">
                {item.display}
              </span>
            )}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
