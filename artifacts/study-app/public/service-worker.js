/* ============================================
   Service Worker - StudyApp
   التخزين المؤقت والعمل بدون إنترنت
   ============================================ */

const CACHE_NAME = 'studyapp-v3';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './favicon.svg',
  './icon-192.png',
  './icon-512.png',
  './diyala-univ.jpeg',
  './english-dept.png',
];

// تثبيت الـ SW وتخزين الأصول الأساسية
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS).catch((err) => {
        console.warn('Cache add failed:', err);
      });
    })
  );
  self.skipWaiting();
});

// تنشيط الـ SW وحذف الكاش القديم
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// استراتيجية: Network first ثم Cache fallback (للتحديث السريع)
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // تجاهل الطلبات غير-GET
  if (request.method !== 'GET') return;

  // تجاهل المسارات غير-http (chrome-extension إلخ)
  if (!request.url.startsWith('http')) return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        // تخزين الردود الناجحة فقط
        if (response && response.status === 200 && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return response;
      })
      .catch(() => {
        // عند الفشل، الرجوع للكاش
        return caches.match(request).then((cached) => {
          if (cached) return cached;
          // الرجوع لـ index.html للتنقل
          if (request.mode === 'navigate') {
            return caches.match('./index.html');
          }
          return new Response('Offline', { status: 503 });
        });
      })
  );
});
