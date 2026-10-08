import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = new URL(siteConfig.url);
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin", "/admin-login"],
      },
    ],
    sitemap: new URL("/sitemap.xml", baseUrl).toString(),
  };
}
