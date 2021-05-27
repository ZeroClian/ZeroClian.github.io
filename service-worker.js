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

var precacheConfig = [["D:/ZeroClian/public/archives/2020/01/index.html","8cc190aad2ab340bfa23c024d53eaf1a"],["D:/ZeroClian/public/archives/2020/05/index.html","af3a38789f17eebf3cd96d262e3462b4"],["D:/ZeroClian/public/archives/2020/12/index.html","fc95749b533764601126c0ceec872f05"],["D:/ZeroClian/public/archives/2020/index.html","966fe7fb090c1a14d017e5dd393d2f9a"],["D:/ZeroClian/public/archives/2021/01/index.html","0f397f257790677c467f31596d73bb40"],["D:/ZeroClian/public/archives/2021/03/index.html","3ded567d1041f105c8d927bf9b60e94d"],["D:/ZeroClian/public/archives/2021/04/index.html","de1577856d68dc8404aeb4b9c312dfe5"],["D:/ZeroClian/public/archives/2021/05/index.html","c193091bd8ed6f88eb667ef5082609db"],["D:/ZeroClian/public/archives/2021/index.html","b176236386622dab7b9e77fa6db8921d"],["D:/ZeroClian/public/archives/2021/page/2/index.html","c68f9903dff7f8c120b04b3be4cf8076"],["D:/ZeroClian/public/archives/index.html","4b204a096deb3dc68482618f93c9f515"],["D:/ZeroClian/public/archives/page/2/index.html","eadf0a2059d1939786a634ffd2aa173b"],["D:/ZeroClian/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/ZeroClian/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/ZeroClian/public/categories/Hexo/index.html","6ef0b00eaad54d65d47d2bd5b160d113"],["D:/ZeroClian/public/categories/IDEA/index.html","fdd2fd6ff4d3b3dbec64194d10eda5da"],["D:/ZeroClian/public/categories/index.html","ef91c41baa4f36f085d7ac88c7102f91"],["D:/ZeroClian/public/categories/vscode/index.html","b3e1a8feb1cf5ca3d1097f73dfa60a1f"],["D:/ZeroClian/public/categories/容器/index.html","8cb46379deea91a348d78a3f0ed78884"],["D:/ZeroClian/public/categories/工作/index.html","6e5b914793edb4a22e017a4f8ef3ebc6"],["D:/ZeroClian/public/categories/生活/index.html","377754d67619095e0ee913d6bca6542e"],["D:/ZeroClian/public/categories/面试必备/Java基础/index.html","6d2319e6ba541128439cc0d8dec8f160"],["D:/ZeroClian/public/categories/面试必备/MySQL/index.html","519f24c260b9cbd1fa9ee650957fe9e5"],["D:/ZeroClian/public/categories/面试必备/Spring/index.html","9bb27a9b10c3e71c0d961db6578b88b4"],["D:/ZeroClian/public/categories/面试必备/index.html","26f4a6a848416d528ef31dd441e70c5c"],["D:/ZeroClian/public/categories/面试必备/page/2/index.html","b7f3ba09d0d7282251391d97bc8a4a5d"],["D:/ZeroClian/public/categories/面试必备/多线程/index.html","d360ae2c1cf204854e411eebea347015"],["D:/ZeroClian/public/categories/项目/Android/index.html","5eba31514381efe3b9aee20ab0c46f25"],["D:/ZeroClian/public/categories/项目/index.html","71b2299535318c69db5adc4fba35d54a"],["D:/ZeroClian/public/css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["D:/ZeroClian/public/css/index.css","44bacf810fed2654641b90a8dff2aa81"],["D:/ZeroClian/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/ZeroClian/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/ZeroClian/public/img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["D:/ZeroClian/public/img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["D:/ZeroClian/public/img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["D:/ZeroClian/public/img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["D:/ZeroClian/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/ZeroClian/public/img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["D:/ZeroClian/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/ZeroClian/public/img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["D:/ZeroClian/public/index.html","1932ae10bead1788a44351ed6f477527"],["D:/ZeroClian/public/js/main.js","daa594fa296eadb9c43910113c5f8341"],["D:/ZeroClian/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/ZeroClian/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/ZeroClian/public/js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["D:/ZeroClian/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/ZeroClian/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/ZeroClian/public/link/index.html","4ae4b6c19ef4252fac9a47d5e8fbb65f"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/ZeroClian/public/page/2/index.html","5839fa942d16490c04ff41a35c01b826"],["D:/ZeroClian/public/page/3/index.html","2fb30778c15b41d57d442fdebfe342c6"],["D:/ZeroClian/public/page/4/index.html","89e75cec8a97a31e9123062d9785094f"],["D:/ZeroClian/public/posts/1e489958.html","2132e78281f5a41b9a511aad860a973c"],["D:/ZeroClian/public/posts/34fea2ea.html","c514f368272e53bb22ba43ae69d934eb"],["D:/ZeroClian/public/posts/4a17b156.html","89112aa3bc8d1ae65bad0c24ec8c44e5"],["D:/ZeroClian/public/posts/566321e7.html","bb921c8c798dcecf99d351f050c7ac8e"],["D:/ZeroClian/public/posts/5fddb0d.html","634620448d294babcc7b9278cbf27144"],["D:/ZeroClian/public/posts/632b531d.html","90ed89870d48ef4699d76916d664c163"],["D:/ZeroClian/public/posts/64cd635.html","40feddce4b2ec935835930f24aa1c2ca"],["D:/ZeroClian/public/posts/681a2204.html","3292e20df9d353bad867dd548d6501ef"],["D:/ZeroClian/public/posts/7981371.html","dedd23e51684d2049f4f82a383881ae7"],["D:/ZeroClian/public/posts/9683a4f7.html","da967417f115f9b43f96a30702e5660b"],["D:/ZeroClian/public/posts/97d452a7.html","c183ec5006a140549fe3b56b5b3e28f2"],["D:/ZeroClian/public/posts/a0808890.html","2a97d3743abd3f46b2388d307aded825"],["D:/ZeroClian/public/posts/c352a0f3.html","f549ea4f7695e64c6437c1ab5ded0a71"],["D:/ZeroClian/public/posts/c8ced817.html","69f916c11a68fe1c418354770e53ff4c"],["D:/ZeroClian/public/posts/ca4da212.html","cd67e715bf55fc706d84a95813c94ad6"],["D:/ZeroClian/public/posts/d62ead0.html","a3961b52ccd2bbcbd79f5f15d23ffca9"],["D:/ZeroClian/public/posts/d98c058a.html","7c8f72991e72310c3f6aab62093a803d"],["D:/ZeroClian/public/posts/df083c4d.html","5b40f34223937d2509e2c532eee48552"],["D:/ZeroClian/public/posts/f7ede91d.html","74b5e7282aff798f5b478f0cdaee6a9e"],["D:/ZeroClian/public/tags/Docker/index.html","07beb18b86d8e65d3c46ffeee7d11e72"],["D:/ZeroClian/public/tags/MySQL/index.html","2b0ae033dd2f7c2d1026c117a861d2e4"],["D:/ZeroClian/public/tags/Spring/index.html","3fce88859dafaca1893431a4148a22b6"],["D:/ZeroClian/public/tags/Steam/index.html","b55c48646c81d5433831c13105adf0dc"],["D:/ZeroClian/public/tags/index.html","a81e24a88dc42798308951069e6de838"],["D:/ZeroClian/public/tags/优化/index.html","bd6776edb70a14d869ad7f3edbc4aeb8"],["D:/ZeroClian/public/tags/基础知识/index.html","218b7988898824e5a38ffb99c729c2a8"],["D:/ZeroClian/public/tags/并发编程/index.html","a4980df57d89f5d967f20d45b7946136"],["D:/ZeroClian/public/tags/快捷键/index.html","5401be823a57565545ed4ec002c4d978"],["D:/ZeroClian/public/tags/总结/index.html","fc308d50a367096fe9acd6b8dc486413"],["D:/ZeroClian/public/tags/模板/index.html","6447687af99ac90df72c2174dd26ed2b"],["D:/ZeroClian/public/tags/测试/index.html","826955b51b201076420d519cea8e6f6b"],["D:/ZeroClian/public/tags/课程设计/index.html","2ccbb7a3c2487364a9a4d454ddefa089"],["D:/ZeroClian/public/tags/配置/index.html","350229e6e72444ef36d1f008b3d52583"],["D:/ZeroClian/public/tags/集合/index.html","3cef2b97c9a927142322f4e488a01c87"]];
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







