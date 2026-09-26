import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from "react";
import { cn } from "@/utils/cn";

/* ------------------------------------------------------------------ */
/* Reveal wrapper                                                      */
/* ------------------------------------------------------------------ */
type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
  as?: "div" | "li" | "section" | "article" | "span" | "header";
  style?: CSSProperties;
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as: Tag = "div",
  style,
}: RevealProps) {
  return (
    <Tag
      data-reveal={direction === "up" ? "" : direction}
      className={className}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* Buttons                                                             */
/* ------------------------------------------------------------------ */
type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "ghost" | "light" | "outline";
  size?: "md" | "lg";
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold transition-all duration-300 will-change-transform",
        size === "lg" ? "px-7 py-4 text-[15px]" : "px-5 py-2.5 text-sm",
        variant === "primary" &&
          "bg-[linear-gradient(100deg,#5942e0,#6d5ef8_45%,#a37dff)] text-white shadow-[0_18px_40px_-16px_rgba(109,94,248,0.85)] hover:-translate-y-0.5 hover:shadow-[0_26px_60px_-18px_rgba(109,94,248,0.95)] active:translate-y-0",
        variant === "light" &&
          "bg-white text-ink-900 shadow-[0_18px_40px_-20px_rgba(6,7,13,0.8)] hover:-translate-y-0.5",
        variant === "ghost" &&
          "border border-white/15 bg-white/5 text-white backdrop-blur-md hover:border-white/30 hover:bg-white/10",
        variant === "outline" &&
          "border border-ink-900/12 bg-white/70 text-ink-900 backdrop-blur-md hover:border-brand-400/60 hover:bg-white",
        className,
      )}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(100deg,transparent,rgba(255,255,255,0.35),transparent)] transition-transform duration-700 group-hover:translate-x-full" />
      )}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Eyebrow / pill label                                                */
