import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  typedRoutes: true,
  reactStrictMode: false,
  reactCompiler: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  cacheComponents: true,
  turbopack: {
    root: path.join(__dirname, ".."),
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**", // This allows any path under the hostname
      },
    ],
  },
  transpilePackages: ["motion"],
  cacheHandlers: {
    default: require.resolve("./cache-handlers/default-handler.js"),
    remote: require.resolve("./cache-handlers/remote-handler.js"),
  },
};

export default nextConfig;
