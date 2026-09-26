import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { useScrollPosition } from "@/hooks/useReveal";
import { Button, Icon, Logo } from "./ui";

const LINKS = [
  { label: "Products", href: "#products" },
  { label: "Why Inkora", href: "#features" },
  { label: "Programs", href: "#pricing" },
  { label: "Stories", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const { y, progress } = useScrollPosition();
  const [open, setOpen] = useState(false);
  const scrolled = y > 24;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink-900"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-2.5" : "py-4",
        )}
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            aria-label="Primary"
            className={cn(
              "flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5",
              scrolled
                ? "border border-white/10 bg-ink-950/70 shadow-[0_20px_50px_-24px_rgba(4,5,12,0.9)] backdrop-blur-xl"
                : "border border-transparent bg-transparent",
            )}
          >
            <a href="#top" className="shrink-0" aria-label="Inkora home">
              <Logo />
            </a>

            <ul className="hidden items-center gap-1 lg:flex">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group relative rounded-full px-3.5 py-2 text-sm font-medium text-white/65 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                    <span className="absolute inset-x-3.5 -bottom-0.5 h-px origin-left scale-x-0 bg-[linear-gradient(90deg,transparent,#8b76ff,transparent)] transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-2.5 lg:flex">
              <a
                href="#faq"
                className="rounded-full px-3.5 py-2 text-sm font-semibold text-white/75 transition-colors hover:text-white"
              >
                Talk to sales
              </a>
              <Button href="#quote">
                Get a free mockup
                <Icon.Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/5 text-white backdrop-blur-md transition-colors hover:bg-white/10 lg:hidden"
            >
              {open ? <Icon.Close className="h-5 w-5" /> : <Icon.Menu className="h-5 w-5" />}
            </button>
          </nav>
        </div>

        {/* scroll progress */}
        <div
          aria-hidden
          className="pointer-events-none mx-auto mt-2 h-px w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div
            className="h-px origin-left bg-[linear-gradient(90deg,#6d5ef8,#a37dff,#ff9d72)] transition-transform duration-150"
            style={{ transform: `scaleX(${progress})`, opacity: scrolled ? 1 : 0 }}
          />
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-ink-950/80 backdrop-blur-sm transition-opacity duration-400",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute inset-x-3 top-20 rounded-3xl border border-white/10 bg-ink-900/95 p-5 shadow-2xl transition-all duration-400",
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
          )}
        >
          <ul className="flex flex-col">
            {LINKS.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-white/[0.07] py-3.5 text-[15px] font-semibold text-white/85 transition-colors hover:text-white"
                  style={{
                    animation: open ? `rise-in .5s cubic-bezier(.16,1,.3,1) ${i * 55}ms both` : undefined,
                  }}
                >
                  {link.label}
                  <Icon.Arrow className="h-4 w-4 text-white/35" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col gap-2.5">
            <Button href="#quote" size="lg" onClick={() => setOpen(false)}>
              Get a free mockup
              <Icon.Arrow className="h-4 w-4" />
            </Button>
            <Button href="#pricing" variant="ghost" size="lg" onClick={() => setOpen(false)}>
              See programs
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
