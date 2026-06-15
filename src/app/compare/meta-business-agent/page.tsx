import type { Metadata } from "next";
import Link from "next/link";
import { Check, Minus, X as XIcon } from "lucide-react";
import { compareRows, compareFaq, comparisonAsOf, type CompareCell } from "@/lib/content/compare";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "MyBizAI vs Meta Business Agent — the honest comparison",
  description:
    "Meta's free AI agent replies to customers. MyBizAI runs your business — CRM, follow-ups, campaigns, appointments, staff tasks. An honest, dated comparison for Indian SMBs.",
  alternates: { canonical: "/compare/meta-business-agent" },
};

function Cell({ cell }: { cell: CompareCell }) {
  return (
    <div className="flex items-start gap-2.5">
      {cell.state === "yes" && <Check size={18} className="tick-yes mt-0.5 shrink-0" aria-label="Yes" />}
      {cell.state === "no" && <XIcon size={18} className="tick-no mt-0.5 shrink-0" aria-label="No" />}
      {cell.state === "partial" && <Minus size={18} className="mt-0.5 shrink-0 text-warn" aria-label="Partial" />}
      <span className="text-[13.5px] text-ink-muted">{cell.note}</span>
    </div>
  );
}

export default function ComparePage() {
  return (
    <>
      <PageHero
        eyebrow={`Battlecard · comparison as of ${comparisonAsOf}`}
        title={
          <>
            Meta replies to customers. <span className="text-gradient">MyBizAI runs your business.</span>
          </>
        }
        sub="Let's be fair: Meta's free business agent is genuinely useful, and it normalised AI agents on WhatsApp for everyone. It's also just a chatbot. Here's exactly where the line is — verified quarterly, dated honestly."
      >
        <div className="flex flex-wrap gap-4 no-print">
          <a href={site.signupUrl} className="btn btn-primary" data-event="cta_start_free">{site.ctaPrimary}</a>
          <Link href="/demo" className="btn btn-ghost">Book a demo</Link>
        </div>
      </PageHero>

      {/* The table */}
      <section className="section-tight" data-event="compare_view">
        <div className="container-site">
          <Reveal>
            <div className="card overflow-x-auto">
              <table className="compare-table compare-sticky-col" style={{ minWidth: 720 }}>
                <caption className="sr-only">
                  Feature comparison between MyBizAI and Meta Business Agent as of {comparisonAsOf}
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Capability</th>
                    <th scope="col" style={{ color: "var(--brand)" }}>MyBizAI</th>
                    <th scope="col">Meta Business Agent</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((row) => (
                    <tr key={row.capability}>
                      <th scope="row" className="font-semibold" style={{ fontFamily: "var(--font-inter)" }}>
                        {row.capability}
                      </th>
                      <td><Cell cell={row.mybizai} /></td>
                      <td><Cell cell={row.meta} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <p className="mt-4 text-[12.5px] text-ink-muted">
            Comparison as of {comparisonAsOf}. Meta&apos;s feature set evolves — we re-verify this page every
            quarter and date it, because an outdated comparison is worse than none.
          </p>
        </div>
      </section>

      {/* The "use both" reframe */}
      <section className="section bg-bg-subtle">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div>
                <h2 className="h-sub font-bold">Credit where due</h2>
                <p className="mt-4 text-[16px] leading-relaxed text-slate-700">
                  Meta put an AI agent inside WhatsApp for free, and millions of businesses now expect AI to
                  answer their customers. That&apos;s a gift to everyone building in this space — including us.
                  If all you need is answers to common questions, Meta&apos;s agent is a fine place to start.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div>
                <h2 className="h-sub font-bold">The upgrade moment</h2>
                <p className="mt-4 text-[16px] leading-relaxed text-slate-700">
                  The moment you ask <em>&ldquo;but where did that lead go?&rdquo;</em> — who followed up, what got
                  booked, which staff member is on it, what did we earn this week — you&apos;ve outgrown a chatbot.
                  MyBizAI is what the reply becomes: a lead, a booking, a follow-up, an assigned job, a number on
                  your morning report. That&apos;s the operating system, and it&apos;s the part Meta doesn&apos;t do.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FAQ items={compareFaq} title="The questions every prospect asks" />
      <CTASection title="Keep the chatbot. Gain the business." sub="15-day free trial · See the difference on your own number" />
    </>
  );
}
