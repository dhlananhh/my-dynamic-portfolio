import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { withPayload } from "@payloadcms/next/withPayload";
import createMDX from "@next/mdx";


// Plugin for i18n
const withNextIntl = createNextIntlPlugin(
  "./src/i18n/request.ts"
);

// Plugin for MDX
const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});

// Next.js configuration
const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: [
    "js",
    "jsx",
    "ts",
    "tsx",
    "md",
    "mdx",
  ],
};

// Export configuration with plugins
export default withPayload(withNextIntl(withMDX((nextConfig))));
