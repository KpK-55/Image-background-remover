const CACHE_NAME = "study-image-editor-v7";
const BASE = self.registration.scope;
const APP_SHELL = [
  BASE,
  new URL("index.html", BASE).href,
  new URL("manifest.webmanifest", BASE).href,
  new URL("icons/favicon-32.png", BASE).href,
  new URL("icons/icon-192.png", BASE).href,
  new URL("icons/icon-512.png", BASE).href,
  new URL("icons/icon-192-maskable.png", BASE).href,
  new URL("icons/icon-512-maskable.png", BASE).href
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;
  if (!url.href.startsWith(BASE)) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(new URL("index.html", BASE).href, copy));
        return response;
      }).catch(async () => {
        return (await caches.match(request)) ||
               (await caches.match(new URL("index.html", BASE).href)) ||
               (await caches.match(BASE));
      })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;
      return fetch(request).then(response => {
        if (response && response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      });
    })
  );
});
