import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');

const redirects = [
  { from: 'about.html', to: '/about/' },
  { from: 'faq.html', to: '/faq/' },
  { from: 'guides.html', to: '/guides/' },
  { from: 'survey.html', to: '/survey/' },
  { from: 'terms.html', to: '/terms/' },
  { from: 'privacy.html', to: '/privacy/' },
  { from: 'guides/whatsapp-onboarding.html', to: '/guides/whatsapp-onboarding/' },
  { from: 'demo/daily-briefing.html', to: '/demo/daily-briefing/' },
  { from: 'demo/forward-and-forget.html', to: '/demo/forward-and-forget/' },
  { from: 'demo/restaurant-booking.html', to: '/demo/restaurant-booking/' },
  { from: 'demo/user-vaults.html', to: '/demo/user-vaults/' },
  { from: 'demo/web-onboarding.html', to: '/demo/web-onboarding/' },
  { from: 'demo/whatsapp-linking.html', to: '/demo/whatsapp-linking/' },
];

function shim(to) {
  return `<!doctype html>
<meta charset="utf-8">
<title>Redirecting…</title>
<meta http-equiv="refresh" content="0; url=${to}">
<link rel="canonical" href="${to}">
<meta name="robots" content="noindex">
<p>Redirecting to <a href="${to}">${to}</a>…</p>
`;
}

for (const { from, to } of redirects) {
  const target = join(DIST, from);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, shim(to), 'utf8');
  console.log(`  ↳ ${from} → ${to}`);
}

console.log(`Generated ${redirects.length} legacy redirects.`);

// Alias /sitemap.xml → /sitemap-index.xml so naive crawlers that hit the
// conventional path (rather than reading robots.txt) still find the sitemap.
await copyFile(join(DIST, 'sitemap-index.xml'), join(DIST, 'sitemap.xml'));
console.log('Aliased sitemap-index.xml → sitemap.xml');
