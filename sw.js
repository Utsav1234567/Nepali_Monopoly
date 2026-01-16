const CACHE_NAME = "nepali-monopoly-v1";

const ASSETS_TO_CACHE = [
  "/Nepali_Monopoly/",
  "/Nepali_Monopoly/index.html",
  "/Nepali_Monopoly/manifest.json",
  "/Nepali_Monopoly/icon-192.png",
  "/Nepali_Monopoly/icon-512.png"
];

// Cache everything on install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Serve cached content when offline
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
