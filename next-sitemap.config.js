// [next-sitemap - npm](https://www.npmjs.com/package/next-sitemap#custom-config-file)
module.exports = {
  siteUrl: 'https://popote.app',
  generateRobotsTxt: true, // (optional)
  // ...other options
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 500,
  // exclude: ['/protected-page', '/awesome/secret-page'],
}