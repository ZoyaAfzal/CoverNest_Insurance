import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/layout/PageShell";
import { FadeUp } from "@/components/motion/Motion";
import { Mail, Clock } from "lucide-react";
import { useEffect } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact CoverNest — Talk to a real advisor" },
      {
        name: "description",
        content: "Call, email, or visit. We answer in under 12 minutes on average.",
      },
      { property: "og:title", content: "Contact CoverNest" },
      {
        property: "og:description",
        content: "Call, email, or visit. We answer in under 12 minutes on average.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.webtechs.dev/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Talk to a"
        italic="real advisor."
        subtitle="Real humans, real responses. Write to us anytime."
      />
      <section className="pb-24">
        <div className="container-x grid lg:grid-cols-12 gap-10">
          <FadeUp className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-border shadow-[var(--shadow-card)] overflow-hidden h-[750px]">
              <iframe
                src="https://link.webtechs.dev/widget/form/0B9BNtRMaVRymmW1x3ye"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
                id="inline-0B9BNtRMaVRymmW1x3ye"
                data-form-name="Zoee_Practice"
                data-height="750"
                data-form-id="0B9BNtRMaVRymmW1x3ye"
                title="Zoee_Practice"
              ></iframe>
            </div>
          </FadeUp>
          <FadeUp delay={0.1} className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden aspect-square">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="grid place-items-center size-10 rounded-xl bg-brand-green/10 text-brand-green">
                  <Mail className="size-4" />
                </span>
                hello@covernest.com
              </li>
              <li className="flex items-center gap-3">
                <span className="grid place-items-center size-10 rounded-xl bg-brand-green/10 text-brand-green">
                  <Clock className="size-4" />
                </span>
                Mon–Fri 8am–8pm · Sat 9am–5pm · 24/7 claims line
              </li>
            </ul>
          </FadeUp>
        </div>
      </section>
    </PageShell>
  );
}
