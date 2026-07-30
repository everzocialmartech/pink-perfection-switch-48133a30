import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import posipreneBoxReal from "@/assets/posiprene-box-real.webp";
import cscLogo from "@/assets/csc-logo.png";
import { ArrowRight, Facebook, Instagram, Lock, Trophy, Heart } from "lucide-react";

const SHOP_URL =
  "https://clinicalsupplycompany.com/collections/gloves/products/pink-posi-prene-gloves-powder-free";
const SAMPLES_URL = "https://clinicalsupplycompany.com/pages/csc-samples-request";
const FB_URL = "https://www.facebook.com/clinicalsupplycompany";
const IG_URL = "https://www.instagram.com/clinicalsupplycompany";

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
  "group inline-flex items-center justify-center gap-3 rounded-full bg-[#ff6527] px-10 py-5 text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] text-white shadow-[0_20px_50px_-14px_rgba(255,101,39,0.85)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e0521a] hover:shadow-[0_26px_60px_-14px_rgba(255,101,39,0.95)]";

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
      className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#1762ef]/20 bg-[#1762ef]/[0.06] px-6 py-3"
    >
      <Heart
        className={`h-6 w-6 text-[#ff6527] transition-transform ${beat ? "animate-[pulse_0.7s_ease-in-out_infinite]" : ""}`}
        fill="#ff6527"
      />
      <span className="text-2xl md:text-3xl font-semibold tabular-nums text-[#000e32]">
        {count.toLocaleString()}
      </span>
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#000e32]/50">
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
        dark ? "text-white/55" : "text-[#000e32]/50"
      }`}
    >
      <span className="h-px w-6 bg-[#1762ef]" />
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
    <div className="challenge-type min-h-screen bg-white text-[#000e32] antialiased">
      <div className="h-[3px] w-full bg-[#1762ef]" />
      <header className="sticky top-0 inset-x-0 z-50 bg-[#000e32]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
          <img src={cscLogo} alt="Clinical Supply Co." className="h-11 md:h-12 w-auto" />
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.3em] text-white/40">
            Invitation Only
          </span>
        </div>
      </header>

      {/* HERO - navy */}
      <section className="relative overflow-hidden bg-[#000e32] text-white pt-14 pb-16 md:pt-20 md:pb-20">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 25%, rgba(23,98,239,0.28) 0%, rgba(0,14,50,0) 70%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="animate-hero-rise inline-flex items-center gap-2 rounded-full border border-[#1762ef]/40 bg-[#1762ef]/10 px-4 py-1.5 text-[10px] font-bold tracking-[0.3em] uppercase text-[#7ba4ff]">
            <Lock className="w-3 h-3" />
            The Posi-Prene Challenge
          </div>

          <h1 className="font-serif font-normal uppercase tracking-tight leading-[1.03] text-[2.5rem] sm:text-6xl md:text-7xl mt-7 animate-flash-blur text-balance">
            You&rsquo;ve Been{" "}
            <em className="italic font-light text-[#4d8dff]">Challenged</em>
          </h1>

          <p className="mt-5 max-w-lg mx-auto text-base md:text-lg text-white/65 font-light animate-hero-rise delay-150">
            Posi-Prene vs. nitrile on wet hands. Race it. Film it. Post it.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 animate-hero-rise delay-300">
            <a
              href="#rules"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("rules")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`${BIG_CTA} bg-[#1762ef] shadow-[0_20px_50px_-14px_rgba(23,98,239,0.85)] hover:bg-[#114b9c] hover:shadow-[0_26px_60px_-14px_rgba(23,98,239,0.95)]`}
            >
              Look up the rules
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="relative mt-10 mx-auto max-w-[13rem] md:max-w-[15rem] animate-box-rise">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 60%, rgba(23,98,239,0.45) 0%, transparent 62%)",
                filter: "blur(40px)",
              }}
            />
            <img src={posipreneBoxReal} alt="Posi-Prene Pink glove box" className="w-full h-auto animate-box-float" />
          </div>
        </div>
      </section>

      {/* PRIZE - white */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Reveal>
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#1762ef]/10 ring-1 ring-[#1762ef]/30 shadow-[0_18px_40px_-18px_rgba(23,98,239,0.7)]">
              <Trophy className="h-9 w-9 text-[#1762ef]" strokeWidth={1.6} />
            </div>
            <Eyebrow>The prize</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl mt-5">
              Three months of <em className="italic text-[#1762ef]">FREE</em> Posi-Prene Gloves
            </h2>
            <p className="mt-4 text-[#000e32]/60 font-light">
              Three cases, one a month. Most likes by the deadline wins.
            </p>
            <LikeCounter />
          </Reveal>
        </div>
      </section>

      {/* RULES / HOW TO - navy */}
      <section id="rules" className="bg-[#000e32] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal className="text-center">
            <Eyebrow dark>How it works</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl mt-5">
              Ready. Wet. <em className="italic text-[#4d8dff]">Glove!</em>
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
                  <span className="font-serif text-2xl text-[#1762ef]">{n}</span>
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
            <Eyebrow>Need gloves?</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl mt-5">
              You can still <em className="italic text-[#1762ef]">take the challenge</em>
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <PinkCTA href={SHOP_URL}>Buy Posi-Prene now</PinkCTA>
              <a
                href={SAMPLES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#000e32]/20 px-9 py-5 text-xs sm:text-sm font-extrabold uppercase tracking-[0.18em] text-[#000e32] transition-all duration-300 hover:border-[#000e32] hover:-translate-y-1"
              >
                Request free samples
              </a>
            </div>
          </Reveal>

          <Reveal delay={80} className="mt-14">
            <h3 className="font-serif text-3xl md:text-4xl">Submit your entry</h3>
            <p className="mt-3 text-sm text-[#000e32]/55 font-light">
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
                <p className="w-full text-sm text-[#000e32]/70 font-light">
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
                    className="flex-1 rounded-full border border-[#000e32]/15 px-5 py-4 text-sm outline-none focus:border-[#1762ef]"
                  />
                  <button type="submit" className={BIG_CTA}>
                    Submit
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      {/* AMBASSADOR - navy */}
      <section className="bg-[#000e32] text-white py-16 md:py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <Reveal>
            <Eyebrow dark>Ambassadors</Eyebrow>
            <h2 className="font-serif text-4xl md:text-5xl mt-5 leading-[1.1]">
              Your video could lead to{" "}
              <em className="italic text-[#ff8a52]">something bigger</em>
            </h2>
            <p className="mt-5 text-white/60 font-light">
              Funny, creative, well-edited? The CSC team may reach out about a future Posi-Prene
              Ambassador partnership.
            </p>
            <div className="mt-8 flex justify-center">
              <PinkCTA href={SHOP_URL}>Take the challenge</PinkCTA>
            </div>
            <p className="mt-6 text-xs text-white/35 font-light">
              Participation does not guarantee selection. Winner selection and eligibility are
              subject to the Official Rules.
            </p>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#000e32] py-8 text-center border-t border-white/10">
        <img src={cscLogo} alt="Clinical Supply Co." className="h-9 w-auto mx-auto opacity-80" />
        <p className="mt-3 text-xs text-white/35">
          © {new Date().getFullYear()} Clinical Supply Company
        </p>
      </footer>
    </div>
  );
}
