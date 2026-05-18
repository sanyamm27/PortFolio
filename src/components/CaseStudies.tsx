"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function CaseStudies() {
  return (
    <motion.section
      id="work"
      className="py-16 flex flex-col items-center justify-center w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="w-full max-w-5xl px-6 flex flex-col gap-20">

        {/* Section heading */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1C1C1E]">
          My Projects
        </h2>

        {/* ── Project #1 — PocketWise ── */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-widest uppercase text-[#5856D6] mb-3">
                Project Spotlight
              </p>
              <h3 className="text-3xl font-black text-[#1C1C1E] mb-1">PocketWise</h3>
              <p className="text-sm font-medium text-gray-400 mb-4">
                Student-first personal finance tracker.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                A premium expense tracking web app built specifically for college students. It
                combines daily income logging, AI-powered spending insights, and a unique Survive
                Mode to help students manage money smarter — no matter how irregular their income.
              </p>
            </div>

            <Link
              href="/projects/pocketwise"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1C1E] text-white text-sm font-medium rounded-full hover:bg-[#5856D6] transition-colors self-start md:self-end flex-shrink-0"
            >
              View Technical Deep-Dive →
            </Link>
          </div>

          {/* Browser Mockup */}
          <div className="w-full bg-white border border-[#E5E5EA] rounded-3xl overflow-hidden shadow-sm">
            <div className="h-10 bg-gray-50 border-b border-[#E5E5EA] flex items-center px-4 gap-2 flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="flex-1 mx-4">
                <div className="bg-gray-100 rounded-md h-5 flex items-center px-3 max-w-xs">
                  <span className="text-[11px] text-gray-400 font-mono">pocket-wise-alpha.vercel.app</span>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-50 flex items-center justify-center">
              <Image
                src="/assets/pocketwise-main.png"
                alt="PocketWise — main interface screenshot"
                width={1280}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* ── Project #2 — SmartFare ── */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-widest uppercase text-[#5856D6] mb-3">
                Project Spotlight
              </p>
              <h3 className="text-3xl font-black text-[#1C1C1E] mb-1">SmartFare</h3>
              <p className="text-sm font-medium text-gray-400 mb-4">
                Modern fare comparison system.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                A high-performance fare comparison engine designed to aggregate data across multiple
                flight providers. It leverages optimized search algorithms to deliver the most
                cost-effective travel options in real-time.
              </p>
            </div>

            <Link
              href="/projects/smartfare"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1C1C1E] text-white text-sm font-medium rounded-full hover:bg-[#5856D6] transition-colors self-start md:self-end flex-shrink-0"
            >
              View Technical Deep-Dive →
            </Link>
          </div>

          {/* Browser Mockup */}
          <div className="w-full bg-white border border-[#E5E5EA] rounded-3xl overflow-hidden shadow-sm">
            <div className="h-10 bg-gray-50 border-b border-[#E5E5EA] flex items-center px-4 gap-2 flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="flex-1 mx-4">
                <div className="bg-gray-100 rounded-md h-5 flex items-center px-3 max-w-xs">
                  <span className="text-[11px] text-gray-400 font-mono">smartfare.app</span>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-50 flex items-center justify-center">
              <Image
                src="/assets/smartfare-main.jpeg"
                alt="SmartFare — main interface screenshot"
                width={1280}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
