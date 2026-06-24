import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import bgVideo from "@/assets/BackgroundVid2.mov";
import { galleryImages } from "@/lib/gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Aruba Bob" },
      { name: "description", content: "Photos and videos from our snorkel, scuba, and sea scooter tours in Aruba." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = useCallback(() => setSelected(null), []);
  const prev = useCallback(() =>
    setSelected((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null)),
  []);
  const next = useCallback(() =>
    setSelected((i) => (i !== null ? (i + 1) % galleryImages.length : null)),
  []);

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, close, prev, next]);

  return (
    <>
      {/* Video hero */}
      <section className="relative h-[55vh] md:h-[65vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src={bgVideo} type="video/quicktime" />
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <p className="text-aqua font-medium text-sm tracking-wide uppercase mb-3">Aruba Bob</p>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-tight">Gallery</h1>
          <p className="mt-4 text-white/75 text-lg max-w-md">
            Life underwater, captured.
          </p>
        </div>
      </section>

      {/* Photo grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container-tight">
          <div className="mb-10 text-center">
            <p className="text-primary font-medium text-sm">Our Adventures</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl mt-2">Moments from the reef</h2>
          </div>

          {/* Masonry grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="break-inside-avoid mb-3 cursor-pointer overflow-hidden rounded-xl group relative"
                onClick={() => setSelected(i)}
              >
                <img
                  src={src}
                  alt={`Aruba Bob photo ${i + 1}`}
                  loading="lazy"
                  className="w-full h-auto block rounded-xl group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/92 flex items-center justify-center"
          onClick={close}
        >
          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous photo"
            className="absolute left-3 md:left-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 grid place-items-center text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <img
            src={galleryImages[selected]}
            alt={`Aruba Bob photo ${selected + 1}`}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next photo"
            className="absolute right-3 md:right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 grid place-items-center text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Close */}
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 grid place-items-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-sm tabular-nums">
            {selected + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  );
}
