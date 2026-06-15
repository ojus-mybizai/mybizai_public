"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

interface OfferState {
  open: boolean;
  remaining: number | null;
}

const CACHE_KEY = "mybizai_founders_offer";
const CACHE_MS = 60_000; // 60s cache per PRD A1.2

/**
 * Founders Offer announcement bar — shows live remaining slots from the
 * public API, degrades to generic copy if unreachable, hides when closed.
 */
export default function AnnouncementBar() {
  const [offer, setOffer] = useState<OfferState | null>(null);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    setDismissed(sessionStorage.getItem("mybizai_announce_dismissed") === "1");

    const cached = sessionStorage.getItem(CACHE_KEY);
    if (cached) {
      try {
        const { at, data } = JSON.parse(cached);
        if (Date.now() - at < CACHE_MS) {
          setOffer(data);
          return;
        }
      } catch {
        /* refetch */
      }
    }

    fetch(site.foundersOfferApi)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => {
        const data: OfferState = {
          open: d.open !== false,
          remaining:
            typeof d.remaining === "number"
              ? d.remaining
              : typeof d.total === "number" && typeof d.claimed === "number"
                ? d.total - d.claimed
                : null,
        };
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data }));
        setOffer(data);
      })
      .catch(() => {
        // API unreachable → honest generic copy, no fake numbers
        setOffer({ open: true, remaining: null });
      });
  }, []);

  if (dismissed || !offer || !offer.open) return null;

  return (
    <div
      className="relative z-50 px-4 py-2 text-center text-[13px] font-medium text-white"
      style={{ background: "var(--gradient-brand)" }}
    >
      <Link href="/pricing" className="hover:underline underline-offset-2">
        🚀 Founders Offer — 200% bonus credits on annual plans
        {offer.remaining !== null && (
          <strong className="mono-stat"> · {offer.remaining} of 100 slots left</strong>
        )}
      </Link>
      <button
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 px-2 text-white/80 hover:text-white"
        onClick={() => {
          sessionStorage.setItem("mybizai_announce_dismissed", "1");
          setDismissed(true);
        }}
      >
        ✕
      </button>
    </div>
  );
}
