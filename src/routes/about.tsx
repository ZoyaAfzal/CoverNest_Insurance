import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/layout/PageShell";
import { FadeUp, Stagger, item, Eyebrow, Counter } from "@/components/motion/Motion";
import { motion } from "framer-motion";
import { Award, Heart, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { team } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About CoverNest — A more human insurance agency" },
      { name: "description", content: "Family-founded, independently licensed, and obsessed with clarity. Meet the people behind CoverNest." },
      { property: "og:title", content: "About CoverNest" },
      { property: "og:description", content: "Family-founded, independently licensed, and obsessed with clarity." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=80&auto=format&fit=crop" },
    ],
  }),
  component: About,
});

function About() {
  const values = [
    { Icon: Heart, t: "People first", d: "Every policy starts with understanding who we're protecting and why it matters." },
    { Icon: ShieldCheck, t: "Plain English", d: "No fine print theater. We translate every clause into something you can act on." },
    { Icon: Award, t: "Independent advice", d: "We work for you, not the carriers. That means real choice and honest tradeoffs." },
    { Icon: Users, t: "Always-on support", d: "Real humans answer the phone, day or night, on the worst day of your year." },
  ];
  return (
    <PageShell>
      <PageHero
        eyebrow="About us"
        title="A more human"
        italic="insurance agency."
        subtitle="Founded in 1989 by the Carter family, CoverNest has spent 35 years helping families and businesses replace insurance anxiety with clarity. We're independent, licensed in all 50 states, and proudly stubborn about doing things the right way."
        image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80&auto=format&fit=crop"
      />

      <section className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-12 gap-12 items-center">
          <FadeUp className="lg:col-span-5">
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-3 text-4xl md:text-5xl">Built on a kitchen table promise.</h2>
            <div className="mt-6 space-y-4 text-brand-dark/70">
              <p>It started in 1989, when Amelia Carter watched her parents struggle through a flood claim with an agency that wouldn't return their calls. She decided insurance could be something different.</p>
              <p>Three decades later, CoverNest serves 124,000+ households across the country but we still measure ourselves by one number: how quickly we pick up the phone.</p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1} className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              { v: 124000, s: "+", l: "Households served" },
              { v: 35, s: " yrs", l: "Independent" },
              { v: 4.9, s: "★", l: "Average rating" },
              { v: 11, s: " min", l: "Average call wait" },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl border border-border bg-brand-cream/50 p-6">
                <div className="font-display text-4xl text-brand-green">
                  {s.v < 100 && s.v !== 11 ? s.v : <Counter to={s.v} />} {s.s}
                </div>
                <div className="mt-2 text-sm text-brand-dark/65">{s.l}</div>
              </div>
            ))}
          </FadeUp>
        </div>
      </section>

      <section className="py-20 bg-brand-cream/60">
        <div className="container-x">
          <FadeUp className="max-w-2xl">
            <Eyebrow>Our values</Eyebrow>
            <h2 className="mt-3 text-4xl md:text-5xl">Four things we never compromise on.</h2>
          </FadeUp>
          <Stagger className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ Icon, t, d }) => (
              <motion.div key={t} variants={item} className="rounded-2xl bg-white p-7 border border-border">
                <span className="grid place-items-center size-12 rounded-xl bg-brand-green/10 text-brand-green">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-xl">{t}</h3>
                <p className="mt-2 text-sm text-brand-dark/65">{d}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <FadeUp>
              <Eyebrow>The team</Eyebrow>
              <h2 className="mt-3 text-4xl md:text-5xl">People who pick up the phone.</h2>
            </FadeUp>
            <Button variant="hero" asChild><Link to="/team">Meet the full team</Link></Button>
          </div>
          <Stagger className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((p) => (
              <motion.div key={p.name} variants={item} className="group">
                <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="mt-4">
                  <div className="font-display text-lg">{p.name}</div>
                  <div className="text-sm text-brand-dark/60">{p.role}</div>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>
    </PageShell>
  );
}
