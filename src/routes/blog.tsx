import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { posts } from "@/lib/blog";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Aruba Bob" },
      { name: "description", content: "Travel tips, diving guides and ocean stories from the Aruba Bob crew." },
    ],
  }),
  component: BlogLayout,
});

function BlogLayout() {
  const matches = useMatches();
  const isLeaf = matches.some((m) => m.routeId === "/blog/$slug");
  if (isLeaf) return <Outlet />;
  return (
    <div className="container-tight py-16 md:py-24">
      <header className="max-w-2xl">
        <p className="text-primary font-medium text-sm">Blog</p>
        <h1 className="font-display font-bold text-4xl md:text-6xl mt-2">Tips, guides & ocean stories</h1>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Snorkel and dive guides, destination tips, and stories from the Aruba Bob crew.
        </p>
      </header>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="card-tour group flex flex-col">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="text-xs text-primary font-medium">{p.category} · {p.readTime}</div>
              <h2 className="font-display font-semibold text-lg leading-snug mt-2 group-hover:text-primary transition-colors">{p.title}</h2>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-3 flex-1">{p.excerpt}</p>
              <div className="mt-4 text-xs text-muted-foreground">{p.date}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
