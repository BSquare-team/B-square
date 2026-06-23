import "../app/globals.css";
import "../app/company-banner.css";
import {
  APP_NAME,
  APP_DESCRIPTION,
  APP_AUTHORS,
  APP_KEYWORDS,
  SERVER_URL,
} from "@/src/shared/lib/constants";
import { Metadata } from "next";

import localFont from "next/font/local";
import Header from "../shared/components/layout/Header";
import Footer from "../shared/components/layout/Footer";
import { ThemeProvider } from "next-themes";

import { Inter } from "next/font/google";
import { motion } from "motion/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // نام متغیر CSS
  display: "swap", // بهینه‌سازی نمایش فونت
});

export const metadata: Metadata = {
  metadataBase: new URL(SERVER_URL),
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  keywords: APP_KEYWORDS,
  authors: APP_AUTHORS,
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: APP_NAME,
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
     google: "mOxL19_SrPVqirVovRI_pCXfX9Pu5R_1xaKJjmVu5ZE",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`overflow-x-clip ${inter.variable}`}
      suppressContentEditableWarning
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col relative overflow-x-clip">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />

          <main className="flex-1 py-8">{children}</main>

          <div
            className="bg-linear-to-r via-[#ee87cb] from-[#fff1be] to-[#b060ff] dark:bg-linear-to-r 
               dark:from-[#06b6d4] dark:via-[#3b82f6] dark:to-[#df10ff]  rounded-2xl h-44 w-80 absolute -top-20 -right-5 z-[-1] blur-[80px] dark:blur-[110px] "
          ></div>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
