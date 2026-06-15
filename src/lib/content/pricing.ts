/**
 * Pricing data — CFO-approved rev 2026-05 (PRD Addendum A1.2).
 * Backend plan_config.py is the source of truth; mirror changes there first.
 */
export interface Plan {
  id: string;
  name: string;
  blurb: string;
  monthly: number | null; // null = contact us
  annualTotal: number | null;
  annualPerMo: number | null;
  credits: string;
  agent: "Lite" | "Full";
  highlight?: boolean;
  cta: { label: string; href: string };
  features: string[];
}

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    blurb: "AI replies on WhatsApp",
    monthly: 1999,
    annualTotal: 17991,
    annualPerMo: 1499,
    credits: "1,000 credits/mo",
    agent: "Lite",
    cta: { label: "Start free", href: "https://app.mybizai.in/signup" },
    features: [
      "1 AI agent (Lite)",
      "1 channel (WhatsApp)",
      "Unified inbox",
      "CRM with auto lead capture",
      "500 contacts",
      "2 data sheets",
      "Appointments & catalog",
      "Email support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    blurb: "AI sells on WhatsApp + Instagram",
    monthly: 3999,
    annualTotal: 35991,
    annualPerMo: 2999,
    credits: "5,000 credits/mo",
    agent: "Full",
    highlight: true,
    cta: { label: "Start free", href: "https://app.mybizai.in/signup" },
    features: [
      "3 AI agents (Full)",
      "3 channels (WA, IG & more)",
      "Everything in Starter",
      "Follow-up automation",
      "Nurture sequences",
      "Free public storefront",
      "Payment links & order status",
      "5,000 contacts",
      "Priority support",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    blurb: "Your whole business on WhatsApp",
    monthly: 7999,
    annualTotal: 71991,
    annualPerMo: 5999,
    credits: "15,000 credits/mo",
    agent: "Full",
    cta: { label: "Start free", href: "https://app.mybizai.in/signup" },
    features: [
      "Unlimited agents & channels",
      "Everything in Growth",
      "Broadcast campaigns",
      "WhatsApp employees (Work & Tasks)",
      "Agent Builder & custom tools",
      "MCP integrations",
      "Unlimited contacts",
      "Priority support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    blurb: "For multi-branch & high volume",
    monthly: null,
    annualTotal: null,
    annualPerMo: null,
    credits: "Custom credits",
    agent: "Full",
    cta: { label: "Contact us", href: "/contact" },
    features: [
      "Everything in Pro, unlimited",
      "SLA & dedicated support",
      "SSO",
      "Custom onboarding",
      "Multi-branch rollout",
      "Custom integrations",
    ],
  },
];

export const topUps = [
  { price: 299, credits: "1,000" },
  { price: 999, credits: "5,500" },
  { price: 2499, credits: "17,000" },
  { price: 6999, credits: "60,000" },
];

export const trial = {
  days: 15,
  blurb:
    "15-day full-access free trial · Pro-tier limits · 5,000 credits · no card required",
};

export const foundersOffer = {
  slots: 100,
  bonus: "200% bonus credits",
  detail:
    "First 100 customers on annual Growth, Pro or Enterprise get 3× the annual credit base — effectively the full plan value back as credits.",
};

export const pricingFaq = [
  {
    q: "How does the free trial work?",
    a: "Sign up and you get 15 days of full access at Pro-tier limits with 5,000 credits — no card required. At the end you pick a plan (or walk away; we'll keep your data briefly in case you return).",
  },
  {
    q: "What are credits and what consumes them?",
    a: "Credits are how AI usage is metered — each AI-generated reply, summary or query consumes a small number of credits depending on length and complexity. Plans include a monthly allowance; annual plans add a 40% bonus, and you can top up anytime (₹299 for 1,000 up to ₹6,999 for 60,000).",
  },
  {
    q: "Are WhatsApp's own charges included?",
    a: "No — Meta bills WhatsApp conversation fees separately, and they apply to any tool built on the WhatsApp Business Platform. MyBizAI tracks this spend inside the app so you always see exactly what you're paying Meta.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel from the app anytime — your access runs to the end of the paid period and you won't be charged again. Full terms are in our refund policy.",
  },
  {
    q: "What's your refund policy?",
    a: "If you subscribed after the free trial, the trial was your evaluation window, so converted subscriptions aren't refunded. If you purchased directly without a trial, you can get a full refund within 15 days of payment. Details on the refund policy page.",
  },
  {
    q: "Is GST included in the prices?",
    a: "Prices shown are exclusive of GST; GST is added at checkout as per Indian tax law, with a proper tax invoice for your business.",
  },
  {
    q: "What is the Founders Offer?",
    a: "The first 100 customers who choose annual billing on Growth, Pro or Enterprise get 200% bonus credits — three times the annual credit base. Slots are limited and shown live on this page; reserved slots expire after 30 minutes at checkout.",
  },
];
