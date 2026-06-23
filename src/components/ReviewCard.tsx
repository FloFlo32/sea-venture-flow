import { useState } from "react";
import { Check } from "lucide-react";
import type { Review } from "@/lib/reviews";

function TripAdvisorOwl() {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="12" cy="12" r="12" fill="#00AF87" />
      {/* left eye */}
      <circle cx="8.5" cy="11" r="3.8" fill="white" />
      <circle cx="8.5" cy="11" r="2.4" fill="#1a1a1a" />
      <circle cx="9.3" cy="10.2" r="0.85" fill="white" />
      {/* right eye */}
      <circle cx="15.5" cy="11" r="3.8" fill="white" />
      <circle cx="15.5" cy="11" r="2.4" fill="#1a1a1a" />
      <circle cx="16.3" cy="10.2" r="0.85" fill="white" />
      {/* beak */}
      <path d="M10.5 14.2 Q12 16.2 13.5 14.2 Q12 13.4 10.5 14.2Z" fill="#f59e0b" />
    </svg>
  );
}

function TAStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="17" height="17" viewBox="0 0 17 17">
          <circle
            cx="8.5"
            cy="8.5"
            r="7.5"
            fill={i < rating ? "#00AF87" : "none"}
            stroke="#00AF87"
            strokeWidth="1.5"
          />
        </svg>
      ))}
    </div>
  );
}

const AVATAR_STOPS: [string, string][] = [
  ["#06b6d4", "#0891b2"],
  ["#8b5cf6", "#7c3aed"],
  ["#10b981", "#059669"],
  ["#f59e0b", "#d97706"],
  ["#3b82f6", "#2563eb"],
  ["#ec4899", "#db2777"],
  ["#ef4444", "#dc2626"],
];

function avatarGradient(name: string) {
  const [a, b] = AVATAR_STOPS[name.charCodeAt(0) % AVATAR_STOPS.length];
  return `linear-gradient(135deg, ${a}, ${b})`;
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const truncate = review.body.length > 130;

  return (
    <article className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.09)] p-6 pt-14 flex flex-col items-center text-center relative">
      {/* Avatar */}
      <div
        className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full shadow-md flex items-center justify-center text-white font-bold text-lg select-none"
        style={{ background: avatarGradient(review.name) }}
      >
        {initials(review.name)}
        {/* TripAdvisor badge */}
        <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full border-2 border-white overflow-hidden shadow-sm">
          <TripAdvisorOwl />
        </div>
      </div>

      <div className="font-bold text-[15px] text-foreground leading-tight">{review.name}</div>
      <div className="text-xs text-muted-foreground mt-0.5">{review.timeAgo ?? review.date}</div>

      <div className="flex items-center gap-2 mt-2.5">
        <TAStars rating={review.rating} />
        <div className="w-5 h-5 rounded-full bg-blue-500 grid place-items-center flex-shrink-0">
          <Check className="w-3 h-3 text-white" strokeWidth={3} />
        </div>
      </div>

      <p
        className={`mt-3 text-sm text-muted-foreground leading-relaxed ${
          !expanded && truncate ? "line-clamp-4" : ""
        }`}
      >
        {review.body}
      </p>

      {truncate && (
        <button
          onClick={() => setExpanded((e) => !e)}
          className="mt-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      )}
    </article>
  );
}
