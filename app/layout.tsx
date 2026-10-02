import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ABC Pen-House | Editorial Storytelling & Brand Publishing Agency",
  description:
    "At ABC Pen-House, we help businesses communicate their value through storytelling, research, brand positioning, and editorial products such as brand books and digital magazines.",
  keywords: [
    "ABC Pen-House",
    "Brand Storytelling",
    "Brand Communication",
    "Thought Leadership",
    "Scriptwriting",
    "Brand Books",
    "Digital Magazines",
    "Legacy Preservation",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col font-sans bg-[#fbfbf9] text-[#121212]">
        {children}
      </body>
    </html>
  );
}


