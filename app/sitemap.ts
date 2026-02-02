import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = new URL(siteConfig.url);
  const routes = [
    "",
    "/services",
    "/why-us",
    "/our-work",
    "/pricing",
    "/resources",
    "/enterprise",
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: new URL(route, baseUrl).toString(),
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
