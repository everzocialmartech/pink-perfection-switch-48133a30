import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import cscLogo from "@/assets/csc-logo-wordmark.png";
import challengeHero from "@/assets/challenge-hero.png.asset.json";
import posiPreneLogo from "@/assets/posi-prene-wordmark.png";
import { ArrowRight, Check, Copy, Facebook, Instagram, Heart, Trophy } from "lucide-react";

const PINK = "#F3267A";
const INK = "#16002E";
const PLUM = "#25003F";

const SHOP_URL = "https://clinicalsupplycompany.com/collections/posi-prene";
const SAMPLES_URL = "https://clinicalsupplycompany.com/pages/csc-samples-request";
const FB_URL = "https://www.facebook.com/clinicalsupplycompany";
const IG_URL = "https://www.instagram.com/clinicalsupplyco/";
const HASHTAG = "#PosiPreneChallenge";
const OG_IMAGE =
  "https://pink-perfection-switch.lovable.app/__l5e/assets-v1/284b47f4-69de-4735-844d-b7779e04008c/challenge-hero.png";

export const Route = createFileRoute("/challenge2026")({
  head: () => ({
    meta: [
      { title: "The Posi-Prene Challenge: Fastest Hands in Dentistry" },
      {
        name: "description",
        content:
          "You've been challenged. Race Posi-Prene against standard nitrile on wet hands, post the video, and win three months of gloves for your practice.",
      },
      { property: "og:title", content: "The Posi-Prene Challenge: You've Been Challenged" },
      {
        property: "og:description",
        content: "Race Posi-Prene against nitrile on wet hands. Post the video. Win three months of gloves.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pink-perfection-switch.lovable.app/challenge2026" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: "https://pink-perfection-switch.lovable.app/challenge2026" }],
  }),
  component: Challenge2026Page,
});

/* ---------- shared bits ---------- */

const FOCUS =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F3267A] focus-visible:ring-offset-[#16002E]";

const BIG_CTA = `group inline-flex items-center justify-center gap-3 bg-[#F3267A] px-8 py-4 text-[0.8rem] font-extrabold uppercase italic tracking-[0.14em] text-[#16002E] transition-transform duration-200 hover:-translate-y-[3px] hover:translate-x-[3px] ${FOCUS}`;

const GHOST_CTA = `group inline-flex items-center justify-center gap-3 border-2 border-current px-8 py-4 text-[0.8rem] font-extrabold uppercase italic tracking-[0.14em] transition-transform duration-200 hover:-translate-y-[3px] hover:translate-x-[3px] ${FOCUS}`;

function PinkCTA({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${BIG_CTA} ${className}`}>
      {children}
      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );
}

function Eyebrow({ dark = false, children }: { dark?: boolean; children: React.ReactNode }) {
  return (
    <div
      className={`inline-flex items-center gap-3 text-[11px] md:text-xs font-extrabold tracking-[0.28em] uppercase ${
        dark ? "text-white/75" : "text-[#25003F]/75"
      }`}
    >
      <span className="h-[3px] w-8 bg-[#F3267A]" />
      {children}
    </div>
  );
}

/** Oversized ghost numeral that drifts subtly on scroll. */
function GhostNumeral({ n, className = "" }: { n: string; className?: string }) {
  const [y, setY] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setY(window.scrollY * -0.09));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <span
      aria-hidden
      style={{ transform: `translate3d(0, ${y}px, 0)` }}
      className={`race-num pointer-events-none select-none absolute will-change-transform ${className}`}
    >
      {n}
    </span>
  );
}

/** Diagonal magenta / plum speed streaks. */
function Streaks({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const bars = [
    { top: "8%", h: "10px", w: "62%", left: "-6%", d: "0s", c: PINK, o: 0.9, side: "l" },
    { top: "20%", h: "22px", w: "48%", left: "auto", right: "-4%", d: "0.08s", c: PLUM, o: 1, side: "r" },
    { top: "44%", h: "6px", w: "38%", left: "-2%", d: "0.16s", c: PINK, o: 0.55, side: "l" },
    { top: "66%", h: "30px", w: "56%", left: "auto", right: "-8%", d: "0.24s", c: PINK, o: 0.22, side: "r" },
    { top: "82%", h: "12px", w: "44%", left: "-4%", d: "0.32s", c: PLUM, o: 0.9, side: "l" },
  ] as const;
  const visible = tone === "light" ? bars.filter((b) => ["8%", "20%", "82%"].includes(b.top)) : bars;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {visible.map((b, i) => (
        <span
          key={i}
          className={b.side === "l" ? "animate-streak-l absolute" : "animate-streak-r absolute"}
          style={{
            top: b.top,
            left: (b as { left?: string }).left,
            right: (b as { right?: string }).right,
            width: b.w,
            height: b.h,
            background: b.c,
            opacity: tone === "light" ? b.o * 0.35 : b.o,
            animationDelay: b.d,
          }}
        />
      ))}
    </div>
  );
}

/** Start-line ticks. */
function GridTicks({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none flex items-end gap-[6px] ${className}`}>
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          className="block w-[3px] bg-[#F3267A]"
          style={{ height: `${8 + (i % 4) * 7}px`, opacity: 0.25 + (i % 4) * 0.2 }}
        />
      ))}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#F3267A] bg-[#16002E] text-[#F3267A]">
      {children}
    </span>
  );
}

