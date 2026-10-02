import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScrollWorld from "@/components/ScrollWorld";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Portfolio from "@/components/Portfolio";
import ProcessSection from "@/components/ProcessSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#fbfbf9] text-[#121212] overflow-x-hidden selection:bg-[#e32e07] selection:text-white">
      <Navbar />
      <Hero />
      <ScrollWorld />
      <About />
      <Expertise />
      <Portfolio />
      <ProcessSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

