import type { ChatScript } from "@/lib/chat";

export interface FeatureBlock {
  title: string;
  body: string;
  points?: string[];
}

export interface Feature {
  slug: string;
  name: string;
  icon: string; // lucide icon name (mapped in components/icons)
  claim: string; // ≤5-word bento claim
  heroTitle: string;
  heroSub: string;
  blocks: FeatureBlock[];
  callout?: { title: string; body: string };
  useCase: { text: string; href: string; label: string };
  related: string[];
  faq: { q: string; a: string }[];
  script: ChatScript;
}

export const features: Feature[] = [
  {
    slug: "ai-agents",
    name: "AI Agents & Agent Builder",
    icon: "bot",
    claim: "AI that talks like you",
    heroTitle: "An AI agent that knows your business — not a script",
    heroSub:
      "Sales, support or lead-gen: give your agent a role, a tone and your catalog. It answers like your best employee — grounded in your real prices, services and policies — and hands over to you the moment it should.",
    blocks: [
      {
        title: "Pick a role, shape the personality",
        body: "Start from a sales, support or lead-generation agent. Set the tone — warm, formal, Hinglish-friendly — and the guardrails: what it can promise, what it must never say, and when to bring a human in.",
      },
      {
        title: "Grounded in your catalog, docs and data",
        body: "Upload your price list, service menu, policies and FAQs. The agent answers from your material — retrieval over your own catalog, documents and data sheets — so 'how much is a root canal?' gets your price, not a guess.",
      },
      {
        title: "Agent Builder for the ambitious",
        body: "Go beyond presets: compose custom tools, connect your data sheets, and define exactly what your agent can do — check stock, quote a price, create a booking — without writing code.",
      },
      {
        title: "Human handoff, always",
        body: "One toggle moves any conversation from AI to you. The agent summarises the chat so you start with full context, and it never re-enters until you hand it back.",
      },
    ],
    callout: {
      title: "Task-scoped by design — Meta-policy compliant",
      body: "Meta's January 2026 policy requires business agents on WhatsApp to be task-specific, not general-purpose chatbots. Every MyBizAI agent is scoped to your business's defined jobs — selling, supporting, booking — which keeps your number compliant and safe.",
    },
    useCase: {
      text: "See how a clinic's agent answers treatment questions and books patients at midnight.",
      href: "/for/clinics",
      label: "MyBizAI for clinics",
    },
    related: ["conversations", "datasheets", "crm"],
    faq: [
      {
        q: "Will the AI say wrong things to my customers?",
        a: "The agent answers from the material you give it — your catalog, documents and data sheets. You set guardrails for what it can and cannot promise, and it hands over to a human whenever a question falls outside its scope.",
      },
      {
        q: "Can I control the agent's tone and language?",
        a: "Yes. You choose the personality — formal, friendly, Hinglish — and can review and refine how it speaks. Most owners get it feeling right within their first hour.",
      },
      {
        q: "Is this allowed under Meta's WhatsApp rules?",
        a: "Yes. MyBizAI agents are task-scoped to your business's jobs (sales, support, bookings), which is exactly what Meta's 2026 business-agent policy requires. General-purpose chatbots are not permitted — and not what we build.",
      },
      {
        q: "Can I take over a conversation myself?",
        a: "Anytime. Flip a chat to manual mode and the agent steps aside instantly, leaving you an AI summary of the conversation so far.",
      },
    ],
    script: {
      title: "Verma Hardware",
      subtitle: "AI Agent · always online",
      alt: "A customer asks if a 1HP water pump is in stock. The agent checks the catalog, confirms stock and price, and offers delivery — then logs the lead.",
      steps: [
        { kind: "msg", from: "in", text: "Bhaiya, 1HP water pump available? Crompton ka", time: "2:13 PM" },
        { kind: "msg", from: "out", typing: true, text: "Yes! Crompton Mini Champ 1HP is in stock — ₹3,850. We can deliver today within Nagri. Should I reserve one for you?", time: "2:13 PM" },
        { kind: "msg", from: "in", text: "Warranty kitni hai?", time: "2:14 PM" },
        { kind: "msg", from: "out", typing: true, text: "2-year on-site warranty from Crompton. Bill and warranty card come with delivery. 👍", time: "2:14 PM" },
        { kind: "chip", icon: "user-plus", label: "Lead captured", sub: "Pump enquiry · In stock" },
      ],
    },
  },
  {
    slug: "conversations",
    name: "Omnichannel Conversations",
    icon: "messages",
    claim: "Every channel, one inbox",
    heroTitle: "WhatsApp, Instagram, Telegram, SMS — one calm inbox",
    heroSub:
      "Your customers message wherever they are. You (and your AI) answer from one place — with AI summaries, template messages and a one-tap switch between AI and manual mode.",
    blocks: [
      {
        title: "One inbox for every channel",
        body: "WhatsApp, Instagram DMs, Messenger, Telegram, SMS and your website's chat — unified into a single conversation stream per customer. No more six apps open at closing time.",
      },
      {
        title: "AI mode and manual mode, per chat",
        body: "Let the agent run a conversation, or flip to manual and type yourself. The toggle is per-chat, instant, and the AI politely stays out until you invite it back.",
      },
      {
        title: "AI summaries — catch up in five seconds",
        body: "Open any long conversation and read a two-line AI summary: who they are, what they want, what's pending. Perfect for the morning-after catch-up.",
      },
      {
        title: "WhatsApp template messages, handled",
        body: "Outside the 24-hour window? Send approved template messages for reminders, updates and re-engagement — with opt-in compliance built into the flow.",
      },
    ],
    useCase: {
      text: "Retail stores run WhatsApp + Instagram from one screen — see how.",
      href: "/for/retail",
      label: "MyBizAI for retail",
    },
    related: ["ai-agents", "crm", "follow-ups"],
    faq: [
      {
        q: "Which channels are supported?",
        a: "WhatsApp (Cloud API), Instagram DMs, Facebook Messenger, Telegram, SMS and a web chat widget for your site or free MyBizAI storefront. Plans differ in how many channels you can connect.",
      },
      {
        q: "Do I need a new WhatsApp number?",
        a: "You connect a number to the WhatsApp Business Platform (Cloud API). Many businesses use their existing number after migrating it, or start fresh with a dedicated business number — we guide you through either path during onboarding.",
      },
      {
        q: "Can my team and the AI work the same inbox?",
        a: "Yes. Each conversation shows whether AI or a human is driving. Teammates can take over, leave each other context, and hand back to the agent when done.",
      },
    ],
    script: {
      title: "Meera Boutique",
      subtitle: "WhatsApp · Instagram · Web",
      alt: "Messages from WhatsApp and Instagram arrive in one inbox; the AI replies on both, and a summary chip shows three conversations handled.",
      steps: [
        { kind: "system", text: "WhatsApp" },
        { kind: "msg", from: "in", text: "Do you have this saree in blue? (photo)", time: "6:02 PM" },
        { kind: "msg", from: "out", typing: true, text: "Yes! The Banarasi silk in royal blue is available — ₹6,999. Want me to hold one for you?", time: "6:02 PM" },
        { kind: "system", text: "Instagram DM" },
        { kind: "msg", from: "in", text: "Price of the lehenga in your last reel?", time: "6:05 PM" },
        { kind: "msg", from: "out", typing: true, text: "That's our Jaipur collection lehenga — ₹12,499 with blouse. I can share more photos here. 💜", time: "6:05 PM" },
        { kind: "chip", icon: "check", label: "2 channels, 1 inbox", sub: "Both answered in seconds" },
      ],
    },
  },
  {
    slug: "crm",
    name: "Leads & Contacts CRM",
    icon: "users",
    claim: "Every chat becomes a lead",
    heroTitle: "Your DMs are full of leads. Now they're in a CRM.",
    heroSub:
      "MyBizAI reads every conversation and quietly builds your customer database — name, interest, intent, stage — with zero data entry. The lead list your business never had, created automatically.",
    blocks: [
      {
        title: "Automatic lead capture from chat",
        body: "When someone asks about a price, a slot or a product, that's a lead. MyBizAI creates the contact, tags the interest and scores the intent — while the conversation is still happening.",
      },
      {
        title: "Scoring that tells you who's hot",
        body: "Asked twice about price? Requested a slot? The lead score climbs. Open your pipeline in the morning and call the five hottest leads first.",
      },
      {
        title: "Custom fields, tags and groups",
        body: "Track what matters to your business — treatment type, budget range, area, source. Build groups like 'whitening enquiries this month' and target them with campaigns later.",
      },
      {
        title: "Full activity timeline",
        body: "Every message, booking, order, follow-up and note on one timeline per contact. Anyone on your team can pick up any customer with full history.",
      },
    ],
    useCase: {
      text: "Coaching centres turn every fee enquiry into a tracked admission lead.",
      href: "/for/coaching",
      label: "MyBizAI for coaching",
    },
    related: ["follow-ups", "ai-agents", "analytics"],
    faq: [
      {
        q: "Do I have to enter leads manually?",
        a: "No — that's the point. Leads are created automatically from conversations, with name, interest and intent filled in by the AI. You can always edit or add manually too.",
      },
      {
        q: "Can I import my existing contacts?",
        a: "Yes, import contacts from CSV (or your phone's exported contacts) and organise them with tags and groups from day one.",
      },
      {
        q: "How is this different from a normal CRM?",
        a: "Normal CRMs die because nobody fills them. This one fills itself from your chats — the CRM is a side effect of answering customers.",
      },
    ],
    script: {
      title: "FitZone Gym",
      subtitle: "AI Agent · always online",
      alt: "A membership enquiry becomes a scored lead card with interest and budget captured automatically.",
      steps: [
        { kind: "msg", from: "in", text: "What are your membership plans?", time: "7:40 AM" },
        { kind: "msg", from: "out", typing: true, text: "Good morning! 💪 Monthly ₹1,500, Quarterly ₹3,900, Annual ₹12,000 (best value). Want a free trial day this week?", time: "7:40 AM" },
        { kind: "msg", from: "in", text: "Annual seems ok. Is there personal training?", time: "7:42 AM" },
        { kind: "msg", from: "out", typing: true, text: "Yes — PT packs start at ₹4,000/month with certified trainers. I can book your free trial for tomorrow 7 AM?", time: "7:42 AM" },
        { kind: "chip", icon: "user-plus", label: "Lead: Annual + PT", sub: "Score 86 · Hot 🔥" },
      ],
    },
  },
  {
    slug: "follow-ups",
    name: "Follow-ups, Nurture & Campaigns",
    icon: "repeat",
    claim: "No lead goes cold",
    heroTitle: "The money is in the follow-up. So we automated it.",
    heroSub:
      "Most sales die in silence — the customer asked, you answered, nobody followed up. MyBizAI detects silent chats, nudges them back, nurtures the undecided, and runs campaigns to your whole list. This is everything a free chatbot doesn't do.",
    blocks: [
      {
        title: "Silent-chat detection",
        body: "Two days of silence after a price quote? The agent sends a gentle, personalised nudge — 'Hi Priya, still thinking about the whitening session? Tuesday slots are open.' Recovered revenue, on autopilot.",
      },
      {
        title: "Nurture sequences",
        body: "Some buyers need five touches, not one. Build sequences — day 1 info, day 3 social proof, day 7 offer — and let leads move through them automatically until they buy or opt out.",
      },
      {
        title: "Broadcast campaigns with real targeting",
        body: "New collection? Diwali offer? Send a campaign to a precisely targeted group — 'everyone who asked about lehengas in the last 60 days' — not a blind blast to your whole list.",
      },
      {
        title: "Opt-in compliant, by design",
        body: "Outbound messages respect WhatsApp's opt-in rules and use approved templates. Customers can opt out in one tap; your sender quality stays protected.",
      },
    ],
    callout: {
      title: "This is the gap with free chatbots",
      body: "Meta's free agent can answer a question. It cannot notice that a hot lead went quiet, follow up tomorrow, or campaign to last month's enquiries. Follow-up automation is where the revenue is — and it's ours.",
    },
    useCase: {
      text: "Salons recover no-shows and refill quiet weekdays with targeted nudges.",
      href: "/for/salons",
      label: "MyBizAI for salons",
    },
    related: ["crm", "conversations", "analytics"],
    faq: [
      {
        q: "Won't automatic follow-ups annoy my customers?",
        a: "Follow-ups are personalised, capped, and respect opt-outs. One thoughtful nudge after silence reads as good service — and you control the timing, tone and frequency.",
      },
      {
        q: "What's the difference between a nurture sequence and a campaign?",
        a: "A sequence is a scheduled series sent to one lead based on their behaviour (e.g., after an enquiry). A campaign is a one-time broadcast to a targeted group (e.g., a festival offer to recent enquirers).",
      },
      {
        q: "Are outbound messages allowed on WhatsApp?",
        a: "Yes, when sent with approved templates to opted-in contacts — which is exactly how MyBizAI sends them. We handle template approval and opt-in tracking for you.",
      },
    ],
    script: {
      title: "Glow Salon",
      subtitle: "AI Agent · always online",
      alt: "Two days after a quote, the agent automatically follows up with a customer who went silent — and wins the booking back.",
      steps: [
        { kind: "system", text: "Monday — quote sent, then silence" },
        { kind: "msg", from: "out", text: "Bridal package is ₹14,999 — includes trial. 😊", time: "Mon 4:10 PM", faded: true },
        { kind: "system", text: "Wednesday — auto follow-up fires" },
        { kind: "msg", from: "out", typing: true, text: "Hi Anjali! Just checking in on the bridal package — December dates are filling fast. Want me to hold the 14th for you? ✨", time: "Wed 11:00 AM" },
        { kind: "msg", from: "in", text: "Oh yes!! Please hold it, I'll pay advance today", time: "Wed 11:21 AM" },
        { kind: "chip", icon: "bell", label: "Follow-up converted", sub: "₹14,999 recovered" },
      ],
    },
  },
  {
    slug: "appointments-orders",
    name: "Appointments, Orders & Catalog",
    icon: "calendar",
    claim: "Bookings inside the chat",
    heroTitle: "From 'is Tuesday free?' to a confirmed booking — in chat",
    heroSub:
      "Your agent books appointments, takes catalog orders and shares payment status without the customer ever leaving WhatsApp. No app to download, no link to abandon.",
    blocks: [
      {
        title: "In-chat appointment booking",
        body: "The agent offers real slots, confirms the booking and sends reminders. Reschedules and cancellations are handled in the same thread — your calendar stays clean.",
      },
      {
        title: "A catalog your AI actually sells from",
        body: "Products and services with photos, variants, stock and prices. When stock runs out, the agent stops offering it. When a price changes, every future answer is current.",
      },
      {
        title: "Orders and payment status",
        body: "Customers order in chat; you see structured orders, not screenshots. Share payment links and let customers check 'where is my order?' themselves — answered by the agent.",
      },
      {
        title: "Reminders that cut no-shows",
        body: "Automatic appointment reminders the day before and hour before — the cheapest revenue protection a service business can buy.",
      },
    ],
    useCase: {
      text: "Clinics fill their appointment book while the front desk sleeps.",
      href: "/for/clinics",
      label: "MyBizAI for clinics",
    },
    related: ["ai-agents", "follow-ups", "datasheets"],
    faq: [
      {
        q: "Does the agent see my real availability?",
        a: "Yes — you define your working hours, slot lengths and holidays, and the agent only offers slots that are actually open. Bookings land in your MyBizAI calendar instantly.",
      },
      {
        q: "Can customers pay through the chat?",
        a: "You can share payment links in-chat and track payment status against orders. (Card-on-file style checkout isn't part of v1.)",
      },
      {
        q: "What about my product catalog — how hard is setup?",
        a: "Import from CSV or add items with photos, prices, variants and stock in the app. Most businesses are catalog-live within an afternoon.",
      },
    ],
    script: {
      title: "Sharma Physio Clinic",
      subtitle: "AI Agent · always online",
      alt: "A patient books a physiotherapy session; the agent offers slots, confirms, and a reminder is scheduled automatically.",
      steps: [
        { kind: "msg", from: "in", text: "Back pain session for my father, this week?", time: "8:55 PM" },
        { kind: "msg", from: "out", typing: true, text: "Of course. Dr. Sharma has Thu 11 AM or Fri 6 PM open for a first assessment (₹600, 40 min). Which works?", time: "8:55 PM" },
        { kind: "msg", from: "in", text: "Friday 6pm", time: "8:56 PM" },
        { kind: "msg", from: "out", typing: true, text: "Booked ✅ Friday 6:00 PM — first assessment. I'll send a reminder Friday morning. Please bring any old reports.", time: "8:56 PM" },
        { kind: "chip", icon: "calendar-check", label: "Appointment booked", sub: "Fri 6:00 PM · Reminder set" },
      ],
    },
  },
  {
    slug: "work-tasks",
    name: "Work, Tasks & Staff Dispatch",
    icon: "clipboard",
    claim: "Your team, on WhatsApp",
    heroTitle: "Assign work to your staff — on the WhatsApp they already use",
    heroSub:
      "No app to install, no training day. Create a task in MyBizAI and it lands in your employee's WhatsApp: checklist, photos, customer details, done-button. Your staff doesn't need to learn software. They already did.",
    blocks: [
      {
        title: "Tasks dispatched over WhatsApp",
        body: "Delivery to make, site visit to do, callback list to clear — assign it and the staff member gets the full task on WhatsApp, replies 'done' (or sends a photo) to close it.",
      },
      {
        title: "Templates: simple, checklist, datasheet, calling lists",
        body: "A one-line errand, a multi-step opening checklist, a structured data-collection form, or a 50-number calling list — pick the template that fits the job.",
      },
      {
        title: "See what's done, what's stuck",
        body: "A live board of every open task: who has it, since when, what's overdue. The morning chaos of 'kisne kiya?' becomes a 10-second glance.",
      },
      {
        title: "Tasks born from conversations",
        body: "Customer reports a complaint at 9 PM? The agent logs it and a task can be raised for tomorrow's technician — context attached, nothing retyped.",
      },
    ],
    useCase: {
      text: "Service businesses dispatch technicians and track jobs without a single new app install.",
      href: "/for/services",
      label: "MyBizAI for services",
    },
    related: ["datasheets", "conversations", "analytics"],
    faq: [
      {
        q: "Do my employees need to install anything?",
        a: "No. Tasks arrive on their existing WhatsApp. They acknowledge, update and complete tasks by replying — photos and notes included.",
      },
      {
        q: "What kinds of tasks can I create?",
        a: "Simple to-dos, multi-step checklists, datasheet-backed forms (e.g., meter readings, survey responses) and calling lists where each call updates the sheet.",
      },
      {
        q: "Can tasks be created automatically?",
        a: "Yes — from conversations (a complaint becomes a ticket-task) and from your own recurring schedules (daily opening checklist at 9 AM).",
      },
    ],
    script: {
      title: "Ravi (Technician)",
      subtitle: "via MyBizAI Work",
      alt: "A technician receives a service-visit task on WhatsApp with address and checklist, and closes it by replying with a photo.",
      steps: [
        { kind: "system", text: "New task assigned · 9:00 AM" },
        { kind: "msg", from: "out", text: "🔧 Task #214 — AC service visit\nCustomer: Gupta Residence, Sector 4\nTime: 11 AM\n☐ Filter clean ☐ Gas check ☐ Photo proof", time: "9:00 AM" },
        { kind: "msg", from: "in", text: "Reached site", time: "10:52 AM" },
        { kind: "msg", from: "in", text: "Done ✅ (photo attached)", time: "11:47 AM" },
        { kind: "chip", icon: "clipboard", label: "Task completed", sub: "#214 · 47 min on site" },
      ],
    },
  },
  {
    slug: "datasheets",
    name: "Dynamic Data Sheets",
    icon: "table",
    claim: "A spreadsheet your AI reads",
    heroTitle: "A spreadsheet your AI can actually read",
    heroSub:
      "Price lists, batch timings, stock registers, student records — keep them in Data Sheets and your agent answers from them, live. Update the sheet, and every future answer updates with it.",
    blocks: [
      {
        title: "Your business data, AI-queryable",
        body: "Ask-the-sheet, in chat: 'is the 6 PM batch full?', 'what's the price of SKU-204?', 'when is Mrs. Iyer's next EMI due?' The agent looks it up and answers — accurately, every time.",
      },
      {
        title: "Import what you already have",
        body: "Bring your existing Excel/CSV files in as-is. Columns become structured fields; your years of business records become your AI's knowledge on day one.",
      },
      {
        title: "Views for humans, structure for AI",
        body: "Filter, sort and save views for your team — while the AI uses the same structured data to answer customers and fill task forms in the field.",
      },
      {
        title: "Sheets that workflows write to",
        body: "Calling-list tasks update the sheet as staff make calls. Field forms append rows. Your data stays alive instead of dying in someone's phone gallery.",
      },
    ],
    useCase: {
      text: "Coaching centres keep batch schedules and fee records as sheets the agent quotes from.",
      href: "/for/coaching",
      label: "MyBizAI for coaching",
    },
    related: ["ai-agents", "work-tasks", "analytics"],
    faq: [
      {
        q: "How is this different from Google Sheets?",
        a: "Your AI agent can read it. When a customer asks something answerable from the sheet — price, availability, status — the agent queries it live and replies. Sheets also power task forms and calling lists.",
      },
      {
        q: "Can I import my existing Excel files?",
        a: "Yes — CSV and Excel imports are supported. Your columns map to fields and the data is queryable immediately.",
      },
      {
        q: "Is my business data used to train AI models?",
        a: "No. Your data is used only to answer your customers and run your workflows. See our Security page for the full data-handling picture.",
      },
    ],
    script: {
      title: "Akash Coaching Centre",
      subtitle: "AI Agent · always online",
      alt: "A parent asks about batch availability; the agent checks the live data sheet and answers with the open batch and fee.",
      steps: [
        { kind: "msg", from: "in", text: "Class 10 maths batch available? Evening only", time: "5:30 PM" },
        { kind: "msg", from: "out", typing: true, text: "Checking our batch sheet… 📋 The 6 PM Class-10 Maths batch has 3 seats left (Mon/Wed/Fri, ₹2,200/month). The 7:30 PM batch is full. Shall I reserve a seat?", time: "5:30 PM" },
        { kind: "msg", from: "in", text: "Yes, for my daughter Ananya", time: "5:32 PM" },
        { kind: "chip", icon: "check", label: "Sheet updated", sub: "6 PM batch · 2 seats left" },
      ],
    },
  },
  {
    slug: "analytics",
    name: "Analytics & Reports",
    icon: "chart",
    claim: "See what AI did today",
    heroTitle: "See what your AI did today",
    heroSub:
      "Conversations handled, leads captured, bookings made, follow-ups sent, response times, customer sentiment — a plain-language daily picture of the business your AI is running for you.",
    blocks: [
      {
        title: "The daily pulse",
        body: "Every morning: how many conversations, how many new leads, how many bookings and orders, what needs your attention. The whole business on one screen with chai.",
      },
      {
        title: "Response time & resolution",
        body: "Average first-reply time (spoiler: seconds), AI-resolved vs. human-handled, and where conversations get stuck — so you know exactly where to improve.",
      },
      {
        title: "Sentiment, watched quietly",
        body: "The AI flags frustrated customers and unhappy threads so you can step in personally before a 1-star review is born.",
      },
      {
        title: "Lead and revenue funnels",
        body: "Enquiries → qualified → booked → completed. See conversion by source, by service, by campaign — and learn which follow-up sequences actually print money.",
      },
    ],
    useCase: {
      text: "Retail owners see which products drive enquiries — and which campaigns convert.",
      href: "/for/retail",
      label: "MyBizAI for retail",
    },
    related: ["crm", "follow-ups", "conversations"],
    faq: [
      {
        q: "Do I need to be 'a data person' to use this?",
        a: "No. Reports are written in plain language — 'You got 23 new leads this week, 8 are hot' — with the detailed charts one tap deeper if you want them.",
      },
      {
        q: "Can I see what the AI answered?",
        a: "Every conversation is fully visible and searchable, with AI/human attribution per message. Nothing is a black box.",
      },
      {
        q: "Is end-customer data anonymised in analytics?",
        a: "Aggregated reports don't expose personal data; conversation-level views are protected by your account's access controls. Details on the Security page.",
      },
    ],
    script: {
      title: "Daily summary",
      subtitle: "MyBizAI · 9:00 AM",
      alt: "A morning summary message lists conversations handled overnight, leads captured and bookings made, with one item flagged for the owner's attention.",
      steps: [
        { kind: "system", text: "Your morning briefing" },
        { kind: "msg", from: "out", text: "☀️ Good morning! While you were away:\n· 14 conversations handled\n· 5 new leads (2 hot 🔥)\n· 3 appointments booked\n· 1 customer seems upset — want a summary?", time: "9:00 AM" },
        { kind: "msg", from: "in", text: "Yes, show me the upset one", time: "9:04 AM" },
        { kind: "msg", from: "out", typing: true, text: "Mrs. Khanna's order arrived late and she's asked for a callback. Her number's ready to dial — shall I create a priority task for you?", time: "9:04 AM" },
        { kind: "chip", icon: "chart", label: "5 leads · 3 bookings", sub: "Overnight, on autopilot" },
      ],
    },
  },
];

export function getFeature(slug: string): Feature | undefined {
  return features.find((f) => f.slug === slug);
}
