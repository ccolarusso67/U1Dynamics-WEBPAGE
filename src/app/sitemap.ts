import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://u1dynamics.com";
  const today = new Date().toISOString().split("T")[0];

  const pages: MetadataRoute.Sitemap = [
    { url: baseUrl, priority: 1.0, changeFrequency: "monthly" },
    { url: `${baseUrl}/contact`, priority: 0.9, changeFrequency: "yearly" },
    { url: `${baseUrl}/products`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${baseUrl}/diesel-exhaust-fluid-manufacturer`, priority: 0.95, changeFrequency: "monthly" },
    { url: `${baseUrl}/contract-lubricant-manufacturing`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${baseUrl}/private-label-lubricants`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${baseUrl}/coolant-antifreeze-manufacturer`, priority: 0.85, changeFrequency: "monthly" },
    { url: `${baseUrl}/toll-blending-lubricants`, priority: 0.85, changeFrequency: "monthly" },
    { url: `${baseUrl}/industrial-fluid-manufacturing`, priority: 0.85, changeFrequency: "monthly" },
    { url: `${baseUrl}/lubricant-contract-packaging`, priority: 0.85, changeFrequency: "monthly" },
    { url: `${baseUrl}/manufacturing-capabilities`, priority: 0.85, changeFrequency: "monthly" },
    { url: `${baseUrl}/packaging-formats`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/quality-compliance`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/export-logistics`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/houston-texas-facility`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${baseUrl}/technical-documents`, priority: 0.7, changeFrequency: "monthly" },
  ];

  return pages.map((p) => ({ ...p, lastModified: today }));
}
