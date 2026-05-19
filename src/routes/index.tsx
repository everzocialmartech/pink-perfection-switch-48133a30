import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import boxImg from "@/assets/box.jpg";
import floatingGlove from "@/assets/floating-glove.png";
import posipreneBox from "@/assets/posiprene-box.png";
import cscLogo from "@/assets/csc-logo.png";
import { ArrowRight, Truck, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
      window.scrollTo({ top: 0, left: 0 });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      {/* Nav */}
      <header className="sticky top-0 inset-x-0 z-50 bg-[oklch(0.65_0.22_350)] text-white shadow-[0_4px_20px_-8px_oklch(0.45_0.18_350/0.45)]">
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
              className="h-7 w-auto"
              style={{ filter: "brightness(0) invert(1)" }}
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
                className="relative inline-flex items-center rounded-full px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-white/90 hover:text-white hover:bg-white/15 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO — floating 3D glove */}
      <section className="relative overflow-hidden min-h-[85vh] md:min-h-[95vh] flex items-center pt-16 pb-12">
        {/* Brand gradient backdrop: trust-blue to emotional-pink */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[oklch(0.97_0.02_240)]" />
        <div className="absolute -top-32 -left-32 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-sm bg-primary/10 blur-3xl animate-hero-glow-in" />
        <div className="absolute -bottom-40 -right-32 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-sm bg-[oklch(0.65_0.22_350)]/15 blur-3xl animate-hero-glow-in delay-300" />

        <div className="relative w-full max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-bold tracking-tight leading-[1] text-[1.75rem] sm:text-4xl md:text-5xl lg:text-[3.75rem] max-w-5xl mx-auto animate-hero-rise text-balance">
            <span className="text-primary">The </span>
            <span className="text-[oklch(0.65_0.22_350)] font-bold">Pink Glove</span>
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
              <img
                src={posipreneBox}
                alt="Posi-Prene Pink Perfection glove box"
                width={1200}
                height={900}
                className="relative w-full h-auto animate-box-rise"
                style={{
                  filter:
                    "saturate(1.35) contrast(1.1) brightness(1.04) drop-shadow(0 14px 22px oklch(0.45 0.18 350 / 0.25))",
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
                  className="rounded-lg bg-white border border-[oklch(0.9_0.05_350)] p-4 flex items-start gap-3 shadow-sm"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-[oklch(0.97_0.04_350)] text-[oklch(0.55_0.22_350)] grid place-items-center text-[11px] font-bold tracking-widest">
                    0{i + 1}
                  </div>
                  <div className="text-sm font-semibold text-primary leading-snug pt-1">{title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section id="challenge" className="relative overflow-hidden bg-primary text-primary-foreground py-16 md:py-24">
        {/* Background flourishes */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-[oklch(0.65_0.22_350)]/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-[oklch(0.65_0.22_350)]/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Wet hands? <span className="text-[oklch(0.78_0.18_350)]">Now gloved fast.</span>
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
        </div>
      </section>


      {/* BUY */}
      <section id="buy" className="bg-gradient-to-b from-white to-[oklch(0.97_0.02_240)] pt-16 pb-24 md:pb-28">
        <div className="max-w-2xl mx-auto px-6">
          <div className="relative rounded-2xl bg-white border border-[oklch(0.92_0.05_350)] p-8 md:p-12 text-center shadow-[0_10px_40px_-15px_oklch(0.65_0.22_350/0.25)]">
            <div className="relative">
              <p className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase text-[oklch(0.55_0.22_350)]">
                <Truck className="w-3.5 h-3.5" /> Ships today · Orders before 1pm EST
              </p>
              <h2 className="mt-2 text-3xl md:text-5xl font-bold tracking-tight leading-[1.05] text-primary">
                Join the <span className="text-[oklch(0.65_0.22_350)]">Posi-Prene Squad.</span>
              </h2>
              <p className="mt-2 text-sm md:text-base text-muted-foreground">
                Your hands deserve this.
              </p>

              <div className="mt-6 mx-auto max-w-[200px]">
                <img src={boxImg} alt="Posi-Prene Pink glove box" loading="lazy" width={1024} height={1024} className="w-full h-auto drop-shadow-2xl" />
              </div>

              <a
                href="#"
                className="group/btn mt-5 relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md bg-[oklch(0.65_0.22_350)] text-white px-10 py-4 text-sm font-bold uppercase tracking-[0.15em] shadow-[0_14px_40px_-10px_oklch(0.65_0.22_350/0.6)] hover:shadow-[0_20px_50px_-12px_oklch(0.65_0.22_350/0.8)] hover:bg-[oklch(0.6_0.24_350)] transition-all duration-300 ease-out hover:-translate-y-0.5 w-full sm:w-auto"
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
          <div className="font-bold text-primary-foreground">Clinical Supply Co.</div>
          <div>© {new Date().getFullYear()} Clinical Supply Company</div>
          <a href="tel:18004680188" className="font-semibold text-primary-foreground hover:text-accent">1 (800) 468 0188</a>
        </div>
      </footer>

    </div>
  );
}