function LikeCounter({ target = 2847 }: { target?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(target);
  const [beat, setBeat] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    setCount(0);
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        setBeat(true);
        const start = performance.now();
        const duration = 2200;
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setCount(Math.round(target * eased));
          if (t < 1) raf = requestAnimationFrame(tick);
          else setBeat(false);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [target]);

  return (
    <div ref={ref} aria-live="off" className="inline-flex items-baseline gap-3 border-b-[3px] border-[#F3267A] pb-2">
      <Heart
        className={`h-6 w-6 shrink-0 translate-y-1 text-[#F3267A] transition-transform ${
          beat ? "animate-[pulse_0.7s_ease-in-out_infinite]" : ""
        }`}
        fill={PINK}
      />
      <span className="race-num text-5xl md:text-6xl tabular-nums text-white">
        {count.toLocaleString("en-US")}
      </span>
      <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-white/60">likes</span>
    </div>
  );
}

function HashtagChip({ dark = false }: { dark?: boolean }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard?.writeText(HASHTAG);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      }}
      aria-label={`Copy ${HASHTAG} to clipboard`}
      className={`group inline-flex min-h-11 items-center gap-2 border-2 px-4 py-2 text-sm font-bold tracking-[0.04em] transition-colors ${FOCUS} ${
        dark
          ? "border-[#F3267A]/60 bg-[#F3267A]/10 text-[#F3267A] hover:bg-[#F3267A]/20"
          : "border-[#F3267A] bg-[#F3267A]/8 text-[#C11259] hover:bg-[#F3267A]/15"
      }`}
    >
      {HASHTAG}
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4 opacity-70" />}
      <span className="sr-only" aria-live="polite">
        {copied ? "Hashtag copied" : ""}
      </span>
    </button>
  );
}

type StepDef = { id: string; label: string; next?: string };

const STEPS: StepDef[] = [
  { id: "hero", label: "The challenge", next: "Accept the challenge" },
  { id: "beat", label: "Can you beat them?", next: "Yes, what\u2019s the prize?" },
  { id: "prize", label: "The grand prize", next: "Look up the rules" },
  { id: "rules", label: "The rules", next: "Become an ambassador" },
  { id: "ambassador", label: "Ambassador", next: "Need gloves?" },
  { id: "gear", label: "Need gloves?" },
];

