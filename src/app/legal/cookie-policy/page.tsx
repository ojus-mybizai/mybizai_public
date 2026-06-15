import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "MyBizAI's cookie policy — this website currently uses no tracking cookies or third-party analytics pixels.",
  alternates: { canonical: "/legal/cookie-policy" },
};

export default function CookiePolicy() {
  return (
    <article>
      <p className="badge-soft">Legal</p>
      <h1 className="h-section mt-4">Cookie Policy</h1>
      <p className="mt-2 text-[14px] text-ink-muted">Last updated: {site.lastReviewed}</p>

      <p className="mt-8">
        Short version: <strong>this website currently sets no tracking cookies</strong> and runs no third-party
        analytics or advertising pixels. That&apos;s also why you don&apos;t see a cookie consent banner.
      </p>

      <h2>1. What we do use</h2>
      <ul>
        <li>
          <strong>Strictly necessary browser storage</strong> — small local/session-storage entries that
          remember things like a dismissed announcement bar or the campaign link (UTM parameters) you arrived
          on so your signup is attributed correctly. These identify a browser preference, not you, and are
          never shared with advertisers.
        </li>
      </ul>

      <h2>2. The app is separate</h2>
      <p>
        The MyBizAI application at app.mybizai.in uses cookies required for login sessions and security. Those
        are covered in the <Link href="/legal/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2>3. If this changes</h2>
      <p>
        If we later add analytics or marketing pixels, we will update this page, add a consent banner where
        required, and only enable optional cookies after you agree.
      </p>

      <h2>4. Contact</h2>
      <p>
        Questions? <a href={`mailto:${site.email}`}>{site.email}</a> · {site.legalEntity}, {site.address}.
      </p>
    </article>
  );
}
