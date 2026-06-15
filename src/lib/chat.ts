/**
 * Chat simulation script types — every visual moment on the site is a
 * phone frame playing one of these scripts (PRD §4.6, vision-first).
 */
export type ChatStep =
  | {
      kind: "msg";
      from: "in" | "out"; // in = customer (left, white), out = AI/business (right, green)
      text: string;
      time?: string;
      faded?: boolean; // "forgotten" pain-state styling
      typing?: boolean; // show typing indicator before this message
    }
  | { kind: "system"; text: string }
  | {
      kind: "chip"; // floating outcome card (lead captured · appointment booked …)
      icon:
        | "user-plus"
        | "calendar-check"
        | "send"
        | "bell"
        | "check"
        | "clipboard"
        | "rupee"
        | "chart"
        | "package"
        | "phone-missed";
      label: string;
      sub?: string;
    };

export interface ChatScript {
  title: string; // header name shown in the phone status bar
  subtitle?: string; // "online" / "AI Agent · online"
  steps: ChatStep[];
  /** Plain-text equivalent for screen readers (PRD §7.5). */
  alt: string;
}

/** The homepage hero script — the whole pitch in one animation (PRD §5.1). */
export const heroScript: ChatScript = {
  title: "Shree Dental Clinic",
  subtitle: "AI Agent · always online",
  alt: "A customer messages a clinic at 11:04 PM asking about teeth whitening cost. The MyBizAI agent replies instantly with the price from the clinic's catalog, offers an appointment, and books Tuesday 5 PM. A lead card and a booked-appointment card appear — captured automatically while the owner slept.",
  steps: [
    { kind: "system", text: "Today, 11:04 PM" },
    { kind: "msg", from: "in", text: "Hi, do you do teeth whitening? What's the cost?", time: "11:04 PM" },
    {
      kind: "msg",
      from: "out",
      typing: true,
      text: "Hello! Yes — teeth whitening at Shree Dental is ₹4,500 (single sitting, 45 min). Would you like to book a slot this week? 😊",
      time: "11:04 PM",
    },
    { kind: "msg", from: "in", text: "Tuesday evening possible?", time: "11:05 PM" },
    {
      kind: "msg",
      from: "out",
      typing: true,
      text: "Tuesday 5:00 PM is available. Shall I confirm it under your name?",
      time: "11:05 PM",
    },
    { kind: "msg", from: "in", text: "Yes please. I'm Priya.", time: "11:06 PM" },
    {
      kind: "msg",
      from: "out",
      typing: true,
      text: "Done, Priya! ✅ Teeth whitening — Tuesday, 5:00 PM. You'll get a reminder a day before. Anything else?",
      time: "11:06 PM",
    },
    { kind: "chip", icon: "user-plus", label: "Lead captured", sub: "Priya · Teeth whitening · Hot" },
    { kind: "chip", icon: "calendar-check", label: "Appointment booked", sub: "Tue, 5:00 PM" },
  ],
};

/** Pain-state script — what goes wrong without MyBizAI (PRD §4.6 #2). */
export const painScript: ChatScript = {
  title: "Your business number",
  subtitle: "last seen today at 9:42 PM",
  alt: "Customer messages go unanswered: a price enquiry seen at 9:42 PM but never replied to, a quote request that was forgotten, and three missed calls pile up.",
  steps: [
    { kind: "system", text: "Yesterday" },
    { kind: "msg", from: "in", text: "Hi, are you open on Sunday? Need a haircut + facial.", time: "Seen 9:42 PM", faded: true },
    { kind: "msg", from: "in", text: "Hello?? Can you share the price list?", time: "Seen 10:15 PM", faded: true },
    { kind: "system", text: "Today" },
    { kind: "msg", from: "in", text: "Ok I booked somewhere else. Thanks.", time: "11:02 AM", faded: true },
    { kind: "chip", icon: "phone-missed", label: "3 missed enquiries", sub: "₹4,200 walked away" },
  ],
};
