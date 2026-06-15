import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";
import { WaGlyph } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contact us",
  description:
    "Reach MyBizAI Solutions LLP — WhatsApp, email or the form. Registered address: Ward No. 8, Beach Para Sankra, Nagri, Dhamtari, Chhattisgarh 493778.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to us — a human or our AI, your pick"
        sub="Fastest: message us on WhatsApp and our own MyBizAI agent answers instantly (we use what we sell). The form and email work too."
      />

      <section className="pb-[clamp(64px,9vw,120px)]">
        <div className="container-site grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="card p-7 sm:p-9">
              <h2 className="mb-6 text-xl font-bold">Send a message</h2>
              <ContactForm intent="contact" />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="space-y-6">
              <a
                href={site.waDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa w-full"
                data-event="cta_whatsapp_demo"
              >
                <WaGlyph /> Chat on WhatsApp — instant reply
              </a>

              <div className="card space-y-5 p-7">
                <div className="flex items-start gap-3.5">
                  <span className="icon-chip" style={{ width: 38, height: 38 }}>
                    <Mail size={18} strokeWidth={1.5} aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-bold">Email</h3>
                    <a href={`mailto:${site.email}`} className="text-[14.5px] text-brand hover:underline">
                      {site.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <span className="icon-chip" style={{ width: 38, height: 38 }}>
                    <Phone size={18} strokeWidth={1.5} aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-bold">Phone / WhatsApp</h3>
                    <a href={site.phoneHref} className="text-[14.5px] text-brand hover:underline">
                      {site.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <span className="icon-chip" style={{ width: 38, height: 38 }}>
                    <MapPin size={18} strokeWidth={1.5} aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-[15px] font-bold">Registered office</h3>
                    <p className="text-[14.5px] text-ink-muted">
                      {site.legalEntity}
                      <br />
                      {site.address}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-[13px] text-ink-muted">
                For privacy or data-deletion requests, email {site.email} with the subject
                &ldquo;Data request&rdquo; — details in our Privacy Policy.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
