import type { Metadata } from "next";
import { Globe, MessageCircle, ShoppingBag, Search } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Storefront — your catalog, online, with AI chat built in",
  description:
    "Every MyBizAI customer gets a free public storefront: your catalog and services on a clean page customers can browse and chat with — no website needed.",
  alternates: { canonical: "/storefront" },
};

const perks = [
  {
    icon: ShoppingBag,
    title: "Your catalog, beautifully public",
    body: "Products and services with photos, prices and variants — the same catalog your AI sells from, published as a clean page at your own link.",
  },
  {
    icon: MessageCircle,
    title: "Chat starts in one tap",
    body: "Every storefront visitor is one tap from a WhatsApp conversation with your AI agent. Browsing becomes talking; talking becomes a lead.",
  },
  {
    icon: Search,
    title: "Found on Google",
    body: "A real, indexable page for your business — often the first proper web presence an SMB gets. Share it on Instagram bios, QR codes, visiting cards.",
  },
  {
    icon: Globe,
    title: "No website project required",
    body: "No domain to buy, no developer to chase. Update your catalog in MyBizAI and the storefront updates itself.",
  },
];

export default function StorefrontPage() {
  return (
    <>
      <PageHero
        eyebrow="Free with every plan"
        title={
          <>
            A storefront your customers can <span className="text-gradient">talk to</span>
          </>
        }
        sub="Every MyBizAI business gets a free public storefront — your catalog on a clean, shareable page, with your AI agent one tap away. It's how many of our customers get their first website, and their next hundred leads."
      >
        <div className="flex flex-wrap gap-4">
          <a href={site.signupUrl} className="btn btn-primary" data-event="cta_start_free">
            Claim your storefront
          </a>
        </div>
      </PageHero>

      <section className="section bg-bg-subtle">
        <div className="container-site">
          <div className="grid gap-6 sm:grid-cols-2">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 60}>
                <div className="bento-tile h-full">
                  <span className="icon-chip">
                    <p.icon size={22} strokeWidth={1.5} aria-hidden />
                  </span>
                  <h2 className="text-lg font-bold">{p.title}</h2>
                  <p className="text-[15px] text-ink-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Claim your storefront tonight." sub="Free on Growth and above · live in minutes" />
    </>
  );
}
