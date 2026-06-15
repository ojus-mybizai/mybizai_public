import { site } from "@/lib/site";
import Reveal from "@/components/Reveal";
import { WaGlyph } from "@/components/WhatsAppButton";

/** Dark final CTA band — shared across pages (PRD §6). */
export default function CTASection({
  title = "Put your business on autopilot tonight.",
  sub = "15-day free trial · Full access · No card required",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="section-dark section">
      <div className="glow-spot" style={{ top: "-200px", left: "50%", transform: "translateX(-50%)" }} />
      <div className="container-site relative text-center">
        <Reveal>
          <h2 className="h-section mx-auto max-w-3xl">{title}</h2>
        </Reveal>
        <Reveal delay={60}>
          <p className="mx-auto mt-4 max-w-xl text-hero-muted">{sub}</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
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
        </Reveal>
      </div>
    </section>
  );
}
