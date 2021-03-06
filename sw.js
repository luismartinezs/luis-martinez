self.addEventListener('install', function initServiceWorker(e) {
  e.waitUntil(
    caches.open('luis-martinez-site').then(function cacheResources(cache) {
      return cache.addAll(['/', '/index.html', '/src/style.css']);
    })
  );
});

self.addEventListener('fetch', function fetchResource(event) {
  event.respondWith(
    caches.match(event.request).then(function getResponse(response) {
      return response || fetch(event.request);
    })
  );
});
