"use client";

import { motion } from "framer-motion";
import { MessageSquare, Search, Compass, PenTool, CheckCircle, Send, Sparkles } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "We Listen",
      desc: "We start with conversations. We want to understand you, your work, your audience, and what you are trying to communicate.",
      icon: MessageSquare,
    },
    {
      num: "02",
      title: "We Research",
      desc: "We go beyond what you tell us. We look for the details, context, history, and information that can make the story stronger.",
      icon: Search,
    },
    {
      num: "03",
      title: "We Find the Story",
      desc: "Every project has a central idea. We identify what makes your story worth telling and build around it.",
      icon: Compass,
    },
    {
      num: "04",
      title: "We Create",
      desc: "Our writers and creative team turn the research into a polished editorial piece, publication, or brand story.",
      icon: PenTool,
    },
    {
      num: "05",
      title: "We Refine",
      desc: "We review the work with you, make the necessary adjustments, and ensure the final piece feels authentic to your vision.",
      icon: CheckCircle,
    },
    {
      num: "06",
      title: "We Publish",
      desc: "The finished story becomes something you can share with your audience, clients, customers, partners, team, family, or community.",
      icon: Send,
    },
  ];

  return (
    <section id="process" className="py-24 md:py-36 bg-[#121212] text-white relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#e32e07]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Intro Card: From Raw Ideas to Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-12 bg-white/5 border border-white/10 rounded-sm mb-20 backdrop-blur-md"
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-4 h-4 text-[#e32e07]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#e32e07]">
              OUR COLLABORATIVE PROCESS
            </span>
          </div>

          <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
            From Raw Ideas to Stories People Can Connect With
          </h2>

          <p className="text-base sm:text-lg text-gray-300 max-w-4xl leading-relaxed font-normal mb-6">
            You don't need to arrive with a perfect brief. You may only have a business idea, a collection of photographs, a pile of old documents, a list of achievements, or a story you've been meaning to tell for years. Bring us what you have. We ask the right questions, conduct the necessary research, find the details that matter, and shape everything into a story that feels clear, intentional, and genuinely yours.
          </p>

          <div className="inline-block pt-3 border-t border-white/10 text-sm font-serif italic text-[#e32e07]">
            "You bring the story. We help bring it to life."
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-bold text-[#e32e07] block mb-3">
            HOW WE WORK
          </span>
          <h3 className="font-display font-extrabold uppercase text-3xl sm:text-5xl text-white tracking-tight">
            What Happens When You Work With Us?
          </h3>
        </motion.div>

        {/* 6-Step Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-[#1a1a1a] border border-white/10 rounded-sm hover:border-[#e32e07] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-extrabold text-3xl text-[#e32e07]">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-[#e32e07] group-hover:text-white text-gray-300 flex items-center justify-center transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="font-display font-bold uppercase text-xl text-white group-hover:text-[#e32e07] transition-colors mb-3">
                    {step.title}
                  </h4>

                  <p className="text-sm text-gray-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 text-[10px] uppercase tracking-widest font-bold text-gray-500 group-hover:text-gray-300 transition-colors">
                  Step {step.num} of 06
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
