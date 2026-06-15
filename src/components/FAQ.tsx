import Reveal from "@/components/Reveal";

export interface FaqItem {
  q: string;
  a: string;
}

/**
 * Zero-JS accordion (native details/summary) + FAQPage JSON-LD emitter.
 * Server-rendered: all answers crawlable (PRD §7.3).
 */
export default function FAQ({ items, title = "Frequently asked questions" }: { items: FaqItem[]; title?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };

  return (
    <section className="section-tight">
      <div className="container-site">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <Reveal>
          <h2 className="h-section mb-8">{title}</h2>
        </Reveal>
        <div className="grid gap-3 lg:max-w-3xl">
          {items.map((item, i) => (
            <Reveal key={item.q} delay={i * 60}>
              <details className="faq-item">
                <summary>{item.q}</summary>
                <div className="faq-body">{item.a}</div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
