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

var precacheConfig = [["D:/ZeroClian/public/archives/2020/01/index.html","ad78f8455dea4fc282f0f827d9b627fc"],["D:/ZeroClian/public/archives/2020/05/index.html","87261fa8cea8b460c7f61c39e8a224fb"],["D:/ZeroClian/public/archives/2020/12/index.html","c1e2f80af506aee7bd8a564031455b9f"],["D:/ZeroClian/public/archives/2020/index.html","b81e5813fd22ff2fd189c389a2899af9"],["D:/ZeroClian/public/archives/2021/01/index.html","03084656d1bd5a009d7d71f25fb7ff54"],["D:/ZeroClian/public/archives/2021/03/index.html","ead581fe82c278d569f35525fd43f043"],["D:/ZeroClian/public/archives/2021/04/index.html","ff583b43738da1cf7963e2bba4129e82"],["D:/ZeroClian/public/archives/2021/05/index.html","a17e8c885077174e2182963a2a3906b9"],["D:/ZeroClian/public/archives/2021/index.html","5f0ec5e9da6a099981a5f24202c0b406"],["D:/ZeroClian/public/archives/2021/page/2/index.html","dce1d1675521e26f3ad99710f6a5e22f"],["D:/ZeroClian/public/archives/index.html","13e2ece5a557296c9323cedf5115b676"],["D:/ZeroClian/public/archives/page/2/index.html","9b00c11bd2c871b29869b0cffe3a5771"],["D:/ZeroClian/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/ZeroClian/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/ZeroClian/public/categories/Hexo/index.html","caf0a4239ca3232dd59469de5d2c3639"],["D:/ZeroClian/public/categories/IDEA/index.html","bfb961cec56742a8ff9f711a2afa50ac"],["D:/ZeroClian/public/categories/index.html","13fc51671ef9a06abb085579b73da3e6"],["D:/ZeroClian/public/categories/vscode/index.html","64290c427060fa14db27dc03d43e5952"],["D:/ZeroClian/public/categories/容器/index.html","815318cb7bdf9c23de08d6d883dde502"],["D:/ZeroClian/public/categories/工作/index.html","98455eb409de1f73abe3bde550037ff9"],["D:/ZeroClian/public/categories/生活/index.html","9ec776a58f445353c1a0103799f35a01"],["D:/ZeroClian/public/categories/面试必备/Java基础/index.html","94efed4daca212840a6d2a7870555300"],["D:/ZeroClian/public/categories/面试必备/MySQL/index.html","a9b6ab347b216c07797be91b07c3618d"],["D:/ZeroClian/public/categories/面试必备/Spring/index.html","1f1933b5035a138a74d1670765185ff0"],["D:/ZeroClian/public/categories/面试必备/index.html","44c41724f303693e808c1d219c380b04"],["D:/ZeroClian/public/categories/面试必备/page/2/index.html","078a1df20ce1d98950f2416e22cff96c"],["D:/ZeroClian/public/categories/面试必备/多线程/index.html","695ebea2fad616348d9509899eb53f3c"],["D:/ZeroClian/public/categories/项目/Android/index.html","de6c52c232a3f4fca4835ccf1a8d90ce"],["D:/ZeroClian/public/categories/项目/index.html","c2fbe3720ecd78cff85c1f57e7934109"],["D:/ZeroClian/public/css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["D:/ZeroClian/public/css/index.css","44bacf810fed2654641b90a8dff2aa81"],["D:/ZeroClian/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/ZeroClian/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/ZeroClian/public/img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["D:/ZeroClian/public/img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["D:/ZeroClian/public/img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["D:/ZeroClian/public/img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["D:/ZeroClian/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/ZeroClian/public/img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["D:/ZeroClian/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/ZeroClian/public/img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["D:/ZeroClian/public/index.html","e1a70821468a18e0f887df7e000255e2"],["D:/ZeroClian/public/js/main.js","daa594fa296eadb9c43910113c5f8341"],["D:/ZeroClian/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/ZeroClian/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/ZeroClian/public/js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["D:/ZeroClian/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/ZeroClian/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/ZeroClian/public/link/index.html","468cfce104a53777bdaf1ac3145e319a"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/ZeroClian/public/page/2/index.html","95ff75ba195581abb08df83326c0d91f"],["D:/ZeroClian/public/page/3/index.html","feda5b05056235609a8d293afddae2e9"],["D:/ZeroClian/public/page/4/index.html","3a880a306c5fd5211e31fd830c14cf29"],["D:/ZeroClian/public/posts/1e489958.html","a0050e99e909229e996ad8cf9b9667a5"],["D:/ZeroClian/public/posts/34fea2ea.html","eae1669df834ae7ce948fc9eff4a5950"],["D:/ZeroClian/public/posts/4a17b156.html","f36841206be1f21b8bd449a011f2e7be"],["D:/ZeroClian/public/posts/566321e7.html","1c75efd8cb6c1e08b1826cc7af48577e"],["D:/ZeroClian/public/posts/5fddb0d.html","1908db2f5e59249dc1d7a069df6bec45"],["D:/ZeroClian/public/posts/632b531d.html","2e1167191adddef334ac6317f188d901"],["D:/ZeroClian/public/posts/64cd635.html","b06e9a12a124d7fc36e02c3698930334"],["D:/ZeroClian/public/posts/681a2204.html","7bf6475f07be6e0098e3b7bfa42ac4be"],["D:/ZeroClian/public/posts/7981371.html","1c77169535a425414fe7ffe28b4c9463"],["D:/ZeroClian/public/posts/9683a4f7.html","b180e3909c53cfae8d14c928b0a407f6"],["D:/ZeroClian/public/posts/97d452a7.html","4498177dfe945a04955815992985a058"],["D:/ZeroClian/public/posts/a0808890.html","b272fff6d8fe336ba364af380aaf1c32"],["D:/ZeroClian/public/posts/c352a0f3.html","908c211cef825377a6b3d1b4c305ba66"],["D:/ZeroClian/public/posts/c8ced817.html","4cbde05318cb4deabc9b35fc27636759"],["D:/ZeroClian/public/posts/ca4da212.html","2f16368ba9898cdf3046eb137760d4f3"],["D:/ZeroClian/public/posts/d62ead0.html","f16455b1fe5ab4c0aa2d579f08d69931"],["D:/ZeroClian/public/posts/d98c058a.html","7cf5e18be9cc594353f4eacd8ef918a1"],["D:/ZeroClian/public/posts/df083c4d.html","385ec70979abaf3b72e2fb53d002d3a7"],["D:/ZeroClian/public/posts/f7ede91d.html","da757486539a77447c661d4382621495"],["D:/ZeroClian/public/tags/Docker/index.html","c9153a2019037cbc5b99b294f6a61131"],["D:/ZeroClian/public/tags/MySQL/index.html","3520d3fc7d7611b4f81077474ffdb5be"],["D:/ZeroClian/public/tags/Spring/index.html","9e3818559fc1dd1a3fa2a8956acbcce6"],["D:/ZeroClian/public/tags/Steam/index.html","7cb62c21c708e693842aaeff646d5d1e"],["D:/ZeroClian/public/tags/index.html","080cc26755bcaf2a48edae31f89c9c5e"],["D:/ZeroClian/public/tags/优化/index.html","9ddcb76ec21caa728f750237f37eb2bc"],["D:/ZeroClian/public/tags/基础知识/index.html","334f81e96e83514ba60c06b1f128f592"],["D:/ZeroClian/public/tags/并发编程/index.html","5caced776b426cdf9aca972cb4083649"],["D:/ZeroClian/public/tags/快捷键/index.html","b052ccc090acad44503a3c9648c15645"],["D:/ZeroClian/public/tags/总结/index.html","36cb2a735b142b1795e946a4c26271d9"],["D:/ZeroClian/public/tags/模板/index.html","8b88966d1a6984e3bee7ddae4d4c8bb2"],["D:/ZeroClian/public/tags/测试/index.html","5c4b648e17e651a51eda92a89020f55a"],["D:/ZeroClian/public/tags/课程设计/index.html","b7249aac50c228eee608e13f44aed599"],["D:/ZeroClian/public/tags/配置/index.html","2b95361752409ff27de8916f164fa151"],["D:/ZeroClian/public/tags/集合/index.html","74b8c001cbc4d4d3f1738cd5c416b321"]];
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







