import { Icon, Reveal, SectionHeading } from "./ui";

const STEPS = [
  {
    n: "01",
    title: "Brand intake, not a catalog dump",
    body: "Share your brand book and headcount. Your dedicated producer returns a curated shortlist with 3D mockups in 24 hours.",
  },
  {
    n: "02",
    title: "Sample, approve, lock colours",
    body: "Physical samples ship free. We spectro-match your Pantones and store the recipe so run #12 matches run #1.",
  },
  {
    n: "03",
    title: "Produce at retail quality",
    body: "Audited partner factories across 3 continents, capacity for 250k units a month, full compliance documentation.",
  },
  {
    n: "04",
    title: "Store, ship, restock — automatically",
    body: "We warehouse your inventory and auto-trigger kits from your HRIS. Low-stock alerts before you run out.",
  },
];

const OUTCOMES = [
  { icon: <Icon.Truck className="h-5 w-5" />, stat: "6 days", label: "Average rush turnaround" },
  { icon: <Icon.Box className="h-5 w-5" />, stat: "41%", label: "Lower cost per impression" },
  { icon: <Icon.Leaf className="h-5 w-5" />, stat: "100%", label: "Carbon-neutral shipping" },
];

export default function Benefits() {
  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff,#f6f5ff_55%,#ffffff)] py-24 lg:py-32"
      aria-labelledby="process-title"
      id="process"
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          {/* Visual column */}
          <div className="relative">
            <Reveal direction="left">
              <div className="relative overflow-hidden rounded-[32px] border border-ink-900/8 bg-white p-2.5 shadow-[0_50px_110px_-45px_rgba(9,10,25,0.45)]">
                <img
                  src="https://images.pexels.com/photos/27893029/pexels-photo-27893029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=860&w=720&fit=crop"
                  alt="Inkora production specialist screen printing custom corporate apparel"
                  loading="lazy"
                  className="aspect-4/5 w-full rounded-[24px] object-cover"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-2.5 rounded-[24px] bg-[linear-gradient(to_top,rgba(6,7,13,0.6),transparent_50%)]"
                />
                <div className="absolute inset-x-6 bottom-6">
                  <p className="font-display text-lg font-bold text-white">
                    Our Rotterdam print floor
                  </p>
                  <p className="mt-1 text-sm text-white/65">
                    One of four owned facilities producing 250,000 units a month.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {OUTCOMES.map((o) => (
                  <div
                    key={o.label}
                    className="group rounded-2xl border border-ink-900/8 bg-white/80 p-4 backdrop-blur-md transition-all duration-400 hover:-translate-y-1 hover:border-brand-400/50 hover:shadow-[0_20px_40px_-24px_rgba(109,94,248,0.7)]"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 transition-transform duration-400 group-hover:scale-110">
                      {o.icon}
                    </span>
                    <p className="mt-3 font-display text-xl font-extrabold text-ink-900">{o.stat}</p>
                    <p className="mt-0.5 text-[12px] leading-snug text-ink-900/55">{o.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Steps column */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="How it works"
              title={
                <span id="process-title">
                  From brand book to doorstep in{" "}
                  <span className="gradient-text-dark">four calm steps</span>
                </span>
              }
              description="No chasing suppliers, no surprise artwork fees, no mystery lead times. One producer, one dashboard, one invoice."
            />

            <ol className="mt-12 space-y-3">
              {STEPS.map((s, i) => (
                <Reveal as="li" key={s.n} delay={i * 90} direction="right">
                  <div className="group relative flex gap-5 overflow-hidden rounded-2xl border border-transparent p-5 transition-all duration-400 hover:border-ink-900/8 hover:bg-white hover:shadow-[0_24px_50px_-34px_rgba(9,10,25,0.5)]">
                    <div className="relative shrink-0">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900 font-display text-sm font-extrabold text-white transition-all duration-400 group-hover:bg-[linear-gradient(135deg,#5942e0,#8b76ff)]">
                        {s.n}
                      </span>
                      {i < STEPS.length - 1 && (
                        <span
                          aria-hidden
                          className="absolute top-14 left-1/2 h-[calc(100%-1rem)] w-px -translate-x-1/2 bg-gradient-to-b from-ink-900/15 to-transparent"
                        />
                      )}
                    </div>
                    <div>
                      <h3 className="font-display text-[17px] font-bold text-ink-900">{s.title}</h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-ink-900/58">{s.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={260}>
              <div className="mt-8 flex items-center gap-3 rounded-2xl border border-brand-500/15 bg-brand-50/70 p-4">
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm">
                  <Icon.Sparkle className="h-5 w-5" />
                </span>
                <p className="text-sm text-ink-900/70">
                  <strong className="font-semibold text-ink-900">Average onboarding: 11 days.</strong>{" "}
                  Most teams run their first company-wide drop inside a month.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
