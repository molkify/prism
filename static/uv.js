importScripts('/static/backend/uv.bundle.js');
importScripts('/static/backend/uv.config.js');
importScripts('/static/backend/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
