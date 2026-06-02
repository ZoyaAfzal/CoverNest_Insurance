import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { ReactNode } from "react";
import { FadeUp, Eyebrow } from "@/components/motion/Motion";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="pt-24">{children}</main>
      <Footer />
    </>
  );
}

export function PageHero({
  eyebrow, title, italic, subtitle, image,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-mesh pt-12 pb-20 md:pt-16 md:pb-28">
      <div className="container-x grid lg:grid-cols-12 gap-10 items-center">
        <FadeUp className="lg:col-span-7">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-3 text-5xl md:text-6xl leading-[1.05] text-balance">
            {title} {italic && <span className="italic text-brand-green">{italic}</span>}
          </h1>
          {subtitle && <p className="mt-5 text-lg text-brand-dark/70 max-w-2xl">{subtitle}</p>}
        </FadeUp>
        {image && (
          <FadeUp delay={0.15} className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-[var(--shadow-elegant)]">
              <img src={image} alt="" className="w-full h-full object-cover" />
            </div>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
