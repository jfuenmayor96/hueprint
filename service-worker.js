"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/hueprint/index.html","d53fdc5c228b7f7169b9da8234fa5edb"],["/hueprint/static/css/main.15160aaa.css","2a8b8df5c7215770e94651ef22046c08"],["/hueprint/static/js/main.483d6980.js","7cb0dbb75594efd1de0e13595116a4bd"],["/hueprint/static/media/alojamiento.8e7183bc.png","8e7183bc51698fbc7a4a554b6ae9c76f"],["/hueprint/static/media/bolsa.17f71943.png","17f71943786edd3971bb19605749d3e7"],["/hueprint/static/media/ecommerce.41513c5d.png","41513c5d39dcb54ad4a2096ae0148ad5"],["/hueprint/static/media/logo.49336833.png","49336833a99c7380147b11643bf5ec42"],["/hueprint/static/media/logo.8b154496.png","8b1544960ae6a245e53092cb2dae2c40"],["/hueprint/static/media/lupa.e4aaf8e0.png","e4aaf8e0f1bc46134f346c1e56d51436"],["/hueprint/static/media/marketingcontenidos.bc24e2e9.png","bc24e2e94179aeab8f8b5d1d0dd567e0"],["/hueprint/static/media/marketingdigital.7fed2105.png","7fed2105ba266756c08473ee8075ddde"],["/hueprint/static/media/prodyserv.d586e540.png","d586e5406f1822a5e503dd23886c0cf8"],["/hueprint/static/media/publicidad.13ff7223.png","13ff72230fb32193d435e7e3a6f5d05a"],["/hueprint/static/media/wallpaper.06740fe8.jpg","06740fe8e425c8e1766c69762f33ca2e"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/hueprint/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});