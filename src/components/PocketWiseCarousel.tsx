"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const gallery = [
  {
    src: "/assets/pocketwise-gallery/pocketwise-dashboard.png",
    alt: "PocketWise dashboard",
    caption:
      "Dashboard — Per-User Firebase Architecture: Every user's transactions, budgets, and goals are stored in isolated Firestore subcollections mapped to unique user IDs.",
  },
  {
    src: "/assets/pocketwise-gallery/pocketwise-insights.png",
    alt: "PocketWise insights page",
    caption:
      "Insights Page — Data Visualization Layer: Recharts-powered interactive donut and bar charts rendering dynamic category breakdowns and month-over-month trends.",
  },
  {
    src: "/assets/pocketwise-gallery/pocketwise-survive.png",
    alt: "PocketWise survive mode",
    caption:
      "Survive Mode — Predictive Balance Calculator: Computes a student's safe, dynamic daily spend limit based on real-time current balance and remaining days in the cycle.",
  },
  {
    src: "/assets/pocketwise-gallery/pocketwise-transactions.png",
    alt: "PocketWise transactions log",
    caption:
      "Transactions Log — Real-Time State Synch: Engineered real-time Firestore dynamic listeners (onSnapshot) to instantly process multi-field ledger mutations without page refreshes.",
  },
];

export function PocketWiseCarousel() {
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
              <span className="text-[10px] text-gray-400 font-mono">pocketwise.vercel.app</span>
            </div>
          </div>
          {/* Slide counter */}
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
