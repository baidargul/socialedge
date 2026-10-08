import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the hot-reload cache isolated from production builds. This prevents
  // missing manifest/chunk errors when an IDE dev server is already running.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
};

export default nextConfig;
