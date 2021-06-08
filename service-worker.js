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

var precacheConfig = [["D:/ZeroClian/public/archives/2020/01/index.html","da564c61c702ed32f2bc30d1778039f1"],["D:/ZeroClian/public/archives/2020/05/index.html","9994678820476d37f36d80c3a4e68e82"],["D:/ZeroClian/public/archives/2020/12/index.html","9fb1a0abbd678565d0eaf66200522b17"],["D:/ZeroClian/public/archives/2020/index.html","7408bc10cecad7d8b30bba19bc98520c"],["D:/ZeroClian/public/archives/2021/01/index.html","42113f0ce9d1e7cd657c9aec545fe269"],["D:/ZeroClian/public/archives/2021/03/index.html","6db78fc9f3be959be0f5bfee07ded99f"],["D:/ZeroClian/public/archives/2021/04/index.html","bacbb8833b69799919dc3d41350dfc44"],["D:/ZeroClian/public/archives/2021/05/index.html","b3e6bd4e049a3150a9ad5e030a1a9bce"],["D:/ZeroClian/public/archives/2021/index.html","475bc867d1869553f7ca153b516cb9da"],["D:/ZeroClian/public/archives/2021/page/2/index.html","7201bfbd727edd1380ca54873c4a6910"],["D:/ZeroClian/public/archives/index.html","90a29e371053fe51c401f67c04be347f"],["D:/ZeroClian/public/archives/page/2/index.html","321a2e951646ef930ac5861d598cf2d7"],["D:/ZeroClian/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/ZeroClian/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/ZeroClian/public/categories/Hexo/index.html","bbbbfdc1abdd0f1bdee3df5708dea96c"],["D:/ZeroClian/public/categories/IDEA/index.html","a81c1b3b7791e7ca1ec8e7ef336816e9"],["D:/ZeroClian/public/categories/index.html","5ab60e8f29ed891ca2e530734aba7986"],["D:/ZeroClian/public/categories/vscode/index.html","f6dad3f56ac6a4901eb8d74849980a13"],["D:/ZeroClian/public/categories/容器/index.html","82d8f94625be83868868ec1687c2029f"],["D:/ZeroClian/public/categories/工作/index.html","07233068691b470ed25ca33073a08210"],["D:/ZeroClian/public/categories/生活/index.html","b14b197249ff1b6cc6f310d58cb2fb17"],["D:/ZeroClian/public/categories/面试必备/Java基础/index.html","85e94081e1958b4f72e22481038efea0"],["D:/ZeroClian/public/categories/面试必备/MySQL/index.html","e5757590b9295aee859d8d886a0f7cbc"],["D:/ZeroClian/public/categories/面试必备/Spring/index.html","fb685f10c0803c03ed4c4b128de36461"],["D:/ZeroClian/public/categories/面试必备/index.html","910c046723cf295b3fa6775e46d2765d"],["D:/ZeroClian/public/categories/面试必备/page/2/index.html","ce09df37148fc8f91f3e00fe9bce2963"],["D:/ZeroClian/public/categories/面试必备/多线程/index.html","ba18884e91e0034b09c0fff89cf1ee36"],["D:/ZeroClian/public/categories/项目/Android/index.html","3a9d51a832240947b30179d63b1692ad"],["D:/ZeroClian/public/categories/项目/index.html","e58855589b1fca6df97efebd1e05babb"],["D:/ZeroClian/public/css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["D:/ZeroClian/public/css/index.css","44bacf810fed2654641b90a8dff2aa81"],["D:/ZeroClian/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/ZeroClian/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/ZeroClian/public/img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["D:/ZeroClian/public/img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["D:/ZeroClian/public/img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["D:/ZeroClian/public/img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["D:/ZeroClian/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/ZeroClian/public/img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["D:/ZeroClian/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/ZeroClian/public/img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["D:/ZeroClian/public/index.html","53ebf8badb36afd045ea2990df5bd3c5"],["D:/ZeroClian/public/js/main.js","daa594fa296eadb9c43910113c5f8341"],["D:/ZeroClian/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/ZeroClian/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/ZeroClian/public/js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["D:/ZeroClian/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/ZeroClian/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/ZeroClian/public/link/index.html","224f7049fa455c550336388056aae246"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/ZeroClian/public/page/2/index.html","77bfe829fea2d7e054b70826440e7e51"],["D:/ZeroClian/public/page/3/index.html","1137e1f7869076a0b6e3b9c0b001bbac"],["D:/ZeroClian/public/posts/1e489958.html","0c770f58b70d669aa850911f6daac621"],["D:/ZeroClian/public/posts/34fea2ea.html","57931c727cbb51808012611ec2f593cd"],["D:/ZeroClian/public/posts/4a17b156.html","8124380b336b4f6b368f1bedc6bd61e0"],["D:/ZeroClian/public/posts/566321e7.html","5310191a3dd987c314b87cdffd57cf67"],["D:/ZeroClian/public/posts/5fddb0d.html","6d31f2a0dd136e23aef1e273f7511fd8"],["D:/ZeroClian/public/posts/632b531d.html","0bb31501931d113693409ee2e55cd75e"],["D:/ZeroClian/public/posts/64cd635.html","87ae9e1fecb15442aa18c0eda6703759"],["D:/ZeroClian/public/posts/681a2204.html","0b9d4da2b6a3857120ea0033a9b2ed1f"],["D:/ZeroClian/public/posts/7981371.html","e21b6a30d8ae627b565ca45c66c0b2b2"],["D:/ZeroClian/public/posts/9683a4f7.html","752065bcc586ce8f1ad24f86fbc616c2"],["D:/ZeroClian/public/posts/97d452a7.html","b02f320c6315a4565260a49f63b02757"],["D:/ZeroClian/public/posts/a0808890.html","adaf4ec68e00390af8a46be29af1fb8c"],["D:/ZeroClian/public/posts/c352a0f3.html","458bd16936f136cad8c5df518e752e29"],["D:/ZeroClian/public/posts/c8ced817.html","b1b65ddb84d68e7e9f640c92fd7c19b6"],["D:/ZeroClian/public/posts/ca4da212.html","dbcdbf23cb12349299f1939a73e391cf"],["D:/ZeroClian/public/posts/d62ead0.html","bb23c112856dd60ada0176bc0b7d8f05"],["D:/ZeroClian/public/posts/d98c058a.html","21b06d467b18e53657be2dbc9adfd8c7"],["D:/ZeroClian/public/posts/df083c4d.html","7149eb28128a3018775bcf8d32a1b57c"],["D:/ZeroClian/public/posts/f7ede91d.html","cef630e287cdee96a6658d659d666c64"],["D:/ZeroClian/public/tags/Docker/index.html","80bc23bf4a9a54faefaa5fd551472263"],["D:/ZeroClian/public/tags/MySQL/index.html","6f82719facd3be3f3502e3c9ad805c98"],["D:/ZeroClian/public/tags/Spring/index.html","720886e037c7b8928d3dea9474c8bcf0"],["D:/ZeroClian/public/tags/Steam/index.html","001f73cadd9e49deeadb3fe93af20a17"],["D:/ZeroClian/public/tags/index.html","5ba5076b54cee4db43ec48ca028f57ed"],["D:/ZeroClian/public/tags/优化/index.html","6f258687b980b0c661e58fabd33f80fb"],["D:/ZeroClian/public/tags/基础知识/index.html","cb84f2114958fbb2cebc58e771e7bbf7"],["D:/ZeroClian/public/tags/并发编程/index.html","9a57d8ba1c51a02a639a70926fcc5f51"],["D:/ZeroClian/public/tags/快捷键/index.html","ad6fbcf135995f02704cc25059df03ed"],["D:/ZeroClian/public/tags/总结/index.html","a9abf73c4ae163428c9c183d219a84ec"],["D:/ZeroClian/public/tags/模板/index.html","c2318dbdfc01c0f32062da94904e7fb3"],["D:/ZeroClian/public/tags/课程设计/index.html","52c90f6ec735e6691e209206cb9c6d6b"],["D:/ZeroClian/public/tags/配置/index.html","15fc0c8ee87006e3bff599719dda0e2b"],["D:/ZeroClian/public/tags/集合/index.html","179dc3b7575ed917ed9dcaa8b81ce78f"]];
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







