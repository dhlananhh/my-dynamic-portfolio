import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { withPayload } from "@payloadcms/next/withPayload";

const withNextIntl = createNextIntlPlugin(
  "./src/i18n/request.ts"
);

const nextConfig: NextConfig = {
  /* config options here */
};

export default withPayload(withNextIntl(nextConfig));
