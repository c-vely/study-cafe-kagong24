import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/study-cafe",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
