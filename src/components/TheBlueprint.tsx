"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function TheBlueprint() {
  return (
    <motion.section
      id="about"
      className="pt-28 pb-16 flex flex-col md:flex-row items-center justify-center gap-12 w-full px-6 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Photo — padded container so portrait breathes */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="w-64 h-72 md:w-80 md:h-96 rounded-3xl overflow-hidden border border-[#E5E5EA] shadow-lg bg-gray-50 flex items-start justify-center">
          <Image
            src="/assets/profile-photo.jpeg"
            alt="Sanyam Kumar — profile photo"
            width={400}
            height={500}
            priority
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-black mb-6 text-[#1C1C1E] tracking-tight">
          I&apos;m Sanyam
        </h1>
        <p className="text-lg md:text-xl text-[#1C1C1E] leading-relaxed mb-8 max-w-md">
          A 3rd-year CS Student &amp; Digital Architect bridging the gap between
          secure backend logic and immersive 3D art. I focus on building tools
          that are as powerful as they are visually compelling.
        </p>
        <Link
          href="#work"
          className="text-lg font-medium text-[#1C1C1E] hover:text-[#5856D6] transition-colors border-b-2 border-transparent hover:border-[#5856D6] pb-1"
        >
          Explore Work →
        </Link>
      </div>
    </motion.section>
  );
}
