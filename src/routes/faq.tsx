import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Aruba Bob" },
      { name: "description", content: "Frequently asked questions about Aruba Bob's snorkel, scuba and sea scooter tours." },
    ],
  }),
  component: FAQPage,
});

const faqs = [
  { q: "Do I need experience to snorkel or dive with you?", a: "Not at all. Most of our snorkelers are first-timers, and our PADI Discover Scuba Diving program is designed specifically for beginners with no previous experience." },
  { q: "What ages can join your tours?", a: "Most snorkel tours are suitable from age 10. Junior PADI certifications start at age 10. For private trips, we accommodate all ages — just ask." },
  { q: "What are the sea scooters?", a: "DPVs — Diver Propulsion Vehicles — are battery-powered handheld thrusters that pull you through the water. Ours are solar-powered, family-friendly, and make snorkeling effortless." },
  { q: "What's included in the tour price?", a: "All tours include guides, gear (mask, snorkel, fins or scuba equipment), the sea scooter where applicable, and post-tour photos/video by email." },
  { q: "Is transportation provided?", a: "Transportation to the meeting point is not included, but we'll send detailed directions and offer suggestions. Many guests come by rental car or taxi." },
  { q: "What's your cancellation policy?", a: "Free cancellation up to 24 hours before your tour. Weather-related cancellations are always rescheduled or fully refunded." },
  { q: "Can I get PADI certified in Aruba?", a: "Yes! We offer PADI Open Water and Junior Open Water certifications. Most students complete the course in 3–4 days while on vacation." },
  { q: "Do you do private/VIP boat dives?", a: "Yes — our VIP private boat dive is the most flexible way to dive Aruba. You choose the dive sites, the pace, and who's on the boat." },
];

function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="container-tight py-16 md:py-24 max-w-3xl">
      <header>
        <p className="text-primary font-medium text-sm">Help Center</p>
        <h1 className="font-display font-bold text-4xl md:text-6xl mt-2">FAQ</h1>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Everything you need to know before booking. Don't see your question? <a href="/contact" className="text-primary font-medium">Contact us</a>.
        </p>
      </header>
      <div className="mt-12 space-y-3">
        {faqs.map((f, i) => (
          <div key={f.q} className="surface-card overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
            >
              <span className="font-display font-semibold">{f.q}</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${open === i ? "rotate-180" : ""} text-primary`} />
            </button>
            {open === i && <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{f.a}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}
