import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/speedtest",
        destination: "https://speedtest.antofisalia.my.id/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
