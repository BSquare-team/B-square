import "@/styles/globals.css";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/constants";
import { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import localFont from 'next/font/local'

// فونت هدینگ
const hankenGrotesk = localFont({
  src: '../public/font/hanken-grotesk-latin-wght-normal.0zrhm0yfqw_5l.woff2',
  variable: '--font-heading',
  display: 'swap',
})

// فونت متن
const inter = localFont({
  src: '../public/font/inter-latin-wght-normal.055ydel_y7o6i.woff2',
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: { template: `%s | Prostore`, default: `${APP_NAME}` },
  description: `${APP_DESCRIPTION}`,
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${inter.variable}`}
      suppressContentEditableWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
