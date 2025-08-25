import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import type React from "react";
import "../styles/globals.css"
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster as RadixToaster } from "@/components/ui/toaster";
import SplashCursor from "@/components/blocks/Animations/SplashCursor/SplashCursor";


const lexend = Lexend({
  subsets: [ "latin" ],
  display: "swap",
  weight: [ "400", "500", "700" ],
  variable: "--font-lexend"
});


export const metadata: Metadata = {
  title: "Lan Anh | Web Developer Portfolio",
  description: "A personal portfolio to showcase my skills and projects",
  icons: {
    icon: [
      { url: "./icon.svg", type: "image/svg+xml" },
      { url: "./favicon.ico", sizes: "any" },
    ],
    apple: "./apple-icon.png",
  },

  manifest: "./manifest.json",
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
        className={ `${lexend.variable} font-sans antialiased flex flex-col min-h-screen bg-[#030014]` }
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
