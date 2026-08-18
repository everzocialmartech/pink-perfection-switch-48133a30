import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import cscLogo from "@/assets/csc-logo-wordmark.png";
import challengeBg from "@/assets/challenge-bg.png.asset.json";
import posiPreneLogo from "@/assets/posi-prene-wordmark.png";
import odaLogo from "@/assets/oda-logo.png.asset.json";
import { ArrowRight, Check, Copy, Facebook, Instagram, Timer } from "lucide-react";

const PINK = "#F3267A";
const INK = "#16002E";
const PLUM = "#25003F";

const SHOP_URL = "https://clinicalsupplycompany.com/collections/posi-prene";
const ODA_REGISTER_URL = "https://www.oda.org/annual-session/";
const FB_URL = "https://www.facebook.com/clinicalsupplycompany";
const IG_URL = "https://www.instagram.com/clinicalsupplyco/";
const HASHTAG = "#PosiPreneChallenge";
const OG_IMAGE =
  "https://pink-perfection-switch.lovable.app/__l5e/assets-v1/284b47f4-69de-4735-844d-b7779e04008c/challenge-hero.png";

export const Route = createFileRoute("/ODAchallenge2026")({
  head: () => ({
    meta: [
      { title: "Posi-Prene Challenge at ODA 2026: Booth 300" },
      {
        name: "description",
        content:
          "See you at the ODA Annual Session, Sept 17-19, 2026, Greater Columbus Convention Center, Booth 300. Race Posi-Prene against nitrile on wet hands and win gloves for your practice.",
      },
      { property: "og:title", content: "Posi-Prene Challenge at ODA 2026: Booth 300" },
      {
        property: "og:description",
        content:
          "ODA Annual Session, Sept 17-19, 2026 in Columbus. Find us at Booth 300 and take the Posi-Prene Challenge.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pink-perfection-switch.lovable.app/ODAchallenge2026" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: "https://pink-perfection-switch.lovable.app/ODAchallenge2026" }],
  }),
  component: ODAChallenge2026Page,
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

/** Speed streaks pinned to the top / bottom edges, never behind copy. */
function EdgeStreaks({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const bars = [
    { top: "10px", h: "10px", w: "34%", left: "-4%", d: "0s", o: 0.9, side: "l" },
    { top: "30px", h: "5px", w: "22%", left: "auto", right: "-2%", d: "0.1s", o: 0.5, side: "r" },
    { bottom: "14px", h: "14px", w: "30%", left: "auto", right: "-4%", d: "0.2s", o: 0.8, side: "r" },
    { bottom: "40px", h: "5px", w: "18%", left: "-2%", d: "0.3s", o: 0.45, side: "l" },
  ] as const;
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {bars.map((b, i) => (
        <span
          key={i}
          className={b.side === "l" ? "animate-streak-l absolute" : "animate-streak-r absolute"}
          style={{
            top: (b as { top?: string }).top,
            bottom: (b as { bottom?: string }).bottom,
            left: (b as { left?: string }).left,
            right: (b as { right?: string }).right,
            width: b.w,
            height: b.h,
            background: PINK,
            opacity: tone === "light" ? b.o * 0.4 : b.o,
            animationDelay: b.d,
          }}
        />
      ))}
    </div>
  );
}

/** Start-line ticks. */
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#F3267A] bg-[#16002E] text-[#F3267A]">
      {children}
    </span>
  );
}

