import { createFileRoute } from "@tanstack/react-router";
import stretchGloves from "@/assets/stretch-test.jpg";
import whyDifferent from "@/assets/why-different.jpg";
import boxImg from "@/assets/box.jpg";
import floatingGlove from "@/assets/floating-glove.png";
import { Star, Sparkles, Play, ArrowRight, ShoppingBag, Check } from "lucide-react";

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
            <span className="inline-block w-9 h-9 rounded bg-primary text-primary-foreground grid place-items-center font-black">C</span>
            <span className="hidden sm:inline">Clinical Supply Co.</span>
          </a>
          <a href="#buy" className="inline-flex items-center gap-2 rounded-sm bg-foreground text-background px-5 py-2.5 text-sm font-semibold hover:opacity-90">
            Shop <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* HERO — floating 3D glove */}
      <section className="relative overflow-hidden min-h-[100vh] flex items-center pt-24 pb-32">
        {/* Brand gradient backdrop: trust-blue to emotional-pink */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-[oklch(0.97_0.02_240)]" />
        <div className="absolute -top-32 -left-32 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-sm bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-sm bg-primary/10 blur-3xl" />

        <div className="relative w-full max-w-6xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-sm bg-white/60 backdrop-blur-md border border-white px-4 py-1.5 text-[11px] font-bold tracking-[0.2em] uppercase text-accent shadow-sm animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" /> Latex-Free • Nitrile-Free • Premium Polychloroprene
          </span>

          <h1 className="mt-6 font-black tracking-tight leading-[0.95] text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[6rem] animate-fade-in max-w-5xl mx-auto">
            <span className="text-primary">The </span>
            <span className="text-accent font-black">Pink Glove</span>
            <span className="text-primary"> Dental Teams Keep Switching To.</span>
          </h1>

          {/* Floating 3D glove */}
          <div className="relative mt-2 mx-auto max-w-md md:max-w-lg lg:max-w-xl pointer-events-none">
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
            <a href="#buy" className="inline-flex items-center gap-2 rounded-sm bg-accent text-accent-foreground px-8 py-4 font-bold shadow-xl shadow-primary/30 hover:scale-[1.03] transition">
              Shop Posi-Prene <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#challenge" className="inline-flex items-center gap-2 rounded-sm bg-white/60 backdrop-blur border border-white text-primary px-6 py-4 font-semibold hover:bg-white transition">
              <Play className="w-4 h-4 fill-current" /> Watch
            </a>
          </div>

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
            Still Using<br />
            <span className="text-accent font-black">Stiff Nitrile?</span>
          </h2>
          <div className="mt-16 grid sm:grid-cols-3 gap-4 text-left">
            {[
              { title: "Hand Fatigue", body: "Long procedures shouldn't leave your hands exhausted." },
              { title: "Cheap Glove Feel", body: "Thin, stiff gloves make precision harder — not easier." },
              { title: "Dry, Irritated Hands", body: "Your gloves shouldn't feel like sandpaper by 3 PM." },
            ].map(({ title, body }) => (
              <div key={title} className="rounded-md bg-gradient-to-br from-muted to-white border border-border p-8">
                <div className="text-2xl md:text-3xl font-black text-primary leading-tight">{title}</div>
                <p className="mt-3 text-base text-muted-foreground leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="relative bg-primary text-primary-foreground py-24 md:py-32 overflow-hidden ">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-sm bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-sm bg-primary/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-8 bg-primary/15 rounded-lg blur-3xl" />
            <div className="relative rounded-md overflow-hidden shadow-2xl ring-1 ring-white/20">
              <img src={whyDifferent} alt="Dental professionals stretching Posi-Prene Pink gloves" loading="lazy" width={1200} height={900} className="w-full h-auto object-cover" />
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Why Posi-Prene<br />
              <span className="text-accent font-black">feels different.</span>
            </h2>

            <ul className="mt-10 space-y-3">
              {[
                "Latex-Free",
                "Nitrile-Free",
                "Powder-Free",
                "High Elasticity",
                "Premium Tactile Feel",
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 rounded border border-white/15 bg-white/10 backdrop-blur-xl px-5 py-4 shadow-xl">
                  <span className="grid place-items-center w-8 h-8 rounded-full bg-primary text-accent-foreground shrink-0">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </span>
                  <span className="text-lg font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section id="challenge" className="bg-white py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-accent mb-4">The 2-Second Challenge</p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Wet hands. <span className="text-accent font-black">Gloved fast.</span>
          </h2>
          <div className="mt-12 relative aspect-video rounded-md overflow-hidden bg-gradient-to-br from-primary to-[#0777B1] grid place-items-center shadow-2xl shadow-primary/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.72_0.18_8/0.35),transparent_60%)]" />
            <button className="relative w-24 h-24 rounded-full bg-white text-primary grid place-items-center shadow-2xl hover:scale-110 transition">
              <Play className="w-9 h-9 fill-current ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* BUY */}
      <section id="buy" className="bg-gradient-to-b from-white to-[oklch(0.97_0.02_240)] pt-24 pb-32 md:pb-40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-lg bg-white border border-border shadow-2xl shadow-primary/10 p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-md bg-gradient-to-br from-[oklch(0.97_0.02_240)] to-[oklch(0.93_0.04_240)] p-6 grid place-items-center">
              <img src={boxImg} alt="Posi-Prene Pink glove box" loading="lazy" width={1024} height={1024} className="w-full max-w-xs rounded shadow-xl" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-accent mb-3">Ships Today</p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Your hands<br />
                <span className="text-accent font-black">deserve this.</span>
              </h2>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-black text-primary">$24.99</span>
                <span className="text-muted-foreground">/ box of 200</span>
              </div>
              <a href="#" className="mt-7 inline-flex items-center justify-center gap-2 rounded-sm bg-accent text-accent-foreground px-8 py-4 font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] transition w-full sm:w-auto">
                Buy Posi-Prene Pink <ArrowRight className="w-4 h-4" />
              </a>
              <p className="mt-4 text-xs text-muted-foreground">Free shipping on orders over $250.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground/80 py-10  -mt-8 relative z-0">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <div className="font-black text-primary-foreground">Clinical Supply Co.</div>
          <div>© {new Date().getFullYear()} Clinical Supply Company</div>
          <a href="tel:18004680188" className="font-semibold text-primary-foreground hover:text-accent">1 (800) 468 0188</a>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 p-3 pb-[max(env(safe-area-inset-bottom),0.75rem)]">
        <div className="rounded-sm bg-white/80 backdrop-blur-xl border border-white shadow-2xl shadow-primary/15 px-3 py-2 flex items-center justify-between gap-3">
          <div className="pl-3">
            <div className="text-[10px] font-bold tracking-widest uppercase text-muted-foreground">Posi-Prene Pink</div>
            <div className="text-sm font-black text-primary leading-tight">$24.99 <span className="text-xs font-medium text-muted-foreground">/ 200</span></div>
          </div>
          <a href="#buy" className="inline-flex items-center gap-2 rounded-sm bg-accent text-accent-foreground px-5 py-3 font-bold text-sm shadow-lg shadow-primary/30">
            <ShoppingBag className="w-4 h-4" /> Buy
          </a>
        </div>
      </div>
    </div>
  );
}
