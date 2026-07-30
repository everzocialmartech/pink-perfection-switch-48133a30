import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import cscLogo from "@/assets/csc-logo-wordmark.png";
import challengeHero from "@/assets/challenge-hero.png.asset.json";
import posiPreneLogo from "@/assets/posi-prene-wordmark.png";
import { ArrowRight, Check, Copy, Facebook, Gift, Instagram, Heart } from "lucide-react";

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
    <div
      ref={ref}
      aria-live="off"
      className="inline-flex items-baseline gap-3 border-b-2 border-[#03CDC2] pb-2"
    >
      <Heart
        className={`h-6 w-6 shrink-0 translate-y-1 text-[#C8378A] transition-transform ${beat ? "animate-[pulse_0.7s_ease-in-out_infinite]" : ""}`}
        fill="#C8378A"
      />
      <span className="text-4xl md:text-5xl font-semibold tabular-nums text-[#2D3142]">
        {count.toLocaleString("en-US")}
      </span>
      <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#2D3142]/60">
        likes
      </span>
    </div>
  );
}

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

const BIG_CTA =
  "group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#C8378A] px-8 py-4 text-[0.95rem] font-semibold tracking-[0.01em] text-white shadow-[0_18px_40px_-16px_rgba(200,55,138,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A82B72]";



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
      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

