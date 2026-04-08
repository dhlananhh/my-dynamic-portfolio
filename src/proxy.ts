import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: [
    "/",
    "/(en|vi)/:path*",
    // exclude api, _next, _vercel, admin, static file, manifest.json, sitemap.xml, sitemap-n.xml, images/profile-placeholder.png
    "/((?!api|_next|_vercel|admin|admin/.*|\\..*|manifest.json|sitemap\\.xml|sitemap-\\d+\\.xml|images/profile-placeholder\\.png).*)",
  ]
};