function RaceTimer({ stopAt = 4.32 }: { stopAt?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let timeout: ReturnType<typeof setTimeout>;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        const run = () => {
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = (now - start) / 1000;
            if (elapsed >= stopAt) {
              setT(stopAt);
              timeout = setTimeout(run, 2000);
              return;
            }
            setT(elapsed);
            raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        };
        run();
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, [stopAt]);

  const secs = Math.floor(t);
  const hundredths = Math.floor((t - secs) * 100);
  return (
    <div ref={ref} className="flex items-baseline gap-2 tabular-nums">
      <span className="text-6xl md:text-7xl font-extrabold italic leading-none text-[#F3267A]">
        {String(secs).padStart(2, "0")}.{String(hundredths).padStart(2, "0")}
      </span>
      <span className="text-sm font-extrabold uppercase tracking-[0.22em] text-white/70">sec</span>
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
  { id: "hero", label: "The challenge", next: "See you at ODA" },
  { id: "show", label: "ODA Show", next: "Accept the challenge" },
  { id: "beat", label: "Can you beat them?", next: "There\u2019s more\u2026" },
  { id: "bigger", label: "Early notice", next: "Look up the rules" },
  { id: "rules", label: "The rules", next: "Need gloves?" },
  { id: "gear", label: "Need gloves?" },
];

function ODAChallenge2026Page() {
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
    <div
      className="challenge-type relative min-h-screen bg-[#16002E] text-white antialiased flex flex-col"
      style={{
        backgroundImage: `url(${challengeBg.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="h-[4px] w-full bg-[#F3267A]" />
      <header className="sticky top-0 inset-x-0 z-50 bg-[#16002E]/90 backdrop-blur-md">
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
          <section className="race-grain relative overflow-hidden bg-[#16002E]/72 text-white flex min-h-[calc(100vh-5.5rem)] items-center py-8 md:py-10">
            <EdgeStreaks />
            <GhostNumeral
              n="01"
              className="right-2 md:right-8 bottom-0 text-[34vw] md:text-[26vw] leading-none text-white/[0.05]"
            />

            <div className="relative w-full max-w-6xl mx-auto px-6">
              <div className="max-w-2xl text-left">
                <div className="animate-race-rise delay-75 inline-block border-2 border-[#F3267A]/60 px-3 py-1 text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.26em] text-[#F3267A]">
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

                <p className="animate-race-rise delay-200 mt-4 max-w-md text-sm md:text-base font-extrabold uppercase tracking-[0.08em] text-white/80">
                  Two practices, one glove,{" "}
                  <span className="text-[#F3267A]">
                    who is the fastest at donning with wet hands?
                  </span>
                </p>

                <p className="animate-race-rise delay-400 mt-5 text-base md:text-xl font-extrabold uppercase italic tracking-[0.14em] text-white">
                  See you at ODA Show{" "}
                  <span className="bg-[#F3267A] px-2 py-0.5 text-[#16002E]">Booth 300</span>
                </p>

                <div className="animate-race-rise delay-400 mt-6 flex">
                  <NextButton />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* STEP 1 - ODA SHOW */}
        {step === 1 && (
          <section className="race-grain race-edge-bottom relative overflow-hidden bg-white text-[#16002E] flex min-h-[calc(100vh-5.5rem)] items-center py-14">
            <GhostNumeral n="02" className="left-[-2vw] bottom-[-2vw] text-[36vw] md:text-[26vw] text-[#25003F]/[0.06]" />
            <div className="relative max-w-6xl mx-auto px-6 w-full">
              <div className="animate-race-rise max-w-3xl">
                <Eyebrow>ODA Annual Session 2026</Eyebrow>
                <h2 className="mt-5 text-4xl md:text-6xl text-[#16002E]">
                  See you at <span className="text-[#F3267A]">Booth 300</span>
                </h2>
                <span aria-hidden className="mt-5 block h-[6px] w-40 bg-[#F3267A]" />

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="border-l-4 border-[#F3267A] pl-5">
                    <div className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#16002E]/60">
                      Dates
                    </div>
                    <ul className="mt-3 space-y-1 text-lg md:text-xl font-bold text-[#16002E]">
                      <li>September 17, 2026</li>
                      <li>September 18, 2026</li>
                      <li>September 19, 2026</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-[#F3267A] pl-5">
                    <div className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#16002E]/60">
                      Location
                    </div>
                    <p className="mt-3 text-lg md:text-xl font-bold text-[#16002E]">
                      Greater Columbus Convention Center
                    </p>
                    <p className="mt-1 text-sm text-[#16002E]/60">Columbus, Ohio</p>
                  </div>
                </div>

                <div className="animate-race-rise delay-200 mt-8 bg-[#16002E] px-7 py-7 md:px-9 md:py-8 text-white">
                  <div className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#F3267A]">
                    What?
                  </div>
                  <p className="mt-4 text-sm md:text-base text-white/75">
                    The ODA Annual Session is Sept. 17-19 in Columbus at the Greater Columbus
                    Convention Center and the Hilton Columbus Downtown Hotel. The ODA Annual Session
                    offers many opportunities to earn CE from top dental industry experts, re-connect
                    with friends and peers, and experience great dental products and services
                    first-hand.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <NextButton />
                  <BackButton />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* STEP 1 - CAN YOU BEAT THEM */}
        {step === 2 && (
          <section className="race-grain race-edge-bottom relative overflow-hidden bg-white text-[#16002E] flex min-h-[calc(100vh-5.5rem)] items-center py-16">
            <GhostNumeral n="03" className="left-[-2vw] bottom-[-2vw] text-[36vw] md:text-[26vw] text-[#25003F]/[0.06]" />
            <div className="relative max-w-6xl mx-auto px-6 w-full">
              <div className="max-w-2xl">
                <div className="animate-race-rise">
                  <Eyebrow>The competition</Eyebrow>
                  <h2 className="mt-5 text-5xl md:text-7xl text-[#16002E]">
                    Can your team beat them all?{" "}
                    <span className="text-[#F3267A]">Are you the fastest at ODA?</span>
                  </h2>
                  <span aria-hidden className="mt-6 block h-[6px] w-40 bg-[#F3267A]" />
                  <p className="mt-6 max-w-md text-base md:text-lg text-[#16002E]/70">
                    Put on Posi-Prene with wet or sweaty hands.{" "}
                    <span className="font-bold text-[#16002E]">Can you beat them all?</span>
                  </p>

                  <div className="animate-race-rise delay-200 relative mt-8 bg-[#16002E] px-7 py-7 md:px-10 md:py-9">
                    <div className="flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#F3267A]">
                      <Timer className="h-4 w-4" />
                      Fastest time to glove up wins
                    </div>
                    <div className="mt-5">
                      <RaceTimer />
                    </div>
                    <p className="mt-4 text-xs text-white/55">
                      Example only. Your clock starts the moment your hands hit the gloves.
                    </p>
                  </div>

                  <div className="animate-race-rise delay-200 mt-6 inline-block bg-white px-6 py-5">
                    <img
                      src={odaLogo.url}
                      alt="Ohio Dental Association: Advocate. Inform. Serve."
                      className="h-14 md:h-16 w-auto"
                      loading="lazy"
                    />
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-6">
                    <NextButton />
                    <BackButton />
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* STEP 3 - EARLY NOTICE */}
        {step === 3 && (
          <section className="race-grain relative overflow-hidden bg-[#25003F]/72 text-white flex min-h-[calc(100vh-5.5rem)] items-center py-10 md:py-14">
            <EdgeStreaks />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background: `radial-gradient(ellipse 70% 60% at 20% 20%, rgba(243,38,122,0.28) 0%, rgba(37,0,63,0) 65%), radial-gradient(ellipse 70% 60% at 90% 90%, rgba(22,0,46,0.9) 0%, rgba(37,0,63,0) 60%)`,
              }}
            />
            <GhostNumeral n="04" className="right-[-2vw] top-[-3vw] text-[34vw] md:text-[24vw] text-white/[0.05]" />

            <div className="relative max-w-5xl mx-auto px-6 w-full">
              <div className="animate-race-rise max-w-3xl">
                <Eyebrow dark>Early notice</Eyebrow>
                <h2 className="mt-5 text-4xl md:text-7xl leading-[0.9] text-white">
                  Something <span className="text-[#F3267A]">bigger</span> is coming
                </h2>
                <span aria-hidden className="mt-5 block h-[6px] w-40 bg-[#F3267A]" />

                <p className="mt-6 max-w-xl text-base md:text-lg text-white/75">
                  The race is only the beginning. At the ODA Show we&rsquo;re unveiling something we
                  have been keeping very quiet.
                </p>

                <div className="animate-race-rise delay-200 mt-7 border-l-[4px] border-[#F3267A] bg-[#16002E]/70 px-6 py-5 md:px-8 md:py-6">
                  <p className="race-display text-2xl md:text-4xl leading-none text-white">
                    You&rsquo;ll want to be at{" "}
                    <span className="bg-[#F3267A] px-2 text-[#16002E]">Booth 300</span> first.
                  </p>
                  <p className="mt-3 text-sm text-white/55">
                    No hints, no previews. It gets revealed live in Columbus, September 17-19.
                  </p>
                </div>

                <p className="mt-5 text-[11px] font-extrabold uppercase tracking-[0.24em] text-[#F3267A]">
                  Shh&hellip; you heard it here first.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <NextButton dark />
                  <BackButton dark />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* STEP 3 - RULES */}
        {step === 4 && (
          <section className="race-grain race-edge-bottom relative overflow-hidden bg-white text-[#16002E] py-16 md:py-20 min-h-[calc(100vh-5.5rem)]">
            <GhostNumeral n="05" className="right-[-3vw] top-[10vh] text-[34vw] md:text-[24vw] text-[#25003F]/[0.05]" />
            <div className="relative max-w-6xl mx-auto px-6">
              <div className="grid gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16 md:items-start">
                <div className="animate-race-rise md:sticky md:top-28">
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
                  ].map(([n, title, body], i) => (
                    <li
                      key={n}
                      className="animate-race-rise relative"
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

        {/* STEP 5 - NEED GLOVES */}
        {step === 5 && (
          <section className="race-grain relative overflow-hidden bg-white text-[#16002E] py-8 md:py-10 min-h-[calc(100vh-5.5rem)]">
            <EdgeStreaks tone="light" />
            <GhostNumeral n="06" className="left-[-2vw] bottom-[-1vw] text-[30vw] md:text-[22vw] text-[#25003F]/[0.06]" />
            <div className="relative max-w-5xl mx-auto px-6">
              <div className="animate-race-rise">
                <Eyebrow>Gear up</Eyebrow>
                <h2 className="mt-3 text-4xl md:text-6xl leading-[0.9] max-w-2xl">
                  Need gloves?
                  <span className="block mt-1 text-[#F3267A]">You can still take the challenge</span>
                </h2>
                <span aria-hidden className="mt-4 block h-[6px] w-32 bg-[#F3267A]" />
                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <PinkCTA href={SHOP_URL}>Buy Posi-Prene now</PinkCTA>
                  <a
                    href={ODA_REGISTER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${GHOST_CTA} text-[#25003F]`}
                  >
                    Register here
                  </a>
                </div>
                <p className="mt-4 text-xs text-[#16002E]/60 max-w-xl">
                  2026 ODA Annual Session, Ohio Dental Association.
                </p>
                <figure className="relative mt-6 max-w-2xl border-t-[3px] border-[#F3267A] pt-4">
                  <blockquote className="text-[0.9rem] md:text-base leading-relaxed text-[#16002E]/80">
                    &ldquo;PosiPrene gloves are the{" "}
                    <strong className="font-bold text-[#16002E]">FASTEST</strong> to put on, even with
                    wet or sweaty hands. Strong, sturdy, with a latex-like feel, and absolutely no
                    latex. Once you try them, you won&rsquo;t go back!&rdquo;
                  </blockquote>
                </figure>
              </div>

              <div className="mt-6 flex justify-center">
                <BackButton />
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-[#16002E]/80 py-8 text-center border-t-[3px] border-[#F3267A]">
        <img src={cscLogo} alt="Clinical Supply Co." className="h-6 w-auto mx-auto opacity-80" />
        <p className="mt-3 text-xs text-white/35">
          © {new Date().getFullYear()} Clinical Supply Company
        </p>
      </footer>
    </div>
  );
}
