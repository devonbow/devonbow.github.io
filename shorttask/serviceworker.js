self.oninstall = function () {
    caches.open('fayeFrontEndV1').then(function (cache) {
            cache.addAll([/ ... /])
                .catch(/ ... /);
        })
        .catch(/ ... /)
}
self.onactivate = function (event) {
    console.log('sw is up and running!');
}
self.onfetch = function (event) {
    event.respondWith(
        caches.match(event.request)
        .then(function (cachedFiles) {
            if (cachedFiles) {
                return cachedFiles;
            } else {
                return fetch(event.request);
            }
        })
    );
}
