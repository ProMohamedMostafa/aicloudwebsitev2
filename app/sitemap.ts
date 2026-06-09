import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ai-cloud.sa";
  const lastModified = new Date();

  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/partners`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/portfolio`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/clean-tech`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.6 },
  ];
}
