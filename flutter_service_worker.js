'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b3bc47de7a8375680ba3272baaa5bc12",
".git/config": "df1d8e688bd7646a8f8c90431275dacf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "31bd7a385d6c29925cf7f154fc179b26",
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
".git/index": "869d38444592d5b0660b2e1ced8ec2b1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ac35edcffe2e6e1f44f6e1b1f88b9643",
".git/logs/refs/heads/main": "ac35edcffe2e6e1f44f6e1b1f88b9643",
".git/logs/refs/remotes/origin/HEAD": "4b4c24fa964aa71b7223376af640a8a8",
".git/logs/refs/remotes/origin/main": "4f8267007517e5d051005c2036eaf641",
".git/objects/01/69bf45104d8a5190075babe57e602f1f98dc61": "2b98a3456b9d2b1ff5f724232f15f0de",
".git/objects/08/9f482d4d5edf86330710a5c960151405425136": "f3f453efe1bb2991377e752e461c6086",
".git/objects/09/074954d2fd56487068ec7c829445853d4ac8b1": "e457bfbf750b4dd70c786452f4781e0f",
".git/objects/09/11d580d8855186a5f9d1a9d37c05f484de8a96": "0c0e52ca93eaa5517008e11d12cb2db1",
".git/objects/09/946036e4e492cba3f34727620ede8acfbf2bc0": "1da22bbfb1583fe4626ddb0872a46501",
".git/objects/0c/900e4ce632ee897d1d9a6e84445299b6635ec7": "b87221a1ffdfcbb6aceaa22b40253eb9",
".git/objects/0e/c9380878c0dd6d8ba2dddb5c8fd1b40345b8cc": "607e46caec079284052195b4da107766",
".git/objects/10/06d8650476632b8cff78507d8d19904a25a82b": "9b7ce6048a7c07a453a890912d1b2495",
".git/objects/16/1cf56aa7e971084de17db5277671b7aa721c47": "2b605ee9e81f600f8bc113c01b2f7d21",
".git/objects/16/5a72f9589cc226f47aa2f1a7067bb870a89b0b": "ebfd46e9c9b1a6889027d4df8f1ed037",
".git/objects/18/8d897abbcbc57f8e2d03f41a4fb81283e0453b": "6498c4060efe11731e6630962dd5fb03",
".git/objects/2a/f82e12d019ebb28855e26f93c36224faf2d06f": "75791c0fe682e762b2cedaa52cabd8c5",
".git/objects/2f/e0155ab1dd888afb992feb94c4d4eb80301268": "dab1e2a6f70bdccf6bc7e38e279876f0",
".git/objects/30/71cf92ef2343b288995af399834303aba0d868": "866e660fd402f923885a870cecf1b506",
".git/objects/3c/6a1b38e37e529e52dd1637c4aa24ddabd0f246": "3102dc4688542bb9b90e713150d78b90",
".git/objects/43/fc8d4716474b8c108067190825228fbc4babc7": "ef16cc58eb250e6dbf3ed947047696ea",
".git/objects/48/4eb7c05c2ecca2fbee418a8d12e180debca519": "4a5c38fd0d6c71db7a5dcc455d11015d",
".git/objects/49/a38c5790be14399c85f727cff7f5a3eaab18c1": "3362bd9e125e702c5b640d1f58ee4755",
".git/objects/49/dca0ddcf08fad00f793a389116ed1904d2ed9b": "91a120a1c6a917260e97d2e0c36f0cca",
".git/objects/4a/bf9e21933c7142ec7223815a34d88e6e536f54": "688f67f05d3318b9a662021d6c8658f2",
".git/objects/55/69a1f0664d1f32f0c5899cf9b01285208e87e1": "77ac1e14d0373c573ef2f4c215787878",
".git/objects/5c/9af55839feb67948bbd21380852b24a26b37d0": "1123377c8b29e29cb7d7bfa85715514d",
".git/objects/5e/019491fb1ddfc24939ac824e10b04b7f865474": "d800adf2f552bd45e4d97a3ddda3d78a",
".git/objects/65/c3ea765f878b5ade067bb4d6d41341a9c19a3b": "762ab4f77edd97747bd7dc08c9ad4b25",
".git/objects/6a/391853258d95715b85365ec3c04063fb7c34a2": "edb8ac5560c1ba938a2be9747fc87825",
".git/objects/6b/72d2b2a0e9a88288fafbba84dba1cb215d194a": "9b80ac5fb62ab12b3165aa63ff670c0d",
".git/objects/6d/0f203de457dc2afa1b5c2ad2b161ec29b9fd33": "f7c53f1e7462ab8c7554e4f195ce3680",
".git/objects/6e/636caf2307e792fed71f3df88219ed03b41c1e": "da703858472f8826b121e099674c6e4b",
".git/objects/77/fcfac44d898301095a9453f9f32b0975e04296": "24f011f85f02887698f5fa703df215f1",
".git/objects/7b/79e8f1864a6a47b578a7350ec3f0c49c7ca44e": "b65e5f316fda02a291f338189b2e5cd9",
".git/objects/7c/c785ec81cb76ba3efc2f8a6a766d188d099936": "690d160fe64e7c33f13da6c115eeac00",
".git/objects/82/51ab9c48ba9f500dcad9765dcfa4b2d7e0c74c": "881e7f5676e806113c5d48cac3120a09",
".git/objects/85/043562a58ec563420cc3d274258c6351518099": "436909fd1e0d0a2fbe0732b6cc8b1abb",
".git/objects/86/a238df40ed07ab98004a5f245e26c1cb006f0c": "1122aea71a211a9785bdfcfc6e6eb4db",
".git/objects/89/8b1ac7a4010c46de39a76998b9d5208c33d1c6": "6a515814cacbc1209f07829e2fd06a88",
".git/objects/8c/c86ba0ed333a239a45a507959903540f94e960": "b6cb2e784035956e587878d9e1decc30",
".git/objects/96/f23045ad8a3113c8cb89c740d8e213317d03b2": "f34192f1ea6fc95bdaead7a947a0478c",
".git/objects/99/268083656ebb94ade86fa4454d9340289d8dcb": "e87b4a750e7dba05a5ea3f10f99351a9",
".git/objects/9f/865e9ed611813834c013222f03f1e7123feb21": "b4c30db7656ca1f31e53311c0ffec712",
".git/objects/a4/3f8b2b02190f57fa8ac56a1b9112d7abf9d050": "0d7538d4e8bc2f0f9f7464e6b1ce0805",
".git/objects/a6/236294ce1ba8b5bdd7b065da188333aac5f047": "abe25ae7abac6afdd483df25b7235e84",
".git/objects/a9/a07e67f3c970cfa3a15fe6c4975b41fcf35b9f": "bea23d0f529003c292433207dc4442f8",
".git/objects/af/b4b8b173a767f737d7ca48f14aa2463f090703": "566be32eb1238db556a2dbba3d9846af",
".git/objects/b4/c8187201edc369e43f79f24b00278439fe225b": "04ed6b14605ee7399e3ed44869ee9ff9",
".git/objects/b7/45b3ead4268f5c329f08b960e0fcb01595a91f": "38061f15cb52d5ffb6a1c418a5163fa1",
".git/objects/bc/76386ba4a868dfb861edd10b0065a3fa906ba7": "6ef390fd4784eba49f413d60f2d36159",
".git/objects/c3/252a8c98672e7134da25b19ff949dbcd26a9a0": "445fe392bd5a1bb7b4b58a098db21f64",
".git/objects/c7/b1c934acad18591d62c8bcce8435dcbf5f3b31": "0fd537576e958718c3d39094c1abd235",
".git/objects/d1/ec35715d398cb0c02eda4c542571495050ac4b": "294f2490a06166efafd0aad3bfef2133",
".git/objects/d6/abfdbea0d9c7bf23f08ff155bdf29f4bc43351": "a2ddb9d744ebac5c96f0c8efb4a5dc82",
".git/objects/eb/905277ff5f2a122055e2fad3a9375b22714b67": "46e4f62f94e63da586f30afbe13fdca0",
".git/objects/ed/517a2ddf4e6632cbd682a3fb035582dc41eb5a": "ffdc56252d2d9bf24150e22392060219",
".git/objects/ee/fa6c76715e13bf34b15fdeae1c809b936a338d": "03e05e36cb7d65abd348a38b860e8f29",
".git/objects/pack/pack-771098488d124c52005e1858379533c81b98b2f2.idx": "a5dcafec29996425e1c3e4c6bb102d78",
".git/objects/pack/pack-771098488d124c52005e1858379533c81b98b2f2.pack": "e71defdd32b5dc340919644f77720916",
".git/ORIG_HEAD": "01ade7f96e9bb84e6216bb002102da95",
".git/packed-refs": "d653df69d241944d587a8c54f21f9c5b",
".git/refs/heads/main": "14471bdcafccdad5fdc14a61a239d94a",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "14471bdcafccdad5fdc14a61a239d94a",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "f5f73fef72e65a4542fa881499a6a523",
"icons/Icon-512.png": "dd52ebcd668814eafce400a7e1a9517c",
"icons/Icon-maskable-192.png": "f5f73fef72e65a4542fa881499a6a523",
"icons/Icon-maskable-512.png": "dd52ebcd668814eafce400a7e1a9517c",
"index.html": "19ad6c003d2aa358c1dbdefc76fc8254",
"/": "19ad6c003d2aa358c1dbdefc76fc8254",
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
