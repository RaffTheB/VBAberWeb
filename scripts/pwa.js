if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('scripts/service-worker.js')
      .then(reg => console.log('Service Worker registrato', reg))
      .catch(err => console.warn('Service Worker fallito', err));
  });
}
