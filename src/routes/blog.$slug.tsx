import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/PageShell";
import { FadeUp, Eyebrow } from "@/components/motion/Motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { posts } from "@/lib/content";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.post.title} — CoverNest` },
      { name: "description", content: loaderData.post.excerpt },
      { property: "og:title", content: loaderData.post.title },
      { property: "og:description", content: loaderData.post.excerpt },
      { property: "og:image", content: loaderData.post.image },
    ] : [],
  }),
  notFoundComponent: () => (
    <PageShell><div className="container-x py-24 text-center"><h1 className="font-display text-4xl">Article not found</h1></div></PageShell>
  ),
  errorComponent: ({ error, reset }) => (
    <PageShell>
      <div className="container-x py-24 text-center">
        <h1 className="font-display text-3xl">Something went wrong</h1>
        <p className="mt-2 text-sm text-brand-dark/60">{error.message}</p>
        <Button variant="hero" className="mt-6" onClick={() => reset()}>Try again</Button>
      </div>
    </PageShell>
  ),
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const related = posts.filter((p) => p.slug !== post.slug);
  return (
    <PageShell>
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/40 to-brand-dark/10" />
        <div className="relative container-x h-full flex flex-col justify-end pb-12 text-white">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white">
            <ArrowLeft className="size-4" /> Back to blog
          </Link>
          <FadeUp delay={0.1}>
            <span className="mt-4 inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur text-xs">{post.category}</span>
            <h1 className="mt-3 font-display text-4xl md:text-6xl max-w-4xl text-balance">{post.title}</h1>
            <div className="mt-5 text-sm text-white/75">{post.author} · {post.date} · {post.readTime}</div>
          </FadeUp>
        </div>
      </section>

      <article className="py-20 max-w-3xl mx-auto px-6 prose-content">
        <p className="text-xl text-brand-dark/80 leading-relaxed">{post.excerpt}</p>
        <h2 className="mt-12 font-display text-3xl">The reality most people miss</h2>
        <p className="mt-4 text-brand-dark/75 leading-relaxed">
          Insurance is one of the few products you buy hoping you'll never use. That makes it tempting to default to the cheapest option but when something does go wrong, the gap between a thoughtful policy and a "good enough" one becomes painfully obvious.
        </p>
        <p className="mt-4 text-brand-dark/75 leading-relaxed">
          The good news: a 20-minute conversation with a licensed advisor is usually enough to spot the holes. We walk through three or four "what if" scenarios that match how you actually live, then build coverage around those, not around a marketing template.
        </p>
        <img src="https://images.unsplash.com/photo-1554224155-1696413565d3?w=1400&q=80&auto=format&fit=crop" alt="" className="mt-10 w-full rounded-2xl"/>
        <h2 className="mt-12 font-display text-3xl">What to ask before you renew</h2>
        <p className="mt-4 text-brand-dark/75 leading-relaxed">
          Whether you stay with us or anyone else, three questions sharpen any renewal conversation: What is the actual out-of-pocket cost of my worst likely claim? Which exclusions apply specifically to my situation? And when premiums change next year, what triggers the change?
        </p>
      </article>

      <section className="container-x pb-12">
        <div className="rounded-2xl bg-brand-cream/60 border border-border p-6 flex items-center gap-4">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80&auto=format&fit=crop" alt={post.author} className="size-14 rounded-full object-cover"/>
          <div>
            <div className="text-xs text-brand-dark/55">Written by</div>
            <div className="font-display text-lg">{post.author}</div>
            <div className="text-sm text-brand-dark/65">Senior advisor at CoverNest. 14 years in {post.category.toLowerCase()} coverage.</div>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <Eyebrow>Related articles</Eyebrow>
        <h2 className="mt-3 font-display text-3xl">Keep reading</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {related.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group flex gap-5 rounded-2xl bg-white border border-border p-4 hover:shadow-[var(--shadow-card)] transition">
              <div className="w-32 shrink-0 aspect-square rounded-xl overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
              </div>
              <div className="py-1">
                <span className="text-[11px] uppercase tracking-wider text-brand-green">{p.category}</span>
                <h4 className="mt-1 font-display text-lg leading-snug">{p.title}</h4>
                <span className="mt-2 inline-flex items-center gap-1 text-xs text-brand-dark/60">Read <ArrowRight className="size-3" /></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
