import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How MyBizAI Solutions LLP collects, uses, stores and protects data — including WhatsApp/Meta platform data — under India's DPDP Act 2023.",
  alternates: { canonical: "/legal/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <article>
      <p className="badge-soft">Legal</p>
      <h1 className="h-section mt-4">Privacy Policy</h1>
      <p className="mt-2 text-[14px] text-ink-muted">Last updated: {site.lastReviewed}</p>

      <p className="mt-8">
        This Privacy Policy explains how <strong>{site.legalEntity}</strong> (&ldquo;MyBizAI&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses, stores and protects information when you use the
        MyBizAI platform (app.mybizai.in), this website (mybizai.in), and related services. It is written to
        comply with the <strong>Digital Personal Data Protection Act, 2023 (India)</strong> and to honour the
        data-handling commitments we make as a technology provider on Meta&apos;s WhatsApp Business Platform.
      </p>

      <h2>1. What we collect</h2>
      <ul>
        <li><strong>Account data</strong> — your name, business name, email, phone/WhatsApp number and login credentials when you create a MyBizAI account.</li>
        <li><strong>Business data</strong> — catalogs, price lists, documents, data sheets, staff contact details and configuration you add to run your workspace.</li>
        <li><strong>End-customer message content</strong> — messages exchanged between your business and its customers across connected channels (WhatsApp, Instagram, Telegram, SMS, web chat). We process this content <em>on behalf of your business</em> to deliver the service (replies, lead capture, bookings, follow-ups, analytics).</li>
        <li><strong>Payment data</strong> — subscription billing is processed by Razorpay. We receive transaction status and invoicing details; we never store your full card or banking credentials.</li>
        <li><strong>Website & analytics data</strong> — this website currently runs without tracking cookies or third-party analytics pixels. If you submit our contact/demo form, we store what you submit (name, business, WhatsApp number, message) plus any campaign parameters (UTMs) from the link you arrived on.</li>
      </ul>

      <h2>2. WhatsApp / Meta platform data</h2>
      <p>
        When your business connects WhatsApp via the WhatsApp Business Platform (Cloud API), message data is
        exchanged with Meta to deliver and receive messages. We process this data strictly to provide the
        service to your business, in accordance with Meta&apos;s Business Terms and technology-provider
        requirements. We do not use WhatsApp message content for advertising, do not sell it, and do not use it
        to train general-purpose AI models. MyBizAI agents are <strong>task-scoped</strong> (sales, support,
        bookings and similar defined business jobs) in line with Meta&apos;s business-agent policy.
      </p>

      <h2>3. Why we process data (purposes & lawful basis)</h2>
      <ul>
        <li>To provide the service you signed up for (contract): AI replies, CRM, appointments, follow-ups, tasks, analytics.</li>
        <li>To bill you and prevent fraud (contract / legal obligation).</li>
        <li>To support you and improve reliability (legitimate use, with minimal data).</li>
        <li>To respond when you contact us (consent / legitimate use).</li>
      </ul>

      <h2>4. Sub-processors</h2>
      <p>We use a small set of vetted infrastructure providers to deliver the service:</p>
      <table>
        <thead>
          <tr><th>Provider</th><th>Purpose</th></tr>
        </thead>
        <tbody>
          <tr><td>Azure OpenAI</td><td>AI language processing (agent replies, summaries)</td></tr>
          <tr><td>AWS S3</td><td>Encrypted file & media storage</td></tr>
          <tr><td>Meta / WhatsApp Cloud API</td><td>WhatsApp message delivery</td></tr>
          <tr><td>Razorpay</td><td>Payment processing & subscription billing</td></tr>
          <tr><td>Managed Redis hosting</td><td>Caching & queueing</td></tr>
        </tbody>
      </table>

      <h2>5. Retention</h2>
      <p>
        Account and business data is retained while your account is active. Conversation data is retained per
        your plan&apos;s limits and your workspace settings. After account closure, we delete or anonymise
        personal data within 90 days, except where law requires longer retention (e.g., tax and invoicing
        records).
      </p>

      <h2>6. Your rights</h2>
      <p>
        Under the DPDP Act 2023 (and in the spirit of GDPR-style protections), you may request: access to your
        personal data, correction, deletion, and a grievance review. Business owners can also request deletion
        of end-customer data they control. To exercise any right, email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> with the subject &ldquo;Data request&rdquo;, or use
        the in-app data request option. We respond within 30 days.
      </p>

      <h2>7. Grievance officer (DPDP Act 2023)</h2>
      <p>
        Grievance Officer: <strong>{site.grievanceOfficer}</strong>, Designated Partner, {site.legalEntity}
        <br />
        Email: <a href={`mailto:${site.email}`}>{site.email}</a> · Phone: {site.phone}
        <br />
        Address: {site.address}
      </p>

      <h2>8. Security</h2>
      <p>
        Data is encrypted in transit (TLS 1.2+) and at rest. Access is role-restricted and logged. See our{" "}
        <Link href="/security">Security overview</Link> for a plain-language summary, including our responsible
        disclosure process.
      </p>

      <h2>9. Cookies</h2>
      <p>
        This website does not currently set tracking cookies and runs no third-party analytics or advertising
        pixels. Strictly-necessary storage (e.g., remembering a dismissed banner) may be used. See the{" "}
        <Link href="/legal/cookie-policy">Cookie Policy</Link>.
      </p>

      <h2>10. Children</h2>
      <p>MyBizAI is a business tool and is not directed at children under 18.</p>

      <h2>11. Changes</h2>
      <p>
        We will post any changes here and update the date above. Material changes affecting your rights will be
        notified by email or in-app.
      </p>

      <h2>12. Contact</h2>
      <p>
        {site.legalEntity}, {site.address}.<br />
        Email: <a href={`mailto:${site.email}`}>{site.email}</a> · Phone/WhatsApp: {site.phone}
      </p>
    </article>
  );
}
