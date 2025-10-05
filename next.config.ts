/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  output: "standalone",

  async headers() {
    return [
      {
        source: "/(.*)?",
        headers: [{ key: "X-Frame-Options", value: "DENY" }],
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.learn45.com",
        pathname: "/**",
      },
    ],
  },

  experimental: {
    optimizePackageImports: ["lucide-react", "clsx", "tailwind-merge"],
  },

  async redirects() {
    return [
      {
        source: "/sign-in",
        destination: "/",
        permanent: true,
      },
      {
        source: "/log-in",
        destination: "/",
        permanent: true,
      },
      {
        source: "/signin",
        destination: "/",
        permanent: true,
      },
      {
        source: "/login",
        destination: "/",
        permanent: true,
      },
      {
        source: "/sign-up",
        destination: "/",
        permanent: true,
      },
      {
        source: "/signup",
        destination: "/",
        permanent: true,
      },
      {
        source: "/register",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
