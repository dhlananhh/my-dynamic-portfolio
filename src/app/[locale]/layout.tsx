import type { Metadata } from "next";
import { Lexend, Montserrat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type React from "react";
import "@/styles/globals.css"
import { Toaster as RadixToaster } from "@/components/ui/toaster";


// Fonts
const lexend = Lexend({
  subsets: [ "latin", "vietnamese" ],
  display: "swap",
  weight: [ "400", "500", "700" ],
  variable: "--font-lexend"
});

const montserrat = Montserrat({
  subsets: [ "latin", "vietnamese" ],
  display: "swap",
  weight: [ "400", "500", "700" ],
  variable: "--font-montserrat",
});


// Metadata của Next.js
export const metadata: Metadata = {
  title: "Lan Anh | Web Developer Portfolio",
  description: "A personal portfolio to showcase my skills and projects",
  metadataBase: new URL("https://dhlananh-dev-portfolio.vercel.app/"),
  icons: {
    icon: [
      { url: "../icon.svg", type: "image/svg+xml" },
      { url: "../favicon.ico", sizes: "any" },
    ],
    apple: "../apple-icon.png",
  },
  manifest: "../manifest.json",
  openGraph: {
    title: "Lan Anh | Web Developer Portfolio",
    description: "A personal portfolio to showcase my skills and projects",
    locale: "en_US",
    type: "website",
    url: "/",
    images: [
      {
        url: "https://dhlananh-dev-portfolio.vercel.app/api/og?title=Lan%20Anh&desc=Web%20Developer&cat=Portfolio",
        width: 1200,
        height: 630,
        alt: "Lan Anh OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lan Anh Portfolio",
    description: "Portfolio của Lan Anh - Web Developer",
    images: [
      "https://dhlananh-dev-portfolio.vercel.app/api/og?title=Lan%20Anh&desc=Web%20Developer&cat=Portfolio",
    ],
  },
};


export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  // Chọn font theo locale
  const fontClass =
    locale === "vi" ? montserrat.variable : lexend.variable;

  return (
    <html
      lang={locale}
      className="h-full scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={
          `${fontClass} 
          font-sans antialiased bg-gray-950 text-slate-200 overflow-x-hidden min-h-screen`
        }
      >
        <NextIntlClientProvider messages={messages}>
          <main className="grow">
            {children}
          </main>
          <RadixToaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
