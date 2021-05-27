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

var precacheConfig = [["D:/ZeroClian/public/archives/2020/01/index.html","97dcc57be7d3faf022b73a8face1dbe4"],["D:/ZeroClian/public/archives/2020/05/index.html","e4b3b83c345499cda12c7dff991a53a0"],["D:/ZeroClian/public/archives/2020/12/index.html","085171001d4d42332efb8665d3f149aa"],["D:/ZeroClian/public/archives/2020/index.html","7420ae00527c7a7c453879f30b4732e9"],["D:/ZeroClian/public/archives/2021/01/index.html","3e497343e26ffe261dd2da2a05b2800d"],["D:/ZeroClian/public/archives/2021/03/index.html","52a374577f7333ff74c9d80d9bedd661"],["D:/ZeroClian/public/archives/2021/04/index.html","212312a717543f8f2441eb1d9c59a8b4"],["D:/ZeroClian/public/archives/2021/05/index.html","0d71a684d2b2fc87836db4308db67e84"],["D:/ZeroClian/public/archives/2021/index.html","a52c3487b5d40785e8c9c33578a1e690"],["D:/ZeroClian/public/archives/2021/page/2/index.html","b37d73ae229330d8c49488835f74e485"],["D:/ZeroClian/public/archives/index.html","335f828873faf4da62f80433e23c5878"],["D:/ZeroClian/public/archives/page/2/index.html","abbab08e5fbe003cd12dc2a11958a75b"],["D:/ZeroClian/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/ZeroClian/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/ZeroClian/public/categories/Hexo/index.html","58702457f292a9a914c61902c4665d7e"],["D:/ZeroClian/public/categories/IDEA/index.html","7827164f90c2103ab1cae2aa1bfede37"],["D:/ZeroClian/public/categories/index.html","4158cf6f67deee5e871b4144635eefed"],["D:/ZeroClian/public/categories/vscode/index.html","a1824cd37e3dd4027cf37be0b7b452e4"],["D:/ZeroClian/public/categories/容器/index.html","dc94f5785e715e5c9b54c6d0d22dde79"],["D:/ZeroClian/public/categories/工作/index.html","80cd278dab8e0fbd809afa952ff649c6"],["D:/ZeroClian/public/categories/生活/index.html","11c5834d4211ec6bd36ec4415dfdf2da"],["D:/ZeroClian/public/categories/面试必备/Java基础/index.html","e82c25d574df41d5028df52c3ac4fb1c"],["D:/ZeroClian/public/categories/面试必备/MySQL/index.html","0b106f088e5cac8381c4f4f9a266b000"],["D:/ZeroClian/public/categories/面试必备/Spring/index.html","04a444dbc291308ecb968bcf526294e7"],["D:/ZeroClian/public/categories/面试必备/index.html","df750b5419aad4f4d8139ca7428c3fe1"],["D:/ZeroClian/public/categories/面试必备/page/2/index.html","9cd279cb2a5c92924d2c0e104188fd4b"],["D:/ZeroClian/public/categories/面试必备/多线程/index.html","fabd300fdddde8a45eb1de4c79532b2e"],["D:/ZeroClian/public/categories/项目/Android/index.html","b39c405cc4ccd7362d40c44247fcc226"],["D:/ZeroClian/public/categories/项目/index.html","803d54f94f00a4b06b13b14201c2cf36"],["D:/ZeroClian/public/css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["D:/ZeroClian/public/css/index.css","44bacf810fed2654641b90a8dff2aa81"],["D:/ZeroClian/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/ZeroClian/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/ZeroClian/public/img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["D:/ZeroClian/public/img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["D:/ZeroClian/public/img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["D:/ZeroClian/public/img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["D:/ZeroClian/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/ZeroClian/public/img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["D:/ZeroClian/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/ZeroClian/public/img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["D:/ZeroClian/public/index.html","6b96028d3f66a5e317f1ef03e91a82e1"],["D:/ZeroClian/public/js/main.js","daa594fa296eadb9c43910113c5f8341"],["D:/ZeroClian/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/ZeroClian/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/ZeroClian/public/js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["D:/ZeroClian/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/ZeroClian/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/ZeroClian/public/link/index.html","138b657f72fe61e71f593b6c2bb63bd7"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/ZeroClian/public/page/2/index.html","6fdbc50e2e99c58a007bfe890ca2e6aa"],["D:/ZeroClian/public/page/3/index.html","c6e669e416878a9020bf60da50b60e02"],["D:/ZeroClian/public/page/4/index.html","dccf5793910976a51fb93d392ae12452"],["D:/ZeroClian/public/posts/1e489958.html","a0050e99e909229e996ad8cf9b9667a5"],["D:/ZeroClian/public/posts/34fea2ea.html","eae1669df834ae7ce948fc9eff4a5950"],["D:/ZeroClian/public/posts/4a17b156.html","efc82ec602e64195b9155fd6d67fee9e"],["D:/ZeroClian/public/posts/566321e7.html","1c75efd8cb6c1e08b1826cc7af48577e"],["D:/ZeroClian/public/posts/5fddb0d.html","1908db2f5e59249dc1d7a069df6bec45"],["D:/ZeroClian/public/posts/632b531d.html","2e1167191adddef334ac6317f188d901"],["D:/ZeroClian/public/posts/64cd635.html","b06e9a12a124d7fc36e02c3698930334"],["D:/ZeroClian/public/posts/681a2204.html","7bf6475f07be6e0098e3b7bfa42ac4be"],["D:/ZeroClian/public/posts/7981371.html","1c77169535a425414fe7ffe28b4c9463"],["D:/ZeroClian/public/posts/9683a4f7.html","b180e3909c53cfae8d14c928b0a407f6"],["D:/ZeroClian/public/posts/97d452a7.html","4498177dfe945a04955815992985a058"],["D:/ZeroClian/public/posts/a0808890.html","b272fff6d8fe336ba364af380aaf1c32"],["D:/ZeroClian/public/posts/c352a0f3.html","908c211cef825377a6b3d1b4c305ba66"],["D:/ZeroClian/public/posts/c8ced817.html","4cbde05318cb4deabc9b35fc27636759"],["D:/ZeroClian/public/posts/ca4da212.html","2f16368ba9898cdf3046eb137760d4f3"],["D:/ZeroClian/public/posts/d62ead0.html","f16455b1fe5ab4c0aa2d579f08d69931"],["D:/ZeroClian/public/posts/d98c058a.html","7cf5e18be9cc594353f4eacd8ef918a1"],["D:/ZeroClian/public/posts/df083c4d.html","385ec70979abaf3b72e2fb53d002d3a7"],["D:/ZeroClian/public/posts/f7ede91d.html","da757486539a77447c661d4382621495"],["D:/ZeroClian/public/tags/Docker/index.html","5e603363de3fedf11e3ac0817238b98e"],["D:/ZeroClian/public/tags/MySQL/index.html","b5b98722311cf2fa4643a2f6acb1b168"],["D:/ZeroClian/public/tags/Spring/index.html","cf3078372113ead5abbc9015c2a1104e"],["D:/ZeroClian/public/tags/Steam/index.html","0badd8169b5d0b92f0e1936f617f1652"],["D:/ZeroClian/public/tags/index.html","aae7b8f02534fe61c8c7b132b93380f8"],["D:/ZeroClian/public/tags/优化/index.html","0bba76bbf1e76a2dfd12abab730b1c6c"],["D:/ZeroClian/public/tags/基础知识/index.html","212a8163280c62a1fd8152105839c206"],["D:/ZeroClian/public/tags/并发编程/index.html","3471486d214da6839101a67a5e152641"],["D:/ZeroClian/public/tags/快捷键/index.html","41bb225889fcb667f514f02897a635c2"],["D:/ZeroClian/public/tags/总结/index.html","736307f07e03ab6508b64140c1a33870"],["D:/ZeroClian/public/tags/模板/index.html","59354d6781a17c9f06431d870b46f2f9"],["D:/ZeroClian/public/tags/测试/index.html","14ba25707e381241ff168d87ee3a5e59"],["D:/ZeroClian/public/tags/课程设计/index.html","1f0d4a5830a30b5aa30ae992bf07acf0"],["D:/ZeroClian/public/tags/配置/index.html","c67ed26306481c6ced48080af19c31db"],["D:/ZeroClian/public/tags/集合/index.html","903c844721a6cddcceebccf4871d00c3"]];
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







