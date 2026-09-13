import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import CursorGlow from "@/components/CursorGlow";
import ThemeProvider from "@/components/ThemeProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Framify Digital Marketing | Graphic Design, Branding & Growth Systems - Kerala",
  description:
    "Framify is Kerala's premier digital marketing & branding agency based in Kottayam, Karukachal. We build high-converting growth systems, logos, reels, social media posters, and performance marketing.",
  keywords: [
    "Framify Digital Marketing",
    "Digital Marketing Kerala",
    "Graphic Design Kerala",
    "Branding Kottayam Karukachal",
    "Social Media Marketing",
    "Reels Production Kerala",
    "Logo Design Kerala",
    "Thumbnails",
    "Growth Systems",
  ],
  authors: [{ name: "Framify Digital Marketing" }],
  openGraph: {
    title: "Framify Digital Marketing | We Build Growth Systems",
    description:
      "Graphic Design, Branding, Reels, Social Media Posters, High-CTR Thumbnails & Performance Marketing in Kerala.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${mono.variable} dark`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-[#090a0f] text-slate-100 min-h-screen flex flex-col selection:bg-cyan-500 selection:text-slate-950">
        <ThemeProvider>
          <ScrollProgressBar />
          <CursorGlow />
          <SmoothScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}



