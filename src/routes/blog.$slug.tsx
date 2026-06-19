import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { getPost, posts } from "@/lib/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    if (!getPost(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const p = params?.slug ? getPost(params.slug) : undefined;
    if (!p) return {};
    return {
      meta: [
        { title: `${p.title} — Aruba Bob Blog` },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.excerpt },
        { property: "og:image", content: p.image },
      ],
    };
  },
  component: PostPage,
});

function PostPage() {
  const { slug } = Route.useParams();
  const post = getPost(slug)!;
  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  return (
    <article className="pb-24">
      <div className="container-tight pt-10">
        <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="w-4 h-4" /> All posts</Link>
      </div>
      <header className="container-tight mt-6 max-w-3xl">
        <div className="text-sm text-primary font-medium">{post.category} · {post.readTime} read</div>
        <h1 className="font-display font-bold text-4xl md:text-6xl mt-3 leading-tight">{post.title}</h1>
        <div className="mt-4 text-sm text-muted-foreground">{post.date}</div>
      </header>
      <div className="container-tight mt-10 max-w-4xl">
        <img src={post.image} alt={post.title} className="rounded-3xl aspect-[16/9] object-cover w-full" />
      </div>
      <div className="container-tight mt-12 max-w-3xl">
        <p className="text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
        <div className="mt-8 text-foreground leading-relaxed whitespace-pre-line">{post.body}</div>
      </div>
      <section className="container-tight mt-20 max-w-5xl">
        <h2 className="font-display font-bold text-2xl mb-8">Keep reading</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {more.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="card-tour group">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
