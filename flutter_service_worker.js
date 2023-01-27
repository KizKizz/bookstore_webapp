'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "024806f2fa97902441809b55769a3504",
".git/config": "df1d8e688bd7646a8f8c90431275dacf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b57da8110b2e039d7b34a7ca5ddff3df",
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
".git/index": "6fd921cea41c38707c865cd620232c74",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c75a5813b8d813e9515f2dc531191432",
".git/logs/refs/heads/main": "c75a5813b8d813e9515f2dc531191432",
".git/logs/refs/remotes/origin/HEAD": "917e69aa79c7840737b99f311fc32e24",
".git/logs/refs/remotes/origin/main": "0d83a46bf588461226eaa101530896ca",
".git/objects/0b/e913caa21a0d73ee605bcdb16f3ba87e5e65aa": "12fd63829ac1610b5e313245474a4769",
".git/objects/0e/1b16b929df2c8f2ed28ffcdcdbaa6f7cdf5a7d": "c188fece68947ce0350f6c9f4363a2e2",
".git/objects/15/21c08e611d12f0194a9b16b3e3dd60ec7c4fa6": "bf1c968e15d7682e23d208cfed201a73",
".git/objects/18/01dd33ddbb3a3d919e924c4681d9426785b6d2": "8f43e428150b50636b8e8ff51d127ec2",
".git/objects/18/06089a746865855a4b24097c0742945f869388": "a5995c2a949bf18810d12f7a2fd28600",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/48/3637044cea3889bf599bf3fdf2b4402fef002f": "ea3ec949cc2773b99c79e427eacd8613",
".git/objects/54/2351c9f12975b1bc679448924e7cd7d5b11664": "243f82003748e0fffcaff7ff4a190d57",
".git/objects/5d/342a7564d7460e7299bc4bee7014f58c1112fb": "d0ec7f836efe8e637b014d72bff9f715",
".git/objects/6c/500799a34cb21634ac42d7bf455c3a239cc441": "80122442dd7696b583b04104ae17a5b5",
".git/objects/76/6c0279285738e7554635276129cb41ba05dd92": "e601e68c8c78ed3bc4cc2ad970582769",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/84/301a36dbd19f8c454f45f696a74bd27f760ed3": "b51e16172d6784a1ceb8c8c4b039698d",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/98/7ef0185b2fd16da3218c87aa57b277f12454f3": "b62e3a1b8ccdcc750434963eee14d63e",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/a9/9c4a8c434ee3c07a1957cf790639e990b64e53": "c1be44e08cc38c98e3784921be878e8f",
".git/objects/b4/a4b406b3ade1254103704a7e740edef1cf129e": "c38761ba8afcca6aa2ee38f36dc404e0",
".git/objects/be/6ce9eec32a35b28fca6a9f03713c5806d97487": "79ad57965c9cb6e588c625d12afff917",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/c3/96e329ffb8ea31be293106453bbd1dc3293f9f": "84fe6b092db04cd2af2e63b0c9cc9eb2",
".git/objects/c5/5117af5a76799a768c1cbb273c86aee182664c": "bd48103b23adf3df12a2ae365dafac56",
".git/objects/c5/f58d2c4501cde3ede351d1a98fe7eb4971b572": "e03e79b23aba4e74c057b36254616d7c",
".git/objects/cc/d4cd552f1657b218716e73b5962ccc37181c37": "aea54239cb59bae660557e9bdabbfa4a",
".git/objects/d5/e40352c22cc654d776ae3f0d1d9f1d3c443c38": "d31ece8bf57c24c4c58778696e203f5c",
".git/objects/da/d826ab185acd379634b5127a166fbc91b8f023": "887b56470e3f8bd7cf2a32dec09c5844",
".git/objects/db/0d762f2c8f7071da6b5dd546e9b0c2fa084a2d": "aef509fa3051a232289fc10456ddf6be",
".git/objects/eb/76f179bd7ef6b99829d8a400e14238e108096a": "652513df20681cb819958452fc324513",
".git/objects/ef/e2e8855337d8f9bfac716225af9ed90731f060": "ba36744259217bdb6defb08da28fbc68",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/f8/38dd57b1d37eb46e7983d2a04e471ade8daf65": "233daa0d2edb9fcc1fdab1b4d5f3b81f",
".git/objects/fe/9cc87580713c0f0238a4c887927ca8ee0df429": "dabdbad06cbcbc26cb39bdaf2e261a8a",
".git/objects/ff/1f3fab59c0a4e89b4d6a07a9ea9c50e2734923": "b4bfbae802355ca87ef5fd97b95e359a",
".git/objects/pack/pack-62b3e22c962d1debc015ef215648e635e930f147.idx": "b74e08482c25ce07e39185c34ca6112e",
".git/objects/pack/pack-62b3e22c962d1debc015ef215648e635e930f147.pack": "4d0f49bc1e6d71a535257e23604321f4",
".git/packed-refs": "e2a4804b5d5c896072a7ae600acceb29",
".git/refs/heads/main": "6c4fdbf1a3f2cc04a9d0f46faa8eadb7",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "6c4fdbf1a3f2cc04a9d0f46faa8eadb7",
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
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "90af7063f4b534058123b0af7361241e",
"/": "90af7063f4b534058123b0af7361241e",
"main.dart.js": "f4e5c9ab28b70e5fa058d9ecac2ead16",
"manifest.json": "6c84e01df516503882ef20ef518883d8",
"README.md": "a0dd2a578747ce8b37213820fef2dca5",
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
