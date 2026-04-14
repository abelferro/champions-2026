import type { NextConfig } from "next";
import { landingConfig } from "./site.config";

const isProd = process.env.NODE_ENV === "production";
const resolvedBasePath = process.env.LANDING_BASE_PATH ?? landingConfig.basePath;
const basePath = isProd ? resolvedBasePath : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_LANDING_SLUG: landingConfig.slug,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
