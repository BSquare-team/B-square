import AminPage from "@/src/features/team/components/singlePost/AminPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amin Bagheri | Frontend Developer & Video Editor",
  description:
    "Over 3 years of creative work, helping companies and creators strengthen their digital presence. Frontend Developer and Video Editor.",
  metadataBase: new URL("https://b-square.vercel.app"),
  openGraph: {
    title: "Amin Bagheri | Frontend Developer & Video Editor",
    description:
      "Over 3 years of creative work, helping companies and creators strengthen their digital presence.",
    url: "https://b-square.vercel.app/team/amin",
    type: "profile",
    firstName: "Amin",
    lastName: "Bagheri",
    images: [
      {
        url: "/images/mePic.jpg",
        width: 500,
        height: 500,
        alt: "Amin Bagheri - Frontend Developer & Video Editor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amin Bagheri | Frontend Developer & Video Editor",
    description:
      "Over 3 years of creative work, helping companies and creators strengthen their digital presence.",
    images: ["/images/mePic.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function page() {
  return (
    <>
      <AminPage />
    </>
  );
}
