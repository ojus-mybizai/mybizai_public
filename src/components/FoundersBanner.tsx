"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { foundersOffer } from "@/lib/content/pricing";

/**
 * Pricing-page Founders Offer banner — live remaining slots from the public
 * API (60s cache), hides when the offer is closed (PRD A1.2).
 */
export default function FoundersBanner() {
  const [remaining, setRemaining] = useState<number | null>(null);
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const cached = sessionStorage.getItem("mybizai_founders_offer");
    if (cached) {
      try {
        const { at, data } = JSON.parse(cached);
        if (Date.now() - at < 60_000) {
          setOpen(data.open);
          setRemaining(data.remaining);
          return;
        }
      } catch {
        /* refetch */
      }
    }
    fetch(site.foundersOfferApi)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => {
        const data = {
          open: d.open !== false,
          remaining:
            typeof d.remaining === "number"
              ? d.remaining
              : typeof d.total === "number" && typeof d.claimed === "number"
                ? d.total - d.claimed
                : null,
        };
        sessionStorage.setItem("mybizai_founders_offer", JSON.stringify({ at: Date.now(), data }));
        setOpen(data.open);
        setRemaining(data.remaining);
      })
      .catch(() => setRemaining(null));
  }, []);

  if (!open) return null;

  return (
    <div
      className="rounded-[20px] p-7 text-white sm:p-8"
      style={{ background: "var(--gradient-brand)" }}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[13px] font-bold uppercase tracking-wider opacity-90">
            🚀 Founders Offer · annual Growth, Pro &amp; Enterprise
          </p>
          <h2 className="mt-1.5 text-2xl font-bold" style={{ fontFamily: "var(--font-bricolage)" }}>
            {foundersOffer.bonus} — join the first 100
          </h2>
          <p className="mt-1.5 max-w-xl text-[14.5px] opacity-90">{foundersOffer.detail}</p>
        </div>
        <div className="shrink-0 text-center">
          {remaining !== null && (
            <p className="mono-stat text-4xl font-semibold">
              {remaining}
              <span className="text-base opacity-80"> / 100</span>
            </p>
          )}
          <p className="text-[13px] opacity-90">{remaining !== null ? "slots left" : "Limited to 100 customers"}</p>
        </div>
      </div>
      <p className="mt-4 text-[12px] opacity-75">
        Reserved slots expire after 30 minutes at checkout — counts shown live.
      </p>
    </div>
  );
}
