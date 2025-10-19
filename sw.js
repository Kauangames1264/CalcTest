self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('calc-cache').then(cache => cache.addAll([
      '/index.html',
      '/style.css',
      '/main.js',
      '/manifest.json',
      '/icons/icon-192.png',
      '/icons/icon-512.png'
    ]))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
