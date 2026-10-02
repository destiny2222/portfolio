"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Personal Legacy Stories",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        service: "Personal Legacy Stories",
        message: "",
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-white border-t border-black/8 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Banner: More Than Content. Something You Can Keep. */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-8 sm:p-12 bg-[#121212] text-white rounded-sm mb-20 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#e32e07]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <span className="text-xs uppercase tracking-widest font-bold text-[#e32e07] block mb-3">
              ENDURING VALUE
            </span>
            <h2 className="font-display font-extrabold uppercase text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              More Than Content. Something You Can Keep.
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal mb-6">
              Social media posts disappear into a feed. Trends change. Platforms change. But a well-told story can stay with people. A thoughtfully created publication can become part of your company's history. A personal legacy story can become something your children and grandchildren can read. A brand book can remind your team where the business came from and where it is going.
            </p>
            <div className="text-sm font-serif italic text-[#e32e07] font-bold">
              "We create stories with a life beyond the moment."
            </div>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-4 mb-16 text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#e32e07]" />
            <span className="text-xs uppercase tracking-widest font-bold text-[#e32e07]">
              START YOUR STORY
            </span>
            <span className="h-px w-8 bg-[#e32e07]" />
          </div>
          <h2 className="font-display font-extrabold uppercase text-3xl sm:text-5xl text-[#121212] tracking-tight">
            For the People Building Something{" "}
            <span className="font-serif italic font-normal text-[#e32e07] lowercase">
              worth remembering
            </span>
          </h2>
          <p className="text-base text-[#444] font-medium leading-relaxed">
            If you've built something you are proud of, don't let the story remain scattered across conversations, photographs, social media posts, and memories. Let's bring it together. Let's give it structure. Let's give it a voice. Let's give it a place to live.
          </p>
        </motion.div>

        {/* Content Grid: Contact Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-6 bg-[#fbfbf9] border border-black/10 rounded-sm">
              <h3 className="font-display font-bold uppercase text-xl text-[#121212] mb-2">
                ABC Pen-House
              </h3>
              <p className="text-sm text-[#555] font-serif italic mb-4">
                Storytelling for brands, people, and legacies.
              </p>
              <div className="pt-4 border-t border-black/10 flex items-center gap-3 text-xs text-[#666]">
                <BookOpen className="w-4 h-4 text-[#e32e07]" />
                <span>Editorial Architecture & Custom Publications</span>
              </div>
            </div>

            <motion.div
              whileHover={{ x: 6 }}
              className="p-6 bg-[#fbfbf9] border border-black/8 rounded-sm hover:border-[#121212] transition-all shadow-xs cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#121212] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#e32e07]" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#777] block">
                    Direct Editorial Email
                  </span>
                  <a
                    href="mailto:hello@abcpen-house.carrd.co"
                    className="text-base font-bold text-[#121212] hover:text-[#e32e07] transition-colors"
                  >
                    hello@abcpen-house.carrd.co
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Social Links Banner */}
            <div className="p-6 bg-[#121212] text-white rounded-sm space-y-3">
              <span className="text-xs uppercase tracking-widest font-bold text-[#e32e07] block">
                Connect Across Platforms
              </span>
              <div className="flex flex-wrap gap-3 pt-1">
                {[
                  { name: "X / Twitter", href: "https://abcpen-house.carrd.co" },
                  { name: "Instagram", href: "https://abcpen-house.carrd.co" },
                  { name: "Substack", href: "https://abcpen-house.carrd.co" },
                  { name: "Carrd", href: "https://abcpen-house.carrd.co" },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-white/10 text-xs font-semibold text-white rounded-none hover:bg-[#e32e07] transition-colors"
                  >
                    {social.name} ↗
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 bg-[#fbfbf9] p-8 md:p-10 border border-black/10 rounded-sm shadow-xl relative overflow-hidden"
          >
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest font-bold text-[#e32e07] block mb-1">
                TELL US WHAT YOU'RE BUILDING
              </span>
              <h3 className="font-display font-extrabold uppercase text-2xl text-[#121212]">
                Start Your Story With Us
              </h3>
            </div>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="py-16 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#e32e07] text-white mx-auto flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-extrabold uppercase text-2xl text-[#121212]">
                    Story Request Received!
                  </h3>
                  <p className="text-sm text-[#555] max-w-md mx-auto">
                    Thank you for reaching out to ABC Pen-House. We will schedule a story discovery session with you shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-6 py-2.5 bg-[#121212] text-white text-xs uppercase tracking-widest font-semibold hover:bg-[#e32e07] transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-[#444] mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#121212] focus:outline-none focus:border-[#e32e07] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-bold text-[#444] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#121212] focus:outline-none focus:border-[#e32e07] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-[#444] mb-2">
                      Publication or Story Type Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#121212] focus:outline-none focus:border-[#e32e07] transition-colors cursor-pointer"
                    >
                      <option value="Personal Legacy Stories">Personal Legacy Stories</option>
                      <option value="Brand Stories">Brand Stories</option>
                      <option value="Digital Magazines">Digital Magazines</option>
                      <option value="Brand Books">Brand Books</option>
                      <option value="Special Editions">Special Editions & Milestones</option>
                      <option value="Editorial Content">Editorial Content & Thought Leadership</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-[#444] mb-2">
                      Tell Us What You're Building
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Share a bit about your brand, journey, idea, photographs, or story..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white border border-black/15 text-sm text-[#121212] focus:outline-none focus:border-[#e32e07] transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 bg-[#e32e07] hover:bg-[#c84b31] text-white text-xs uppercase tracking-widest font-extrabold transition-colors duration-300 flex items-center justify-center gap-2 group shadow-md cursor-pointer"
                  >
                    {status === "submitting" ? (
                      <span>Processing Your Story...</span>
                    ) : (
                      <>
                        <span>Start Your Story</span>
                        <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

