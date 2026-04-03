/** @type {import("next-sitemap").IConfig} */
module.exports = {
  siteUrl: "https://dhlananh-dev-portfolio.vercel.app/",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.8,
  transform: async (config, path) => {
    let priority = config.priority
    let changefreq = config.changefreq
    if (path === "/") {
      priority = 1.0
      changefreq = "daily"
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
};
