import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Menu, X, Anchor } from "lucide-react";
import { useState } from "react";
import { SITE, whatsappLink } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/tours", label: "Tours" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/85 border-b border-border/60">
      <div className="container-tight flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg md:text-xl">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-[var(--gradient-ocean)] text-primary-foreground">
            <Anchor className="w-5 h-5" />
          </span>
          <span>
            Aruba <span className="text-primary">Bob</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-ocean-deep hover:text-primary"
            aria-label={`Call ${SITE.phone}`}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden md:inline">{SITE.phone}</span>
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ocean !py-2 !px-4 text-sm"
            style={{ background: "var(--whatsapp)" }}
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden md:inline">WhatsApp</span>
          </a>
          <Link to="/book" className="btn-ocean !py-2 !px-4 text-sm hidden md:inline-flex">
            Book Now
          </Link>
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background">
          <div className="container-tight py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 px-2 rounded-md hover:bg-muted text-foreground/90"
              >
                {n.label}
              </Link>
            ))}
            <Link to="/book" onClick={() => setOpen(false)} className="btn-ocean mt-3">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
