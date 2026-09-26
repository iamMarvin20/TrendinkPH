import { useState } from "react";
import { cn } from "@/utils/cn";
import { Button, Icon, Reveal, SectionHeading } from "./ui";

type Collection = {
  id: string;
  label: string;
  title: string;
  blurb: string;
  from: string;
  lead: string;
  image: string;
  alt: string;
  items: string[];
  chips: { label: string; value: string }[];
};

const COLLECTIONS: Collection[] = [
  {
    id: "apparel",
    label: "Apparel",
    title: "Heavyweight apparel people wear off-duty",
    blurb:
      "400 GSM organic fleece, garment-dyed tees and technical outerwear. Embroidery, screen print, puff and tonal debossing — finished to retail standards.",
    from: "$18.40",
    lead: "10–14 days",
    image:
      "https://images.pexels.com/photos/9594147/pexels-photo-9594147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=760&fit=crop",
    alt: "Premium neutral-toned sweatshirt with custom branded labels",
    items: [
      "Hoodies, crews, tees, caps & knit beanies",
      "Custom woven labels and neck prints",
      "XS–4XL inclusive sizing, unisex & fitted",
    ],
    chips: [
      { label: "Fabric", value: "400 GSM organic" },
      { label: "Decoration", value: "6 techniques" },
    ],
  },
  {
    id: "drinkware",
    label: "Drinkware & Bags",
    title: "Daily-carry pieces that keep earning impressions",
    blurb:
      "Insulated bottles, ceramic mugs, canvas totes and weekenders — laser-etched or pad-printed so your mark survives a thousand dishwasher cycles.",
    from: "$9.80",
    lead: "8–12 days",
    image:
      "https://images.pexels.com/photos/5498337/pexels-photo-5498337.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=760&fit=crop",
    alt: "Branded canvas tote bag styled on a colourful flat lay",
    items: [
      "Triple-wall vacuum bottles & barista-grade mugs",
      "16oz recycled canvas totes and travel duffels",
      "Laser etch, deboss or full-wrap CMYK",
    ],
    chips: [
      { label: "Finish", value: "Laser etch" },
      { label: "Warranty", value: "Lifetime" },
    ],
  },
  {
    id: "desk",
    label: "Tech & Desk",
    title: "Desk objects that look at home beside a MacBook",
    blurb:
      "Notebooks, wireless chargers, cable organisers and stationery with the tactile detailing your design team will actually approve.",
    from: "$6.20",
    lead: "7–10 days",
    image:
      "https://images.pexels.com/photos/4087576/pexels-photo-4087576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=760&fit=crop",
    alt: "Minimal white branded desk accessories arranged in a flat lay",
    items: [
      "Foil-blocked notebooks and softcover journals",
      "Qi2 chargers, cable rolls, tech pouches",
      "Matte-soft-touch coatings & spot UV",
    ],
    chips: [
      { label: "Print", value: "Foil + spot UV" },
      { label: "MOQ", value: "50 units" },
    ],
  },
  {
    id: "kits",
    label: "Onboarding Kits",
    title: "Day-one kits that make new hires post about you",
    blurb:
      "Curated, custom-boxed and shipped direct to home addresses worldwide. You upload a start date — we handle the rest.",
    from: "$64.00",
    lead: "Ships in 48h",
    image:
      "https://images.pexels.com/photos/7598017/pexels-photo-7598017.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=760&fit=crop",
    alt: "Curated brand kit with printed collateral laid out on a desk",
    items: [
      "Rigid custom boxes with printed tissue & cards",
      "Address collection portal for remote hires",
      "Automated triggers from your HRIS",
    ],
    chips: [
      { label: "Countries", value: "68" },
      { label: "Setup", value: "2 weeks" },
    ],
  },
];

