import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import boxImg from "@/assets/box.jpg";
import posipreneBox from "@/assets/posiprene-box.png";
import cscLogo from "@/assets/csc-logo.png";
import { ArrowRight, Check } from "lucide-react";

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
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <As
      ref={ref as any}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </As>
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
              href="#buy"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("buy")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative inline-flex items-center gap-3 rounded-full bg-white text-[#0b1f3a] px-8 py-3.5 text-[13px] font-medium tracking-[0.18em] uppercase transition-all duration-300 hover:bg-[oklch(0.65_0.22_350)] hover:text-white hover:shadow-[0_20px_50px_-15px_oklch(0.65_0.22_350/0.7)]"
            >
              Shop Posi-Prene
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#"
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

              <div className="mt-10 space-y-4">
                {[
                  { quote: "I put it on and my hand just disappeared into it. It felt like skin.", who: "DDS, Ann Arbor" },
                  { quote: "Wet hands, no fight. We've never had a glove go on this easily.", who: "Hygienist, MDA 2026" },
                  { quote: "We tossed our nitrile by the end of the week. Whole office switched.", who: "Practice Manager" },
                ].map((q) => (
                  <figure
                    key={q.who}
                    className="relative rounded-md bg-white pl-6 pr-5 py-5 shadow-[0_8px_24px_-12px_rgba(11,31,58,0.12)] border-l-2 border-[oklch(0.65_0.22_350)]"
                  >
                    <blockquote className="text-base md:text-lg text-[#0b1f3a] leading-relaxed font-light">
                      "{q.quote}"
                    </blockquote>
                    <figcaption className="mt-3 text-[10px] tracking-[0.22em] uppercase text-[#0b1f3a]/40">
                      {q.who}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            {/* Right — video */}
            <div className="relative">
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
            </div>
          </div>
        </div>
      </section>

      {/* FOUR REASONS — dark navy, editorial grid */}
      <section className="relative overflow-hidden bg-[#0b1f3a] text-white py-20 md:py-28">
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 50% 50% at 80% 20%, oklch(0.65 0.22 350 / 0.18) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] font-medium tracking-[0.28em] uppercase text-white/75 backdrop-blur-sm">
              <span className="w-1 h-1 rounded-full bg-[oklch(0.65_0.22_350)]" />
              Why teams stay
            </div>
            <h2 className="mt-6 font-serif font-normal tracking-tight leading-[1.05] text-4xl md:text-5xl lg:text-6xl">
              Four reasons they{" "}
              <em className="italic font-light text-[oklch(0.78_0.16_350)]">don't go back.</em>
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-lg overflow-hidden">
            {[
              { title: "Wetsuit stretch", body: "Polychloroprene moves with you, not against you. No fatigue at hour eight." },
              { title: "Wet-hand glide", body: "Slides on over damp or sweaty skin. No fight, no tear, no second pair." },
              { title: "Premium feel", body: "Soft-touch matte finish with real tactile feedback. Reads instruments cleanly." },
              { title: "Clean chemistry", body: "Latex-free. Powder-free. No mess on the tray, no mess on the patient." },
            ].map((item, i) => (
              <div key={item.title} className="relative bg-[#0b1f3a] p-8 md:p-10 overflow-hidden group">
                {/* Ghost number */}
                <div
                  className="absolute -top-4 -right-2 font-serif font-normal italic select-none pointer-events-none text-[8rem] leading-none text-[oklch(0.65_0.22_350)]/[0.08]"
                  aria-hidden
                >
                  {i + 1}
                </div>
                {/* Pink short rule */}
                <div className="w-8 h-px bg-[oklch(0.65_0.22_350)] mb-6 transition-all duration-500 group-hover:w-16" />
                <h3 className="font-serif text-2xl md:text-[1.625rem] font-normal text-white leading-tight">{item.title}</h3>
                <p className="mt-3 text-sm text-white/55 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          {/* Bottom CTA — pull quote left, ghost button right */}
          <div className="mt-16 md:mt-20 pt-12 border-t border-white/10 grid md:grid-cols-2 gap-10 items-center">
            <figure className="max-w-md">
              <blockquote className="font-serif text-xl md:text-2xl italic font-light text-white/90 leading-snug">
                "We re-ordered three cases the same month. It's just a better glove."
              </blockquote>
              <figcaption className="mt-3 text-[10px] tracking-[0.22em] uppercase text-white/45">
                Dr. Patel · Group Practice, Detroit
              </figcaption>
            </figure>

            <div className="flex flex-col md:items-end gap-3">
              <a
                href="#buy"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("buy")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-3 rounded-full border border-white/25 bg-transparent text-white px-7 py-3 text-[12px] font-medium tracking-[0.18em] uppercase transition-all duration-300 hover:border-[oklch(0.65_0.22_350)] hover:bg-[oklch(0.65_0.22_350)] hover:shadow-[0_20px_40px_-15px_oklch(0.65_0.22_350/0.6)]"
              >
                Shop Posi-Prene
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#" className="text-xs text-white/45 tracking-wider hover:text-white/80 transition-colors underline-offset-4 hover:underline md:text-right">
                or request a free sample
              </a>
            </div>
          </div>
        </div>
      </section>

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
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-5">
                  <a
                    href="#buy"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("buy")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.04] px-7 py-3 text-[12px] font-medium tracking-[0.18em] uppercase transition-all duration-300 hover:bg-white/10 hover:border-white/35"
                  >
                    Watch the demonstration
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <p className="text-[10px] tracking-[0.22em] uppercase text-white/35">
                    Filmed live · MDA 2026
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[320px] aspect-[9/16] bg-[#06152b] rounded-[1.75rem] border-[10px] border-[#06152b] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] overflow-hidden group">
                <video
                  src="/challenge.mp4"
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
                <div className="pointer-events-none absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/75 to-transparent">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/75 font-medium">
                    Michigan Dental Association
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUY — restrained closing CTA */}
      <section id="buy" className="scroll-mt-16 relative bg-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-[2rem] md:rounded-[2.5rem] bg-[oklch(0.985_0.005_280)] border border-[oklch(0.92_0.01_280)] p-10 md:p-16 lg:p-24 text-center">
            <div className="mb-12 md:mb-16 flex justify-center">
              <div className="relative">
                <img
                  src={boxImg}
                  alt="Posi-Prene Pink Perfection glove box"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-64 md:w-80 h-auto"
                />
                <div aria-hidden className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-8 bg-black/15 blur-2xl rounded-full -z-10" />
              </div>
            </div>

            <div className="max-w-2xl mx-auto space-y-10">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.28em] uppercase text-[#0b1f3a]/65">
                  <span className="w-8 h-px bg-[oklch(0.65_0.22_350)]" />
                  The Professional's Choice
                </div>
                <h3 className="font-serif font-normal tracking-tight leading-[1.05] text-4xl md:text-5xl lg:text-6xl text-[#0b1f3a]">
                  Ready to experience<br />
                  <em className="italic font-light text-[oklch(0.6_0.22_350)]">the new standard?</em>
                </h3>
                <p className="text-base md:text-lg text-[#0b1f3a]/55 leading-relaxed max-w-lg mx-auto">
                  Upgrade your practice to the performance of polychloroprene. Trusted by leading
                  clinicians across the country.
                </p>
              </div>

              <div className="flex flex-col items-center gap-5">
                <a
                  href="#"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#0b1f3a] text-white px-10 py-4 text-[12px] font-medium tracking-[0.18em] uppercase transition-all duration-300 hover:bg-[oklch(0.65_0.22_350)] hover:shadow-[0_20px_50px_-15px_oklch(0.65_0.22_350/0.6)] hover:-translate-y-0.5"
                >
                  Secure Posi-Prene for your practice
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href="#"
                  className="text-xs text-[#0b1f3a]/55 tracking-wider hover:text-[#0b1f3a] transition-colors underline-offset-4 hover:underline"
                >
                  or request a complimentary sample kit
                </a>
              </div>

              <div className="pt-8 flex flex-wrap items-center justify-center gap-6 md:gap-10 border-t border-[oklch(0.92_0.01_280)]">
                <div className="flex items-center gap-2 pt-8 md:pt-0">
                  <Check className="w-3.5 h-3.5 text-[oklch(0.55_0.15_160)]" />
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#0b1f3a]/45 font-medium">
                    Free clinical shipping
                  </span>
                </div>
                <div className="flex items-center gap-2 pt-8 md:pt-0">
                  <Check className="w-3.5 h-3.5 text-[oklch(0.55_0.15_160)]" />
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#0b1f3a]/45 font-medium">
                    Latex-Free Certified
                  </span>
                </div>
                <div className="flex items-center gap-2 pt-8 md:pt-0">
                  <Check className="w-3.5 h-3.5 text-[oklch(0.55_0.15_160)]" />
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#0b1f3a]/45 font-medium">
                    Ships same day before 4pm EST
                  </span>
                </div>
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
