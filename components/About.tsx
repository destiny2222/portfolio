"use client";

import Image from "next/image";
import { CheckCircle2, Quote, Sparkles, BookOpen, Layers, Volume2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { number: "50+", label: "Editorial Projects Delivered" },
    { number: "100K+", label: "Words & Stories Crafted" },
    { number: "100%", label: "Authentic Brand Voice" },
  ];

  const architectureQuestions = [
    "What should people know first?",
    "What makes this story interesting?",
    "Which details deserve attention?",
    "What should the reader feel?",
    "What should they remember?",
  ];

  return (
    <section id="about" className="py-24 md:py-36 bg-white border-t border-black/8 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Subtitle Badge & Big Statement Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-4 mb-16 md:mb-20"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#e32e07]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#e32e07]">
              OUR PHILOSOPHY & APPROACH
            </span>
          </div>

          <h2 className="font-display font-extrabold uppercase text-3xl sm:text-5xl md:text-6xl max-w-4xl text-[#121212] leading-[1.1] tracking-tight">
            YOUR STORY DESERVES{" "}
            <span className="font-serif italic font-normal text-[#e32e07] lowercase">
              more than a caption
            </span>
          </h2>
        </motion.div>

        {/* Section 1 Grid: Editorial Photo & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Editorial Photo & Quote Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[3/4] sm:aspect-[4/5] bg-[#0a0a0a] rounded-sm overflow-hidden shadow-2xl border border-black/15 group cursor-pointer"
            >
              <Image
                src="/2.jpg"
                alt="ABC Pen-House Official Storytelling Portfolio"
                fill
                className="object-contain p-1 transition-transform duration-700 group-hover:scale-104"
              />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white p-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-sm">
                <Quote className="w-6 h-6 text-[#e32e07] mb-1" />
                <p className="font-serif italic text-xs md:text-sm leading-relaxed text-gray-100">
                  "No unnecessary corporate language. No empty buzzwords. Just your story, told properly."
                </p>
                <div className="mt-2 text-[10px] uppercase tracking-widest font-bold text-[#e32e07]">
                  ABC Pen-House Guarantee
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Narrative Body */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div className="space-y-6 text-base md:text-lg text-[#333] leading-relaxed font-normal">
              <p className="font-medium text-lg md:text-xl text-[#121212] border-l-4 border-[#e32e07] pl-4">
                A good story can make people pause. It can introduce your brand to someone who has never heard of you. It can give your customers a reason to care. It can preserve a journey that would otherwise be forgotten.
              </p>

              <p>
                But telling that story well takes more than putting words on a page. It takes research, listening, creativity, structure, and an understanding of the people you want to reach.
              </p>

              <div className="p-6 bg-[#fbfbf9] border border-black/10 rounded-sm">
                <h3 className="font-display font-extrabold uppercase text-xl text-[#121212] mb-2 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#e32e07]" />
                  We Build Stories Around What You Have Built
                </h3>
                <p className="text-sm text-[#555] leading-relaxed">
                  Whether you are building a business, leading an organisation, creating a personal brand, or preserving a legacy, we help you communicate it in a way that feels authentic to you.
                </p>
              </div>
            </div>

            {/* Ousya-style Rolling Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-black/10">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.15 }}
                  className="flex flex-col border-l border-black/10 pl-4 py-2 hover:border-[#e32e07] transition-colors"
                >
                  <span className="font-display font-extrabold text-3xl sm:text-4xl text-[#121212]">
                    {stat.number}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#666] font-semibold mt-1">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Section 2: EDITORIAL ARCHITECTURE & AUTHENTIC VOICE CARDS */}
        <div className="mt-24 pt-16 border-t border-black/10 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Editorial Architecture Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-[#121212] text-white rounded-sm border border-white/10 shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e32e07] mb-3">
                <Layers className="w-4 h-4" />
                METHODOLOGY
              </div>
              <h3 className="font-display font-extrabold uppercase text-2xl sm:text-3xl text-white mb-4">
                We Call It Editorial Architecture
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-6 font-serif italic">
                "Because good storytelling needs structure. At ABC Pen-House, we don't simply collect information and arrange it into paragraphs. We look at the bigger picture."
              </p>

              <div className="space-y-2 mb-6">
                {architectureQuestions.map((q, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-[#e32e07] shrink-0" />
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-gray-400">
              Then we build the story around those answers. <strong className="text-white">Every page has a purpose. Every story has a direction.</strong>
            </div>
          </motion.div>

          {/* Authentic Brand Voice Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 bg-[#fbfbf9] text-[#121212] rounded-sm border border-black/15 shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#e32e07] mb-3">
                <Volume2 className="w-4 h-4" />
                AUTHENTIC IDENTITY
              </div>
              <h3 className="font-display font-extrabold uppercase text-2xl sm:text-3xl text-[#121212] mb-4">
                Your Brand Should Sound Like You
              </h3>
              <p className="text-sm text-[#444] leading-relaxed mb-6">
                We are not interested in making every brand sound the same. Your voice matters. Your experiences matter. Your personality matters.
              </p>

              <div className="p-4 bg-white border border-black/10 rounded-sm mb-6">
                <p className="text-xs sm:text-sm font-medium text-[#222] leading-relaxed">
                  Whether your brand is bold, elegant, warm, traditional, innovative, youthful, corporate, or deeply personal, our work is shaped around who you actually are.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-black/10 text-xs font-bold text-[#e32e07] uppercase tracking-wider">
              No unnecessary corporate language. No empty buzzwords. Just your story, told properly.
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

