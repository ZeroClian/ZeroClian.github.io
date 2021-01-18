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

var precacheConfig = [["D:/ZeroClian/public/archives/2020/01/index.html","40287d7329d97d300a47e6052857972e"],["D:/ZeroClian/public/archives/2020/12/index.html","5eee7e5b36ddc516db0ef2ee44fd4385"],["D:/ZeroClian/public/archives/2020/index.html","8ef602ef1e21793f2f7979b8c8728328"],["D:/ZeroClian/public/archives/2021/01/index.html","692b974bc8e6f8915abe1cb67fc7b4bd"],["D:/ZeroClian/public/archives/2021/index.html","9b090331042278b2b4edc86366586511"],["D:/ZeroClian/public/archives/index.html","6257ea612fd07aa4f9304e47a4fd8c80"],["D:/ZeroClian/public/archives/page/2/index.html","7b3c691c078f3d12d574e16f43a4ec99"],["D:/ZeroClian/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/ZeroClian/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/ZeroClian/public/categories/Hexo/index.html","a6d97dc274883c00f8b282cbb6dd9365"],["D:/ZeroClian/public/categories/Spring全家桶/Spring/index.html","371997fa1d84864f7d54944ebf757a06"],["D:/ZeroClian/public/categories/Spring全家桶/index.html","8515554bdad54d3ef6ca087b32ce1b80"],["D:/ZeroClian/public/categories/index.html","864033a8b255973f613aca3d8c014df2"],["D:/ZeroClian/public/categories/vscode/index.html","1d8cae461f5b2a7bbc2a64ec3ffdd9c0"],["D:/ZeroClian/public/categories/生活/index.html","245a5a843e18f0bd1acc09ae8572ec04"],["D:/ZeroClian/public/categories/面试必备/Java基础/index.html","44b37f542d960ab944aba378de5f45e7"],["D:/ZeroClian/public/categories/面试必备/MySQL/index.html","8f131406e7342f172ab81f0238deb946"],["D:/ZeroClian/public/categories/面试必备/Spring/index.html","d5da02e65366a6fe14843b3ea08158ff"],["D:/ZeroClian/public/categories/面试必备/index.html","f6381d59d89be80b7531f59f46f1085f"],["D:/ZeroClian/public/categories/面试必备/多线程/index.html","20e520ddf00c46591f9be694e8fbe008"],["D:/ZeroClian/public/categories/项目/Android/index.html","8523b0c855ac477efd4f58e5d2c2bc17"],["D:/ZeroClian/public/categories/项目/index.html","faea20e83d2a68f625a4d7b7cbb54953"],["D:/ZeroClian/public/css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["D:/ZeroClian/public/css/index.css","44bacf810fed2654641b90a8dff2aa81"],["D:/ZeroClian/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/ZeroClian/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/ZeroClian/public/img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["D:/ZeroClian/public/img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["D:/ZeroClian/public/img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["D:/ZeroClian/public/img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["D:/ZeroClian/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/ZeroClian/public/img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["D:/ZeroClian/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/ZeroClian/public/img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["D:/ZeroClian/public/index.html","094fc522f4613622a9c91e70dd7b46f0"],["D:/ZeroClian/public/js/main.js","daa594fa296eadb9c43910113c5f8341"],["D:/ZeroClian/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/ZeroClian/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/ZeroClian/public/js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["D:/ZeroClian/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/ZeroClian/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/ZeroClian/public/link/index.html","bd41d0f927b917951905f9b30a426c82"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/ZeroClian/public/page/2/index.html","fe948b486aea1041de42906732d630f8"],["D:/ZeroClian/public/page/3/index.html","31721a07d6d59f4f35cbeb99557212b5"],["D:/ZeroClian/public/posts/1e489958.html","4cb63cb517d562a354d481444ead91a9"],["D:/ZeroClian/public/posts/34fea2ea.html","e2dc819333959f6a857ef4eb5dff71f7"],["D:/ZeroClian/public/posts/4a17b156.html","ea7e795224fb562fddb78821a43ada13"],["D:/ZeroClian/public/posts/632b531d.html","a9254fa74f8c8935d711f978468fd9a5"],["D:/ZeroClian/public/posts/64cd635.html","a36945dbf6a67a2ac6c9653d9b7042c8"],["D:/ZeroClian/public/posts/7981371.html","ccb052ac4fb7569e376d090efb0fc07d"],["D:/ZeroClian/public/posts/97d452a7.html","081ea50d644f251cf8221a80f6ffcfc2"],["D:/ZeroClian/public/posts/a0808890.html","d42e856ee945ac8c1c6a5415bcf368c7"],["D:/ZeroClian/public/posts/c8ced817.html","c23843fe14c6b1f1390d9d0f108290a1"],["D:/ZeroClian/public/posts/d62ead0.html","981bebd87d4905d4092a5443d7f2c0a4"],["D:/ZeroClian/public/posts/d98c058a.html","1892a8a4d76190eadd21bd82b053c9a6"],["D:/ZeroClian/public/tags/MySQL/index.html","d905b7d9f485f8b742919f848013601e"],["D:/ZeroClian/public/tags/Spring/index.html","5bd9c086268dd76164a87d705c085c8d"],["D:/ZeroClian/public/tags/index.html","9daeb5ec65dfde25a252791ff361d040"],["D:/ZeroClian/public/tags/基础知识/index.html","cbf60bc80594fdf3176037e2fe472828"],["D:/ZeroClian/public/tags/并发编程/index.html","03e11bf62b903006c4ca6eaf574b1c91"],["D:/ZeroClian/public/tags/总结/index.html","0f997ecc13c59806d2738ec395837d36"],["D:/ZeroClian/public/tags/模板/index.html","7f54b664ef806e5d0e91c56fd14b336c"],["D:/ZeroClian/public/tags/测试/index.html","257c28d71af2135dcfe64dbea3bb8d3e"],["D:/ZeroClian/public/tags/课程设计/index.html","7273617ff8568bb4e9ef5dae7abba7af"],["D:/ZeroClian/public/tags/配置/index.html","71fb60dccc30c270e8be778497e0a186"]];
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







