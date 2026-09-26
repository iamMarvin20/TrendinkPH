import { Avatar, Icon, Reveal, SectionHeading } from "./ui";

const TESTIMONIALS = [
  {
    quote:
      "We shipped 2,400 onboarding kits to 31 countries in one quarter without a single escalation. Inkora's dashboard replaced a spreadsheet, two vendors and roughly nine hours of my week.",
    name: "Amara Kowalski",
    role: "Director of People Ops, Northwind",
    gradient: "linear-gradient(135deg,#6d5ef8,#a37dff)",
    metric: "2,400 kits · 31 countries",
  },
  {
    quote:
      "Our brand team is famously difficult about colour. Inkora matched our gradient across fleece, ceramic and anodised aluminium — first sample, no argument.",
    name: "Marcus Reyes",
    role: "VP Brand, Lumen Labs",
    gradient: "linear-gradient(135deg,#ff7a59,#ffc06a)",
    metric: "ΔE 0.4 average match",
  },
  {
    quote:
      "Cost per impression dropped 41% because people actually wear the gear. Our recruiters now use the hoodie as a closing gift — candidates ask for it by name.",
    name: "Julia Lindqvist",
    role: "Head of Employer Brand, OrbitPay",
    gradient: "linear-gradient(135deg,#21c7a4,#6de0c6)",
    metric: "41% lower CPI",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-ink-950 py-24 lg:py-32"
      aria-labelledby="testimonials-title"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(80%_50%_at_50%_100%,rgba(255,122,89,0.14),transparent_65%)]"
      />
      <div aria-hidden className="grid-lines absolute inset-0 opacity-50" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Customer stories"
          title={
            <span id="testimonials-title">
              Loved by the people who{" "}
              <span className="gradient-text">sign off on swag</span>
            </span>
          }
          description="People ops, brand and procurement leaders at high-growth companies trust Inkora with their most visible internal touchpoint."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 110}>
              <figure className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/8 bg-white/[0.035] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/18 hover:bg-white/[0.07]">
                <div
                  aria-hidden
                  className="absolute -top-20 -right-12 h-48 w-48 rounded-full bg-brand-500/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative">
                  <Icon.Quote className="h-6 w-8 text-white/15" />
                  <div className="mt-4 flex items-center gap-1 text-flare-400">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <Icon.Star key={s} className="h-3.5 w-3.5" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-[15px] leading-relaxed text-white/72">
                    “{t.quote}”
                  </blockquote>
                </div>
                <figcaption className="relative mt-7 border-t border-white/8 pt-5">
                  <div className="flex items-center gap-3">
                    <Avatar name={t.name} gradient={t.gradient} className="h-10 w-10" />
                    <div className="min-w-0">
                      <p className="truncate font-display text-sm font-bold text-white">{t.name}</p>
                      <p className="truncate text-xs text-white/45">{t.role}</p>
                    </div>
                  </div>
                  <p className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] font-semibold text-brand-200">
                    {t.metric}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Guarantee strip */}
        <Reveal delay={140}>
          <div className="mt-8 grid gap-4 rounded-3xl border border-white/8 bg-[linear-gradient(120deg,rgba(109,94,248,0.14),rgba(255,122,89,0.08))] p-8 sm:grid-cols-3">
            {[
              { t: "Reprint guarantee", d: "Off-brand colour? We remake the run, free." },
              { t: "No artwork fees", d: "Design, revisions and mockups always included." },
              { t: "Net-60 for enterprise", d: "Procurement-friendly terms and single invoicing." },
            ].map((g) => (
              <div key={g.t} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint-500/20 text-mint-400">
                  <Icon.Check className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-white">{g.t}</p>
                  <p className="mt-1 text-[13px] text-white/50">{g.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
