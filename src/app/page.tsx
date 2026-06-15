import Link from "next/link";
import {
  ArrowRight,
  Plug,
  BookOpenText,
  Rocket,
  ShieldCheck,
  Lock,
  BadgeCheck,
  MessageCircle,
  Instagram,
  Facebook,
  Send,
  MessageSquareText,
  Globe,
  Check,
  X as XIcon,
} from "lucide-react";
import { site } from "@/lib/site";
import { features } from "@/lib/content/features";
import { useCases } from "@/lib/content/use-cases";
import { heroScript, painScript } from "@/lib/chat";
import PhoneChatSim from "@/components/PhoneChatSim";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { Icon } from "@/components/icons";
import { WaGlyph } from "@/components/WhatsAppButton";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemStrip />
      <OsBento />
      <HowItWorks />
      <MetaObjection />
      <ChannelsBand />
      <UseCaseRail />
      <TrustBand />
      <CTASection />
    </>
  );
}

/* 1 — Hero (dark): the whole pitch in one animation (PRD §5.1) */
function Hero() {
  return (
    <section className="section-dark relative">
      <div className="glow-spot" style={{ top: "-160px", right: "-120px" }} />
      <div className="glow-spot" style={{ bottom: "-260px", left: "-180px", opacity: 0.6 }} />
      <div className="container-site relative pt-[140px] pb-[clamp(64px,8vw,110px)] lg:pt-[170px]">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">AI Business OS for SMBs · Made for India 🇮🇳</p>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="h-display">
                Your business, <span className="text-gradient">run by AI</span> — on WhatsApp.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="lead mt-7">
                MyBizAI answers customers, captures every lead, books appointments, chases
                follow-ups and assigns work to your team. 24×7. One system.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a href={site.signupUrl} className="btn btn-primary" data-event="cta_start_free">
                  {site.ctaPrimary}
                </a>
                <a
                  href={site.waDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-wa"
                  data-event="cta_whatsapp_demo"
                >
                  <WaGlyph />
                  {site.ctaSecondary}
                </a>
              </div>
              <p className="mt-5 text-[13.5px] text-hero-muted">
                15-day free trial · No card required · Setup in one evening
              </p>
            </Reveal>
          </div>
          <Reveal delay={200} className="justify-self-center">
            <PhoneChatSim script={heroScript} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* 2 — Problem strip: three pains, honestly framed (PRD §5.1.2) */
function ProblemStrip() {
  const pains = [
    {
      stat: "62%",
      label: "of customer messages arrive when you're closed, busy or asleep",
      title: "Nobody answers after hours",
    },
    {
      stat: "5 min",
      label: "is how long today's buyer waits before messaging your competitor",
      title: "Leads go cold in your DMs",
    },
    {
      stat: "0",
      label: "follow-ups happen when they live only in the owner's head",
      title: "Follow-ups live in your head",
    },
  ];
  return (
    <section className="section">
      <div className="container-site">
        <Reveal>
          <h2 className="h-section max-w-2xl">
            Your customers moved to chat. Your business didn&apos;t.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pains.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <div className="bento-tile h-full">
                <p className="mono-stat text-4xl font-semibold" style={{ color: "var(--brand)" }}>
                  {p.stat}
                </p>
                <h3 className="text-lg font-bold">{p.title}</h3>
                <p className="text-[15px] text-ink-muted">{p.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-[12.5px] text-ink-muted">
          Industry patterns every SMB owner recognises — not our invented numbers.
        </p>
      </div>
    </section>
  );
}

/* 3 — The OS bento: 8 modules (PRD §5.1.3) */
function OsBento() {
  return (
    <section className="section bg-bg-subtle">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow mb-5">The operating system</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="h-section max-w-2xl">
            One calm system absorbs the chaos
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="lead mt-4">
            Eight modules that work as one. Each conversation flows through all of them — automatically.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.slug} delay={(i % 4) * 60}>
              <Link href={`/features/${f.slug}`} className="bento-tile h-full group">
                <span className="icon-chip">
                  <Icon name={f.icon} />
                </span>
                <h3 className="text-[17px] font-bold">{f.name}</h3>
                <p className="text-[14.5px] text-ink-muted">{f.claim}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-[14px] font-semibold text-brand">
                  Explore <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 4 — How it works: 3 steps (PRD §5.1.4) */
function HowItWorks() {
  const steps = [
    {
      icon: Plug,
      title: "Connect WhatsApp",
      body: "Link your business number to MyBizAI in minutes. Instagram, Telegram and more can join later.",
    },
    {
      icon: BookOpenText,
      title: "Teach it your business",
      body: "Add your catalog, price list, timings and policies. Your agent learns your business — not the internet's.",
    },
    {
      icon: Rocket,
      title: "It starts working",
      body: "From the next message onward: answers, leads, bookings, follow-ups. You watch it happen from one dashboard.",
    },
  ];
  return (
    <section className="section">
      <div className="container-site">
        <Reveal>
          <h2 className="h-section">Live by tonight. Really.</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="relative h-full rounded-[20px] border border-line bg-white p-7">
                <span className="mono-stat absolute right-6 top-5 text-5xl font-semibold text-slate-100 select-none" aria-hidden>
                  {i + 1}
                </span>
                <span className="icon-chip mb-4">
                  <s.icon size={22} strokeWidth={1.5} aria-hidden />
                </span>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-[15px] text-ink-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 5 — "Isn't Meta's agent free?" — objection on the homepage, deliberately (PRD §5.1.5) */
function MetaObjection() {
  const rows: [string, boolean, boolean][] = [
    ["AI replies to customers", true, true],
    ["Lead database & pipeline", true, false],
    ["Automatic follow-ups & nurture", true, false],
    ["Appointments, orders & catalog", true, false],
    ["Tasks for your staff on WhatsApp", true, false],
  ];
  return (
    <section className="section bg-bg-subtle">
      <div className="container-site">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="eyebrow mb-5">The honest comparison</p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="h-section">&ldquo;Isn&apos;t Meta&apos;s AI agent free?&rdquo;</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="lead mt-5">
                It is — and it&apos;s genuinely useful. Meta&apos;s free agent <em>replies</em>.
                MyBizAI <strong>runs the business</strong>: the reply becomes a lead, the lead
                becomes a booking, the silence becomes a follow-up, the job lands with your staff.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <Link
                href="/compare/meta-business-agent"
                className="btn btn-ghost mt-8"
                data-event="compare_view"
              >
                See the full comparison <ArrowRight size={16} aria-hidden />
              </Link>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div className="card overflow-hidden">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th scope="col">Capability</th>
                    <th scope="col" className="text-brand">MyBizAI</th>
                    <th scope="col">Meta&apos;s agent</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(([cap, us, them]) => (
                    <tr key={cap}>
                      <td className="font-medium">{cap}</td>
                      <td>
                        {us ? <Check size={18} className="tick-yes" aria-label="Yes" /> : <XIcon size={18} className="tick-no" aria-label="No" />}
                      </td>
                      <td>
                        {them ? <Check size={18} className="tick-yes" aria-label="Yes" /> : <XIcon size={18} className="tick-no" aria-label="No" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* 6 — Channels band (PRD §5.1.6) */
function ChannelsBand() {
  const channels = [
    { icon: MessageCircle, label: "WhatsApp" },
    { icon: Instagram, label: "Instagram" },
    { icon: Facebook, label: "Messenger" },
    { icon: Send, label: "Telegram" },
    { icon: MessageSquareText, label: "SMS" },
    { icon: Globe, label: "Web chat" },
  ];
  return (
    <section className="section-tight">
      <div className="container-site text-center">
        <Reveal>
          <h2 className="h-sub font-bold">One inbox. Every channel your customers use.</h2>
        </Reveal>
        <Reveal delay={80}>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {channels.map((c) => (
              <li key={c.label} className="flex items-center gap-2.5 text-[15px] font-semibold text-ink-muted">
                <c.icon size={22} strokeWidth={1.5} className="text-brand" aria-hidden />
                {c.label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* 7 — Use-case rail (PRD §5.1.7) */
function UseCaseRail() {
  return (
    <section className="section bg-bg-subtle">
      <div className="container-site">
        <Reveal>
          <h2 className="h-section">Built for businesses like yours</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {useCases.map((u, i) => (
            <Reveal key={u.slug} delay={i * 50}>
              <Link href={`/for/${u.slug}`} className="bento-tile h-full group">
                <span className="icon-chip">
                  <Icon name={u.icon} />
                </span>
                <h3 className="text-[16px] font-bold leading-snug">{u.name}</h3>
                <p className="text-[13.5px] text-ink-muted">{u.heroTitle}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-[13.5px] font-semibold text-brand">
                  Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 8 — Trust band (PRD §5.1.8) */
function TrustBand() {
  const items = [
    {
      icon: Lock,
      title: "Your data stays yours",
      body: "Encrypted in transit and at rest. Used only to run your business — never to train public models.",
    },
    {
      icon: BadgeCheck,
      title: "Meta-policy compliant",
      body: "Task-scoped agents by design, exactly as Meta's 2026 business-agent policy requires.",
    },
    {
      icon: ShieldCheck,
      title: "Built on official APIs",
      body: "WhatsApp Business Platform (Cloud API) and Razorpay-powered billing. No grey-market hacks.",
    },
  ];
  return (
    <section className="section-tight">
      <div className="container-site">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <Reveal key={t.title} delay={i * 60}>
              <div className="flex gap-4">
                <span className="icon-chip">
                  <t.icon size={22} strokeWidth={1.5} aria-hidden />
                </span>
                <div>
                  <h3 className="font-bold">{t.title}</h3>
                  <p className="mt-1 text-[14.5px] text-ink-muted">{t.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="mt-8 text-[14px]">
            <Link href="/security" className="font-semibold text-brand hover:underline">
              Read our security &amp; data-handling overview →
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
