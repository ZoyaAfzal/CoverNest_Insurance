import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/layout/PageShell";
import { Stagger, item } from "@/components/motion/Motion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/content";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "All insurance services — CoverNest" },
      { name: "description", content: "Home, auto, health, life, business and travel insurance — built to fit your life." },
      { property: "og:title", content: "All insurance services — CoverNest" },
      { property: "og:description", content: "Home, auto, health, life, business and travel insurance — built to fit your life." },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <PageShell>
      <PageHero
        eyebrow="What we cover"
        title="Insurance built"
        italic="to fit your life."
        subtitle="Six core lines of coverage, each tuned by licensed advisors who actually read the fine print."
      />
      <section className="pb-24">
        <div className="container-x">
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <motion.div key={s.slug} variants={item} whileHover={{ y: -6 }}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="group block rounded-2xl overflow-hidden bg-white border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow">
                  <div className="aspect-[5/3] overflow-hidden">
                    <img src={s.image} alt={s.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-brand-green uppercase tracking-wider">{s.emoji} {s.name.split(" ")[0]}</div>
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
    </PageShell>
  );
}
