import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // existing config options
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"], // add this section
  },
};

export default nextConfig;