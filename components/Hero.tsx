"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowDown, Sparkles, Globe } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress targeting the Hero section for scroll-driven word animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform scroll progress into horizontal marquee offset shift
  const marqueeXLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  const scrollWords = [
    "EDITORIAL PUBLISHING",
    "BRAND POSITIONING",
    "DIGITAL MAGAZINES",
    "THOUGHT LEADERSHIP",
    "MEMOIR ARCHIVES",
    "SCRIPTWRITING & ESSAYS",
    "CREATIVE DIRECTION",
    "WORLDWIDE PUBLISHING",
  ];

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen pt-28 pb-10 md:pt-36 md:pb-16 flex flex-col justify-between overflow-hidden bg-[#fbfbf9]"
    >
      {/* Background Subtle Animated Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#e32e07]/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 flex-1 flex flex-col justify-between">
        {/* Top Tagline / Category Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-between border-b border-black/10 pb-6 mb-8 md:mb-10"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e32e07] animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#555]">
              Editorial & Brand Publishing Studio
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-xs font-serif italic text-[#777]">
            <Globe className="w-3.5 h-3.5 text-[#e32e07] animate-spin-slow" />
            "We tell your story with clarity & global purpose"
          </div>
        </motion.div>

        {/* Central Hero Layout: Oversized Display Title + Collage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center my-auto">
          {/* Left Hero Image Block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.02, rotate: -1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative group w-full max-w-[260px] lg:max-w-[240px] xl:max-w-[280px] aspect-[4/5] bg-[#0a0a0a] rounded-sm overflow-hidden shadow-2xl border border-black/15 cursor-pointer"
            >
              <Image
                src="/11.jpg"
                alt="Esanharris Photography Magazine Cover"
                fill
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#e32e07]">
                  Esanharris Digital Edition
                </span>
                <p className="text-xs font-serif italic text-gray-200">
                  Wedding Inspiration Issue #01
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Center Giant Hero Display Typography */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 order-1 lg:order-2 text-center flex flex-col items-center py-4 lg:py-6 z-10"
          >
            <h1 className="font-display font-extrabold uppercase leading-[0.92] text-4xl sm:text-6xl md:text-7xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-tight text-[#121212] select-none max-w-full">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block hover:text-[#e32e07] transition-colors duration-300"
              >
                Every Brand
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="block font-serif italic font-normal text-3xl sm:text-5xl md:text-6xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-[#e32e07] my-1 md:my-2 tracking-normal"
              >
                Has A Story
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="block hover:text-[#e32e07] transition-colors duration-300"
              >
                We Help You Tell Yours
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-4 md:mt-6 max-w-xl text-sm md:text-base text-[#444] font-medium leading-relaxed px-2"
            >
              Your business, your work, your journey, your ideas, your legacy.
              There is a story behind all of it. At ABC Pen-House, we turn those
              stories into thoughtful editorial content that gives your brand a
              voice, a personality, and something worth remembering. We don't
              just write about what you do — we help people understand why it
              matters.
            </motion.p>

            {/* Hero Primary Call to Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-[#e32e07] hover:bg-[#c84b31] text-white text-xs sm:text-sm uppercase tracking-widest font-bold px-8 py-4 rounded-sm shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <span>Tell Us Your Story</span>
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 border border-black/20 hover:border-black text-[#121212] text-xs sm:text-sm uppercase tracking-widest font-semibold px-6 py-4 rounded-sm transition-all duration-300 bg-white/50 hover:bg-white"
              >
                Explore Publications
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side Stacked Editorial Collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 order-3 flex flex-col gap-4 items-center lg:items-end"
          >
            {/* Top Right Card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.03, rotate: 1 }}
              transition={{ duration: 0.3 }}
              className="relative group w-full max-w-[240px] lg:max-w-[210px] xl:max-w-[250px] aspect-[4/5] bg-[#0a0a0a] rounded-sm overflow-hidden shadow-xl border border-black/15 cursor-pointer"
            >
              <Image
                src="/14.jpg"
                alt="Christoph Solace Suit Magazine Cover"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute top-3 left-3 bg-[#121212]/95 text-white text-[9px] uppercase tracking-widest px-2 py-1 font-semibold border border-white/10">
                Solace Suit No. 01
              </div>
            </motion.div>

            {/* Bottom Right Card */}
            <motion.div
              whileHover={{ y: -6, scale: 1.03, rotate: -1 }}
              transition={{ duration: 0.3 }}
              className="relative group w-full max-w-[240px] lg:max-w-[210px] xl:max-w-[250px] aspect-[4/5] bg-[#0a0a0a] rounded-sm overflow-hidden shadow-xl border border-black/15 cursor-pointer"
            >
              <Image
                src="/13.jpg"
                alt="Moelle Zavian Pop-Up Experience Magazine Cover"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute bottom-3 right-3 bg-[#e32e07] text-white text-[9px] uppercase tracking-widest px-2 py-1 font-semibold shadow-md">
                Moelle Zavian Issue 01
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* DYNAMIC SCROLL WORDS MARQUEE BAND (SCROLL WORLD TICKER) */}
      <div className="w-full my-8 py-4 bg-[#121212] text-white overflow-hidden border-y border-white/10 relative shadow-2xl">
        <motion.div
          style={{ x: marqueeXLeft }}
          className="flex whitespace-nowrap gap-8 items-center font-display font-extrabold uppercase text-lg sm:text-xl md:text-2xl tracking-wider text-gray-200"
        >
          {[...scrollWords, ...scrollWords, ...scrollWords].map((word, idx) => (
            <div key={idx} className="flex items-center gap-8 shrink-0 hover:text-[#e32e07] transition-colors duration-300 cursor-default">
              <span>{word}</span>
              <Sparkles className="w-4 h-4 text-[#e32e07] animate-pulse" />
            </div>
          ))}
        </motion.div>
      </div>
 
    </section>
  );
}

