import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import posipreneBoxReal from "@/assets/posiprene-box-real.webp";
import cscLogo from "@/assets/csc-logo.png";
import { ArrowRight, Facebook, Instagram, Lock, Trophy } from "lucide-react";

const SHOP_URL =
  "https://clinicalsupplycompany.com/collections/gloves/products/pink-posi-prene-gloves-powder-free";
const SAMPLES_URL = "https://clinicalsupplycompany.com/pages/csc-samples-request";
const FB_URL = "https://www.facebook.com/clinicalsupplycompany";
const IG_URL = "https://www.instagram.com/clinicalsupplycompany";

export const Route = createFileRoute("/challenge2026")({
  head: () => ({
    meta: [
      { title: "The Posi-Prene Challenge — Fastest Hands in Dentistry" },
      {
        name: "description",
        content:
          "You've been challenged. Race Posi-Prene against standard nitrile on wet hands, post the video, and win three months of Posi-Prene for your practice.",
      },
      { property: "og:title", content: "The Posi-Prene Challenge — You've Been Challenged" },
      {
        property: "og:description",
        content:
          "Race Posi-Prene against standard nitrile on wet hands. Post the video. Win three months of gloves.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pink-perfection-switch.lovable.app/challenge2026" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "canonical", href: "https://pink-perfection-switch.lovable.app/challenge2026" },
    ],
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
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-medium tracking-[0.28em] uppercase text-white/70 backdrop-blur-sm">
      <span className="w-1 h-1 rounded-full bg-[oklch(0.65_0.22_350)]" />
      {children}
    </div>
  );
}

function PinkButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff3d8b] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_-15px_rgba(255,61,139,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[oklch(0.65_0.24_350)] ${className}`}
    >
      {children}
      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
    </a>
  );
}

function GhostButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white/85 transition-all duration-300 hover:border-white/60 hover:bg-white/5 hover:text-white ${className}`}
    >
      {children}
    </a>
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
    <div className="min-h-screen bg-[#050d1a] text-white font-sans antialiased">
      <div className="h-[3px] w-full bg-[oklch(0.65_0.22_350)]" />
      <header className="sticky top-0 inset-x-0 z-50 bg-[#050d1a]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-12 flex items-center justify-between gap-4">
          <img src={cscLogo} alt="Clinical Supply Co." width={896} height={512} className="h-7 w-auto opacity-95" />
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.3em] text-white/40">
            Invitation Only
          </span>
        </div>
      </header>

      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden pt-16 md:pt-24 pb-16 md:pb-24">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% 20%, rgba(56,103,180,0.22) 0%, rgba(5,13,26,0) 70%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at 50% 30%, black 0%, transparent 75%)",
          }}
        />
        <div
          aria-hidden
          className="absolute -top-24 right-[-10%] w-[42vw] h-[42vw] max-w-[520px] max-h-[520px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, oklch(0.65 0.22 350 / 0.28) 0%, transparent 65%)",
            filter: "blur(50px)",
          }}
        />

        <div className="relative w-full max-w-5xl mx-auto px-6 text-center">
          <div className="animate-hero-rise inline-flex items-center gap-2 rounded-full border border-[oklch(0.65_0.22_350/0.4)] bg-[oklch(0.65_0.22_350/0.1)] px-4 py-1.5 text-[10px] font-bold tracking-[0.32em] uppercase text-[oklch(0.82_0.14_350)]">
            <Lock className="w-3 h-3" />
            The Posi-Prene Challenge
          </div>

          <h1 className="font-serif font-normal tracking-tight leading-[1.04] text-[2.5rem] sm:text-6xl md:text-7xl mt-8 md:mt-10 max-w-4xl mx-auto animate-flash-blur text-balance uppercase">
            You&rsquo;ve Been{" "}
            <em className="italic font-light text-[oklch(0.78_0.16_350)]">Challenged</em>
          </h1>

          <p className="mt-7 max-w-2xl mx-auto text-base md:text-lg text-white/60 font-light leading-relaxed animate-hero-rise delay-150">
            Put Posi-Prene against standard nitrile on wet or sweaty hands. Record the race, post
            it and prove which glove—and which practice—comes out on top.
          </p>

          <div className="mt-10 animate-hero-rise delay-300">
            <a
              href="#rules"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("rules")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ff3d8b] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_18px_45px_-15px_rgba(255,61,139,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[oklch(0.65_0.24_350)]"
            >
              Look up the rules
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="relative mt-14 md:mt-16 mx-auto max-w-[16rem] md:max-w-[20rem] animate-box-rise">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 60%, oklch(0.65 0.22 350 / 0.4) 0%, transparent 62%)",
                filter: "blur(45px)",
              }}
            />
            <img
              src={posipreneBoxReal}
              alt="Posi-Prene Pink glove box"
              className="relative w-full h-auto animate-box-float will-change-transform"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE PRIZE */}
      <section className="relative border-y border-white/10 bg-[#081428] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal className="text-center">
            <Eyebrow>The prize</Eyebrow>
            <h2 className="font-serif font-normal text-4xl md:text-5xl mt-6 leading-[1.1]">
              Win <em className="italic text-[oklch(0.78_0.16_350)]">Three Months</em> of Posi-Prene
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-white/60 font-light leading-relaxed">
              Keep your practice stocked with Posi-Prene for three full months.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                k: "3 cases",
                v: "One full case every month for three months—three cases total.",
              },
              {
                k: "Most likes",
                v: "The eligible practice whose challenge video receives the most likes by the official deadline wins.",
              },
              {
                k: "Official rules",
                v: "Winner selection and eligibility are subject to the Official Rules.",
              },
            ].map((item, i) => (
              <Reveal key={item.k} delay={i * 80}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-[oklch(0.65_0.22_350/0.45)] hover:bg-white/[0.06]">
                  <Trophy className="w-5 h-5 text-[oklch(0.78_0.16_350)]" />
                  <p className="mt-5 font-serif text-2xl">{item.k}</p>
                  <p className="mt-3 text-sm text-white/55 font-light leading-relaxed">{item.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — HOW TO TAKE THE CHALLENGE */}
      <section id="rules" className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal className="text-center">
            <Eyebrow>How to take the challenge</Eyebrow>
            <h2 className="font-serif font-normal text-4xl md:text-5xl mt-6">
              Ready. Wet. <em className="italic text-[oklch(0.78_0.16_350)]">Glove!</em>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {[
              {
                n: "1",
                t: "Gather Your Team",
                d: "Bring together the people in your dental practice who are ready to compete.",
              },
              {
                n: "2",
                t: "Choose Your Posi-Prene Wearer",
                d: "One person wears Posi-Prene. Everyone else wears standard nitrile gloves.",
              },
              {
                n: "3",
                t: "Wet Your Hands and Race",
                d: "Start with wet, sweaty or recently sanitized hands. Race to see who can glove up first.",
              },
              {
                n: "4",
                t: "Record and Post It",
                d: "Capture the entire challenge and post the video on Instagram or Facebook.",
              },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 70}>
                <div className="h-full bg-[#050d1a] p-8 transition-colors duration-300 hover:bg-[#0b1a30]">
                  <span className="font-serif text-5xl text-[oklch(0.65_0.22_350/0.5)]">
                    0{s.n}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm text-white/55 font-light leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <GhostButton href={FB_URL}>
              <Facebook className="w-4 h-4" /> Follow CSC on Facebook
            </GhostButton>
            <GhostButton href={IG_URL}>
              <Instagram className="w-4 h-4" /> Follow CSC on Instagram
            </GhostButton>
          </Reveal>
        </div>
      </section>

      {/* SECTION 4 — DON'T HAVE POSI-PRENE */}
      <section className="border-y border-white/10 bg-[#081428] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <Eyebrow>Don't have Posi-Prene?</Eyebrow>
            <h2 className="font-serif font-normal text-4xl md:text-5xl mt-6 leading-[1.1]">
              You Can Still <em className="italic text-[oklch(0.78_0.16_350)]">Take the Challenge</em>
            </h2>
            <p className="mt-5 text-white/60 font-light leading-relaxed">
              Get the gloves you need and put Posi-Prene to the test against the standard nitrile
              gloves your practice currently uses.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <PinkButton href={SHOP_URL}>Buy Posi-Prene now</PinkButton>
              <GhostButton href={SAMPLES_URL}>Request free samples</GhostButton>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative mx-auto max-w-[18rem]">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 60%, oklch(0.65 0.22 350 / 0.35) 0%, transparent 62%)",
                  filter: "blur(40px)",
                }}
              />
              <img src={posipreneBoxReal} alt="Posi-Prene Pink glove box" className="w-full h-auto" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 5 — SUBMIT YOUR ENTRY */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal className="text-center">
            <Eyebrow>Submit your entry</Eyebrow>
            <h2 className="font-serif font-normal text-4xl md:text-5xl mt-6">
              Make Your Challenge <em className="italic text-[oklch(0.78_0.16_350)]">Official</em>
            </h2>
            <p className="mt-5 text-white/60 font-light">To enter the Posi-Prene Challenge:</p>
          </Reveal>

          <Reveal delay={80}>
            <ol className="mt-9 space-y-3 text-left">
              {[
                "Post your video on Instagram or Facebook.",
                "Tag Clinical Supply Company.",
                "Use #PosiPreneChallenge in your caption.",
                "Make sure your post is public so CSC can view it.",
                "Submit the link to your post through the form on this page.",
              ].map((line, i) => (
                <li
                  key={line}
                  className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white/70 font-light"
                >
                  <span className="text-[oklch(0.78_0.16_350)] font-semibold">0{i + 1}</span>
                  {line}
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={140}>
            <form
              className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
              onSubmit={(e) => {
                e.preventDefault();
                if (entry.trim()) setSubmitted(true);
              }}
            >
              {submitted ? (
                <p className="text-center text-sm text-white/75 font-light">
                  Entry received. The CSC team will review your post — keep it public so we can
                  count those likes.
                </p>
              ) : (
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="url"
                    required
                    value={entry}
                    onChange={(e) => setEntry(e.target.value)}
                    placeholder="Paste your Instagram or Facebook post link"
                    className="flex-1 rounded-full border border-white/15 bg-[#050d1a] px-5 py-4 text-sm text-white placeholder:text-white/35 outline-none transition-colors focus:border-[oklch(0.65_0.22_350/0.7)]"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff3d8b] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[oklch(0.65_0.24_350)]"
                  >
                    Submit your challenge
                  </button>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      {/* SECTION 6 — AMBASSADOR */}
      <section className="relative overflow-hidden border-t border-white/10 bg-[#081428] py-20 md:py-28">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 55% 60% at 50% 100%, oklch(0.65 0.22 350 / 0.18) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <Eyebrow>Become a Posi-Prene Ambassador</Eyebrow>
            <h2 className="font-serif font-normal text-4xl md:text-5xl mt-6 leading-[1.1]">
              Your Video Could Lead to{" "}
              <em className="italic text-[oklch(0.78_0.16_350)]">Something Bigger</em>
            </h2>
            <p className="mt-6 text-white/60 font-light leading-relaxed">
              CSC is looking for real dental professionals to become future Posi-Prene Ambassadors.
            </p>
            <p className="mt-4 text-white/60 font-light leading-relaxed">
              Show us your practice's energy and personality. If your video is funny, creative,
              engaging or well-edited, the CSC team may contact you about a future Posi-Prene
              Ambassador partnership.
            </p>
            <p className="mt-6 font-serif text-2xl italic text-white/85">
              Take the challenge. Tag CSC. Make sure we can find you.
            </p>
            <div className="mt-10">
              <PinkButton href={SHOP_URL}>Take the Posi-Prene Challenge</PinkButton>
            </div>
            <p className="mt-8 text-xs text-white/35 font-light">
              Participation does not guarantee selection as a Posi-Prene Ambassador.
            </p>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4 text-center">
          <img src={cscLogo} alt="Clinical Supply Co." className="h-10 w-auto opacity-80" />
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Clinical Supply Company. Winner selection and eligibility
            are subject to the Official Rules.
          </p>
        </div>
      </footer>
    </div>
  );
}
