const cacheName = 'ecommerce'
const cacheAssets = [
    '/',
    'index.html',
    'assets/images/product-01.jpg',
    'assets/images/item-01.jpg',
    'assets/images/big-01.jpg',
    'assets/images/thumb-01.jpg',
];
self.addEventListener('fetch', evt => {
    //console.log('fetch event:',evt)
    evt.respondWith(
        caches.match(evt.request).then(res => {
            return res || fetch(evt.request)
        })
    )
});