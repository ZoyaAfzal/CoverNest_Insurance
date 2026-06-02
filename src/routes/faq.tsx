import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/layout/PageShell";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently asked questions — CoverNest" },
      { name: "description", content: "Answers to the most common questions about coverage, claims, billing and more." },
      { property: "og:title", content: "FAQ — CoverNest" },
      { property: "og:description", content: "Answers to the most common questions about coverage, claims, billing and more." },
    ],
  }),
  component: FAQ,
});

const groups: Record<string, { q: string; a: string }[]> = {
  General: [
    { q: "What does an independent agency mean?", a: "We don't work for a single carrier — we shop across dozens of them to find the best fit for your situation." },
    { q: "Can I bundle multiple policies?", a: "Yes. Bundling home + auto typically saves clients 12–18% with no loss of coverage." },
    { q: "Do you serve businesses?", a: "Absolutely — we cover everything from one-person LLCs to teams of 500." },
  ],
  Claims: [
    { q: "How quickly will an adjuster contact me?", a: "On average, within 4 hours — and within 1 hour for emergencies." },
    { q: "Will filing a claim raise my rates?", a: "Not always. We'll walk you through whether it's worth filing before you do." },
    { q: "Can I track my claim online?", a: "Yes, every claim has a live dashboard with milestones and document upload." },
  ],
  Billing: [
    { q: "How do I update my payment method?", a: "Sign in to your dashboard or call our billing team during business hours." },
    { q: "Do you offer monthly payment plans?", a: "Every line of coverage supports monthly, quarterly, semi-annual, or annual payments." },
    { q: "Are there hidden fees?", a: "Never. Every fee is disclosed in writing before you sign anything." },
  ],
  Coverage: [
    { q: "How do I know if I'm under-insured?", a: "Our free policy review compares your current coverage to your actual risk profile." },
    { q: "Can I add or remove coverage mid-term?", a: "Yes — most adjustments take effect within 24 hours." },
    { q: "What if I move to a new state?", a: "We're licensed in all 50, so your coverage moves with you." },
  ],
};

function FAQ() {
  return (
    <PageShell>
      <PageHero eyebrow="FAQ" title="Answers to" italic="the questions we hear most." subtitle="Still have one? Reach out to us anytime." />
      <section className="container-x pb-24">
        <Tabs defaultValue="General">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
            {Object.keys(groups).map((g) => <TabsTrigger key={g} value={g}>{g}</TabsTrigger>)}
          </TabsList>
          {Object.entries(groups).map(([g, items]) => (
            <TabsContent key={g} value={g} className="mt-8">
              <Accordion type="single" collapsible className="max-w-3xl">
                {items.map((it, i) => (
                  <AccordionItem key={i} value={String(i)}>
                    <AccordionTrigger className="text-left font-display text-lg hover:no-underline">{it.q}</AccordionTrigger>
                    <AccordionContent className="text-brand-dark/70">{it.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </PageShell>
  );
}
