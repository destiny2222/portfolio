"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Building2, Camera, Compass, Heart, GraduationCap, Palette, Users, Sparkle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Expertise() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: "01",
      title: "Personal Legacy Stories",
      tagline: "Preserving Milestone Experiences & Turning Points",
      description:
        "Your journey is more than a list of achievements. We document the experiences, people, milestones, values, and turning points that shaped your story, creating a meaningful record that can be shared today and preserved for generations.",
      features: [
        "Founder Biography & Memoir Books",
        "Family Heritage Preservation",
        "Milestone Turning Point Records",
        "Generational Archive Handbooks",
      ],
      image: "/2.jpg",
    },
    {
      id: "02",
      title: "Brand Stories",
      tagline: "Connecting People With Your Core Purpose",
      description:
        "People connect with businesses they understand. We help you tell the story behind your brand, from how it started to what drives it, what it stands for, and where it is going.",
      features: [
        "Brand Genesis & Origin Stories",
        "Vision & Mission Narratives",
        "Company Culture & Value Profiles",
        "Executive Positioning Content",
      ],
      image: "/5.jpg",
    },
    {
      id: "03",
      title: "Digital Magazines",
      tagline: "Engaging Publications with Room to Speak",
      description:
        "Give your brand more room to speak. We create editorial-style digital magazines that bring together your stories, people, products, milestones, events, and ideas in one engaging publication.",
      features: [
        "Curated Editorial Layouts",
        "Quarterly & Annual Brand Journals",
        "Product Showcase Features",
        "Interactive Digital Formats",
      ],
      image: "/11.jpg",
    },
    {
      id: "04",
      title: "Brand Books",
      tagline: "Capturing Identity Beyond Social Media",
      description:
        "Some stories deserve to live beyond social media. We develop carefully structured brand books that capture your identity, journey, philosophy, achievements, and vision in a format you can keep, share, and build on.",
      features: [
        "Hardcover Collector Brand Books",
        "Corporate Identity Archives",
        "Strategic Brand Books",
        "Philosophy & Heritage Editions",
      ],
      image: "/14.jpg",
    },
    {
      id: "05",
      title: "Special Editions",
      tagline: "Turning Important Moments Into Lasting Records",
      description:
        "Have a milestone worth remembering? From anniversaries and launches to special events and major achievements, we create publications that turn important moments into lasting records.",
      features: [
        "Anniversary Collector Issues",
        "Product & Space Launch Books",
        "Exhibition & Event Retrospectives",
        "Major Achievement Chronicles",
      ],
      image: "/13.jpg",
    },
    {
      id: "06",
      title: "Editorial Content",
      tagline: "Research & Writing That Keeps Your Voice Central",
      description:
        "Sometimes, you simply need the right words. We research, write, edit, and develop content that communicates your ideas clearly while keeping your voice at the centre.",
      features: [
        "Thought Leadership Essays",
        "Research & Whitepapers",
        "Strategic Copywriting",
        "Executive Speeches & Articles",
      ],
      image: "/8.jpg",
    },
  ];

  const industries = [
    { title: "Fashion", desc: "A fashion label has a story.", icon: Palette, tag: "/14.jpg" },
    { title: "Schools", desc: "A school has a story.", icon: GraduationCap, tag: "/5.jpg" },
    { title: "Photographers", desc: "A photographer has a story.", icon: Camera, tag: "/11.jpg" },
    { title: "Architects", desc: "An architect has a story.", icon: Building2, tag: "/12.jpg" },
    { title: "Event Companies", desc: "An event company has a story.", icon: Sparkles, tag: "/13.jpg" },
    { title: "NGOs & Non-Profits", desc: "An NGO has a story.", icon: Heart, tag: "/8.jpg" },
    { title: "Growing Businesses", desc: "A growing business has a story.", icon: Compass, tag: "/4.jpg" },
    { title: "Families", desc: "A family has a story.", icon: Users, tag: "/2.jpg" },
  ];

  return (
    <section id="expertise" className="py-24 md:py-36 bg-[#fbfbf9] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#e32e07]" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#e32e07]">
                OUR SERVICES
              </span>
            </div>
            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-5xl text-[#121212] tracking-tight">
              WE BUILD STORIES AROUND{" "}
              <span className="font-serif italic font-normal text-[#e32e07] lowercase">
                what you have built
              </span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#666] max-w-md mt-4 md:mt-0 font-medium">
            Six specialized editorial products designed to turn your journey, ideas, and achievements into lasting publications.
          </p>
        </motion.div>

        {/* Interactive Service Accordion & Preview Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Service Items List */}
          <div className="lg:col-span-7 space-y-4">
            {services.map((service, index) => {
              const isActive = activeService === index;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  onMouseEnter={() => setActiveService(index)}
                  onClick={() => setActiveService(index)}
                  className={`group cursor-pointer transition-all duration-300 p-6 sm:p-7 rounded-sm border ${
                    isActive
                      ? "bg-white border-[#121212] shadow-xl"
                      : "bg-transparent border-black/8 hover:border-black/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <span
                        className={`text-sm font-bold tracking-widest uppercase transition-colors ${
                          isActive ? "text-[#e32e07]" : "text-[#888]"
                        }`}
                      >
                        {service.id}
                      </span>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-[#121212] group-hover:text-[#e32e07] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isActive ? 0 : -45 }}
                      transition={{ duration: 0.2 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-[#e32e07] text-white"
                          : "bg-black/5 text-[#666] group-hover:bg-black/10"
                      }`}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Expandable Details */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-6 border-t border-black/10">
                          <p className="text-xs uppercase tracking-wider font-bold text-[#e32e07] mb-2">
                            {service.tagline}
                          </p>
                          <p className="text-sm text-[#444] leading-relaxed mb-4">
                            {service.description}
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {service.features.map((feat, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs text-[#222]">
                                <Sparkles className="w-3 h-3 text-[#e32e07]" />
                                <span>{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right Dynamic Preview Box */}
          <div className="lg:col-span-5 hidden lg:block sticky top-28">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative aspect-[3/4] bg-[#0a0a0a] rounded-sm overflow-hidden shadow-2xl border border-black/15 group"
            >
              <Image
                src={services[activeService].image}
                alt={services[activeService].title}
                fill
                className="object-contain p-2 transition-all duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#e32e07] block mb-1">
                  Editorial Pillar {services[activeService].id}
                </span>
                <h4 className="font-display font-extrabold text-xl uppercase mb-1">
                  {services[activeService].title}
                </h4>
                <p className="text-xs text-gray-300 font-serif italic">
                  "{services[activeService].tagline}"
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* INDUSTRIES WE WORK ACROSS SECTION */}
        <div className="mt-28 pt-20 border-t border-black/10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <span className="text-xs uppercase tracking-widest font-bold text-[#e32e07] block mb-3">
              CROSS-INDUSTRY STORYTELLING
            </span>
            <h3 className="font-display font-extrabold uppercase text-3xl sm:text-4xl text-[#121212] tracking-tight mb-4">
              We Work Across Industries Because Every Industry Has a Story
            </h3>
            <p className="text-sm md:text-base text-[#555]">
              We work with individuals, businesses, institutions, creatives, organisations, and professionals who have something meaningful to say.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((ind, idx) => {
              const IconComp = ind.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="p-6 bg-white border border-black/10 rounded-sm hover:border-[#e32e07] hover:shadow-lg transition-all duration-300 group flex flex-col justify-between h-40"
                >
                  <div className="w-10 h-10 rounded-full bg-[#fbfbf9] group-hover:bg-[#e32e07]/10 flex items-center justify-center text-[#121212] group-hover:text-[#e32e07] transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold uppercase text-base text-[#121212] group-hover:text-[#e32e07] transition-colors">
                      {ind.title}
                    </h4>
                    <p className="text-xs text-[#666] font-serif italic mt-1">
                      {ind.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