/* ------------------------------------------------------------------ */
export function Eyebrow({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.16em] uppercase",
        tone === "dark"
          ? "border border-white/12 bg-white/[0.06] text-white/70 backdrop-blur-md"
          : "border border-brand-500/15 bg-brand-50 text-brand-700",
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Section heading                                                     */
/* ------------------------------------------------------------------ */
export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "center",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <Reveal>
        <Eyebrow tone={tone === "dark" ? "dark" : "light"}>
          <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
          {eyebrow}
        </Eyebrow>
      </Reveal>
      <Reveal delay={90}>
        <h2
          className={cn(
            "text-balance text-[clamp(2rem,4.6vw,3.35rem)] leading-[1.06] font-extrabold",
            tone === "dark" ? "text-white" : "text-ink-900",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={170}>
          <p
            className={cn(
              "max-w-2xl text-[17px] leading-relaxed",
              tone === "dark" ? "text-white/60" : "text-ink-900/60",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Ambient background blobs                                            */
/* ------------------------------------------------------------------ */
export function AmbientBlobs({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="animate-drift absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-brand-500/30 blur-[110px]" />
      <div
        className="animate-drift absolute top-1/3 -right-24 h-[26rem] w-[26rem] rounded-full bg-flare-500/20 blur-[120px]"
        style={{ animationDelay: "-7s" }}
      />
      <div
        className="animate-drift absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full bg-mint-500/15 blur-[120px]"
        style={{ animationDelay: "-14s" }}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Logo                                                                */
/* ------------------------------------------------------------------ */
export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#5942e0,#8b76ff_55%,#ff9d72)] shadow-[0_10px_24px_-10px_rgba(109,94,248,0.9)]">
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] text-white" fill="none" aria-hidden>
          <path
            d="M6 9V4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <rect
            x="3"
            y="9"
            width="18"
            height="7"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M7 14h10v6.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V14Z"
            fill="currentColor"
            fillOpacity="0.25"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
        <span className="absolute inset-0 rounded-xl ring-1 ring-white/25" />
      </span>
      <span
        className={cn(
          "font-display text-[19px] font-extrabold tracking-[-0.04em]",
          tone === "dark" ? "text-white" : "text-ink-900",
        )}
      >
        Inkora
      </span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Avatar with initials                                                */
/* ------------------------------------------------------------------ */
export function Avatar({
  name,
  gradient,
  className,
}: {
  name: string;
  gradient: string;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full text-xs font-bold text-white shadow-inner",
        className,
      )}
      style={{ backgroundImage: gradient }}
      aria-hidden
    >
      {initials}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */
export const Icon = {
  Arrow: (p: ComponentPropsWithoutRef<"svg">) => (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden {...p}>
      <path
        d="M4 10h11m0 0-4.2-4.2M15 10l-4.2 4.2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Check: (p: ComponentPropsWithoutRef<"svg">) => (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden {...p}>
      <path
        d="m4.5 10.5 3.6 3.6L15.5 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Star: (p: ComponentPropsWithoutRef<"svg">) => (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden {...p}>
      <path d="m10 1.8 2.4 5 5.5.8-4 3.9.95 5.5L10 14.4l-4.85 2.6.95-5.5-4-3.9 5.5-.8L10 1.8Z" />
    </svg>
  ),
  Play: (p: ComponentPropsWithoutRef<"svg">) => (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden {...p}>
      <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.4" opacity="0.45" />
      <path d="M8.2 7.2 13 10l-4.8 2.8V7.2Z" fill="currentColor" />
    </svg>
  ),
  Plus: (p: ComponentPropsWithoutRef<"svg">) => (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden {...p}>
      <path d="M10 4.5v11M4.5 10h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  Palette: (p: ComponentPropsWithoutRef<"svg">) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
      <path
        d="M12 21a9 9 0 1 1 9-9c0 2-1.6 3-3.2 3H16a2 2 0 0 0-1.5 3.3c.4.5.1 1.7-2.5 1.7Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="7.8" cy="12" r="1.2" fill="currentColor" />
      <circle cx="10" cy="8" r="1.2" fill="currentColor" />
      <circle cx="14.5" cy="8.2" r="1.2" fill="currentColor" />
    </svg>
  ),
  Truck: (p: ComponentPropsWithoutRef<"svg">) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
      <path
        d="M3 7.5A1.5 1.5 0 0 1 4.5 6H14v10H4.5A1.5 1.5 0 0 1 3 14.5v-7ZM14 9h3.6l2.4 3v4h-6V9Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17" cy="18" r="1.8" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  ),
  Box: (p: ComponentPropsWithoutRef<"svg">) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
      <path
        d="m12 3 8 4.2v9.6L12 21l-8-4.2V7.2L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="m4 7.3 8 4.2 8-4.2M12 11.5V21" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  ),
  Leaf: (p: ComponentPropsWithoutRef<"svg">) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
      <path
        d="M20 4c0 9-5 13-11 13H5c0-8 5.5-11 11-11-2.5 2.5-5.5 3.5-7 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 20c0-2 .5-3 1.2-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  Shield: (p: ComponentPropsWithoutRef<"svg">) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
      <path
        d="M12 3.2 19 6v5.6c0 4.2-2.9 7.4-7 9.2-4.1-1.8-7-5-7-9.2V6l7-2.8Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="m9 12.2 2.1 2.1L15.2 10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  ),
  Dashboard: (p: ComponentPropsWithoutRef<"svg">) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
      <rect x="3.2" y="3.2" width="7.4" height="7.4" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <rect x="13.4" y="3.2" width="7.4" height="7.4" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <rect x="3.2" y="13.4" width="7.4" height="7.4" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <rect x="13.4" y="13.4" width="7.4" height="7.4" rx="2" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  ),
  Globe: (p: ComponentPropsWithoutRef<"svg">) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
      <circle cx="12" cy="12" r="8.8" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M3.4 12h17.2M12 3.2c2.4 2.4 3.6 5.4 3.6 8.8s-1.2 6.4-3.6 8.8c-2.4-2.4-3.6-5.4-3.6-8.8S9.6 5.6 12 3.2Z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  ),
  Sparkle: (p: ComponentPropsWithoutRef<"svg">) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
      <path
        d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9 12 3.5Z"
        fill="currentColor"
        fillOpacity="0.85"
      />
      <path d="M18.5 15.5 19.3 18l2.5.8-2.5.8-.8 2.4-.8-2.4-2.5-.8 2.5-.8.8-2.5Z" fill="currentColor" fillOpacity="0.5" />
    </svg>
  ),
  Quote: (p: ComponentPropsWithoutRef<"svg">) => (
    <svg viewBox="0 0 32 24" fill="currentColor" aria-hidden {...p}>
      <path d="M13 24V13.2C13 6 17 1.4 24 0l1.5 3.6c-3.9 1.2-5.9 3.6-6.2 7h5.2V24H13Zm-13 0V13.2C0 6 4 1.4 11 0l1.5 3.6c-3.9 1.2-5.9 3.6-6.2 7h5.2V24H0Z" />
    </svg>
  ),
  Menu: (p: ComponentPropsWithoutRef<"svg">) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  Close: (p: ComponentPropsWithoutRef<"svg">) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden {...p}>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
};
