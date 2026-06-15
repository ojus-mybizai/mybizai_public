import type { Metadata } from "next";
import Link from "next/link";
import { Lock, Server, ShieldCheck, EyeOff, FileSearch, AlertTriangle } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Security & data handling",
  description:
    "How MyBizAI handles your business and customer data: encryption in transit and at rest, sub-processors, task-scoped agent compliance and responsible disclosure.",
  alternates: { canonical: "/security" },
};

const items = [
  {
    icon: Lock,
    title: "Encryption everywhere",
    body: "All traffic is encrypted in transit (TLS 1.2+) and data is encrypted at rest. Media files are stored on AWS S3 with server-side encryption.",
  },
  {
    icon: Server,
    title: "Where your data lives",
    body: "Application data is stored in managed cloud databases; files on AWS S3; caching on managed Redis. Access is role-restricted and logged.",
  },
  {
    icon: EyeOff,
    title: "Your data trains no one",
    body: "Conversation content is processed solely to run your business's workflows. It is not used to train public AI models and is never sold.",
  },
  {
    icon: ShieldCheck,
    title: "Task-scoped agents (Meta compliant)",
    body: "Agents are scoped to your business's defined jobs — answering, booking, following up — per Meta's 2026 business-agent policy. No general-purpose chatbots.",
  },
  {
    icon: FileSearch,
    title: "Sub-processors, named",
    body: "Azure OpenAI (AI processing), AWS S3 (file storage), Meta/WhatsApp Cloud API (message delivery), Razorpay (payments), managed Redis hosting (caching). Full list in the Privacy Policy.",
  },
  {
    icon: AlertTriangle,
    title: "Responsible disclosure",
    body: `Found a vulnerability? Email ${site.email} with subject "Security". We acknowledge within 48 hours and won't pursue good-faith researchers.`,
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Trust"
        title="Security, in plain language"
        sub="Your customer conversations are your business's most sensitive asset. Here's exactly how we treat them — no jargon, no hand-waving."
      />

      <section className="section-tight bg-bg-subtle">
        <div className="container-site">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 60}>
                <div className="bento-tile h-full">
                  <span className="icon-chip">
                    <item.icon size={22} strokeWidth={1.5} aria-hidden />
                  </span>
                  <h2 className="text-lg font-bold">{item.title}</h2>
                  <p className="text-[14.5px] text-ink-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-10 text-[14.5px] text-ink-muted">
              The complete picture — what we collect, why, retention and your rights — is in our{" "}
              <Link href="/legal/privacy-policy" className="font-semibold text-brand hover:underline">
                Privacy Policy
              </Link>
              . Data deletion requests: {site.email} or in-app.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
