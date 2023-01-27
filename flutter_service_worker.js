'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b3bc47de7a8375680ba3272baaa5bc12",
".git/config": "df1d8e688bd7646a8f8c90431275dacf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8222ff805251addaa849698e7cd60839",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a36da1b69cdd8b7db2a927a7057cdf5a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ea5513a15e7cb14580983baf9cf6404c",
".git/logs/refs/heads/main": "ea5513a15e7cb14580983baf9cf6404c",
".git/logs/refs/remotes/origin/HEAD": "4b4c24fa964aa71b7223376af640a8a8",
".git/logs/refs/remotes/origin/main": "274831ddcc9c47f4ac3a8206713517fa",
".git/objects/01/69bf45104d8a5190075babe57e602f1f98dc61": "2b98a3456b9d2b1ff5f724232f15f0de",
".git/objects/09/074954d2fd56487068ec7c829445853d4ac8b1": "e457bfbf750b4dd70c786452f4781e0f",
".git/objects/09/11d580d8855186a5f9d1a9d37c05f484de8a96": "0c0e52ca93eaa5517008e11d12cb2db1",
".git/objects/0c/900e4ce632ee897d1d9a6e84445299b6635ec7": "b87221a1ffdfcbb6aceaa22b40253eb9",
".git/objects/10/06d8650476632b8cff78507d8d19904a25a82b": "9b7ce6048a7c07a453a890912d1b2495",
".git/objects/16/1cf56aa7e971084de17db5277671b7aa721c47": "2b605ee9e81f600f8bc113c01b2f7d21",
".git/objects/30/71cf92ef2343b288995af399834303aba0d868": "866e660fd402f923885a870cecf1b506",
".git/objects/43/fc8d4716474b8c108067190825228fbc4babc7": "ef16cc58eb250e6dbf3ed947047696ea",
".git/objects/4a/bf9e21933c7142ec7223815a34d88e6e536f54": "688f67f05d3318b9a662021d6c8658f2",
".git/objects/55/69a1f0664d1f32f0c5899cf9b01285208e87e1": "77ac1e14d0373c573ef2f4c215787878",
".git/objects/5c/9af55839feb67948bbd21380852b24a26b37d0": "1123377c8b29e29cb7d7bfa85715514d",
".git/objects/5e/019491fb1ddfc24939ac824e10b04b7f865474": "d800adf2f552bd45e4d97a3ddda3d78a",
".git/objects/7b/79e8f1864a6a47b578a7350ec3f0c49c7ca44e": "b65e5f316fda02a291f338189b2e5cd9",
".git/objects/7c/c785ec81cb76ba3efc2f8a6a766d188d099936": "690d160fe64e7c33f13da6c115eeac00",
".git/objects/85/043562a58ec563420cc3d274258c6351518099": "436909fd1e0d0a2fbe0732b6cc8b1abb",
".git/objects/86/a238df40ed07ab98004a5f245e26c1cb006f0c": "1122aea71a211a9785bdfcfc6e6eb4db",
".git/objects/8c/c86ba0ed333a239a45a507959903540f94e960": "b6cb2e784035956e587878d9e1decc30",
".git/objects/af/b4b8b173a767f737d7ca48f14aa2463f090703": "566be32eb1238db556a2dbba3d9846af",
".git/objects/d1/ec35715d398cb0c02eda4c542571495050ac4b": "294f2490a06166efafd0aad3bfef2133",
".git/objects/ed/517a2ddf4e6632cbd682a3fb035582dc41eb5a": "ffdc56252d2d9bf24150e22392060219",
".git/objects/pack/pack-771098488d124c52005e1858379533c81b98b2f2.idx": "a5dcafec29996425e1c3e4c6bb102d78",
".git/objects/pack/pack-771098488d124c52005e1858379533c81b98b2f2.pack": "e71defdd32b5dc340919644f77720916",
".git/ORIG_HEAD": "4b78b7fdefb568dd86830ed1d67ea4ec",
".git/packed-refs": "d653df69d241944d587a8c54f21f9c5b",
".git/refs/heads/main": "dcc26193996d1f91ea4a18f7d332031a",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "dcc26193996d1f91ea4a18f7d332031a",
"assets/AssetManifest.json": "cb1b2972e937da4957c4488789da75c9",
"assets/assets/jsondatabase/author_data.json": "2f79230df5f118b3c7bdcaa136394d40",
"assets/assets/jsondatabase/book_data.json": "71e8593443e16531bd5fdda51e5f4c51",
"assets/assets/jsondatabase/customer_data.json": "ab662055049d7ffff91db0a555da2f9f",
"assets/assets/jsondatabase/employee_data.json": "df5950770ed772c625add9bb274c032b",
"assets/assets/jsondatabase/order_data.json": "b55926a079573118e58c30feb04857a4",
"assets/assets/jsondatabase/sales_record_data.json": "47b3a0668402bd3d176883ec8907fd04",
"assets/assets/Logo/logo_dark.png": "d210c4dc9c679d70e04bfd8646795133",
"assets/assets/Logo/logo_light.png": "4de5ef5a479d7c9cce8255a3c83b05b2",
"assets/assets/Logo/logo_only.png": "a22466ae71d45f7e79b1a45bb7ba2938",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "b6ea4c08e777a258a111dba76b6054ec",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"canvaskit/canvaskit.js": "3725a0811e16affbef87d783520e61d4",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "491df729e7b715d86fc167feabea031a",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "2556c7a0a389efe39748bf8869544837",
"icons/Icon-192.png": "f5f73fef72e65a4542fa881499a6a523",
"icons/Icon-512.png": "dd52ebcd668814eafce400a7e1a9517c",
"icons/Icon-maskable-192.png": "f5f73fef72e65a4542fa881499a6a523",
"icons/Icon-maskable-512.png": "dd52ebcd668814eafce400a7e1a9517c",
"index.html": "14a512547563c1487e2106a10ac39aca",
"/": "14a512547563c1487e2106a10ac39aca",
"main.dart.js": "5c5da856996fef7cd00bd50360d77cdc",
"manifest.json": "0348b85c6fac00779e8fbd0362bbf158",
"README.md": "319c1ed846a65ad0656a8b3829ecb46f",
"version.json": "7be7591da0faf85f3eb3bf127953de09"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
