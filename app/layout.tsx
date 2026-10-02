import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-xi-one-k0up798ebi.vercel.app"),
  title: {
    default: "ABC PEN-HOUSE | Editorial Storytelling & Brand Publishing Studio",
    template: "%s | ABC Pen-House",
  },
  description:
    "Every brand has a story. We help you tell yours. At ABC Pen-House, we turn business journeys, founder legacies, and brand positioning into bespoke brand books, digital magazines, and high-impact editorial publications.",
  keywords: [
    "ABC Pen-House",
    "Editorial Storytelling",
    "Brand Publishing Studio",
    "Personal Legacy Stories",
    "Brand Stories",
    "Digital Magazines",
    "Brand Books",
    "Special Edition Publications",
    "Editorial Architecture",
    "Thought Leadership Essays",
    "Scriptwriting & Storytelling",
  ],
  authors: [
    { name: "ABC Pen-House Editorial Studio", url: "https://portfolio-xi-one-k0up798ebi.vercel.app" },
  ],
  creator: "ABC Pen-House",
  publisher: "ABC Pen-House",
  icons: {
    icon: "/1.jpeg",
    shortcut: "/1.jpeg",
    apple: "/1.jpeg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-xi-one-k0up798ebi.vercel.app",
    title: "ABC PEN-HOUSE | Editorial Storytelling & Brand Publishing Studio",
    description:
      "Every brand has a story. We help you tell yours. We turn business journeys and founder legacies into bespoke brand books and digital magazines.",
    siteName: "ABC Pen-House",
    images: [
      {
        url: "/14.jpg",
        secureUrl: "/14.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "ABC Pen-House Editorial Storytelling Showcase",
      },
      {
        url: "/1.jpeg",
        secureUrl: "/1.jpeg",
        width: 800,
        height: 800,
        type: "image/jpeg",
        alt: "ABC Pen-House Official Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ABC PEN-HOUSE | Editorial Storytelling & Brand Publishing Studio",
    description:
      "Every brand has a story. We help you tell yours. Custom brand books, digital magazines, and legacy memoirs.",
    images: ["/14.jpg"],
    creator: "@abcpenhouse",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ABC Pen-House",
  url: "https://portfolio-xi-one-k0up798ebi.vercel.app",
  logo: "/1.jpeg",
  image: "/14.jpg",
  description:
    "Editorial Storytelling & Brand Publishing Studio specializing in personal legacy stories, brand books, digital magazines, and thought leadership.",
  sameAs: ["https://portfolio-xi-one-k0up798ebi.vercel.app"],
  offers: {
    "@type": "AggregateOffer",
    itemOffered: [
      { "@type": "Service", name: "Personal Legacy Stories" },
      { "@type": "Service", name: "Brand Stories" },
      { "@type": "Service", name: "Digital Magazines" },
      { "@type": "Service", name: "Brand Books" },
      { "@type": "Service", name: "Special Editions" },
      { "@type": "Service", name: "Editorial Content" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <link rel="icon" href="/1.jpeg" sizes="any" />
        <link rel="apple-touch-icon" href="/1.jpeg" />
        <meta property="og:image" content="https://portfolio-xi-one-k0up798ebi.vercel.app/14.jpg" />
        <meta property="og:image:url" content="https://portfolio-xi-one-k0up798ebi.vercel.app/14.jpg" />
        <meta property="og:image:secure_url" content="https://portfolio-xi-one-k0up798ebi.vercel.app/14.jpg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="ABC Pen-House Editorial Storytelling Showcase" />
        <meta name="twitter:image" content="https://portfolio-xi-one-k0up798ebi.vercel.app/14.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#fbfbf9] text-[#121212]">
        {children}
      </body>
    </html>
  );
}



