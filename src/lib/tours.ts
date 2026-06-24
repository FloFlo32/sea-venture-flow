import snorkel from "@/assets/tour-snorkel.jpg";
import scuba from "@/assets/tour-scuba.jpg";
import dsd from "@/assets/tour-dsd.jpg";
import boat from "@/assets/tour-boat.jpg";
import night from "@/assets/tour-night.jpg";
import scooter from "@/assets/tour-scooter.jpg";
import ab01_04 from "@/assets/Arubabob01_04.jpg";
import ab01_05 from "@/assets/Arubabob01_05.jpeg";
import ab01_06 from "@/assets/Arubabob01_06.jpg";
import ab01_07 from "@/assets/Arubabob01_07.jpeg";
import ab01_08 from "@/assets/Arubabob01_08.jpg";
import ab01_10 from "@/assets/Arubabob01_10.jpeg";
import ab01_12 from "@/assets/Arubabob01_12.jpeg";
import ab01_13 from "@/assets/Arubabob01_13.jpeg";
import ab01_14 from "@/assets/Arubabob01_14.jpeg";
import ab02_01 from "@/assets/Arubabob02_01.jpg";
import ab02_02 from "@/assets/Arubabob02_02.jpg";
import ab02_03 from "@/assets/Arubabob02_03.jpg";
import ab02_04 from "@/assets/Arubabob02_04.jpg";
import ab02_05 from "@/assets/Arubabob02_05.jpg";
import ab02_07 from "@/assets/Arubabob02_07.jpeg";
import ab02_08 from "@/assets/Arubabob02_08.jpg";
import ab02_09 from "@/assets/Arubabob02_09.jpg";
import ab02_10 from "@/assets/Arubabob02_10.jpeg";
import ab02_13 from "@/assets/Arubabob02_13.jpeg";
import aruba14 from "@/assets/aruba_14.jpg";

