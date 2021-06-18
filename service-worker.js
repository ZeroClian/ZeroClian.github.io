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

var precacheConfig = [["D:/ZeroClian/public/archives/2020/01/index.html","00815c9735d18f382f133551957fbd9a"],["D:/ZeroClian/public/archives/2020/05/index.html","837c3e3411f3d0a9215a2f27b7a960d9"],["D:/ZeroClian/public/archives/2020/12/index.html","ae5084e49212bbfc8e68a915e7c3bcec"],["D:/ZeroClian/public/archives/2020/index.html","7d0814066a867f9c6af4812fedefd102"],["D:/ZeroClian/public/archives/2021/01/index.html","646d9aee4cc0e18753a89cf9827fefe3"],["D:/ZeroClian/public/archives/2021/03/index.html","95778ba8fd1b39cae76c8ce40a23349f"],["D:/ZeroClian/public/archives/2021/04/index.html","14cc63d06ecc290894855321cf998ab6"],["D:/ZeroClian/public/archives/2021/05/index.html","2d3d1356ea68c8f88407f42aa69444c6"],["D:/ZeroClian/public/archives/2021/index.html","960daf0303ec23234b5206d51284720a"],["D:/ZeroClian/public/archives/2021/page/2/index.html","a6a2c2249e0c67abff20d4047f925bc6"],["D:/ZeroClian/public/archives/index.html","0f9c561089c882826294fce6413bdc9b"],["D:/ZeroClian/public/archives/page/2/index.html","1c79e2fd414986d0d0fcb645f553689e"],["D:/ZeroClian/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/ZeroClian/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/ZeroClian/public/categories/Hexo/index.html","df4d520202bcce226eabbd8178750ebe"],["D:/ZeroClian/public/categories/IDEA/index.html","5cef40968d84875426fc721dbc30b49c"],["D:/ZeroClian/public/categories/index.html","c0d71c729436b162ddd2e1e8ccb4377c"],["D:/ZeroClian/public/categories/vscode/index.html","33b9cbd0deb8d8970da5b4ef01823382"],["D:/ZeroClian/public/categories/容器/index.html","44e7726f48ee5c2e2e01a44b6fdbaa26"],["D:/ZeroClian/public/categories/工作/index.html","04ba9a603a7bd27ad68de5154d48a6db"],["D:/ZeroClian/public/categories/生活/index.html","2b8f7fd6042f39d920c247e9e529ac67"],["D:/ZeroClian/public/categories/面试必备/Java基础/index.html","b78ad5b9be9b3350eafb627ead445fe7"],["D:/ZeroClian/public/categories/面试必备/MySQL/index.html","9d017f1922e077a973cc347dd124ca13"],["D:/ZeroClian/public/categories/面试必备/Spring/index.html","22de14fb282ac99b9aeedeb74ce4cd28"],["D:/ZeroClian/public/categories/面试必备/index.html","bff7122b35b0e5a88b77d2c6fa1f67ee"],["D:/ZeroClian/public/categories/面试必备/page/2/index.html","69f7dfe97df2659fc2a8764b1469caf5"],["D:/ZeroClian/public/categories/面试必备/多线程/index.html","8b9cd256e74446c4644693cc9df67c27"],["D:/ZeroClian/public/categories/项目/Android/index.html","5d0cf75644bfc84991ac6940f00f2664"],["D:/ZeroClian/public/categories/项目/index.html","a590eb2db387009c111723195b95fa0a"],["D:/ZeroClian/public/css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["D:/ZeroClian/public/css/index.css","44bacf810fed2654641b90a8dff2aa81"],["D:/ZeroClian/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/ZeroClian/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/ZeroClian/public/img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["D:/ZeroClian/public/img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["D:/ZeroClian/public/img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["D:/ZeroClian/public/img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["D:/ZeroClian/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/ZeroClian/public/img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["D:/ZeroClian/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/ZeroClian/public/img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["D:/ZeroClian/public/index.html","91f24f11fb3afdab34be293a9a5a0c7c"],["D:/ZeroClian/public/js/main.js","daa594fa296eadb9c43910113c5f8341"],["D:/ZeroClian/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/ZeroClian/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/ZeroClian/public/js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["D:/ZeroClian/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/ZeroClian/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/ZeroClian/public/link/index.html","2d908a536c8219aff5af4c79f9952064"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/ZeroClian/public/page/2/index.html","6bf8dd595ab99cdec01c08d2f4a7b852"],["D:/ZeroClian/public/page/3/index.html","0e3d6d20c8444db9a5eb97049c952edb"],["D:/ZeroClian/public/posts/1e489958.html","0c770f58b70d669aa850911f6daac621"],["D:/ZeroClian/public/posts/34fea2ea.html","57931c727cbb51808012611ec2f593cd"],["D:/ZeroClian/public/posts/4a17b156.html","8124380b336b4f6b368f1bedc6bd61e0"],["D:/ZeroClian/public/posts/566321e7.html","5310191a3dd987c314b87cdffd57cf67"],["D:/ZeroClian/public/posts/5fddb0d.html","6d31f2a0dd136e23aef1e273f7511fd8"],["D:/ZeroClian/public/posts/632b531d.html","0bb31501931d113693409ee2e55cd75e"],["D:/ZeroClian/public/posts/64cd635.html","87ae9e1fecb15442aa18c0eda6703759"],["D:/ZeroClian/public/posts/681a2204.html","0b9d4da2b6a3857120ea0033a9b2ed1f"],["D:/ZeroClian/public/posts/7981371.html","e21b6a30d8ae627b565ca45c66c0b2b2"],["D:/ZeroClian/public/posts/9683a4f7.html","c2f5431e874c5b72a23eeee37430e091"],["D:/ZeroClian/public/posts/97d452a7.html","b02f320c6315a4565260a49f63b02757"],["D:/ZeroClian/public/posts/a0808890.html","adaf4ec68e00390af8a46be29af1fb8c"],["D:/ZeroClian/public/posts/c352a0f3.html","458bd16936f136cad8c5df518e752e29"],["D:/ZeroClian/public/posts/c8ced817.html","b1b65ddb84d68e7e9f640c92fd7c19b6"],["D:/ZeroClian/public/posts/ca4da212.html","dbcdbf23cb12349299f1939a73e391cf"],["D:/ZeroClian/public/posts/d62ead0.html","bb23c112856dd60ada0176bc0b7d8f05"],["D:/ZeroClian/public/posts/d98c058a.html","21b06d467b18e53657be2dbc9adfd8c7"],["D:/ZeroClian/public/posts/df083c4d.html","7149eb28128a3018775bcf8d32a1b57c"],["D:/ZeroClian/public/posts/f7ede91d.html","cef630e287cdee96a6658d659d666c64"],["D:/ZeroClian/public/tags/Docker/index.html","23b2e7d1f1202c409ac37a9198eb952a"],["D:/ZeroClian/public/tags/MySQL/index.html","542a076821dad00175936dcba9f1535e"],["D:/ZeroClian/public/tags/Spring/index.html","a80d1f5b4c0922f3ac5495484bb9e594"],["D:/ZeroClian/public/tags/Steam/index.html","0b9ad88fa5ea769e263df2394a0df398"],["D:/ZeroClian/public/tags/index.html","2685bc5975c6dd49052c75e0416e0c39"],["D:/ZeroClian/public/tags/优化/index.html","a10ea03cc97ad1f4e780ee0c569f4937"],["D:/ZeroClian/public/tags/基础知识/index.html","a53376f2d8099d10bc5eb28cf5c16ba5"],["D:/ZeroClian/public/tags/并发编程/index.html","640b8552a134f1bd198b476e37ca6885"],["D:/ZeroClian/public/tags/快捷键/index.html","8ada834d924679267cff0fb25fe77362"],["D:/ZeroClian/public/tags/总结/index.html","4d32259cafa81b2f52595110a3ca0260"],["D:/ZeroClian/public/tags/模板/index.html","5f4fd6a872bfc76624887076684f344a"],["D:/ZeroClian/public/tags/课程设计/index.html","3a22c05ca1ef88116741f182e69f4e66"],["D:/ZeroClian/public/tags/配置/index.html","b84a30f1d4a724c2a28a835a1a5dc7a0"],["D:/ZeroClian/public/tags/集合/index.html","3a0eefc17b4db945d54f688d9b082c09"]];
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







