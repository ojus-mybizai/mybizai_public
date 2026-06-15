import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { features } from "@/lib/content/features";
import { useCases } from "@/lib/content/use-cases";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const statics = [
    { path: "", priority: 1.0 },
    { path: "/product", priority: 0.9 },
    { path: "/pricing", priority: 0.9 },
    { path: "/compare/meta-business-agent", priority: 0.9 },
    { path: "/demo", priority: 0.8 },
    { path: "/storefront", priority: 0.7 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.6 },
    { path: "/security", priority: 0.5 },
    { path: "/legal/privacy-policy", priority: 0.3 },
    { path: "/legal/terms", priority: 0.3 },
    { path: "/legal/refund-policy", priority: 0.3 },
    { path: "/legal/cookie-policy", priority: 0.3 },
  ];

  return [
    ...statics.map((s) => ({
      url: `${site.domain}${s.path}`,
      lastModified: now,
      priority: s.priority,
    })),
    ...features.map((f) => ({
      url: `${site.domain}/features/${f.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
    ...useCases.map((u) => ({
      url: `${site.domain}/for/${u.slug}`,
      lastModified: now,
      priority: 0.8,
    })),
  ];
}
