"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What services does ABC Pen-House offer?",
      answer:
        "We specialize in brand positioning, editorial brand books, digital magazines, scriptwriting, thought leadership essays, and legacy memory preservation. From building your core narrative to publishing digital journals, we help elevate your brand across digital and print media.",
    },
    {
      question: "How do I get started with ABC Pen-House?",
      answer:
        "Start by reaching out through our contact form or direct email. We'll schedule an initial story discovery session to learn about your business, understand your narrative goals, and outline a tailored roadmap for your project.",
    },
    {
      question: "What makes ABC Pen-House different from other agencies?",
      answer:
        "We don't write generic marketing copy. We approach every business with deep research, human empathy, and editorial rigor. We help people understand why your work matters through thoughtful storytelling and luxury design.",
    },
    {
      question: "How long does a typical storytelling project take?",
      answer:
        "Project timelines depend on scope. Brand communication frameworks and thought leadership essays take 2–3 weeks, while full-scale archival brand books or digital magazines range from 4–6 weeks.",
    },
    {
      question: "Can I request a custom editorial package tailored to my needs?",
      answer:
        "Absolutely! Whether you're launching a brand, recording founder memoirs, or producing a quarterly publication, we create custom packages aligned with your budget, timeline, and goals.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-36 bg-[#fbfbf9] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-4 mb-16"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#e32e07]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#e32e07]">
              FAQS
            </span>
          </div>
          <h2 className="font-display font-extrabold uppercase text-3xl sm:text-5xl text-[#121212] tracking-tight">
            FREQUENTLY ASKED{" "}
            <span className="font-serif italic font-normal text-[#e32e07] lowercase">
              questions
            </span>
          </h2>
        </motion.div>

        {/* Content Grid: Accordion & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Accordion Column */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`border rounded-sm transition-all duration-300 ${
                    isOpen
                      ? "bg-white border-[#121212] shadow-md"
                      : "bg-transparent border-black/10 hover:border-black/25"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-[#121212] pr-2">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#e32e07] text-white"
                          : "bg-black/5 text-[#444]"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-sm text-[#444] leading-relaxed border-t border-black/8 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Right Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 sticky top-28"
          >
            <div className="relative aspect-[3/4] sm:aspect-[4/5] bg-[#0a0a0a] rounded-sm overflow-hidden shadow-2xl border border-black/15 group">
              <Image
                src="/3.jpg"
                alt="ABC Pen-House Publishing & Creative Documentation FAQ"
                fill
                className="object-contain p-2 transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white p-3 bg-black/60 backdrop-blur-md rounded-sm border border-white/10">
                <HelpCircle className="w-5 h-5 text-[#e32e07] mb-1" />
                <p className="font-serif italic text-xs text-gray-200">
                  Have a custom story idea or editorial project? We're ready to collaborate with you.
                </p>
                <a
                  href="#contact"
                  className="mt-2 inline-block text-[11px] uppercase tracking-widest font-bold text-[#e32e07] hover:underline"
                >
                  Ask Us Directly →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
