"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0d0d0d] text-white py-16 md:py-24 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Bar with Logo & Back To Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-sm overflow-hidden bg-black flex items-center justify-center border border-white/20 shadow-md">
              <Image
                src="/1.jpeg"
                alt="ABC Pen-House Shield Logo"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="font-display font-extrabold text-xl tracking-tight leading-none block text-white">
                ABC PEN-HOUSE
              </span>
              <span className="text-[10px] tracking-widest uppercase text-gray-400 font-sans">
                Editorial Storytelling & Publishing Studio
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <nav className="flex flex-wrap gap-6 text-xs uppercase tracking-widest font-semibold text-gray-300">
              <a href="#about" className="hover:text-[#e32e07] transition-colors">About</a>
              <a href="#expertise" className="hover:text-[#e32e07] transition-colors">Expertise</a>
              <a href="#portfolio" className="hover:text-[#e32e07] transition-colors">Portfolio</a>
              <a href="#faq" className="hover:text-[#e32e07] transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-[#e32e07] transition-colors">Contact</a>
            </nav>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#e32e07] text-white flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Ousya Signature Giant Typography Footer Banner */}
        <div className="py-12 md:py-16 text-center border-b border-white/10">
          <h2 className="font-display font-extrabold uppercase text-4xl sm:text-7xl md:text-8xl lg:text-[7rem] tracking-tighter text-white/90 select-none hover:text-[#e32e07] transition-colors duration-500">
            ABC PEN-HOUSE
          </h2>
          <p className="font-serif italic text-base sm:text-lg text-[#e32e07] mt-2">
            "We build stories around what you have built."
          </p>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div>
            © {new Date().getFullYear()} ABC Pen-House. All rights reserved. Designed inspired by Ousya.
          </div>
          <div className="flex items-center gap-4 text-gray-500">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-white transition-colors cursor-pointer">Brand License</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
