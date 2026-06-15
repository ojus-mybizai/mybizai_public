"use client";

import { useEffect } from "react";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "ref"];
const STORE_KEY = "mybizai_utm";

/**
 * UTM passthrough (PRD §7.4 — "the single most important growth-engineering
 * requirement"). Persists UTMs in first-party storage and forwards them to
 * app.mybizai.in links at click time so attribution survives the domain hop.
 */
export default function UtmTracker() {
  useEffect(() => {
    // 1) Capture UTMs from the landing URL
    try {
      const params = new URLSearchParams(window.location.search);
      const found: Record<string, string> = {};
      for (const k of UTM_KEYS) {
        const v = params.get(k);
        if (v) found[k] = v;
      }
      if (Object.keys(found).length > 0) {
        const existing = JSON.parse(localStorage.getItem(STORE_KEY) || "{}");
        localStorage.setItem(STORE_KEY, JSON.stringify({ ...existing, ...found, _at: Date.now() }));
      }
    } catch {
      /* storage blocked — degrade silently */
    }

    // 2) Decorate app links at click time (covers every CTA, no per-link wiring)
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || !a.href || !a.href.startsWith("https://app.mybizai.in")) return;
      try {
        const stored = JSON.parse(localStorage.getItem(STORE_KEY) || "{}");
        const url = new URL(a.href);
        for (const k of UTM_KEYS) {
          if (stored[k] && !url.searchParams.has(k)) url.searchParams.set(k, stored[k]);
        }
        a.href = url.toString();
      } catch {
        /* ignore */
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
