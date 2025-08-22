const fs = require('fs');
const path = require('path');

// List of pages
const pages = [
  { url: 'https://quicksavevid.com', changefreq: 'daily', priority: 1 },
  { url: 'https://quicksavevid.com/how-it-works', changefreq: 'monthly', priority: 0.9 },
  { url: 'https://quicksavevid.com/faq', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://quicksavevid.com/features', changefreq: 'monthly', priority: 0.8 },
];

// Generate XML sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`
  )
  .join('')}
</urlset>
`;

// Write sitemap.xml to root
fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), sitemap, 'utf-8');
console.log('✅ sitemap.xml generated!');
