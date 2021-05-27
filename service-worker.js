/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/ZeroClian/public/archives/2020/01/index.html","6553e69366361f503dc7a3d9c0618dba"],["D:/ZeroClian/public/archives/2020/05/index.html","347674e8ddf3a0f8014ef561db6a0fe8"],["D:/ZeroClian/public/archives/2020/12/index.html","54872befcad2ce9afc3dab8ba54d247a"],["D:/ZeroClian/public/archives/2020/index.html","554d3ce5c7665adb52f9ead1b083815b"],["D:/ZeroClian/public/archives/2021/01/index.html","5df7794edafaba539e6c80061c37cf6c"],["D:/ZeroClian/public/archives/2021/03/index.html","952a23f1726e9405b21d7ecbe1c541ac"],["D:/ZeroClian/public/archives/2021/04/index.html","64fd690ab083f18f9bdc019829238412"],["D:/ZeroClian/public/archives/2021/05/index.html","01bfbb53dc30a82d5ac76d4bd928776a"],["D:/ZeroClian/public/archives/2021/06/index.html","f73728490f112e0eade61172b1122675"],["D:/ZeroClian/public/archives/2021/index.html","c9001aad4d6fda8ab34790f9746aa8ac"],["D:/ZeroClian/public/archives/2021/page/2/index.html","d1db53560b37bc3fdd0f084a6c0a463a"],["D:/ZeroClian/public/archives/index.html","47471f89f7db786d9fb95db122ef3004"],["D:/ZeroClian/public/archives/page/2/index.html","ff408b429fa852bbc730493913c72813"],["D:/ZeroClian/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/ZeroClian/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/ZeroClian/public/categories/Hexo/index.html","eef4af38a1f1c4ae34a20a2169680e2d"],["D:/ZeroClian/public/categories/index.html","bc4ce01e833d47ae9b65bedefec4577c"],["D:/ZeroClian/public/categories/vscode/index.html","d880c38034d7fdc2fe63da2e30877fd7"],["D:/ZeroClian/public/categories/容器/index.html","186456e442e681ea1e03fd4ade922ae2"],["D:/ZeroClian/public/categories/工作/index.html","7c2d44ae7c9ae2e3b580865c944b72f4"],["D:/ZeroClian/public/categories/生活/index.html","b65e6bea3c0cd97cdfad60f9bb52a778"],["D:/ZeroClian/public/categories/面试必备/Java基础/index.html","471af3c84ab86ffed2efa050c6a92a1f"],["D:/ZeroClian/public/categories/面试必备/MySQL/index.html","5b894b05c975f683136ce491f1380982"],["D:/ZeroClian/public/categories/面试必备/Spring/index.html","a15c6ae0c7a624f91d300984d67ff3c8"],["D:/ZeroClian/public/categories/面试必备/index.html","6ec5b72ece421c615c0d08ccb99027e0"],["D:/ZeroClian/public/categories/面试必备/page/2/index.html","71a5bf33c6a6e366031c16556986479e"],["D:/ZeroClian/public/categories/面试必备/多线程/index.html","8b22c7e9fbe8ded1669a3a62fac0367a"],["D:/ZeroClian/public/categories/项目/Android/index.html","70348e960d55eefb7de1afc3cb9aabb3"],["D:/ZeroClian/public/categories/项目/index.html","4578c3979ea9297f8107afa987e98b49"],["D:/ZeroClian/public/css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["D:/ZeroClian/public/css/index.css","44bacf810fed2654641b90a8dff2aa81"],["D:/ZeroClian/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/ZeroClian/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/ZeroClian/public/img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["D:/ZeroClian/public/img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["D:/ZeroClian/public/img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["D:/ZeroClian/public/img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["D:/ZeroClian/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/ZeroClian/public/img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["D:/ZeroClian/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/ZeroClian/public/img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["D:/ZeroClian/public/index.html","de6865fa5ae7c59ce1ce4ac407c25689"],["D:/ZeroClian/public/js/main.js","daa594fa296eadb9c43910113c5f8341"],["D:/ZeroClian/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/ZeroClian/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/ZeroClian/public/js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["D:/ZeroClian/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/ZeroClian/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/ZeroClian/public/link/index.html","05768e823aefbaea1a1e5a13ac84ceb4"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/ZeroClian/public/page/2/index.html","f4a17676fd65da8282e36a5c1d64da57"],["D:/ZeroClian/public/page/3/index.html","f7dcee7d87d79994d3fb3b0d1b6fb720"],["D:/ZeroClian/public/page/4/index.html","c83f88bf422cf52832b3310900cdef9a"],["D:/ZeroClian/public/posts/0.html","669b7fd95b03d93d8ec445e186029314"],["D:/ZeroClian/public/posts/1e489958.html","638fa2878c7c9092eb514d8530e6b57d"],["D:/ZeroClian/public/posts/34fea2ea.html","e7ea5b144d2d5a9e44edb07ebfe39c7f"],["D:/ZeroClian/public/posts/4a17b156.html","46ea65762ce2342a98c12249a869af38"],["D:/ZeroClian/public/posts/5fddb0d.html","2022d9d2b613918eaac43f767d60e289"],["D:/ZeroClian/public/posts/632b531d.html","f035ac7007adf949bf0e93694e7655e1"],["D:/ZeroClian/public/posts/64cd635.html","bb93bcc9e260ac67a981002e1e25c250"],["D:/ZeroClian/public/posts/681a2204.html","62b5ca3d3f511f845a41cb7f33cfb62d"],["D:/ZeroClian/public/posts/7981371.html","2d0ed9b9027fa7f98217c6c28c509d94"],["D:/ZeroClian/public/posts/9683a4f7.html","fd5fd0d2663a661415998b98d14d3f43"],["D:/ZeroClian/public/posts/97d452a7.html","3b75d271757272fd204ea5c22a994618"],["D:/ZeroClian/public/posts/a0808890.html","63a753ac63039a660b3d32bdd0928a44"],["D:/ZeroClian/public/posts/c352a0f3.html","ad8762a2f4bf4fb2e2e4a36e60c4dbb4"],["D:/ZeroClian/public/posts/c8ced817.html","ead8481e375c8d76528af97cd6bba623"],["D:/ZeroClian/public/posts/ca4da212.html","6c78d90478f3deb2a9a4d4cf28de8801"],["D:/ZeroClian/public/posts/d62ead0.html","0e20c01a074bd134ea9272352ebf8fe0"],["D:/ZeroClian/public/posts/d98c058a.html","956500f348be68c9a029b502c55a45db"],["D:/ZeroClian/public/posts/df083c4d.html","37e6484793e256e78fd08851df144e30"],["D:/ZeroClian/public/posts/f7ede91d.html","cd34d4dd49cd1bb7c14694e6fa0026dc"],["D:/ZeroClian/public/tags/Docker/index.html","5d54074b12bed96584ccb4821de406f0"],["D:/ZeroClian/public/tags/MySQL/index.html","e78a09149a5d11df90f7eb2dad9bb823"],["D:/ZeroClian/public/tags/Spring/index.html","6cca223b5bb5685f9478faa4b32a1b04"],["D:/ZeroClian/public/tags/Steam/index.html","deb52b508e9fc1ae40cf0ac7eba42cac"],["D:/ZeroClian/public/tags/index.html","4e4d024808b8242aaaa5f771b1604155"],["D:/ZeroClian/public/tags/优化/index.html","52913a2cc994b070c652fbd298188711"],["D:/ZeroClian/public/tags/基础知识/index.html","afd37ac92a8cc627f7f1d370be9b0a6b"],["D:/ZeroClian/public/tags/并发编程/index.html","927df351314dc8d71dadd3547a5d41fd"],["D:/ZeroClian/public/tags/总结/index.html","e4afcaeb32dfb157a75a0f2f5c6a891c"],["D:/ZeroClian/public/tags/模板/index.html","e485986f27f001a2638ed2524069cd60"],["D:/ZeroClian/public/tags/测试/index.html","5b750a34d1a3f0b247d64133ad275614"],["D:/ZeroClian/public/tags/课程设计/index.html","59c7fb8bdb61f3e007bca50aee4fb7fd"],["D:/ZeroClian/public/tags/配置/index.html","51dfb1d6d9151ad31830adaf67185c23"],["D:/ZeroClian/public/tags/集合/index.html","a6752b0da6f1947db6da3d9ecd27296e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







