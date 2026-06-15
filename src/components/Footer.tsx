import Link from "next/link";
import { site, navProduct, navUseCases } from "@/lib/site";
import { Mail, MapPin, Phone } from "lucide-react";

const company = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/demo", label: "Book a demo" },
  { href: "/storefront", label: "Free storefront" },
  { href: "/security", label: "Security" },
  { href: "/compare/meta-business-agent", label: "vs Meta Business Agent" },
  { href: "/blog", label: "Blog" },
];

const legal = [
  { href: "/legal/privacy-policy", label: "Privacy Policy" },
  { href: "/legal/terms", label: "Terms & Conditions" },
  { href: "/legal/refund-policy", label: "Refund & Cancellation" },
  { href: "/legal/cookie-policy", label: "Cookie Policy" },
];

export default function Footer() {
  return (
    <footer className="section-dark" style={{ borderTop: "1px solid var(--hero-line)" }}>
      <div className="container-site py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          {/* Brand + contact */}
          <div>
            <div className="flex items-center gap-2">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-xl text-[17px] font-extrabold text-white"
                style={{ background: "var(--brand)", fontFamily: "var(--font-bricolage)" }}
              >
                M
              </span>
              <span className="text-[19px] font-bold tracking-tight" style={{ fontFamily: "var(--font-bricolage)" }}>
                MyBiz<span style={{ color: "var(--glow)" }}>AI</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-hero-muted">
              The AI business operating system for Indian SMBs. Answers customers, captures leads, books
              appointments, chases follow-ups and runs your team — on WhatsApp, 24×7.
            </p>
            <ul className="mt-6 space-y-3 text-[13.5px] text-hero-muted">
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="mt-0.5 shrink-0" aria-hidden />
                <a href={`mailto:${site.email}`} className="hover:text-hero-ink">{site.email}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="mt-0.5 shrink-0" aria-hidden />
                <a href={site.phoneHref} className="hover:text-hero-ink">{site.phone}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0" aria-hidden />
                <span>
                  {site.legalEntity}
                  <br />
                  {site.address}
                </span>
              </li>
            </ul>
          </div>

          <FooterCol title="Product" links={[{ href: "/product", label: "Overview" }, ...navProduct.map((i) => ({ href: i.href, label: i.label })), { href: "/pricing", label: "Pricing" }]} />
          <FooterCol title="Use cases" links={navUseCases.map((i) => ({ href: i.href, label: i.label }))} />
          <FooterCol title="Company" links={company} />
          <FooterCol title="Legal" links={legal} />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t pt-8 text-[13px] text-hero-muted sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: "var(--hero-line)" }}>
          <p>
            © {new Date().getFullYear()} {site.legalEntity}. All rights reserved.
          </p>
          <p>
            Made in India 🇮🇳 · Built on the WhatsApp Business Platform
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <nav aria-label={title}>
      <h3 className="text-[13px] font-semibold uppercase tracking-wider text-hero-ink">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link href={l.href} className="text-[14px] text-hero-muted transition-colors hover:text-hero-ink">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
