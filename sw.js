/* Wonder Academy service worker.
   Network first, so a new version always wins. The cache is only a fallback
   for when the device is offline. Bump CACHE_VERSION on every release. */
var CACHE_VERSION = 'wonder-v8';

var PRECACHE = [
  './', './index.html', './styles.css', './config.js', './auth.js', './app.js',
  './content/science.js', './content/islamic-history.js', './content/geography.js',
  './content/analytical.js', './content/reasoning.js', './content/iq.js',
  './content/physics.js', './content/biology.js',
  './content/story-time.js', './content/math.js', './content/inventors.js', './content/character.js', './pronounce.js',
  './icon-192.png', './icon-512.png', './apple-touch-icon.png', './manifest.json'
];

self.addEventListener('install', function (e) {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_VERSION).then(function (c) {
    return Promise.all(PRECACHE.map(function (url) {
      return c.add(url).catch(function () { return null; });
    }));
  }));
});

self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.map(function (k) {
      if (k !== CACHE_VERSION) { return caches.delete(k); }
      return null;
    }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') { return; }
  var url = new URL(req.url);
  // Never cache Supabase; kids' progress must always hit the live server.
  if (url.hostname.indexOf('supabase.co') !== -1) { return; }

  e.respondWith(
    fetch(req).then(function (res) {
      if (res && res.status === 200 && url.origin === self.location.origin) {
        var copy = res.clone();
        caches.open(CACHE_VERSION).then(function (c) { c.put(req, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(req).then(function (hit) {
        return hit || caches.match('./index.html');
      });
    })
  );
});
