import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://u1dynamics.com";

  return [
    { url: baseUrl, lastModified: "2025-03-13", changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/products`, lastModified: "2025-03-13", changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: "2025-03-13", changeFrequency: "yearly", priority: 0.8 },
  ];
}
