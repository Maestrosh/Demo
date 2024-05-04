'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "762f7ddf5e74bce2b351d0f825802f64",
"assets/NOTICES": "f47a1a7470fdf87c97ab0abc2c7d8f24",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"demo/.git/COMMIT_EDITMSG": "6961d7607f40a71bc7f0111a7c0bb443",
"demo/.git/config": "2ae3ac9a7e81a6817ad8e0d272482c5d",
"demo/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"demo/.git/FETCH_HEAD": "61a19385f90f38a5993e597c3359eb35",
"demo/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"demo/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"demo/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"demo/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"demo/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"demo/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"demo/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"demo/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"demo/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"demo/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"demo/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"demo/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"demo/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"demo/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"demo/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"demo/.git/index": "0a4b784038bc49f72ba6e8fd7af3d8b5",
"demo/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"demo/.git/logs/HEAD": "6d34c367d786df2ea98f8bb83ed25f28",
"demo/.git/logs/refs/heads/main": "6d34c367d786df2ea98f8bb83ed25f28",
"demo/.git/logs/refs/remotes/origin/HEAD": "9c1ed8cea6c800ec5095660b5914a5fe",
"demo/.git/logs/refs/remotes/origin/main": "56715d4538800a8ebe5c64a1bcb78d7d",
"demo/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"demo/.git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
"demo/.git/objects/0a/78d2a1333d0c944a74edc950ed36cf570a46c0": "5b1be3b5fbcc3360dbe32b45c52ae839",
"demo/.git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
"demo/.git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
"demo/.git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
"demo/.git/objects/24/993d7467caf95375763f81c8924ec94ec2e4e0": "ba5769447f73c49c10c2ce5f07fd743b",
"demo/.git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
"demo/.git/objects/2a/b3409ed9056d09217509314cd9e4ee4ff9a435": "ae1f1c9d26d77b290cb5c9c718a8d4f2",
"demo/.git/objects/31/a00c0b46b1d1eac1df576888d62fa71f27a902": "f749f0b81d0c4e1fc15f5bcfd94d02b4",
"demo/.git/objects/32/a7e8623d345c7d085aebaae5a8f70ca28d3f7d": "5d7058e6c6f3fb7e1648eb957c760642",
"demo/.git/objects/3d/6fc38a88be25b6abc569dcb4b778e2d75bf238": "2cb1e0f107b98c4b22d96d67dae4b0ad",
"demo/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"demo/.git/objects/46/e432a678f458a77067b6ad53ba53d45424aaf0": "2a5ff1625dded27cabb22056c8dfed01",
"demo/.git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
"demo/.git/objects/4e/e89862b73abf89e1ecbccf50f467925270ffdd": "41fd3445385841bb5524b8da5b0224e7",
"demo/.git/objects/4f/cc914c32c74d2d49e9b939209141a6033d640b": "7f4b16c844a7a21204e3abd75c5f4c6d",
"demo/.git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
"demo/.git/objects/5a/decfd5fffde81eac5f40e0e06069fab2ffdab1": "8f06bb1dfa6e16cfd23a1c4338d2360d",
"demo/.git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
"demo/.git/objects/6f/9509c88bed7080d496fc5e1d87a9315e30549d": "c02716d7aaed30ce1c5697a2fb40d317",
"demo/.git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
"demo/.git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
"demo/.git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
"demo/.git/objects/7f/d7b80eb7df61697f6ff1d4cd19bd6c65f1f087": "59398c963edbb003bf2cb4212d51bcf4",
"demo/.git/objects/82/36ed6ff5ba101f4955c72a3c47a6b6a79a905b": "f4b950dd1bf92dc0406204a023a3692e",
"demo/.git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
"demo/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"demo/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"demo/.git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
"demo/.git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
"demo/.git/objects/96/3d6aa7dc4d703d682b4d1e5fcb3ab6f0d9dfe0": "03ac1ffa48ee2be3e758ea22a583ecc8",
"demo/.git/objects/9e/734669b449231d84b1d24c06ece8534fb6bebd": "9a6e69608b7e87058fefb0ceea970d56",
"demo/.git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
"demo/.git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
"demo/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"demo/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"demo/.git/objects/b9/aea2cd0f916b70c93366a459de3af6df5c7430": "e73bceba9f26f1cec458bf469902cc5c",
"demo/.git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
"demo/.git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
"demo/.git/objects/c7/7d77ff105e9801553e71cf55fabe4c559d3153": "7ff600fab769f40d5576cd07e98515b0",
"demo/.git/objects/c9/0c66062ce9e8bf92980dcd9f6f96947cf85f1e": "d3ddec97aed0c7b481ce182b1b3f3de3",
"demo/.git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
"demo/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"demo/.git/objects/d6/ad337ba2cbd8a45ae79fd8e7c739940ebe8a52": "cd1641083a8e89604c21f77b1079faa7",
"demo/.git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
"demo/.git/objects/e0/db38714a3123b72559a987840d8d3c01288abc": "8c68ae16ff8a99d227830c08a01aca35",
"demo/.git/objects/e4/1e4f06a92bcdcc1c749ddf3fed9580619b9221": "af13a79077769b6ee48866ab29412e6d",
"demo/.git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
"demo/.git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
"demo/.git/objects/ea/7e5f70f4e1ee8fc65b00bf299b9e48d87858e0": "fa64e79b3c3dc3186f86ffac505c00f4",
"demo/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"demo/.git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
"demo/.git/objects/f4/b25d2e5f287723226895cabc092312972fe012": "fc084c7774d7d17d41e7447ac51ebf0e",
"demo/.git/refs/heads/main": "6ab104a194b3c4a568d6cd15e988c749",
"demo/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"demo/.git/refs/remotes/origin/main": "6ab104a194b3c4a568d6cd15e988c749",
"demo/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"demo/assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"demo/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"demo/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"demo/assets/fonts/MaterialIcons-Regular.otf": "762f7ddf5e74bce2b351d0f825802f64",
"demo/assets/NOTICES": "f47a1a7470fdf87c97ab0abc2c7d8f24",
"demo/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"demo/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"demo/canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"demo/canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"demo/canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"demo/canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"demo/canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"demo/canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"demo/canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"demo/canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"demo/canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"demo/canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"demo/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"demo/flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"demo/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"demo/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"demo/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"demo/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"demo/index.html": "06fe5cce74cc79b903941dac04ed6574",
"demo/main.dart.js": "ce8e5acce73d220a0038f8d24fb706ab",
"demo/manifest.json": "a5f3c5ee9d40473f989c09e4118f97d5",
"demo/version.json": "1b21b9e2356f85557c1db13cd140f0f2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3b36ce6eff304acdebd2978a536ed072",
"/": "3b36ce6eff304acdebd2978a536ed072",
"main.dart.js": "ce8e5acce73d220a0038f8d24fb706ab",
"manifest.json": "a5f3c5ee9d40473f989c09e4118f97d5",
"version.json": "1b21b9e2356f85557c1db13cd140f0f2"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
