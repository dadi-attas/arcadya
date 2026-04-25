/* ARCADYA service worker — caches all shell + game files for offline play.
 * Strategy:
 *   - Install: precache the full app shell.
 *   - Fetch: cache-first (so the app loads instantly and works offline).
 *   - Activate: clean up old cache versions.
 * Bump CACHE_VERSION any time files change to force a refresh. */

const CACHE_VERSION = 'arcadya-v3';
const ASSETS = [
  './',
  './index.html',
  './games.js',
  './manifest.json',
  './assets/icons/icon.svg',
  './assets/logo/brand-intro.js',
  './assets/arcadya-rotate.js',
  './assets/arcadya-shell.css',
  './assets/arcadya-shell.js',
  './games/snake.html',
  './games/pong.html',
  './games/invaders.html',
  './games/pacman.html',
  './games/tetris.html',
  './games/frogger.html',
  './games/dkong.html',
  './games/pinball.html',
  './games/mines.html',
  './games/combat.html',
  './games/skydiver.html',
  './games/rushhour.html',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache new GET responses opportunistically (same-origin only)
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);
    })
  );
});
