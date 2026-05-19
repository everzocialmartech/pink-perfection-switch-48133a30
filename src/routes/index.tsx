import { createFileRoute } from "@tanstack/react-router";
import stretchGloves from "@/assets/stretch-gloves.jpg";
import boxImg from "@/assets/box.jpg";
import floatingGlove from "@/assets/floating-glove.png";
import { Check, Star, Sparkles, Play, ArrowRight, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      {/* Nav */}
      <header className="absolute top-0 inset-x-0 z-20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-primary font-black tracking-tight">
            <span className="inline-block w-9 h-9 rounded-2xl bg-primary text-primary-foreground grid place-items-center font-black">C</span>
            <span className="hidden sm:inline">Clinical Supply Co.</span>
          </a>
          <a href="#buy" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-semibold hover:opacity-90">
            Shop <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* HERO — floating 3D glove */}
      <section className="relative overflow-hidden min-h-[100vh] flex items-center pt-24 pb-32">
        {/* Brand gradient backdrop: trust-blue to emotional-pink */}
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.98_0.02_340)] via-white to-[oklch(0.96_0.05_340)]" />
        <div className="absolute -top-32 -left-32 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-accent/25 blur-3xl" />

        <div className="relative w-full max-w-6xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur-md border border-white px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase text-accent shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5" /> Posi-Prene Pink
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-black tracking-tight leading-[0.92] text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[8.5rem]"
          >
            <span className="text-primary">Feel the</span>
            <br />
            <span className="text-accent italic font-serif">difference.</span>
          </motion.h1>

          {/* Floating 3D glove */}
          <div className="relative mt-2 mx-auto max-w-md md:max-w-lg lg:max-w-xl pointer-events-none">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-accent/30 blur-3xl" />
            <motion.img
              src={floatingGlove}
              alt="Posi-Prene Pink glove floating"
              width={1080}
              height={1920}
              className="relative w-full h-auto drop-shadow-2xl"
              animate={{ y: [0, -18, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Soft floor shadow */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/5 h-6 rounded-full bg-foreground/20 blur-2xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-2 flex items-center justify-center gap-3 flex-wrap"
          >
            <a href="#buy" className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-8 py-4 font-bold shadow-xl shadow-accent/40 hover:scale-[1.03] transition">
              Shop Posi-Prene <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#challenge" className="inline-flex items-center gap-2 rounded-full bg-white/60 backdrop-blur border border-white text-primary px-6 py-4 font-semibold hover:bg-white transition">
              <Play className="w-4 h-4 fill-current" /> Watch
            </a>
          </motion.div>

          <div className="mt-8 flex items-center justify-center gap-x-6 gap-y-2 flex-wrap text-xs font-semibold tracking-wider uppercase text-muted-foreground">
            <span>Latex-Free</span><span className="text-accent">•</span>
            <span>Nitrile-Free</span><span className="text-accent">•</span>
            <span>Powder-Free</span>
          </div>
        </div>
      </section>

      {/* SWITCH MOMENT */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
            Built for the<br />
            <span className="text-accent italic font-serif">precision</span> of dentistry.
          </h2>
          <div className="mt-16 grid sm:grid-cols-3 gap-4">
            {[
              { stat: "0%", label: "Latex" },
              { stat: "100%", label: "Polychloroprene" },
              { stat: "2s", label: "To put on" },
            ].map(({ stat, label }) => (
              <div key={label} className="rounded-3xl bg-gradient-to-br from-muted to-white border border-border p-8">
                <div className="text-5xl md:text-6xl font-black text-primary">{stat}</div>
                <div className="mt-2 text-sm font-semibold tracking-widest uppercase text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="relative bg-primary text-primary-foreground py-24 md:py-32 overflow-hidden rounded-t-[3rem]">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-accent/20 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-8 bg-accent/30 rounded-[3rem] blur-3xl" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/20">
              <img src={stretchGloves} alt="Polychloroprene glove stretched" loading="lazy" width={1200} height={1400} className="w-full h-auto object-cover" />
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Moves with you.<br />
              <span className="text-accent italic font-serif">Never against.</span>
            </h2>

            {/* Glassmorphism testimonial cards */}
            <div className="mt-10 space-y-4">
              {[
                { q: "Closest thing to latex without being latex.", a: "Dental Office Manager" },
                { q: "My hands aren't exhausted by 3 PM anymore.", a: "Hygienist, 12 yrs" },
              ].map(({ q, a }) => (
                <figure key={a} className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-6 shadow-2xl">
                  <div className="flex text-accent mb-2">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <blockquote className="text-lg font-semibold leading-snug">"{q}"</blockquote>
                  <figcaption className="mt-2 text-xs text-primary-foreground/70 uppercase tracking-widest">— {a}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section id="challenge" className="bg-white py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-accent mb-4">The 2-Second Challenge</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Wet hands. <span className="text-accent italic font-serif">Gloved fast.</span>
          </h2>
          <div className="mt-12 relative aspect-video rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary to-[oklch(0.22_0.1_270)] grid place-items-center shadow-2xl shadow-primary/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.72_0.18_8/0.35),transparent_60%)]" />
            <button className="relative w-24 h-24 rounded-full bg-white text-accent grid place-items-center shadow-2xl hover:scale-110 transition">
              <Play className="w-9 h-9 fill-current ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* BUY */}
      <section id="buy" className="bg-gradient-to-b from-white to-[oklch(0.97_0.03_340)] pt-24 pb-32 md:pb-40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-[3rem] bg-white border border-border shadow-2xl shadow-accent/10 p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-[2rem] bg-gradient-to-br from-[oklch(0.96_0.04_345)] to-[oklch(0.92_0.08_350)] p-6 grid place-items-center">
              <img src={boxImg} alt="Posi-Prene Pink glove box" loading="lazy" width={1024} height={1024} className="w-full max-w-xs rounded-[1.5rem] shadow-xl" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-accent mb-3">Ships Today</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Your hands<br />
                <span className="text-accent italic font-serif">deserve this.</span>
              </h2>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-black text-primary">$24.99</span>
                <span className="text-muted-foreground">/ box of 200</span>
              </div>
              <a href="#" className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-8 py-4 font-bold shadow-xl shadow-accent/30 hover:scale-[1.02] transition w-full sm:w-auto">
                Buy Posi-Prene Pink <ArrowRight className="w-4 h-4" />
              </a>
              <p className="mt-4 text-xs text-muted-foreground">Free shipping on orders over $250.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground/80 py-10 rounded-t-[3rem] -mt-8 relative z-0">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <div className="font-black text-primary-foreground">Clinical Supply Co.</div>
          <div>© {new Date().getFullYear()} Clinical Supply Company</div>
          <a href="tel:18004680188" className="font-semibold text-primary-foreground hover:text-accent">1 (800) 468 0188</a>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 p-3 pb-[max(env(safe-area-inset-bottom),0.75rem)]">
        <div className="rounded-full bg-white/80 backdrop-blur-xl border border-white shadow-2xl shadow-accent/20 px-3 py-2 flex items-center justify-between gap-3">
          <div className="pl-3">
            <div className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Posi-Prene Pink</div>
            <div className="text-sm font-black text-primary leading-tight">$24.99 <span className="text-xs font-medium text-muted-foreground">/ 200</span></div>
          </div>
          <a href="#buy" className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-5 py-3 font-bold text-sm shadow-lg shadow-accent/40">
            <ShoppingBag className="w-4 h-4" /> Buy
          </a>
        </div>
      </div>
    </div>
  );
}
