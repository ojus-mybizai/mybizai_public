"use client";

import { site } from "@/lib/site";

/** Custom 500-style error boundary — on-brand, lightweight (PRD §5.8). */
export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="pt-[140px] pb-[120px] text-center">
      <div className="container-site">
        <p className="mono-stat text-[15px] font-semibold text-brand">500</p>
        <h1 className="h-display mt-4" style={{ fontSize: "clamp(34px, 6vw, 64px)" }}>
          Something broke on our side.
        </h1>
        <p className="lead mx-auto mt-6">
          Sorry — that&apos;s on us. Try again, or tell us at {site.email} and we&apos;ll jump on it.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <button onClick={reset} className="btn btn-primary">Try again</button>
          <a href={`mailto:${site.email}`} className="btn btn-ghost">Email us</a>
        </div>
      </div>
    </section>
  );
}
