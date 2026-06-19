import { Star } from "lucide-react";
import type { Review } from "@/lib/reviews";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="surface-card p-6 flex flex-col h-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-muted"}`}
            />
          ))}
        </div>
        <span className="text-xs text-muted-foreground">{review.source}</span>
      </div>
      <h4 className="mt-3 font-display font-semibold leading-snug">{review.title}</h4>
      <p className="mt-2 text-sm text-muted-foreground line-clamp-6 flex-1">{review.body}</p>
      <div className="mt-4 pt-4 border-t border-border/60 flex justify-between text-xs">
        <span className="font-medium text-foreground">{review.name}</span>
        <span className="text-muted-foreground">{review.date}</span>
      </div>
    </article>
  );
}
