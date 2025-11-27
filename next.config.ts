import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "readdy.ai",
        pathname: "/api/**",
      },
    ],
  },
};

export default nextConfig;