function Challenge2026Page() {
  const [step, setStep] = useState(0);

  const go = (i: number) => {
    setStep(Math.max(0, Math.min(STEPS.length - 1, i)));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
      window.scrollTo({ top: 0, left: 0 });
    }
  }, []);

  const NextButton = ({ dark = false }: { dark?: boolean }) => {
    const next = STEPS[step].next;
    if (!next) return null;
    return (
      <button type="button" onClick={() => go(step + 1)} className={BIG_CTA}>
        {next}
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    );
  };

  const BackButton = ({ dark = false }: { dark?: boolean }) =>
    step === 0 ? null : (
      <button
        type="button"
        onClick={() => go(step - 1)}
        className={`inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.2em] transition-colors ${FOCUS} ${
          dark ? "text-white/45 hover:text-[#F3267A]" : "text-[#25003F]/50 hover:text-[#C11259]"
        }`}
      >
        <ArrowRight className="w-3.5 h-3.5 rotate-180" /> Back
      </button>
    );

  return (
    <div className="challenge-type min-h-screen bg-[#16002E] text-white antialiased flex flex-col">
      <div className="h-[4px] w-full bg-[#F3267A]" />
      <header className="sticky top-0 inset-x-0 z-50 bg-[#16002E]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-12 md:h-14 flex items-center justify-between gap-4">
          <button type="button" onClick={() => go(0)} aria-label="Back to the start" className={FOCUS}>
            <img src={cscLogo} alt="Clinical Supply Co." className="h-7 md:h-9 w-auto" />
          </button>
          <img src={posiPreneLogo} alt="Posi-Prene" className="h-3.5 md:h-4 w-auto" />
        </div>
        <nav aria-label="Step navigation" className="border-t border-white/10 bg-[#25003F]">
          <ul className="max-w-6xl mx-auto flex items-center gap-1 overflow-x-auto px-4 sm:px-6 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:justify-center md:gap-2">
            {STEPS.map((s, i) => (
              <li key={s.id} className="shrink-0">
                <button
                  type="button"
                  onClick={() => go(i)}
                  aria-current={i === step ? "step" : undefined}
                  className={`inline-flex items-center px-3 py-1.5 text-[10px] md:text-[11px] font-extrabold uppercase italic tracking-[0.16em] transition-colors ${FOCUS} ${
                    i === step ? "bg-[#F3267A] text-[#16002E]" : "text-white/60 hover:text-[#F3267A]"
                  }`}
                >
                  {s.label}
                </button>
              </li>
            ))}
            <li className="shrink-0">
              <a
                href={SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center px-3 py-1.5 text-[10px] md:text-[11px] font-extrabold uppercase italic tracking-[0.16em] text-[#F3267A] transition-colors hover:text-white ${FOCUS}`}
              >
                Shop
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main key={step} className="flex-1">
        {/* STEP 0 - HERO */}
        {step === 0 && (
          <section className="race-grain relative overflow-hidden bg-[#16002E] text-white flex min-h-[calc(100vh-5.5rem)] items-center py-8 md:py-10">
            <Streaks />
            <div aria-hidden className="absolute inset-y-0 right-0 w-[62%] md:w-[48%]">
              <img
                src={challengeHero.url}
                alt=""
                className="race-duotone h-full w-full object-cover opacity-70"
              />
              <div
                className="absolute inset-0 mix-blend-color"
                style={{ background: `linear-gradient(200deg, ${PINK}, ${PLUM})` }}
              />
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(90deg, ${INK} 0%, rgba(22,0,46,0.75) 35%, rgba(22,0,46,0.15) 100%)` }}
              />
            </div>

            <GhostNumeral
              n="01"
              className="right-2 md:right-8 bottom-0 text-[34vw] md:text-[26vw] leading-none text-white/[0.05]"
            />

            <div className="relative w-full max-w-6xl mx-auto px-6">
              <div className="max-w-2xl text-left">
                <div className="animate-race-rise flex items-center gap-4">
                  <span className="text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.32em] text-[#F3267A]">
                    Grid position
                  </span>
                  <GridTicks />
                </div>

                <div className="animate-race-rise delay-75 mt-3 inline-block border-2 border-[#F3267A]/60 px-3 py-1 text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.26em] text-[#F3267A]">
                  The Posi-Prene Challenge
                </div>

                <h1 className="mt-4">
                  <span className="animate-shh block text-white/80 tracking-[0.35em] text-[1.1rem] sm:text-2xl not-italic font-bold">
                    Shh&hellip;
                  </span>
                  <span className="animate-race-rise delay-75 mt-1 block text-[2rem] sm:text-5xl md:text-6xl text-white">
                    You&rsquo;ve Been
                  </span>
                  <span className="animate-race-rise delay-200 block text-[3.6rem] sm:text-[6rem] md:text-[8.5rem] text-[#F3267A] leading-[0.82]">
                    Challenged
                  </span>
                </h1>

                <p className="animate-race-rise delay-200 mt-4 max-w-md text-sm md:text-base text-white/70">
                  Posi-Prene vs. Standard nitrile on wet hands.
                  <br />
                  Race it. Film it. Post it.
                  <br />
                  <span className="text-[#F3267A] font-semibold uppercase tracking-wide">
                    Posi-Prene Always Wins.
                  </span>
                </p>

                <div className="animate-race-rise delay-400 mt-6 flex">
                  <NextButton />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* STEP 1 - CAN YOU BEAT THEM */}
        {step === 1 && (
          <section className="race-grain race-edge-bottom relative overflow-hidden bg-white text-[#16002E] flex min-h-[calc(100vh-5.5rem)] items-center py-16">
            <Streaks tone="light" />
            <GhostNumeral n="02" className="left-[-2vw] bottom-[-2vw] text-[36vw] md:text-[26vw] text-[#25003F]/[0.06]" />
            <div className="relative max-w-6xl mx-auto px-6 w-full">
              <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:gap-16 md:items-center">
                <div className="animate-race-rise">
                  <Eyebrow>The competition</Eyebrow>
                  <h2 className="mt-5 text-5xl md:text-7xl text-[#16002E]">
                    Can your practice <span className="text-[#F3267A]">beat them all?</span>
                  </h2>
                  <span aria-hidden className="mt-6 block h-[6px] w-40 bg-[#F3267A]" />
                  <p className="mt-6 max-w-md text-base md:text-lg text-[#16002E]/70">
                    Every team that races posts their video. The one with the most likes at the
                    deadline takes the prize.
                  </p>
                  <div className="mt-9 flex flex-wrap items-center gap-6">
                    <NextButton />
                    <BackButton />
                  </div>
                </div>

                <div className="animate-race-rise delay-200 relative bg-[#16002E] px-7 py-9 md:px-10 md:py-11">
                  <div className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#F3267A]">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#F3267A] opacity-70 animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F3267A]" />
                    </span>
                    Most likes wins
                  </div>
                  <div className="mt-5">
                    <LikeCounter />
                  </div>
                  <p className="mt-4 text-xs text-white/55">
                    Example only. Your entry&rsquo;s likes start counting the moment you post.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* STEP 2 - PRIZE */}
        {step === 2 && (
          <section className="race-grain relative overflow-hidden bg-[#25003F] text-white flex min-h-[calc(100vh-5.5rem)] items-center py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background: `radial-gradient(ellipse 70% 60% at 20% 20%, rgba(243,38,122,0.28) 0%, rgba(37,0,63,0) 65%), radial-gradient(ellipse 70% 60% at 90% 90%, rgba(22,0,46,0.9) 0%, rgba(37,0,63,0) 60%)`,
              }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute left-0 top-1/4 h-[38%] w-full opacity-[0.35]"
              style={{ background: `linear-gradient(105deg, transparent 8%, ${INK} 30%, ${INK} 70%, transparent 92%)` }}
            />
            <GhostNumeral n="03" className="right-[-2vw] top-[-3vw] text-[34vw] md:text-[24vw] text-white/[0.05]" />

            <div className="relative max-w-6xl mx-auto px-6 w-full">
              <div className="grid gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-16 md:items-center">
                <div className="animate-race-rise">
                  <Eyebrow dark>The grand prize</Eyebrow>
                  <div className="mt-6 flex items-center gap-4">
                    <Trophy className="h-12 w-12 text-[#F3267A]" strokeWidth={1.6} />
                    <span className="race-display block text-4xl md:text-6xl text-white leading-none">
                      Posi-Prene
                    </span>
                  </div>
                  <h2 className="mt-3 text-4xl md:text-6xl text-white">
                    Three months of <span className="text-[#F3267A]">free</span> gloves
                  </h2>

                  <ul className="mt-8 max-w-sm space-y-3 border-l-[4px] border-[#F3267A] pl-5">
                    {["3 cases per month", "3 full months", "Shipped free to your practice"].map((spec) => (
                      <li key={spec} className="text-sm md:text-base text-white/80">
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 bg-[#F3267A] px-6 py-5">
                    <p className="race-display text-2xl md:text-4xl text-[#16002E] leading-none">
                      Most likes by the deadline wins.
                    </p>
                  </div>

                  <p className="mt-4 max-w-sm text-sm text-white/60">
                    Deadline is going to be communicated through email and social media.
                  </p>

                  <div className="mt-9 flex flex-wrap items-center gap-6">
                    <NextButton dark />
                    <BackButton dark />
                  </div>
                </div>

                <div className="animate-race-rise delay-200 border-2 border-white/15 px-7 py-9 md:px-10 md:py-11">
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#F3267A]">
                    Head start
                  </p>
                  <p className="mt-3 text-sm md:text-[0.95rem] leading-relaxed text-white/75">
                    <strong className="font-bold text-white">Loyal Posi-Prene users</strong> get a full
                    month of advantage to gather likes before the challenge goes public.
                  </p>
                  <div className="mt-7 border-t border-white/15 pt-6">
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#F3267A]">
                      Tag your post
                    </p>
                    <div className="mt-3">
                      <HashtagChip dark />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* STEP 3 - RULES */}
        {step === 3 && (
          <section className="race-grain race-edge-bottom relative overflow-hidden bg-white text-[#16002E] py-16 md:py-20 min-h-[calc(100vh-5.5rem)]">
            <GhostNumeral n="04" className="right-[-3vw] top-[10vh] text-[34vw] md:text-[24vw] text-[#25003F]/[0.05]" />
            <div className="relative max-w-6xl mx-auto px-6">
              <div className="grid gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16 md:items-start">
                <div className="animate-race-rise md:sticky md:top-28">
                  <img src={cscLogo} alt="Clinical Supply Company" className="h-7 md:h-9 w-auto mb-5 invert-0 opacity-90 [filter:invert(1)]" />
                  <Eyebrow>Official rules</Eyebrow>
                  <h2 className="mt-5 text-5xl md:text-7xl leading-[0.9]">
                    Ready. Wet. <span className="text-[#F3267A]">Glove!</span>
                  </h2>
                  <span aria-hidden className="mt-5 block h-[6px] w-32 bg-[#F3267A]" />
                  <p className="mt-5 text-sm text-[#16002E]/65 max-w-xs">
                    Four steps, about five minutes. Tag your post so we can count the likes.
                  </p>
                  <div className="mt-6">
                    <HashtagChip />
                  </div>
                </div>

                <ol className="relative space-y-9 border-l-2 border-[#F3267A]/25 pl-8 md:pl-12">
                  {[
                    ["01", "Gather your team.", "Two or more people, any operatory."],
                    ["02", "Split the gloves.", "One person wears Posi-Prene, the rest wear standard nitrile."],
                    ["03", "Wet hands. Race.", "Soak up, then glove up. First one fully gloved wins the heat."],
                    ["04", "Film it and post it.", "Instagram or Facebook, tag Clinical Supply Company and use the hashtag."],
                  ].map(([n, title, body], i) => (
                    <li
                      key={n}
                      className={`animate-race-rise relative ${i % 2 ? "md:translate-x-6" : ""}`}
                      style={{ animationDelay: `${0.08 * i}s` }}
                    >
                      <span aria-hidden className="race-num absolute -left-[2.4rem] md:-left-[3.6rem] -top-2 text-4xl md:text-5xl text-[#F3267A]">
                        {n}
                      </span>
                      <h3 className="text-2xl md:text-4xl leading-none">{title}</h3>
                      <p className="mt-2 text-sm md:text-base text-[#16002E]/65">{body}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={FB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-3 ${FOCUS}`}
                >
                  <Badge>
                    <Facebook className="w-5 h-5" />
                  </Badge>
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.2em]">Follow on Facebook</span>
                </a>
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-3 ${FOCUS}`}
                >
                  <Badge>
                    <Instagram className="w-5 h-5" />
                  </Badge>
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.2em]">Follow on Instagram</span>
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                <NextButton />
                <BackButton />
              </div>
            </div>
          </section>
        )}

        {/* STEP 4 - AMBASSADOR */}
        {step === 4 && (
          <section className="race-grain relative overflow-hidden bg-[#16002E] text-white flex min-h-[calc(100vh-5.5rem)] items-center py-16">
            <Streaks />
            <div className="relative max-w-5xl mx-auto px-6 w-full text-left">
              <img src={posiPreneLogo} alt="Posi-Prene" className="mb-6 h-5 md:h-6 w-auto" />
              <Eyebrow dark>Become an Ambassador</Eyebrow>
              <h2 className="mt-5 max-w-3xl text-5xl md:text-7xl leading-[0.9]">
                Your video could lead to <span className="text-[#F3267A]">something bigger</span>
              </h2>
              <p className="mt-6 max-w-xl text-base md:text-lg text-white/75">
                Funny, creative, well-edited? The CSC team may reach out about a future Posi-Prene
                Ambassador partnership.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <NextButton dark />
                <BackButton dark />
              </div>
              <p className="mt-6 max-w-xl text-xs text-white/40">
                Participation does not guarantee selection. Winner selection and eligibility are
                subject to the Official Rules.
              </p>
            </div>
          </section>
        )}

        {/* STEP 5 - NEED GLOVES */}
        {step === 5 && (
          <section className="race-grain relative overflow-hidden bg-white text-[#16002E] py-14 md:py-20 min-h-[calc(100vh-5.5rem)]">
            <Streaks tone="light" />
            <GhostNumeral n="05" className="left-[-3vw] bottom-[-3vw] text-[34vw] md:text-[24vw] text-[#25003F]/[0.05]" />
            <div className="relative max-w-5xl mx-auto px-6">
              <div className="animate-race-rise">
                <Eyebrow>Gear up</Eyebrow>
                <h2 className="mt-5 text-5xl md:text-7xl leading-[0.9] max-w-2xl">
                  Need gloves?
                  <span className="block mt-2 text-[#F3267A]">You can still take the challenge</span>
                </h2>
                <span aria-hidden className="mt-6 block h-[6px] w-40 bg-[#F3267A]" />
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <PinkCTA href={SHOP_URL}>Buy Posi-Prene now</PinkCTA>
                  <a
                    href={SAMPLES_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${GHOST_CTA} text-[#25003F]`}
                  >
                    Request free samples
                  </a>
                </div>
                <p className="mt-6 text-xs md:text-sm text-[#16002E]/60 max-w-xl">
                  Disclaimer: Only one pair of Posi-Prene gloves is required to race, the rest of the
                  team must wear regular nitrile gloves.
                </p>
                <figure className="relative mt-10 max-w-2xl border-t-[3px] border-[#F3267A] pt-7">
                  <blockquote className="text-[0.95rem] md:text-lg leading-relaxed text-[#16002E]/80">
                    &ldquo;PosiPrene gloves are the{" "}
                    <strong className="font-bold text-[#16002E]">FASTEST</strong> to put on, even with
                    wet or sweaty hands. Strong, sturdy, with a latex-like feel, and absolutely no
                    latex. Once you try them, you won&rsquo;t go back!&rdquo;
                  </blockquote>
                </figure>
              </div>

              <div className="mt-10 flex justify-center">
                <BackButton />
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-[#16002E] py-8 text-center border-t-[3px] border-[#F3267A]">
        <img src={cscLogo} alt="Clinical Supply Co." className="h-6 w-auto mx-auto opacity-80" />
        <p className="mt-3 text-xs text-white/35">
          © {new Date().getFullYear()} Clinical Supply Company
        </p>
      </footer>
    </div>
  );
}
