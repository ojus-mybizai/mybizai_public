import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

/**
 * Light hero used by inner pages — handles fixed-nav clearance and the
 * shared eyebrow/title/sub layout. Optional media column on the right.
 */
export default function PageHero({
  eyebrow,
  title,
  sub,
  children,
  media,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: string;
  children?: ReactNode;
  media?: ReactNode;
}) {
  return (
    <section className="pt-[120px] pb-[clamp(48px,7vw,88px)] lg:pt-[150px]">
      <div className="container-site">
        <div className={media ? "grid items-center gap-12 lg:grid-cols-2" : "max-w-3xl"}>
          <div>
            {eyebrow && (
              <Reveal>
                <p className="eyebrow mb-5">{eyebrow}</p>
              </Reveal>
            )}
            <Reveal delay={60}>
              <h1 className="h-display" style={{ fontSize: "clamp(34px, 5.5vw, 60px)" }}>
                {title}
              </h1>
            </Reveal>
            {sub && (
              <Reveal delay={120}>
                <p className="lead mt-6">{sub}</p>
              </Reveal>
            )}
            {children && <Reveal delay={180}><div className="mt-8">{children}</div></Reveal>}
          </div>
          {media && (
            <Reveal delay={150} className="justify-self-center">
              {media}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
