import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import { WaGlyph } from "@/components/WhatsAppButton";
import { Zap, CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Demo — talk to a live MyBizAI agent right now",
  description:
    "The product demos itself: message our WhatsApp number and a MyBizAI-powered agent answers you, books you, follows up with you. Or schedule a guided demo.",
  alternates: { canonical: "/demo" },
};

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Demo"
        title={
          <>
            Don&apos;t watch a demo. <span className="text-gradient">Talk to one.</span>
          </>
        }
        sub="The agent that answers our WhatsApp is a real MyBizAI agent — the same product you'd deploy. Ask it prices, try to confuse it, book a callback. That's the demo."
      />

      <section className="pb-[clamp(64px,9vw,120px)]">
        <div className="container-site grid gap-8 lg:grid-cols-2">
          {/* Path 1 — instant, featured first (PRD §5.7) */}
          <Reveal>
            <div className="section-dark flex h-full flex-col rounded-[28px] p-8 sm:p-10" style={{ borderRadius: 28 }}>
              <span className="icon-chip mb-5" style={{ background: "rgb(37 211 102 / 0.15)", color: "var(--wa)" }}>
                <Zap size={22} strokeWidth={1.5} aria-hidden />
              </span>
              <h2 className="text-2xl font-bold">Instant: chat with a live agent now</h2>
              <p className="mt-3 text-[15.5px] text-hero-muted">
                Message our number and a MyBizAI agent replies in seconds — answering from a real catalog,
                capturing you as a lead (we&apos;ll show you), and offering to book a call. Experience exactly
                what your customers would.
              </p>
              <div className="mt-8">
                <a
                  href={site.waDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wa"
                  data-event="cta_whatsapp_demo"
                >
                  <WaGlyph /> {site.ctaSecondary}
                </a>
                <p className="mt-4 text-[13px] text-hero-muted">{site.phone} · replies 24×7, obviously</p>
              </div>
            </div>
          </Reveal>

          {/* Path 2 — scheduled */}
          <Reveal delay={80}>
            <div className="card h-full p-8 sm:p-10">
              <span className="icon-chip mb-5">
                <CalendarDays size={22} strokeWidth={1.5} aria-hidden />
              </span>
              <h2 className="text-2xl font-bold">Scheduled: a guided walkthrough</h2>
              <p className="mt-3 text-[15.5px] text-ink-muted">
                Prefer a human tour for your specific business? Tell us what you run and we&apos;ll demo MyBizAI
                set up for a business like yours — on a call, at your time.
              </p>
              <div className="mt-7">
                <ContactForm intent="demo" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
