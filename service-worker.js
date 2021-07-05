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

var precacheConfig = [["D:/ZeroClian/public/archives/2020/01/index.html","9e61e772f879cca02c132433926382c4"],["D:/ZeroClian/public/archives/2020/05/index.html","26b479092154d545b50526c765c9e4df"],["D:/ZeroClian/public/archives/2020/12/index.html","9713174ec196f87ae12456f7e8883abe"],["D:/ZeroClian/public/archives/2020/index.html","ef04443b7360d3bac937660865ebd501"],["D:/ZeroClian/public/archives/2021/01/index.html","6da8636fbfaae9781d0dcef0bc1acd64"],["D:/ZeroClian/public/archives/2021/03/index.html","bfc1f674c05d2770ce08cb035fb937e9"],["D:/ZeroClian/public/archives/2021/04/index.html","ca266597a9b4d3576365ca6f3db69b86"],["D:/ZeroClian/public/archives/2021/05/index.html","989180f9b4711d1df14f5613c0a7f0c3"],["D:/ZeroClian/public/archives/2021/06/index.html","3712546beca034569addd1ee087ff0b3"],["D:/ZeroClian/public/archives/2021/index.html","46f1b7f1709f8cbb02b65b90efa88aa1"],["D:/ZeroClian/public/archives/2021/page/2/index.html","6a9da47754982147e73a7601a93281f8"],["D:/ZeroClian/public/archives/index.html","f22e6b13ee9570f96754247bc2a3e59f"],["D:/ZeroClian/public/archives/page/2/index.html","d931efb54c79437aef02a6ee636dbcdf"],["D:/ZeroClian/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/ZeroClian/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/ZeroClian/public/categories/Hexo/index.html","e98d6430ecd5ab28272831cfa70a5254"],["D:/ZeroClian/public/categories/IDEA/index.html","09f9e6914925213560d1fa26e81ab0b2"],["D:/ZeroClian/public/categories/Redis/index.html","44b65c49ce86e15cc0bb5ad62a3e3797"],["D:/ZeroClian/public/categories/index.html","92fe19cb91824295978c3880155b11a3"],["D:/ZeroClian/public/categories/vscode/index.html","bc34e1e522521bc2937ab586cabc336c"],["D:/ZeroClian/public/categories/容器/index.html","e058d2479de260651f3ed0171f2221ed"],["D:/ZeroClian/public/categories/工作/index.html","9f5a2c2134a53714e7dc9f95e01a363e"],["D:/ZeroClian/public/categories/生活/index.html","df2397f7cb34f714c16f8600a64147d5"],["D:/ZeroClian/public/categories/面试必备/Java基础/index.html","c124e628abe69abeb06a3518669ce343"],["D:/ZeroClian/public/categories/面试必备/MySQL/index.html","482bac42ea09f6389fd707c2f459db41"],["D:/ZeroClian/public/categories/面试必备/Spring/index.html","22ec413ff7295182cefaa6dcdd47eb96"],["D:/ZeroClian/public/categories/面试必备/index.html","a932b8d2638f4be42b2a92ab70230442"],["D:/ZeroClian/public/categories/面试必备/page/2/index.html","edd23ff4857d392b53536b1466d88d3d"],["D:/ZeroClian/public/categories/面试必备/多线程/index.html","d2fbdeb9f47cb8fd31a1c04d6b1e5d70"],["D:/ZeroClian/public/categories/项目/Android/index.html","583a8387672bdd59ada0c1d18deb73cd"],["D:/ZeroClian/public/categories/项目/index.html","9ab4845e97d3c072322f8b58664b18fa"],["D:/ZeroClian/public/css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["D:/ZeroClian/public/css/index.css","44bacf810fed2654641b90a8dff2aa81"],["D:/ZeroClian/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/ZeroClian/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/ZeroClian/public/img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["D:/ZeroClian/public/img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["D:/ZeroClian/public/img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["D:/ZeroClian/public/img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["D:/ZeroClian/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/ZeroClian/public/img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["D:/ZeroClian/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/ZeroClian/public/img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["D:/ZeroClian/public/index.html","98a4393d889231b870341ad94e07753e"],["D:/ZeroClian/public/js/main.js","daa594fa296eadb9c43910113c5f8341"],["D:/ZeroClian/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/ZeroClian/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/ZeroClian/public/js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["D:/ZeroClian/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/ZeroClian/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/ZeroClian/public/link/index.html","56ccc2b80bf964227810cd84da6d61a9"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/ZeroClian/public/page/2/index.html","84173c68747de8ffd6a976a1eda3296f"],["D:/ZeroClian/public/page/3/index.html","0fd3229e74d879d83431bc3c23e491b9"],["D:/ZeroClian/public/posts/1e489958.html","8f332394d357b64cf365c5bcb67c95ef"],["D:/ZeroClian/public/posts/34fea2ea.html","f7321089662cfe8bb8b25723350a8819"],["D:/ZeroClian/public/posts/4a17b156.html","ada48163b2af50617cfe96d683384ed9"],["D:/ZeroClian/public/posts/566321e7.html","5b752c112ffdaee3ebfbfb3ce5ca080c"],["D:/ZeroClian/public/posts/5fddb0d.html","77a3fd3d4d7b2deb25e14ca609b7a20a"],["D:/ZeroClian/public/posts/632b531d.html","cb4435d7c47a00d442ecd127b6fb05e6"],["D:/ZeroClian/public/posts/64cd635.html","325c4b5c873fa4209e878aafaaf1dd86"],["D:/ZeroClian/public/posts/681a2204.html","1e69df1970ec8f2a7187e3859d49975f"],["D:/ZeroClian/public/posts/7981371.html","70a47e50fdc0c69c7b61da6b3568b24c"],["D:/ZeroClian/public/posts/9683a4f7.html","873199a6c566786a69386b734c0f110e"],["D:/ZeroClian/public/posts/97d452a7.html","8cf98c7842fa6bf03143d3b783424ea6"],["D:/ZeroClian/public/posts/a0808890.html","84096c4708175b33f5a4802fd879390a"],["D:/ZeroClian/public/posts/bae4ff13.html","b09506bc1a7efe55b80c2a56f72cedd9"],["D:/ZeroClian/public/posts/c352a0f3.html","fa01e16d6a6988cd9bfe230effb7203d"],["D:/ZeroClian/public/posts/c8ced817.html","35bf5835848f6d6d425570c597e0afec"],["D:/ZeroClian/public/posts/ca4da212.html","5cc6623b930ca444661a833650ddf1fc"],["D:/ZeroClian/public/posts/d62ead0.html","26d9d33da311090f76e623acd2ae22e6"],["D:/ZeroClian/public/posts/d98c058a.html","b07d8d4bf2a95b90dae10d63e9cb8dc1"],["D:/ZeroClian/public/posts/df083c4d.html","ad502a6fcaa2d3dbc515ad69bc0f617a"],["D:/ZeroClian/public/posts/f7ede91d.html","2e29d99d4654c81aee2cbb9f952ead1c"],["D:/ZeroClian/public/tags/Docker/index.html","4bade72af56267a9c8710e8aaa67223b"],["D:/ZeroClian/public/tags/MySQL/index.html","494ea5fd355ddb9153177e8ae751bcf8"],["D:/ZeroClian/public/tags/Spring/index.html","7e65bc0a2ae589d3508185c60ae8ee03"],["D:/ZeroClian/public/tags/Steam/index.html","29a0656afd8f064f7e9b1eabca09001c"],["D:/ZeroClian/public/tags/index.html","32d4c877c9939f4239d20c62b578a24c"],["D:/ZeroClian/public/tags/优化/index.html","d1cdf63972c7a42bd13f6aa60a33b49a"],["D:/ZeroClian/public/tags/命令/index.html","aa311bdcea8a1305d676bb74ab32e9c8"],["D:/ZeroClian/public/tags/基础知识/index.html","5f1b7fc18a8293deb947576753ddf041"],["D:/ZeroClian/public/tags/并发编程/index.html","4fc57634994b9b3c0ffbfee725cc91bc"],["D:/ZeroClian/public/tags/快捷键/index.html","e177431cc73d3ad9cf0b5eddc8a58eaa"],["D:/ZeroClian/public/tags/总结/index.html","929bbe039c2c154cdbc1029b29e0940a"],["D:/ZeroClian/public/tags/模板/index.html","e2bc4762d0db070750fa1734a6fbfe24"],["D:/ZeroClian/public/tags/课程设计/index.html","19a3b7f467024085d08034863f6401c6"],["D:/ZeroClian/public/tags/配置/index.html","a92dd20e06d7914596aa101476346134"],["D:/ZeroClian/public/tags/集合/index.html","51f5bfbe9b5907f876f7b52db584ff58"]];
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







