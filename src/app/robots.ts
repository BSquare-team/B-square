import { MetadataRoute } from "next";
import { SERVER_URL } from "@/src/shared/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin/",
    },
    sitemap: `${SERVER_URL}/sitemap.xml`,
  };
}
