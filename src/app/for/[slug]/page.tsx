import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { useCases, getUseCase } from "@/lib/content/use-cases";
import PageHero from "@/components/PageHero";
import PhoneChatSim from "@/components/PhoneChatSim";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { site } from "@/lib/site";
import { WaGlyph } from "@/components/WhatsAppButton";

export function generateStaticParams() {
  return useCases.map((u) => ({ slug: u.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const u = getUseCase(slug);
  if (!u) return {};
  return {
    title: u.seoTitle,
    description: u.seoDescription,
    alternates: { canonical: `/for/${u.slug}` },
  };
}

export default async function UseCasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const useCase = getUseCase(slug);
  if (!useCase) notFound();

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
      { "@type": "ListItem", position: 2, name: useCase.name, item: `${site.domain}/for/${useCase.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <PageHero
        eyebrow={`MyBizAI for ${useCase.name}`}
        title={useCase.heroTitle}
        sub={useCase.heroSub}
        media={<PhoneChatSim script={useCase.script} />}
      >
        <div className="flex flex-wrap gap-4">
          <a href={site.signupUrl} className="btn btn-primary" data-event="cta_start_free">{site.ctaPrimary}</a>
          <a href={site.waDemoLink} target="_blank" rel="noopener noreferrer" className="btn btn-wa" data-event="cta_whatsapp_demo">
            <WaGlyph /> {site.ctaSecondary}
          </a>
        </div>
      </PageHero>

      {/* Vertical pains */}
      <section className="section-tight bg-bg-subtle">
        <div className="container-site">
          <div className="grid gap-6 md:grid-cols-3">
            {useCase.pains.map((p, i) => (
              <Reveal key={p.label} delay={i * 60}>
                <div className="bento-tile h-full">
                  <p className="mono-stat text-4xl font-semibold" style={{ color: "var(--brand)" }}>{p.stat}</p>
                  <p className="text-[15px] text-ink-muted">{p.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-[12.5px] text-ink-muted">Industry patterns — not invented internal data.</p>
        </div>
      </section>

      {/* Mapped feature set */}
      <section className="section">
        <div className="container-site">
          <Reveal>
            <h2 className="h-section max-w-2xl">What MyBizAI runs for {useCase.name.toLowerCase()}</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {useCase.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 60}>
                <Link href={f.href} className="bento-tile h-full group">
                  <h3 className="text-lg font-bold">{f.title}</h3>
                  <p className="text-[14.5px] text-ink-muted">{f.desc}</p>
                  <span className="mt-auto inline-flex items-center gap-1 text-[14px] font-semibold text-brand">
                    Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={useCase.faq} title={`${useCase.name} — common questions`} />
      <CTASection title={`Put your ${useCase.name.toLowerCase().replace(" & ", " or ")} business on autopilot.`} />
    </>
  );
}
