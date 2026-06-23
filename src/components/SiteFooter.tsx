import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-ocean-deep text-white">
      <div className="container-tight py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div>
            <img src="/logo.svg" alt="Aruba Bob" className="h-12 w-auto brightness-0 invert" />
          </div>
          <p className="mt-4 text-white/75 max-w-md leading-relaxed">
            Adventure with the locals. Snorkel, scuba and sea scooter tours powered by an Aruban
            team committed to your best experience and safety.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={SITE.phoneHref} className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20" aria-label="Call">
              <Phone className="w-4 h-4" />
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20" aria-label="WhatsApp">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-white/75">
            <li><Link to="/tours" className="hover:text-white">All Tours</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/reviews" className="hover:text-white">Reviews</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-white/75 text-sm">
            <li className="flex gap-2"><Phone className="w-4 h-4 mt-0.5" /> {SITE.phone}</li>
            <li className="flex gap-2"><Mail className="w-4 h-4 mt-0.5" /> {SITE.email}</li>
            <li className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5" /> {SITE.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-tight py-5 text-xs text-white/60 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Aruba Bob. All rights reserved.</span>
          <span>Adventure with the locals · Aruba</span>
        </div>
      </div>
    </footer>
  );
}
