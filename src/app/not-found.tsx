import Link from "next/link";
import { site } from "@/lib/site";
import { WaGlyph } from "@/components/WhatsAppButton";

export default function NotFound() {
  return (
    <section className="pt-[140px] pb-[clamp(80px,12vw,160px)] text-center">
      <div className="container-site">
        <p className="mono-stat text-[15px] font-semibold text-brand">404</p>
        <h1 className="h-display mt-4" style={{ fontSize: "clamp(34px, 6vw, 64px)" }}>
          This page wandered off.
          <br />
          <span className="text-gradient">Your leads never will.</span>
        </h1>
        <p className="lead mx-auto mt-6">
          The page you&apos;re looking for doesn&apos;t exist (or moved). Here&apos;s where most people want to go:
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn btn-primary">Home</Link>
          <Link href="/pricing" className="btn btn-ghost">Pricing</Link>
          <Link href="/product" className="btn btn-ghost">Product tour</Link>
          <a href={site.waDemoLink} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
            <WaGlyph /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
