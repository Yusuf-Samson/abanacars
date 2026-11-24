import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  MapPin,
  Phone,
  Clock,
  Star,
  ShieldCheck,
  Sparkles,
  KeyRound,
  Car,
  Instagram,
  Plus,
  Minus,
  ChevronRight,
} from "lucide-react";

const heroShowroom = "/images/hero-car.jpeg";
const car2 = "/images/car-2.jpg";
const rangeRoverAsset = "/images/car-1.jpeg";
const gWagonAsset = "/images/car-3.jpeg";
const showroom = "/images/showroom.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Abana Cars Ltd — Premium Automobiles in Abuja" },
      {
        name: "description",
        content:
          "Abuja's trusted dealership for premium and pre-owned vehicles. Visit the Abana Cars showroom in Wuse 2 — open 24 hours, 4.6★ on Google.",
      },
      { property: "og:title", content: "Abana Cars Ltd — Premium Automobiles in Abuja" },
      {
        property: "og:description",
        content: "Abuja's trusted dealership for premium and pre-owned vehicles. Visit the Abana Cars showroom in Wuse 2 — open 24 hours, 4.6★ on Google.",
      },
    ],
  }),
});

const ADDRESS =
  "Plot 472C Atakpame St, off Adetokunbo Ademola Crescent, Wuse 2, Abuja 904101, FCT";
const MAP_QUERY = encodeURIComponent("Abana Cars Ltd, Wuse 2, Abuja");
const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

function Index() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <Collection />
        <Showroom />
        <Benefits />
        <Testimonials />
        <Visit />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Nav ---------------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-hairline"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <Logo />
          <span className="text-[15px] font-semibold tracking-tight">Abana Cars</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-soft">
          <a href="#collection" className="hover:text-ink transition-colors">Collection</a>
          <a href="#showroom" className="hover:text-ink transition-colors">Showroom</a>
          <a href="#reviews" className="hover:text-ink transition-colors">Reviews</a>
          <a href="#visit" className="hover:text-ink transition-colors">Visit</a>
        </nav>
        <a
          href="tel:+2347010207371"
          className="group inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-primary-foreground shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_10px_30px_-10px_rgba(0,0,0,0.35)] transition-all hover:translate-y-[-1px] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset,0_14px_40px_-12px_rgba(0,0,0,0.45)]"
        >
          <Phone className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Call the showroom</span>
          <span className="sm:hidden">Call</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </header>
  );
}

