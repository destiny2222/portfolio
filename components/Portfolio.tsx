"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectModal, { Project } from "./ProjectModal";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Publishing & Creative Documentation",
    "Brand Communication & Publishing",
    "Legacy & Memory Preservation",
    "Content & Thought Leadership",
  ];

  const projects: Project[] = [
    {
      id: "moelle-zavian",
      title: "MOELLE ZAVIAN",
      subtitle: "Pop-Up Experience & Haute Couture Editorial",
      category: "Publishing & Creative Documentation",
      client: "Moelle Zavian Global",
      year: "2026",
      image: "/13.jpg",
      shortDesc:
        "Inaugural Pop-Up Experience publication celebrating elevated dresses, artisan fashion, and bespoke brand storytelling.",
      fullDesc:
        "ABC Pen-House conceptualized, edited, and published the inaugural 'Pop-Up Experience' issue for Moelle Zavian. Featuring long-form founder profiles, narrative copy for bespoke collections, and high-fashion broadsheet design.",
      deliverables: [
        "Issue 01 Digital & Print Magazine",
        "Haute Couture Editorial Copywriting",
        "Pop-Up Experience Brand Narrative",
        "Social & Campaign Copy Architecture",
      ],
      quote:
        "ABC Pen-House captured the elegance and soul of our designs in every single word of our debut publication.",
      impact: "12,000+ Readers & Global Fashion Showcase Feature",
    },
    {
      id: "christoph-magazine",
      title: "CHRISTOPH MAGAZINE",
      subtitle: "Solace Suit — Fashion Meets Soul Volume No. 01",
      category: "Brand Communication & Publishing",
      client: "Christoph Luxury Apparel",
      year: "2026",
      image: "/14.jpg",
      shortDesc:
        "Exclusive Volume 01 publication exploring luxury menswear, unisex tailoring, and brand heritage.",
      fullDesc:
        "ABC Pen-House crafted the narrative architecture and editorial positioning for Christoph Magazine's flagship 'Solace Suit' edition. We authored feature stories on modern tailoring, luxury positioning, and brand legacy.",
      deliverables: [
        "Volume 01 Print & Digital Magazine",
        "Brand Narrative Architecture",
        "Executive Interview Scripts",
        "Luxury Lookbook Copywriting",
      ],
      quote:
        "The storytelling elevated our suit collection into an artistic movement that resonated deeply with our buyers.",
      impact: "Sold-out inaugural issue & international distributor deals",
    },
    {
      id: "esanharris-photography",
      title: "ESANHARRIS MAGAZINE",
      subtitle: "Wedding Inspiration & Digital Photography Edition",
      category: "Legacy & Memory Preservation",
      client: "Esanharris Photography",
      year: "2026",
      image: "/11.jpg",
      shortDesc:
        "Inaugural digital edition honoring fine-art wedding photography, couple memoirs, and milestone storybooks.",
      fullDesc:
        "ABC Pen-House authored and laid out the debut issue of Esanharris Photography Magazine, turning real wedding celebrations and fine-art portraits into immortalized literary and visual keepsakes.",
      deliverables: [
        "Digital Edition #01 Publication",
        "Romantic Storytelling Profiles",
        "Collector's Keepsake PDF",
        "Client Interview Features",
      ],
      quote:
        "ABC Pen-House turned our photography into immortalized literature that our couples cherish for a lifetime.",
      impact: "100% Client Satisfaction & Archival Heritage",
    },
    {
      id: "efis-studios",
      title: "EFIS STUDIOS",
      subtitle: "Cultural Heritage & Bespoke Portraiture Issue",
      category: "Legacy & Memory Preservation",
      client: "Efis Studios",
      year: "2026",
      image: "/12.jpg",
      shortDesc:
        "Cultural journal celebrating Nigerian heritage, family lineage, traditional attire, and royal elegance.",
      fullDesc:
        "ABC Pen-House conducted personal interviews and wrote commemorative tribute stories capturing family heritage, traditional attire, and founding stories for Efis Studios' Issue 01.",
      deliverables: [
        "Issue 01 Cultural Journal",
        "Commemorative Tribute Essays",
        "Oral History Documentation",
        "Anniversary Publication",
      ],
      quote:
        "They brought our cultural story to life with grace, depth, and prestige.",
      impact: "Preserved 3 Generations of Cultural Legacy",
    },
    {
      id: "abc-editorial-archive",
      title: "ABC EDITORIAL ARCHIVE",
      subtitle: "Executive & Founder Legacy Magazine Collection",
      category: "Content & Thought Leadership",
      client: "Corporate Leaders & Cultural Icons",
      year: "2025 - 2026",
      image: "/10.png",
      shortDesc:
        "Comprehensive editorial archive including Classic Fashion, Legal Story, Director Legacy, and Revo Boss publications.",
      fullDesc:
        "A curated collection of custom magazine issues published by ABC Pen-House for CEOs, legal luminaries, fashion houses, and visionary directors across Nigeria and internationally.",
      deliverables: [
        "20+ Magazine Issues Published",
        "Executive Cover Story Ghostwriting",
        "Custom Editorial Typography",
        "National Distribution Strategy",
      ],
      quote:
        "ABC Pen-House is the gold standard for executive publishing and brand documentation.",
      impact: "Over 500,000+ Lifetime Readers",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-36 bg-[#121212] text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 border-b border-white/10 pb-8"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#e32e07]" />
              <span className="text-xs uppercase tracking-widest font-bold text-[#e32e07]">
                PORTFOLIO
              </span>
            </div>
            <h2 className="font-display font-extrabold uppercase text-4xl sm:text-6xl text-white tracking-tight">
              FEATURED{" "}
              <span className="font-serif italic font-normal text-[#e32e07] lowercase">
                editorial work
              </span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-sm mt-4 md:mt-0 font-medium">
            Explore selected brand books, digital magazines, scripts, and thought leadership publications created by ABC Pen-House.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-2 mb-16 overflow-x-auto pb-2 scrollbar-none"
        >
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-gray-500 mr-2">
            <Filter className="w-3.5 h-3.5 text-[#e32e07]" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs uppercase tracking-widest font-bold px-4 py-2 rounded-none transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#e32e07] text-white shadow-lg"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                {cat === "All" ? "All Projects" : cat}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Alternating Project Layout Showcase */}
        <div className="space-y-20 md:space-y-32">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center group"
                >
                  {/* Visual Image Block */}
                  <div
                    className={`lg:col-span-6 xl:col-span-7 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <motion.div
                      whileHover={{ y: -8, scale: 1.01 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      onClick={() => setSelectedProject(project)}
                      className="relative aspect-[3/4] sm:aspect-[4/5] md:aspect-[16/11] lg:aspect-[4/5] w-full rounded-sm overflow-hidden border border-white/15 shadow-2xl cursor-pointer bg-[#181818]"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        priority={index < 2}
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-500" />
                      
                      <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-md text-[#e32e07] text-[10px] uppercase tracking-widest px-3 py-1.5 font-bold border border-white/20 shadow-md">
                        {project.category}
                      </div>

                      <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-[#e32e07] text-white flex items-center justify-center opacity-90 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 shadow-xl">
                        <ArrowUpRight className="w-6 h-6" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Text Content Block */}
                  <div
                    className={`lg:col-span-6 xl:col-span-5 flex flex-col justify-center space-y-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="flex items-center gap-4 text-xs text-[#e32e07] uppercase tracking-widest font-bold">
                      <span>{project.client}</span>
                      <span className="w-1 h-1 rounded-full bg-[#e32e07]" />
                      <span>{project.year}</span>
                    </div>

                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="font-display font-extrabold uppercase text-3xl sm:text-4xl text-white group-hover:text-[#e32e07] transition-colors cursor-pointer leading-tight"
                    >
                      {project.title}
                    </h3>

                    <p className="font-serif italic text-lg text-gray-300">
                      "{project.subtitle}"
                    </p>

                    <p className="text-sm text-gray-400 leading-relaxed">
                      {project.shortDesc}
                    </p>

                    <div className="pt-2">
                      <motion.button
                        whileHover={{ x: 4 }}
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white hover:text-[#e32e07] transition-colors group/btn border-b border-white/20 pb-1 hover:border-[#e32e07] cursor-pointer"
                      >
                        <span>Explore Case Study</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
