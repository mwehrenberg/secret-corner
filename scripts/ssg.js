import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const srcImagesDir = path.join(rootDir, 'src', 'images');

const BASE_URL = 'https://www.secretcornerhostel.com';

const routes = [
  {
    path: 'about',
    title: 'About Secret Corner | Hostel in Chiang Rai',
    description: "The story behind Secret Corner — why we built it and what makes it our guests' favourite hostel in Chiang Rai.",
    ogImage: { src: 'about/aboutCover.jpeg', dest: 'og/about.jpeg' },
  },
  {
    path: 'gallery',
    title: 'Photos | Secret Corner Hostel Chiang Rai',
    description: 'See our clean modern dorms, rooftop bar & coworking space. Privacy curtains, female rooms & comfy beds. Best hostel near Chiang Rai Night Bazaar.',
    ogImage: { src: 'about/aboutDorm.jpeg', dest: 'og/gallery.jpeg' },
  },
  {
    path: 'facilities',
    title: 'Rooms & Facilities | Clean Comfy Affordable Dorms',
    description: 'Female dorm, mixed dorms & private rooms with privacy curtains, A/C & premium beds. Rooftop bar, coworking space & fast WiFi. Book direct for exclusive rates!',
    ogImage: { src: 'rooms/standard.jpeg', dest: 'og/facilities.jpeg' },
  },
  {
    path: 'activities',
    title: 'Hostel Activities | Secret Corner Hostel Chiang Rai',
    description: 'Join weekly hostel activities: Secret Supper Night, Morning Walking Tour, Global Card Game Night and more. Social hostel vibes in Chiang Rai.',
    ogImage: { src: 'hostelActivities/happyhour.png', dest: 'og/activities.png' },
  },
  {
    path: 'localAttractions',
    title: 'Local Attractions | Secret Corner Hostel Chiang Rai',
    description: 'Discover the best things to do in Chiang Rai — walking tours, motorbike rentals, the Blue Temple, Night Bazaar, and the Slow Boat to Luang Prabang.',
    ogImage: { src: 'activities/bluetemple.webp', dest: 'og/local-attractions.webp' },
  },
  {
    path: 'guides/why-chiang-rai',
    title: 'Why Chiang Rai is Absolutely Worth Visiting',
    description: "A local's guide to Chiang Rai — adventure itineraries, mountain tea villages, temples, markets, and hidden gems. Written by someone who has lived here for years.",
    ogImage: { src: 'blog/whyChiangRai/whiteTemple.jpeg', dest: 'og/why-chiang-rai.jpeg' },
  },
  {
    path: 'guides/best-day-trips-chiang-rai',
    title: 'Best Day Trips from Chiang Rai',
    description: "Where to go when you've seen the White Temple — the Golden Triangle, Doi Mae Salong tea villages, Doi Chang coffee mountain, waterfalls and more.",
    ogImage: { src: 'activities/goldentriangle.jpg', dest: 'og/best-day-trips.jpg' },
  },
  {
    path: 'guides/two-days-chiangrai',
    title: 'How to Spend Two Days in Chiang Rai',
    description: 'The perfect 2-day Chiang Rai itinerary — temples, night markets, mountain tea villages, and local food. Written by the team at Secret Corner Hostel.',
    ogImage: { src: 'activities/bluetemple.webp', dest: 'og/two-days-chiangrai.webp' },
  },
  {
    path: 'guides/faq',
    title: 'FAQ | Secret Corner Hostel Chiang Rai',
    description: 'Frequently asked questions about staying at Secret Corner Hostel — check-in times, booking, facilities, amenities, and local tips.',
    ogImage: { src: 'about/welcome2.jpeg', dest: 'og/faq.jpeg' },
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
    ogImageUrl = `${BASE_URL}/${ogImage.dest}`;
  }

  const ogTags = [
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${BASE_URL}/${routePath}" />`,
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

  const destDir = path.join(distDir, routePath);
  fs.mkdirSync(destDir, { recursive: true });
  fs.writeFileSync(path.join(destDir, 'index.html'), html);

  console.log(`✓  /${routePath}`);
}

console.log(`\nSSG complete — ${routes.length} routes generated.`);
