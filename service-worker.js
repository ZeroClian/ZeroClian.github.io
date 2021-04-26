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

var precacheConfig = [["D:/ZeroClian/public/archives/2020/01/index.html","469f7a7bb3d85735d0ccf1f73b809c0c"],["D:/ZeroClian/public/archives/2020/12/index.html","bdb3bc1017533478ccd677d43045041e"],["D:/ZeroClian/public/archives/2020/index.html","037244f4d931e05acd009287dd20c086"],["D:/ZeroClian/public/archives/2021/01/index.html","bc083b1e3488d95f692bbbfbbcfbd6a4"],["D:/ZeroClian/public/archives/2021/03/index.html","236cfe3683dd4451298796e14ef3d4b4"],["D:/ZeroClian/public/archives/2021/04/index.html","0296783c980d910de565a84376ff59f4"],["D:/ZeroClian/public/archives/2021/index.html","84abc36354d729c5fb8aaa91908d6e1d"],["D:/ZeroClian/public/archives/2021/page/2/index.html","ffd0ab70bb5ae585f999e2f7ac0b3f1c"],["D:/ZeroClian/public/archives/index.html","63f210430d2961336dd00c4810dc4902"],["D:/ZeroClian/public/archives/page/2/index.html","2ed3d17dcb0517d7a9b08f2f757ccdec"],["D:/ZeroClian/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/ZeroClian/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/ZeroClian/public/categories/Hexo/index.html","440baa9e58a0361265148c8b6ad08ee2"],["D:/ZeroClian/public/categories/index.html","005e40a9736c9f66e80740ce0f231e1d"],["D:/ZeroClian/public/categories/vscode/index.html","5b5b15e9dae8a7ece102f30db9db051a"],["D:/ZeroClian/public/categories/容器/index.html","511b36370423d8df59af560fb17c414f"],["D:/ZeroClian/public/categories/生活/index.html","fdf0823216fb2c033633cfe40e144519"],["D:/ZeroClian/public/categories/面试必备/Java基础/index.html","daa4a06b13b226cf03c64bc6221e75c8"],["D:/ZeroClian/public/categories/面试必备/MySQL/index.html","92ad9e3c4a47d649c098884d51910150"],["D:/ZeroClian/public/categories/面试必备/Spring/index.html","3d623b340fcab68ac73e10bc265a9691"],["D:/ZeroClian/public/categories/面试必备/index.html","03b23de2da23a7f2628cf0085e8e47f0"],["D:/ZeroClian/public/categories/面试必备/多线程/index.html","d118a60599a242e02248f4c6f5066359"],["D:/ZeroClian/public/categories/项目/Android/index.html","cfb8a2d48c8da4e3ed36d25837c7fa4c"],["D:/ZeroClian/public/categories/项目/index.html","a14861981e350afa405b49610e242a35"],["D:/ZeroClian/public/css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["D:/ZeroClian/public/css/index.css","44bacf810fed2654641b90a8dff2aa81"],["D:/ZeroClian/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/ZeroClian/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/ZeroClian/public/img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["D:/ZeroClian/public/img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["D:/ZeroClian/public/img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["D:/ZeroClian/public/img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["D:/ZeroClian/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/ZeroClian/public/img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["D:/ZeroClian/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/ZeroClian/public/img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["D:/ZeroClian/public/index.html","33c2d034ece5f2f0ec5a10b3fbf5ecc6"],["D:/ZeroClian/public/js/main.js","daa594fa296eadb9c43910113c5f8341"],["D:/ZeroClian/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/ZeroClian/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/ZeroClian/public/js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["D:/ZeroClian/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/ZeroClian/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/ZeroClian/public/link/index.html","e665db0ed749d241aafd24dc678eeb16"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/ZeroClian/public/page/2/index.html","5242cb4a183b6038f24cc31dbe21beed"],["D:/ZeroClian/public/page/3/index.html","7eea25307eadce8d0d0ee8d5a6fac858"],["D:/ZeroClian/public/posts/1e489958.html","3e413714deeb1e98f66cabe33ff23cff"],["D:/ZeroClian/public/posts/34fea2ea.html","4c19a72d0f0a8b61b561a55bfdc6d466"],["D:/ZeroClian/public/posts/4a17b156.html","db56bda9fa2b6ac9cbb6bd1f7c9b516c"],["D:/ZeroClian/public/posts/632b531d.html","9bd57ce51469cf068896de170f6ad90a"],["D:/ZeroClian/public/posts/64cd635.html","f962398064e0eec32543ad0cc841317e"],["D:/ZeroClian/public/posts/7981371.html","51cfa9830fb191d86ff4fc3437285db2"],["D:/ZeroClian/public/posts/9683a4f7.html","09e44ed3ce7dd8cf19a9249b3d1b83c7"],["D:/ZeroClian/public/posts/97d452a7.html","7289aaa325eed6304b7ddcb5b11423d7"],["D:/ZeroClian/public/posts/a0808890.html","f5fce171623005b97f9693b66f930171"],["D:/ZeroClian/public/posts/c352a0f3.html","ff87abb78cfa436ea83587d2eab77234"],["D:/ZeroClian/public/posts/c8ced817.html","ff09e40d27a6c70d974271ddc9313f04"],["D:/ZeroClian/public/posts/ca4da212.html","ab50bac834b9b2cde038e521e1b1f1c6"],["D:/ZeroClian/public/posts/d62ead0.html","3886b86646cbeb7c80167a9318c3278e"],["D:/ZeroClian/public/posts/d98c058a.html","c84dad467dba8c3889c2c52132fa2009"],["D:/ZeroClian/public/posts/f7ede91d.html","c3f5444a31dc09afd46599e62cda9a91"],["D:/ZeroClian/public/tags/Docker/index.html","9625ce7e939c54c16565f14203503383"],["D:/ZeroClian/public/tags/MySQL/index.html","3e44ab3f6dbf35581b00901f5c057ba8"],["D:/ZeroClian/public/tags/Spring/index.html","8f5d3966ceed8debaf33b7a17cee8019"],["D:/ZeroClian/public/tags/index.html","1451aecb1b6285267aa1fa8ca1fd44ec"],["D:/ZeroClian/public/tags/基础知识/index.html","2ecda3551f6e70188cde6533a3b6c886"],["D:/ZeroClian/public/tags/并发编程/index.html","9c5cbfa53c184eb689912c188163462b"],["D:/ZeroClian/public/tags/总结/index.html","d7cf30ccfb05b9743a291cc42b58f880"],["D:/ZeroClian/public/tags/模板/index.html","43bd9b5d610434d997b18c65e3c16c84"],["D:/ZeroClian/public/tags/测试/index.html","49bc1cc381e9b24ac887832a8b4be2fb"],["D:/ZeroClian/public/tags/课程设计/index.html","3b14e5daf02352080c60928f62d45b18"],["D:/ZeroClian/public/tags/配置/index.html","cd9d06a8dfe21f566c022f8a562a4e0e"],["D:/ZeroClian/public/tags/集合/index.html","1edefa42d0c09d0070bbbea014243012"]];
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







