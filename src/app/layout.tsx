import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";

// Heading: Dit Magi
const ditMagi = localFont({
  src: "./fonts/Dit-Magi.otf",
  variable: "--font-heading",
  display: "swap",
});

// Body: Raleway
const raleway = localFont({
  src: [
    { path: "./fonts/Raleway.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Raleway-Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tabinda Fashion | Hijab, Abaya & Busana Muslim Premium Indonesia",
  description:
    "Tabinda Fashion — Temukan koleksi hijab, abaya, dan busana muslimah syar'i berkualitas premium. Elegan, nyaman, dan sesuai syariat. Modest fashion Indonesia untuk hijrah yang penuh cahaya dan berkah.",
  keywords: [
    "Hijab",
    "Abaya",
    "Busana Muslim",
    "Tabinda Fashion",
    "Fashion Muslimah",
    "Modest Fashion",
    "Hijab Syar'i",
    "Ethical Fashion",
    "Hijab Indonesia",
    "Baju Muslim Wanita",
    "Hijab Premium",
    "Abaya Indonesia",
    "Mukena Eksklusif",
    "Kerudung",
    "Hijab Modern",
    "Hijab Syari Modern",
    "Hijab Kekinian",
    "Desain Hijab",
    "Inspirasi Hijrah",
    "Muslimah Indonesia",
    "Toko Hijab Online",
    "Tabinda"
  ],
  creator: "Tabinda Fashion Team",
  publisher: "Tabinda Fashion",
  alternates: {
    canonical: "https://tabindafashion.com/",
    languages: {
      'id-ID': 'https://tabindafashion.com/'
    },
  },
  openGraph: {
    title: "Tabinda Fashion | Modest Fashion Indonesia",
    description: "Koleksi hijab & abaya syar'i premium, nyaman, dan elegan dari Tabinda Fashion. Temukan gaya berhijab yang penuh makna untuk muslimah modern.",
    url: "https://tabindafashion.com/",
    siteName: "Tabinda Fashion",
    images: [
      {
        url: "https://tabindafashion.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tabinda Fashion - Hijab & Abaya Modest Fashion Indonesia",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${ditMagi.variable} ${raleway.variable} antialiased`}>
        <Navbar />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
