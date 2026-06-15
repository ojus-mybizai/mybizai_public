"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { site, navProduct, navUseCases } from "@/lib/site";
import { Icon } from "@/components/icons";
import AnnouncementBar from "@/components/AnnouncementBar";

const featureIcons: Record<string, string> = {
  "/features/ai-agents": "bot",
  "/features/conversations": "messages",
  "/features/crm": "users",
  "/features/follow-ups": "repeat",
  "/features/appointments-orders": "calendar",
  "/features/work-tasks": "clipboard",
  "/features/datasheets": "table",
  "/features/analytics": "chart",
};

const useCaseIcons: Record<string, string> = {
  "/for/clinics": "stethoscope",
  "/for/salons": "scissors",
  "/for/retail": "store",
  "/for/services": "wrench",
  "/for/coaching": "graduation",
};

function Wordmark({ light }: { light: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="MyBizAI — home">
      <span
        className="flex h-9 w-9 items-center justify-center rounded-xl text-[17px] font-extrabold text-white"
        style={{ background: "var(--brand)", fontFamily: "var(--font-bricolage)" }}
      >
        M
      </span>
      <span
        className="text-[19px] font-bold tracking-tight"
        style={{ fontFamily: "var(--font-bricolage)", color: light ? "var(--hero-ink)" : "var(--ink)" }}
      >
        MyBiz<span style={{ color: light ? "var(--glow)" : "var(--brand)" }}>AI</span>
      </span>
    </Link>
  );
}

export default function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<"product" | "usecases" | null>(null);
  const [sheet, setSheet] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const darkHero = pathname === "/"; // transparent-over-dark only on home

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menus on route change
  useEffect(() => {
    setSheet(false);
    setOpen(null);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = sheet ? "hidden" : "";
  }, [sheet]);

  const lightText = darkHero && !scrolled;

  const enter = (which: "product" | "usecases") => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(which);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpen(null), 150);
  };

  return (
    <header className={`nav-shell ${scrolled ? "nav-scrolled" : ""} ${darkHero ? "nav-on-dark" : ""}`}>
      <AnnouncementBar />
      <nav className="container-site" aria-label="Main">
        <div
          className="flex items-center justify-between gap-4 transition-[padding] duration-300"
          style={{ paddingBlock: scrolled ? 10 : 18 }}
        >
          <Wordmark light={lightText} />

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            <div className="relative" onMouseEnter={() => enter("product")} onMouseLeave={leave}>
              <button
                className="nav-link"
                aria-expanded={open === "product"}
                aria-haspopup="true"
                onClick={() => setOpen(open === "product" ? null : "product")}
              >
                Product <ChevronDown size={14} aria-hidden />
              </button>
              <div className={`nav-dropdown ${open === "product" ? "open" : ""}`} role="menu">
                <Link href="/product" className="nav-dd-item col-span-2" role="menuitem">
                  <span className="icon-chip" style={{ width: 36, height: 36 }}>
                    <Icon name="bot" size={18} />
                  </span>
                  <span>
                    <span className="block text-[14.5px] font-semibold text-ink">The full OS tour</span>
                    <span className="block text-[13px] text-ink-muted">How the whole loop works, end to end</span>
                  </span>
                </Link>
                {navProduct.map((item) => (
                  <Link key={item.href} href={item.href} className="nav-dd-item" role="menuitem">
                    <span className="icon-chip" style={{ width: 36, height: 36 }}>
                      <Icon name={featureIcons[item.href]} size={18} />
                    </span>
                    <span>
                      <span className="block text-[14.5px] font-semibold text-ink">{item.label}</span>
                      <span className="block text-[13px] text-ink-muted">{item.desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative" onMouseEnter={() => enter("usecases")} onMouseLeave={leave}>
              <button
                className="nav-link"
                aria-expanded={open === "usecases"}
                aria-haspopup="true"
                onClick={() => setOpen(open === "usecases" ? null : "usecases")}
              >
                Use cases <ChevronDown size={14} aria-hidden />
              </button>
              <div
                className={`nav-dropdown ${open === "usecases" ? "open" : ""}`}
                style={{ minWidth: 360, gridTemplateColumns: "1fr" }}
                role="menu"
              >
                {navUseCases.map((item) => (
                  <Link key={item.href} href={item.href} className="nav-dd-item" role="menuitem">
                    <span className="icon-chip" style={{ width: 36, height: 36 }}>
                      <Icon name={useCaseIcons[item.href]} size={18} />
                    </span>
                    <span>
                      <span className="block text-[14.5px] font-semibold text-ink">{item.label}</span>
                      <span className="block text-[13px] text-ink-muted">{item.desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/pricing" className="nav-link">Pricing</Link>
            <Link href="/compare/meta-business-agent" className="nav-link">vs Meta</Link>
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={site.loginUrl} className="nav-link" data-event="nav_login">Login</a>
            <a href={site.signupUrl} className="btn btn-primary btn-sm" data-event="cta_start_free">
              {site.ctaPrimary}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 -mr-2"
            style={{ color: lightText ? "var(--hero-ink)" : "var(--ink)" }}
            aria-label={sheet ? "Close menu" : "Open menu"}
            aria-expanded={sheet}
            onClick={() => setSheet(!sheet)}
          >
            {sheet ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen sheet (PRD §5 scaffold) */}
      {sheet && (
        <div className="fixed inset-0 top-[64px] z-40 flex flex-col bg-white lg:hidden" role="dialog" aria-label="Menu">
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <p className="mb-2 text-[12px] font-semibold uppercase tracking-wider text-ink-muted">Product</p>
            <Link href="/product" className="block py-2.5 text-[17px] font-semibold">The OS tour</Link>
            {navProduct.map((i) => (
              <Link key={i.href} href={i.href} className="block py-2.5 text-[17px] font-medium text-slate-700">
                {i.label}
              </Link>
            ))}
            <p className="mb-2 mt-6 text-[12px] font-semibold uppercase tracking-wider text-ink-muted">Use cases</p>
            {navUseCases.map((i) => (
              <Link key={i.href} href={i.href} className="block py-2.5 text-[17px] font-medium text-slate-700">
                {i.label}
              </Link>
            ))}
            <p className="mb-2 mt-6 text-[12px] font-semibold uppercase tracking-wider text-ink-muted">More</p>
            <Link href="/pricing" className="block py-2.5 text-[17px] font-medium text-slate-700">Pricing</Link>
            <Link href="/compare/meta-business-agent" className="block py-2.5 text-[17px] font-medium text-slate-700">MyBizAI vs Meta</Link>
            <Link href="/demo" className="block py-2.5 text-[17px] font-medium text-slate-700">Book a demo</Link>
            <Link href="/about" className="block py-2.5 text-[17px] font-medium text-slate-700">About</Link>
          </div>
          {/* CTA pinned bottom */}
          <div className="border-t border-line bg-white px-6 py-4 pb-[max(16px,env(safe-area-inset-bottom))]">
            <div className="flex gap-3">
              <a href={site.loginUrl} className="btn btn-ghost flex-1">Login</a>
              <a href={site.signupUrl} className="btn btn-primary flex-1" data-event="cta_start_free">
                {site.ctaPrimary}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
