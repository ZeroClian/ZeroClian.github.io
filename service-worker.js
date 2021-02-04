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

var precacheConfig = [["D:/ZeroClian/public/archives/2020/01/index.html","739e30f20871b407aae1717771710920"],["D:/ZeroClian/public/archives/2020/12/index.html","b89d439fe8c92021ecc9d765127874f4"],["D:/ZeroClian/public/archives/2020/index.html","90ed66a629c78ff892b69504d7defcd1"],["D:/ZeroClian/public/archives/2021/01/index.html","8e609234c289ba38c9112b236d563229"],["D:/ZeroClian/public/archives/2021/index.html","636ac37d27d8f29a1db619e31f7ffc40"],["D:/ZeroClian/public/archives/index.html","66ff940e9ea5548c24c538004ce53fad"],["D:/ZeroClian/public/archives/page/2/index.html","fa993bf4ccbb224103bcc48cf8055aff"],["D:/ZeroClian/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/ZeroClian/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/ZeroClian/public/categories/Hexo/index.html","c9950d275679859ff2422a00525de263"],["D:/ZeroClian/public/categories/Spring全家桶/Spring/index.html","3764a3e68d740f81a6ac1b4b86ccf28d"],["D:/ZeroClian/public/categories/Spring全家桶/index.html","6b737b86bdec224091f92419a19ba7e1"],["D:/ZeroClian/public/categories/index.html","27f31a250aa26bada67e78c9d38a842a"],["D:/ZeroClian/public/categories/vscode/index.html","6a3e1492c1198fcc01bbb35e79218cdf"],["D:/ZeroClian/public/categories/容器/index.html","2ef3db4698692f61c8bd3251c85822db"],["D:/ZeroClian/public/categories/生活/index.html","97c2fdc5556faae51eb6a66e6b856d64"],["D:/ZeroClian/public/categories/面试必备/Java基础/index.html","caafe5e9cc02aaaae4179fa4a4a3f49f"],["D:/ZeroClian/public/categories/面试必备/MySQL/index.html","db8cea68cb3e26185f75ea381ca77fc5"],["D:/ZeroClian/public/categories/面试必备/Spring/index.html","7f5ce5119f8f94560f24a0b9449fbbae"],["D:/ZeroClian/public/categories/面试必备/index.html","9e5dd8ef811856449f86021680bb1d81"],["D:/ZeroClian/public/categories/面试必备/多线程/index.html","bfd972e759cbd265b11efda416bbb51e"],["D:/ZeroClian/public/categories/项目/Android/index.html","7e77fcc5ffc9e8b13375e99093b54642"],["D:/ZeroClian/public/categories/项目/index.html","86452447a5e809cdd6ef527f6549e1cb"],["D:/ZeroClian/public/css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["D:/ZeroClian/public/css/index.css","44bacf810fed2654641b90a8dff2aa81"],["D:/ZeroClian/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/ZeroClian/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/ZeroClian/public/img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["D:/ZeroClian/public/img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["D:/ZeroClian/public/img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["D:/ZeroClian/public/img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["D:/ZeroClian/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/ZeroClian/public/img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["D:/ZeroClian/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/ZeroClian/public/img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["D:/ZeroClian/public/index.html","975ae665609d522ad2d07c49b3677648"],["D:/ZeroClian/public/js/main.js","daa594fa296eadb9c43910113c5f8341"],["D:/ZeroClian/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/ZeroClian/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/ZeroClian/public/js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["D:/ZeroClian/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/ZeroClian/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/ZeroClian/public/link/index.html","400ddff91f8cd32351afaea5b3f98e1d"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/ZeroClian/public/page/2/index.html","1ec9c8537163788c7d1e07892ca7114c"],["D:/ZeroClian/public/page/3/index.html","76c10563c1645a152cdcdccfacffc644"],["D:/ZeroClian/public/posts/1e489958.html","023d6ab1625292704e65ba9a96f5fb87"],["D:/ZeroClian/public/posts/34fea2ea.html","b8fea4ddf29faba43f7e37208b9f411e"],["D:/ZeroClian/public/posts/4a17b156.html","23928fd302c199f9674888a24203c309"],["D:/ZeroClian/public/posts/632b531d.html","a90fbd0602370f53ac20d8b4c925784a"],["D:/ZeroClian/public/posts/64cd635.html","c284565d6d22e6cf43a924cda0632b63"],["D:/ZeroClian/public/posts/7981371.html","d88d47d1cbea07cffe4f6181e8ab4a98"],["D:/ZeroClian/public/posts/9683a4f7.html","19b69c65b0ebcb5b9bc1f9c8a89f9113"],["D:/ZeroClian/public/posts/97d452a7.html","4266eef9334d12ea54d98969efd05dbc"],["D:/ZeroClian/public/posts/a0808890.html","1b5d5e4e746ade0f8fefc7a671066d7c"],["D:/ZeroClian/public/posts/c8ced817.html","cea019e8ae1a4041e1d64c7238ff4fae"],["D:/ZeroClian/public/posts/d62ead0.html","76f43a20a45b262fd13fe9b79df25dcc"],["D:/ZeroClian/public/posts/d98c058a.html","14fbfd4a595075203ce1151b58569474"],["D:/ZeroClian/public/posts/f7ede91d.html","9b087191c47c2a7382d6cb5d8d5dea75"],["D:/ZeroClian/public/tags/Docker/index.html","b3e22240b0f77970637a7950aeb888f0"],["D:/ZeroClian/public/tags/MySQL/index.html","8a6f3badbf40e05e68ea7a47f76d1f10"],["D:/ZeroClian/public/tags/Spring/index.html","09f4a43b4fd6e0ead904ba0bb98fb836"],["D:/ZeroClian/public/tags/index.html","87a409c4e2b6cd3edbba4856281ec6e1"],["D:/ZeroClian/public/tags/基础知识/index.html","2af1b90b2a317ee18e24b7ae2e94307b"],["D:/ZeroClian/public/tags/并发编程/index.html","b0ce382dac2de6e603d9d643b00d8039"],["D:/ZeroClian/public/tags/总结/index.html","d6791f817b8508467bd8a8cc9aa48064"],["D:/ZeroClian/public/tags/模板/index.html","442ca1315dd6105cf63b6f62aef7e0f2"],["D:/ZeroClian/public/tags/测试/index.html","e254bbb0962b522deb7a50e26e8a892b"],["D:/ZeroClian/public/tags/课程设计/index.html","e6001c2d62c85e3aad0ba6f8042ece97"],["D:/ZeroClian/public/tags/配置/index.html","10a7ce7c1f1596171a5d30e08f9f3d2a"]];
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







