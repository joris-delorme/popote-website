// [next-sitemap - npm](https://www.npmjs.com/package/next-sitemap#custom-config-file)
module.exports = {
  siteUrl: 'https://www.popote.app',
  generateRobotsTxt: true, // (optional)
  // ...other options
  changefreq: 'weekly',
  priority: 0.5,
  sitemapSize: 5000,
  exclude: ['/app-store'],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: 'daily',
      priority: 0.9,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
//   additionalPaths: async (config) => [
//     await config.transform(config, '/recettes'),
//   ],
// Additional paths to include
//   additionalPaths: async (config) => {
//     const fs = require('fs');
//     const path = require('path');
//
//     // Assuming that pages are dynamically generated or present in a folder
//     const recettesPath = path.join(__dirname, 'recettes/');
//     const recettesFiles = fs.readdirSync(recettesPath).filter((file) => file.endsWith('.js'));
//
//     return recettesFiles.map((file) => ({
//       loc: `/recettes/${file.replace('.js', '')}`,
//       changefreq: 'monthly',
//     }));
//   },
}
