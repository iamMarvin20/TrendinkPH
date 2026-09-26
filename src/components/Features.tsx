import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Icon, Reveal, SectionHeading } from "./ui";

type Feature = {
  icon: ReactNode;
  title: string;
  body: string;
  accent: string;
  span?: string;
};

const FEATURES: Feature[] = [
  {
    icon: <Icon.Palette className="h-6 w-6" />,
    title: "In-house brand studio",
    body: "Senior designers translate your brand book into merch that looks designed, not decorated. Unlimited revisions, 3D mockups in 24 hours.",
    accent: "from-brand-500/25 to-brand-400/5",
    span: "lg:col-span-2",
  },
  {
    icon: <Icon.Shield className="h-6 w-6" />,
    title: "Colour-locked printing",
    body: "Spectrophotometer-verified Pantone matching on every run. ΔE under 1.0 or we reprint free.",
    accent: "from-mint-500/25 to-mint-400/5",
  },
  {
    icon: <Icon.Dashboard className="h-6 w-6" />,
    title: "Swag dashboard",
    body: "Live inventory, budget controls, approval flows and SSO for every department.",
    accent: "from-flare-500/25 to-flare-400/5",
  },
  {
    icon: <Icon.Globe className="h-6 w-6" />,
    title: "Global warehousing",
    body: "Four fulfilment hubs across the US, EU, UK and APAC. Duties handled, tracking built in.",
    accent: "from-brand-500/25 to-brand-300/5",
  },
  {
    icon: <Icon.Leaf className="h-6 w-6" />,
    title: "Sustainable by default",
    body: "GOTS-certified organic cotton, recycled hardware, plastic-free packaging and carbon-neutral shipping on every order.",
    accent: "from-mint-500/25 to-brand-400/5",
    span: "lg:col-span-2",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-ink-950 py-24 lg:py-32"
      aria-labelledby="features-title"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_0%,rgba(109,94,248,0.14),transparent_60%)]"
      />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Why teams switch to Inkora"
          title={
            <span id="features-title">
              Everything a merch program needs,{" "}
              <span className="gradient-text">nothing it doesn't</span>
            </span>
          }
          description="Most suppliers hand you a catalog and a PDF invoice. We hand you a managed program — creative, production, logistics and reporting under one roof."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 80} className={cn("group", f.span)}>
              <article className="relative h-full overflow-hidden rounded-3xl border border-white/8 bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/18 hover:bg-white/[0.06]">
                <div
                  aria-hidden
                  className={cn(
                    "absolute -top-24 -right-16 h-56 w-56 rounded-full bg-gradient-to-br blur-3xl transition-opacity duration-500 group-hover:opacity-100",
                    f.accent,
                    "opacity-40",
                  )}
                />
                <div className="relative">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    {f.icon}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-bold text-white">{f.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/55">{f.body}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-300 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    Learn more
                    <Icon.Arrow className="h-3.5 w-3.5" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
