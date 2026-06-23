import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { SITE, whatsappLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact - Aruba Bob" },
      { name: "description", content: "Get in touch with Aruba Bob - phone, WhatsApp, email, and contact form." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  message: z.string().trim().min(5).max(1000),
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errs, setErrs] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const e: Record<string, string> = {};
      r.error.issues.forEach((i) => (e[i.path[0] as string] = i.message));
      setErrs(e);
      return;
    }
    setErrs({});
    setSent(true);
  };

  return (
    <div className="container-tight py-16 md:py-24">
      <header className="max-w-2xl">
        <p className="text-primary font-medium text-sm">Contact Us</p>
        <h1 className="font-display font-bold text-4xl md:text-6xl mt-2">Let's talk</h1>
        <p className="mt-5 text-muted-foreground leading-relaxed">
          Questions about a tour, custom trips, group bookings? Reach the Aruba Bob crew directly
          via phone, WhatsApp, email or the form below.
        </p>
      </header>

      <div className="mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-8">
        <div className="space-y-4">
          <a href={SITE.phoneHref} className="surface-card p-6 flex items-center gap-4 hover:shadow-[var(--shadow-lift)] transition">
            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-aqua text-ocean-deep"><Phone className="w-5 h-5" /></span>
            <div>
              <div className="text-sm text-muted-foreground">Call us</div>
              <div className="font-semibold">{SITE.phone}</div>
            </div>
          </a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="surface-card p-6 flex items-center gap-4 hover:shadow-[var(--shadow-lift)] transition">
            <span className="grid place-items-center w-12 h-12 rounded-2xl text-white" style={{ background: "var(--whatsapp)" }}><MessageCircle className="w-5 h-5" /></span>
            <div>
              <div className="text-sm text-muted-foreground">WhatsApp</div>
              <div className="font-semibold">Chat with the crew</div>
            </div>
          </a>
          <a href={`mailto:${SITE.email}`} className="surface-card p-6 flex items-center gap-4 hover:shadow-[var(--shadow-lift)] transition">
            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-aqua text-ocean-deep"><Mail className="w-5 h-5" /></span>
            <div>
              <div className="text-sm text-muted-foreground">Email</div>
              <div className="font-semibold">{SITE.email}</div>
            </div>
          </a>
          <div className="surface-card p-6 flex items-center gap-4">
            <span className="grid place-items-center w-12 h-12 rounded-2xl bg-aqua text-ocean-deep"><MapPin className="w-5 h-5" /></span>
            <div>
              <div className="text-sm text-muted-foreground">Find us</div>
              <div className="font-semibold">{SITE.address}</div>
            </div>
          </div>
          <div className="surface-card overflow-hidden aspect-[16/10]">
            <iframe
              title="Aruba Bob location"
              src="https://www.google.com/maps?q=Mangel+Halto+Aruba&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        <form onSubmit={submit} className="surface-card p-6 md:p-8">
          {sent ? (
            <div className="text-center py-12">
              <div className="font-display font-bold text-2xl">Thanks - we got it!</div>
              <p className="text-muted-foreground mt-2">We'll reply within 24 hours.</p>
            </div>
          ) : (
            <div className="space-y-5">
              <h2 className="font-display font-semibold text-2xl">Send a message</h2>
              <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} error={errs.name} max={80} />
              <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} error={errs.email} max={120} />
              <label className="block">
                <span className="text-sm font-medium">Message</span>
                <textarea
                  rows={5}
                  maxLength={1000}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
                {errs.message && <span className="text-xs text-destructive mt-1 block">{errs.message}</span>}
              </label>
              <button type="submit" className="btn-ocean w-full">Send message</button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", error, max }: { label: string; value: string; onChange: (v: string) => void; type?: string; error?: string; max?: number }) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      <input
        type={type}
        value={value}
        maxLength={max}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </label>
  );
}
