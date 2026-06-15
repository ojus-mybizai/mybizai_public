import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site (Netlify static hosting per PRD A1.4)
  output: "export",
  trailingSlash: false,
  images: {
    // No remote/product images in v1 — all visuals are HTML/CSS/SVG.
    unoptimized: true,
  },
};

export default nextConfig;
