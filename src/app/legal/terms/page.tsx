import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms of service for the MyBizAI platform by MyBizAI Solutions LLP — service description, acceptable use, messaging compliance, liability and governing law.",
  alternates: { canonical: "/legal/terms" },
};

export default function Terms() {
  return (
    <article>
      <p className="badge-soft">Legal</p>
      <h1 className="h-section mt-4">Terms &amp; Conditions</h1>
      <p className="mt-2 text-[14px] text-ink-muted">Last updated: {site.lastReviewed}</p>

      <p className="mt-8">
        These Terms govern your use of the MyBizAI platform and website, operated by{" "}
        <strong>{site.legalEntity}</strong> (&ldquo;MyBizAI&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By
        creating an account or using the service you agree to these Terms.
      </p>

      <h2>1. The service</h2>
      <p>
        MyBizAI is an AI-powered business operating system for small and medium businesses: AI agents that
        respond to customer messages across connected channels, plus CRM, follow-up automation, campaigns,
        appointments and orders, staff tasks, data sheets and analytics. Features vary by plan as described on
        the <Link href="/pricing">pricing page</Link>.
      </p>

      <h2>2. Accounts</h2>
      <ul>
        <li>You must provide accurate information and keep your credentials secure. You are responsible for activity under your account.</li>
        <li>You must be authorised to act for the business you register and to connect the messaging channels you connect.</li>
        <li>We may suspend accounts that violate these Terms, applicable law or platform policies, with notice where practicable.</li>
      </ul>

      <h2>3. Acceptable use</h2>
      <ul>
        <li>No unlawful, deceptive, harassing or harmful content or activity.</li>
        <li>No spam: outbound messaging must comply with Section 4 below.</li>
        <li>
          <strong>Task-specific agent policy:</strong> in line with Meta&apos;s January 2026 business-agent
          policy, you may not use MyBizAI to build or operate general-purpose chatbots on WhatsApp. Agents must
          be scoped to your business&apos;s defined tasks (e.g., sales, support, bookings, follow-ups). We may
          enforce this scoping technically and contractually.
        </li>
        <li>No reselling or white-labelling without a written agreement.</li>
        <li>No attempts to probe, disrupt or reverse-engineer the service.</li>
      </ul>

      <h2>4. Messaging compliance</h2>
      <p>
        Outbound campaigns, sequences and reminders may only be sent to recipients who have opted in to receive
        them, and must honour opt-outs immediately. You are responsible for the lawfulness of your customer
        communications, including under the WhatsApp Business Messaging Policy, TRAI regulations where
        applicable, and any consent obligations to your customers. Meta&apos;s WhatsApp conversation charges are
        billed by Meta and are your responsibility; MyBizAI displays this spend in the app.
      </p>

      <h2>5. Your content and data</h2>
      <p>
        You retain all rights to your business data and your customers&apos; message content. You grant us the
        limited licence needed to process it to provide the service, as described in the{" "}
        <Link href="/legal/privacy-policy">Privacy Policy</Link>. You are responsible for the accuracy of
        catalog and business information your agent answers from.
      </p>

      <h2>6. AI output</h2>
      <p>
        AI-generated replies are produced from the material and instructions you configure. While we design for
        accuracy (grounding, guardrails, handoff), AI output may occasionally be imperfect. You should review
        agent configuration, monitor conversations, and remain responsible for commitments made to your
        customers in the course of your business.
      </p>

      <h2>7. Fees, billing and trial</h2>
      <ul>
        <li>Plans, prices and included credits are listed on the <Link href="/pricing">pricing page</Link>. Prices exclude GST.</li>
        <li>The free trial provides 15 days of full access with no card required.</li>
        <li>Subscriptions renew automatically until cancelled. Cancellation and refunds are governed by the <Link href="/legal/refund-policy">Refund &amp; Cancellation Policy</Link>.</li>
        <li>Payments are processed by Razorpay.</li>
      </ul>

      <h2>8. Availability</h2>
      <p>
        We aim for high availability but the service is provided &ldquo;as is&rdquo; and depends on third-party
        platforms (including Meta&apos;s APIs) we do not control. Planned maintenance and platform incidents may
        cause interruptions.
      </p>

      <h2>9. Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, our aggregate liability arising out of or relating to the
        service is limited to the fees you paid in the three months preceding the claim. We are not liable for
        indirect, incidental or consequential losses, or for losses caused by third-party platform actions
        (e.g., messaging-channel restrictions resulting from your policy violations).
      </p>

      <h2>10. Termination</h2>
      <p>
        You may stop using the service and cancel at any time. We may terminate for material breach. On
        termination, data export is available for a reasonable period, after which data is deleted per the
        Privacy Policy.
      </p>

      <h2>11. Governing law & disputes</h2>
      <p>
        These Terms are governed by the laws of India. Courts at Dhamtari, Chhattisgarh shall have exclusive
        jurisdiction, and disputes shall first be attempted to be resolved by arbitration seated in Raipur,
        Chhattisgarh under the Arbitration and Conciliation Act, 1996.
      </p>

      <h2>12. Contact</h2>
      <p>
        {site.legalEntity}, {site.address}. Email: <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </article>
  );
}
