import type { ReactNode } from "react";

/** Shared scaffold for legal pages — calm prose layout, nav clearance. */
export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="pt-[110px] pb-[clamp(64px,9vw,120px)] lg:pt-[140px]">
      <div className="container-site">
        <div className="prose-legal">{children}</div>
      </div>
    </div>
  );
}
