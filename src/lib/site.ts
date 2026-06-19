// Site-wide constants. Update phone/WhatsApp here.
export const SITE = {
  name: "Aruba Bob",
  tagline: "Snorkel · Scuba · Sea Scooter Adventures",
  phone: "+297-585-2742",
  phoneHref: "tel:+2975852742",
  whatsapp: "+297-585-2742",
  whatsappNumber: "2975852742",
  whatsappMessage: "Hi, I want to book a tour",
  email: "info@arubabob.com",
  address: "Mangel Halto, Aruba",
  instagram: "https://www.instagram.com/arubabobsnorkelscuba/",
};

export const whatsappLink = (msg: string = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(msg)}`;
