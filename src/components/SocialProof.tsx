import { useCountUp } from "@/hooks/useReveal";
import { Reveal } from "./ui";

const BRANDS = [
  "NORTHWIND",
  "Lumen Labs",
  "VERTEXA",
  "Foundry&Co",
  "Helix Health",
  "OrbitPay",
  "Quantic",
  "BLUERIDGE",
  "Kite Software",
  "Terraform Bank",
];

const STATS = [
  { value: 4.2, suffix: "M+", label: "Items printed & packed", decimals: 1 },
  { value: 380, suffix: "+", label: "Corporate merch programs", decimals: 0 },
  { value: 68, suffix: "", label: "Countries shipped to", decimals: 0 },
  { value: 98.6, suffix: "%", label: "On-time delivery rate", decimals: 1 },
];

function Stat({ value, suffix, label, decimals }: (typeof STATS)[number]) {
  const { ref, display } = useCountUp(value);
  return (
    <div className="text-center sm:text-left">
      <p className="font-display text-[clamp(1.9rem,3.2vw,2.6rem)] leading-none font-extrabold text-white">
        <span ref={ref}>{display.toFixed(decimals)}</span>
        <span className="gradient-text">{suffix}</span>
      </p>
      <p className="mt-2 text-sm text-white/45">{label}</p>
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pb-20 lg:pb-28" aria-label="Social proof">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center text-[11px] font-semibold tracking-[0.22em] text-white/35 uppercase">
            Powering the swag of 380+ people-first companies
          </p>
        </Reveal>

        <div className="pause-on-hover mask-fade-x relative mt-9 flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16">
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="font-display text-lg font-bold whitespace-nowrap text-white/35 transition-colors duration-300 hover:text-white sm:text-xl"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        <Reveal delay={120}>
          <div className="mt-16 grid grid-cols-2 gap-8 rounded-3xl border border-white/8 bg-white/[0.03] p-8 backdrop-blur-sm sm:gap-10 lg:grid-cols-4 lg:p-10">
            {STATS.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
