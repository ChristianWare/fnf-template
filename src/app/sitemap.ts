import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";

// Replace with your real fetch (Sanity/Prisma/etc.)
async function getSlugs() {
  // Example: fetch published blog slugs
  // return await client.fetch<string[]>(`*[_type=="post" && defined(slug.current) && !(_id in path("drafts.**"))].slug.current`);
  return ["hello-world", "another-post"]; // placeholder
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const slugs = await getSlugs();

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const postEntries: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...postEntries];
}
