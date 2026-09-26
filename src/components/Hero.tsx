import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { AmbientBlobs, Button, Eyebrow, Icon } from "./ui";

const SHIRT_IMG =
  "https://images.pexels.com/photos/12025472/pexels-photo-12025472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=760&fit=crop";

const COLORS = [
  { name: "Midnight Ink", hex: "#1b1f31", pantone: "PANTONE 5255 C" },
  { name: "Signal Violet", hex: "#6d5ef8", pantone: "PANTONE 2726 C" },
  { name: "Ember Coral", hex: "#ff7a59", pantone: "PANTONE 7416 C" },
  { name: "Sage Mint", hex: "#21c7a4", pantone: "PANTONE 3268 C" },
  { name: "Bone White", hex: "#f1ece4", pantone: "PANTONE 7527 C" },
];

const AVATARS = [
  { i: "AK", g: "linear-gradient(135deg,#6d5ef8,#a37dff)" },
  { i: "MR", g: "linear-gradient(135deg,#ff7a59,#ffc06a)" },
  { i: "JL", g: "linear-gradient(135deg,#21c7a4,#6de0c6)" },
  { i: "SD", g: "linear-gradient(135deg,#2a2f45,#5f6a90)" },
];

export default function Hero() {
  const [active, setActive] = useState(1);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const stageRef = useRef<HTMLDivElement | null>(null);
  const color = COLORS[active];

  useEffect(() => {
    const node = stageRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: MouseEvent) => {
      const r = node.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      setTilt({ x, y });
    };
    const onLeave = () => setTilt({ x: 0, y: 0 });
    node.addEventListener("mousemove", onMove);
    node.addEventListener("mouseleave", onLeave);
    return () => {
      node.removeEventListener("mousemove", onMove);
      node.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink-950 pt-32 pb-20 sm:pt-36 lg:pt-44 lg:pb-28"
    >
      <AmbientBlobs />
      <div aria-hidden className="grid-lines absolute inset-0 opacity-70" />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_0%,rgba(109,94,248,0.28),transparent_60%)]"
      />
      <div aria-hidden className="noise absolute inset-0 opacity-[0.35] mix-blend-overlay" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.02fr_1fr] lg:gap-10 lg:px-8">
        {/* ---------------- Copy ---------------- */}
        <div className="max-w-2xl">
          <div className="animate-rise" style={{ animationDelay: "60ms" }}>
            <Eyebrow>
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-mint-400" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint-400" />
              </span>
              Merch programs for modern companies
            </Eyebrow>
          </div>

          <h1
            className="animate-rise mt-6 text-balance text-[clamp(2.6rem,6.2vw,4.4rem)] leading-[1.02] font-extrabold text-white"
            style={{ animationDelay: "140ms" }}
          >
            Corporate merch your team{" "}
            <span className="gradient-text relative inline-block">
              actually keeps
              <svg
                viewBox="0 0 320 16"
                className="absolute -bottom-2 left-0 h-3 w-full text-brand-400/70"
                fill="none"
                aria-hidden
              >
                <path
                  d="M3 11c62-7 138-9 314-6"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>

          <p
            className="animate-rise mt-7 max-w-xl text-[17px] leading-relaxed text-white/60 sm:text-lg"
            style={{ animationDelay: "230ms" }}
          >
            Inkora is the end-to-end merchandise studio behind the world's most loved
            employer brands. In-house design, Pantone-exact printing, global warehousing
            and one-click swag drops — managed from a single dashboard.
          </p>

          <div
            className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "320ms" }}
          >
            <Button href="#quote" size="lg">
              Get a free 3D mockup
              <Icon.Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button href="#products" variant="ghost" size="lg">
              <Icon.Play className="h-5 w-5" />
              Tour the catalog
            </Button>
          </div>

          <div
            className="animate-rise mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
            style={{ animationDelay: "410ms" }}
          >
            <div className="flex -space-x-2.5">
              {AVATARS.map((a) => (
                <span
                  key={a.i}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[11px] font-bold text-white ring-2 ring-ink-950 transition-transform duration-300 hover:-translate-y-1"
                  style={{ backgroundImage: a.g }}
                  aria-hidden
                >
                  {a.i}
                </span>
              ))}
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white ring-2 ring-ink-950">
                +380
              </span>
            </div>
            <div className="text-sm">
              <div className="flex items-center gap-1 text-flare-400">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Icon.Star key={i} className="h-3.5 w-3.5" />
                ))}
                <span className="ml-1.5 font-semibold text-white">4.9/5</span>
              </div>
              <p className="mt-0.5 text-white/45">
                from 380+ people &amp; brand teams worldwide
              </p>
            </div>
          </div>
        </div>

        {/* ---------------- Visual ---------------- */}
        <div
          ref={stageRef}
          className="animate-rise relative mx-auto w-full max-w-[540px] [perspective:1400px]"
          style={{ animationDelay: "260ms" }}
        >
          <div
            className="relative transition-transform duration-500 ease-out will-change-transform"
            style={{
              transform: `rotateY(${tilt.x * 9}deg) rotateX(${-tilt.y * 9}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            {/* glow */}
            <div
              aria-hidden
              className="absolute -inset-10 rounded-[44px] bg-[radial-gradient(60%_60%_at_50%_40%,rgba(109,94,248,0.45),transparent_70%)] blur-2xl"
            />

            {/* main card */}
            <div className="glass relative overflow-hidden rounded-[32px] p-3 shadow-[0_50px_120px_-40px_rgba(4,5,15,0.9)]">
              <div className="relative overflow-hidden rounded-[24px] bg-[#f6f4f1]">
                <img
                  src={SHIRT_IMG}
                  alt="Blank premium t-shirt mockup being customised in the Inkora studio"
                  loading="eager"
                  className="aspect-4/5 w-full object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 transition-colors duration-700 ease-out mix-blend-multiply"
                  style={{ backgroundColor: color.hex, opacity: 0.88 }}
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.22),transparent_45%)]"
                />

                {/* printed logo badge on the shirt */}
                <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-1.5 shadow-lg backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-[linear-gradient(135deg,#5942e0,#ff9d72)]" />
                    <span className="font-display text-[11px] font-extrabold tracking-[0.18em] text-ink-900 uppercase">
                      Your Brand
                    </span>
                  </div>
                </div>

                {/* bottom control bar */}
                <div className="absolute inset-x-3 bottom-3">
                  <div className="glass-light rounded-2xl p-3">
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate font-display text-[13px] font-bold text-ink-900">
                          {color.name}
                        </p>
                        <p className="truncate text-[11px] text-ink-900/50">{color.pantone}</p>
                      </div>
                      <div className="flex shrink-0 items-center gap-1.5" role="group" aria-label="Choose merchandise colour">
                        {COLORS.map((c, i) => (
                          <button
                            key={c.hex}
                            type="button"
                            onClick={() => setActive(i)}
                            aria-label={`Preview ${c.name}`}
                            aria-pressed={i === active}
                            className={cn(
                              "relative h-6 w-6 rounded-full transition-all duration-300 hover:scale-115",
                              i === active
                                ? "ring-2 ring-ink-900/70 ring-offset-2 ring-offset-white/80"
                                : "ring-1 ring-ink-900/15",
                            )}
                            style={{ backgroundColor: c.hex }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* floating stat card */}
            <div
              className="animate-floaty glass absolute -top-6 -left-4 hidden rounded-2xl px-4 py-3 shadow-xl sm:-left-10 sm:block"
              style={{ ["--r" as string]: "-4deg", animationDelay: "-2s" }}
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-mint-500/15 text-mint-400">
                  <Icon.Shield className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-white">ΔE &lt; 1.0</p>
                  <p className="text-[11px] text-white/50">Pantone-exact colour match</p>
                </div>
              </div>
            </div>

            {/* floating order card */}
            <div
              className="animate-floaty glass absolute -right-3 -bottom-8 w-[240px] rounded-2xl p-4 shadow-xl sm:-right-10"
              style={{ ["--r" as string]: "3deg", animationDelay: "-5s" }}
            >
              <div className="flex items-center justify-between">
                <p className="font-display text-xs font-bold text-white">Onboarding drop</p>
                <span className="rounded-full bg-mint-500/15 px-2 py-0.5 text-[10px] font-semibold text-mint-400">
                  Live
                </span>
              </div>
              <div className="mt-3 space-y-2.5">
                {[
                  { label: "Artwork approved", w: "100%" },
                  { label: "In production", w: "72%" },
                  { label: "Shipping to 14 countries", w: "35%" },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex items-center justify-between text-[10px] text-white/55">
                      <span>{row.label}</span>
                      <span>{row.w}</span>
                    </div>
                    <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,#6d5ef8,#ff9d72)]"
                        style={{ width: row.w }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* rotating badge */}
            <div
              aria-hidden
              className="absolute -top-10 right-2 hidden h-24 w-24 lg:block"
            >
              <svg viewBox="0 0 100 100" className="animate-spin-slow h-full w-full text-white/40">
                <defs>
                  <path id="circlePath" d="M50,50 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0" />
                </defs>
                <text fontSize="9.5" fontWeight="700" letterSpacing="2.4" fill="currentColor">
                  <textPath href="#circlePath">
                    INKORA • PREMIUM MERCH • SINCE 2014 •
                  </textPath>
                </text>
              </svg>
              <span className="absolute inset-0 m-auto h-7 w-7 rounded-full bg-[linear-gradient(135deg,#6d5ef8,#ff9d72)] blur-[2px]" />
            </div>
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink-950"
      />
    </section>
  );
}
