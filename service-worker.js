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

var precacheConfig = [["D:/ZeroClian/public/2020/01/04/简闻——新闻查看APP/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/2020/12/29/hello-world/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/2020/12/30/VSCode的一些骚操作/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/2020/12/31/回顾2020年/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/2021/01/01/Spring IOC & AOP/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/2021/01/02/AarryList  和 LinkedList 的区别/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/2021/01/02/List、Set、Map三者的区别？/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/2021/01/02/浅谈 MySQL 事务/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/2021/01/02/面试之——浅谈Spring-MVC/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/2021/01/04/Synchronized-关键字/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/2021/01/04/浅谈锁优化/index.html","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/archives/2020/01/index.html","436ecec80d0855f4a7fa12f3e0229f07"],["D:/ZeroClian/public/archives/2020/12/index.html","8b52dff174f8cd9fa7936cb9df608eb0"],["D:/ZeroClian/public/archives/2020/index.html","62bb2f5fa37d9c309ec02d16fc2ee92f"],["D:/ZeroClian/public/archives/2021/01/index.html","0a5f884cb2ee4275d54ee40dad12b123"],["D:/ZeroClian/public/archives/2021/index.html","aa59f4511e922956f15a2cdd4e61a78b"],["D:/ZeroClian/public/archives/index.html","4d091860fa5e9ccce1561b60b413c391"],["D:/ZeroClian/public/archives/page/2/index.html","5ffa0d938997beba4d39dd3117396911"],["D:/ZeroClian/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/ZeroClian/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/ZeroClian/public/categories/Hexo/index.html","b6250147a1d64651eb2da09c99ce7102"],["D:/ZeroClian/public/categories/Spring全家桶/Spring/index.html","2c241f065e6de163c24c58f73dcb80fd"],["D:/ZeroClian/public/categories/Spring全家桶/index.html","349d34b2084675a3310d045927e3346f"],["D:/ZeroClian/public/categories/index.html","9d4dac4644df077501fb9072e9ca2f93"],["D:/ZeroClian/public/categories/vscode/index.html","a30da2759c096d6b4353552d72b67482"],["D:/ZeroClian/public/categories/生活/index.html","b97e117b5042096038827d13f1b6584f"],["D:/ZeroClian/public/categories/面试必备/Java基础/index.html","9fee07103a242860cd66a41b0eed87e0"],["D:/ZeroClian/public/categories/面试必备/MySQL/index.html","a163e87932719a6a5532abe4dc1b7b73"],["D:/ZeroClian/public/categories/面试必备/Spring/index.html","cb61892c8dabe8f9969130e6eb045a36"],["D:/ZeroClian/public/categories/面试必备/index.html","ef9f4995dac4f28e21692174d30f275f"],["D:/ZeroClian/public/categories/面试必备/多线程/index.html","df91c4ece5a269eb04884aa3a8b2dcbf"],["D:/ZeroClian/public/categories/项目/Android/index.html","e89bfb5a1e9991349f6f43cf02b522fa"],["D:/ZeroClian/public/categories/项目/index.html","62602d7de364fad650a89e6a373521a8"],["D:/ZeroClian/public/css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["D:/ZeroClian/public/css/index.css","17e86dcffe1423206ccd89d70d7c056e"],["D:/ZeroClian/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/ZeroClian/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/ZeroClian/public/img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["D:/ZeroClian/public/img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["D:/ZeroClian/public/img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["D:/ZeroClian/public/img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["D:/ZeroClian/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/ZeroClian/public/img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["D:/ZeroClian/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/ZeroClian/public/img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["D:/ZeroClian/public/index.html","1c8b73f685b79c5db54723c98607c1e0"],["D:/ZeroClian/public/js/main.js","daa594fa296eadb9c43910113c5f8341"],["D:/ZeroClian/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/ZeroClian/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/ZeroClian/public/js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["D:/ZeroClian/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/ZeroClian/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/ZeroClian/public/link/index.html","8e74142a8956590b55f7729ad8004eb6"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/ZeroClian/public/page/2/index.html","85d7318c459fdfe7bcd78ec8dae62dc5"],["D:/ZeroClian/public/page/3/index.html","530e09415f8a60a19342a014d34abf96"],["D:/ZeroClian/public/tags/MySQL/index.html","1b40861146395eae8c42084474facc7f"],["D:/ZeroClian/public/tags/Spring/index.html","8c2e80480d4f66d3a9e704d0f2bc5ae0"],["D:/ZeroClian/public/tags/index.html","cd137a220aa18f62a4d8b98ee40d6b9c"],["D:/ZeroClian/public/tags/基础知识/index.html","296cbbe0ccbb7439916c1cd4b88a0941"],["D:/ZeroClian/public/tags/并发编程/index.html","701004c29abdcf17fc7d6674cc2a55bd"],["D:/ZeroClian/public/tags/总结/index.html","aef266d3260fb9c5eb857d5d8e2f5d13"],["D:/ZeroClian/public/tags/模板/index.html","6702d99b71d5294f4fecb48bb3ed253b"],["D:/ZeroClian/public/tags/测试/index.html","4842e89011fd50e03eedf51794f58801"],["D:/ZeroClian/public/tags/课程设计/index.html","f690411d5b4beb6bc6087a538d04068f"],["D:/ZeroClian/public/tags/配置/index.html","56f239a83daa820f785a631563128c6c"]];
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







