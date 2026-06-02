import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/layout/PageShell";
import { Stagger, item } from "@/components/motion/Motion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { posts } from "@/lib/content";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Insights & guides — CoverNest" },
      { name: "description", content: "Plain-English guides to insurance, claims, and financial protection." },
      { property: "og:title", content: "Insights & guides — CoverNest" },
      { property: "og:description", content: "Plain-English guides to insurance, claims, and financial protection." },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <PageShell>
      <PageHero eyebrow="Insights" title="Smarter insurance," italic="explained simply." subtitle="Field-tested guides from our advisors and claims team." />
      <section className="pb-24">
        <div className="container-x">
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <motion.div key={p.slug} variants={item} whileHover={{ y: -6 }}>
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block rounded-2xl overflow-hidden bg-white border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow">
                  <div className="aspect-[5/3] overflow-hidden relative">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 text-xs font-medium">{p.category}</span>
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-brand-dark/55">{p.date} · {p.readTime}</div>
                    <h3 className="mt-2 font-display text-xl leading-snug">{p.title}</h3>
                    <p className="mt-2 text-sm text-brand-dark/65">{p.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm text-brand-green group-hover:gap-2 transition-all">Read article <ArrowRight className="size-4"/></span>
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
