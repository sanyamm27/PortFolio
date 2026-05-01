"use client";

import { motion, useScroll } from "framer-motion";
import { ReactNode } from "react";

export function ScrollNarrativeWrapper({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen">
      {/* Minimalist sticky progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-slate-600 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      {children}
    </div>
  );
}
