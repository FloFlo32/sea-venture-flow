import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check, ArrowRight, ArrowLeft, Calendar, Users, User } from "lucide-react";
import { z } from "zod";
import { tours, getTour } from "@/lib/tours";

const search = z.object({
  tour: z.string().optional(),
  adults: z.coerce.number().optional(),
  children: z.coerce.number().optional(),
  date: z.string().optional(),
});

export const Route = createFileRoute("/book")({
  validateSearch: search,
  head: () => ({
    meta: [
      { title: "Book Your Tour — Aruba Bob" },
      { name: "description", content: "Book your snorkel, scuba or sea scooter tour with Aruba Bob in just a few steps." },
    ],
  }),
  component: BookPage,
});

const steps = ["Tour", "Date & Guests", "Your Details", "Confirm"] as const;

function BookPage() {
  const sp = Route.useSearch();
  const [step, setStep] = useState(sp.tour ? 1 : 0);
  const [tourSlug, setTourSlug] = useState(sp.tour ?? tours[0].slug);
  const [date, setDate] = useState(sp.date ?? "");
  const [adults, setAdults] = useState(sp.adults ?? 2);
  const [children, setChildren] = useState(sp.children ?? 0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [bookingId, setBookingId] = useState<string | null>(null);

  const tour = getTour(tourSlug)!;
  const total = useMemo(() => tour.price * adults + tour.price * 0.5 * children, [tour, adults, children]);

  const validateDetails = () => {
    const e: Record<string, string> = {};
    if (name.trim().length < 2) e.name = "Please enter your full name";
    if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Enter a valid email";
    if (phone.trim().length < 6) e.phone = "Enter a valid phone";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (step === 1 && !date) { setErrors({ date: "Pick a date" }); return; }
    if (step === 2 && !validateDetails()) return;
    if (step === 3) {
      setBookingId("AB-" + Math.random().toString(36).slice(2, 8).toUpperCase());
      return;
    }
    setErrors({});
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  if (bookingId) {
    return (
      <div className="container-tight py-24">
        <div className="surface-card max-w-xl mx-auto p-10 text-center">
          <div className="w-16 h-16 rounded-full grid place-items-center mx-auto" style={{ background: "var(--gradient-ocean)" }}>
            <Check className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-display font-bold text-3xl mt-6">You're booked!</h1>
          <p className="mt-3 text-muted-foreground">We've sent a confirmation to <b>{email}</b>. Our crew will reach out within 24 hours with meeting details.</p>
          <div className="mt-6 p-5 rounded-2xl bg-secondary/60 text-left text-sm space-y-2">
            <div className="flex justify-between"><span>Booking ID</span><b>{bookingId}</b></div>
            <div className="flex justify-between"><span>Tour</span><b>{tour.title}</b></div>
            <div className="flex justify-between"><span>Date</span><b>{date}</b></div>
            <div className="flex justify-between"><span>Guests</span><b>{adults} adult{adults > 1 ? "s" : ""}{children ? `, ${children} child` : ""}</b></div>
            <div className="flex justify-between border-t border-border pt-2"><span>Total</span><b className="text-primary">${total.toFixed(0)}</b></div>
          </div>
          <a href="/" className="btn-ocean mt-8 inline-flex">Back to home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="container-tight py-16 md:py-24">
      <header className="max-w-2xl">
        <p className="text-primary font-medium text-sm">Booking</p>
        <h1 className="font-display font-bold text-4xl md:text-5xl mt-2">Reserve your trip</h1>
      </header>

      {/* Progress */}
      <ol className="mt-10 flex items-center gap-2 md:gap-4 text-sm">
        {steps.map((s, i) => (
          <li key={s} className={`flex items-center gap-2 ${i === step ? "text-primary" : i < step ? "text-foreground" : "text-muted-foreground"}`}>
            <span className={`w-7 h-7 grid place-items-center rounded-full text-xs font-bold ${i <= step ? "bg-primary text-white" : "bg-muted"}`}>
              {i < step ? <Check className="w-4 h-4" /> : i + 1}
            </span>
            <span className="hidden sm:inline">{s}</span>
            {i < steps.length - 1 && <span className="hidden md:inline w-8 h-px bg-border ml-2" />}
          </li>
        ))}
      </ol>

      <div className="mt-10 grid lg:grid-cols-[1fr_380px] gap-8">
        <div className="surface-card p-6 md:p-8 min-h-[300px]">
          {step === 0 && (
            <div>
              <h2 className="font-display font-semibold text-2xl mb-6">Choose a tour</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {tours.map((t) => (
                  <button
                    key={t.slug}
                    onClick={() => setTourSlug(t.slug)}
                    className={`text-left p-4 rounded-2xl border-2 transition ${tourSlug === t.slug ? "border-primary bg-aqua/30" : "border-border hover:border-primary/50"}`}
                  >
                    <div className="flex gap-3">
                      <img src={t.image} alt="" className="w-20 h-20 rounded-xl object-cover flex-shrink-0" />
                      <div>
                        <div className="font-semibold leading-snug">{t.title}</div>
                        <div className="text-sm text-muted-foreground mt-1">${t.price} · {t.duration}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <h2 className="font-display font-semibold text-2xl">When and how many?</h2>
              <label className="block">
                <span className="text-sm font-medium flex items-center gap-2"><Calendar className="w-4 h-4" /> Date</span>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  min={new Date().toISOString().slice(0, 10)}
                  className="mt-1 w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
                {errors.date && <span className="text-xs text-destructive mt-1 block">{errors.date}</span>}
              </label>
              <Stepper label="Adults" icon={<Users className="w-4 h-4" />} value={adults} setValue={setAdults} min={1} />
              <Stepper label="Children (50% off)" icon={<Users className="w-4 h-4" />} value={children} setValue={setChildren} min={0} />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <h2 className="font-display font-semibold text-2xl">Your details</h2>
              <Field label="Full name" icon={<User className="w-4 h-4" />} value={name} onChange={setName} error={errors.name} maxLength={80} />
              <Field label="Email" type="email" value={email} onChange={setEmail} error={errors.email} maxLength={120} />
              <Field label="Phone" type="tel" value={phone} onChange={setPhone} error={errors.phone} maxLength={30} />
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="font-display font-semibold text-2xl mb-6">Confirm your booking</h2>
              <dl className="divide-y divide-border text-sm">
                <Row k="Tour" v={tour.title} />
                <Row k="Date" v={date} />
                <Row k="Guests" v={`${adults} adult${adults > 1 ? "s" : ""}${children ? `, ${children} child` : ""}`} />
                <Row k="Name" v={name} />
                <Row k="Email" v={email} />
                <Row k="Phone" v={phone} />
              </dl>
              <p className="text-xs text-muted-foreground mt-5">By confirming you agree to our terms. Free cancellation up to 24h before the tour.</p>
            </div>
          )}

          <div className="mt-8 flex justify-between gap-3">
            {step > 0 ? (
              <button onClick={() => setStep(step - 1)} className="btn-outline-ocean"><ArrowLeft className="w-4 h-4" /> Back</button>
            ) : <span />}
            <button onClick={next} className="btn-ocean">
              {step === 3 ? "Confirm Booking" : "Continue"} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Summary */}
        <aside className="lg:sticky lg:top-24 self-start">
          <div className="surface-card p-6">
            <img src={tour.image} alt="" className="rounded-xl aspect-[16/10] object-cover w-full" />
            <h3 className="font-display font-semibold mt-4 leading-snug">{tour.title}</h3>
            <div className="text-sm text-muted-foreground mt-1">{tour.duration} · {tour.category}</div>
            <dl className="mt-5 space-y-2 text-sm">
              <Row k={`Adults × ${adults}`} v={`$${tour.price * adults}`} small />
              {children > 0 && <Row k={`Children × ${children}`} v={`$${(tour.price * 0.5 * children).toFixed(0)}`} small />}
            </dl>
            <div className="mt-4 pt-4 border-t border-border flex justify-between items-baseline">
              <span className="text-sm text-muted-foreground">Total</span>
              <span className="font-display font-bold text-2xl text-primary">${total.toFixed(0)}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Row({ k, v, small }: { k: string; v: string; small?: boolean }) {
  return (
    <div className={`flex justify-between ${small ? "" : "py-3"}`}>
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="font-medium text-right">{v}</dd>
    </div>
  );
}

function Stepper({ label, value, setValue, min, icon }: { label: string; value: number; setValue: (v: number) => void; min: number; icon?: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-sm font-medium">{icon} {label}</div>
      <div className="flex items-center gap-2">
        <button type="button" onClick={() => setValue(Math.max(min, value - 1))} className="w-9 h-9 rounded-full border border-border hover:border-primary">−</button>
        <span className="w-6 text-center font-semibold">{value}</span>
        <button type="button" onClick={() => setValue(value + 1)} className="w-9 h-9 rounded-full border border-border hover:border-primary">+</button>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", error, icon, maxLength }: { label: string; value: string; onChange: (v: string) => void; type?: string; error?: string; icon?: React.ReactNode; maxLength?: number }) {
  return (
    <label className="block">
      <span className="text-sm font-medium flex items-center gap-2">{icon} {label}</span>
      <input
        type={type}
        value={value}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
      {error && <span className="text-xs text-destructive mt-1 block">{error}</span>}
    </label>
  );
}
