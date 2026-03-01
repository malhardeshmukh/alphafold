import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProteoStruct | AI-driven Macromolecular Structure Prediction",
  description: "Democratizing access to AI-driven protein modeling, accelerating breakthroughs in molecular biology and targeted therapeutics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <div className="fixed inset-0 z-[-1] bg-obsidian bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-biocyan/10 via-obsidian to-bioviolet/10"></div>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
