import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { tours, type TourCategory } from "@/lib/tours";
import { TourCard } from "@/components/TourCard";

export const Route = createFileRoute("/tours")({
  head: () => ({
    meta: [
      { title: "All Tours - Aruba Bob" },
      { name: "description", content: "Browse all snorkel, scuba and sea scooter tours offered by Aruba Bob in Aruba." },
    ],
  }),
  component: ToursPage,
});

const cats: { id: TourCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "snorkel", label: "Snorkel" },
  { id: "scuba", label: "Scuba" },
  { id: "cruise", label: "Cruise" },
  { id: "certification", label: "Certification" },
];

function ToursPage() {
  const [cat, setCat] = useState<TourCategory | "all">("all");
  const [sort, setSort] = useState<"popular" | "low" | "high">("popular");

  const list = useMemo(() => {
    let arr = cat === "all" ? tours : tours.filter((t) => t.category === cat);
    arr = [...arr];
    if (sort === "low") arr.sort((a, b) => a.price - b.price);
    if (sort === "high") arr.sort((a, b) => b.price - a.price);
    if (sort === "popular") arr.sort((a, b) => b.reviews - a.reviews);
    return arr;
  }, [cat, sort]);

  return (
    <div className="container-tight py-16 md:py-24">
      <header className="max-w-2xl">
        <p className="text-primary font-medium text-sm">Tours & Packages</p>
        <h1 className="font-display font-bold text-4xl md:text-6xl mt-2">Find your trip</h1>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Snorkel, scuba and sea scooter tours led by local Aruban guides. Pick a category, sort by price, and book in seconds.
        </p>
      </header>

      <div className="mt-10 flex flex-wrap items-center gap-3 justify-between">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                cat === c.id ? "bg-[var(--gradient-ocean)] text-white shadow-[var(--shadow-soft)]" : "bg-card border border-border hover:border-primary/50"
              }`}
              style={cat === c.id ? { background: "var(--gradient-ocean)" } : undefined}
            >
              {c.label}
            </button>
          ))}
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as typeof sort)}
          className="px-4 py-2 rounded-full text-sm font-medium bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
          <option value="popular">Most popular</option>
          <option value="low">Price: low to high</option>
          <option value="high">Price: high to low</option>
        </select>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((t) => <TourCard key={t.slug} tour={t} />)}
      </div>
    </div>
  );
}