function Logo() {
  return (
      <img
        src="/images/abana-logo.png"
        alt="Abana Cars"
        className="h-10 w-auto object-contain"
      />
    );
}
/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      {/* soft gradient wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[80vh]"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--gold-soft) 55%, transparent), transparent 70%)",
        }}
      />
      <div className="container-page relative">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-surface hairline px-3 py-1 text-xs text-ink-soft">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              Open 24 hours · Wuse 2, Abuja
            </div>
            <h1 className="mt-6 text-balance text-[44px] font-semibold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[76px]">
              The finest cars, <br className="hidden sm:block" />
              <span className="italic font-light text-ink-soft">quietly</span> curated
              in Abuja.
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink-soft">
              Abana Cars is a boutique dealership for premium and pre-owned
              vehicles. Each car in our showroom is hand-picked, inspected, and
              detailed to a standard we&rsquo;d be proud to drive ourselves.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#collection"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] transition-all hover:translate-y-[-1px] hover:shadow-[0_18px_40px_-12px_rgba(0,0,0,0.5)]"
              >
                <span className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/15 blur-md animate-shine" />
                Explore the collection
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#visit"
                className="inline-flex items-center gap-2 rounded-full bg-surface hairline px-6 py-3.5 text-sm font-medium text-ink transition-all hover:bg-surface-2"
              >
                <MapPin className="h-4 w-4" />
                Visit the showroom
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-ink-soft">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-gold text-gold"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <span className="font-medium text-ink">4.6</span>
                <span>on Google</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-hairline" />
              <div className="hidden sm:flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-ink" />
                <span>Verified dealership</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-8 -z-10 rounded-[40px] bg-gradient-to-b from-gold-soft/50 to-transparent blur-2xl" />
              <div className="overflow-hidden rounded-[28px] bg-surface hairline shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)]">
                <img
                  src={heroShowroom}
                  alt="The Abana Cars showroom in Wuse 2, Abuja"
                  width={1600}
                  height={1104}
                  className="h-[420px] w-full object-cover sm:h-[520px]"
                />
              </div>
              <FloatingCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingCard() {
  return (
    <div className="absolute -bottom-6 -left-6 hidden w-64 rounded-2xl bg-background/90 p-4 backdrop-blur-xl hairline shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)] sm:block">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-ink text-primary-foreground">
          <KeyRound className="h-4 w-4" />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-ink">Same-day handover</p>
          <p className="truncate text-xs text-ink-soft">Financing available</p>
        </div>
      </div>
      <div className="mt-3 h-px bg-hairline" />
      <p className="mt-3 text-xs leading-relaxed text-ink-soft">
        Reserve a viewing tonight — our concierge is available around the clock.
      </p>
    </div>
  );
}

/* ---------------- Marquee ---------------- */

const BRANDS = [
  "Mercedes-Benz",
  "BMW",
  "Lexus",
  "Range Rover",
  "Toyota",
  "Porsche",
  "Audi",
  "Rolls-Royce",
  "Bentley",
  "Jeep",
];

function Marquee() {
  const row = [...BRANDS, ...BRANDS];
  return (
    <section className="mt-24 border-y border-hairline bg-surface/60 py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {row.map((b, i) => (
          <span
            key={i}
            className="mx-10 text-sm uppercase tracking-[0.28em] text-ink-soft"
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */

function Stats() {
  const items = [
    { k: "12+", v: "Years in Abuja" },
    { k: "1,400+", v: "Cars delivered" },
    { k: "4.6★", v: "Google rating" },
    { k: "24/7", v: "Concierge" },
  ];
  return (
    <section className="container-page mt-24 md:mt-32">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-hairline lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.v} className="bg-background p-8 md:p-10">
            <p className="text-4xl font-semibold tracking-tight md:text-5xl">{it.k}</p>
            <p className="mt-2 text-sm text-ink-soft">{it.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Collection ---------------- */

const CARS = [
  {
    img: rangeRoverAsset,
    tag: "SUV",
    name: "Range Rover Sport",
    year: "2022",
    mileage: "14,200 km",
  },
  {
    img: car2,
    tag: "Coupé",
    name: "Jaguar F-Type R",
    year: "2022",
    mileage: "9,120 km",
  },
  {
    img: gWagonAsset,
    tag: "SUV",
    name: "Mercedes-AMG G 63",
    year: "2024",
    mileage: "2,800 km",
  },
];

function Collection() {
  return (
    <section id="collection" className="container-page mt-28 md:mt-40">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-ink-soft">
            The collection
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-tight md:text-5xl">
            A quiet, considered selection.
          </h2>
        </div>
        <a
          href="#visit"
          className="hidden shrink-0 items-center gap-1 text-sm text-ink hover:text-ink-soft md:inline-flex"
        >
          View all in showroom <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {CARS.map((c, i) => (
          <article
            key={c.name}
            className="group relative overflow-hidden rounded-3xl bg-surface hairline transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_-30px_rgba(0,0,0,0.35)]"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="aspect-[4/3] overflow-hidden bg-surface-2">
              <img
                src={c.img}
                alt={c.name}
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex items-center justify-between gap-4 p-6">
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-xs text-ink-soft">
                  <span className="rounded-full bg-background hairline px-2 py-0.5">
                    {c.tag}
                  </span>
                  <span>{c.year}</span>
                  <span>·</span>
                  <span>{c.mileage}</span>
                </div>
                <h3 className="mt-2 truncate text-lg font-medium tracking-tight">
                  {c.name}
                </h3>
              </div>
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-ink text-primary-foreground transition-transform group-hover:rotate-[-45deg]">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Showroom feature ---------------- */

function Showroom() {
  return (
    <section id="showroom" className="container-page mt-28 md:mt-40">
      <div className="relative overflow-hidden rounded-[32px] bg-ink text-primary-foreground">
        <img
          src={showroom}
          alt="Abana Cars showroom interior at dusk"
          loading="lazy"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in oklab, var(--ink) 30%, transparent) 0%, color-mix(in oklab, var(--ink) 85%, transparent) 100%)",
          }}
        />
        <div className="relative grid gap-10 p-8 md:p-14 lg:grid-cols-2 lg:p-20">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-gold-soft">
              Inside the showroom
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
              A calm, well-lit space to make an unhurried decision.
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-6">
            <p className="max-w-md text-[17px] leading-relaxed text-white/75">
              Every car is presented in daylight-balanced lighting, with full
              documentation and inspection history on hand. Take your time.
              Coffee&rsquo;s on us.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-ink transition-all hover:translate-y-[-1px]"
              >
                <MapPin className="h-4 w-4" /> Get directions
              </a>
              <a
                href="tel:+2347010207371"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-medium text-white ring-1 ring-white/15 backdrop-blur transition-all hover:bg-white/15"
              >
                <Phone className="h-4 w-4" /> 0701 020 7371
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Benefits ---------------- */

function Benefits() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Inspected, end to end",
      body: "A 160-point mechanical and cosmetic inspection on every vehicle, with paperwork you can keep.",
    },
    {
      icon: Sparkles,
      title: "Detailed to a standard",
      body: "Cars leave our bay looking, sounding and feeling the way they should — never rushed.",
    },
    {
      icon: KeyRound,
      title: "Same-day handover",
      body: "Paperwork, plates and insurance handled in-house so you can drive off the same afternoon.",
    },
    {
      icon: Car,
      title: "Source-to-order",
      body: "Looking for something specific? Our buyers work across West Africa and Europe to find it.",
    },
  ];
  return (
    <section className="container-page mt-28 md:mt-40">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.28em] text-ink-soft">
            Why Abana
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            The small things, done properly.
          </h2>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink-soft">
            We&rsquo;d rather sell you one car for ten years than ten cars in one.
            That mindset shapes everything we do.
          </p>
        </div>
        <div className="lg:col-span-7 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-hairline sm:grid-cols-2">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-background p-8">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-surface hairline">
                <Icon className="h-4 w-4 text-ink" />
              </div>
              <h3 className="mt-6 text-lg font-medium tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

const REVIEWS = [
  {
    quote:
      "Bought my GLE from Abana last year. Straightforward people, clean paperwork, and the car has been flawless.",
    name: "Chinedu O.",
    meta: "Google review",
  },
  {
    quote:
      "The showroom in Wuse 2 is beautifully kept and the team never pushed. Rare in Abuja. Will be back.",
    name: "Amaka N.",
    meta: "Google review",
  },
  {
    quote:
      "They sourced a specific spec of Land Cruiser for me in under three weeks. Delivered exactly as promised.",
    name: "Ibrahim S.",
    meta: "Google review",
  },
];

function Testimonials() {
  return (
    <section id="reviews" className="container-page mt-28 md:mt-40">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-ink-soft">Reviews</p>
          <h2 className="mt-4 max-w-xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            4.6 stars, and the stories behind them.
          </h2>
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <div className="flex">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className="h-4 w-4 fill-gold text-gold" strokeWidth={0} />
            ))}
          </div>
          <span className="text-sm text-ink-soft">Verified on Google</span>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {REVIEWS.map((r) => (
          <figure
            key={r.name}
            className="flex h-full flex-col justify-between rounded-3xl bg-surface hairline p-8 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]"
          >
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-gold text-gold" strokeWidth={0} />
              ))}
            </div>
            <blockquote className="mt-6 text-[17px] leading-relaxed text-ink">
              &ldquo;{r.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 flex items-center justify-between text-sm">
              <span className="font-medium text-ink">{r.name}</span>
              <span className="text-ink-soft">{r.meta}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Visit + Map ---------------- */

function Visit() {
  return (
    <section id="visit" className="container-page mt-28 md:mt-40">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.28em] text-ink-soft">Visit</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Come by the showroom.
          </h2>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-ink-soft">
            We&rsquo;re inside Vegas Mall and Apartments in Wuse 2. Ample parking,
            an unhurried tour, and someone who actually knows the cars.
          </p>

          <dl className="mt-10 space-y-6">
            <InfoRow icon={MapPin} label="Address" value={ADDRESS} />
            <InfoRow
              icon={Phone}
              label="Phone"
              value="0701 020 7371"
              href="tel:+2347010207371"
            />
            <InfoRow icon={Clock} label="Hours" value="Open 24 hours, every day" />
            <InfoRow
              icon={Instagram}
              label="Instagram"
              value="@abanacars"
              href="https://instagram.com"
            />
          </dl>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:translate-y-[-1px] hover:shadow-[0_18px_40px_-12px_rgba(0,0,0,0.4)]"
            >
              <MapPin className="h-4 w-4" /> Open in Google Maps
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-3xl hairline bg-surface shadow-[0_30px_70px_-40px_rgba(0,0,0,0.35)]">
            <iframe
              title="Abana Cars Ltd on Google Maps"
              src={MAP_EMBED}
              width="100%"
              height="520"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[420px] w-full border-0 md:h-[560px]"
              allowFullScreen
            />
            <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full bg-background/85 px-3 py-1.5 text-xs backdrop-blur hairline">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Wuse 2, Abuja
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="grid grid-cols-[auto_1fr] items-start gap-4">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-surface hairline">
        <Icon className="h-4 w-4 text-ink" />
      </div>
      <div className="min-w-0">
        <dt className="text-xs uppercase tracking-widest text-ink-soft">{label}</dt>
        <dd className="mt-1 text-[15px] leading-snug text-ink">{value}</dd>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block transition-opacity hover:opacity-80">
      {content}
    </a>
  ) : (
    content
  );
}

/* ---------------- FAQ ---------------- */

const FAQS = [
  {
    q: "Do you accept trade-ins?",
    a: "Yes. Bring your current vehicle in for a same-day valuation and we can offset it against your next car.",
  },
  {
    q: "Can I arrange financing through Abana?",
    a: "We work with several Nigerian banks and can help structure financing that fits your monthly plan.",
  },
  {
    q: "Do you handle registration and paperwork?",
    a: "All plates, insurance and paperwork are handled in-house, typically same-day.",
  },
  {
    q: "Can you source a specific model?",
    a: "Absolutely. Tell us the exact spec, colour and year — our buyers will find it, usually within four weeks.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="container-page mt-28 md:mt-40">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-xs uppercase tracking-[0.28em] text-ink-soft">FAQ</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight md:text-5xl">
            Questions, answered.
          </h2>
        </div>
        <div className="lg:col-span-8">
          <div className="divide-y divide-hairline border-y border-hairline">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-lg font-medium tracking-tight">{f.q}</span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-surface hairline transition-transform">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-500 ${
                      isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                      {f.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */

function CTA() {
  return (
    <section className="container-page mt-28 md:mt-40">
      <div
        className="relative overflow-hidden rounded-[32px] bg-ink px-8 py-16 text-primary-foreground md:px-16 md:py-24"
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-0 opacity-70"
          style={{
            background:
              "radial-gradient(60% 80% at 80% 0%, color-mix(in oklab, var(--gold) 45%, transparent), transparent 60%)",
          }}
        />
        <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
          <h2 className="lg:col-span-8 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Ready to find your next car?
          </h2>
          <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
            <a
              href="tel:+2347010207371"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-ink transition-all hover:translate-y-[-1px]"
            >
              <Phone className="h-4 w-4" /> Call the showroom
            </a>
            <a
              href="#visit"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3.5 text-sm font-medium text-white ring-1 ring-white/15 backdrop-blur transition-all hover:bg-white/15"
            >
              <MapPin className="h-4 w-4" /> Get directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="container-page mt-24 pb-12">
      <div className="flex flex-col items-start justify-between gap-8 border-t border-hairline pt-10 md:flex-row md:items-center">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="text-sm font-medium tracking-tight">
            Abana Cars Ltd
          </span>
        </div>
        <p className="max-w-md text-xs text-ink-soft">
          Plot 472C Atakpame St, Wuse 2, Abuja · Open 24 hours ·
          © {new Date().getFullYear()} Abana Cars Ltd. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-xs text-ink-soft">
          <a href="#collection" className="hover:text-ink">Collection</a>
          <a href="#visit" className="hover:text-ink">Visit</a>
          <a href="https://instagram.com" className="hover:text-ink">Instagram</a>
        </div>
      </div>
    </footer>
  );
}
