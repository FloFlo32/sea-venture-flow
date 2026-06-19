import { Link } from "@tanstack/react-router";
import { Clock, Star } from "lucide-react";
import type { Tour } from "@/lib/tours";

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      to="/tours/$slug"
      params={{ slug: tour.slug }}
      className="card-tour group flex flex-col"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 text-xs">
          <span className="px-2.5 py-1 rounded-full bg-aqua text-ocean-deep font-medium capitalize">
            {tour.category}
          </span>
          <span className="flex items-center gap-1 text-muted-foreground">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            {tour.rating.toFixed(1)} ({tour.reviews})
          </span>
        </div>
        <h3 className="mt-3 font-display font-semibold text-lg leading-snug text-foreground group-hover:text-primary transition-colors">
          {tour.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{tour.shortDescription}</p>
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-border/60">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" /> {tour.duration}
          </div>
          <div className="text-right">
            <div className="text-xs text-muted-foreground">from</div>
            <div className="font-display font-bold text-primary text-lg leading-none">
              ${tour.price}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
