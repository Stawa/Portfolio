import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://avatars.githubusercontent.com/u/69102292?v=4")],
  },
};

export default nextConfig;
