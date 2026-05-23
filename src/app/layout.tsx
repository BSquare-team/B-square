import "@/src/shared/styles/globals.css";
import {
  APP_NAME,
  APP_DESCRIPTION,
  APP_AUTHORS,
  APP_KEYWORDS,
  SERVER_URL,
} from "@/src/shared/lib/constants";
import { Metadata } from "next";
import Footer from "../shared/components/layout/Footer";
import Header from "../shared/components/layout/Header";

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
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`overflow-x-clip`}
      suppressContentEditableWarning
    >
      <body className="min-h-full flex flex-col relative overflow-x-clip">
        <Header />
        {children}
        <div
          className="bg-linear-to-r via-[#ee87cb] from-[#fff1be] to-[#b060ff] dark:bg-linear-to-r 
               dark:from-[#06b6d4] dark:via-[#3b82f6] dark:to-[#df10ff]  rounded-2xl h-44 w-80 absolute -top-20 -right-5 z-[-1] blur-[80px] dark:blur-[110px] "
        ></div>

        <Footer />
      </body>
    </html>
  );
}
