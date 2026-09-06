import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { services } from "@/lib/services";
import { getPosts, getCaseStudies, getPortfolioItems } from "@/lib/wordpress";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  // Static high-priority pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];

  // Service dynamic pages
  const serviceRoutes: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Fetch dynamic posts, case studies, and portfolio items safely
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const posts = await getPosts();
    blogRoutes = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));
  } catch {
    blogRoutes = [];
  }

  let caseStudyRoutes: MetadataRoute.Sitemap = [];
  try {
    const studies = await getCaseStudies();
    caseStudyRoutes = studies.map((study) => ({
      url: `${baseUrl}/case-studies/${study.slug}`,
      lastModified: study.date ? new Date(study.date) : now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));
  } catch {
    caseStudyRoutes = [];
  }

  let portfolioRoutes: MetadataRoute.Sitemap = [];
  try {
    const portfolioItems = await getPortfolioItems();
    portfolioRoutes = portfolioItems.map((item) => ({
      url: `${baseUrl}/portfolio/${item.slug}`,
      lastModified: item.date ? new Date(item.date) : now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));
  } catch {
    portfolioRoutes = [];
  }

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...blogRoutes,
    ...caseStudyRoutes,
    ...portfolioRoutes,
  ];
}

