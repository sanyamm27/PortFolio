"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const gallery = [
  {
    src: "/assets/revenue-recovery-engine-gallery/revenue-recover-engine-overview.png",
    alt: "Revenue Recovery Engine — overview dashboard",
    caption:
      "Overview Dashboard — Key Metrics Telemetry: Central control panel tracking total recovered revenue, success velocity, and overall payment health across processing channels.",
  },
  {
    src: "/assets/revenue-recovery-engine-gallery/revenue-recover-engine-revenue_growth.png",
    alt: "Revenue Recovery Engine — revenue growth",
    caption:
      "Revenue Growth — Predictive Recovery Trajectory: Dynamic trend visualizers projecting cumulative revenue retention and recovered capital over extended operational cycles.",
  },
  {
    src: "/assets/revenue-recovery-engine-gallery/revenue-recovery-engine-decision_boundary.png",
    alt: "Revenue Recovery Engine — decision boundary",
    caption:
      "Decision Boundary — ML Optimization Matrix: Visual representation of classification models determining high-probability retry windows versus high-risk decline patterns.",
  },
  {
    src: "/assets/revenue-recovery-engine-gallery/recovery-revenue-engine-live_feed.png",
    alt: "Revenue Recovery Engine — live feed",
    caption:
      "Live Feed — Real-Time Transaction Stream: High-throughput event processing engine rendering real-time payment status mutations, decline codes, and automated retry outcomes.",
  },
  {
    src: "/assets/revenue-recovery-engine-gallery/revenue-recover-engine-tune_engine.png",
    alt: "Revenue Recovery Engine — tune engine",
    caption:
      "Tune Engine — Interactive Parameter Control: Custom policy configuration interface allowing real-time adjustment of confidence intervals, max retry attempts, and risk boundaries.",
  },
  {
    src: "/assets/revenue-recovery-engine-gallery/revenue-recovery-engine-form.png",
    alt: "Revenue Recovery Engine — manual recovery form",
    caption:
      "Manual Recovery Form — Edge-Case Processing Interface: Dedicated merchant portal for manually triggering high-priority recovery workflows and testing custom parameters.",
  },
];

export function RevenueRecoveryCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  function go(next: number) {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  }

  function prev() {
    go(index === 0 ? gallery.length - 1 : index - 1);
  }

  function next() {
    go(index === gallery.length - 1 ? 0 : index + 1);
  }

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Browser mockup frame */}
      <div className="relative w-full bg-white border border-[#E5E5EA] rounded-2xl overflow-hidden shadow-sm">
        {/* Chrome bar */}
        <div className="h-9 bg-gray-50 border-b border-[#E5E5EA] flex items-center px-3 gap-1.5 flex-shrink-0 z-10 relative">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <div className="flex-1 mx-3">
            <div className="bg-gray-100 rounded h-4 flex items-center px-2 max-w-xs">
              <span className="text-[10px] text-gray-400 font-mono">revenue-recovery.vercel.app</span>
            </div>
          </div>
          <span className="text-[10px] text-gray-400 font-mono pr-1">
            {index + 1} / {gallery.length}
          </span>
        </div>

        {/* Animated image area */}
        <div className="relative w-full bg-gray-50 overflow-hidden" style={{ minHeight: "320px" }}>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full"
            >
              <Image
                src={gallery[index].src}
                alt={gallery[index].alt}
                width={1280}
                height={800}
                className="w-full h-auto object-contain"
                priority={index === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          aria-label="Previous screenshot"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-[#E5E5EA] shadow flex items-center justify-center text-gray-600 hover:text-[#5856D6] hover:border-[#5856D6] transition-all z-20"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next screenshot"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm border border-[#E5E5EA] shadow flex items-center justify-center text-gray-600 hover:text-[#5856D6] hover:border-[#5856D6] transition-all z-20"
        >
          ›
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex items-center justify-center gap-2">
        {gallery.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === index
                ? "w-5 h-2 bg-[#5856D6]"
                : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Dynamic caption */}
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="text-sm text-gray-500 leading-relaxed text-center px-2"
        >
          {gallery[index].caption}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
