import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { features, getFeature } from "@/lib/content/features";
import PageHero from "@/components/PageHero";
import PhoneChatSim from "@/components/PhoneChatSim";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { Icon } from "@/components/icons";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return features.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const f = getFeature(slug);
  if (!f) return {};
  return {
    title: `${f.name} — ${f.claim}`,
    description: f.heroSub,
    alternates: { canonical: `/features/${f.slug}` },
  };
}

export default async function FeaturePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const feature = getFeature(slug);
  if (!feature) notFound();

  const related = feature.related
    .map((s) => features.find((f) => f.slug === s))
    .filter(Boolean);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.domain },
      { "@type": "ListItem", position: 2, name: "Product", item: `${site.domain}/product` },
      { "@type": "ListItem", position: 3, name: feature.name, item: `${site.domain}/features/${feature.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <PageHero
        eyebrow={feature.name}
        title={feature.heroTitle}
        sub={feature.heroSub}
        media={<PhoneChatSim script={feature.script} />}
      >
        <div className="flex flex-wrap gap-4">
          <a href={site.signupUrl} className="btn btn-primary" data-event="cta_start_free">{site.ctaPrimary}</a>
          <a href={site.waDemoLink} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" data-event="cta_whatsapp_demo">
            {site.ctaSecondary}
          </a>
        </div>
      </PageHero>

      {/* Capability blocks */}
      <section className="section bg-bg-subtle">
        <div className="container-site">
          <div className="grid gap-6 lg:grid-cols-2">
            {feature.blocks.map((block, i) => (
              <Reveal key={block.title} delay={(i % 2) * 60}>
                <div className="bento-tile h-full">
                  <h2 className="text-xl font-bold">{block.title}</h2>
                  <p className="text-[15px] leading-relaxed text-ink-muted">{block.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {feature.callout && (
            <Reveal delay={120}>
              <div
                className="mt-8 flex flex-col gap-3 rounded-[20px] border p-7 sm:flex-row sm:items-start sm:gap-5"
                style={{ borderColor: "var(--brand)", background: "var(--brand-soft)" }}
              >
                <span className="icon-chip" style={{ background: "white" }}>
                  <ShieldCheck size={22} strokeWidth={1.5} aria-hidden />
                </span>
                <div>
                  <h2 className="text-lg font-bold">{feature.callout.title}</h2>
                  <p className="mt-1.5 text-[15px] text-slate-700">{feature.callout.body}</p>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* Works with + use-case callout */}
      <section className="section-tight">
        <div className="container-site">
          <Reveal>
            <h2 className="h-sub font-bold">Works with</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {related.map(
              (r, i) =>
                r && (
                  <Reveal key={r.slug} delay={i * 60}>
                    <Link href={`/features/${r.slug}`} className="bento-tile h-full group">
                      <span className="icon-chip"><Icon name={r.icon} /></span>
                      <h3 className="font-bold">{r.name}</h3>
                      <p className="text-[14px] text-ink-muted">{r.claim}</p>
                      <span className="mt-auto inline-flex items-center gap-1 text-[14px] font-semibold text-brand">
                        Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                      </span>
                    </Link>
                  </Reveal>
                )
            )}
          </div>

          <Reveal delay={150}>
            <div className="card mt-10 flex flex-col items-start gap-4 p-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-[15.5px]">{feature.useCase.text}</p>
              <Link href={feature.useCase.href} className="btn btn-ghost btn-sm shrink-0">
                {feature.useCase.label} <ArrowRight size={15} aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQ items={feature.faq} />
      <CTASection />
    </>
  );
}