export type TourCategory = "snorkel" | "scuba" | "cruise" | "certification";

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
    slug: "private-snorkeling-tour",
    title: "Private Snorkeling Tour",
    category: "snorkel",
    duration: "2.5–3 hours",
    durationHours: 3,
    price: 120,
    rating: 5.0,
    reviews: 412,
    shortDescription:
      "A fully private snorkeling experience at Mangel Halto: sea scooter, all gear, 100+ photos, and your own personal guide.",
    longDescription:
      "Enjoy a fully private snorkeling tour at beautiful Mangel Halto. Glide over vibrant coral reefs on a solar-powered sea scooter with your personal Aruban guide. All gear is provided and you'll leave with over 100 professional photographs of your adventure. Perfect for couples, families, or anyone who wants the reef all to themselves. Alternative locations (Tres Trapi, Boca Catalina, Arashi) available at $150. Just email us.",
    highlights: [
      "Completely private, just your group",
      "Solar-powered sea scooter included",
      "Over 100 professional photos",
      "Alternative locations available",
    ],
    included: ["Sea scooter", "Mask, snorkel, wetsuit, boots & fins", "Professional guide", "100+ photographs"],
    notIncluded: ["Transportation to meeting point", "Gratuities"],
    schedule: "Daily. Contact us to book your time.",
    image: snorkel,
    gallery: [snorkel, ab01_06, ab02_03],
  },
  {
    slug: "group-snorkel-tour",
    title: "Group Snorkel Tour",
    category: "snorkel",
    duration: "2.5–3 hours",
    durationHours: 3,
    price: 100,
    rating: 5.0,
    reviews: 387,
    shortDescription:
      "Snorkel over Aruba's most beautiful reef at Mangel Halto on a solar sea scooter, all gear and 100+ photos included.",
    longDescription:
      "Join our group snorkel tour at Mangel Halto, one of Aruba's most stunning snorkel spots. Powered by solar sea scooters, you'll effortlessly glide over colorful coral reefs teeming with tropical fish. Our trained local guides lead the way, and you'll leave with over 100 professional photographs of your underwater adventure. Minimum age 10 years old.",
    highlights: [
      "Solar-powered sea scooter",
      "Mangel Halto reef",
      "Over 100 professional photographs",
      "Friendly local guides",
    ],
    included: ["Sea scooter", "Mask, snorkel, wetsuit, boots & fins", "Trained staff guidance", "100+ photographs"],
    notIncluded: ["Transportation to meeting point", "Gratuities"],
    schedule: "Daily, 9:00 AM & 1:00 PM",
    image: ab01_05,
    gallery: [ab01_05, snorkel, ab01_08],
  },
  {
    slug: "sunset-night-snorkel",
    title: "Sunset Into Night Snorkel",
    category: "snorkel",
    duration: "2.5–3 hours",
    durationHours: 3,
    price: 120,
    rating: 5.0,
    reviews: 214,
    shortDescription:
      "Watch the sun dip below the horizon then snorkel Mangel Halto after dark, sea scooter and underwater flashlight included.",
    longDescription:
      "Start at sunset and snorkel into the night at magical Mangel Halto. This unique tour begins as golden light fades over the Caribbean and continues as the reef transforms under the beam of your underwater flashlight. Sea scooters, all gear, and an expert guide make this an unforgettable twilight experience unlike anything else in Aruba.",
    highlights: [
      "Sunset & night snorkeling combined",
      "Solar-powered sea scooter",
      "Underwater flashlight provided",
      "Magical twilight reef experience",
    ],
    included: ["Sea scooter", "Underwater flashlight", "Mask, snorkel, wetsuit, boots & fins", "Professional guide"],
    notIncluded: ["Transportation to meeting point", "Gratuities"],
    schedule: "Evening departures. Contact us for times.",
    image: aruba14,
    gallery: [aruba14, night, ab01_04],
  },
  {
    slug: "padi-discover-scuba-diving",
    title: "PADI Discover Scuba Diving (DSD)",
    category: "scuba",
    duration: "~2 hours",
    durationHours: 2,
    price: 120,
    rating: 5.0,
    reviews: 287,
    shortDescription:
      "Try scuba diving for the first time: a safe, relaxed introduction with PADI-certified instructors, no experience needed.",
    longDescription:
      "We introduce snorkelers to scuba diving every day with our PADI Discover Scuba Diving program. No previous scuba experience is needed. This is a safe and relaxed way to try scuba diving for the first time at your own pace. Our certified instructors walk you through the basics, gear, and safety before your first underwater breath. Perhaps you'll fall in love with scuba and want to get PADI Certified, we do that too! Note: wait at least 24 hours after diving before flying.",
    highlights: [
      "No prior experience required",
      "PADI-certified instructors",
      "Full briefing and gear orientation",
      "Pathway to PADI certification",
    ],
    included: [
      "Professional instruction",
      "Complete gear (mask, snorkel, wetsuit, boots, fins, BCD, regulator, tank, weights)",
      "Photos & videos",
    ],
    notIncluded: ["Transportation", "Gratuities"],
    schedule: "Daily, 8:30 AM",
    image: dsd,
    gallery: [dsd, ab01_07, ab02_04],
  },
  {
    slug: "shore-dive",
    title: "Shore Dive",
    category: "scuba",
    duration: "2.5–3 hours",
    durationHours: 3,
    price: 100,
    rating: 5.0,
    reviews: 176,
    shortDescription:
      "A guided shore dive with full equipment, a professional dive leader, and your choice of dive location, single or double tank.",
    longDescription:
      "Our shore dive puts you in the water with a professional dive leader and complete equipment at a location customized to your experience level and interests. Choose a single tank ($100) or double tank ($160) option. Photography and video services are available, and our guides know the best local sites for marine life, wrecks, and coral. Certified divers only.",
    highlights: [
      "Customizable dive location",
      "Single or double tank option",
      "Professional dive leader",
      "Photography & video available",
    ],
    included: [
      "Professional dive leader",
      "Complete equipment (mask, snorkel, wetsuit, boots, fins, BCD, regulator, tank, weights)",
      "Photography/video services",
    ],
    notIncluded: ["Transportation", "Gratuities"],
    schedule: "Daily. Contact us to schedule.",
    image: scuba,
    gallery: [scuba, ab02_02, ab01_10],
  },
  {
    slug: "night-dive",
    title: "Night Dive",
    category: "scuba",
    duration: "2.5–3 hours",
    durationHours: 3,
    price: 100,
    rating: 5.0,
    reviews: 92,
    shortDescription:
      "Octopus, lobsters, moray eels, sleeping fish, a completely different underwater world comes alive after dark.",
    longDescription:
      "If you've never done a night dive, do it, and do it with Aruba Bob. Our night dive at Mangel Halto reveals octopus, sleeping fish, crabs, lobsters, moray eels and so much more. It feels like entering a completely different world. We take the time to make sure you're comfortable and confident before getting in. One tank shore dive with all diving equipment and a professional dive leader included. Certified divers only.",
    highlights: [
      "Incredible nocturnal marine life",
      "Dive flashlight included",
      "Easy shore entry",
      "Small group, big atmosphere",
    ],
    included: [
      "1 tank shore dive",
      "Flashlight",
      "Complete equipment (mask, snorkel, wetsuit, boots, fins, BCD, regulator, tank, weights)",
      "Professional dive leader",
    ],
    notIncluded: ["Transportation", "Gratuities"],
    schedule: "Tue · Thu · Sat, 6:30 PM",
    image: night,
    gallery: [night, ab02_07, ab02_10],
  },
  {
    slug: "guided-boat-dive",
    title: "Guided Boat Dive",
    category: "scuba",
    duration: "3.5–4 hours",
    durationHours: 4,
    price: 190,
    rating: 5.0,
    reviews: 198,
    shortDescription:
      "Certified divers explore Aruba's best dive sites by boat with a professional dive leader, all gear, drinks and snacks included.",
    longDescription:
      "Jump aboard for a guided boat dive to Aruba's most spectacular underwater sites. Ideal for newly certified and experienced certified divers, this tour pairs you with a professional dive leader who selects the best sites for conditions and marine life. All diving equipment, beverages, snacks, and professional photography are included. Dive sites are customizable. Arrange through the shop or via email.",
    highlights: [
      "Best Aruba dive sites by boat",
      "For certified divers of all levels",
      "Beverages & snacks included",
      "Professional photos & video",
    ],
    included: [
      "Complete diving equipment (tank, regulator, BCD, weights)",
      "Beverages & snacks",
      "Professional dive leader",
      "Photography & videography",
    ],
    notIncluded: ["Transportation to dock", "Gratuities"],
    schedule: "Daily, 8:00 AM",
    image: boat,
    gallery: [boat, ab02_08, ab02_09],
  },
  {
    slug: "vip-boat-dive",
    title: "VIP Boat Dive",
    category: "scuba",
    duration: "3.5–4 hours",
    durationHours: 4,
    price: 250,
    rating: 5.0,
    reviews: 64,
    shortDescription:
      "Two-tank boat dive at thoughtfully selected Aruba sites, premium service, full gear, drinks, snacks and photo/video included.",
    longDescription:
      "The VIP Boat Dive is the ultimate two-tank diving experience in Aruba. Our team selects the finest dive sites and pairs you with an expert dive leader for deeper ocean exploration. All equipment, beverages, snacks, and photo/video services are included. Dive sites are discussed and arranged with the shop or via email to match your experience and wish list. Certified divers only.",
    highlights: [
      "Two-tank dive experience",
      "Premium handpicked dive sites",
      "Full equipment included",
      "Photo & video documentation",
    ],
    included: [
      "Two-tank dive",
      "Complete equipment (mask, snorkel, wetsuit, boots, fins, BCD, regulator, tanks, weights)",
      "Beverages & snacks",
      "Professional dive leader",
      "Photo & video services",
    ],
    notIncluded: ["Transportation to dock", "Gratuities"],
    schedule: "Book any day. Contact us.",
    image: ab01_12,
    gallery: [ab01_12, boat, ab02_04],
  },
  {
    slug: "sea-glass-adventure",
    title: "Sea Glass Adventure",
    category: "cruise",
    duration: "~2 hours",
    durationHours: 2,
    price: 60,
    rating: 5.0,
    reviews: 143,
    shortDescription:
      "Scenic boat ride to Sea Glass Island, shoreline exploration for sea glass, and snorkeling at Isla de Oro, all in one trip.",
    longDescription:
      "Set sail on a scenic boat ride to Sea Glass Island and spend time exploring the shoreline hunting for naturally polished sea glass, a unique Aruba keepsake. Then snorkel the crystal waters of Isla de Oro, where colorful coral reefs, tropical fish and fascinating marine species await. A relaxed, fun adventure for all ages.",
    highlights: [
      "Boat ride to Sea Glass Island",
      "Shoreline sea glass hunting",
      "Snorkeling at Isla de Oro",
      "Coral reefs & tropical fish",
    ],
    included: ["Scenic boat ride", "Sea glass exploration", "Snorkeling at Isla de Oro", "Guide"],
    notIncluded: ["Snorkel gear (available on request)", "Transportation", "Gratuities"],
    schedule: "Daily. Contact us to book.",
    image: ab01_13,
    gallery: [ab01_13, ab02_03, ab02_13],
  },
  {
    slug: "dpv-diving",
    title: "DPV Diving",
    category: "scuba",
    duration: "2.5–3 hours",
    durationHours: 3,
    price: 120,
    rating: 5.0,
    reviews: 118,
    shortDescription:
      "Dive with a DPV sea scooter and cover more reef in less time, 1 or 2 tank options, full gear and photos included.",
    longDescription:
      "Take your dive to the next level with a Diver Propulsion Vehicle (DPV) sea scooter. Cover more ground, reach more sites, and experience the reef from a completely different angle. Choose a 1-tank ($120) or 2-tank ($200) dive. All equipment, including the DPV, complete dive gear, and photo/video services, is included along with a professional dive leader. Personalized service throughout. Certified divers only.",
    highlights: [
      "DPV sea scooter powered diving",
      "1 or 2 tank options",
      "Cover more reef in less time",
      "Photos & video included",
    ],
    included: [
      "DPV sea scooter",
      "Complete gear (mask, snorkel, wetsuit, boots, fins, BCD, regulator, tank, weights)",
      "Professional dive leader",
      "Photos & videos",
    ],
    notIncluded: ["Transportation", "Gratuities"],
    schedule: "Daily. Contact us to schedule.",
    image: scooter,
    gallery: [scooter, ab02_01, ab01_06],
  },
  {
    slug: "padi-certification",
    title: "PADI Certification",
    category: "certification",
    duration: "4–5 days",
    durationHours: 40,
    price: 490,
    rating: 5.0,
    reviews: 71,
    shortDescription:
      "Get PADI certified in Aruba: Open Water, Advanced, Rescue or Dive Master courses with experienced local instructors.",
    longDescription:
      "Become a PADI-certified diver with the Aruba Bob team. We offer Open Water ($550), Advanced ($490), Rescue ($525) and Dive Master ($1,200) certification courses. Each course runs 4–5 days with approximately 2.5 hours of instruction per day. Complete equipment, professional instruction, complimentary beverages and snacks, and photo/video documentation are all included. Start any day. Your journey to becoming a certified diver starts here.",
    highlights: [
      "Open Water, Advanced, Rescue & Dive Master levels",
      "Internationally recognized PADI certification",
      "Experienced local instructors",
      "All equipment provided",
    ],
    included: [
      "Professional PADI instruction",
      "Complete diving equipment",
      "Beverages & snacks",
      "Photos & videos",
      "PADI certification card",
    ],
    notIncluded: ["Transportation", "Gratuities"],
    schedule: "Start any day",
    image: ab01_14,
    gallery: [ab01_14, dsd, ab02_13],
  },
  {
    slug: "alfi-lionfish-certification",
    title: "ALFI Lionfish Hunting Certification",
    category: "certification",
    duration: "3 days",
    durationHours: 12,
    price: 120,
    rating: 5.0,
    reviews: 38,
    shortDescription:
      "Get certified to hunt invasive lionfish and help protect Aruba's coral reefs, a 3-day program with all equipment and photos included.",
    longDescription:
      "The ALFI Lionfish Hunting Certification is a 3-day program that trains certified divers to safely and responsibly hunt invasive lionfish, a critical conservation effort for Aruba's coral reef ecosystem. You'll learn lionfish biology, their impact on the local marine environment, and safe spearfishing techniques. All equipment, professional instruction, photos, video documentation, and beverages and snacks are included.",
    highlights: [
      "Learn lionfish biology & ecosystem impact",
      "Safe hunting & removal techniques",
      "Officially certified by ALFI",
      "Meaningful reef conservation",
    ],
    included: [
      "Professional instruction",
      "All equipment",
      "Photos & video documentation",
      "Beverages & snacks",
    ],
    notIncluded: ["Transportation", "Gratuities"],
    schedule: "3-day program. Contact us to start.",
    image: ab02_05,
    gallery: [ab02_05, ab01_13, ab02_02],
  },
];

export const getTour = (slug: string) => tours.find((t) => t.slug === slug);
