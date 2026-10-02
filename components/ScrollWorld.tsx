"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, Compass } from "lucide-react";

interface WorldScene {
  id: string;
  stageNum: string;
  eyebrow: string;
  headline: string;
  subtitle: string;
  description: string;
  image: string;
  accentTag: string;
  stats: string;
}

export default function ScrollWorld() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress through the entire 350vh pinned scroll world container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 4 Scenes in the Editorial Scroll World flight
  const scenes: WorldScene[] = [
    {
      id: "discovery",
      stageNum: "01",
      eyebrow: "STAGE 01 • NARRATIVE RESEARCH",
      headline: "The Discovery Studio",
      subtitle: "Unearthing the Core DNA",
      description:
        "Every publication begins in deep research. We dissect brand heritage, interview key stakeholders, and shape distinct narrative frameworks before a single word is printed.",
      image: "/11.jpg",
      accentTag: "Esanharris Editorial Archive",
      stats: "120+ Interviews Conducted",
    },
    {
      id: "publishing",
      stageNum: "02",
      eyebrow: "STAGE 02 • PRINT & DIGITAL PRESS",
      headline: "The Publishing Press",
      subtitle: "Craftsmanship Meets Typography",
      description:
        "Transforming narrative strategy into bespoke physical brand books, digital collector magazines, and high-impact quarterly journals.",
      image: "/14.jpg",
      accentTag: "Solace Suit Collector Edition",
      stats: "4K High-Res Print Mastery",
    },
    {
      id: "popup",
      stageNum: "03",
      eyebrow: "STAGE 03 • PHYSICAL IMMERSION",
      headline: "Pop-Up Experiences",
      subtitle: "Stories Beyond the Page",
      description:
        "We extend editorial themes into tactile physical spaces, museum-grade launch exhibitions, and exclusive pop-up brand galleries worldwide.",
      image: "/13.jpg",
      accentTag: "Moelle Zavian Launch Issue",
      stats: "15 Global Launch Activations",
    },
    {
      id: "memoirs",
      stageNum: "04",
      eyebrow: "STAGE 04 • PERPETUAL HERITAGE",
      headline: "The Memory Vault",
      subtitle: "Preserving Founder Legacy",
      description:
        "Recording founder memoirs, corporate archives, and historical milestones into timeless hardbound volumes that endure across generations.",
      image: "/2.jpg",
      accentTag: "ABC Pen-House Archival Vault",
      stats: "100-Year Archival Quality",
    },
  ];

  // 3D Camera flight transform mapping driven by scroll scrubbing
  const cameraScale = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [1, 1.15, 1.25, 1.35]);
  const cameraRotateX = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [12, 6, -2, -8]);
  const cameraRotateY = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [-8, 4, -5, 0]);

  // Scene Opacity Ranges
  const scene1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.28], [1, 1, 0]);
  const scene2Opacity = useTransform(scrollYProgress, [0.22, 0.3, 0.45, 0.53], [0, 1, 1, 0]);
  const scene3Opacity = useTransform(scrollYProgress, [0.48, 0.56, 0.7, 0.78], [0, 1, 1, 0]);
  const scene4Opacity = useTransform(scrollYProgress, [0.73, 0.81, 1], [0, 1, 1]);

  // Scene 3D Zoom Scales for camera fly-through effect
  const scene1Scale = useTransform(scrollYProgress, [0, 0.25], [1, 1.25]);
  const scene2Scale = useTransform(scrollYProgress, [0.22, 0.5], [0.85, 1.2]);
  const scene3Scale = useTransform(scrollYProgress, [0.48, 0.75], [0.85, 1.2]);
  const scene4Scale = useTransform(scrollYProgress, [0.73, 1], [0.85, 1.1]);

  // Scrub bar progress width
  const scrubBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      id="scroll-world"
      className="relative h-[360vh] bg-[#09090b] text-white"
    >
      {/* STICKY WINDOW: 3D Flight Camera Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between items-center py-8 px-4 sm:px-8">
        
        {/* Background Grid & 3D Lighting Layer */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-[#0a0a0d] to-black opacity-90 pointer-events-none" />
        <div 
          className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"
        />

        {/* TOP BAR: Scroll-World Title & Flight Controls */}
        <div className="relative z-20 w-full max-w-7xl mx-auto flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#e32e07]/20 border border-[#e32e07]/50 flex items-center justify-center text-[#e32e07]">
              <Compass className="w-4 h-4 animate-spin-slow" />
            </div>
            <div>
              <span className="text-[10px] tracking-widest uppercase font-bold text-[#e32e07] block">
                SCROLL-WORLD INTERACTIVE FLIGHT
              </span>
              <h2 className="text-sm sm:text-base font-display font-bold uppercase tracking-wider text-white">
                ABC Pen-House Diorama World
              </h2>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-3 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-xs font-mono text-gray-300">
            <span className="w-2 h-2 rounded-full bg-[#e32e07] animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-[#e32e07]" />
            <span>SCRUB SCROLL TO FLY THROUGH WORLD</span>
          </div>
        </div>

        {/* CENTER STAGE: 3D Diorama Camera Stage */}
        <div className="relative z-10 w-full max-w-7xl flex-1 flex items-center justify-center my-auto">
          
          <motion.div
            style={{
              scale: cameraScale,
              rotateX: cameraRotateX,
              rotateY: cameraRotateY,
            }}
            className="relative w-full max-w-5xl h-[420px] sm:h-[480px] md:h-[520px] flex items-center justify-center"
          >
            {/* SCENE 1: DISCOVERY */}
            <motion.div
              style={{ opacity: scene1Opacity, scale: scene1Scale }}
              className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pointer-events-auto"
            >
              <div className="lg:col-span-6 flex flex-col items-start text-left space-y-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e32e07]/20 border border-[#e32e07]/40 text-[#e32e07] text-xs font-bold uppercase tracking-widest">
                  {scenes[0].eyebrow}
                </span>
                <h3 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-none">
                  {scenes[0].headline}
                </h3>
                <p className="text-base sm:text-lg font-serif italic text-[#e32e07]">
                  "{scenes[0].subtitle}"
                </p>
                <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed max-w-lg">
                  {scenes[0].description}
                </p>
                <div className="pt-2 flex items-center gap-4 text-xs font-mono text-gray-400 border-t border-white/10 w-full">
                  <span className="text-white font-bold">{scenes[0].stats}</span>
                  <span>•</span>
                  <span>Phase 1/4 Flight</span>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative group w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] bg-[#0d0d0d] rounded-sm overflow-hidden border border-white/20 shadow-[0_25px_60px_-15px_rgba(227,46,7,0.3)]">
                  <Image
                    src={scenes[0].image}
                    alt={scenes[0].headline}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent p-4">
                    <span className="text-[10px] tracking-widest uppercase font-semibold text-[#e32e07]">
                      {scenes[0].accentTag}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SCENE 2: PUBLISHING PRESS */}
            <motion.div
              style={{ opacity: scene2Opacity, scale: scene2Scale }}
              className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pointer-events-auto"
            >
              <div className="lg:col-span-6 flex flex-col items-start text-left space-y-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e32e07]/20 border border-[#e32e07]/40 text-[#e32e07] text-xs font-bold uppercase tracking-widest">
                  {scenes[1].eyebrow}
                </span>
                <h3 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-none">
                  {scenes[1].headline}
                </h3>
                <p className="text-base sm:text-lg font-serif italic text-[#e32e07]">
                  "{scenes[1].subtitle}"
                </p>
                <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed max-w-lg">
                  {scenes[1].description}
                </p>
                <div className="pt-2 flex items-center gap-4 text-xs font-mono text-gray-400 border-t border-white/10 w-full">
                  <span className="text-white font-bold">{scenes[1].stats}</span>
                  <span>•</span>
                  <span>Phase 2/4 Flight</span>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative group w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] bg-[#0d0d0d] rounded-sm overflow-hidden border border-white/20 shadow-[0_25px_60px_-15px_rgba(227,46,7,0.3)]">
                  <Image
                    src={scenes[1].image}
                    alt={scenes[1].headline}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent p-4">
                    <span className="text-[10px] tracking-widest uppercase font-semibold text-[#e32e07]">
                      {scenes[1].accentTag}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SCENE 3: POP-UP GALLERY */}
            <motion.div
              style={{ opacity: scene3Opacity, scale: scene3Scale }}
              className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pointer-events-auto"
            >
              <div className="lg:col-span-6 flex flex-col items-start text-left space-y-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e32e07]/20 border border-[#e32e07]/40 text-[#e32e07] text-xs font-bold uppercase tracking-widest">
                  {scenes[2].eyebrow}
                </span>
                <h3 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-none">
                  {scenes[2].headline}
                </h3>
                <p className="text-base sm:text-lg font-serif italic text-[#e32e07]">
                  "{scenes[2].subtitle}"
                </p>
                <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed max-w-lg">
                  {scenes[2].description}
                </p>
                <div className="pt-2 flex items-center gap-4 text-xs font-mono text-gray-400 border-t border-white/10 w-full">
                  <span className="text-white font-bold">{scenes[2].stats}</span>
                  <span>•</span>
                  <span>Phase 3/4 Flight</span>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative group w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] bg-[#0d0d0d] rounded-sm overflow-hidden border border-white/20 shadow-[0_25px_60px_-15px_rgba(227,46,7,0.3)]">
                  <Image
                    src={scenes[2].image}
                    alt={scenes[2].headline}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent p-4">
                    <span className="text-[10px] tracking-widest uppercase font-semibold text-[#e32e07]">
                      {scenes[2].accentTag}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SCENE 4: MEMORY VAULT */}
            <motion.div
              style={{ opacity: scene4Opacity, scale: scene4Scale }}
              className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pointer-events-auto"
            >
              <div className="lg:col-span-6 flex flex-col items-start text-left space-y-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e32e07]/20 border border-[#e32e07]/40 text-[#e32e07] text-xs font-bold uppercase tracking-widest">
                  {scenes[3].eyebrow}
                </span>
                <h3 className="text-3xl sm:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-none">
                  {scenes[3].headline}
                </h3>
                <p className="text-base sm:text-lg font-serif italic text-[#e32e07]">
                  "{scenes[3].subtitle}"
                </p>
                <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed max-w-lg">
                  {scenes[3].description}
                </p>
                <div className="pt-2 flex items-center gap-4 text-xs font-mono text-gray-400 border-t border-white/10 w-full">
                  <span className="text-white font-bold">{scenes[3].stats}</span>
                  <span>•</span>
                  <span>Final Phase 4/4</span>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative group w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] bg-[#0d0d0d] rounded-sm overflow-hidden border border-white/20 shadow-[0_25px_60px_-15px_rgba(227,46,7,0.3)]">
                  <Image
                    src={scenes[3].image}
                    alt={scenes[3].headline}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent p-4">
                    <span className="text-[10px] tracking-widest uppercase font-semibold text-[#e32e07]">
                      {scenes[3].accentTag}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* BOTTOM SCRUB HUD: Flight Progress Track & Controls */}
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-4">
          <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
            <span className="text-white font-bold tracking-widest">WORLD FLIGHT SCRUBBER</span>
            <span>•</span>
            <div className="flex items-center gap-2">
              {scenes.map((s) => (
                <span key={s.id} className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">
                  STAGE {s.stageNum}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Scrub Track Bar */}
          <div className="w-full sm:w-72 h-2 bg-white/10 rounded-full overflow-hidden relative border border-white/10">
            <motion.div
              style={{ width: scrubBarWidth }}
              className="h-full bg-gradient-to-r from-[#e32e07] to-red-500 rounded-full relative"
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-md border border-[#e32e07]" />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
