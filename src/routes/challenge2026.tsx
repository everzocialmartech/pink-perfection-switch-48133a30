import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import cscLogo from "@/assets/csc-logo.png";
import challengeHero from "@/assets/challenge-hero.png.asset.json";
import posiPreneLogo from "@/assets/posi-prene-logo-white.png.asset.json";
import { ArrowRight, Facebook, Instagram, Lock, Trophy, Heart } from "lucide-react";

const SHOP_URL = "https://clinicalsupplycompany.com/collections/posi-prene";
const SAMPLES_URL = "https://clinicalsupplycompany.com/pages/csc-samples-request";
const FB_URL = "https://www.facebook.com/clinicalsupplycompany";
const IG_URL = "https://www.instagram.com/clinicalsupplyco/";

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
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://pink-perfection-switch.lovable.app/challenge2026" }],
  }),
  component: Challenge2026Page,
});

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }),
      { threshold: 0.01, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

const BIG_CTA =
  "group inline-flex items-center justify-center gap-3 rounded-full bg-[#C8378A] px-10 py-5 text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] text-white shadow-[0_20px_50px_-14px_rgba(255,101,39,0.85)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A82B72] hover:shadow-[0_26px_60px_-14px_rgba(255,101,39,0.95)]";

function LikeCounter({ target = 2847 }: { target?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [beat, setBeat] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
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
      className="mt-8 inline-flex items-center gap-3"
    >
      <Heart
        className={`h-6 w-6 text-[#C8378A] transition-transform ${beat ? "animate-[pulse_0.7s_ease-in-out_infinite]" : ""}`}
        fill="#C8378A"
      />
      <span className="text-2xl md:text-3xl font-semibold tabular-nums text-[#2D3142]">
        {count.toLocaleString()}
      </span>
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2D3142]/50">
        likes
      </span>
    </div>
  );
}


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
      className={`inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.32em] uppercase ${
        dark ? "text-white/55" : "text-[#2D3142]/50"
      }`}
    >
      <span className="h-px w-6 bg-[#03CDC2]" />
      {children}
    </div>
  );
}

