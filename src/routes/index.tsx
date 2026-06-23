import { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Shield, Award, Users, Anchor, Star, ArrowRight, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import posterImg from "@/assets/aruba_14.jpg";
import aboutImg from "@/assets/about-team.jpg";
import bgVideo from "@/assets/BackgroundVid2.mov";
import { tours } from "@/lib/tours";
import { reviews } from "@/lib/reviews";
import { TourCard } from "@/components/TourCard";
import { ReviewCard } from "@/components/ReviewCard";
import { posts } from "@/lib/blog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aruba Bob - Snorkel, Scuba & Sea Scooter Tours" },
      { name: "description", content: "Adventure with the locals. Book snorkel, scuba and solar sea scooter tours in Aruba with PADI-certified guides." },
    ],
    links: [
      { rel: "preload", as: "image", href: posterImg, fetchpriority: "high" },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = tours;
  const reviewScrollRef = useRef<HTMLDivElement>(null);
  const scrollReviews = (dir: "left" | "right") => {
    reviewScrollRef.current?.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  };
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">

        {/* Poster image - shown instantly while video loads */}
        <img
          src={posterImg}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ zIndex: 1 }}
        >
          <source src={bgVideo} type="video/quicktime" />
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)", zIndex: 2 }}
        />

        {/* Hero content */}
        <div className="container-tight relative py-24 text-white" style={{ zIndex: 3 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/25 text-xs font-medium mb-6">
            <Anchor className="w-3.5 h-3.5" /> Adventure with the Locals
          </div>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-[1.05] max-w-3xl">
            Underwater adventure <span className="text-aqua">awaits</span>.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-xl leading-relaxed">
            Snorkel or scuba dive with an Aruban team committed to your best experience and safety -
            powered by solar sea scooters at the Caribbean's most beautiful beaches.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/book" className="btn-ocean text-base">Book a Tour <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/tours" className="btn-outline-ocean text-base !text-white !bg-white/10 !border-white/40 hover:!bg-white/20">
              Explore Trips
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm">
            {[
              { icon: Shield, label: "Safe Trips" },
              { icon: Award, label: "PADI Licensed" },
              { icon: Star, label: "Trusted Reviews" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-white/90">
                <b.icon className="w-4 h-4 text-aqua" /> {b.label}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5" style={{ zIndex: 3 }}>
          <span className="text-white/50 text-[10px] uppercase tracking-widest font-medium">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* FEATURED TOURS */}
      <section className="py-20 md:py-28">
        <div className="container-tight">
          <div className="mb-10">
            <p className="text-primary font-medium text-sm">All Adventures</p>
            <h2 className="font-display font-bold text-3xl md:text-5xl mt-2">Pick your adventure</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((t) => <TourCard key={t.slug} tour={t} />)}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container-tight grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-medium text-sm">About Aruba Bob</p>
            <h2 className="font-display font-bold text-3xl md:text-5xl mt-2 leading-tight">
              More than an adventure. <span className="text-primary">It's a way of life.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Welcome to Aruba Bob, where we specialize in unforgettable scuba diving and snorkeling
              tours. Immerse yourself in the vibrant world of underwater exploration as we guide you
              through the crystal-clear waters of Aruba. Powered by solar sea scooters, our tours
              offer more than just adventure - they embody a way of life.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you're a beginner eager to discover scuba diving or a seasoned enthusiast,
              our experienced guides ensure a safe and unforgettable experience.
            </p>
            <Link to="/about" className="btn-ocean mt-8">Learn More</Link>
          </div>
          <div className="relative">
            <img
              src={aboutImg}
              alt="The Aruba Bob crew"
              loading="lazy"
              width={1280}
              height={896}
              className="rounded-3xl shadow-[var(--shadow-lift)] aspect-[5/4] object-cover w-full"
            />
            <div className="absolute -bottom-6 -left-6 surface-card p-5 hidden md:block">
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>
              <div className="font-display font-bold text-2xl mt-1">5.0 / 5.0</div>
              <div className="text-xs text-muted-foreground">1,200+ TripAdvisor reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 md:py-28">
        <div className="container-tight">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-primary font-medium text-sm">Why Choose Us</p>
            <h2 className="font-display font-bold text-3xl md:text-5xl mt-2">The Aruba Bob difference</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Safe & Professional Guides", body: "PADI-certified instructors and local Aruban guides who prioritize safety on every trip." },
              { icon: MapPin, title: "Best Local Experience", body: "Born-and-raised guides who know every reef, wreck and hidden cove like the back of their hand." },
              { icon: Award, title: "Affordable Pricing", body: "Premium experiences at fair prices - no hidden fees, no upsells, just great diving." },
              { icon: Users, title: "Small Groups", body: "Intimate group sizes mean more personal attention, more fish, and a better experience." },
              { icon: Anchor, title: "Solar Sea Scooters", body: "Our solar-powered DPVs take the work out of snorkeling and leave just the fun." },
              { icon: Star, title: "Trusted Service", body: "Consistently rated 5 stars by guests across TripAdvisor and Google." },
            ].map((f) => (
              <div key={f.title} className="surface-card p-7">
                <div className="grid place-items-center w-12 h-12 rounded-2xl bg-aqua text-ocean-deep">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-semibold text-lg mt-4">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-28 bg-secondary/40 overflow-hidden">
        <div className="container-tight">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <p className="text-primary font-medium text-sm">Trusted Reviews</p>
              <h2 className="font-display font-bold text-3xl md:text-5xl mt-2">Loved by travellers</h2>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 18 18">
                    <circle cx="9" cy="9" r="8" fill="#00AF87" stroke="#00AF87" strokeWidth="1.5" />
                  </svg>
                ))}
              </div>
              <span className="font-semibold">5.0 on TripAdvisor</span>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Left arrow */}
            <button
              onClick={() => scrollReviews("left")}
              aria-label="Scroll reviews left"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-border/60 shadow-md grid place-items-center hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>

            {/* Scrollable track */}
            <div
              ref={reviewScrollRef}
              className="flex gap-5 overflow-x-auto px-14 pt-10 pb-3"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {reviews.map((r) => (
                <div key={r.name + r.date} className="flex-shrink-0 w-[270px]">
                  <ReviewCard review={r} />
                </div>
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={() => scrollReviews("right")}
              aria-label="Scroll reviews right"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-border/60 shadow-md grid place-items-center hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>

          <div className="mt-10 text-center">
            <Link to="/reviews" className="btn-outline-ocean">Read all reviews</Link>
          </div>
        </div>
      </section>

      {/* BLOG TEASE */}
      <section className="py-20 md:py-28">
        <div className="container-tight">
          <div className="flex items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-primary font-medium text-sm">From the Blog</p>
              <h2 className="font-display font-bold text-3xl md:text-5xl mt-2">Tips, guides & ocean stories</h2>
            </div>
            <Link to="/blog" className="text-primary font-semibold hidden sm:inline-flex items-center gap-1 hover:gap-2 transition-all">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {posts.slice(0, 3).map((p) => (
              <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="card-tour group">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <div className="text-xs text-primary font-medium">{p.category} · {p.readTime}</div>
                  <h3 className="font-display font-semibold mt-2 leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="container-tight pb-20">
        <div className="rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden" style={{ background: "var(--gradient-ocean)" }}>
          <div className="relative z-10">
            <h2 className="font-display font-bold text-3xl md:text-5xl">Book Your Adventure Today</h2>
            <p className="mt-4 text-white/90 max-w-xl mx-auto">
              Small groups, friendly local guides, and the best reefs in Aruba. Reserve your spot in 60 seconds.
            </p>
            <Link to="/book" className="btn-outline-ocean mt-8 !bg-white !text-ocean-deep">Book Now <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-aqua/30 blur-3xl" />
        </div>
      </section>
    </>
  );
}
