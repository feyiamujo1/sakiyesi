"use client";

import Image from "next/image";
import { useState } from "react";

type Preview = {
  src: string;
  alt: string;
};

type InteriorPreviewProps = {
  previews: Preview[];
};

const transforms = [
  "-rotate-6 -translate-x-2 translate-y-6",
  "-rotate-2 translate-x-2 translate-y-2",
  "rotate-2 translate-x-5 translate-y-4",
  "rotate-6 translate-x-8 translate-y-8",
];

export default function InteriorPreview({
  previews,
}: InteriorPreviewProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid min-w-0 gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
      {/* MAIN PREVIEW */}
      <div className="min-w-0 w-full">
        <div className="relative mx-auto w-full max-w-[520px]">
          {/* Decorative outline */}
          <div className="absolute inset-0 rotate-2 rounded-[2rem] border border-terracotta/15 sm:-inset-2 md:-inset-4 md:rounded-[2.25rem]" />

          <div className="relative w-full overflow-hidden rounded-[1.5rem] border border-charcoal/10 bg-white p-2 shadow-[0_24px_70px_rgba(41,38,34,0.14)] sm:rounded-[2rem] sm:p-3 md:p-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.25rem] bg-sand/15 sm:rounded-[1.5rem]">
              <Image
                key={previews[active].src}
                src={previews[active].src}
                alt={previews[active].alt}
                fill
                sizes="(max-width: 640px) calc(100vw - 48px), (max-width: 768px) 90vw, 48vw"
                className="object-cover transition duration-500"
                priority={active === 0}
              />
            </div>

            <div className="flex items-center justify-between gap-3 px-1 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-charcoal/45 sm:px-2 sm:pt-4 sm:text-xs sm:tracking-[0.18em]">
              <span>Inside Sàkíyèsí</span>

              <span className="shrink-0">
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(previews.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* PAGE SELECTOR */}
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
          Explore the pages
        </p>

        <p className="mt-3 max-w-sm text-sm leading-6 text-charcoal/60">
          Hover, focus or tap a page to bring it forward and take a closer
          look.
        </p>

        {/* DESKTOP */}
        <div className="relative mt-8 hidden min-h-[430px] md:block">
          {previews.map((preview, index) => {
            const isActive = active === index;

            return (
              <button
                key={`${preview.src}-${index}`}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                aria-label={`View interior preview ${index + 1}`}
                className={`absolute left-1/2 top-1/2 aspect-[4/5] w-[62%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[1.4rem] border bg-white shadow-[0_18px_50px_rgba(41,38,34,0.14)] transition-[transform,opacity,border-color,box-shadow] duration-300 focus:outline-none focus:ring-2 focus:ring-terracotta/40 ${
                  transforms[index] ?? ""
                } ${
                  isActive
                    ? "z-30 scale-105 border-terracotta/35 opacity-100 shadow-[0_24px_60px_rgba(41,38,34,0.20)]"
                    : "z-10 scale-100 border-charcoal/10 opacity-75 hover:opacity-100"
                }`}
                style={{
                  marginLeft: `${(index - 1.5) * 42}px`,
                  marginTop: `${Math.abs(index - 1.5) * 12}px`,
                }}
              >
                <Image
                  src={preview.src}
                  alt=""
                  fill
                  sizes="30vw"
                  className="object-cover"
                />

                {!isActive && (
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/55 to-transparent px-4 pb-4 pt-12 text-left text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                    Page {String(index + 1).padStart(2, "0")}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* MOBILE */}
        <div className="mt-6 w-full min-w-0 overflow-hidden md:hidden">
          <div className="flex w-full gap-3 overflow-x-auto overscroll-x-contain pb-3 pr-4 snap-x snap-mandatory">
            {previews.map((preview, index) => (
              <button
                key={`${preview.src}-mobile-${index}`}
                type="button"
                onClick={() => setActive(index)}
                aria-label={`View interior preview ${index + 1}`}
                className={`relative aspect-[4/5] w-20 shrink-0 snap-start overflow-hidden rounded-xl border transition sm:w-24 ${
                  active === index
                    ? "border-terracotta opacity-100 shadow-soft"
                    : "border-charcoal/10 opacity-60"
                }`}
              >
                <Image
                  src={preview.src}
                  alt=""
                  fill
                  sizes="96px"
                  className="object-cover"
                />

                <span className="absolute bottom-1.5 right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-charcoal/70 px-1 text-[9px] font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}