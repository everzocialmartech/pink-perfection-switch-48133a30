import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import cscLogo from "@/assets/csc-logo-wordmark.png";
import challengeHero from "@/assets/challenge-hero.png.asset.json";
import posiPreneLogo from "@/assets/posi-prene-wordmark.png";
import { ArrowRight, Check, Copy, Facebook, Instagram, Heart, Trophy } from "lucide-react";

const PINK = "#F3267A";

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
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F3267A]";

const PRIMARY =
  `group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#F3267A] px-7 py-3.5 text-[0.95rem] font-semibold text-white transition-transform duration-200 hover:-translate-y-[2px] ${FOCUS}`;

const SECONDARY = (dark = false) =>
  `group inline-flex items-center justify-center gap-2.5 rounded-full border px-7 py-3.5 text-[0.95rem] font-semibold transition-colors duration-200 ${FOCUS} ${
    dark
      ? "border-white/25 text-white hover:border-white/60"
      : "border-[#16002E]/20 text-[#16002E] hover:border-[#16002E]/50"
  }`;

function PinkCTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={PRIMARY}>
      {children}
      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );
}

function Eyebrow({ dark = false, children }: { dark?: boolean; children: React.ReactNode }) {
  return (
    <p
      className={`text-[0.78rem] font-semibold tracking-[0.14em] uppercase ${
        dark ? "text-[#F3267A]" : "text-[#F3267A]"
      }`}
    >
      {children}
    </p>
  );
}

