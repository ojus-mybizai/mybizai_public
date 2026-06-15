/**
 * Global site configuration — single source of truth for identity,
 * contact details and CTA destinations (PRD Addendum A1).
 */
export const site = {
  name: "MyBizAI",
  domain: "https://mybizai.in",
  tagline: "Your business, run by AI — on WhatsApp.",
  description:
    "MyBizAI is the AI business operating system for Indian SMBs. AI agents that answer customers, capture every lead, book appointments, chase follow-ups and assign work to your team — 24×7, on WhatsApp.",

  // Conversion (A1.3)
  appUrl: "https://app.mybizai.in",
  signupUrl: "https://app.mybizai.in/signup",
  loginUrl: "https://app.mybizai.in/login",

  // Contact & legal identity (A1.1)
  legalEntity: "MyBizAI Solutions LLP",
  address:
    "Ward No. 8, Beach Para Sankra, Nagri, Dhamtari, Chhattisgarh, India — 493778",
  email: "contact@mybizai.in",
  phone: "+91 62663 79512",
  phoneHref: "tel:+916266379512",
  waNumber: "916266379512",
  waLink: "https://wa.me/916266379512",
  waDemoLink:
    "https://wa.me/916266379512?text=Hi%21%20I%27d%20like%20to%20see%20a%20MyBizAI%20agent%20in%20action.",
  grievanceOfficer: "Ojus Soni",

  // CTA copy — one verb pair sitewide (PRD §4.7)
  ctaPrimary: "Start free",
  ctaSecondary: "See it on WhatsApp",

  // Founders offer public availability endpoint (A1.2). The announcement
  // bar degrades gracefully if this is unreachable.
  foundersOfferApi: "https://app.mybizai.in/api/v1/public/founders-offer",
  websiteLeadsApi: "https://app.mybizai.in/api/v1/public/website-leads",

  lastReviewed: "June 12, 2026",
} as const;

export const navProduct = [
  {
    href: "/features/ai-agents",
    label: "AI Agents",
    desc: "Sales, support & lead-gen agents you can shape",
  },
  {
    href: "/features/conversations",
    label: "Conversations",
    desc: "One inbox for WhatsApp, Instagram & more",
  },
  {
    href: "/features/crm",
    label: "CRM",
    desc: "Every chat becomes a lead, automatically",
  },
  {
    href: "/features/follow-ups",
    label: "Follow-ups & Campaigns",
    desc: "Silent chats get a nudge. Revenue comes back",
  },
  {
    href: "/features/appointments-orders",
    label: "Appointments & Orders",
    desc: "Bookings and catalog orders, inside the chat",
  },
  {
    href: "/features/work-tasks",
    label: "Work & Tasks",
    desc: "Assign work to staff over WhatsApp",
  },
  {
    href: "/features/datasheets",
    label: "Data Sheets",
    desc: "A spreadsheet your AI can read",
  },
  {
    href: "/features/analytics",
    label: "Analytics",
    desc: "See what your AI did today",
  },
] as const;

export const navUseCases = [
  { href: "/for/clinics", label: "Clinics & Healthcare", desc: "A front desk that never sleeps" },
  { href: "/for/salons", label: "Salons & Wellness", desc: "Bookings filled, no-shows chased" },
  { href: "/for/retail", label: "Retail & D2C", desc: "Catalog, orders and order status on chat" },
  { href: "/for/services", label: "Service Businesses", desc: "Quotes, follow-ups and job dispatch" },
  { href: "/for/coaching", label: "Coaching & Education", desc: "Enquiries nurtured into enrolments" },
] as const;
