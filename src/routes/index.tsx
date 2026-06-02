import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight, ArrowUpRight, Award, Check, ChevronRight, Database, Layout,
  Settings, Sparkles, Star, ShieldCheck, Clock, Users, Heart,
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FadeUp, Stagger, item, Eyebrow, Counter } from "@/components/motion/Motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { services, posts, testimonials } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CoverNest — Modern insurance, designed with clarity" },
      { name: "description", content: "Home, auto, health, life, business and travel insurance from licensed advisors. Clear coverage, fast claims, real people." },
      { property: "og:title", content: "CoverNest — Modern insurance, designed with clarity" },
      { property: "og:description", content: "Clear coverage, fast claims, real people. Talk to a CoverNest advisor today." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80&auto=format&fit=crop" },
    ],
  }),
  component: Home,
});

function AnnouncementBar() {
  const text = "Secure your future with confidence  ·  Talk to an advisor  ·  Modern protection for your loved ones  ·  Now insuring in all 50 states  ·  ";
  return (
    <div className="bg-brand-dark text-white/85 text-xs overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee py-2 will-change-transform">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="mx-6">{text}</span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };

  return (
    <section ref={ref} className="relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden bg-mesh">
      <div className="container-x relative grid lg:grid-cols-12 gap-10 items-center">
        <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-6 relative z-10">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-medium">
              <Sparkles className="size-3.5" /> Modern Insurance Agency
            </span>
          </motion.div>
          <motion.h1 variants={item} className="mt-5 text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-balance">
            Comprehensive Protection{" "}
            <span className="italic font-normal text-brand-green">for Your Loved Ones</span>
          </motion.h1>
          <motion.p variants={item} className="mt-6 text-lg text-brand-dark/70 max-w-xl">
            We guide you through insurance with clarity, confidence, and care from your first question to your fastest claim.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Button variant="hero" size="xl" asChild>
              <Link to="/quote">Get Pre-qualified <ArrowRight className="size-4" /></Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/services">View Our Services</Link>
            </Button>
          </motion.div>
          <motion.div variants={item} className="mt-10 flex items-center gap-5 text-sm text-brand-dark/60">
            <div className="flex -space-x-2">
              {testimonials.map((t) => (
                <img key={t.name} src={t.image} alt="" className="size-9 rounded-full border-2 border-white object-cover" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-brand-gold">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3.5 fill-current" />)}
              </div>
              <span>Rated 4.9 by 12,400+ policyholders</span>
            </div>
          </motion.div>
        </motion.div>

        <div className="lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)] aspect-[4/5] md:aspect-[5/6]"
          >
            <motion.img
              style={{ y, scale }}
              src="https://images.pexels.com/photos/7736042/pexels-photo-7736042.jpeg"
              alt="A family stands in front of their new home"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
          </motion.div>

          {/* floating cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -left-4 md:-left-10 top-12 bg-white rounded-2xl shadow-[var(--shadow-card)] p-4 w-52"
          >
            <div className="flex items-center gap-3">
              <span className="grid place-items-center size-10 rounded-xl bg-brand-green/10 text-brand-green"><ShieldCheck className="size-5"/></span>
              <div>
                <div className="font-display text-xl"><Counter to={235} suffix="K+" /></div>
                <div className="text-xs text-brand-dark/60">Insurance claims</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-2 md:-right-8 top-1/2 bg-white rounded-2xl shadow-[var(--shadow-card)] p-4 w-48"
          >
            <div className="flex items-center gap-3">
              <span className="grid place-items-center size-10 rounded-xl bg-brand-gold/15 text-brand-gold"><Award className="size-5"/></span>
              <div>
                <div className="font-display text-xl"><Counter to={85} suffix="+" /></div>
                <div className="text-xs text-brand-dark/60">Awards won</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute left-1/2 -translate-x-1/2 -bottom-6 bg-white rounded-2xl shadow-[var(--shadow-card)] px-5 py-3 flex items-center gap-3"
          >
            <span className="size-2 rounded-full bg-brand-green-light animate-pulse" />
            <span className="text-sm"><b>95%</b> client approval rating</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrustedBy() {
  const logos = ["Northwind", "Sequoia", "Aurora", "Vanta", "Helio", "Meridian", "Lighthouse", "Foundry"];
  return (
    <section className="py-12 border-y border-border/60 bg-white">
      <div className="container-x">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-brand-dark/50">Trusted by leading companies & families</p>
        <div className="mt-8 overflow-hidden">
          <div className="flex animate-marquee-fast whitespace-nowrap">
            {[...logos, ...logos, ...logos].map((l, i) => (
              <span key={i} className="font-display text-2xl text-brand-dark/40 mx-10 italic">{l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const features = [
    { Icon: Layout, t: "Personalized plans", d: "Coverage shaped to your life, never a one-size template." },
    { Icon: Sparkles, t: "Fast, transparent quotes", d: "No call-back required. See real numbers in minutes." },
    { Icon: Settings, t: "Full customizability", d: "Mix and match coverage levels, riders, and deductibles." },
    { Icon: Database, t: "One dashboard for everything", d: "Policies, claims, documents and renewals in one place." },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <FadeUp className="lg:col-span-5">
          <Eyebrow>Smart benefits</Eyebrow>
          <h2 className="mt-3 text-4xl md:text-5xl leading-[1.05]">
            Powerful features that <span className="italic text-brand-green">simplify</span> the way you insure.
          </h2>
          <p className="mt-5 text-brand-dark/70 max-w-md">
            We rebuilt the insurance experience from scratch, so what used to take a week takes minutes.
          </p>
          <Button variant="dark" className="mt-8" asChild>
            <Link to="/about">How we work <ArrowRight className="size-4" /></Link>
          </Button>
        </FadeUp>
        <Stagger className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
          {features.map(({ Icon, t, d }) => (
            <motion.div
              key={t}
              variants={item}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-border bg-white p-7 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-elegant)]"
            >
              <motion.span
                whileHover={{ rotate: 8, scale: 1.05 }}
                className="grid place-items-center size-12 rounded-xl bg-brand-green/10 text-brand-green"
              >
                <Icon className="size-5" />
              </motion.span>
              <h3 className="mt-5 font-display text-xl">{t}</h3>
              <p className="mt-2 text-sm text-brand-dark/65 leading-relaxed">{d}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="py-24 md:py-32 bg-brand-cream/60">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <FadeUp className="max-w-2xl">
            <Eyebrow>What we cover</Eyebrow>
            <h2 className="mt-3 text-4xl md:text-5xl leading-[1.05]">
              Insurance solutions for <span className="italic text-brand-green">every stage</span> of life.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Link to="/services" className="inline-flex items-center gap-1 text-sm text-brand-green hover:gap-2 transition-all">
              View all services <ArrowUpRight className="size-4" />
            </Link>
          </FadeUp>
        </div>

        <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <motion.div key={s.slug} variants={item} whileHover={{ y: -6 }} className="group">
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="block rounded-2xl overflow-hidden bg-white border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow"
              >
                <div className="aspect-[5/3] overflow-hidden">
                  <img src={s.image} alt={s.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-brand-green font-medium">
                    <span>{s.emoji}</span><span className="uppercase tracking-wider">{s.name.split(" ")[0]}</span>
                  </div>
                  <h3 className="mt-2 font-display text-2xl">{s.name}</h3>
                  <p className="mt-2 text-sm text-brand-dark/65">{s.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm text-brand-green group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="size-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: 235000, s: "+", l: "Claims processed" },
    { v: 98, s: "%", l: "Customer satisfaction" },
    { v: 35, s: "+ yrs", l: "Of experience" },
    { v: 50, s: " states", l: "Coverage nationwide" },
  ];
  return (
    <section className="py-24 bg-dark-mesh text-white">
      <div className="container-x grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((st, i) => (
          <FadeUp key={i} delay={i * 0.05} className="text-center">
            <div className="font-display text-5xl md:text-6xl text-brand-green-light">
              <Counter to={st.v} suffix={st.s} />
            </div>
            <div className="mt-3 text-sm text-white/70 uppercase tracking-wider">{st.l}</div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { t: "Personalized coverage plans", d: "Every recommendation starts with a conversation, never a script." },
    { t: "24/7 claims support", d: "Real people answer the phone at 3am, on holidays, on weekends." },
    { t: "Expert licensed advisors", d: "Our team averages 14 years of experience across all 50 states." },
    { t: "Competitive rates, guaranteed", d: "If we can't match or beat your renewal, we'll tell you up front." },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
        <FadeUp className="lg:col-span-6">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-[var(--shadow-elegant)]">
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80&auto=format&fit=crop"
              alt="A CoverNest advisor reviewing a policy with a client"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-2xl p-5 flex items-center gap-4">
              <span className="grid place-items-center size-12 rounded-xl bg-brand-green text-white"><Heart className="size-5"/></span>
              <div>
                <div className="font-display text-lg">A relationship, not a transaction</div>
                <div className="text-xs text-brand-dark/60">Average client tenure: 11.4 years</div>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.15} className="lg:col-span-6">
          <Eyebrow>Why CoverNest</Eyebrow>
          <h2 className="mt-3 text-4xl md:text-5xl leading-[1.05]">
            Reliability, transparency,{" "}
            <span className="italic text-brand-green">and real commitment</span>.
          </h2>
          <Accordion type="single" collapsible defaultValue="0" className="mt-8">
            {items.map((it, i) => (
              <AccordionItem key={i} value={String(i)} className="border-b border-border">
                <AccordionTrigger className="text-left font-display text-lg py-5 hover:no-underline">
                  {it.t}
                </AccordionTrigger>
                <AccordionContent className="text-brand-dark/70">{it.d}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Button variant="hero" className="mt-8" asChild>
            <Link to="/quote">Schedule a free consultation <ChevronRight className="size-4" /></Link>
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-brand-cream/60">
      <div className="container-x">
        <FadeUp className="text-center max-w-2xl mx-auto">
          <Eyebrow>Client stories</Eyebrow>
          <h2 className="mt-3 text-4xl md:text-5xl">
            What our clients <span className="italic text-brand-green">say about us</span>.
          </h2>
        </FadeUp>
        <Stagger className="mt-14 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={item}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-white p-8 border border-border shadow-[var(--shadow-card)]"
            >
              <div className="flex gap-1 text-brand-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: [0, 1.3, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <Star className="size-4 fill-current" />
                  </motion.span>
                ))}
              </div>
              <blockquote className="mt-5 font-display text-xl leading-snug text-balance">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img src={t.image} alt={t.name} className="size-11 rounded-full object-cover" />
                <div>
                  <div className="font-medium text-sm">{t.name}</div>
                  <div className="text-xs text-brand-dark/55">{t.city}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function Blog() {
  const [feat, ...rest] = posts;
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <FadeUp className="max-w-2xl">
            <Eyebrow>Latest insights</Eyebrow>
            <h2 className="mt-3 text-4xl md:text-5xl leading-[1.05]">
              Your guide to <span className="italic text-brand-green">smarter</span> insurance choices.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-brand-green hover:gap-2 transition-all">
              View all articles <ArrowUpRight className="size-4" />
            </Link>
          </FadeUp>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <FadeUp className="lg:col-span-7">
            <Link to="/blog/$slug" params={{ slug: feat.slug }} className="group block rounded-2xl overflow-hidden bg-white border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={feat.image} alt={feat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent opacity-100 group-hover:opacity-60 transition" />
                <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-white/90 text-xs font-medium text-brand-dark">{feat.category}</span>
              </div>
              <div className="p-7">
                <div className="text-xs text-brand-dark/55">{feat.date} · {feat.readTime}</div>
                <h3 className="mt-2 font-display text-3xl leading-tight text-balance">{feat.title}</h3>
                <p className="mt-3 text-brand-dark/70">{feat.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm text-brand-green group-hover:gap-2 transition-all">
                  Read article <ArrowRight className="size-4" />
                </span>
              </div>
            </Link>
          </FadeUp>

          <Stagger className="lg:col-span-5 grid gap-6">
            {rest.map((p) => (
              <motion.div key={p.slug} variants={item}>
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="group flex gap-5 rounded-2xl bg-white border border-border p-4 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition">
                  <div className="w-32 shrink-0 aspect-square rounded-xl overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="py-1">
                    <span className="text-[11px] uppercase tracking-wider text-brand-green">{p.category}</span>
                    <h4 className="mt-1 font-display text-lg leading-snug">{p.title}</h4>
                    <span className="mt-2 inline-flex items-center gap-1 text-xs text-brand-dark/60">Read article <ArrowRight className="size-3" /></span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="py-20">
      <div className="container-x">
        <FadeUp>
          <div className="relative overflow-hidden rounded-3xl bg-dark-mesh text-white p-10 md:p-16">
            <motion.div
              aria-hidden
              animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(600px circle at 20% 30%, var(--brand-green-light), transparent 60%), radial-gradient(500px circle at 80% 70%, var(--brand-gold), transparent 60%)",
                backgroundSize: "200% 200%",
              }}
            />
            <div className="relative grid md:grid-cols-12 items-center gap-8">
              <div className="md:col-span-8">
                <Eyebrow><span className="text-brand-green-light">Ready when you are</span></Eyebrow>
                <h2 className="mt-3 text-4xl md:text-5xl text-white leading-[1.05] text-balance">
                  Looking for a fresh plan, or a second opinion? <span className="italic text-brand-green-light">Reach out today.</span>
                </h2>
              </div>
              <div className="md:col-span-4 flex md:justify-end gap-3 flex-wrap">
                <Button variant="gold" size="xl" asChild><Link to="/quote">Get your estimate</Link></Button>
                <Button variant="heroOutline" size="xl" asChild className="!bg-white/10 !text-white !border-white/20 hover:!bg-white/20">
                  <Link to="/contact">Talk to us</Link>
                </Button>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Benefits />
        <Services />
        <Stats />
        <WhyUs />
        <Testimonials />
        <Blog />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