function LikeCounter({ target = 2847 }: { target?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    setCount(0);
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const duration = 2000;
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          setCount(Math.round(target * eased));
          if (t < 1) raf = requestAnimationFrame(tick);
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
    <div ref={ref} aria-live="off" className="inline-flex items-baseline gap-3">
      <Heart className="h-6 w-6 shrink-0 translate-y-1 text-[#F3267A]" fill={PINK} />
      <span className="race-num text-6xl md:text-7xl tabular-nums text-[#16002E]">
        {count.toLocaleString("en-US")}
      </span>
      <span className="text-sm text-[#16002E]/50">likes</span>
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
      className={`group inline-flex min-h-11 items-center gap-2 text-[0.95rem] font-semibold transition-colors ${FOCUS} ${
        dark ? "text-[#F3267A] hover:text-white" : "text-[#F3267A] hover:text-[#16002E]"
      }`}
    >
      {HASHTAG}
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4 opacity-60" />}
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

const SECTION = "mx-auto w-full max-w-5xl px-6";

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

  const NextButton = () => {
    const next = STEPS[step].next;
    if (!next) return null;
    return (
      <button type="button" onClick={() => go(step + 1)} className={PRIMARY}>
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
        className={`inline-flex items-center gap-2 text-[0.95rem] transition-colors ${FOCUS} ${
          dark ? "text-white/50 hover:text-white" : "text-[#16002E]/50 hover:text-[#16002E]"
        }`}
      >
        <ArrowRight className="w-4 h-4 rotate-180" /> Back
      </button>
    );

  return (
    <div className="challenge-type min-h-screen bg-white text-[#16002E] antialiased flex flex-col">
      <header className="sticky top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-md border-b border-[#16002E]/10">
        <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between gap-6">
          <button type="button" onClick={() => go(0)} aria-label="Back to the start" className={FOCUS}>
            <img src={cscLogo} alt="Clinical Supply Co." className="h-6 md:h-7 w-auto [filter:invert(1)]" />
          </button>

          <nav aria-label="Step navigation" className="min-w-0">
            <ul className="flex items-center gap-5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {STEPS.map((s, i) => (
                <li key={s.id} className="shrink-0">
                  <button
                    type="button"
                    onClick={() => go(i)}
                    aria-current={i === step ? "step" : undefined}
                    className={`relative py-4 text-[0.82rem] transition-colors ${FOCUS} ${
                      i === step ? "text-[#16002E]" : "text-[#16002E]/50 hover:text-[#16002E]"
                    }`}
                  >
                    {s.label}
                    {i === step && (
                      <span aria-hidden className="absolute inset-x-0 -bottom-px h-[2px] bg-[#F3267A]" />
                    )}
                  </button>
                </li>
              ))}
              <li className="shrink-0">
                <a
                  href={SHOP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`py-4 text-[0.82rem] font-semibold text-[#F3267A] transition-opacity hover:opacity-70 ${FOCUS}`}
                >
                  Shop
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main key={step} className="flex-1">
        {/* STEP 0 - HERO */}
        {step === 0 && (
          <section className="flex min-h-[calc(100vh-3.5rem)] items-center py-10 md:py-14">
            <div className={SECTION}>
              <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                <div className="animate-race-rise max-w-md">
                  <Eyebrow>The Posi-Prene Challenge</Eyebrow>

                  <h1 className="mt-6">
                    <span className="animate-shh block text-[0.95rem] tracking-[0.35em] font-semibold text-[#16002E]/45">
                      Shh&hellip;
                    </span>
                    <span className="mt-3 block text-4xl md:text-5xl text-[#16002E]">
                      You&rsquo;ve been
                    </span>
                    <span className="race-display mt-1 block text-[4.2rem] md:text-[6.5rem] text-[#F3267A]">
                      Challenged
                    </span>
                  </h1>

                  <p className="mt-6 text-base md:text-lg leading-relaxed text-[#16002E]/65">
                    Posi-Prene vs. Standard nitrile on wet hands.
                    <br />
                    Race it. Film it. Post it.
                    <br />
                    <span className="font-semibold text-[#16002E]">Posi-Prene Always Wins.</span>
                  </p>

                  <div className="mt-8">
                    <NextButton />
                  </div>
                </div>

                <div className="animate-race-rise delay-200 relative">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -left-10 top-1/2 hidden h-px w-24 bg-[#F3267A]/40 md:block"
                  />
                  <img
                    src={challengeHero.url}
                    alt="Gloved hands ready to race"
                    className="w-full rounded-2xl object-cover aspect-[4/5] md:aspect-[4/5] bg-[#F5F4F2]"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* STEP 1 - CAN YOU BEAT THEM */}
        {step === 1 && (
          <section className="flex min-h-[calc(100vh-3.5rem)] items-center py-20 md:py-28">
            <div className={SECTION}>
              <div className="grid gap-14 md:grid-cols-2 md:gap-20 md:items-center">
                <div className="animate-race-rise">
                  <Eyebrow>The competition</Eyebrow>
                  <h2 className="mt-6 text-4xl md:text-5xl">
                    Can your practice beat them all?
                  </h2>
                  <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed text-[#16002E]/65">
                    Every team that races posts their video. The one with the most likes at the
                    deadline takes the prize.
                  </p>
                  <div className="mt-10 flex flex-wrap items-center gap-6">
                    <NextButton />
                    <BackButton />
                  </div>
                </div>

                <div className="animate-race-rise delay-200 md:pl-10 md:border-l md:border-[#16002E]/10">
                  <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#F3267A]">
                    Most likes wins
                  </p>
                  <div className="mt-5">
                    <LikeCounter />
                  </div>
                  <p className="mt-5 max-w-xs text-sm text-[#16002E]/50">
                    Example only. Your entry&rsquo;s likes start counting the moment you post.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* STEP 2 - PRIZE */}
        {step === 2 && (
          <section className="flex min-h-[calc(100vh-3.5rem)] items-center bg-[#25003F] py-20 text-white md:py-28">
            <div className={SECTION}>
              <div className="grid gap-14 md:grid-cols-2 md:gap-20 md:items-center">
                <div className="animate-race-rise">
                  <Eyebrow dark>The grand prize</Eyebrow>
                  <Trophy className="mt-8 h-10 w-10 text-[#F3267A]" strokeWidth={1.4} />
                  <p className="race-display mt-6 text-4xl md:text-5xl text-white">Posi-Prene</p>
                  <h2 className="mt-3 text-4xl md:text-5xl text-white">
                    Three months of free gloves
                  </h2>

                  <ul className="mt-10 max-w-sm divide-y divide-white/10 border-y border-white/10">
                    {["3 cases per month", "3 full months", "Shipped free to your practice"].map((spec) => (
                      <li key={spec} className="py-3.5 text-base text-white/70">
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-12 flex flex-wrap items-center gap-6">
                    <NextButton />
                    <BackButton dark />
                  </div>
                </div>

                <div className="animate-race-rise delay-200">
                  <p className="text-3xl md:text-4xl font-bold leading-tight text-[#F3267A]">
                    Most likes by the deadline wins.
                  </p>
                  <p className="mt-5 max-w-sm text-sm text-white/55">
                    Deadline is going to be communicated through email and social media.
                  </p>

                  <div className="mt-12 max-w-sm border-t border-white/10 pt-8">
                    <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white/50">
                      Head start
                    </p>
                    <p className="mt-3 text-base leading-relaxed text-white/70">
                      <strong className="font-semibold text-white">Loyal Posi-Prene users</strong> get a
                      full month of advantage to gather likes before the challenge goes public.
                    </p>
                  </div>

                  <div className="mt-8">
                    <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-white/50">
                      Tag your post
                    </p>
                    <div className="mt-2">
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
          <section className="min-h-[calc(100vh-3.5rem)] py-20 md:py-28">
            <div className={SECTION}>
              <div className="grid gap-14 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-20 md:items-start">
                <div className="animate-race-rise md:sticky md:top-28">
                  <Eyebrow>Official rules</Eyebrow>
                  <h2 className="mt-6 text-4xl md:text-5xl">Ready. Wet. Glove!</h2>
                  <p className="mt-6 max-w-xs text-base leading-relaxed text-[#16002E]/65">
                    Four steps, about five minutes. Tag your post so we can count the likes.
                  </p>
                  <div className="mt-6">
                    <HashtagChip />
                  </div>
                </div>

                <ol className="divide-y divide-[#16002E]/10 border-t border-[#16002E]/10">
                  {[
                    ["01", "Gather your team.", "Two or more people, any operatory."],
                    ["02", "Split the gloves.", "One person wears Posi-Prene, the rest wear standard nitrile."],
                    ["03", "Wet hands. Race.", "Soak up, then glove up. First one fully gloved wins the heat."],
                    ["04", "Film it and post it.", "Instagram or Facebook, tag Clinical Supply Company and use the hashtag."],
                  ].map(([n, title, body], i) => (
                    <li
                      key={n}
                      className="animate-race-rise flex gap-6 py-8"
                      style={{ animationDelay: `${0.08 * i}s` }}
                    >
                      <span aria-hidden className="race-num pt-1 text-lg text-[#F3267A]">
                        {n}
                      </span>
                      <div>
                        <h3 className="text-xl md:text-2xl">{title}</h3>
                        <p className="mt-2 max-w-md text-base text-[#16002E]/65">{body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-16 flex flex-wrap items-center gap-8">
                <a
                  href={FB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2.5 text-[0.95rem] text-[#16002E]/70 transition-colors hover:text-[#F3267A] ${FOCUS}`}
                >
                  <Facebook className="w-5 h-5" strokeWidth={1.6} />
                  Follow on Facebook
                </a>
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2.5 text-[0.95rem] text-[#16002E]/70 transition-colors hover:text-[#F3267A] ${FOCUS}`}
                >
                  <Instagram className="w-5 h-5" strokeWidth={1.6} />
                  Follow on Instagram
                </a>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-6">
                <NextButton />
                <BackButton />
              </div>
            </div>
          </section>
        )}

        {/* STEP 4 - AMBASSADOR */}
        {step === 4 && (
          <section className="flex min-h-[calc(100vh-3.5rem)] items-center bg-[#F7F6F4] py-20 md:py-28">
            <div className={SECTION}>
              <div className="animate-race-rise max-w-2xl">
                <img src={posiPreneLogo} alt="Posi-Prene" className="mb-8 h-4 w-auto [filter:invert(1)] opacity-70" />
                <Eyebrow>Become an ambassador</Eyebrow>
                <h2 className="mt-6 text-4xl md:text-5xl">
                  Your video could lead to something bigger
                </h2>
                <p className="mt-6 max-w-lg text-base md:text-lg leading-relaxed text-[#16002E]/65">
                  Funny, creative, well-edited? The CSC team may reach out about a future Posi-Prene
                  Ambassador partnership.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <NextButton />
                  <BackButton />
                </div>
                <p className="mt-10 max-w-lg text-sm text-[#16002E]/45">
                  Participation does not guarantee selection. Winner selection and eligibility are
                  subject to the Official Rules.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* STEP 5 - NEED GLOVES */}
        {step === 5 && (
          <section className="flex min-h-[calc(100vh-3.5rem)] items-center py-20 md:py-28">
            <div className={SECTION}>
              <div className="animate-race-rise max-w-2xl">
                <Eyebrow>Gear up</Eyebrow>
                <h2 className="mt-6 text-4xl md:text-5xl">
                  Need gloves? You can still take the challenge
                </h2>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <PinkCTA href={SHOP_URL}>Buy Posi-Prene now</PinkCTA>
                  <a
                    href={SAMPLES_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={SECONDARY()}
                  >
                    Request free samples
                  </a>
                </div>
                <p className="mt-8 max-w-xl text-sm text-[#16002E]/55">
                  Disclaimer: Only one pair of Posi-Prene gloves is required to race, the rest of the
                  team must wear regular nitrile gloves.
                </p>

                <figure className="mt-14 max-w-xl border-t border-[#16002E]/10 pt-8">
                  <blockquote className="text-lg md:text-xl leading-relaxed text-[#16002E]/80">
                    &ldquo;PosiPrene gloves are the{" "}
                    <strong className="font-semibold text-[#16002E]">FASTEST</strong> to put on, even
                    with wet or sweaty hands. Strong, sturdy, with a latex-like feel, and absolutely
                    no latex. Once you try them, you won&rsquo;t go back!&rdquo;
                  </blockquote>
                </figure>

                <div className="mt-12">
                  <BackButton />
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="border-t border-[#16002E]/10 py-10">
        <div className={`${SECTION} flex flex-col items-center gap-3 sm:flex-row sm:justify-between`}>
          <img src={cscLogo} alt="Clinical Supply Co." className="h-5 w-auto [filter:invert(1)] opacity-70" />
          <p className="text-sm text-[#16002E]/45">
            © {new Date().getFullYear()} Clinical Supply Company
          </p>
        </div>
      </footer>
    </div>
  );
}
