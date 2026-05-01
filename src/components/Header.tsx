"use client";

import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="fixed top-2 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-4xl flex items-center justify-between px-6 py-3 rounded-2xl border border-white/50 bg-white/70 backdrop-blur-md shadow-sm">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black text-[#1C1C1E] tracking-tight hover:text-[#5856D6] transition-colors"
        >
          S
        </Link>

        {/* Nav links */}
        <ul className="flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-[#1C1C1E] hover:bg-gray-100/80 transition-all"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
