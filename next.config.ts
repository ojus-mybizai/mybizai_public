import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // required for export if you use next/image
  // ...keep any existing config
};
export default nextConfig;
