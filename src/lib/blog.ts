import snorkel from "@/assets/tour-snorkel.jpg";
import scuba from "@/assets/tour-scuba.jpg";
import scooter from "@/assets/tour-scooter.jpg";
import night from "@/assets/tour-night.jpg";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  body: string;
};

export const posts: BlogPost[] = [
  {
    slug: "best-snorkel-spots-aruba",
    title: "The 5 Best Snorkel Spots in Aruba (From Locals Who Know)",
    excerpt:
      "Mangel Halto, Boca Catalina, Arashi: our crew shares the reefs we'd take our own families to.",
    date: "June 15, 2026",
    readTime: "6 min",
    category: "Destination Guides",
    image: snorkel,
    body: "Aruba is one of the easiest Caribbean islands to snorkel, with calm water, healthy reef and warm temperatures year-round. Our top pick is Mangel Halto for its mangroves and reef wall, followed by Boca Catalina for turtles, Arashi for the Antilla wreck, Baby Beach for a relaxed family swim, and Tres Trapi for guaranteed turtle sightings. Bring reef-safe sunscreen, a rash guard for sun protection, and consider a sea scooter, it makes covering the bigger reefs effortless.",
  },
  {
    slug: "first-time-scuba-tips",
    title: "First Time Trying Scuba? 7 Tips to Make It Amazing",
    excerpt: "Nervous about your first dive? Here's exactly what to expect and how to relax and enjoy it.",
    date: "May 28, 2026",
    readTime: "5 min",
    category: "Diving Guides",
    image: scuba,
    body: "Trying scuba for the first time is one of those bucket-list experiences that's far less scary than people imagine. Pick a calm shore-entry site, eat a light breakfast, and let your instructor know if you wear contacts. Equalize your ears early and often. Breathe slowly and steadily, it's the single biggest difference between feeling stressed and feeling free. Don't worry about perfect buoyancy on day one. Above all, have fun: PADI Discover Scuba is designed to be safe, relaxed and unforgettable.",
  },
  {
    slug: "what-is-a-sea-scooter",
    title: "What is a Sea Scooter (DPV) and Why Aruba's Solar Ones Are Different",
    excerpt: "Underwater scooters are the most fun you can have in the water. Here's how they work.",
    date: "May 12, 2026",
    readTime: "4 min",
    category: "Gear",
    image: scooter,
    body: "A DPV (Diver Propulsion Vehicle, also called a sea scooter) is a battery-powered handheld thruster that pulls you through the water. They turn snorkeling into flying. Our scooters are solar-powered, which means a smaller environmental footprint and longer days on the reef. They're easy to use, family friendly, and they take all the work out of swimming so you can focus on the fish.",
  },
  {
    slug: "night-dive-guide",
    title: "Your First Night Dive: What You'll See and How to Prep",
    excerpt: "Octopus, sleeping fish, lobsters and moray eels: the reef at night is a different planet.",
    date: "April 30, 2026",
    readTime: "5 min",
    category: "Diving Guides",
    image: night,
    body: "A night dive is one of the most rewarding experiences a diver can have. Marine life that hides during the day comes out at night: octopus crawl over coral, parrotfish sleep in mucus cocoons, lobsters and crabs roam openly. Bring a primary dive light, a backup light, and review hand signals with your buddy. Move slowly. Keep your light low and to the side of other divers. Trust your guide and breathe.",
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
