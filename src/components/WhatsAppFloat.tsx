import { useState } from "react";
import { MessageCircle, X, Phone } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";

const quickActions = [
  { label: "Book a Tour", msg: "Hi, I want to book a tour" },
  { label: "Ask a Question", msg: "Hi, I have a question about your tours" },
  { label: "Pricing Info", msg: "Hi, can you share pricing details?" },
];

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[320px] surface-card overflow-hidden animate-in fade-in slide-in-from-bottom-2">
          <div className="p-4 text-white" style={{ background: "var(--gradient-ocean)" }}>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-display font-semibold">Aruba Bob Crew</div>
                <div className="text-xs text-white/85">Typically replies in minutes</div>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close" className="p-1 hover:bg-white/20 rounded-full">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="p-4 space-y-2 bg-card">
            <p className="text-sm text-muted-foreground">👋 How can we help?</p>
            {quickActions.map((a) => (
              <a
                key={a.label}
                href={whatsappLink(a.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm py-2 px-3 rounded-lg bg-secondary hover:bg-aqua transition-colors"
              >
                {a.label}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <a href={SITE.phoneHref} className="btn-outline-ocean !py-2 text-sm">
                <Phone className="w-4 h-4" /> Call
              </a>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn-ocean !py-2 text-sm" style={{ background: "var(--whatsapp)" }}>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full grid place-items-center text-white shadow-[var(--shadow-lift)] hover:scale-105 transition-transform"
        style={{ background: "var(--whatsapp)" }}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  );
}
