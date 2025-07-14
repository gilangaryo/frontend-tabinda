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
  title: "Tabinda Hijab",
  description:
    "Unveiling the Modest Muslim — Koleksi hijab dan abaya elegan dengan sentuhan etika dan nilai.",
  keywords: [
    "Hijab",
    "Abaya",
    "Busana Muslim",
    "Tabinda",
    "Fashion Muslimah",
    "Modest Fashion",
    "Syari",
    "Ethical Fashion",
    "Hijab Indonesia",
  ],
  creator: "Tabinda Team",
  publisher: "Tabinda Hijab",
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
