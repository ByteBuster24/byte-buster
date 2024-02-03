import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://bytebuster.co.in/",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://bytebuster.co.in/about-us",
      lastModified: new Date(),
      priority: 0.8,
    },
    // {
    // url: "https://bytebuster.co.in/about-us",
    // lastModified: new Date(),
    // priority: 0.8,
    // },
  ];
}
