import { createFileRoute } from "@tanstack/react-router";
import heroGloves from "@/assets/hero-gloves.jpg";
import stretchGloves from "@/assets/stretch-gloves.jpg";
import boxImg from "@/assets/box.jpg";
import { Check, Star, Zap, Hand, Droplets, ShieldCheck, Truck, Play } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      {/* Announcement bar */}
      <div className="bg-primary text-primary-foreground text-center text-sm py-2 px-4">
        <span className="font-semibold">Save:</span> FREE Shipping on all dental supply orders over $250
      </div>

      {/* Nav */}
      <header className="border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-primary font-black tracking-tight text-xl">
            <span className="inline-block w-8 h-8 rounded-md bg-primary text-primary-foreground grid place-items-center font-black">C</span>
            <span>Clinical Supply Co.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
            <a href="#why" className="hover:text-primary">Why Posi-Prene</a>
            <a href="#compare" className="hover:text-primary">Compare</a>
            <a href="#challenge" className="hover:text-primary">2-Second Challenge</a>
            <a href="#buy" className="hover:text-primary">Buy</a>
          </nav>
          <a href="#buy" className="hidden md:inline-flex items-center rounded-full bg-accent text-accent-foreground px-5 py-2 text-sm font-semibold hover:opacity-90">
            Buy Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.97_0.03_350)] via-white to-[oklch(0.95_0.05_340)]" />
        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-accent mb-5">
              Latex-Free • Nitrile-Free • Premium Polychloroprene
            </p>
            <h1 className="font-black tracking-tight text-foreground leading-[0.98] text-5xl md:text-6xl lg:text-7xl">
              The Pink Glove<br />
              Dental Teams<br />
              <span className="text-accent">Keep Switching To.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Posi-Prene Pink moves with your hands — not against them. Premium polychloroprene
              built for long clinical days, sensitive skin, and the precision your patients deserve.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#buy" className="inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground px-7 py-4 font-bold text-base shadow-lg shadow-accent/25 hover:translate-y-[-1px] transition">
                Buy Posi-Prene Pink
              </a>
              <a href="#challenge" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary text-primary px-7 py-4 font-bold text-base hover:bg-primary hover:text-primary-foreground transition">
                <Play className="w-4 h-4 fill-current" />
                Put on gloves in &lt; 2 seconds
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-foreground/80">
              <div className="flex items-center gap-1.5">
                <div className="flex text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="font-semibold">Trusted by dental teams nationwide</span>
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
                {["Latex-Free", "Powder-Free", "Premium Elasticity", "Fast Shipping"].map(t => (
                  <span key={t} className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-accent" />{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-accent/10 rounded-[2rem] blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white shadow-2xl shadow-accent/20">
              <img src={heroGloves} alt="Posi-Prene Pink polychloroprene dental gloves" width={1600} height={1280} className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 max-w-xs">
              <div className="w-10 h-10 rounded-full bg-accent/15 grid place-items-center text-accent"><ShieldCheck className="w-5 h-5" /></div>
              <div className="text-xs">
                <div className="font-bold text-foreground">100% Polychloroprene</div>
                <div className="text-muted-foreground">Zero latex. Zero nitrile.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - SWITCH MOMENT */}
      <section id="compare" className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-accent mb-4">The Switch Moment</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Still Using <span className="line-through decoration-accent decoration-4">Stiff Nitrile</span>?
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Long procedures shouldn't punish your hands. Three reasons dental teams are switching today.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { icon: Hand, title: "Hand Fatigue", body: "Long procedures shouldn't leave your hands exhausted." },
              { icon: Zap, title: "Cheap Glove Feel", body: "Thin, stiff gloves make precision harder — not easier." },
              { icon: Droplets, title: "Dry, Irritated Hands", body: "Your gloves shouldn't feel like sandpaper by 3 PM." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-border bg-muted/40 p-8">
                <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent grid place-items-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-xl md:text-2xl font-semibold text-foreground/80">
            That's exactly why practices are switching to{" "}
            <span className="text-accent font-black">Posi-Prene Pink.</span>
          </p>
        </div>
      </section>

      {/* SECTION 3 - WHY IT FEELS DIFFERENT */}
      <section id="why" className="bg-gradient-to-b from-[oklch(0.98_0.02_340)] to-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-8 bg-accent/10 rounded-[2rem] blur-3xl" />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-accent/15">
              <img src={stretchGloves} alt="Premium polychloroprene glove stretched to demonstrate elasticity" loading="lazy" width={1200} height={1400} className="w-full h-auto object-cover" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-accent mb-4">Why Posi-Prene Feels Different</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Made To Feel Better.<br />
              <span className="text-accent">Built To Perform.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Posi-Prene Pink is made from premium polychloroprene — a material chosen for
              exceptional elasticity, comfort, and tactile feel.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Unlike traditional nitrile gloves, it moves naturally with your hands, reducing
              stiffness and fatigue during long clinical days.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-3">
              {["Latex-Free", "Nitrile-Free", "Powder-Free", "High Elasticity", "Premium Tactile Feel", "Sensitive-Skin Friendly"].map(item => (
                <li key={item} className="flex items-center gap-2 text-foreground font-medium">
                  <span className="w-5 h-5 rounded-full bg-accent text-accent-foreground grid place-items-center"><Check className="w-3 h-3" /></span>
                  {item}
                </li>
              ))}
            </ul>

            <figure className="mt-10 border-l-4 border-accent pl-5">
              <blockquote className="text-xl font-semibold text-foreground italic">
                "Closest thing to latex without actually being latex."
              </blockquote>
              <figcaption className="mt-2 text-sm text-muted-foreground">— Dental Office Manager</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* CHALLENGE / VIDEO */}
      <section id="challenge" className="bg-primary text-primary-foreground py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-[0.18em] uppercase text-accent mb-4">The 2-Second Challenge</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Wet hands. Sweaty hands.<br />
            <span className="text-accent">On in under 2 seconds.</span>
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Watch the glove that doesn't fight you when seconds matter.
          </p>

          <div className="mt-10 relative aspect-video rounded-3xl overflow-hidden bg-black/40 border border-white/10 grid place-items-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.72_0.18_8/0.25),transparent_60%)]" />
            <button className="relative w-20 h-20 rounded-full bg-accent text-accent-foreground grid place-items-center shadow-2xl hover:scale-105 transition">
              <Play className="w-8 h-8 fill-current ml-1" />
            </button>
            <span className="absolute bottom-5 text-sm font-medium text-white/80">Posi-Prene Pink — Glove Challenge</span>
          </div>
        </div>
      </section>

      {/* BUY / CTA */}
      <section id="buy" className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-[2rem] bg-gradient-to-br from-[oklch(0.95_0.05_340)] to-[oklch(0.92_0.07_350)] p-8 grid place-items-center">
            <img src={boxImg} alt="Posi-Prene Pink glove box" loading="lazy" width={1024} height={1024} className="w-full max-w-md rounded-2xl shadow-xl" />
          </div>
          <div>
            <p className="text-xs font-bold tracking-[0.18em] uppercase text-accent mb-4">Ships Today</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight">
              Make the switch your hands have been asking for.
            </h2>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-5xl font-black text-primary">$24.99</span>
              <span className="text-muted-foreground">/ box of 200</span>
            </div>
            <ul className="mt-6 space-y-3 text-foreground">
              {[
                { icon: Truck, text: "Same-day shipping on orders before 4 PM EST" },
                { icon: ShieldCheck, text: "Latex-free, nitrile-free, powder-free" },
                { icon: Star, text: "Loved by hygienists and decision makers" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-accent/15 text-accent grid place-items-center"><Icon className="w-4 h-4" /></span>
                  <span className="font-medium">{text}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground px-7 py-4 font-bold text-base shadow-lg shadow-accent/25 hover:translate-y-[-1px] transition">
                Buy Posi-Prene Pink
              </a>
              <a href="#" className="inline-flex items-center justify-center rounded-full border-2 border-primary text-primary px-7 py-4 font-bold text-base hover:bg-primary hover:text-primary-foreground transition">
                Request Free Samples
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">FREE shipping on dental supply orders over $250.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground/80 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="font-black text-primary-foreground tracking-tight">Clinical Supply Co.</div>
          <div>© {new Date().getFullYear()} Clinical Supply Company. All rights reserved.</div>
          <div>Give Us a Call: <a href="tel:18004680188" className="text-primary-foreground font-semibold hover:text-accent">1 (800) 468 0188</a></div>
        </div>
      </footer>
    </div>
  );
}
