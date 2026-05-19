import { createFileRoute } from "@tanstack/react-router";
import boxImg from "@/assets/box.jpg";
import floatingGlove from "@/assets/floating-glove.png";
import { Sparkles, ArrowRight, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      {/* Nav */}
      <header className="absolute top-0 inset-x-0 z-20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-primary font-bold tracking-tight">
            <span className="inline-block w-9 h-9 rounded bg-primary text-primary-foreground grid place-items-center font-bold">C</span>
            <span className="hidden sm:inline">Clinical Supply Co.</span>
          </a>
        </div>
      </header>

      {/* HERO — floating 3D glove */}
      <section className="relative overflow-hidden min-h-[70vh] md:min-h-[80vh] flex items-center pt-16 pb-6">
        {/* Brand gradient backdrop: trust-blue to emotional-pink */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[oklch(0.97_0.02_240)]" />
        <div className="absolute -top-32 -left-32 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-sm bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-sm bg-primary/10 blur-3xl" />

        <div className="relative w-full max-w-6xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-sm bg-white/60 backdrop-blur-md border border-white px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase text-accent shadow-sm animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" /> Latex-Free • Nitrile-Free • Premium Polychloroprene
          </span>

          <h1 className="mt-4 font-bold tracking-tight leading-[0.95] text-[2rem] sm:text-5xl md:text-6xl lg:text-[5rem] animate-fade-in max-w-5xl mx-auto">
            <span className="text-primary">The </span>
            <span className="text-[oklch(0.65_0.22_350)] font-bold">Pink Glove</span>
            <span className="text-primary"> Dental Teams Keep Switching To.</span>
          </h1>

          {/* Floating 3D glove */}
          <div className="relative mt-2 mx-auto max-w-[16rem] sm:max-w-xs md:max-w-sm lg:max-w-md pointer-events-none">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-sm bg-primary/15 blur-3xl" />
            <img
              src={floatingGlove}
              alt="Posi-Prene Pink glove floating"
              width={1080}
              height={1920}
              className="relative w-full h-auto drop-shadow-2xl animate-float"
            />
            {/* Soft floor shadow */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/5 h-6 rounded-sm bg-foreground/20 blur-2xl" />
          </div>

          <div className="mt-2 flex items-center justify-center gap-3 flex-wrap animate-fade-in">
            <a
              href="#buy"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-[oklch(0.65_0.22_350)] text-white px-9 py-4 text-sm font-bold uppercase tracking-[0.15em] shadow-[0_10px_30px_-10px_oklch(0.65_0.22_350/0.55)] hover:shadow-[0_16px_40px_-12px_oklch(0.65_0.22_350/0.75)] hover:bg-[oklch(0.6_0.24_350)] transition-all duration-300 ease-out hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out" />
              Shop Now <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

        </div>
      </section>

      {/* SWITCH MOMENT */}
      <section className="relative bg-gradient-to-b from-[oklch(0.98_0.015_350)] to-white py-10 md:py-12 border-y border-[oklch(0.92_0.04_350)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-[oklch(0.6_0.18_350)] mb-3">The reaction</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary leading-[1.1]">
                Still using <span className="text-[oklch(0.6_0.18_350)]">stiff nitrile?</span>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground md:max-w-xs">See what dental teams say the first time they try Posi-Prene Pink.</p>
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
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-[oklch(0.6_0.18_350)]">
                What the Posi-Prene squad loves about these gloves
              </p>
              {[
                { title: "Powder-Free", body: "Clean, residue-free application — no mess, no waste." },
                { title: "High Elasticity", body: "Stretches with your hands so every move stays effortless." },
                { title: "Slides On Wet", body: "Goes on easy even with wet or sweaty hands." },
              ].map(({ title, body }, i) => (
                <div key={title} className="rounded-md bg-white border border-[oklch(0.92_0.04_350)] p-5 flex gap-4">
                  <div className="text-xs font-bold tracking-widest text-[oklch(0.6_0.18_350)] pt-0.5">0{i + 1}</div>
                  <div>
                    <div className="text-base font-bold text-primary leading-tight">{title}</div>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
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

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[oklch(0.65_0.22_350)]/20 border border-[oklch(0.65_0.22_350)]/40 px-4 py-1.5 text-[11px] font-bold tracking-[0.25em] uppercase text-[oklch(0.85_0.12_350)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.7_0.22_350)] animate-pulse" />
            The 2-Second Challenge
          </span>
          <h2 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            Wet hands. <span className="text-[oklch(0.78_0.18_350)]">Gloved fast.</span>
          </h2>
          <p className="mt-3 text-lg md:text-xl font-semibold text-primary-foreground/90">
            With Posi-Prene.
          </p>
          <p className="mt-4 text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground/60">
            Filmed live at <span className="text-[oklch(0.85_0.12_350)]">MDA 2026</span> — Michigan Dental Association Show
          </p>
          <div className="mt-10 relative aspect-video rounded-lg overflow-hidden bg-black shadow-[0_30px_80px_-20px_oklch(0.65_0.22_350/0.6)] ring-1 ring-[oklch(0.65_0.22_350)]/40">
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
          </div>
        </div>
      </section>


      {/* BUY */}
      <section id="buy" className="bg-gradient-to-b from-white to-[oklch(0.97_0.02_240)] pt-12 pb-20 md:pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-lg bg-white border border-border shadow-2xl shadow-primary/10 p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-md bg-gradient-to-br from-[oklch(0.97_0.02_240)] to-[oklch(0.93_0.04_240)] p-6 grid place-items-center">
              <img src={boxImg} alt="Posi-Prene Pink glove box" loading="lazy" width={1024} height={1024} className="w-full max-w-xs rounded shadow-xl" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-accent mb-3">Ships Today on orders before 1pm EST</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Your hands<br />
                <span className="text-accent font-bold">deserve this.</span>
              </h2>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-bold text-primary">$24.99</span>
                <span className="text-muted-foreground">/ box of 200</span>
              </div>
              <a
                href="#"
                className="group mt-7 relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md bg-[oklch(0.65_0.22_350)] text-white px-9 py-4 text-sm font-bold uppercase tracking-[0.15em] shadow-[0_10px_30px_-10px_oklch(0.65_0.22_350/0.55)] hover:shadow-[0_16px_40px_-12px_oklch(0.65_0.22_350/0.75)] hover:bg-[oklch(0.6_0.24_350)] transition-all duration-300 ease-out hover:-translate-y-0.5 w-full sm:w-auto"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out" />
                Buy Posi-Prene Pink <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <p className="mt-4 text-xs text-muted-foreground">Free shipping on orders over $250.</p>
              <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center gap-3">
                <p className="text-sm font-semibold text-primary">Not sure yet?</p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-[oklch(0.65_0.22_350)] text-[oklch(0.55_0.22_350)] px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-[oklch(0.65_0.22_350)] hover:text-white transition"
                >
                  Get a Free Sample <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      {/* removed duplicate */}
      <footer className="bg-primary text-primary-foreground/80 py-10  -mt-8 relative z-0">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <div className="font-bold text-primary-foreground">Clinical Supply Co.</div>
          <div>© {new Date().getFullYear()} Clinical Supply Company</div>
          <a href="tel:18004680188" className="font-semibold text-primary-foreground hover:text-accent">1 (800) 468 0188</a>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 p-3 pb-[max(env(safe-area-inset-bottom),0.75rem)]">
        <div className="rounded-sm bg-white/80 backdrop-blur-xl border border-white shadow-2xl shadow-primary/15 px-3 py-2 flex items-center justify-between gap-3">
          <div className="pl-3">
            <div className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Posi-Prene Pink</div>
            <div className="text-sm font-bold text-primary leading-tight">$24.99 <span className="text-xs font-medium text-muted-foreground">/ 200</span></div>
          </div>
          <a href="#buy" className="inline-flex items-center gap-2 rounded-sm bg-accent text-accent-foreground px-5 py-3 font-bold text-sm shadow-lg shadow-primary/30">
            <ShoppingBag className="w-4 h-4" /> Buy
          </a>
        </div>
      </div>
    </div>
  );
}
