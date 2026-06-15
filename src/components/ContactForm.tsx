"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "ok" | "error";

/**
 * Contact/demo lead form — posts to the FastAPI public endpoint
 * (PRD §7.1; honeypot included; Turnstile slot reserved).
 */
export default function ContactForm({ intent = "contact" }: { intent?: "contact" | "demo" }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot — bots fill it, humans never see it
    if (data.website) return;

    setStatus("sending");
    setError("");
    try {
      const utm = JSON.parse(localStorage.getItem("mybizai_utm") || "{}");
      const res = await fetch(site.websiteLeadsApi, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, intent, utm, page: window.location.pathname }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
      setError(
        "Couldn't send right now — please message us on WhatsApp or email " + site.email
      );
    }
  }

  if (status === "ok") {
    return (
      <div className="card p-8 text-center" role="status">
        <p className="text-2xl">🎉</p>
        <h3 className="mt-2 text-xl font-bold">Got it — talk soon!</h3>
        <p className="mt-2 text-ink-muted">
          Our own MyBizAI agent will reply on your WhatsApp shortly. (Yes, we use the product we sell.)
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" data-event="form_submit" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">Your name</label>
          <input id="name" name="name" required autoComplete="name" className="field-input" placeholder="Priya Sharma" />
        </div>
        <div>
          <label htmlFor="business" className="field-label">Business name</label>
          <input id="business" name="business" required autoComplete="organization" className="field-input" placeholder="Glow Salon, Pune" />
        </div>
      </div>
      <div>
        <label htmlFor="whatsapp" className="field-label">WhatsApp number</label>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          pattern="[0-9+\s-]{10,15}"
          className="field-input"
          placeholder="+91 98765 43210"
        />
        <p className="mt-1.5 text-[13px] text-ink-muted">We reply on WhatsApp — it's kind of our thing.</p>
      </div>
      <div>
        <label htmlFor="message" className="field-label">
          {intent === "demo" ? "What does your business do?" : "Message"}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="field-input resize-y"
          placeholder={intent === "demo" ? "e.g., Dental clinic in Raipur, 2 doctors. Want AI to handle appointment requests." : "How can we help?"}
        />
      </div>

      {/* Honeypot */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p className="rounded-lg border border-error/30 bg-red-50 px-4 py-3 text-[14px] text-error" role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="btn btn-primary justify-self-start" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : intent === "demo" ? "Request my demo" : "Send message"}
      </button>
    </form>
  );
}
