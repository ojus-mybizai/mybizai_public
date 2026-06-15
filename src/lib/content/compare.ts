/**
 * MyBizAI vs Meta Business Agent — public battlecard data (PRD §5.6).
 * Re-verify facts quarterly; update `comparisonAsOf` on every review.
 */
export const comparisonAsOf = "June 2026";

export type CompareCell = { state: "yes" | "no" | "partial"; note: string };

export interface CompareRow {
  capability: string;
  mybizai: CompareCell;
  meta: CompareCell;
}

export const compareRows: CompareRow[] = [
  {
    capability: "AI replies to customer messages",
    mybizai: { state: "yes", note: "Grounded in your catalog, docs & data sheets" },
    meta: { state: "yes", note: "Answers from business profile & past chats" },
  },
  {
    capability: "Lead database & pipeline",
    mybizai: { state: "yes", note: "Auto-captured, scored, tagged CRM" },
    meta: { state: "no", note: "Conversations stay in the inbox" },
  },
  {
    capability: "Follow-up automation",
    mybizai: { state: "yes", note: "Silent-chat detection & auto nudges" },
    meta: { state: "no", note: "No follow-up engine" },
  },
  {
    capability: "Nurture sequences & drip",
    mybizai: { state: "yes", note: "Multi-step sequences per lead" },
    meta: { state: "no", note: "Not available" },
  },
  {
    capability: "Broadcast campaigns",
    mybizai: { state: "yes", note: "Fine-grained audience targeting" },
    meta: { state: "partial", note: "Basic broadcasts; coarse targeting" },
  },
  {
    capability: "Appointments & booking list",
    mybizai: { state: "yes", note: "Real slots, reminders, reschedules" },
    meta: { state: "partial", note: "Can chat about times; no managed calendar" },
  },
  {
    capability: "Orders & catalog with stock",
    mybizai: { state: "yes", note: "Stock-aware catalog, order tracking" },
    meta: { state: "partial", note: "Catalog answers; no order management" },
  },
  {
    capability: "Task & staff dispatch system",
    mybizai: { state: "yes", note: "Jobs to employees over WhatsApp" },
    meta: { state: "no", note: "Not in scope" },
  },
  {
    capability: "Business data the AI can query",
    mybizai: { state: "yes", note: "Data Sheets: live, structured, AI-readable" },
    meta: { state: "no", note: "Profile text & FAQs only" },
  },
  {
    capability: "Multi-channel inbox (IG, Telegram, SMS, web)",
    mybizai: { state: "yes", note: "One inbox across 6 channels" },
    meta: { state: "partial", note: "Meta's own apps only" },
  },
  {
    capability: "Analytics & daily business reports",
    mybizai: { state: "yes", note: "Leads, bookings, sentiment, funnels" },
    meta: { state: "partial", note: "Basic messaging stats" },
  },
  {
    capability: "Pricing",
    mybizai: { state: "yes", note: "Transparent ₹ plans, published" },
    meta: { state: "partial", note: "Free now; premium tiers expected" },
  },
];

export const compareFaq = [
  {
    q: "Is Meta's Business Agent actually free?",
    a: "Currently yes, for eligible businesses — and it's genuinely useful for answering common questions. Meta has signalled premium tiers will come. Either way, WhatsApp conversation fees apply to all platforms, including both Meta's agent and MyBizAI.",
  },
  {
    q: "Can I use Meta's agent and MyBizAI together?",
    a: "Conceptually they solve different layers — Meta's agent replies, MyBizAI runs the resulting business process. In practice one AI should own your number's conversations to avoid conflicts, so businesses pick MyBizAI when they want the replies to become leads, bookings and follow-ups.",
  },
  {
    q: "If Meta adds these features later, then what?",
    a: "Maybe some, someday — Meta builds horizontal features for billions of users. MyBizAI is built vertically for Indian SMB operations: CRM, follow-ups, staff tasks, data sheets, campaigns — as one system, today. We re-verify this comparison every quarter and date it honestly.",
  },
  {
    q: "Is MyBizAI compliant with Meta's business-agent policy?",
    a: "Yes. Meta's January 2026 policy requires task-specific agents on WhatsApp (not general-purpose chatbots). MyBizAI agents are scoped to your business's defined jobs — exactly the model Meta requires.",
  },
];
