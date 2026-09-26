import { useState } from "react";
import { cn } from "@/utils/cn";
import { Button, Icon, Reveal, SectionHeading } from "./ui";

const FAQS = [
  {
    q: "What are your minimum order quantities?",
    a: "Most apparel starts at 50 units per style and colourway; drinkware and desk items start at 50–100 depending on decoration. Managed programs can draw down from warehoused stock in quantities of one — perfect for onboarding kits and one-off gifting.",
  },
  {
    q: "How closely can you match our brand colours?",
    a: "Every print is spectrophotometer-verified against your Pantone references, and we store the ink recipe for future runs. We guarantee a ΔE under 1.0 on solid-colour decoration — if a run drifts outside that, we reprint it at our cost.",
  },
  {
    q: "How fast is production and delivery?",
    a: "Standard production is 10–14 business days after artwork approval, plus transit. Rush lanes on managed programs deliver in as little as 6 days, and anything stocked in one of our four hubs ships within 48 hours.",
  },
  {
    q: "Can you ship directly to employees around the world?",
    a: "Yes. We ship to 68 countries with duties and taxes handled in-region. Remote hires receive a branded address-collection link, so you never have to chase home addresses or manage customs paperwork.",
  },
  {
    q: "How sustainable are the products?",
    a: "Our default catalog is GOTS-certified organic cotton, recycled polyester and recycled aluminium, packed plastic-free. Every shipment is carbon-neutral by default, and you receive an annual ESG report with materials, emissions and factory audit data.",
  },
  {
    q: "Do you integrate with our HR and finance systems?",
    a: "Managed and Enterprise programs integrate with Workday, BambooHR, HiBob, Rippling and Personio, plus a REST API and webhooks. Finance gets consolidated invoicing, cost-centre splits, PO support and Net-60 terms on Enterprise.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff,#f7f6ff)] py-24 lg:py-32"
      aria-labelledby="faq-title"
    >
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Questions"
              title={<span id="faq-title">Answers before you ask</span>}
              description="Still weighing options? Our producers are happy to review your brand book and quote a program with no obligation."
            />
            <Reveal delay={180}>
              <div className="mt-8 rounded-3xl border border-ink-900/8 bg-white/80 p-6 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#5942e0,#8b76ff)] text-white">
                    <Icon.Sparkle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-ink-900">Still deciding?</p>
                    <p className="text-[13px] text-ink-900/55">Get a free sample box, on us.</p>
                  </div>
                </div>
                <Button href="#quote" className="mt-5 w-full">
                  Request a sample box
                  <Icon.Arrow className="h-4 w-4" />
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="space-y-3">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.q} delay={i * 70}>
                  <div
                    className={cn(
                      "overflow-hidden rounded-2xl border transition-all duration-400",
                      isOpen
                        ? "border-brand-400/40 bg-white shadow-[0_28px_60px_-40px_rgba(9,10,25,0.55)]"
                        : "border-ink-900/8 bg-white/60 hover:border-ink-900/15 hover:bg-white",
                    )}
                  >
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${i}`}
                        className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                      >
                        <span className="font-display text-[16px] font-bold text-ink-900">
                          {item.q}
                        </span>
                        <span
                          className={cn(
                            "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-400",
                            isOpen
                              ? "rotate-135 border-transparent bg-ink-900 text-white"
                              : "border-ink-900/10 bg-white text-ink-900/60",
                          )}
                        >
                          <Icon.Plus className="h-4 w-4" />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`faq-panel-${i}`}
                      className={cn(
                        "grid transition-all duration-500 ease-out",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-[15px] leading-relaxed text-ink-900/62">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
