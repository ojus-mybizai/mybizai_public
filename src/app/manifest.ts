import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MyBizAI — AI Business OS on WhatsApp",
    short_name: "MyBizAI",
    description:
      "AI agents that answer customers, capture leads, book appointments and run your team — on WhatsApp.",
    start_url: "/",
    display: "browser",
    background_color: "#f8fafc",
    theme_color: "#0b0b14",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
