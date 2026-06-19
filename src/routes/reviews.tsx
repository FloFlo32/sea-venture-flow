import { createFileRoute, Link } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { reviews } from "@/lib/reviews";
import { ReviewCard } from "@/components/ReviewCard";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Aruba Bob" },
      { name: "description", content: "Read what travellers say about Aruba Bob — verified TripAdvisor and Google reviews." },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <div className="container-tight py-16 md:py-24">
      <header className="text-center max-w-2xl mx-auto">
        <p className="text-primary font-medium text-sm">Reviews</p>
        <h1 className="font-display font-bold text-4xl md:text-6xl mt-2">Loved by travellers</h1>
        <div className="mt-6 inline-flex items-center gap-3 surface-card px-5 py-3">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
          </div>
          <span className="font-semibold">5.0</span>
          <span className="text-muted-foreground text-sm">· 1,200+ verified reviews</span>
        </div>
      </header>
      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((r) => <ReviewCard key={r.name + r.date} review={r} />)}
      </div>
      <div className="mt-14 surface-card p-10 text-center">
        <h2 className="font-display font-bold text-2xl">Ready to make your own memories?</h2>
        <Link to="/tours" className="btn-ocean mt-6">Browse tours</Link>
      </div>
    </div>
  );
}
