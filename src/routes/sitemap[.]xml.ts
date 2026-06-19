import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { tours } from "@/lib/tours";
import { posts } from "@/lib/blog";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = ["/", "/tours", "/about", "/contact", "/faq", "/blog", "/reviews", "/book"];
        const tourPaths = tours.map((t) => `/tours/${t.slug}`);
        const blogPaths = posts.map((p) => `/blog/${p.slug}`);
        const all = [...staticPaths, ...tourPaths, ...blogPaths];
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...all.map((p) => `  <url><loc>${BASE_URL}${p}</loc></url>`),
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
