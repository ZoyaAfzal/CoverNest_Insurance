import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/layout/PageShell";
import { FadeUp } from "@/components/motion/Motion";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Check } from "lucide-react";
import { services } from "@/lib/content";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Get a free quote — CoverNest" },
      { name: "description", content: "Five minutes, no commitment, no spam. See real numbers from real carriers." },
      { property: "og:title", content: "Get a free quote — CoverNest" },
      { property: "og:description", content: "Five minutes, no commitment, no spam. See real numbers from real carriers." },
    ],
  }),
  component: Quote,
});

function Quote() {
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<string[]>([]);
  const togglePick = (s: string) =>
    setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  const steps = ["Personal info", "Coverage type", "Review & submit"];
  const progress = ((step + 1) / steps.length) * 100;

  return (
    <PageShell>
      <PageHero eyebrow="Quote" title="Get a quote" italic="in five minutes." subtitle="No commitment. No spam. Real numbers from real carriers." />
      <section className="container-x pb-24 grid lg:grid-cols-12 gap-10">
        <FadeUp className="lg:col-span-7">
          <div className="rounded-3xl bg-white border border-border p-8 shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between text-xs text-brand-dark/60">
              <span>Step {step + 1} of {steps.length}</span>
              <span>{steps[step]}</span>
            </div>
            <Progress value={progress} className="mt-2" />

            <div className="mt-8 min-h-[280px]">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div key="s0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
                    <h3 className="font-display text-2xl">A bit about you</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input placeholder="Full name" />
                      <Input placeholder="Email" />
                      <Input placeholder="Phone" />
                      <Input placeholder="Zip code" />
                    </div>
                  </motion.div>
                )}
                {step === 1 && (
                  <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h3 className="font-display text-2xl">Which coverage do you need?</h3>
                    <p className="text-sm text-brand-dark/60 mt-1">Pick all that apply.</p>
                    <div className="mt-5 grid sm:grid-cols-2 gap-3">
                      {services.map((s) => {
                        const on = picked.includes(s.slug);
                        return (
                          <button
                            type="button"
                            key={s.slug}
                            onClick={() => togglePick(s.slug)}
                            className={`text-left p-4 rounded-xl border transition ${on ? "border-brand-green bg-brand-green/5" : "border-border bg-white hover:border-brand-green/40"}`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{s.emoji} {s.name}</span>
                              {on && <span className="grid place-items-center size-5 rounded-full bg-brand-green text-white"><Check className="size-3"/></span>}
                            </div>
                            <p className="mt-1 text-xs text-brand-dark/60 line-clamp-2">{s.short}</p>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
                {step === 2 && (
                  <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <h3 className="font-display text-2xl">Looking good. Ready to send?</h3>
                    <p className="mt-2 text-brand-dark/70">An advisor will reach out within one business day with three tailored options.</p>
                    <div className="mt-5 rounded-xl bg-brand-cream/60 border border-border p-5 text-sm">
                      <div className="font-medium">Selected coverage:</div>
                      <div className="mt-1 text-brand-dark/70">
                        {picked.length ? picked.map((p) => services.find((s) => s.slug === p)?.name).join(", ") : "None selected — that's okay, we'll ask."}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="mt-8 flex justify-between gap-3">
              <Button variant="outline" disabled={step === 0} onClick={() => setStep((s) => Math.max(0, s - 1))}>Back</Button>
              {step < steps.length - 1 ? (
                <Button variant="hero" onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}>Continue</Button>
              ) : (
                <Button variant="hero">Submit request</Button>
              )}
            </div>
          </div>
        </FadeUp>
        <FadeUp delay={0.1} className="lg:col-span-5">
          <div className="rounded-3xl overflow-hidden aspect-[4/5]">
            <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80&auto=format&fit=crop" alt="" className="w-full h-full object-cover"/>
          </div>
          <ul className="mt-6 space-y-3 text-sm text-brand-dark/70">
            {["No hard credit pull","Three tailored options, side-by-side","Talk to a real licensed advisor"].map((t)=>(
              <li key={t} className="flex items-center gap-2"><Check className="size-4 text-brand-green"/>{t}</li>
            ))}
          </ul>
        </FadeUp>
      </section>
    </PageShell>
  );
}
