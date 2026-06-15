"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { plans, trial } from "@/lib/content/pricing";

/** Plan cards with monthly/annual toggle (annual = 25% off + 40% bonus credits). */
export default function PricingSection() {
  const [annual, setAnnual] = useState(true);

  return (
    <div>
      {/* Toggle */}
      <div className="mb-10 flex items-center justify-center gap-4" data-event="pricing_toggle">
        <span className={`text-[15px] font-medium ${!annual ? "text-ink" : "text-ink-muted"}`}>Monthly</span>
        <button
          role="switch"
          aria-checked={annual}
          aria-label="Toggle annual billing"
          onClick={() => setAnnual(!annual)}
          className="relative h-8 w-14 rounded-full transition-colors"
          style={{ background: annual ? "var(--brand)" : "var(--line)" }}
        >
          <span
            className="absolute top-1 h-6 w-6 rounded-full bg-white shadow transition-all"
            style={{ left: annual ? 28 : 4 }}
          />
        </button>
        <span className={`text-[15px] font-medium ${annual ? "text-ink" : "text-ink-muted"}`}>
          Annual <span className="badge-soft ml-1">Save 25% + 40% bonus credits</span>
        </span>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => {
          const isContact = plan.monthly === null;
          const price = annual ? plan.annualPerMo : plan.monthly;
          return (
            <div
              key={plan.id}
              className="relative flex flex-col rounded-[20px] border bg-white p-7"
              style={{
                borderColor: plan.highlight ? "var(--brand)" : "var(--line)",
                boxShadow: plan.highlight ? "0 12px 48px rgb(79 70 229 / 0.16)" : undefined,
              }}
            >
              {plan.highlight && (
                <span
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[12px] font-bold text-white"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  MOST POPULAR
                </span>
              )}
              <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-bricolage)" }}>
                {plan.name}
              </h3>
              <p className="mt-1 text-[14px] text-ink-muted">{plan.blurb}</p>

              <div className="mt-5 min-h-[72px]">
                {isContact ? (
                  <p className="text-3xl font-bold" style={{ fontFamily: "var(--font-bricolage)" }}>
                    Contact us
                  </p>
                ) : (
                  <>
                    <p className="flex items-baseline gap-1">
                      <span className="mono-stat text-3xl font-semibold">₹{price!.toLocaleString("en-IN")}</span>
                      <span className="text-[14px] text-ink-muted">/month</span>
                    </p>
                    <p className="mt-1 text-[13px] text-ink-muted">
                      {annual
                        ? `billed ₹${plan.annualTotal!.toLocaleString("en-IN")}/year`
                        : "billed monthly"}{" "}
                      · + GST
                    </p>
                  </>
                )}
              </div>

              <p className="badge-soft mb-5 self-start">{plan.credits}{annual && !isContact ? " +40% bonus" : ""}</p>

              {isContact ? (
                <Link href={plan.cta.href} className="btn btn-ghost w-full">
                  {plan.cta.label}
                </Link>
              ) : (
                <a
                  href={plan.cta.href}
                  className={`btn w-full ${plan.highlight ? "btn-primary" : "btn-ghost"}`}
                  data-event="cta_start_free"
                >
                  {plan.cta.label}
                </a>
              )}

              <ul className="mt-6 space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px]">
                    <Check size={16} className="mt-0.5 shrink-0 text-success" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-center text-[14px] text-ink-muted">{trial.blurb}</p>
    </div>
  );
}
