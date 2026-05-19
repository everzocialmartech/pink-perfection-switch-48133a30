import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import posipreneBox from "@/assets/posiprene-box.png";
import posipreneBoxReal from "@/assets/posiprene-box-real.webp";
import cscLogo from "@/assets/csc-logo.png";
import stretchCard from "@/assets/stretch-card.png";
import { ArrowRight, Truck, Volume2, VolumeX } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Reveal({
  children,
  delay = 0,
  className = "",
  as: As = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: any;
}) {
  const ref = useRef<HTMLElement | null>(null);
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
      { threshold: 0.01, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <As
      ref={ref as any}
      className={`${className} transition-all duration-300 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </As>
  );
}

function ChallengeVideo() {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);
  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    const next = !muted;
    setMuted(next);
    v.muted = next;
    v.volume = 1;
    v.play().catch(() => {});
  };
  return (
    <div className="relative w-full max-w-[320px] aspect-[9/16] bg-[#06152b] rounded-[1.75rem] border-[10px] border-[#06152b] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] overflow-hidden group">
      <video
        ref={ref}
        src="/challenge.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        playsInline
        preload="metadata"
        onVolumeChange={(e) => setMuted((e.target as HTMLVideoElement).muted)}
      />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
      <button
        type="button"
        onClick={toggle}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute top-3 right-3 z-10 inline-flex items-center justify-center w-9 h-9 rounded-full bg-black/55 backdrop-blur-sm text-white border border-white/20 hover:bg-black/75 transition-colors"
      >
        {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>
      <div className="pointer-events-none absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/75 to-transparent">
        <p className="text-[10px] uppercase tracking-[0.22em] text-white/75 font-medium">
          Michigan Dental Association
        </p>
      </div>
    </div>
  );
}

function Index() {

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
      window.scrollTo({ top: 0, left: 0 });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      {/* Nav + Hero wrapper — sticky nav unsticks at the end of the hero */}
      <div className="relative">
      {/* Hairline pink accent — the only place pink lives at full intensity */}
      <div className="h-[3px] w-full bg-[oklch(0.65_0.22_350)]" />
      <header className="sticky top-0 inset-x-0 z-50 text-white bg-[#0b1f3a] shadow-[0_4px_24px_-12px_rgba(0,0,0,0.6)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-12 flex items-center justify-between gap-4">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center shrink-0"
            aria-label="Clinical Supply Co. — Home"
          >
            <img
              src={cscLogo}
              alt="Clinical Supply Co."
              width={896}
              height={512}
              className="h-7 w-auto opacity-95"
            />
          </a>

        </div>
      </header>

      {/* HERO — floating 3D glove */}
      <section className="relative overflow-hidden bg-[#0b1f3a] text-white pt-16 md:pt-24 pb-10 md:pb-16">
        {/* Atmospheric depth — soft sapphire glow */}
        <div
          className="absolute inset-0 pointer-events-none animate-hero-glow-in"
          style={{
            background:
              "radial-gradient(ellipse 60% 55% at 50% 35%, rgba(56,103,180,0.35) 0%, rgba(56,103,180,0.12) 40%, rgba(11,31,58,0) 75%)",
          }}
        />
        {/* Single pink accent glow — restrained */}
        <div
          className="absolute -top-24 right-[-10%] w-[40vw] h-[40vw] max-w-[480px] max-h-[480px] rounded-full pointer-events-none animate-hero-glow-in delay-300"
          style={{ background: "radial-gradient(circle, oklch(0.65 0.22 350 / 0.22) 0%, transparent 65%)", filter: "blur(40px)" }}
        />

        <div className="relative w-full max-w-5xl mx-auto px-6 text-center">
          {/* Eyebrow badge */}
          <div className="animate-hero-rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-medium tracking-[0.28em] uppercase text-white/75 backdrop-blur-sm">
            <span className="w-1 h-1 rounded-full bg-[oklch(0.65_0.22_350)]" />
            Posi-Prene Pink Perfection
          </div>

          {/* Serif headline — Cormorant Garamond, generous breathing room */}
          <h1 className="font-serif font-normal tracking-tight leading-[1.02] text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] mt-8 md:mt-10 max-w-4xl mx-auto animate-hero-rise text-balance">
            The glove dental teams<br className="hidden sm:block" />{" "}
            <em className="italic font-light text-[oklch(0.78_0.16_350)]">keep switching to.</em>
          </h1>

          {/* Subline */}
          <p className="mt-7 max-w-xl mx-auto text-base md:text-lg text-white/65 font-light leading-relaxed animate-hero-rise delay-150">
            Polychloroprene built like a wetsuit. Fits like a second skin.
            Latex-free. Powder-free. Compromise-free.
          </p>

          {/* Product — single hero element, no competing glove */}
          <div
            className="relative mt-14 md:mt-16 mx-auto max-w-[18rem] md:max-w-[22rem] animate-box-rise"
            style={{ perspective: "1200px" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 65%, oklch(0.65 0.22 350 / 0.35) 0%, transparent 60%)",
                filter: "blur(40px)",
              }}
            />
            <img
              src={posipreneBox}
              alt="Posi-Prene Pink Perfection glove box"
              width={1200}
              height={900}
              className="relative w-full h-auto animate-box-float will-change-transform"
              style={{
                filter: "drop-shadow(0 30px 50px rgba(0,0,0,0.55)) drop-shadow(0 0 30px oklch(0.65 0.22 350 / 0.25))",
              }}
            />
          </div>

          {/* CTA — refined, not aggressive */}
          <div className="mt-12 md:mt-14 flex flex-col items-center gap-4 animate-hero-rise delay-300">
            <a
              href="https://clinicalsupplycompany.com/collections/gloves/products/pink-posi-prene-gloves-powder-free"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 rounded-full bg-white text-[#0b1f3a] px-8 py-3.5 text-[13px] font-medium tracking-[0.18em] uppercase transition-all duration-300 hover:bg-[oklch(0.65_0.22_350)] hover:text-white hover:shadow-[0_20px_50px_-15px_oklch(0.65_0.22_350/0.7)]"
            >
              Shop Posi-Prene
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="https://clinicalsupplycompany.com/pages/csc-samples-request"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/45 tracking-wider hover:text-white/80 transition-colors underline-offset-4 hover:underline"
            >
              or request a free sample
            </a>
          </div>

          {/* Stats strip — architectural social proof */}
          <div className="mt-16 md:mt-20 pt-10 border-t border-white/10 grid grid-cols-3 gap-3 sm:gap-6 md:gap-12 max-w-3xl mx-auto animate-hero-rise delay-500">
            {[
              { stat: "0%", label: "Latex" },
              { stat: "100%", label: "Polychloroprene" },
              { stat: "4pm", label: "Same-day ship cutoff EST" },
            ].map((item) => (
              <div key={item.label} className="text-center min-w-0">
                <div className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-white leading-none">{item.stat}</div>
                <div className="mt-2 text-[9px] sm:text-[10px] tracking-[0.16em] sm:tracking-[0.22em] uppercase text-white/45 leading-snug break-words">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>

      {/* THE REACTION — light, two-column: quotes left, video right */}
      <section id="reaction" className="scroll-mt-16 relative bg-[oklch(0.975_0.008_260)] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left — headline + quotes */}
            <div>
              <div className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.28em] uppercase text-[#0b1f3a]/65">
                <span className="w-8 h-px bg-[oklch(0.65_0.22_350)]" />
                The Reaction
              </div>

              <h2 className="mt-6 font-serif font-normal tracking-tight leading-[1] text-5xl md:text-6xl lg:text-7xl text-[#0b1f3a]">
                Still using<br />
                <em className="italic font-light text-[oklch(0.6_0.22_350)]">stiff nitrile?</em>
              </h2>

              <p className="mt-6 text-base text-[#0b1f3a]/55 max-w-md leading-relaxed">
                See what dental teams said the first time they tried Posi-Prene at the
                Michigan Dental Association.
              </p>

              {/* Mobile-only video — between description and testimonials */}
              <div className="md:hidden mt-8 relative rounded-xl overflow-hidden bg-[#0b1f3a] shadow-[0_30px_60px_-25px_rgba(11,31,58,0.45)] mx-auto max-w-[320px]">
                <video
                  src="/reaction.mp4"
                  className="w-full h-auto block bg-[#0b1f3a] aspect-[9/16] object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 backdrop-blur px-2.5 py-1 text-[9px] font-medium tracking-[0.28em] uppercase text-white/85">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.22_350)] animate-pulse" />
                  Live
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" />
                <div className="pointer-events-none absolute bottom-3 left-4 right-4 text-[9px] font-medium tracking-[0.28em] uppercase text-white/70">
                  Michigan Dental Association
                </div>
              </div>

              <div className="mt-10 flex items-center gap-3">
                <span className="h-px flex-1 bg-[#0b1f3a]/10" />
                <h3 className="font-serif text-sm md:text-base italic font-light text-[#0b1f3a]/70 tracking-wide whitespace-nowrap">
                  Polychloroprene is Better
                </h3>
                <span className="h-px flex-1 bg-[#0b1f3a]/10" />
              </div>
              <div className="mt-5 space-y-4">
                {[
                  {
                    quote: (
                      <>I put it on and my hand <strong className="font-medium text-[#0b1f3a]">just disappeared into it</strong>. It felt like skin.</>
                    ),
                    who: "DDS, Ann Arbor",
                  },
                  {
                    quote: (
                      <><strong className="font-medium text-[#0b1f3a]">Wet hands, no fight.</strong> We've never had a glove go on this easily.</>
                    ),
                    who: "Hygienist, MDA 2026",
                  },
                  {
                    quote: (
                      <>We tossed our nitrile by the end of the week. <strong className="font-medium text-[#0b1f3a]">Whole office switched.</strong></>
                    ),
                    who: "Practice Manager",
                  },
                ].map((q) => (
                  <figure
                    key={q.who}
                    tabIndex={0}
                    className="group relative overflow-hidden rounded-md bg-white pl-6 pr-5 py-5 shadow-[0_8px_24px_-12px_rgba(11,31,58,0.12)] border-l-2 border-[oklch(0.65_0.22_350)] cursor-pointer transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(11,31,58,0.25)] hover:border-l-[3px] hover:pl-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-[oklch(0.65_0.22_350)]/40 active:translate-y-0 active:scale-[0.995] active:shadow-[0_10px_24px_-14px_rgba(11,31,58,0.2)]"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "radial-gradient(120% 80% at 0% 0%, oklch(0.65 0.22 350 / 0.06), transparent 55%)",
                      }}
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -top-2 left-3 font-serif text-5xl leading-none text-[oklch(0.65_0.22_350)]/0 group-hover:text-[oklch(0.65_0.22_350)]/15 transition-colors duration-500 select-none"
                    >
                      “
                    </span>
                    <blockquote className="relative text-base md:text-lg text-[#0b1f3a]/70 leading-relaxed font-light transition-colors duration-300 group-hover:text-[#0b1f3a]">
                      "{q.quote}"
                    </blockquote>
                    <figcaption className="relative mt-3 text-[10px] tracking-[0.22em] uppercase text-[#0b1f3a]/40 transition-colors duration-300 group-hover:text-[#0b1f3a]/70">
                      {q.who}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            {/* Right — video */}
            <div className="relative hidden md:block">
              <div className="relative rounded-xl overflow-hidden bg-[#0b1f3a] shadow-[0_40px_80px_-30px_rgba(11,31,58,0.45)]">
                <video
                  src="/reaction.mp4"
                  className="w-full h-auto block bg-[#0b1f3a]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 backdrop-blur px-3 py-1.5 text-[10px] font-medium tracking-[0.28em] uppercase text-white/85">
                  <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.22_350)] animate-pulse" />
                  Live Reaction
                </div>
                <div className="pointer-events-none absolute bottom-5 left-5 right-5 text-[10px] font-medium tracking-[0.28em] uppercase text-white/70">
                  Michigan Dental Association
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />
              </div>
              <div className="mt-8 flex justify-center">
                <a
                  href="https://clinicalsupplycompany.com/collections/gloves/products/pink-posi-prene-gloves-powder-free"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#0b1f3a] px-8 py-4 text-sm font-medium tracking-[0.22em] uppercase text-white shadow-[0_20px_40px_-15px_rgba(11,31,58,0.5)] transition-all duration-300 hover:bg-[oklch(0.65_0.22_350)] hover:-translate-y-0.5 hover:shadow-[0_24px_50px_-15px_oklch(0.65_0.22_350/0.55)]"
                >
                  Make the switch
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR REASONS — dark navy, editorial grid */}
      {/* CHALLENGE — editorial navy card, video framed as designed object */}
      <section id="challenge" className="scroll-mt-16 relative bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center bg-[#0b1f3a] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden p-8 md:p-14 lg:p-20 text-white shadow-[0_40px_80px_-30px_rgba(11,31,58,0.45)]">
            <div className="lg:col-span-7 z-10">
              <div className="space-y-7 md:space-y-8">
                <div className="inline-flex items-center gap-4">
                  <span className="h-px w-12 bg-[oklch(0.65_0.22_350)]" />
                  <p className="text-[oklch(0.78_0.16_350)] font-medium tracking-[0.22em] uppercase text-[11px]">
                    Live Application
                  </p>
                </div>
                <h2 className="font-serif font-normal tracking-tight leading-[1.05] text-4xl sm:text-5xl lg:text-[4.5rem]">
                  Wet hands?<br />
                  <em className="italic font-light text-[oklch(0.78_0.16_350)]">Now gloved fast.</em>
                </h2>
                <p className="text-base md:text-lg text-white/65 font-light leading-relaxed max-w-md">
                  Engineered for high-tempo environments where every second counts. Posi-Prene
                  slides on effortlessly, even over damp skin.
                </p>
                <div className="pt-2 flex items-center gap-4">
                  <span className="inline-flex items-center gap-2 text-[10px] tracking-[0.22em] uppercase text-white/55">
                    <span className="w-6 h-px bg-white/30" />
                    Filmed live · MDA 2026
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-6">
              <ChallengeVideo />
              <a
                href="https://clinicalsupplycompany.com/collections/gloves/products/pink-posi-prene-gloves-powder-free"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-white text-[#0b1f3a] px-7 py-3 text-[12px] font-medium tracking-[0.18em] uppercase transition-all duration-300 hover:bg-[oklch(0.78_0.16_350)] hover:text-white hover:shadow-[0_20px_40px_-15px_oklch(0.65_0.22_350/0.55)]"
              >
                Shop now
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BUY — split layout: 3D box left, authoritative CTA right */}
      <section id="buy" className="scroll-mt-16 relative bg-[oklch(0.975_0.008_260)] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-stretch rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-[oklch(0.92_0.01_280)] bg-white shadow-[0_30px_60px_-25px_rgba(11,31,58,0.15)]">

            {/* LEFT — CSS-rendered 3D box on a soft surface */}
            <div
              className="relative flex items-center justify-center p-12 md:p-16 lg:p-20 min-h-[420px] md:min-h-[560px] overflow-hidden"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, oklch(0.7 0.04 260) 1px, transparent 0)",
                backgroundSize: "18px 18px",
                backgroundColor: "oklch(0.97 0.008 260)",
              }}
            >
              <div className="relative w-full max-w-[22rem] md:max-w-[26rem] animate-buy-box-float">
                <img
                  src={posipreneBoxReal}
                  alt="Posi-Prene Pink Perfection — Polychloroprene examination gloves box"
                  loading="lazy"
                  width={1152}
                  height={1152}
                  className="relative w-full h-auto drop-shadow-[0_40px_50px_rgba(11,31,58,0.35)]"
                />
                <div aria-hidden className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[75%] h-6 bg-black/20 blur-2xl rounded-full -z-10" />
                <div className="mt-6 text-center">
                  <p className="text-[10px] tracking-[0.32em] uppercase text-[#0b1f3a]/40 font-medium">
                    Polychloroprene Examination Gloves
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — CTA */}
            <div className="bg-[oklch(0.985_0.005_280)] p-10 md:p-14 lg:p-20 flex flex-col justify-center">
              <div className="inline-flex items-start gap-3 text-[11px] font-medium tracking-[0.22em] uppercase text-[#0b1f3a]/65">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-[oklch(0.65_0.22_350)]/30 bg-[oklch(0.65_0.22_350)]/8 text-[oklch(0.6_0.22_350)] shrink-0">
                  <Truck className="w-3.5 h-3.5" aria-hidden />
                </span>
                <span className="pt-1.5 leading-snug">
                  Ships today — orders before <span className="text-[#0b1f3a]">4pm EST</span>
                </span>
              </div>

              <h3 className="mt-7 font-serif font-normal tracking-tight leading-[1.05] text-4xl md:text-5xl lg:text-[3.5rem] text-[#0b1f3a]">
                Experience the{" "}
                <em className="italic font-light text-[oklch(0.6_0.22_350)]">difference.</em>
              </h3>

              <div className="mt-5 w-10 h-px bg-[oklch(0.65_0.22_350)]" />

              <p className="mt-6 text-base md:text-lg text-[#0b1f3a]/55 leading-relaxed max-w-md">
                Join thousands of dental teams who've already made the switch to Posi-Prene.
              </p>

              <div className="mt-10">
                <a
                  href="https://clinicalsupplycompany.com/collections/gloves/products/pink-posi-prene-gloves-powder-free"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full sm:w-auto items-center justify-between gap-6 rounded-md bg-[#ff3d8b] text-white px-8 py-5 text-[12px] font-medium tracking-[0.22em] uppercase transition-all duration-300 hover:bg-[#ff1f78] hover:shadow-[0_20px_50px_-20px_rgba(255,61,139,0.7)] hover:-translate-y-0.5"
                >
                  Order Posi-Prene
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-[#0b1f3a]/50">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polygon points="12,2 15,8.5 22,9.3 17,14 18.2,21 12,17.8 5.8,21 7,14 2,9.3 9,8.5" />
                </svg>
                Free shipping on orders over $250
              </div>

              <div className="mt-4">
                <a
                  href="https://clinicalsupplycompany.com/pages/csc-samples-request"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#0b1f3a]/55 tracking-wider hover:text-[#0b1f3a] transition-colors underline-offset-4 hover:underline"
                >
                  Not sure yet? Request a free sample →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      {/* removed duplicate */}
      <footer className="bg-primary text-primary-foreground/80 py-10  -mt-8 relative z-0">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <img
            src={cscLogo}
            alt="Clinical Supply Co."
            width={896}
            height={512}
            loading="lazy"
            className="h-24 md:h-28 w-auto"
          />
          <div>© {new Date().getFullYear()} Clinical Supply Company</div>
          <a href="tel:18004680188" className="font-semibold text-primary-foreground hover:text-accent">1 (800) 468 0188</a>
        </div>
      </footer>

    </div>
  );
}
