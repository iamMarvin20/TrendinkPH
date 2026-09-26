import { Icon, Logo } from "./ui";

const COLUMNS = [
  {
    title: "Products",
    links: ["Custom apparel", "Drinkware & bags", "Tech & desk", "Onboarding kits", "Event merch", "Gifting"],
  },
  {
    title: "Company",
    links: ["About Inkora", "Our factories", "Sustainability", "Careers", "Press kit", "Contact"],
  },
  {
    title: "Resources",
    links: ["Merch playbook", "Sizing & specs", "Artwork guidelines", "Lead times", "Case studies", "Help centre"],
  },
];

const SOCIALS = [
  {
    name: "LinkedIn",
    path: "M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.2 8.2h4.6V24H.2V8.2Zm7.5 0h4.4v2.2h.06c.62-1.1 2.12-2.3 4.36-2.3 4.66 0 5.52 2.9 5.52 6.68V24h-4.6v-7.6c0-1.82-.04-4.16-2.6-4.16-2.6 0-3 1.98-3 4.02V24H7.7V8.2Z",
  },
  {
    name: "Instagram",
    path: "M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 5.4a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8Zm0 7.26a2.86 2.86 0 1 1 0-5.72 2.86 2.86 0 0 1 0 5.72Zm5.6-7.44a1.03 1.03 0 1 1-2.06 0 1.03 1.03 0 0 1 2.06 0Z",
  },
  {
    name: "X",
    path: "M18.24 2h3.3l-7.2 8.24L22.8 22h-6.63l-5.2-6.8L4.98 22H1.67l7.7-8.8L1.5 2h6.8l4.7 6.22L18.24 2Zm-1.16 18h1.83L7.01 3.9H5.05L17.08 20Z",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 pt-20 pb-10">
      <div aria-hidden className="grid-lines absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="absolute -bottom-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand-600/20 blur-[130px]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-[15px] leading-relaxed text-white/50">
              Inkora is the corporate merchandise studio for brands that treat swag as a product,
              not a giveaway. Designed in Amsterdam, produced in four owned facilities, shipped
              everywhere.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-7"
              aria-label="Subscribe to the Inkora merch playbook"
            >
              <label htmlFor="footer-email" className="text-[13px] font-semibold text-white/70">
                The Merch Playbook — monthly, genuinely useful
              </label>
              <div className="mt-3 flex gap-2">
                <input
                  id="footer-email"
                  type="email"
                  required
                  placeholder="Work email"
                  className="h-11 w-full rounded-full border border-white/12 bg-white/[0.05] px-4 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-brand-400/70 focus:bg-white/10"
                />
                <button
                  type="submit"
                  className="inline-flex h-11 shrink-0 items-center gap-1.5 rounded-full bg-white px-5 text-sm font-bold text-ink-900 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Join
                  <Icon.Arrow className="h-4 w-4" />
                </button>
              </div>
            </form>

            <div className="mt-7 flex items-center gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href="#top"
                  aria-label={s.name}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="font-display text-[13px] font-bold tracking-[0.14em] text-white/80 uppercase">
                  {col.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#top"
                        className="group inline-flex items-center gap-1.5 text-[14px] text-white/45 transition-colors duration-300 hover:text-white"
                      >
                        {link}
                        <Icon.Arrow className="h-3 w-3 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t border-white/8 pt-7 sm:flex-row">
          <p className="text-[13px] text-white/35">
            © {new Date().getFullYear()} Inkora Merchandise Studio B.V. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-white/35">
            {["Privacy", "Terms", "Cookies", "Modern slavery statement"].map((l) => (
              <a key={l} href="#top" className="transition-colors hover:text-white/70">
                {l}
              </a>
            ))}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-[11px] text-mint-400">
              <span className="h-1.5 w-1.5 rounded-full bg-mint-400" />
              Carbon neutral since 2019
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
