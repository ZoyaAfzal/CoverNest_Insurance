import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/layout/PageShell";
import { FadeUp } from "@/components/motion/Motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, ShieldCheck, FileText, Phone } from "lucide-react";

export const Route = createFileRoute("/claim")({
  head: () => ({
    meta: [
      { title: "File a claim — CoverNest" },
      { name: "description", content: "Submit a claim in minutes. Average first response: under 4 hours." },
      { property: "og:title", content: "File a claim — CoverNest" },
      { property: "og:description", content: "Submit a claim in minutes. Average first response: under 4 hours." },
    ],
  }),
  component: Claim,
});

function Claim() {
  return (
    <PageShell>
      <PageHero eyebrow="Claims" title="File a claim," italic="quickly & calmly." subtitle="Tell us what happened. A specialist will reach out within four hours, day or night.">
      </PageHero>
      <section className="container-x -mt-8 pb-10 flex flex-wrap gap-3">
        {[{Icon:Clock,t:"24/7 support"},{Icon:ShieldCheck,t:"No-pressure process"},{Icon:Phone,t:"Direct line to your adjuster"}].map(({Icon,t})=>(
          <span key={t} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border text-sm shadow-sm">
            <Icon className="size-4 text-brand-green"/>{t}
          </span>
        ))}
      </section>
      <section className="container-x pb-24 grid lg:grid-cols-12 gap-10">
        <FadeUp className="lg:col-span-7">
          <form onSubmit={(e)=>e.preventDefault()} className="rounded-3xl bg-white border border-border p-8 shadow-[var(--shadow-card)] space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label className="text-xs text-brand-dark/60">Policy number</label><Input className="mt-1.5" placeholder="CN-000-000"/></div>
              <div><label className="text-xs text-brand-dark/60">Claim type</label><Input className="mt-1.5" placeholder="Auto, home, health…"/></div>
            </div>
            <div><label className="text-xs text-brand-dark/60">What happened?</label><Textarea className="mt-1.5 min-h-40" placeholder="Walk us through the situation. Dates, locations, anyone else involved."/></div>
            <div><label className="text-xs text-brand-dark/60">Upload photos or documents</label><Input type="file" className="mt-1.5"/></div>
            <Button variant="hero" size="lg" className="w-full">Submit claim</Button>
            <p className="text-xs text-brand-dark/55 text-center">By submitting, you agree to be contacted by a licensed CoverNest claims specialist.</p>
          </form>
        </FadeUp>
        <FadeUp delay={0.1} className="lg:col-span-5">
          <div className="rounded-3xl bg-brand-cream/60 border border-border p-8">
            <h3 className="font-display text-2xl">What happens next</h3>
            <ol className="mt-6 relative space-y-6">
              <span className="absolute left-4 top-2 bottom-2 w-px bg-brand-green/30" aria-hidden/>
              {["You'll receive a confirmation email within minutes.","A claims specialist calls you within 4 hours.","We coordinate inspections, paperwork, and payouts on your behalf."].map((s,i)=>(
                <li key={i} className="relative pl-12">
                  <span className="absolute left-0 grid place-items-center size-8 rounded-full bg-brand-green text-white font-display">{i+1}</span>
                  <p className="text-brand-dark/75">{s}</p>
                </li>
              ))}
            </ol>
          </div>
        </FadeUp>
      </section>
    </PageShell>
  );
}
