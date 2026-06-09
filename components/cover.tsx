"use client"

import Image from "next/image"

export function Cover({ onOpen }: { onOpen: () => void }) {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-primary px-6 text-center text-primary-foreground">
      {/* radial vignette for depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      {/* four floral corners */}
      <Image
        src="/floral-corner.png"
        alt=""
        width={300}
        height={300}
        aria-hidden="true"
        className="corner-fade pointer-events-none absolute left-0 top-0 w-36 animate-float sm:w-52 md:w-64"
        style={{ animationDelay: "0.2s" }}
        priority
      />
      <Image
        src="/floral-corner.png"
        alt=""
        width={300}
        height={300}
        aria-hidden="true"
        className="corner-fade pointer-events-none absolute right-0 top-0 w-36 -scale-x-100 animate-float sm:w-52 md:w-64"
        style={{ animationDelay: "0.4s" }}
        priority
      />
      <Image
        src="/floral-corner.png"
        alt=""
        width={300}
        height={300}
        aria-hidden="true"
        className="corner-fade pointer-events-none absolute bottom-0 left-0 w-36 -scale-y-100 animate-float sm:w-52 md:w-64"
        style={{ animationDelay: "0.5s" }}
        priority
      />
      <Image
        src="/floral-corner.png"
        alt=""
        width={300}
        height={300}
        aria-hidden="true"
        className="corner-fade pointer-events-none absolute bottom-0 right-0 w-36 -scale-x-100 -scale-y-100 animate-float sm:w-52 md:w-64"
        style={{ animationDelay: "0.6s" }}
        priority
      />

      {/* thin inner gold frame */}
      <div
        aria-hidden="true"
        className="corner-fade pointer-events-none absolute inset-5 rounded-[2px] border border-accent/30 sm:inset-8"
        style={{ animationDelay: "0.8s" }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <p
          className="cover-rise font-sans text-[0.7rem] uppercase tracking-[0.55em] text-accent sm:text-xs"
          style={{ animationDelay: "0.6s" }}
        >
          The Engagement Of
        </p>

        <h2
          className="cover-rise mt-7 font-heading text-6xl font-medium tracking-[0.2em] text-cream sm:text-7xl md:text-8xl"
          style={{ animationDelay: "0.85s" }}
        >
          LAMARAN
        </h2>

        <div
          className="cover-rise mt-9 flex items-center gap-4"
          style={{ animationDelay: "1.05s" }}
          aria-hidden="true"
        >
          <span className="line-grow h-px w-12 bg-accent/70 sm:w-16" />
          <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
          <span className="line-grow h-px w-12 bg-accent/70 sm:w-16" />
        </div>

        <div className="mt-9 flex flex-col items-center gap-4">
          <h1
            className="cover-rise font-heading text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
            style={{ animationDelay: "1.2s" }}
          >
            <span className="gold-text">Taufik Seizarsyah</span>
          </h1>
          <span
            className="cover-rise font-heading text-3xl italic text-accent sm:text-4xl"
            style={{ animationDelay: "1.35s" }}
          >
            &amp;
          </span>
          <h1
            className="cover-rise font-heading text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl"
            style={{ animationDelay: "1.5s" }}
          >
            <span className="gold-text">Ditya Putri Imaniar</span>
          </h1>
        </div>

        <p
          className="cover-rise mt-10 font-sans text-sm tracking-[0.35em] text-cream/90 sm:text-base"
          style={{ animationDelay: "1.7s" }}
        >
          SABTU, 13 JUNI 2026
        </p>

        <button
          onClick={onOpen}
          className="cover-rise group mt-12 inline-flex items-center gap-3 rounded-full border border-accent bg-accent/5 px-10 py-4 font-sans text-sm font-medium tracking-[0.15em] text-cream backdrop-blur-sm transition-all duration-500 hover:bg-accent hover:text-primary hover:shadow-[0_0_45px_-8px] hover:shadow-accent/70"
          style={{ animationDelay: "1.9s" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            className="transition-transform duration-500 group-hover:rotate-12"
          >
            <path d="M21 8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2m18 0v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18 0-9 6L3 8" />
          </svg>
          Buka Undangan
        </button>
      </div>
    </section>
  )
}
