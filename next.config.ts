import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 80 , 100], // کیفیت‌های مجاز: ۷۵ (پیش‌فرض) و ۸۰ (دلخواه شما)
  },
};

export default nextConfig;
