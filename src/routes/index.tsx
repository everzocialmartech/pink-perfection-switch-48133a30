import { createFileRoute } from "@tanstack/react-router";
import heroGloves from "@/assets/hero-gloves.jpg";
import stretchGloves from "@/assets/stretch-gloves.jpg";
import boxImg from "@/assets/box.jpg";
import { Check, Star, Hand, Droplets, Sparkles, Play, ArrowRight } from "lucide-react";

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

      {/* HERO — centered, image-led */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.97_0.04_350)] via-[oklch(0.96_0.05_340)] to-white" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full bg-accent/15 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-white px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-accent shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Posi-Prene Pink
          </span>

          <h1 className="mt-7 font-black tracking-tight leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            The Pink Glove<br />
            <span className="text-accent">Teams Switch To.</span>
          </h1>

          <div className="mt-10 flex items-center justify-center gap-3">
            <a href="#buy" className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 font-bold shadow-xl shadow-accent/30 hover:scale-[1.02] transition">
              Buy Now <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#challenge" className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur border border-border text-foreground px-6 py-4 font-semibold hover:bg-white transition">
              <Play className="w-4 h-4 fill-current" /> Watch
            </a>
          </div>

          <div className="relative mt-16 mx-auto max-w-3xl">
            <div className="absolute -inset-6 bg-accent/20 rounded-[3rem] blur-3xl" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-accent/30 ring-1 ring-white">
              <img src={heroGloves} alt="Posi-Prene Pink polychloroprene dental gloves" width={1600} height={1280} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SWITCH MOMENT */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-center text-4xl md:text-5xl font-black tracking-tight">
            Still using <span className="line-through decoration-accent decoration-4">stiff nitrile</span>?
          </h2>

          <div className="mt-14 grid sm:grid-cols-3 gap-5">
            {[
              { icon: Hand, title: "Hand Fatigue" },
              { icon: Sparkles, title: "Cheap Feel" },
              { icon: Droplets, title: "Dry, Irritated Hands" },
            ].map(({ icon: Icon, title }) => (
              <div key={title} className="rounded-3xl bg-muted p-8 text-center">
                <div className="mx-auto w-14 h-14 rounded-2xl bg-accent/15 text-accent grid place-items-center mb-5">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold">{title}</h3>
              </div>
            ))}
          </div>

          <p className="mt-14 text-center text-xl md:text-2xl font-semibold">
            That's why teams switch to <span className="text-accent font-black">Posi-Prene Pink.</span>
          </p>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="bg-gradient-to-b from-[oklch(0.98_0.02_340)] to-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-8 bg-accent/15 rounded-[3rem] blur-3xl" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl shadow-accent/20">
              <img src={stretchGloves} alt="Polychloroprene glove stretched" loading="lazy" width={1200} height={1400} className="w-full h-auto object-cover" />
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Made to feel better.<br />
              <span className="text-accent">Built to perform.</span>
            </h2>

            <ul className="mt-8 grid grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0">
              {["Latex-Free", "Nitrile-Free", "Powder-Free", "High Elasticity"].map(item => (
                <li key={item} className="flex items-center gap-2 font-medium">
                  <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground grid place-items-center"><Check className="w-3.5 h-3.5" /></span>
                  {item}
                </li>
              ))}
            </ul>

            <figure className="mt-10 rounded-3xl bg-white border border-border p-6 shadow-sm">
              <blockquote className="text-lg font-semibold italic">
                "Closest thing to latex without actually being latex."
              </blockquote>
              <figcaption className="mt-2 text-sm text-muted-foreground">— Dental Office Manager</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section id="challenge" className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            On in under <span className="text-accent">2 seconds.</span>
          </h2>

          <div className="mt-10 relative aspect-video rounded-[2.5rem] overflow-hidden bg-black/40 border border-white/10 grid place-items-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.72_0.18_8/0.3),transparent_60%)]" />
            <button className="relative w-20 h-20 rounded-full bg-accent text-accent-foreground grid place-items-center shadow-2xl hover:scale-110 transition">
              <Play className="w-8 h-8 fill-current ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* BUY */}
      <section id="buy" className="bg-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-[3rem] bg-gradient-to-br from-[oklch(0.96_0.04_345)] to-[oklch(0.92_0.08_350)] p-8 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <img src={boxImg} alt="Posi-Prene Pink glove box" loading="lazy" width={1024} height={1024} className="w-full max-w-sm mx-auto rounded-[2rem] shadow-2xl" />
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                Switch today.
              </h2>
              <div className="mt-5 flex items-baseline gap-2 justify-center md:justify-start">
                <span className="text-5xl font-black text-primary">$24.99</span>
                <span className="text-muted-foreground">/ box of 200</span>
              </div>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 font-bold shadow-xl shadow-accent/30 hover:scale-[1.02] transition">
                  Buy Posi-Prene Pink <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#" className="inline-flex items-center justify-center rounded-full bg-white text-foreground border border-border px-6 py-4 font-semibold hover:bg-muted transition">
                  Free Samples
                </a>
              </div>
              <div className="mt-5 flex items-center gap-1.5 justify-center md:justify-start text-sm text-muted-foreground">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                Trusted by dental teams nationwide
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground/80 py-10 rounded-t-[2.5rem]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <div className="font-black text-primary-foreground">Clinical Supply Co.</div>
          <div>© {new Date().getFullYear()} Clinical Supply Company</div>
          <a href="tel:18004680188" className="font-semibold text-primary-foreground hover:text-accent">1 (800) 468 0188</a>
        </div>
      </footer>
    </div>
  );
}
