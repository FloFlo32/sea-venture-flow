import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Shield, Heart, Award } from "lucide-react";
import about from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Aruba Bob - Adventure with the Locals" },
      { name: "description", content: "Aruba Bob is an Aruban-led snorkel and scuba team committed to your best experience and safety." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pb-24">
      <section className="container-tight pt-16 md:pt-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-medium text-sm">About Us</p>
            <h1 className="font-display font-bold text-4xl md:text-6xl mt-2 leading-tight">
              More than an adventure. <span className="text-primary">It's a way of life.</span>
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Welcome to Aruba Bob, where we specialize in unforgettable scuba diving and snorkeling
              tours. Immerse yourself in the vibrant world of underwater exploration as we guide you
              through the crystal-clear waters of Aruba. Powered by solar sea scooters, our tours
              offer more than just adventure - they embody a way of life.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you're a beginner eager to discover scuba diving or a seasoned enthusiast,
              our experienced guides ensure a safe and unforgettable experience. Dive into
              crystal-clear waters and discover the beauty of colorful coral reefs teeming with
              marine life. Join us and embark on an exploration that transcends mere adventure;
              it becomes a lifelong passion.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed font-medium text-foreground">
              Dive deep, explore, and embrace the magic of the ocean with us.
            </p>
          </div>
          <img src={about} alt="The Aruba Bob crew" loading="lazy" className="rounded-3xl shadow-[var(--shadow-lift)] aspect-[5/4] object-cover w-full" />
        </div>
      </section>

      <section className="container-tight mt-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Star, k: "5.0", v: "TripAdvisor rating" },
            { icon: Heart, k: "1,200+", v: "Happy guests" },
            { icon: Award, k: "PADI", v: "Certified team" },
            { icon: Shield, k: "100%", v: "Safety record" },
          ].map((s) => (
            <div key={s.v} className="surface-card p-6 text-center">
              <s.icon className="w-6 h-6 text-primary mx-auto" />
              <div className="font-display font-bold text-3xl mt-3">{s.k}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-tight mt-24 max-w-3xl">
        <h2 className="font-display font-bold text-3xl md:text-4xl">Diving Paradise</h2>
        <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
          <p>You will never forget your underwater experience at the most beautiful beaches in the Caribbean.</p>
          <p>Snorkel or scuba dive with an Aruban team that is committed to your best experience and safety.</p>
          <p>We introduce snorkelers to scuba diving every day with our PADI Discover Scuba Dive! If you have no previous scuba experience this is a safe and relaxed way to try Scuba Diving for the first time at your pace.</p>
          <p>Perhaps you will fall in love with scuba and want to get PADI Certified… we do that for you too!</p>
        </div>
        <Link to="/tours" className="btn-ocean mt-10">See our tours</Link>
      </section>
    </div>
  );
}
