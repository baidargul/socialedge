import type { Metadata } from "next";
import { Space_Grotesk, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Site/Header/Navbar";
import Footer from "@/components/Site/Footer/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SocialEdge Creative - Video Editing & Marketing",
  description:
    "SocialEdge Creative is a video editing and marketing partner for growth teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${fraunces.variable} w-full max-w-[1550px] select-none min-h-screen mx-auto tracking-tight antialiased font-sans text-slate-900`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
