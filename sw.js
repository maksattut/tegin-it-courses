/* TEGIN IT Courses service worker. VERSION and CORE are filled in by build.py from file hashes. */
const VERSION = '8f7c0f466f';
const CACHE = 'tegin-' + VERSION;
const CORE = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "assets/app.6e0bf2a719.js",
  "assets/style.d9828de5b2.css",
  "assets/boot.a219929d4a.js",
  "assets/fonts/geologica-cyrillic-600-normal.woff2",
  "assets/fonts/geologica-cyrillic-700-normal.woff2",
  "assets/fonts/geologica-cyrillic-ext-600-normal.woff2",
  "assets/fonts/geologica-cyrillic-ext-700-normal.woff2",
  "assets/fonts/geologica-latin-600-normal.woff2",
  "assets/fonts/geologica-latin-700-normal.woff2",
  "assets/fonts/golos-text-cyrillic-400-normal.woff2",
  "assets/fonts/golos-text-cyrillic-500-normal.woff2",
  "assets/fonts/golos-text-cyrillic-600-normal.woff2",
  "assets/fonts/golos-text-cyrillic-ext-400-normal.woff2",
  "assets/fonts/golos-text-cyrillic-ext-500-normal.woff2",
  "assets/fonts/golos-text-cyrillic-ext-600-normal.woff2",
  "assets/fonts/golos-text-latin-400-normal.woff2",
  "assets/fonts/golos-text-latin-500-normal.woff2",
  "assets/fonts/golos-text-latin-600-normal.woff2",
  "assets/logo/logo-1024.webp",
  "assets/logo/logo-128.webp",
  "assets/logo/logo-256.webp",
  "assets/logo/logo-512.webp",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png",
  "icons/favicon-64.png"
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)));
});

self.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // other sites are never touched or cached

  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then((res) => {
        if (res.ok && res.type === 'basic') { const copy = res.clone(); caches.open(CACHE).then((c) => c.put('index.html', copy)); }
        return res;
      }).catch(() => caches.match('index.html'))
    );
    return;
  }

  const scope = new URL(self.registration.scope);
  const rel = url.pathname.startsWith(scope.pathname) ? url.pathname.slice(scope.pathname.length) : '';
  if (rel.startsWith('assets/') || rel.startsWith('icons/') || rel === 'manifest.webmanifest') {
    e.respondWith(
      caches.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req).then((res) => {
        if (res.ok && res.type === 'basic') { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
        return res;
      }))
    );
  }
});

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const target = new URL('./#/focus', self.registration.scope).href;
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((list) => {
      for (const c of list) if ('focus' in c) return c.focus();
      return self.clients.openWindow(target);
    })
  );
});
