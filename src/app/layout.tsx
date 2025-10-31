import { SpeedInsights } from "@vercel/speed-insights/next"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BREAKING: Man Runs Far. Needs Donations To Justify It.",
  description: "next year i (jaynil) am running the marathon to raise money for lupus uk in memory of hiral patel (my mum). please click to donate, find out more, and keep up to date with how it goes.",
  openGraph: {
    title: "BREAKING: Man Runs Far. Needs Donations To Justify It.",
    description: "next year i (jaynil) am running the marathon to raise money for lupus uk in memory of hiral patel (my mum). please click to donate, find out more, and keep up to date with how it goes.",
    images: [
      {
        url: "https://www.jaynil.xyz/images/meme-min.png",
        width: 1200,
        height: 630,
      },
    ],
    url: "https://www.jaynil.xyz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}