function Eyebrow({ dark = false, children }: { dark?: boolean; children: React.ReactNode }) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-[11px] md:text-xs font-bold tracking-[0.24em] uppercase ${
        dark ? "text-white/70" : "text-[#2D3142]/70"
      }`}
    >
      <span className={`h-px w-6 ${dark ? "bg-[#03CDC2]" : "bg-[#00857E]"}`} />
      {children}
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
      className={`group inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
        dark
          ? "border-[#03CDC2]/45 bg-[#03CDC2]/10 text-[#03CDC2] hover:bg-[#03CDC2]/20"
          : "border-[#00857E]/35 bg-[#00857E]/5 text-[#00857E] hover:bg-[#00857E]/10"
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
  const [entry, setEntry] = useState("");
  const [submitted, setSubmitted] = useState(false);
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
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    );
  };

  const BackButton = ({ dark = false }: { dark?: boolean }) =>
    step === 0 ? null : (
      <button
        type="button"
        onClick={() => go(step - 1)}
        className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors ${
          dark ? "text-white/45 hover:text-white" : "text-[#2D3142]/45 hover:text-[#2D3142]"
        }`}
      >
        <ArrowRight className="w-3.5 h-3.5 rotate-180" /> Back
      </button>
    );

  return (
    <div className="challenge-type min-h-screen bg-white text-[#2D3142] antialiased flex flex-col">
      <div className="h-[3px] w-full bg-[#03CDC2]" />
      <header className="sticky top-0 inset-x-0 z-50 bg-[#2D3142]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-14 md:h-16 flex items-center justify-between gap-4">
          <button type="button" onClick={() => go(0)} aria-label="Back to the start">
            <img src={cscLogo} alt="Clinical Supply Co." className="h-8 md:h-10 w-auto" />
          </button>
          <img src={posiPreneLogo} alt="Posi-Prene" className="h-3.5 md:h-4 w-auto" />
        </div>
        <nav aria-label="Step navigation" className="border-t border-white/10 bg-[#333745]">
          <ul className="max-w-6xl mx-auto flex items-center gap-1 overflow-x-auto px-4 sm:px-6 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:justify-center md:gap-2">
            {STEPS.map((s, i) => (
              <li key={s.id} className="shrink-0">
                <button
                  type="button"
                  onClick={() => go(i)}
                  aria-current={i === step ? "step" : undefined}
                  className={`inline-flex items-center rounded-full px-3 py-1.5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.14em] transition-colors ${
                    i === step
                      ? "bg-[#03CDC2]/15 text-[#03CDC2]"
                      : "text-white/60 hover:bg-white/10 hover:text-white"
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
                className="inline-flex items-center rounded-full px-3 py-1.5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.14em] text-[#03CDC2] transition-colors hover:bg-[#03CDC2]/15 hover:text-white"
              >
                Shop
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main key={step} className="flex-1 animate-hero-rise">
        {/* STEP 0 - HERO */}
        {step === 0 && (
          <section className="relative overflow-hidden bg-[#2D3142] text-white flex min-h-[calc(100vh-6.5rem)] items-center py-16">
            <img src={challengeHero.url} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
            <div aria-hidden className="absolute inset-0 bg-[#2D3142]/80" />
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 55% at 50% 25%, rgba(3,205,194,0.22) 0%, rgba(45,49,66,0) 70%)",
              }}
            />
            <div className="relative max-w-4xl mx-auto px-6 text-center">
              <div className="animate-hero-rise inline-flex items-center gap-2 rounded-full border border-[#03CDC2]/40 bg-[#03CDC2]/10 px-4 py-1.5 text-[11px] md:text-xs font-bold tracking-[0.24em] uppercase text-[#03CDC2]">
                The Posi-Prene Challenge
              </div>

              <h1 className="font-serif font-normal uppercase tracking-tight leading-[1.03] text-[2.5rem] sm:text-6xl md:text-7xl mt-7 animate-flash-blur text-balance">
                <span className="animate-shh block text-white tracking-[0.35em] text-[1.5rem] sm:text-3xl md:text-4xl mb-2">
                  Shh&hellip;
                </span>
                You&rsquo;ve Been <em className="italic font-light text-[#03CDC2]">Challenged</em>
              </h1>

              <p className="mt-5 max-w-lg mx-auto text-base md:text-lg text-white/65 font-light animate-hero-rise delay-150">
                Posi-Prene vs. Standard nitrile on wet hands.
                <br />
                Race it. Film it. Post it.
                <br />
                <span className="text-[#03CDC2] font-normal">Posi-Prene Always Wins.</span>
              </p>

              <div className="mt-9 flex justify-center animate-hero-rise delay-300">
                <NextButton />
              </div>
            </div>
          </section>
        )}

        {/* STEP 1 - CAN YOU BEAT THEM */}
        {step === 1 && (
          <section className="relative overflow-hidden bg-white flex min-h-[calc(100vh-6.5rem)] items-center py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 20% 15%, rgba(3,205,194,0.14) 0%, rgba(255,255,255,0) 62%), radial-gradient(ellipse 80% 60% at 88% 88%, rgba(200,55,138,0.10) 0%, rgba(255,255,255,0) 62%)",
              }}
            />
            <div className="relative max-w-5xl mx-auto px-6 w-full">
              <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:gap-14 md:items-center">
                <div>
                  <Eyebrow>The competition</Eyebrow>
                  <h2 className="font-serif text-4xl md:text-5xl mt-5 leading-[1.1] text-[#2D3142]">
                    Can your practice beat them all?
                  </h2>
                  <p className="mt-6 max-w-md text-base md:text-lg text-[#333745]/75 font-light">
                    Every team that races posts their video. The one with the most likes at the
                    deadline takes the prize.
                  </p>
                  <div className="mt-9 flex flex-wrap items-center gap-5">
                    <NextButton />
                    <BackButton />
                  </div>
                </div>

                <div className="rounded-2xl md:rounded-3xl border border-[#2D3142]/10 bg-white px-6 py-7 md:px-9 md:py-10 shadow-[0_28px_60px_-30px_rgba(45,49,66,0.45)]">
                  <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#00857E]">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#03CDC2] opacity-70 animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00857E]" />
                    </span>
                    Most likes wins
                  </div>
                  <div className="mt-4">
                    <LikeCounter />
                  </div>
                  <p className="mt-3 text-xs text-[#333745]/55 font-light">
                    Example only. Your entry&rsquo;s likes start counting the moment you post.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* STEP 2 - PRIZE */}
        {step === 2 && (
          <section className="relative overflow-hidden bg-white flex min-h-[calc(100vh-6.5rem)] items-center py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 90% 60% at 15% 20%, rgba(200,55,138,0.14) 0%, rgba(255,255,255,0) 62%), radial-gradient(ellipse 80% 60% at 90% 85%, rgba(200,55,138,0.12) 0%, rgba(255,255,255,0) 62%)",
              }}
            />
            <div className="relative max-w-5xl mx-auto px-6 w-full">
              <div className="grid gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-14 md:items-center">
                <div>
                  <Eyebrow>The grand prize</Eyebrow>
                  <h2 className="font-serif text-4xl md:text-5xl mt-5 text-[#2D3142] leading-[1.1]">
                    Three months of <em className="italic text-[#C8378A]">FREE</em> Posi-Prene Gloves
                  </h2>

                  {/* Wrapped-present card holding the prize contents */}
                  <div className="relative mt-8 max-w-sm overflow-hidden rounded-2xl border border-[#C8378A]/25 bg-[#C8378A]/[0.06] px-6 pb-6 pt-9 shadow-[0_24px_50px_-32px_rgba(200,55,138,0.6)]">
                    {/* ribbon */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 left-1/2 w-8 -translate-x-1/2 bg-[#C8378A]/15"
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 top-9 h-8 bg-[#C8378A]/15"
                    />
                    {/* bow */}
                    <span
                      aria-hidden
                      className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1"
                    >
                      <span className="h-5 w-6 rotate-[-18deg] rounded-full border-[3px] border-[#C8378A] bg-white" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#C8378A]" />
                      <span className="h-5 w-6 rotate-[18deg] rounded-full border-[3px] border-[#C8378A] bg-white" />
                    </span>

                    <p className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-[#C8378A]">
                      What&rsquo;s inside
                    </p>
                    <ul className="relative mt-4 space-y-3">
                      {["3 cases per month", "3 full months", "Shipped free to your practice"].map((spec) => (
                        <li key={spec} className="flex items-center gap-3 text-sm text-[#333745]/80 font-light">
                          <Gift aria-hidden className="h-4 w-4 shrink-0 text-[#00857E]" strokeWidth={1.4} />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-[#2D3142]/15 pt-4 flex items-start gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00857E]" />
                    <p className="text-[0.95rem] md:text-base text-[#2D3142] font-normal">
                      Most likes by the deadline wins.
                    </p>
                  </div>

                  <div className="mt-9 flex flex-wrap items-center gap-5">
                    <NextButton />
                    <BackButton />
                  </div>
                </div>

                <div className="rounded-2xl md:rounded-3xl border border-[#2D3142]/10 bg-white px-6 py-7 md:px-9 md:py-10 shadow-[0_28px_60px_-30px_rgba(45,49,66,0.45)]">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00857E]">
                    Head start
                  </p>
                  <p className="mt-3 text-sm md:text-[0.95rem] leading-relaxed text-[#2D3142]/80 font-light">
                    <strong className="font-semibold text-[#2D3142]">Loyal Posi-Prene users</strong> get
                    a full month of advantage to gather likes before the challenge goes public.
                  </p>
                  <div className="mt-7 border-t border-[#2D3142]/10 pt-6">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#00857E]">
                      Tag your post
                    </p>
                    <div className="mt-3">
                      <HashtagChip />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* STEP 3 - RULES */}
        {step === 3 && (
          <section className="relative overflow-hidden bg-[#2D3142] text-white py-16 md:py-20 min-h-[calc(100vh-6.5rem)]">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(3,205,194,0.16), transparent 60%)" }}
            />
            <div className="relative max-w-5xl mx-auto px-6">
              <div className="grid gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16 md:items-start">
                <div>
                  <img src={cscLogo} alt="Clinical Supply Company" className="h-7 md:h-9 w-auto mb-5" />
                  <Eyebrow dark>Official rules</Eyebrow>
                  <h2 className="font-serif text-4xl md:text-5xl mt-5 leading-[1.05]">
                    Ready. Wet. <em className="italic text-[#03CDC2]">Glove!</em>
                  </h2>
                  <p className="mt-5 text-sm text-white/60 font-light max-w-xs">
                    Four steps, about five minutes. Tag your post so we can count the likes.
                  </p>
                  <div className="mt-6">
                    <HashtagChip dark />
                  </div>
                </div>

                <ol className="relative border-l border-white/12 pl-8 md:pl-10 space-y-8">
                  {[
                    ["01", "Gather your team.", "Two or more people, any operatory."],
                    ["02", "Split the gloves.", "One person wears Posi-Prene, the rest wear standard nitrile."],
                    ["03", "Wet hands. Race.", "Soak up, then glove up. First one fully gloved wins the heat."],
                    ["04", "Film it and post it.", "Instagram or Facebook, tag Clinical Supply Company and use the hashtag."],
                  ].map(([n, title, body]) => (
                    <li key={n} className="relative">
                      <span
                        aria-hidden
                        className="absolute -left-[2.6rem] md:-left-[3.1rem] top-0 flex h-9 w-9 items-center justify-center rounded-full border border-[#03CDC2]/40 bg-[#2D3142] font-serif text-sm text-[#03CDC2]"
                      >
                        {n}
                      </span>
                      <h3 className="font-serif text-2xl md:text-[1.75rem] leading-tight">{title}</h3>
                      <p className="mt-2 text-sm md:text-base text-white/65 font-light">{body}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={FB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-[0.9rem] font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Facebook className="w-4 h-4" /> Follow on Facebook
                </a>
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-[0.9rem] font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Instagram className="w-4 h-4" /> Follow on Instagram
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
                <NextButton dark />
                <BackButton dark />
              </div>
            </div>
          </section>
        )}

        {/* STEP 4 - AMBASSADOR */}
        {step === 4 && (
          <section className="bg-[#2D3142] text-white flex min-h-[calc(100vh-6.5rem)] items-center py-16 text-center">
            <div className="max-w-2xl mx-auto px-6">
              <img src={posiPreneLogo} alt="Posi-Prene" className="mx-auto mb-6 h-5 md:h-6 w-auto" />
              <div className="flex justify-center">
                <Eyebrow dark>Become an Ambassador</Eyebrow>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl mt-5 leading-[1.1]">
                Your video could lead to something bigger
              </h2>
              <p className="mt-6 mx-auto max-w-xl text-base md:text-lg text-white/75 font-light">
                Funny, creative, well-edited? The CSC team may reach out about a future Posi-Prene
                Ambassador partnership.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
                <NextButton dark />
                <BackButton dark />
              </div>
              <p className="mt-6 text-xs text-white/35 font-light">
                Participation does not guarantee selection. Winner selection and eligibility are
                subject to the Official Rules.
              </p>
            </div>
          </section>
        )}

        {/* STEP 5 - NEED GLOVES + SUBMIT */}
        {step === 5 && (
          <section className="bg-white py-14 md:py-20 min-h-[calc(100vh-6.5rem)]">
            <div className="max-w-4xl mx-auto px-6">
              <div className="relative overflow-hidden rounded-3xl border border-[#2D3142]/10 bg-[#F6F8FA] px-6 py-12 md:px-14 md:py-16">
                <div aria-hidden className="pointer-events-none absolute -top-24 -right-20 h-64 w-64 rounded-full bg-[#03CDC2]/15 blur-3xl" />
                <div aria-hidden className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[#C8378A]/10 blur-3xl" />
                <div className="relative">
                  <Eyebrow>Gear up</Eyebrow>
                  <h2 className="font-serif text-4xl md:text-5xl mt-5 text-[#2D3142] leading-[1.15] max-w-xl">
                    Need gloves?
                    <span className="block mt-2 text-[#333745]/80">You can still take the challenge</span>
                  </h2>
                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <PinkCTA href={SHOP_URL}>Buy Posi-Prene now</PinkCTA>
                    <a
                      href={SAMPLES_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-[#2D3142]/25 bg-white/70 px-8 py-4 text-[0.95rem] font-medium text-[#2D3142] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00857E] hover:text-[#00857E]"
                    >
                      Request free samples
                    </a>
                  </div>
                  <p className="mt-6 text-xs md:text-sm text-[#333745]/60 font-light max-w-xl">
                    Disclaimer: Only one pair of Posi-Prene gloves is required to race, the rest of the
                    team must wear regular nitrile gloves.
                  </p>
                  <figure className="relative mt-10 max-w-2xl border-t border-[#2D3142]/12 pt-7">
                    <blockquote className="font-light text-[0.95rem] md:text-lg leading-relaxed text-[#2D3142]/75">
                      &ldquo;PosiPrene gloves are the{" "}
                      <strong className="font-semibold text-[#2D3142]">FASTEST</strong> to put on, even
                      with wet or sweaty hands. Strong, sturdy, with a latex-like feel, and absolutely no
                      latex. Once you try them, you won&rsquo;t go back!&rdquo;
                    </blockquote>
                  </figure>
                </div>
              </div>

              <div className="mt-10 rounded-3xl border border-[#2D3142]/10 bg-[#f1f3f7] px-6 py-10 md:px-10 md:py-12 text-center">
                <div className="flex justify-center">
                  <Eyebrow>This goes directly to the CSC team</Eyebrow>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl mt-4">Submit your link</h3>
                <p className="mt-3 text-sm text-[#2D3142]/65 font-light">
                  Tag Clinical Supply Company · keep your post public.
                </p>
                <div className="mt-4">
                  <HashtagChip />
                </div>
                <form
                  className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (entry.trim()) setSubmitted(true);
                  }}
                >
                  {submitted ? (
                    <p className="w-full text-sm text-[#2D3142]/70 font-light">
                      Entry received. Keep your post public so we can count the likes.
                    </p>
                  ) : (
                    <>
                      <input
                        type="url"
                        required
                        value={entry}
                        onChange={(e) => setEntry(e.target.value)}
                        placeholder="Paste your post link"
                        aria-label="Your post link"
                        className="flex-1 rounded-full border border-[#2D3142]/15 bg-white px-5 py-4 text-sm outline-none transition-colors focus:border-[#00857E] focus:ring-2 focus:ring-[#00857E]/30"
                      />
                      <button
                        type="submit"
                        className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#C8378A] px-8 py-4 text-[0.95rem] font-semibold text-white shadow-[0_18px_40px_-16px_rgba(200,55,138,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A82B72]"
                      >
                        Submit
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </>
                  )}
                </form>
              </div>

              <div className="mt-8 flex justify-center">
                <BackButton />
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-[#2D3142] py-8 text-center border-t border-white/10">
        <img src={cscLogo} alt="Clinical Supply Co." className="h-6 w-auto mx-auto opacity-80" />
        <p className="mt-3 text-xs text-white/35">
          © {new Date().getFullYear()} Clinical Supply Company
        </p>
      </footer>
    </div>
  );
}
