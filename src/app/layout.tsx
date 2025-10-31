import { SpeedInsights } from "@vercel/speed-insights/next"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BREAKING: Local Man Attempts To Run Far For Charity. Donate To Support.",
  description: "Jaynil is running the London and Sydney Marathons to raise money for Lupus UK in memory of Hiral Patel. Click to donate and find out more.",
  openGraph: {
    title: "BREAKING: Local Man Attempts To Run Far For Charity. Donate To Support.",
    description: "Jaynil is running the London and Sydney Marathons to raise money for Lupus UK in memory of Hiral Patel. Click to donate and find out more.",
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