export type Review = {
  name: string;
  date: string;
  rating: number;
  title: string;
  body: string;
  source: "TripAdvisor" | "Google";
};

export const reviews: Review[] = [
  {
    name: "Kim M.",
    date: "April 2026",
    rating: 5,
    title: "Fun for parents and teen",
    body: "Vinnyy was a wonderful guide. He is a local and was happy to answer questions about the island and the reef. He was cheerful, knowledgeable and fun. The scooters added a fun element to normal snorkeling. We saw lots of reef and fish. Highly recommend.",
    source: "TripAdvisor",
  },
  {
    name: "North End",
    date: "March 2026",
    rating: 5,
    title: "Scooters in the ocean! So much fun.",
    body: "This was way better than snorkeling. We got to go to a shipwreck, learned how to dive deep with the scooters, saw the most beautiful colored fish in coral. Just the most beautiful experience.",
    source: "TripAdvisor",
  },
  {
    name: "Kirsten Beth S.",
    date: "March 2026",
    rating: 5,
    title: "10-Star Experience — Unforgettable for Our Entire Family",
    body: "If I could give 10 stars, I would. Aruba Bob's didn't just meet expectations — they completely redefined them. Carolina was incredible communicating before we arrived. Coco was the kind of instructor every mom hopes for. Book with them. Seriously — you won't regret it.",
    source: "TripAdvisor",
  },
  {
    name: "Ashley M.",
    date: "March 2026",
    rating: 5,
    title: "Snorkel",
    body: "The guys were awesome, knowledgeable, and we had a great experience. Very down to earth, fun, personable guys. 10/10",
    source: "TripAdvisor",
  },
  {
    name: "Jackie B.",
    date: "March 2026",
    rating: 5,
    title: "Best adventure ever in Aruba",
    body: "We had the best experience ever snorkeling out to the reef and sunken ship with Quentin. Aruba Bob's was so friendly and accommodating. The best part was that it was all filmed with photos and video emailed to us that night.",
    source: "TripAdvisor",
  },
  {
    name: "MarilynJ",
    date: "March 2026",
    rating: 5,
    title: "Wonderful snorkeling adventure",
    body: "Fabulous snorkeling excursion with KoKo! The fish and coral were beautiful at Mangel Halto Beach... and the Sea Scooters were a definite plus! Highly recommend Aruba Bob's Snorkel.",
    source: "TripAdvisor",
  },
  {
    name: "Kelly C.",
    date: "March 2026",
    rating: 5,
    title: "Great experience",
    body: "Mark from Aruba Bob's Snorkel and Scuba was fantastic! He is a true servant and takes great care of his customers! We had lots of fun and saw some beautiful fish!",
    source: "TripAdvisor",
  },
  {
    name: "Jil M.",
    date: "March 2026",
    rating: 5,
    title: "Beautiful Reef Views and Fantastic Guides",
    body: "Coco and Martina were just excellent! Simple instructions, friendly, very relaxed atmosphere. Small group, beautiful reef and wildlife. The scooter is great for the current at Mangel Halto. One of our favorite activities.",
    source: "TripAdvisor",
  },
  {
    name: "John O.",
    date: "March 2026",
    rating: 5,
    title: "Sea scooter tour",
    body: "Great tour guide, very friendly! Awesome experience.",
    source: "TripAdvisor",
  },
];