function Challenge2026Page() {
  const [entry, setEntry] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
      window.scrollTo({ top: 0, left: 0 });
    }
  }, []);

  return (
    <div className="challenge-type min-h-screen bg-white text-[#2D3142] antialiased">
      <div className="h-[3px] w-full bg-[#03CDC2]" />
      <header className="sticky top-0 inset-x-0 z-50 bg-[#2D3142]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-24 md:h-28 flex items-center justify-between gap-4">
          <img src={cscLogo} alt="Clinical Supply Co." className="h-16 md:h-20 w-auto" />
          <img src={posiPreneLogo.url} alt="Posi-Prene" className="h-7 md:h-9 w-auto" />
        </div>
      </header>

      {/* HERO - navy */}
      <section className="relative overflow-hidden bg-[#2D3142] text-white pt-14 pb-16 md:pt-20 md:pb-20">
        <img
          src={challengeHero.url}
          alt="Clinician pulling on a Posi-Prene glove"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-[#2D3142]/80" />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 25%, rgba(23,98,239,0.28) 0%, rgba(0,14,50,0) 70%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="animate-hero-rise inline-flex items-center gap-2 rounded-full border border-[#03CDC2]/40 bg-[#03CDC2]/10 px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] uppercase text-[#03CDC2]">
            <Lock className="w-3 h-3" />
            The Posi-Prene Challenge
          </div>

          <h1 className="font-serif font-normal uppercase tracking-tight leading-[1.03] text-[2.5rem] sm:text-6xl md:text-7xl mt-7 animate-flash-blur text-balance">
            <span className="animate-shh block text-white tracking-[0.35em] text-[1.5rem] sm:text-3xl md:text-4xl mb-2">
              Shh&hellip;
            </span>
            You&rsquo;ve Been{" "}
            <em className="italic font-light text-[#03CDC2]">Challenged</em>
          </h1>

          <p className="mt-5 max-w-lg mx-auto text-base md:text-lg text-white/65 font-light animate-hero-rise delay-150">
            Posi-Prene vs. Standard nitrile on wet hands.
            <br />
            Race it. Film it. Post it.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 animate-hero-rise delay-300">
            <a
              href="#rules"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("rules")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-white/25 bg-white/[0.04] px-11 py-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.32em] text-white/85 backdrop-blur-sm transition-all duration-500 hover:border-[#03CDC2]/70 hover:text-white hover:shadow-[0_0_50px_-8px_rgba(23,98,239,0.55)]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(100deg,transparent,rgba(122,164,255,0.28),transparent)] transition-transform duration-[1100ms] ease-out group-hover:translate-x-full"
              />
              <Lock className="relative w-3.5 h-3.5 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="relative">Look up the rules</span>
              <ArrowRight className="relative w-4 h-4 opacity-70 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </section>

      {/* PRIZE - white */}
      <section className="relative overflow-hidden bg-white py-16 md:py-20">
        {/* elegant motion: sweeping hairline curves + soft light drift */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 15% 20%, rgba(23,98,239,0.08) 0%, rgba(255,255,255,0) 60%), radial-gradient(ellipse 80% 60% at 90% 85%, rgba(23,98,239,0.07) 0%, rgba(255,255,255,0) 60%)",
          }}
        />
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 1200 500"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="prizeFlow" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#03CDC2" stopOpacity="0" />
              <stop offset="45%" stopColor="#03CDC2" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#03CDC2" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path
              key={i}
              d={`M -80 ${140 + i * 44} C 300 ${60 + i * 44}, 900 ${300 + i * 44}, 1280 ${190 + i * 44}`}
              fill="none"
              stroke="url(#prizeFlow)"
              strokeWidth={i % 2 === 0 ? 1.1 : 0.6}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#03CDC2]/10 ring-1 ring-[#03CDC2]/30 shadow-[0_18px_40px_-18px_rgba(23,98,239,0.7)]">
              <Trophy className="h-9 w-9 text-[#03CDC2]" strokeWidth={1.6} />
            </div>
            <Eyebrow>The grand prize</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl mt-5">
              Three months of <em className="italic text-[#03CDC2]">FREE</em> Posi-Prene Gloves
            </h2>
            <p className="mt-4 text-[#2D3142]/60 font-light">
              Three cases, one a month. Shipped to your practice.
            </p>
            <p className="mt-6 md:mt-8 mx-auto inline-flex rounded-full border border-[#03CDC2]/40 bg-[#03CDC2]/10 px-6 py-3 text-base md:text-lg font-semibold text-[#333745]">
              Most likes by the deadline wins.
            </p>
            <div className="mt-6 md:mt-8">
              <LikeCounter />
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-12">
            <figure className="relative mx-auto max-w-md md:max-w-2xl rounded-2xl md:rounded-3xl border border-[#2D3142]/10 bg-[#f1f3f7] px-5 py-6 md:px-10 md:py-11 shadow-[0_18px_40px_-24px_rgba(0,14,50,0.35)]">
              <blockquote className="font-light text-[0.95rem] md:text-xl leading-relaxed text-[#2D3142]/80">
                &ldquo;PosiPrene gloves are the <strong className="font-semibold text-[#2D3142]">FASTEST</strong> to put
                on, even with wet or sweaty hands. Strong, sturdy, with a latex-like feel, and absolutely no latex.
                Once you try them, you won&rsquo;t go back!&rdquo;
              </blockquote>
              <span
                aria-hidden
                className="absolute left-8 md:left-12 -bottom-2.5 h-5 w-5 md:h-6 md:w-6 rotate-45 rounded-[4px] border-b border-r border-[#2D3142]/10 bg-[#f1f3f7]"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* RULES / HOW TO - navy */}
      <section id="rules" className="relative overflow-hidden bg-[#2D3142] text-white py-16 md:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(23,98,239,0.18), transparent 60%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6">
          <Reveal className="text-center">
            <img
              src={cscLogo}
              alt="Clinical Supply Company"
              className="h-10 md:h-12 w-auto mx-auto mb-5"
            />
            <Eyebrow dark>Official rules</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl mt-5">
              Ready. Wet. <em className="italic text-[#03CDC2]">Glove!</em>
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {[
              ["01", "Gather your team."],
              ["02", "One wears Posi-Prene, the rest wear nitrile."],
              ["03", "Wet hands. Race to glove up first."],
              ["04", "Film it and post it on Instagram or Facebook. Use the #PosiPreneChallenge and tag us."],
            ].map(([n, t], i) => (
              <Reveal key={n} delay={i * 60}>
                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4">
                  <span className="font-serif text-2xl text-[#03CDC2]">{n}</span>
                  <span className="text-sm text-white/75 font-light">{t}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href={FB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-white/10"
            >
              <Facebook className="w-4 h-4" /> Follow on Facebook
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-white/10"
            >
              <Instagram className="w-4 h-4" /> Follow on Instagram
            </a>
          </Reveal>
        </div>
      </section>

      {/* NEED GLOVES + ENTER - white */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl">
              Need gloves?
              <span className="block mt-2">
                You can still <em className="italic text-[#03CDC2]">take the challenge</em>
              </span>
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <PinkCTA href={SHOP_URL}>Buy Posi-Prene now</PinkCTA>
              <a
                href={SAMPLES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#2D3142]/20 px-9 py-5 text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] text-[#2D3142] transition-all duration-300 hover:border-[#2D3142] hover:-translate-y-1"
              >
                Request free samples
              </a>
            </div>
            <p className="mt-6 text-xs md:text-sm text-[#2D3142]/50 font-light max-w-xl mx-auto">
              Disclaimer: Only one pair of Posi-Prene gloves is required to race, the rest of the
              team must wear regular nitrile gloves.
            </p>
          </Reveal>

        </div>
      </section>

      {/* AMBASSADOR - navy */}
      <section className="bg-[#2D3142] text-white py-16 md:py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <Reveal>
            <img
              src={posiPreneLogo.url}
              alt="Posi-Prene"
              className="mx-auto mb-6 h-8 md:h-10 w-auto"
            />
            <p className="text-sm md:text-base font-semibold tracking-[0.22em] uppercase text-[#C8378A]">
              Become an Ambassador
            </p>
            <h2 className="font-serif text-4xl md:text-5xl mt-5 leading-[1.1]">
              Your video could lead to{" "}
              <em className="italic text-[#D8559F]">something bigger</em>
            </h2>
            <p className="mt-5 text-white/60 font-light">
              Funny, creative, well-edited?
            </p>
            <p className="mt-4 mx-auto max-w-xl rounded-xl border border-[#C8378A]/40 bg-[#C8378A]/10 px-5 py-4 text-white text-base md:text-lg font-medium">
              The CSC team may reach out about a future Posi-Prene Ambassador partnership.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="#rules"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("rules")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={BIG_CTA}
              >
                Take the challenge
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
            <p className="mt-6 text-xs text-white/35 font-light">
              Participation does not guarantee selection. Winner selection and eligibility are
              subject to the Official Rules.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SUBMIT ENTRY - white */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal className="rounded-3xl border border-[#2D3142]/10 bg-[#f1f3f7] px-6 py-10 md:px-10 md:py-12">
            <Eyebrow>This goes directly to the CSC team</Eyebrow>
            <h3 className="font-serif text-3xl md:text-4xl mt-4">Submit your link</h3>
            <p className="mt-3 text-sm text-[#2D3142]/55 font-light">
              Tag Clinical Supply Company · #PosiPreneChallenge · keep your post public.
            </p>
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
                    className="flex-1 rounded-full border border-[#2D3142]/15 bg-white px-5 py-4 text-sm outline-none focus:border-[#03CDC2]"
                  />
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#03CDC2] px-10 py-5 text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] text-white shadow-[0_20px_50px_-14px_rgba(23,98,239,0.85)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#333745] hover:shadow-[0_26px_60px_-14px_rgba(23,98,239,0.95)]"
                  >
                    Submit
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#2D3142] py-8 text-center border-t border-white/10">
        <img src={cscLogo} alt="Clinical Supply Co." className="h-9 w-auto mx-auto opacity-80" />
        <p className="mt-3 text-xs text-white/35">
          © {new Date().getFullYear()} Clinical Supply Company
        </p>
      </footer>
    </div>
  );
}
