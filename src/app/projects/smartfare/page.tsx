import Link from "next/link";
import Image from "next/image";
import { GalleryCarousel } from "@/components/GalleryCarousel";

const tools = [
  "Next.js", "TypeScript", "React", "Tailwind CSS",
  "Postman API", "SQL", "Git", "Vercel",
];

const highlights = [
  "Aggregates fare data across multiple flight providers via a unified search layer.",
  "Optimized query resolution to return the most cost-effective results in real-time.",
  "Built a responsive, accessible UI with Tailwind CSS and React state management.",
  "Integrated Postman-tested REST APIs for live pricing and availability data.",
  "Version-controlled with Git; deployed on Vercel with CI/CD pipeline.",
];

export default function SmartFarePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-28 pb-24 min-h-screen">
      {/* Back */}
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#5856D6] transition-colors mb-14"
      >
        ← Back to Projects
      </Link>

      {/* Eyebrow */}
      <p className="text-xs font-bold tracking-widest uppercase text-[#5856D6] mb-3">
        Project Spotlight
      </p>

      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-black text-[#1C1C1E] tracking-tight mb-4">
        SmartFare
      </h1>
      <p className="text-xl text-gray-500 mb-6 leading-relaxed">
        Modern fare comparison system.
      </p>

      {/* Live Demo */}
      <a
        href="https://smart-fare-kappa.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#5856D6] text-white text-sm font-medium rounded-full hover:bg-[#4644c0] transition-colors mb-14"
      >
        View Live Demo ↗
      </a>

      <hr className="border-[#E5E5EA] mb-14" />

      {/* Overview */}
      <section className="mb-14">
        <h2 className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-4">
          Overview
        </h2>
        <p className="text-lg text-[#1C1C1E] leading-relaxed">
          A high-performance fare comparison engine designed to aggregate data across multiple flight
          providers. It leverages optimized search algorithms to deliver the most cost-effective
          travel options in real-time.
        </p>
      </section>

      {/* Tools */}
      <section className="mb-14">
        <h2 className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-4">
          Tools &amp; Stack
        </h2>
        <ul className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <li
              key={tool}
              className="px-4 py-1.5 bg-white border border-[#E5E5EA] rounded-full text-sm font-medium text-[#1C1C1E] shadow-sm"
            >
              {tool}
            </li>
          ))}
        </ul>
      </section>

      {/* Technical Highlights */}
      <section className="mb-14">
        <h2 className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-4">
          Technical Highlights
        </h2>
        <ul className="space-y-4">
          {highlights.map((point, i) => (
            <li key={i} className="flex gap-3 text-[#1C1C1E] text-base leading-relaxed">
              <span className="text-[#5856D6] font-bold mt-0.5 flex-shrink-0">→</span>
              {point}
            </li>
          ))}
        </ul>
      </section>

      <hr className="border-[#E5E5EA] mb-14" />

      {/* Interactive Engineering Gallery */}
      <section>
        <h2 className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-8">
          Engineering Story
        </h2>
        <GalleryCarousel />
      </section>
    </main>
  );
}
