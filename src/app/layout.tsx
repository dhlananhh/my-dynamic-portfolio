import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Cascadia_Mono } from "next/font/google";
import type React from "react";
import "./globals.css"
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster as RadixToaster } from "@/components/ui/toaster";
import SplashCursor from "@/components/blocks/Animations/SplashCursor/SplashCursor";

// const inter = Inter({ subsets: [ "latin" ] });

const cascadia = Cascadia_Mono({
  subsets: [ "latin" ],
  display: 'swap',
  variable: '--font-cascadia-mono'
});

export const metadata: Metadata = {
  title: "Lan Anh | Web Developer Portfolio",
  description: "A personal portfolio to showcase my skills and projects",
  openGraph: {
    title: "Lan Anh | Web Developer Portfolio",
    description: "A personal portfolio to showcase my skills and projects",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={ `${cascadia.variable} font-sans antialiased flex flex-col min-h-screen bg-gray-950` }
      >
        <SplashCursor />
        <Navbar />
        <main className="flex-grow">
          { children }
        </main>
        <Footer />
        <RadixToaster />
      </body>
    </html>
  );
}
