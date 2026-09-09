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
  "rotate-6 translate-x-8 translate-y-8"
];

export default function InteriorPreview({ previews }: InteriorPreviewProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
      <div className="relative mx-auto w-full max-w-[520px]">
        <div className="absolute -inset-4 rotate-2 rounded-[2.25rem] border border-terracotta/15" />
        <div className="relative overflow-hidden rounded-[2rem] border border-charcoal/10 bg-white p-3 shadow-[0_24px_70px_rgba(41,38,34,0.14)] md:p-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-sand/15">
            <Image
              key={previews[active].src}
              src={previews[active].src}
              alt={previews[active].alt}
              fill
              sizes="(max-width: 768px) 90vw, 48vw"
              className="object-cover transition duration-500"
            />
          </div>
          <div className="flex items-center justify-between px-2 pb-1 pt-4 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/45">
            <span>Inside Sàkíyèsí</span>
            <span>{String(active + 1).padStart(2, "0")} / {String(previews.length).padStart(2, "0")}</span>
          </div>
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Explore the pages</p>
        <p className="mt-3 max-w-sm text-sm leading-6 text-charcoal/60">
          Hover, focus or tap a page to bring it forward and take a closer look.
        </p>

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
                  // Keep each page in a fixed physical position even when it becomes
                  // active. Moving the active page back to the centre caused the
                  // pointer to suddenly sit over a different overlapping page, which
                  // created the hover-switching loop.
                  marginLeft: `${(index - 1.5) * 42}px`,
                  marginTop: `${Math.abs(index - 1.5) * 12}px`
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

        <div className="mt-6 flex gap-3 overflow-x-auto pb-2 md:hidden">
          {previews.map((preview, index) => (
            <button
              key={`${preview.src}-mobile-${index}`}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`View interior preview ${index + 1}`}
              className={`relative aspect-[4/5] w-24 shrink-0 overflow-hidden rounded-xl border transition ${
                active === index ? "border-terracotta shadow-soft" : "border-charcoal/10 opacity-70"
              }`}
            >
              <Image src={preview.src} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
