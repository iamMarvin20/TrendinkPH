import { useState } from "react";
import { cn } from "@/utils/cn";
import { Button, Icon, Reveal, SectionHeading } from "./ui";

type Plan = {
  name: string;
  tagline: string;
  oneOff: string;
  managed: string;
  unit: string;
  features: string[];
  cta: string;
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Launch",
    tagline: "For first campaigns, events and small teams.",
    oneOff: "$0",
    managed: "$0",
    unit: "setup · pay per order",
    features: [
      "50-unit minimums across the catalog",
      "Free 3D mockups & unlimited revisions",
      "Standard 10–14 day production",
      "Single-destination bulk shipping",
      "Email support, next business day",
    ],
    cta: "Start a project",
  },
  {
    name: "Scale",
    tagline: "A managed merch program for growing companies.",
    oneOff: "$1,450",
    managed: "$690",
    unit: "per month · billed annually",
    features: [
      "Everything in Launch, plus:",
      "Dedicated producer & brand studio hours",
      "Global warehousing in 4 hubs",
      "Branded swag store with SSO & budgets",
      "Automated onboarding kit triggers (HRIS)",
      "Priority production & rush lanes",
    ],
    cta: "Book a walkthrough",
    featured: true,
  },
  {
    name: "Enterprise",
    tagline: "Multi-region, multi-brand, procurement-ready.",
    oneOff: "Custom",
    managed: "Custom",
    unit: "tailored to volume & regions",
    features: [
      "Everything in Scale, plus:",
      "Dedicated inventory & sub-brand catalogs",
      "Custom SLAs, Net-60 terms, MSA support",
      "Compliance, ESG & audit reporting",
      "API + Workday/BambooHR integrations",
      "Named account team & QBRs",
    ],
    cta: "Talk to sales",
  },
];

export default function Pricing() {
  const [managed, setManaged] = useState(true);

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
      aria-labelledby="pricing-title"
    >
      <div aria-hidden className="grid-lines-dim absolute inset-0 opacity-50" />
      <div
        aria-hidden
        className="absolute top-10 left-1/2 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-brand-200/45 blur-[130px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Programs & pricing"
          title={<span id="pricing-title">Pick the level of done-for-you</span>}
          description="Transparent program fees, wholesale product pricing and no hidden artwork charges. Cancel or pause a managed program any time."
        />

        <Reveal delay={120}>
          <div className="mt-10 flex justify-center">
            <div
              role="group"
              aria-label="Billing mode"
              className="relative inline-flex items-center rounded-full border border-ink-900/8 bg-white/80 p-1.5 shadow-sm backdrop-blur-md"
            >
              <span
                aria-hidden
                className={cn(
                  "absolute top-1.5 bottom-1.5 rounded-full bg-ink-900 transition-all duration-400 ease-out",
                  managed ? "left-[calc(50%-0.1rem)] right-1.5" : "right-[calc(50%-0.1rem)] left-1.5",
                )}
              />
              {[
                { id: "oneoff", label: "One-off orders" },
                { id: "managed", label: "Managed program" },
              ].map((opt) => {
                const isActive = (opt.id === "managed") === managed;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setManaged(opt.id === "managed")}
                    className={cn(
                      "relative z-10 w-[9.5rem] rounded-full px-3 py-2 text-center text-sm font-semibold transition-colors duration-300 sm:w-44",
                      isActive ? "text-white" : "text-ink-900/55 hover:text-ink-900",
                    )}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>
        <Reveal delay={170}>
          <p className="mt-3 text-center text-[13px] text-ink-900/45">
            {managed ? "Save 2 months — annual billing shown." : "No commitment. Volume discounts from 250 units."}
          </p>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 110} className={cn(plan.featured && "lg:-mt-4 lg:mb-[-1rem]")}>
              <article
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition-all duration-500 sm:p-8",
                  plan.featured
                    ? "border border-transparent bg-ink-950 text-white shadow-[0_50px_100px_-40px_rgba(41,26,140,0.75)]"
                    : "border border-ink-900/8 bg-white/80 backdrop-blur-md hover:-translate-y-1.5 hover:border-brand-400/40 hover:shadow-[0_35px_70px_-40px_rgba(9,10,25,0.5)]",
                )}
              >
                {plan.featured && (
                  <>
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_0%,rgba(109,94,248,0.4),transparent_60%)]"
                    />
                    <div aria-hidden className="grid-lines absolute inset-0 opacity-60" />
                    <span className="absolute top-6 right-6 rounded-full bg-[linear-gradient(100deg,#6d5ef8,#ff9d72)] px-3 py-1 text-[10px] font-bold tracking-[0.14em] text-white uppercase">
                      Most popular
                    </span>
                  </>
                )}

                <div className="relative">
                  <h3
                    className={cn(
                      "font-display text-lg font-extrabold",
                      plan.featured ? "text-white" : "text-ink-900",
                    )}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={cn(
                      "mt-1.5 text-sm leading-relaxed",
                      plan.featured ? "text-white/55" : "text-ink-900/55",
                    )}
                  >
                    {plan.tagline}
                  </p>

                  <div className="mt-7 flex items-end gap-2">
                    <span
                      className={cn(
                        "font-display text-[2.6rem] leading-none font-extrabold transition-all duration-300",
                        plan.featured ? "text-white" : "text-ink-900",
                      )}
                      key={managed ? "m" : "o"}
                    >
                      {managed ? plan.managed : plan.oneOff}
                    </span>
                  </div>
                  <p
                    className={cn(
                      "mt-2 text-[12px]",
                      plan.featured ? "text-white/45" : "text-ink-900/45",
                    )}
                  >
                    {plan.name === "Launch" && !managed ? "no setup · pay per order" : plan.unit}
                  </p>
                </div>

                <ul className="relative mt-7 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className={cn(
                        "flex items-start gap-2.5 text-[14px]",
                        plan.featured ? "text-white/70" : "text-ink-900/68",
                      )}
                    >
                      <span
                        className={cn(
                          "mt-0.5 inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full",
                          plan.featured
                            ? "bg-brand-400/20 text-brand-200"
                            : "bg-brand-500/10 text-brand-600",
                        )}
                      >
                        <Icon.Check className="h-2.5 w-2.5" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-8">
                  <Button
                    href="#quote"
                    variant={plan.featured ? "light" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    {plan.cta}
                    <Icon.Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 text-center text-sm text-ink-900/50">
            Every plan includes free physical samples, carbon-neutral shipping and our{" "}
            <span className="font-semibold text-ink-900">reprint guarantee</span>.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
