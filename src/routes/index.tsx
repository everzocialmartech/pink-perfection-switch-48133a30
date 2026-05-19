import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import boxImg from "@/assets/box.jpg";
import floatingGlove from "@/assets/floating-glove.png";
import posipreneBox from "@/assets/posiprene-box.png";
import cscLogo from "@/assets/csc-logo.png";
import { ArrowRight, Truck, ShieldCheck } from "lucide-react";

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

  // Scroll-reactive progress for the BUY section background lines
  const buyRef = useRef<HTMLElement | null>(null);
  const [buyProgress, setBuyProgress] = useState(0);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => {
      const el = buyRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 when section bottom enters viewport, 1 when section top leaves
      const p = 1 - (rect.top + rect.height) / (vh + rect.height);
      const clamped = Math.max(0, Math.min(1, p));
      // Only ever increase — lines should not retreat when scrolling back up
      setBuyProgress((prev) => (clamped > prev ? clamped : prev));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      {/* Nav + Hero wrapper — sticky nav unsticks at the end of the hero */}
      <div className="relative">
      <header className="sticky top-0 inset-x-0 z-50 text-white bg-[oklch(0.65_0.22_350)] shadow-[0_4px_20px_-8px_oklch(0.45_0.18_350/0.45)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-9 flex items-center justify-between gap-4">
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
              className="h-8 w-auto drop-shadow-[0_2px_8px_oklch(0.35_0.18_350/0.4)]"
            />
          </a>

          <nav className="flex items-center gap-1 sm:gap-2">
            {[
              { id: "reaction", label: "Reaction" },
              { id: "challenge", label: "Challenge" },
              { id: "buy", label: "Shop" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative inline-flex items-center rounded-full px-3 sm:px-4 py-1 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-white/90 hover:text-white hover:bg-white/15 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO — floating 3D glove */}
      <section className="relative overflow-hidden min-h-[78vh] md:min-h-[82vh] flex items-center pt-12 md:pt-24 pb-8">
        {/* Base canvas — soft warm off-white */}
        <div className="absolute inset-0 bg-[oklch(0.86_0.14_350)]" />

        {/* Bold pink stage circle — like the sport landing page reference */}
        <div
          className="absolute left-1/2 top-[31rem] -translate-x-1/2 -translate-y-1/2 w-[210vw] h-[210vw] rounded-full animate-hero-glow-in md:hidden"
          style={{
            background:
              "radial-gradient(circle at 35% 70%, oklch(1 0 0) 0%, oklch(0.98 0.01 350) 55%, oklch(0.95 0.03 350) 100%)",
            boxShadow:
              "0 -60px 120px -30px oklch(0.65 0.22 350 / 0.45), inset 0 40px 80px oklch(0.65 0.22 350 / 0.18)",
          }}
        />
        <div
          className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[42%] md:w-[88vw] md:h-[88vw] md:max-w-[820px] md:max-h-[820px] rounded-full animate-hero-glow-in"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, oklch(1 0 0) 0%, oklch(0.98 0.012 350) 55%, oklch(0.94 0.03 350) 100%)",
            boxShadow:
              "0 60px 120px -30px oklch(0.65 0.22 350 / 0.5), inset 0 -40px 80px oklch(0.65 0.22 350 / 0.2), 0 0 0 1px oklch(0.65 0.22 350 / 0.12)",
          }}
        />

        {/* Subtle dot grid — adds editorial texture */}
        <div
          className="absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black_75%)]"
          style={{
            backgroundImage:
              "radial-gradient(oklch(0.65 0.22 350 / 0.22) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        {/* Warm accent glow bottom-right */}
        <div className="absolute -bottom-40 -right-32 w-[55vw] h-[55vw] max-w-[640px] max-h-[640px] rounded-full bg-[oklch(0.88_0.13_55)]/35 blur-3xl animate-hero-glow-in delay-300" />

        {/* Bottom fade into next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[oklch(0.98_0.015_350)] pointer-events-none" />

        <div className="relative w-full max-w-4xl mx-auto px-6 text-center py-[10px] pb-0 pt-[37px]">
          <h1 className="font-bold tracking-tight leading-[1] text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.75rem] max-w-5xl mx-auto animate-hero-rise text-balance mb-[26px]">
            <span className="text-primary">The </span>
            <span className="font-bold text-[oklch(0.65_0.22_350)]">Pink Glove</span>
            <span className="text-primary"> Dental Teams Keep Switching To.</span>
          </h1>

          {/* Floating 3D glove popping up from behind the box */}
          <div
            className="relative -mt-4 mb-2 mx-auto max-w-[14rem] sm:max-w-[16rem] md:max-w-[19rem] lg:max-w-[22rem] pointer-events-none"
            style={{ perspective: "1000px" }}
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-sm bg-primary/15 blur-3xl" />

            {/* Glove — behind the box, pops up */}
            <div className="relative z-10 mx-auto w-[80%] -mb-[40%]">
              <img
                src={floatingGlove}
                alt="Posi-Prene Pink glove floating"
                width={1080}
                height={1920}
                className="w-full h-auto animate-glove-popup will-change-transform"
                style={{
                  transformOrigin: "bottom center",
                  animation:
                    "glove-popup 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) 1s both, float 6s ease-in-out 2.6s infinite",
                }}
              />
            </div>

            {/* Box — in front, anchored bottom */}
            <div className="relative z-20">
              {/* Soft white glow halo behind the box */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 animate-box-glow"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 55%, oklch(1 0 0 / 0.85) 0%, oklch(1 0 0 / 0.45) 30%, oklch(1 0 0 / 0) 65%)",
                  filter: "blur(28px)",
                }}
              />
              <img
                src={posipreneBox}
                alt="Posi-Prene Pink Perfection glove box"
                width={1200}
                height={900}
                className="relative w-full h-auto animate-box-rise animate-box-float"
                style={{
                  filter:
                    "saturate(1.35) contrast(1.1) brightness(1.04) drop-shadow(0 0 24px oklch(1 0 0 / 0.55)) drop-shadow(0 14px 22px oklch(0.45 0.18 350 / 0.25))",
                }}
              />
            </div>

            {/* Soft floor shadow under the box */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-6 rounded-full bg-foreground/25 blur-2xl z-0" />
          </div>

          <div className="mt-10 md:mt-12 flex items-center justify-center gap-3 flex-wrap animate-hero-rise delay-300">
            <a
              href="#buy"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("buy")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-[oklch(0.65_0.22_350)] text-white px-9 py-4 text-sm font-bold uppercase tracking-[0.15em] shadow-[0_10px_30px_-10px_oklch(0.65_0.22_350/0.55)] hover:shadow-[0_16px_40px_-12px_oklch(0.65_0.22_350/0.75)] hover:bg-[oklch(0.6_0.24_350)] transition-all duration-300 ease-out hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out" />
              Shop Now <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-4 animate-hero-rise delay-500">
            <a href="#" className="text-sm font-semibold text-[oklch(0.55_0.22_350)] underline-offset-4 hover:underline">
              Not sure yet? Get a free sample →
            </a>
          </div>

        </div>
      </section>
      </div>

      {/* SWITCH MOMENT */}
      <section id="reaction" className="scroll-mt-16 relative bg-gradient-to-b from-[oklch(0.98_0.015_350)] to-white py-10 md:py-12 border-y border-[oklch(0.92_0.04_350)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-[oklch(0.6_0.18_350)] mb-3">The reaction</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary leading-[1.1]">
                Still using <span className="text-[oklch(0.6_0.18_350)]">stiff nitrile?</span>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground md:max-w-xs">See what dental teams say the first time they try Posi-Prene Pink Perfection.</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 items-stretch">
            <div className="lg:col-span-3 relative rounded-md overflow-hidden bg-primary shadow-xl ring-1 ring-[oklch(0.85_0.08_350)]">
              <video
                src="/reaction.mp4"
                className="w-full h-full object-contain aspect-video bg-primary"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-sm bg-white/90 backdrop-blur px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase text-[oklch(0.55_0.18_350)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.6_0.2_350)] animate-pulse" /> Live reaction
              </div>
            </div>

            <div className="lg:col-span-2 grid gap-3 content-start">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-[oklch(0.6_0.18_350)] mb-1">
                Why people switch:
              </p>
              {[
                "Super stretchy, moves with you, not against you",
                "Easy to put on with wet or sweaty hands",
                "Made out of wet suit material — premium polychloroprene",
                "No latex. No powder. No mess.",
              ].map((title, i) => (
                <div
                  key={title}
                  className="group cursor-pointer rounded-lg bg-white border border-[oklch(0.9_0.05_350)] p-4 flex items-start gap-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[oklch(0.65_0.22_350)] hover:shadow-[0_0_30px_-2px_oklch(0.65_0.22_350/0.55)]"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[oklch(0.97_0.04_350)] text-[oklch(0.55_0.22_350)] grid place-items-center text-[11px] font-bold tracking-widest transition-colors duration-300 group-hover:bg-[oklch(0.65_0.22_350)] group-hover:text-white">
                    0{i + 1}
                  </div>
                  <div className="text-sm font-semibold text-primary leading-snug pt-1">{title}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="#buy"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("buy")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-[oklch(0.65_0.22_350)] text-white px-9 py-4 text-sm font-bold uppercase tracking-[0.15em] shadow-[0_10px_30px_-10px_oklch(0.65_0.22_350/0.55)] hover:shadow-[0_16px_40px_-12px_oklch(0.65_0.22_350/0.75)] hover:bg-[oklch(0.6_0.24_350)] transition-all duration-300 ease-out hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out" />
              Shop Now <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section id="challenge" className="scroll-mt-16 relative overflow-hidden bg-primary text-primary-foreground py-16 md:py-24">
        {/* Background flourishes */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-[oklch(0.65_0.22_350)]/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-[oklch(0.65_0.22_350)]/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Wet hands? <span className="text-[oklch(0.65_0.22_350)]">Now gloved fast.</span>
          </h2>
          <p className="mt-3 text-lg md:text-xl font-semibold text-primary-foreground/90">
            With Posi-Prene.
          </p>
          <p className="mt-4 text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground/60">
            Filmed live at <span className="text-[oklch(0.85_0.12_350)]">MDA 2026</span> — Michigan Dental Association Show
          </p>
          <div className="mt-10 relative mx-auto max-w-2xl aspect-[9/16] sm:aspect-video rounded-lg overflow-hidden bg-black shadow-[0_30px_80px_-20px_oklch(0.65_0.22_350/0.6)] ring-1 ring-[oklch(0.65_0.22_350)]/40">
            <video
              src="/challenge.mp4"
              className="absolute inset-0 w-full h-full object-contain"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="#buy"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("buy")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-white text-primary px-9 py-4 text-sm font-bold uppercase tracking-[0.15em] shadow-[0_10px_30px_-10px_oklch(0.2_0_0/0.5)] hover:shadow-[0_16px_40px_-12px_oklch(0.2_0_0/0.7)] hover:bg-[oklch(0.96_0.02_350)] transition-all duration-300 ease-out hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[oklch(0.65_0.22_350)]/20 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out" />
              Shop Now <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>


      {/* BUY */}
      <section
        id="buy"
        ref={buyRef}
        className="relative overflow-hidden scroll-mt-16 bg-gradient-to-b from-white to-[oklch(0.97_0.02_240)] pt-16 pb-24 md:pb-28"
      >
        {/* Scroll-reactive pink line background */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
          {/* Soft pink wash that brightens on scroll */}
          <div
            className="absolute inset-0 transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, oklch(0.92 0.09 350 / 0.55) 0%, transparent 60%)",
              opacity: 0.35 + buyProgress * 0.65,
            }}
          />
          {/* Diagonal pink lines — drift horizontally with scroll */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 800"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="buyLine" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="oklch(0.7 0.2 350)" stopOpacity="0.85" />
                <stop offset="100%" stopColor="oklch(0.6 0.24 350)" stopOpacity="0.95" />
              </linearGradient>
            </defs>
            {[...Array(7)].map((_, i) => {
              const lineW = 1000;
              const finalX = 100; // centered in 1200 viewBox
              const fromRight = i % 2 === 0; // 0: right, 1: left, 2: right...
              const offscreen = fromRight ? 1300 : -1000 - 100;
              const y = 80 + i * 90;
              // All lines finish by progress = 0.5 (card centered in viewport)
              const threshold = i * 0.045;
              const span = 0.22;
              const t = Math.max(0, Math.min(1, (buyProgress - threshold) / span));
              // ease-out cubic
              const eased = 1 - Math.pow(1 - t, 3);
              const x = offscreen + (finalX - offscreen) * eased;
              return (
                <rect
                  key={i}
                  x={x}
                  y={y}
                  width={lineW}
                  height={34}
                  rx={17}
                  fill="url(#buyLine)"
                  style={{
                    transition: "all 600ms cubic-bezier(0.22, 1, 0.36, 1)",
                    opacity: 0.55 + eased * 0.4,
                  }}
                />
              );
            })}
          </svg>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <div className="relative rounded-2xl bg-white border border-[oklch(0.92_0.05_350)] p-8 md:p-12 text-center shadow-[0_10px_40px_-15px_oklch(0.65_0.22_350/0.25)]">
            <div className="relative">
              <Reveal as="p" className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase text-[oklch(0.55_0.22_350)]">
                <Truck className="w-3.5 h-3.5 mb-[17px]" /> Ships today · Orders before 1pm EST
              </Reveal>
              <Reveal as="h2" delay={120} className="mt-2 text-3xl md:text-5xl font-bold tracking-tight leading-[1.05] text-primary">
                Join the <span className="text-[oklch(0.65_0.22_350)]">Posi-Prene Squad.</span>
              </Reveal>
              <Reveal as="p" delay={240} className="mt-2 text-sm md:text-base text-muted-foreground">
                Your hands deserve this.
              </Reveal>

              <div className="mt-6 mx-auto max-w-[200px] [perspective:1000px]">
                <img
                  src={boxImg}
                  alt="Posi-Prene Pink glove box"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-auto drop-shadow-2xl animate-buy-box-float will-change-transform"
                />
              </div>

              <a
                href="#"
                className="group/btn mt-5 relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md bg-[oklch(0.65_0.22_350)] text-white px-10 py-4 text-sm font-bold uppercase tracking-[0.15em] hover:bg-[oklch(0.6_0.24_350)] transition-all duration-300 ease-out hover:-translate-y-0.5 w-full sm:w-auto shadow-md"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover/btn:translate-x-full transition-transform duration-700 ease-out" />
                Buy Posi-Prene Pink Perfection <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </a>

              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="w-3.5 h-3.5" /> Free shipping on orders over $250
              </div>

              <div className="mt-5 pt-5 border-t border-[oklch(0.95_0.03_350)]">
                <a href="#" className="text-sm font-semibold text-[oklch(0.55_0.22_350)] underline-offset-4 hover:underline">
                  Not sure yet? Get a free sample →
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
