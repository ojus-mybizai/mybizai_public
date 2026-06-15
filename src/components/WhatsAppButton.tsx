"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { X } from "lucide-react";

/** Floating "Chat on WhatsApp" — plain link, dismissible, hidden on legal pages. */
export default function WhatsAppButton() {
  const pathname = usePathname();
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    setDismissed(sessionStorage.getItem("mybizai_wa_dismissed") === "1");
  }, []);

  if (dismissed || pathname.startsWith("/legal")) return null;

  return (
    <div className="wa-float">
      <a
        href={site.waDemoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2"
        data-event="cta_whatsapp_demo"
      >
        <WaGlyph />
        <span>Chat with us</span>
      </a>
      <button
        aria-label="Dismiss WhatsApp button"
        className="-mr-1 rounded-full p-0.5 opacity-60 hover:opacity-100"
        onClick={() => {
          sessionStorage.setItem("mybizai_wa_dismissed", "1");
          setDismissed(true);
        }}
      >
        <X size={14} />
      </button>
    </div>
  );
}

export function WaGlyph({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.93.95-3.47-.22-.36a9.42 9.42 0 0 1-1.44-5.03c0-5.2 4.24-9.43 9.44-9.43a9.4 9.4 0 0 1 6.68 2.77 9.37 9.37 0 0 1 2.76 6.67c0 5.2-4.24 9.44-9.45 9.44zm8.03-17.47A11.31 11.31 0 0 0 12.03.7C5.77.7.68 5.79.68 12.05c0 2 .52 3.95 1.52 5.67L.59 23.6l6.03-1.58a11.34 11.34 0 0 0 5.42 1.38h.01c6.25 0 11.34-5.09 11.34-11.35 0-3.03-1.18-5.88-3.32-8.02z" />
    </svg>
  );
}
