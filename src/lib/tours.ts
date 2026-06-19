import snorkel from "@/assets/tour-snorkel.jpg";
import scuba from "@/assets/tour-scuba.jpg";
import dsd from "@/assets/tour-dsd.jpg";
import boat from "@/assets/tour-boat.jpg";
import night from "@/assets/tour-night.jpg";
import scooter from "@/assets/tour-scooter.jpg";

export type TourCategory = "snorkel" | "scuba" | "cruise";

export type Tour = {
  slug: string;
  title: string;
  category: TourCategory;
  duration: string;
  durationHours: number;
  price: number;
  rating: number;
  reviews: number;
  shortDescription: string;
  longDescription: string;
  highlights: string[];
  included: string[];
  notIncluded: string[];
  schedule: string;
  image: string;
  gallery: string[];
};

export const tours: Tour[] = [
  {
    slug: "sea-scooter-snorkel",
    title: "Sea Scooter Snorkel at Mangel Halto",
    category: "snorkel",
    duration: "3 hours",
    durationHours: 3,
    price: 99,
    rating: 5.0,
    reviews: 412,
    shortDescription:
      "Glide effortlessly over Aruba's most beautiful reef on a solar-powered sea scooter — the easy, fun way to snorkel.",
    longDescription:
      "Powered by our solar sea scooters, this tour takes the work out of snorkeling and leaves just the fun. Cruise over vibrant coral, swim with schools of tropical fish, and let our local Aruban guides show you the best of Mangel Halto. Perfect for families, couples and first-time snorkelers — small groups, friendly crew, unforgettable views.",
    highlights: [
      "Solar-powered DPV sea scooters",
      "Local Aruban guides",
      "Mangel Halto reef + small shipwreck",
      "Family friendly (ages 10+)",
    ],
    included: ["Sea scooter rental", "Mask, snorkel & fins", "Professional guide", "Photos & video emailed after"],
    notIncluded: ["Transportation to meeting point", "Gratuities"],
    schedule: "Daily, 9:00 AM & 1:00 PM",
    image: snorkel,
    gallery: [snorkel, scooter, boat],
  },
  {
    slug: "padi-discover-scuba-diving",
    title: "PADI Discover Scuba Diving (DSD)",
    category: "scuba",
    duration: "3.5 hours",
    durationHours: 3.5,
    price: 149,
    rating: 5.0,
    reviews: 287,
    shortDescription:
      "Try scuba diving for the first time — a safe, relaxed introduction with PADI-certified instructors at your pace.",
    longDescription:
      "We introduce snorkelers to scuba diving every day with our PADI Discover Scuba Diving program. If you have no previous scuba experience this is a safe and relaxed way to try Scuba Diving for the first time at your pace. Perhaps you will fall in love with scuba and want to get PADI Certified — we do that for you too!",
    highlights: [
      "No experience required",
      "PADI-certified instructors",
      "Calm, shallow training site",
      "Pathway to full PADI certification",
    ],
    included: ["All scuba gear", "PADI instructor", "Pool/shallow training", "Open water dive"],
    notIncluded: ["Transportation", "Gratuities"],
    schedule: "Daily, 8:30 AM",
    image: dsd,
    gallery: [dsd, scuba, boat],
  },
  {
    slug: "boat-dive",
    title: "Two-Tank Boat Dive — Antilla Wreck & Arashi Reef",
    category: "scuba",
    duration: "4 hours",
    durationHours: 4,
    price: 129,
    rating: 5.0,
    reviews: 198,
    shortDescription:
      "Two-tank boat dive at Aruba's iconic Antilla shipwreck and the colorful Arashi Reef. Certified divers only.",
    longDescription:
      "A two-tank boat dive with our crew at the Antilla wreck and Arashi Reef — absolutely breathtaking. Schools of fish, sea turtles, incredible reef life, and the kind of diving you dream about. Certified divers only.",
    highlights: ["Two dives in one trip", "Antilla shipwreck", "Arashi reef", "Small group, big personality"],
    included: ["Tanks & weights", "Dive guide", "Boat trip", "Drinks & snacks"],
    notIncluded: ["Personal dive gear (rental available)", "Transportation"],
    schedule: "Daily, 8:00 AM",
    image: scuba,
    gallery: [scuba, boat, scooter],
  },
  {
    slug: "vip-private-boat-dive",
    title: "VIP Private Boat Dive",
    category: "scuba",
    duration: "Half day",
    durationHours: 4,
    price: 599,
    rating: 5.0,
    reviews: 64,
    shortDescription:
      "Your own private dive boat, captain and divemaster. Pick your sites, your pace, your day on the water.",
    longDescription:
      "Want the boat to yourself? Our VIP private boat dive is the most flexible way to experience Aruba's underwater world. You and your group, your captain, and your divemaster — choose the dive sites and craft the perfect day on the Caribbean.",
    highlights: ["Private boat & crew", "Choose your dive sites", "Up to 6 guests", "Drinks & snacks aboard"],
    included: ["Private boat & crew", "Tanks & weights", "Drinks & light snacks"],
    notIncluded: ["Personal dive gear (rental available)"],
    schedule: "Book any day, any time",
    image: boat,
    gallery: [boat, scuba, scooter],
  },
  {
    slug: "night-dive",
    title: "Mangel Halto Night Dive",
    category: "scuba",
    duration: "2 hours",
    durationHours: 2,
    price: 119,
    rating: 5.0,
    reviews: 92,
    shortDescription:
      "Octopus, sleeping fish, lobsters, moray eels — a completely different underwater world after dark.",
    longDescription:
      "If you've never done a night dive, DO IT — and do it with Aruba Bob. Our night dive at Mangel Halto reveals octopus, sleeping fish, crabs, lobsters, moray eels and more. It feels like entering a completely different world. We take the time to make sure you're comfortable and confident before getting in.",
    highlights: ["Easy shore entry", "Dive lights provided", "Small group", "Magical marine life"],
    included: ["Tanks & weights", "Dive light", "Guide"],
    notIncluded: ["Personal dive gear", "Transportation"],
    schedule: "Tue · Thu · Sat, 6:30 PM",
    image: night,
    gallery: [night, scuba, scooter],
  },
  {
    slug: "padi-open-water",
    title: "PADI Open Water Certification",
    category: "scuba",
    duration: "3–4 days",
    durationHours: 24,
    price: 499,
    rating: 5.0,
    reviews: 71,
    shortDescription:
      "Become a certified diver with one of Aruba's most loved PADI dive teams. Suitable for ages 10+.",
    longDescription:
      "Get PADI Certified with the Aruba Bob crew. Energetic, encouraging, clear and genuinely caring instructors guide you through eLearning, confined-water and open-water dives. By the end, you'll be a certified Open Water Diver — ready to dive anywhere in the world.",
    highlights: ["Internationally recognized", "Junior & adult certifications", "Local Aruba dive sites", "All gear included"],
    included: ["PADI eLearning", "All scuba gear", "4 open water dives", "PADI certification card"],
    notIncluded: ["Transportation", "Gratuities"],
    schedule: "Start any day",
    image: scuba,
    gallery: [scuba, dsd, boat],
  },
];

export const getTour = (slug: string) => tours.find((t) => t.slug === slug);
