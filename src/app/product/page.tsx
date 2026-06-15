import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { features } from "@/lib/content/features";
import { heroScript } from "@/lib/chat";
import PageHero from "@/components/PageHero";
import PhoneChatSim from "@/components/PhoneChatSim";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { Icon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Product — the AI operating system for your business",
  description:
    "Walk the full MyBizAI loop: a message comes in, the AI answers from your catalog, a lead is created, an appointment is booked, follow-ups fire, work reaches your staff — and analytics close the loop.",
  alternates: { canonical: "/product" },
};

/* The loop, in order — message in → analytics close the loop (PRD §5.2) */
const loop = [
  { slug: "conversations", step: "A message comes in", desc: "WhatsApp, Instagram, Telegram, SMS or web chat — it all lands in one inbox." },
  { slug: "ai-agents", step: "Your agent answers", desc: "Grounded in your catalog, documents and data sheets. In your tone. In seconds." },
  { slug: "crm", step: "A lead is born", desc: "Name, interest, intent — captured and scored without anyone typing a thing." },
  { slug: "appointments-orders", step: "The booking happens in chat", desc: "Real slots, instant confirmation, automatic reminders. Orders too." },
  { slug: "follow-ups", step: "Silence triggers a follow-up", desc: "Two quiet days after a quote? A personalised nudge goes out — revenue comes back." },
  { slug: "work-tasks", step: "Work reaches your team", desc: "Tasks land on your staff's existing WhatsApp. Checklist, address, photo-proof done." },
  { slug: "datasheets", step: "Your data answers questions", desc: "Batch timings, stock, records — sheets your AI reads live and workflows write to." },
  { slug: "analytics", step: "The loop closes with numbers", desc: "Leads, bookings, response times, sentiment — what your AI did today, in plain words." },
];

export default function ProductPage() {
  return (
    <>
      <PageHero
        eyebrow="The OS tour"
        title={
          <>
            One message in. <span className="text-gradient">A whole business runs.</span>
          </>
        }
        sub="This is the loop MyBizAI runs thousands of times a month for a business like yours — from first 'hi' to closed sale to assigned work to morning report."
        media={<PhoneChatSim script={heroScript} />}
      >
        <div className="flex flex-wrap gap-4">
          <a href={site.signupUrl} className="btn btn-primary" data-event="cta_start_free">{site.ctaPrimary}</a>
          <Link href="/demo" className="btn btn-ghost">Book a demo</Link>
        </div>
      </PageHero>

      <section className="section bg-bg-subtle" aria-label="The full loop">
        <div className="container-site">
          <div className="grid gap-6 lg:grid-cols-2">
            {loop.map((item, i) => {
              const f = features.find((x) => x.slug === item.slug)!;
              return (
                <Reveal key={item.slug} delay={(i % 2) * 60}>
                  <div className="bento-tile h-full">
                    <div className="flex items-center gap-4">
                      <span className="mono-stat text-[13px] font-semibold text-ink-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="icon-chip"><Icon name={f.icon} /></span>
                    </div>
                    <h2 className="text-xl font-bold">{item.step}</h2>
                    <p className="text-[15px] text-ink-muted">{item.desc}</p>
                    <Link
                      href={`/features/${f.slug}`}
                      className="mt-auto inline-flex items-center gap-1 text-[14.5px] font-semibold text-brand"
                    >
                      Explore {f.name} <ArrowRight size={15} aria-hidden />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection title="See the whole loop run on your own number." />
    </>
  );
}
