importScripts('/static/u/bundle.js');
importScripts('/static/u/config.js');
importScripts('/static/u/sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => event.respondWith(sw.fetch(event)));
