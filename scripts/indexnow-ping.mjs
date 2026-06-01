// Submit all /answers/ URLs to IndexNow after a build. IndexNow fans out to
// Bing, Yandex and other participating engines — and Bing's index is what
// ChatGPT Search and Copilot read, so it's the fast path for GEO.
//
// The key is public by design (it's served at /<KEY>.txt for ownership
// verification), so it lives in the repo. The network ping only fires on CI
// (i.e. the GitHub Actions deploy) or when run with --force, so local/preview
// builds stay quiet and offline.
import { readdir, access } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const KEY = '4a66041be675a01c479711a372bea2a1';
const HOST = 'liv4all.com';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ANSWERS_DIST = join(__dirname, '..', 'dist', 'answers');

const force = process.argv.includes('--force');
if (!process.env.CI && !force) {
  console.log('IndexNow: skipping (not CI; pass --force to ping anyway).');
  process.exit(0);
}

let entries;
try {
  entries = await readdir(ANSWERS_DIST, { withFileTypes: true });
} catch {
  console.log('IndexNow: no dist/answers/ directory — nothing to ping.');
  process.exit(0);
}

// build.format: 'directory' → each answer is dist/answers/<slug>/index.html
const urlList = [`https://${HOST}/answers/`];
for (const e of entries) {
  if (e.isDirectory() && (await fileExists(join(ANSWERS_DIST, e.name, 'index.html')))) {
    urlList.push(`https://${HOST}/answers/${e.name}/`);
  }
}

if (urlList.length === 1) {
  console.log('IndexNow: no answer pages found — nothing to ping.');
  process.exit(0);
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList,
  }),
});

console.log(`IndexNow: submitted ${urlList.length} URLs → HTTP ${res.status}`);

async function fileExists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}
