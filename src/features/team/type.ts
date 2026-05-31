import { StaticImageData } from "next/image";

export interface Member {
  name: string;
  role: string;
  image: StaticImageData; // تایپ مخصوص عکس‌های استاتیک نکست
  href: string;
}
