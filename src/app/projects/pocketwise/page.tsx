import Link from "next/link";
import { PocketWiseCarousel } from "@/components/PocketWiseCarousel";

const tools = [
  "React.js", "Tailwind CSS", "Firebase Auth", "Firestore",
  "Gemini AI API", "Recharts", "Vite", "Vercel",
];

const highlights = [
  "Built a per-user Firestore architecture using isolated subcollections mapped to unique user IDs, ensuring complete data separation across accounts.",
  "Integrated the Gemini AI API to deliver contextual, AI-powered spending insights and category recommendations based on live transaction history.",
  "Engineered a Survive Mode calculator that derives a safe daily spend limit from the user's real-time balance and remaining days in their current income cycle.",
  "Implemented real-time Firestore onSnapshot listeners across the transactions log to instantly reflect multi-field mutations without requiring page refreshes.",
  "Built interactive Recharts donut and bar charts with dynamic category breakdowns and month-over-month trend comparisons on the Insights page.",
  "Deployed via Vite on Vercel with environment-isolated Firebase project keys and CI/CD pipeline integration.",
];

export default function PocketWisePage() {
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
        PocketWise
      </h1>
      <p className="text-xl text-gray-500 mb-6 leading-relaxed">
        Student-first personal finance tracker.
      </p>

      {/* Live Demo */}
      <a
        href="https://pocket-wise-alpha.vercel.app/login"
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
          A premium expense tracking web app built specifically for college students. It combines
          daily income logging, AI-powered spending insights, and a unique Survive Mode to help
          students manage money smarter — no matter how irregular their income.
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
        <PocketWiseCarousel />
      </section>
    </main>
  );
}
