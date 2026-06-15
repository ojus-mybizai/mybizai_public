import type { ChatScript } from "@/lib/chat";

export interface UseCase {
  slug: string;
  name: string;
  icon: string;
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroSub: string;
  pains: { stat: string; label: string }[];
  features: { title: string; desc: string; href: string }[];
  faq: { q: string; a: string }[];
  script: ChatScript;
}

export const useCases: UseCase[] = [
  {
    slug: "clinics",
    name: "Clinics & Healthcare",
    icon: "stethoscope",
    seoTitle: "WhatsApp AI Agent for Clinics & Doctors in India",
    seoDescription:
      "MyBizAI gives your clinic a front desk that never sleeps — AI that answers patients, books appointments, sends reminders and follows up, on WhatsApp.",
    heroTitle: "Your front desk, but it never sleeps",
    heroSub:
      "Patients message at 11 PM about treatments, timings and prices. Your MyBizAI agent answers from your real service list, books them into real slots, reminds them before the visit — and your receptionist walks into a full, organised day.",
    pains: [
      { stat: "60%+", label: "of patient enquiries arrive outside clinic hours" },
      { stat: "1 in 4", label: "appointments no-show without a reminder" },
      { stat: "0", label: "follow-ups most clinics send after a treatment enquiry" },
    ],
    features: [
      { title: "24×7 patient answering", desc: "Treatment questions, fees, timings — answered instantly from your own service list, in your tone.", href: "/features/ai-agents" },
      { title: "In-chat appointment booking", desc: "Real slots, instant confirmation, automatic reminders the day before and hour before.", href: "/features/appointments-orders" },
      { title: "Enquiry follow-ups", desc: "Asked about a root canal and went quiet? A gentle nudge brings them back to book.", href: "/features/follow-ups" },
      { title: "Patient CRM", desc: "Every enquiry becomes a contact with history — treatments asked about, visits made, what's pending.", href: "/features/crm" },
    ],
    faq: [
      { q: "Can the agent answer medical questions?", a: "It answers operational questions — services, fees, timings, preparation instructions you provide — and is scoped to never give medical advice. Clinical questions are politely routed to your doctors." },
      { q: "Will it work for a multi-doctor clinic?", a: "Yes — separate calendars and slot rules per practitioner, and the agent books into the right one based on the treatment requested." },
      { q: "Is patient data safe?", a: "Conversations are processed only to run your clinic's workflows, encrypted in transit and at rest. See our Security page for the full data-handling overview." },
    ],
    script: {
      title: "Shree Dental Clinic",
      subtitle: "AI Agent · always online",
      alt: "A patient messages at night about tooth pain; the agent books the first morning slot and sets a reminder.",
      steps: [
        { kind: "system", text: "Today, 10:48 PM" },
        { kind: "msg", from: "in", text: "My son has tooth pain since evening. Can we come tomorrow morning?", time: "10:48 PM" },
        { kind: "msg", from: "out", typing: true, text: "Sorry to hear that! Dr. Mehta's first slot tomorrow is 9:30 AM. Shall I book it for your son? Till then, a cold compress can help with the pain.", time: "10:48 PM" },
        { kind: "msg", from: "in", text: "Yes please, 9:30", time: "10:49 PM" },
        { kind: "msg", from: "out", typing: true, text: "Booked ✅ Tomorrow 9:30 AM with Dr. Mehta. Clinic address: 12 MG Road. See you both — and wishing him quick relief! 🙏", time: "10:49 PM" },
        { kind: "chip", icon: "calendar-check", label: "Appointment booked", sub: "9:30 AM · Reminder set" },
      ],
    },
  },
  {
    slug: "salons",
    name: "Salons & Wellness",
    icon: "scissors",
    seoTitle: "WhatsApp AI Agent for Salons & Spas in India",
    seoDescription:
      "MyBizAI fills your salon's calendar — AI that quotes services, books slots, chases no-shows and refills quiet weekdays, on WhatsApp.",
    heroTitle: "A full appointment book, even on Tuesdays",
    heroSub:
      "While your stylists work, your agent quotes the service menu, books slots, reminds clients, and wins back the ones who went quiet after asking for bridal-package prices.",
    pains: [
      { stat: "70%", label: "of salon bookings now start as a WhatsApp message" },
      { stat: "₹1000s", label: "lost monthly to no-shows and unanswered DMs" },
      { stat: "2 days", label: "of silence is all it takes for a bridal lead to book elsewhere" },
    ],
    features: [
      { title: "Service menu that sells itself", desc: "Prices, durations and combos in your catalog — quoted accurately in every chat.", href: "/features/appointments-orders" },
      { title: "Slot booking & reminders", desc: "Clients book in chat; reminders cut no-shows without your staff lifting a finger.", href: "/features/appointments-orders" },
      { title: "Win-back follow-ups", desc: "Quoted a package and heard nothing? The agent follows up before they book elsewhere.", href: "/features/follow-ups" },
      { title: "Festival campaigns", desc: "Karwa Chauth and wedding-season offers to precisely the clients who'd want them.", href: "/features/follow-ups" },
    ],
    faq: [
      { q: "Can it handle stylist-specific bookings?", a: "Yes — clients can ask for a specific stylist and the agent books into that stylist's calendar and hours." },
      { q: "What about home-service salons?", a: "Works the same — the agent collects the address, books the visit and can assign the job to a team member as a WhatsApp task." },
      { q: "Can I send offers without being spammy?", a: "Campaigns go to opted-in, targeted groups — e.g., clients who took a facial in the last 3 months — with one-tap opt-out. Quality stays high." },
    ],
    script: {
      title: "Glow Salon & Spa",
      subtitle: "AI Agent · always online",
      alt: "A bride-to-be asks about bridal packages; the agent quotes, books a trial, and a follow-up is scheduled.",
      steps: [
        { kind: "msg", from: "in", text: "Bridal makeup packages? Wedding on Dec 14", time: "3:21 PM" },
        { kind: "msg", from: "out", typing: true, text: "Congratulations! 💐 Our bridal packages: Classic ₹9,999 · Premium ₹14,999 (HD + draping + trial) · Royal ₹21,999. Premium is most loved. Want a free trial slot this week?", time: "3:21 PM" },
        { kind: "msg", from: "in", text: "Premium. Saturday trial possible?", time: "3:23 PM" },
        { kind: "msg", from: "out", typing: true, text: "Saturday 2 PM is open for your trial ✨ Booking it now — and I'll pencil Dec 14 for the big day. See you Saturday!", time: "3:23 PM" },
        { kind: "chip", icon: "calendar-check", label: "Trial booked", sub: "Sat 2 PM · Dec 14 held" },
      ],
    },
  },
  {
    slug: "retail",
    name: "Retail & D2C",
    icon: "store",
    seoTitle: "WhatsApp AI Agent for Retail & D2C Brands in India",
    seoDescription:
      "MyBizAI turns product DMs into orders — AI that answers from your live catalog, takes orders, shares order status and re-engages browsers, on WhatsApp and Instagram.",
    heroTitle: "Every 'price?' DM becomes an order",
    heroSub:
      "Instagram reels bring the DMs; MyBizAI closes them. Your agent answers from a live catalog with stock and variants, takes the order in chat, shares payment and delivery status — and campaigns your new collection to past buyers.",
    pains: [
      { stat: "100s", label: "of 'price?' comments and DMs go unanswered every launch" },
      { stat: "78%", label: "of cart-style chats die without a follow-up" },
      { stat: "6 apps", label: "open at closing time just to answer customers" },
    ],
    features: [
      { title: "Live catalog answering", desc: "Sizes, colours, stock, price — answered from your real inventory, never a stale screenshot.", href: "/features/appointments-orders" },
      { title: "WhatsApp + Instagram, one inbox", desc: "Reel comments to DMs to WhatsApp — one stream, one history per customer.", href: "/features/conversations" },
      { title: "Order status, self-served", desc: "'Where is my order?' answered instantly by the agent, with the real status.", href: "/features/appointments-orders" },
      { title: "Collection-drop campaigns", desc: "New stock goes to exactly the buyers who bought (or browsed) that category before.", href: "/features/follow-ups" },
    ],
    faq: [
      { q: "Does it sync with my actual stock?", a: "Your MyBizAI catalog holds stock and variants; when something sells out, the agent stops offering it and suggests alternatives." },
      { q: "Can customers pay in the chat?", a: "Share payment links in-chat and track payment status against each order. The agent chases unpaid orders politely." },
      { q: "I sell on Instagram only — is that fine?", a: "Yes. Connect Instagram DMs alone, or add WhatsApp later. Many D2C brands start with IG and add WA for post-purchase updates." },
    ],
    script: {
      title: "Meera Boutique",
      subtitle: "AI Agent · always online",
      alt: "A customer asks about a kurta seen on Instagram; the agent confirms size availability, takes the order and shares payment link.",
      steps: [
        { kind: "msg", from: "in", text: "The green chikankari kurta from today's post — M size?", time: "8:14 PM" },
        { kind: "msg", from: "out", typing: true, text: "Great pick! 💚 The green chikankari is in stock in M — ₹2,499 with free shipping. COD or prepaid (5% off)?", time: "8:14 PM" },
        { kind: "msg", from: "in", text: "Prepaid. How do I pay?", time: "8:15 PM" },
        { kind: "msg", from: "out", typing: true, text: "Sending your payment link for ₹2,374 (5% off applied) — order ships tomorrow, delivery in 3–4 days. 🎉", time: "8:15 PM" },
        { kind: "chip", icon: "package", label: "Order #1208 created", sub: "₹2,374 · Prepaid" },
      ],
    },
  },
  {
    slug: "services",
    name: "Service Businesses",
    icon: "wrench",
    seoTitle: "WhatsApp AI Agent for Service Businesses in India",
    seoDescription:
      "MyBizAI runs your service business's front office — AI that quotes jobs, schedules visits, dispatches technicians on WhatsApp and follows up on every estimate.",
    heroTitle: "Quotes answered, jobs dispatched, follow-ups done",
    heroSub:
      "AC repair, pest control, interiors, CA firms — service businesses live and die by response speed. Your agent answers the enquiry in seconds, books the site visit, sends the job to your technician's WhatsApp and follows up on every pending estimate.",
    pains: [
      { stat: "5 min", label: "is how long a service lead waits before calling your competitor" },
      { stat: "40%", label: "of estimates are never followed up" },
      { stat: "All day", label: "spent coordinating staff on calls instead of running the business" },
    ],
    features: [
      { title: "Instant enquiry handling", desc: "Scope, rough pricing, next steps — answered in seconds, lead captured automatically.", href: "/features/ai-agents" },
      { title: "Visit scheduling", desc: "Site visits and service slots booked in chat, reminders sent both ways.", href: "/features/appointments-orders" },
      { title: "Technician dispatch on WhatsApp", desc: "Jobs land on your team's existing WhatsApp — checklist, address, photo-proof completion.", href: "/features/work-tasks" },
      { title: "Estimate follow-ups", desc: "Every pending quote gets a polite, persistent nudge until it closes — automatically.", href: "/features/follow-ups" },
    ],
    faq: [
      { q: "My pricing depends on inspection — can the agent still help?", a: "Yes. It shares indicative ranges you define, books the inspection visit, and captures the lead. Final quoting stays with you." },
      { q: "How do my technicians get the jobs?", a: "As WhatsApp tasks — address, checklist, customer contact. They reply to acknowledge, update and complete with photos. No app installs." },
      { q: "Can it handle AMC renewals?", a: "Yes — keep AMC records in a Data Sheet and the agent reminds customers before expiry and books the renewal visit." },
    ],
    script: {
      title: "CoolCare AC Services",
      subtitle: "AI Agent · always online",
      alt: "A customer reports a broken AC; the agent books a visit and the job is dispatched to a technician's WhatsApp.",
      steps: [
        { kind: "msg", from: "in", text: "AC not cooling at all. How much for repair?", time: "1:36 PM" },
        { kind: "msg", from: "out", typing: true, text: "We can help! Inspection visit is ₹299 (adjusted in repair cost). Gas top-up if needed is ₹2,200–2,800. Today 4 PM or tomorrow 10 AM?", time: "1:36 PM" },
        { kind: "msg", from: "in", text: "Today 4pm. Sector 4, house 112", time: "1:37 PM" },
        { kind: "msg", from: "out", typing: true, text: "Confirmed ✅ Today 4 PM at Sector 4, #112. Technician Ravi will message you when he's on the way.", time: "1:37 PM" },
        { kind: "chip", icon: "clipboard", label: "Job dispatched to Ravi", sub: "Today 4 PM · Sector 4" },
      ],
    },
  },
  {
    slug: "coaching",
    name: "Coaching & Education",
    icon: "graduation",
    seoTitle: "WhatsApp AI Agent for Coaching Institutes in India",
    seoDescription:
      "MyBizAI turns fee enquiries into admissions — AI that answers courses, batches and fees, nurtures undecided parents and manages batch communication on WhatsApp.",
    heroTitle: "Every fee enquiry, nurtured to admission",
    heroSub:
      "Parents compare three institutes before choosing. The one that answers at 9 PM, follows up on Thursday and remembers the student's name usually wins. Your agent does all three — from your real batch sheet.",
    pains: [
      { stat: "3–5", label: "institutes a parent contacts before enrolling" },
      { stat: "1 week", label: "typical decision window — silence loses it" },
      { stat: "50%", label: "of enquiries never get a second touch" },
    ],
    features: [
      { title: "Course & batch answering", desc: "Fees, timings, faculty, seats left — answered live from your batch Data Sheet.", href: "/features/datasheets" },
      { title: "Admission nurture sequences", desc: "Day 1 details, day 3 toppers' results, day 6 'seats filling' — automated and polite.", href: "/features/follow-ups" },
      { title: "Demo class booking", desc: "Free demo slots booked in chat, reminders sent, no-shows followed up.", href: "/features/appointments-orders" },
      { title: "Enquiry CRM", desc: "Student name, class, subjects, budget — captured per enquiry, scored by intent.", href: "/features/crm" },
    ],
    faq: [
      { q: "Can it answer in Hindi or Hinglish?", a: "Yes — the agent mirrors how your parents and students actually write, including Hinglish. You set the default tone." },
      { q: "Can it message parents about batch changes?", a: "Yes — opted-in batch groups get template-based updates (schedule changes, PTM dates, fee reminders) you trigger or schedule." },
      { q: "We run multiple branches — supported?", a: "Yes, with per-branch batch sheets and routing, so a Kota enquiry never gets the Indore timetable." },
    ],
    script: {
      title: "Akash Coaching Centre",
      subtitle: "AI Agent · always online",
      alt: "A parent asks about Class 12 physics coaching; the agent shares batches and fees, books a free demo class, and a nurture sequence begins.",
      steps: [
        { kind: "msg", from: "in", text: "Class 12 physics coaching ke fees kya hai?", time: "9:12 PM" },
        { kind: "msg", from: "out", typing: true, text: "Namaste! Class 12 Physics (Board + JEE basics): ₹2,800/month, Tue/Thu/Sat 6–8 PM with Verma Sir. Pehli class free demo hai — is Saturday book kar dun?", time: "9:12 PM" },
        { kind: "msg", from: "in", text: "Haan demo book kar dijiye. Beta ka naam Arjun hai", time: "9:14 PM" },
        { kind: "msg", from: "out", typing: true, text: "Done! ✅ Arjun ka free demo — Saturday 6 PM, Physics with Verma Sir. Address aur kya laana hai, sab Saturday morning bhej dunga. 📚", time: "9:14 PM" },
        { kind: "chip", icon: "user-plus", label: "Admission lead: Arjun", sub: "Demo Sat 6 PM · Sequence on" },
      ],
    },
  },
];

export function getUseCase(slug: string): UseCase | undefined {
  return useCases.find((u) => u.slug === slug);
}
