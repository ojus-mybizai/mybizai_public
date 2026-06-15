import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description: "MyBizAI's refund and cancellation terms — 15-day trial-first model, refund windows, cancellation and how to request.",
  alternates: { canonical: "/legal/refund-policy" },
};

export default function RefundPolicy() {
  return (
    <article>
      <p className="badge-soft">Legal</p>
      <h1 className="h-section mt-4">Refund &amp; Cancellation Policy</h1>
      <p className="mt-2 text-[14px] text-ink-muted">Last updated: {site.lastReviewed}</p>

      <p className="mt-8">
        We keep this simple and honest. MyBizAI is sold trial-first: you can evaluate the entire product free
        for 15 days before paying anything.
      </p>

      <h2>1. Free trial</h2>
      <p>
        Every new account gets a <strong>15-day full-access free trial</strong> (Pro-tier limits, 5,000
        credits) with <strong>no card required</strong>. Nothing is charged unless you actively choose a paid
        plan.
      </p>

      <h2>2. Refunds</h2>
      <ul>
        <li>
          <strong>Subscriptions purchased after a free trial:</strong> the trial is the evaluation period, so
          payments made when converting from a trial are <strong>not refundable</strong>.
        </li>
        <li>
          <strong>Direct purchases without a trial:</strong> if you subscribed without using a free trial, you
          may request a <strong>full refund within 15 days of payment</strong>, no questions asked.
        </li>
        <li>
          <strong>Credit top-ups:</strong> unused top-up packs are refundable within 15 days of purchase if no
          credits from the pack have been consumed.
        </li>
        <li>
          Approved refunds are processed to the original payment method via Razorpay within 7–10 business days.
        </li>
      </ul>

      <h2>3. Cancellation</h2>
      <ul>
        <li>You can cancel anytime from the app (Billing → Cancel) — no calls, no retention maze.</li>
        <li>After cancellation, your plan stays active until the end of the paid period (month or year). You will not be charged again.</li>
        <li>We do not pro-rate partially used periods, since access continues to period end.</li>
      </ul>

      <h2>4. How to request a refund</h2>
      <p>
        Email <a href={`mailto:${site.email}`}>{site.email}</a> from your account email with the subject
        &ldquo;Refund request&rdquo;, or message us on WhatsApp at {site.phone}. Include your registered
        business name. We confirm within 2 business days.
      </p>

      <h2>5. Exceptions</h2>
      <p>
        Meta&apos;s WhatsApp conversation charges are billed by Meta and are outside this policy. Amounts
        already invoiced for GST follow applicable tax rules. Nothing in this policy limits your statutory
        rights under Indian consumer law.
      </p>

      <p>
        Related: <Link href="/legal/terms">Terms &amp; Conditions</Link> ·{" "}
        <Link href="/pricing">Pricing</Link>
      </p>
    </article>
  );
}
