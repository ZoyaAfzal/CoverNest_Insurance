import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/layout/PageShell";
import { Stagger, item } from "@/components/motion/Motion";
import { motion } from "framer-motion";
import { team } from "@/lib/content";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Meet the team — CoverNest" },
      { name: "description", content: "Licensed advisors and claims specialists who pick up the phone." },
      { property: "og:title", content: "Meet the team — CoverNest" },
      { property: "og:description", content: "Licensed advisors and claims specialists who pick up the phone." },
    ],
  }),
  component: Team,
});

function Team() {
  const full = [...team, ...team.map((t) => ({ ...t, name: t.name + " " })) ];
  return (
    <PageShell>
      <PageHero eyebrow="The team" title="People who pick up" italic="the phone." subtitle="Every advisor on this page holds an active license and answers their own line." />
      <section className="pb-24">
        <div className="container-x">
          <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {full.map((p, i) => (
              <motion.div key={i} variants={item} className="group">
                <div className="rounded-2xl overflow-hidden aspect-[4/5]">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="mt-4">
                  <div className="font-display text-lg">{p.name.trim()}</div>
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
