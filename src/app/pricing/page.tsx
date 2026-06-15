import type { Metadata } from "next";
import Link from "next/link";
import { topUps, plans } from "@/lib/content/pricing";
import { pricingFaq } from "@/lib/content/pricing";
import PageHero from "@/components/PageHero";
import PricingSection from "@/components/PricingSection";
import FoundersBanner from "@/components/FoundersBanner";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing — transparent ₹ plans, 15-day free trial",
  description:
    "MyBizAI plans from ₹1,999/month. 15-day full-access free trial, no card required. Transparent Indian pricing — Starter, Growth, Pro and Enterprise.",
  alternates: { canonical: "/pricing" },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MyBizAI",
  description: site.description,
  brand: { "@type": "Brand", name: "MyBizAI" },
  offers: plans
    .filter((p) => p.monthly !== null)
    .map((p) => ({
      "@type": "Offer",
      name: `${p.name} (monthly)`,
      price: String(p.monthly),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `${site.domain}/pricing`,
    })),
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Honest pricing. <span className="text-gradient">No 'Contact sales' wall.</span>
          </>
        }
        sub="Every plan starts with a 15-day full-access free trial at Pro-tier limits — no card required. Prices in ₹, GST extra, cancel anytime."
      />

      <section className="pb-[clamp(48px,7vw,88px)]">
        <div className="container-site">
          <Reveal>
            <FoundersBanner />
          </Reveal>
          <div className="mt-12">
            <PricingSection />
          </div>
        </div>
      </section>

      {/* Credits explained plainly (PRD A1.2) */}
      <section className="section-tight bg-bg-subtle">
        <div className="container-site">
          <Reveal>
            <h2 className="h-sub font-bold">Credits, explained like a human</h2>
          </Reveal>
          <Reveal delay={60}>
            <p className="lead mt-3">
              Credits meter your AI usage — each AI reply, summary or data-sheet query uses a few.
              Plans include a monthly allowance (annual plans get +40% bonus). Run out mid-festival-rush?
              Top up anytime:
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topUps.map((t, i) => (
              <Reveal key={t.price} delay={i * 50}>
                <div className="card p-6 text-center">
                  <p className="mono-stat text-2xl font-semibold">₹{t.price.toLocaleString("en-IN")}</p>
                  <p className="mt-1 text-[14px] text-ink-muted">{t.credits} credits</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <div className="card mt-8 p-6">
              <h3 className="font-bold">About Meta&apos;s WhatsApp fees</h3>
              <p className="mt-2 max-w-3xl text-[14.5px] text-ink-muted">
                Meta bills WhatsApp conversation charges separately — that&apos;s true for every tool built on
                the WhatsApp Business Platform, including MyBizAI and Meta&apos;s own offerings. MyBizAI shows
                you exactly what you&apos;re spending with Meta, inside the app, so there are never surprise bills.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQ items={pricingFaq} title="Pricing questions, answered straight" />

      <section className="section-tight">
        <div className="container-site">
          <p className="text-[14px] text-ink-muted">
            Cancellation and refund terms in plain language:{" "}
            <Link href="/legal/refund-policy" className="font-semibold text-brand hover:underline">
              Refund &amp; Cancellation Policy
            </Link>
            . Prices exclusive of GST. Billing is processed securely via Razorpay.
          </p>
        </div>
      </section>

      <CTASection title="Try everything free for 15 days." sub="Pro-tier limits · 5,000 credits · no card required" />
    </>
  );
}
