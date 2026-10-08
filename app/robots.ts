import type { MetadataRoute } from "next";
import { abs } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  // Preview deployments stay closed until ALLOW_INDEXING=true is set on the production domain.
  if (process.env.ALLOW_INDEXING !== "true") return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/multumim"] },
    sitemap: abs("/sitemap.xml"),
    host: abs("/"),
  };
}
