import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/PageShell";
import { FadeUp, Eyebrow } from "@/components/motion/Motion";
import { ArrowLeft, ArrowRight, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services, testimonials } from "@/lib/content";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const svc = services.find((s) => s.slug === params.slug);
    if (!svc) throw notFound();
    return { svc };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.svc.name} — CoverNest` },
      { name: "description", content: loaderData.svc.long },
      { property: "og:title", content: `${loaderData.svc.name} — CoverNest` },
      { property: "og:description", content: loaderData.svc.long },
      { property: "og:image", content: loaderData.svc.image },
    ] : [],
  }),
  notFoundComponent: () => (
    <PageShell><div className="container-x py-24 text-center"><h1 className="font-display text-4xl">Service not found</h1></div></PageShell>
  ),
  errorComponent: ({ error, reset }) => (
    <PageShell>
      <div className="container-x py-24 text-center">
        <h1 className="font-display text-3xl">Something went wrong</h1>
        <p className="mt-2 text-brand-dark/60 text-sm">{error.message}</p>
        <Button variant="hero" className="mt-6" onClick={() => reset()}>Try again</Button>
      </div>
    </PageShell>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { svc } = Route.useLoaderData();
  return (
    <PageShell>
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <img src={svc.image} alt={svc.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/30" />
        <div className="relative container-x h-full flex flex-col justify-end pb-16 text-white">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
            <ArrowLeft className="size-4" /> All services
          </Link>
          <FadeUp delay={0.1}>
            <span className="mt-4 eyebrow !text-brand-green-light">{svc.emoji} Coverage</span>
            <h1 className="mt-3 font-display text-5xl md:text-7xl text-balance">{svc.name}</h1>
            <p className="mt-5 max-w-2xl text-lg text-white/80">{svc.long}</p>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <FadeUp className="lg:col-span-6">
            <Eyebrow>What's covered</Eyebrow>
            <h2 className="mt-3 text-4xl">Clear protection, line by line.</h2>
            <ul className="mt-8 space-y-3">
              {svc.covers.map((c: string) => (
                <li key={c} className="flex items-start gap-3 p-4 rounded-xl bg-brand-cream/50 border border-border">
                  <span className="mt-0.5 grid place-items-center size-6 rounded-full bg-brand-green text-white">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-sm">{c}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.1} className="lg:col-span-6">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-3 text-4xl">From quote to coverage in 3 steps.</h2>
            <ol className="mt-8 space-y-5">
              {["Tell us about you - five minutes, no commitment.", "Receive 3 tailored options with honest tradeoffs.", "Pick a plan and we handle the paperwork."].map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="grid place-items-center size-9 shrink-0 rounded-full bg-brand-green text-white font-display">{i + 1}</span>
                  <p className="pt-1 text-brand-dark/75">{s}</p>
                </li>
              ))}
            </ol>
            <Button variant="hero" size="lg" className="mt-8" asChild>
              <Link to="/quote">Get a free quote <ArrowRight className="size-4"/></Link>
            </Button>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 bg-brand-cream/60">
        <div className="container-x">
          <FadeUp>
            <Eyebrow>Real stories</Eyebrow>
            <h2 className="mt-3 text-4xl">From clients with this coverage.</h2>
          </FadeUp>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {testimonials.slice(0, 2).map((t) => (
              <figure key={t.name} className="rounded-2xl bg-white p-8 border border-border">
                <div className="flex gap-1 text-brand-gold">{Array.from({length:5}).map((_,i)=><Star key={i} className="size-4 fill-current"/>)}</div>
                <blockquote className="mt-4 font-display text-xl">"{t.quote}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <img src={t.image} alt={t.name} className="size-10 rounded-full object-cover"/>
                  <div><div className="text-sm font-medium">{t.name}</div><div className="text-xs text-brand-dark/55">{t.city}</div></div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
