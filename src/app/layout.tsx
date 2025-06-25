import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const Baskerville = localFont({
  src: [
    {
      path: "./fonts/Basker-variable.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/Basker-italic.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-heading",
});


const avenirNext = localFont({
  src: [
    {
      path: "./fonts/AvenirLTProBook.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AvenirLTProMedium.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/AvenirLTProHeavy.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-avenir",
});

export const metadata: Metadata = {
  title: "Tabinda Hijab",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Baskerville.variable} ${avenirNext.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
