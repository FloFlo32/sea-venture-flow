import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, Star, Calendar, Check, X, Users, ArrowRight } from "lucide-react";
import { useState } from "react";
import { getTour, tours } from "@/lib/tours";

export const Route = createFileRoute("/tours/$slug")({
  loader: ({ params }) => {
    const tour = getTour(params.slug);
    if (!tour) throw notFound();
    return { tour };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.tour.title} — Aruba Bob` },
          { name: "description", content: loaderData.tour.shortDescription },
          { property: "og:title", content: loaderData.tour.title },
          { property: "og:description", content: loaderData.tour.shortDescription },
          { property: "og:image", content: loaderData.tour.image },
        ]
      : [],
  }),
  component: TourDetail,
  notFoundComponent: () => (
    <div className="container-tight py-24 text-center">
      <h1 className="font-display text-3xl">Tour not found</h1>
      <Link to="/tours" className="btn-ocean mt-6 inline-flex">All tours</Link>
    </div>
  ),
});

function TourDetail() {
  const { slug } = Route.useParams();
  const tour = getTour(slug)!;
  const [active, setActive] = useState(0);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [date, setDate] = useState("");
  const total = tour.price * adults + tour.price * 0.5 * children;
  const related = tours.filter((t) => t.slug !== tour.slug).slice(0, 3);

  return (
    <div className="pb-24">
      {/* Hero / gallery */}
      <div className="container-tight pt-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/tours" className="hover:text-primary">Tours</Link>
          <span>/</span>
          <span className="text-foreground">{tour.title}</span>
        </div>
        <div className="mt-6 grid lg:grid-cols-[1.6fr_1fr] gap-4">
          <div className="rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-[16/11]">
            <img src={tour.gallery[active]} alt={tour.title} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
            {tour.gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`rounded-2xl overflow-hidden aspect-[4/3] ring-2 transition ${active === i ? "ring-primary" : "ring-transparent hover:ring-primary/40"}`}
              >
                <img src={g} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container-tight mt-10 grid lg:grid-cols-[1fr_380px] gap-10">
        <div>
          <div className="flex items-center gap-3 text-sm">
            <span className="px-2.5 py-1 rounded-full bg-aqua text-ocean-deep font-medium capitalize">{tour.category}</span>
            <span className="flex items-center gap-1 text-muted-foreground"><Star className="w-4 h-4 fill-amber-400 text-amber-400" /> {tour.rating.toFixed(1)} ({tour.reviews} reviews)</span>
            <span className="flex items-center gap-1 text-muted-foreground"><Clock className="w-4 h-4" /> {tour.duration}</span>
          </div>
          <h1 className="font-display font-bold text-3xl md:text-5xl mt-4 leading-tight">{tour.title}</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{tour.longDescription}</p>

          <h2 className="font-display font-semibold text-2xl mt-12">Highlights</h2>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3">
            {tour.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-sm"><Check className="w-5 h-5 text-primary flex-shrink-0" /> {h}</li>
            ))}
          </ul>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="surface-card p-6">
              <h3 className="font-display font-semibold mb-4">What's included</h3>
              <ul className="space-y-2 text-sm">
                {tour.included.map((i) => (
                  <li key={i} className="flex gap-2"><Check className="w-4 h-4 text-primary mt-0.5" /> {i}</li>
                ))}
              </ul>
            </div>
            <div className="surface-card p-6">
              <h3 className="font-display font-semibold mb-4">Not included</h3>
              <ul className="space-y-2 text-sm">
                {tour.notIncluded.map((i) => (
                  <li key={i} className="flex gap-2 text-muted-foreground"><X className="w-4 h-4 text-destructive mt-0.5" /> {i}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 surface-card p-6">
            <div className="flex items-center gap-2 text-primary font-semibold"><Calendar className="w-5 h-5" /> Schedule</div>
            <div className="mt-2 text-muted-foreground">{tour.schedule}</div>
          </div>
        </div>

        {/* Sticky booking */}
        <aside className="lg:sticky lg:top-24 self-start">
          <div className="surface-card p-6">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-display font-bold text-primary">${tour.price}</span>
              <span className="text-sm text-muted-foreground">per adult</span>
            </div>
            <div className="mt-5 space-y-4">
              <label className="block">
                <span className="text-sm font-medium">Date</span>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="mt-1 w-full px-4 py-2.5 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </label>
              <Stepper label="Adults" value={adults} setValue={setAdults} min={1} />
              <Stepper label="Children (50% off)" value={children} setValue={setChildren} min={0} />
              <div className="border-t border-border pt-4 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total</span>
                <span className="font-display font-bold text-2xl">${total.toFixed(0)}</span>
              </div>
              <Link
                to="/book"
                search={{ tour: tour.slug, adults, children, date }}
                className="btn-ocean w-full"
              >
                Book Now <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-xs text-muted-foreground text-center">Free cancellation 24h before tour</p>
            </div>
          </div>
        </aside>
      </div>

      {/* Mobile sticky CTA */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-card border-t border-border p-3 flex items-center gap-3">
        <div>
          <div className="text-xs text-muted-foreground">From</div>
          <div className="font-display font-bold text-xl text-primary leading-none">${tour.price}</div>
        </div>
        <Link to="/book" search={{ tour: tour.slug }} className="btn-ocean flex-1">Book Now</Link>
      </div>

      {/* Related */}
      <section className="container-tight mt-20">
        <h2 className="font-display font-bold text-2xl md:text-3xl mb-8">You might also like</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((t) => (
            <Link key={t.slug} to="/tours/$slug" params={{ slug: t.slug }} className="card-tour group">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={t.image} alt={t.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold leading-snug group-hover:text-primary transition-colors">{t.title}</h3>
                <div className="mt-2 text-sm text-muted-foreground">{t.duration} · from ${t.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

function Stepper({ label, value, setValue, min }: { label: string; value: number; setValue: (v: number) => void; min: number }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-sm font-medium"><Users className="w-4 h-4 text-muted-foreground" /> {label}</div>
      <div className="flex items-center gap-2">
        <button type="button" onClick={() => setValue(Math.max(min, value - 1))} className="w-8 h-8 rounded-full border border-border hover:border-primary">−</button>
        <span className="w-6 text-center font-semibold">{value}</span>
        <button type="button" onClick={() => setValue(value + 1)} className="w-8 h-8 rounded-full border border-border hover:border-primary">+</button>
      </div>
    </div>
  );
}
