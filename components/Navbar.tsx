"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Feather, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fbfbf9]/90 backdrop-blur-md py-4 border-b border-black/8 shadow-xs"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-sm overflow-hidden bg-black flex items-center justify-center transition-transform duration-300 group-hover:scale-105 border border-black/10">
            <Image
              src="/1.jpeg"
              alt="ABC Pen-House Shield Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-lg md:text-xl tracking-tight leading-none text-[#121212]">
              ABC PEN-HOUSE
            </span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-[#666] font-sans">
              Editorial Studio
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-[#444] hover:text-[#e32e07] transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#e32e07] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#121212] text-white text-xs uppercase tracking-widest font-semibold rounded-none hover:bg-[#e32e07] transition-all duration-300 group shadow-sm hover:shadow-md"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 text-[#121212] hover:text-[#e32e07] focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fbfbf9] border-b border-black/10 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-display font-bold uppercase tracking-wider text-[#121212] hover:text-[#e32e07] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 text-center px-5 py-3 bg-[#e32e07] text-white font-semibold uppercase text-xs tracking-widest"
            >
              Start Storytelling Project
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