export default function Showcase() {
  const [active, setActive] = useState(0);
  const c = COLLECTIONS[active];

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
      aria-labelledby="products-title"
    >
      <div aria-hidden className="grid-lines-dim absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="absolute -top-24 left-1/2 h-72 w-[52rem] -translate-x-1/2 rounded-full bg-brand-200/40 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="left"
          eyebrow="The catalog"
          title={<span id="products-title">Four collections. One consistent brand.</span>}
          description="Every product is sampled, stress-tested and photographed by our team before it reaches your catalog — so nothing lands on a desk feeling cheap."
          className="max-w-3xl"
        />

        {/* Tabs */}
        <Reveal delay={120}>
          <div
            role="tablist"
            aria-label="Product collections"
            className="mt-12 flex flex-wrap gap-2 rounded-2xl border border-ink-900/8 bg-white/70 p-1.5 backdrop-blur-md sm:inline-flex"
          >
            {COLLECTIONS.map((col, i) => (
              <button
                key={col.id}
                role="tab"
                id={`tab-${col.id}`}
                aria-selected={i === active}
                aria-controls={`panel-${col.id}`}
                onClick={() => setActive(i)}
                className={cn(
                  "relative flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-all duration-300 sm:flex-none",
                  i === active
                    ? "bg-ink-900 text-white shadow-[0_14px_30px_-16px_rgba(6,7,13,0.9)]"
                    : "text-ink-900/55 hover:bg-ink-900/[0.04] hover:text-ink-900",
                )}
              >
                {col.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Panel */}
        <div
          role="tabpanel"
          id={`panel-${c.id}`}
          aria-labelledby={`tab-${c.id}`}
          key={c.id}
          className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <div className="animate-rise order-2 lg:order-1">
            <p className="font-display text-[11px] font-bold tracking-[0.2em] text-brand-600 uppercase">
              {c.label}
            </p>
            <h3 className="mt-4 text-balance font-display text-[clamp(1.6rem,3vw,2.3rem)] leading-[1.12] font-extrabold text-ink-900">
              {c.title}
            </h3>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-900/60">{c.blurb}</p>

            <ul className="mt-7 space-y-3">
              {c.items.map((item, i) => (
                <li
                  key={item}
                  className="animate-rise flex items-start gap-3 text-[15px] text-ink-900/75"
                  style={{ animationDelay: `${120 + i * 90}ms` }}
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/12 text-brand-600">
                    <Icon.Check className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.14em] text-ink-900/40 uppercase">
                  From
                </p>
                <p className="font-display text-2xl font-extrabold text-ink-900">
                  {c.from}
                  <span className="text-sm font-semibold text-ink-900/40"> / unit</span>
                </p>
              </div>
              <div className="h-10 w-px bg-ink-900/10" />
              <div>
                <p className="text-[11px] font-semibold tracking-[0.14em] text-ink-900/40 uppercase">
                  Lead time
                </p>
                <p className="font-display text-2xl font-extrabold text-ink-900">{c.lead}</p>
              </div>
            </div>

            <div className="mt-8">
              <Button href="#quote">
                Request samples
                <Icon.Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div className="animate-rise group relative order-1 lg:order-2">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[40px] bg-[radial-gradient(60%_60%_at_60%_40%,rgba(109,94,248,0.28),transparent_70%)] blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[32px] border border-ink-900/8 bg-white p-2.5 shadow-[0_50px_100px_-40px_rgba(9,10,25,0.4)]">
              <div className="relative overflow-hidden rounded-[24px]">
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  className="aspect-4/5 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 sm:aspect-square lg:aspect-4/5"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,7,13,0.55),transparent_45%)]"
                />
                <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2">
                  {c.chips.map((chip) => (
                    <span
                      key={chip.label}
                      className="glass rounded-xl px-3 py-2 text-white"
                    >
                      <span className="block text-[10px] tracking-[0.12em] text-white/55 uppercase">
                        {chip.label}
                      </span>
                      <span className="font-display text-[13px] font-bold">{chip.value}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="animate-floaty absolute -top-5 -left-4 hidden rounded-2xl border border-ink-900/8 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md sm:block"
              style={{ ["--r" as string]: "-3deg" }}
            >
              <div className="flex items-center gap-2.5">
                <Icon.Sparkle className="h-5 w-5 text-brand-500" />
                <div>
                  <p className="font-display text-[13px] font-bold text-ink-900">Free 3D mockup</p>
                  <p className="text-[11px] text-ink-900/50">Delivered within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
