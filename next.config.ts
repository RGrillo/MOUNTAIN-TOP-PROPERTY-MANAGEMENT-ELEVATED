import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  allowedDevOrigins: ["pv-f29340e20aea-5bada10e-21e7-4468-a72b-20561d608706.style.dev"],
};

export default nextConfig;
