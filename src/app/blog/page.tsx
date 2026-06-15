import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Blog — coming soon",
  description: "The MyBizAI blog launches soon: WhatsApp AI guides, follow-up ROI playbooks and vertical deep dives.",
  robots: { index: false, follow: false }, // noindex at launch (PRD §3.1)
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Coming soon"
        sub="Guides on WhatsApp AI for Indian SMBs, the economics of follow-ups, Meta-policy explainers and vertical playbooks — launching shortly after the site."
      >
        <Link href="/" className="btn btn-ghost">← Back home</Link>
      </PageHero>
    </>
  );
}
