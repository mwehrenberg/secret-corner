import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const srcImagesDir = path.join(rootDir, 'src', 'images');

const BASE_URL = 'https://www.secretcornerhostel.com';
const OG_VERSION = '2';

const routes = [
  {
    path: '',
    title: 'Secret Corner Boutique Stay Chiang Rai | Book Direct & Save',
    description: 'Clean. Comfortable. Calm. Centrally located.',
    ogImage: { src: 'architecture/IMG_0282.JPG', dest: 'og/home.jpeg' },
  },
  {
    path: 'about',
    title: 'About Secret Corner | Boutique Stay in Chiang Rai',
    description: "The story behind Secret Corner — a family owned business in the heart of Chiang Rai.",
    ogImage: { src: 'architecture/IMG_0282.JPG', dest: 'og/about.jpeg' },
  },
  {
    path: 'gallery',
    title: 'Photos | Secret Corner Boutique Stay Chiang Rai',
    description: 'See our clean modern dorms, rooftop bar & coworking space.',
    ogImage: { src: 'about/aboutDorm.jpeg', dest: 'og/gallery.jpeg' },
  },
  {
    path: 'facilities',
    title: 'Rooms & Facilities | Clean Comfy Affordable Dorms',
    description: 'Support our small business & get our best direct rate.',
    ogImage: { src: 'attachments/xroom1.1.jpeg', dest: 'og/facilities.jpeg' },
  },
  {
    path: 'activities',
    title: 'Activities | Secret Corner Boutique Stay Chiang Rai',
    description: 'Join weekly hostel activities: Secret Supper Night, Morning Walking Tour, Global Card Game Night and more. Social hostel vibes in Chiang Rai.',
    ogImage: { src: 'architecture/IMG_0295.JPG', dest: 'og/activities.png' },
  },
  {
    path: 'localAttractions',
    title: 'Local Attractions | Secret Corner Boutique Stay Chiang Rai',
    description: 'Discover the best things to do in Chiang Rai — with the help of our team.',
    ogImage: { src: 'activities/slowboat.webp', dest: 'og/local-attractions.webp' },
  },
  {
    path: 'guides/best-day-trips-chiang-rai',
    title: 'Best Day Trips from Chiang Rai',
    description: "My Favorite Day Trips in Chiang Rai — written by someone who has lived here for years.",
    ogImage: { src: 'blog/whyChiangRai/homPahDinVineyard.png', dest: 'og/best-day-trips-chiang-rai.jpeg' },
  },
  {
    path: 'guides/things-to-do-chiang-rai',
    title: 'Things to Do in Chiang Rai',
    description: "Where to go when you've seen the White Temple...",
    ogImage: { src: 'activities/doiChang.png', dest: 'og/things-to-do-chiang-rai.jpg' },
  },
  {
    path: 'guides/pong-phra-bat',
    title: 'Pong Phra Bat District Itinerary | Secret Corner Chiang Rai',
    description: 'Hot springs, a jungle waterfall hike, and a mountain café with views. An easy half-day from Chiang Rai city.',
    ogImage: { src: 'activities/doiChang.png', dest: 'og/pong-phra-bat.jpg' },
  },
  {
    path: 'guides/chiang-rai-no-scooter',
    title: 'Things to Do in Chiang Rai Without a Scooter | Secret Corner',
    description: '13 recommended attractions in and around Chiang Rai city that are easy to reach on foot or by Grab — temples, markets, art, and more.',
    ogImage: { src: 'activities/bluetemple.webp', dest: 'og/chiang-rai-no-scooter.jpg' },
  },
  {
    path: 'guides/two-days-chiangrai',
    title: 'How to Spend Two Days in Chiang Rai',
    description: 'The perfect 2-day Chiang Rai itinerary writtenby the team at Secret Corner Hostel.',
    ogImage: { src: 'activities/bluetemple.webp', dest: 'og/two-days-chiangrai.webp' },
  },
  {
    path: 'guides/faq',
    title: 'FAQ | Secret Corner Hostel Chiang Rai',
    description: 'Frequently asked questions for your stay at Secret Corner Hostel.',
    ogImage: { src: 'architecture/IMG_0282.JPG', dest: 'og/faq.jpeg' },
  },
  {
    path: 'guides/best-cafes-chiang-rai',
    title: 'Best Cafes in Chiang Rai',
    description: 'The best cafes in Chiang Rai — from specialty coffee roasters to mountain-view terraces and hidden local gems.',
    ogImage: { src: 'blog/bestCafes/cafe100.webp', dest: 'og/best-cafes-chiang-rai.webp' },
  },
  {
    path: 'guides/elephants-chiang-rai',
    title: 'An Elephant Experience in Chiang Rai | Secret Corner',
    description: 'Learn about Elephant Peace Project, a Karen family caring for elephants for generations, and its half-day elephant experience near Chiang Rai.',
  },
];

const baseHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

fs.mkdirSync(path.join(distDir, 'og'), { recursive: true });

for (const route of routes) {
  const { path: routePath, title, description, ogImage } = route;

  let ogImageUrl = '';
  if (ogImage) {
    const srcFile = path.join(srcImagesDir, ogImage.src);
    const destFile = path.join(distDir, ogImage.dest);
    fs.mkdirSync(path.dirname(destFile), { recursive: true });
    fs.copyFileSync(srcFile, destFile);
    ogImageUrl = `${BASE_URL}/${ogImage.dest}?v=${OG_VERSION}`;
  }

  const ogTags = [
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Secret Corner Hostel" />`,
    `<meta property="og:url" content="${routePath ? `${BASE_URL}/${routePath}` : BASE_URL}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    ogImageUrl ? `<meta property="og:image" content="${ogImageUrl}" />` : '',
    `<meta name="twitter:card" content="${ogImageUrl ? 'summary_large_image' : 'summary'}" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    ogImageUrl ? `<meta name="twitter:image" content="${ogImageUrl}" />` : '',
  ].filter(Boolean).join('\n    ');

  const html = baseHtml
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*"[^>]*\/>/, `<meta name="description" content="${description}" />`)
    .replace('</head>', `    ${ogTags}\n  </head>`);

  const destDir = routePath ? path.join(distDir, routePath) : distDir;
  fs.mkdirSync(destDir, { recursive: true });
  fs.writeFileSync(path.join(destDir, 'index.html'), html);

  console.log(`✓  /${routePath}`);
}

const sitemapUrls = routes.map(({ path: routePath }) => {
  const url = routePath ? `${BASE_URL}/${routePath}` : `${BASE_URL}/`;
  return `  <url>\n    <loc>${url}</loc>\n  </url>`;
});

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sitemapUrls,
  '</urlset>',
  '',
].join('\n');

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
console.log(`✓  /sitemap.xml (${routes.length} URLs)`);

console.log(`\nSSG complete — ${routes.length} routes generated.`);
