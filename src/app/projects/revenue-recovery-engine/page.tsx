import Link from "next/link";
import { RevenueRecoveryCarousel } from "@/components/RevenueRecoveryCarousel";

const tools = [
  "Next.js", "TypeScript", "Python", "FastAPI",
  "Tailwind CSS", "Recharts", "Scikit-Learn", "Vercel",
];

const highlights = [
  {
    label: "Autonomous Retry Logic",
    body: "Built dynamic decision boundary algorithms to determine optimal payment retry intervals based on decline reason codes and bank health telemetry.",
  },
  {
    label: "Real-Time Analytics Pipeline",
    body: "Engineered high-frequency metrics dashboards displaying live transaction logs, recovery velocity, and cumulative revenue saved.",
  },
  {
    label: "Interactive Parameter Tuning",
    body: "Developed an interactive engine tuning interface allowing merchants to adjust risk thresholds, retry caps, and ML confidence bounds.",
  },
  {
    label: "Predictive Growth Modeling",
    body: "Designed data visualization layers projecting long-term revenue curves under varied retry policies.",
  },
];

export default function RevenueRecoveryPage() {
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
        Revenue Recovery Engine
      </h1>
      <p className="text-xl text-gray-500 mb-6 leading-relaxed">
        Autonomous AI-driven payment retry and revenue optimization platform.
      </p>

      <hr className="border-[#E5E5EA] mb-14" />

      {/* Overview */}
      <section className="mb-14">
        <h2 className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-400 mb-4">
          Overview
        </h2>
        <p className="text-lg text-[#1C1C1E] leading-relaxed">
          A high-throughput revenue optimization system engineered to recover lost transaction volume
          caused by payment gateway failures, bank declines, and transient network drops. Combines
          predictive machine learning, adaptive retry logic, and real-time merchant analytics to
          maximize payment success rates without triggering fraud blocks.
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
        <ul className="space-y-5">
          {highlights.map((point, i) => (
            <li key={i} className="flex gap-3 text-[#1C1C1E] text-base leading-relaxed">
              <span className="text-[#5856D6] font-bold mt-0.5 flex-shrink-0">→</span>
              <span>
                <span className="font-semibold">{point.label}:</span>{" "}
                {point.body}
              </span>
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
        <RevenueRecoveryCarousel />
      </section>
    </main>
  );
}
