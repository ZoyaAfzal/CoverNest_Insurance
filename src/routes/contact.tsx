import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/layout/PageShell";
import { FadeUp } from "@/components/motion/Motion";
import { Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact CoverNest — Talk to a real advisor" },
      { name: "description", content: "Call, email, or visit. We answer in under 12 minutes on average." },
      { property: "og:title", content: "Contact CoverNest" },
      { property: "og:description", content: "Call, email, or visit. We answer in under 12 minutes on average." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell>
      <PageHero eyebrow="Contact" title="Talk to a" italic="real advisor." subtitle="Real humans, real responses. Write to us anytime." />
      <section className="pb-24">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <FadeUp className="lg:col-span-7">
            <form className="rounded-3xl bg-white border border-border p-8 shadow-[var(--shadow-card)] space-y-4" onSubmit={(e)=>e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-xs text-brand-dark/60">Full name</label><Input className="mt-1.5" placeholder="Alex Morgan"/></div>
                <div><label className="text-xs text-brand-dark/60">Email</label><Input className="mt-1.5" placeholder="alex@email.com"/></div>
              </div>
              <div><label className="text-xs text-brand-dark/60">Subject</label><Input className="mt-1.5" placeholder="How can we help?"/></div>
              <div><label className="text-xs text-brand-dark/60">Message</label><Textarea className="mt-1.5 min-h-32" placeholder="Tell us a little about what you're looking for..."/></div>
              <Button variant="hero" size="lg" className="w-full">Send message</Button>
            </form>
          </FadeUp>
          <FadeUp delay={0.1} className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden aspect-square">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop" alt="" className="w-full h-full object-cover"/>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3"><span className="grid place-items-center size-10 rounded-xl bg-brand-green/10 text-brand-green"><Mail className="size-4"/></span>hello@covernest.com</li>
              <li className="flex items-center gap-3"><span className="grid place-items-center size-10 rounded-xl bg-brand-green/10 text-brand-green"><Clock className="size-4"/></span>Mon–Fri 8am–8pm · Sat 9am–5pm · 24/7 claims line</li>
            </ul>
          </FadeUp>
        </div>
      </section>
    </PageShell>
  );
}
