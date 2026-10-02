"use client";

import Image from "next/image";
import { X, Calendar, User, Tag, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  year: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  quote: string;
  impact: string;
};

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-4xl bg-[#fbfbf9] text-[#121212] shadow-2xl rounded-sm border border-black/10 overflow-hidden my-auto max-h-[90vh] flex flex-col"
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-black/10 bg-white sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-widest font-bold text-[#e32e07]">
                  Case Study
                </span>
                <span className="text-xs text-[#888]">•</span>
                <span className="text-xs font-semibold text-[#444]">{project.category}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-black/5 hover:bg-[#e32e07] hover:text-white flex items-center justify-center transition-colors focus:outline-none cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-8">
              {/* Main Title & Subtitle */}
              <div>
                <h2 className="font-display font-extrabold uppercase text-3xl sm:text-5xl text-[#121212] leading-tight">
                  {project.title}
                </h2>
                <p className="font-serif italic text-lg sm:text-xl text-[#e32e07] mt-2">
                  {project.subtitle}
                </p>
              </div>

              {/* Key Meta Grid */}
              <div className="grid grid-cols-3 gap-4 py-4 px-6 bg-white border border-black/8 rounded-sm">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-xs text-[#777] font-semibold uppercase tracking-wider">
                    <User className="w-3.5 h-3.5 text-[#e32e07]" /> Client / Partner
                  </div>
                  <span className="text-sm font-bold text-[#121212] mt-1">{project.client}</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-xs text-[#777] font-semibold uppercase tracking-wider">
                    <Tag className="w-3.5 h-3.5 text-[#e32e07]" /> Category
                  </div>
                  <span className="text-sm font-bold text-[#121212] mt-1">{project.category}</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-xs text-[#777] font-semibold uppercase tracking-wider">
                    <Calendar className="w-3.5 h-3.5 text-[#e32e07]" /> Year
                  </div>
                  <span className="text-sm font-bold text-[#121212] mt-1">{project.year}</span>
                </div>
              </div>

              {/* Large Hero Image */}
              <div className="relative h-[440px] sm:h-[540px] w-full bg-[#0a0a0a] rounded-sm overflow-hidden shadow-xl border border-black/15 flex items-center justify-center p-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Full Narrative Description */}
              <div className="space-y-4 text-base text-[#333] leading-relaxed">
                <h3 className="font-display font-bold uppercase text-lg text-[#121212] border-b border-black/10 pb-2">
                  Editorial Concept & Strategy
                </h3>
                <p className="text-base leading-relaxed">{project.fullDesc}</p>
              </div>

              {/* Highlight Quote */}
              <div className="p-6 bg-[#121212] text-white rounded-sm border-l-4 border-[#e32e07]">
                <p className="font-serif italic text-base sm:text-lg leading-relaxed text-gray-200">
                  "{project.quote}"
                </p>
                <span className="text-xs uppercase tracking-widest font-bold text-[#e32e07] block mt-3">
                  Impact Highlight: {project.impact}
                </span>
              </div>

              {/* Key Deliverables */}
              <div>
                <h3 className="font-display font-bold uppercase text-sm text-[#121212] tracking-wider mb-4">
                  Project Deliverables
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-white border border-black/8 rounded-sm">
                      <Sparkles className="w-4 h-4 text-[#e32e07] shrink-0" />
                      <span className="text-xs font-semibold text-[#121212]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Bar */}
            <div className="px-6 py-4 border-t border-black/10 bg-white flex justify-between items-center sticky bottom-0 z-20">
              <span className="text-xs text-[#777] font-medium">ABC Pen-House Portfolio</span>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-[#121212] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#e32e07] transition-colors cursor-pointer"
              >
                Close Project
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
