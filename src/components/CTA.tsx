import { useState, type FormEvent } from "react";
import { AmbientBlobs, Eyebrow, Icon, Reveal } from "./ui";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [size, setSize] = useState("51–250");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  };

  return (
    <section id="quote" className="relative bg-white px-4 pb-24 sm:px-6 lg:px-8 lg:pb-32">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] bg-ink-950 px-6 py-16 sm:px-12 lg:px-16 lg:py-20">
            <AmbientBlobs />
            <div aria-hidden className="grid-lines absolute inset-0 opacity-60" />
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_0%,rgba(109,94,248,0.35),transparent_65%)]"
            />
            <div aria-hidden className="noise absolute inset-0 opacity-25 mix-blend-overlay" />

            <div className="relative mx-auto max-w-3xl text-center">
              <Eyebrow>
                <Icon.Sparkle className="h-3.5 w-3.5" />
                Free mockup · no commitment
              </Eyebrow>

              <h2 className="mt-6 text-balance text-[clamp(2.1rem,5vw,3.5rem)] leading-[1.05] font-extrabold text-white">
                Let's design merch your people{" "}
                <span className="gradient-text">brag about</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[17px] leading-relaxed text-white/60">
                Send us your brand book and headcount. Within 24 hours you'll get a curated
                shortlist, 3D mockups and transparent pricing — from a producer, not a bot.
              </p>

              {sent ? (
                <div
                  role="status"
                  className="glass mx-auto mt-10 flex max-w-lg items-center gap-4 rounded-2xl p-5 text-left"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint-500/20 text-mint-400">
                    <Icon.Check className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-white">
                      You're on the list, thank you.
                    </p>
                    <p className="mt-0.5 text-[13px] text-white/55">
                      A producer will email {email} within one business day with mockups.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row"
                >
                  <div className="flex-1">
                    <label htmlFor="cta-email" className="sr-only">
                      Work email
                    </label>
                    <input
                      id="cta-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="h-14 w-full rounded-full border border-white/12 bg-white/[0.06] px-6 text-[15px] text-white placeholder-white/35 backdrop-blur-md transition-colors duration-300 outline-none focus:border-brand-400/70 focus:bg-white/10"
                    />
                  </div>
                  <div className="sm:w-44">
                    <label htmlFor="cta-size" className="sr-only">
                      Company size
                    </label>
                    <select
                      id="cta-size"
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                      className="h-14 w-full appearance-none rounded-full border border-white/12 bg-white/[0.06] px-6 text-[15px] text-white backdrop-blur-md transition-colors duration-300 outline-none focus:border-brand-400/70"
                    >
                      {["1–50", "51–250", "251–1000", "1000+"].map((o) => (
                        <option key={o} value={o} className="bg-ink-900 text-white">
                          {o} people
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="group relative inline-flex h-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-7 text-[15px] font-bold text-ink-900 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-18px_rgba(255,255,255,0.45)]"
                  >
                    Get my mockup
                    <Icon.Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              )}

              <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[13px] text-white/45">
                {["24-hour turnaround", "Free physical samples", "No artwork fees", "GDPR compliant"].map(
                  (t) => (
                    <li key={t} className="inline-flex items-center gap-2">
                      <Icon.Check className="h-3.5 w-3.5 text-mint-400" />
                      {t}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
