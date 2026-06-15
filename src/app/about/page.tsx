import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About — why we're building the SMB operating system",
  description:
    "MyBizAI's mission: give every small business the operating power of a big one. The why-India-why-WhatsApp story, from MyBizAI Solutions LLP.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About MyBizAI"
        title={
          <>
            Give every small business the <span className="text-gradient">operating power of a big one</span>
          </>
        }
        sub="Big companies have CRMs, support teams, schedulers, ops dashboards and someone whose whole job is following up. Small businesses have one exhausted owner and a phone full of unread chats. We're closing that gap."
      />

      <section className="section-tight">
        <div className="container-site">
          <div className="prose-legal mx-auto" style={{ maxWidth: "68ch" }}>
            <Reveal>
              <h2>Why India, why WhatsApp</h2>
              <p>
                India&apos;s small businesses don&apos;t live on email, web forms or enterprise software. They
                live on WhatsApp — it&apos;s where customers ask prices at 11 PM, where staff get their morning
                instructions, where the day&apos;s money is made and lost. Any &ldquo;business software&rdquo; that
                asks an SMB owner to live somewhere else has already failed.
              </p>
              <p>
                So we built the operating system <em>inside</em> the place the business already runs. The AI
                answers where customers already are. Staff get work on the app they already have. The owner
                gets one calm system instead of six chaotic apps.
              </p>
            </Reveal>
            <Reveal>
              <h2>What we believe</h2>
              <ul>
                <li>
                  <strong>The reply is not the product. The outcome is.</strong> An answered message that
                  doesn&apos;t become a lead, a booking or a task is just noise with good manners.
                </li>
                <li>
                  <strong>Software should learn the business, not the other way around.</strong> Your staff
                  shouldn&apos;t need training days. Your agent should know your price list, not the internet&apos;s.
                </li>
                <li>
                  <strong>Honesty compounds.</strong> Real pricing on the website, dated comparisons, no fake
                  testimonials, no invented numbers. Trust is the only moat a young company has.
                </li>
                <li>
                  <strong>Calm is the feature.</strong> The owner&apos;s world is chaos. Everything we make should
                  feel like relief.
                </li>
              </ul>
            </Reveal>
            <Reveal>
              <h2>The company</h2>
              <p>
                MyBizAI is built by <strong>MyBizAI Solutions LLP</strong>, founded by Ojus Soni and built from
                India for India&apos;s 60-million-plus small businesses — clinics, salons, stores, service teams
                and coaching centres. We&apos;re young, we&apos;re bootstrapped, and we dogfood everything: the
                agent that answers our own WhatsApp is the same product we sell.
              </p>
              <p>
                Want to talk? <Link href="/contact">Contact us</Link> — a MyBizAI agent will reply first, which
                is exactly the point.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection title="Be one of the first 100." sub="Founders Offer — 200% bonus credits on annual plans" />
    </>
  );
}
