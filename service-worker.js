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

var precacheConfig = [["D:/ZeroClian/public/archives/2020/01/index.html","9825190a5213e2c2313b71ef7f023538"],["D:/ZeroClian/public/archives/2020/12/index.html","125c1aa0dd29f84b22a14008cace7db2"],["D:/ZeroClian/public/archives/2020/index.html","458e4642fed2f3c7c03afe42ca53f077"],["D:/ZeroClian/public/archives/2021/01/index.html","696daa751ebf5ff4cedebd4e7a27896f"],["D:/ZeroClian/public/archives/2021/03/index.html","5cc3b623563e096774e0b2f99bd91a7e"],["D:/ZeroClian/public/archives/2021/index.html","b2df80238b014b1b56e80db229fc74f3"],["D:/ZeroClian/public/archives/index.html","f3340e17a73d16026c011c920af85ad6"],["D:/ZeroClian/public/archives/page/2/index.html","6eec872cc8ee8b4360ccf9ad70a6c229"],["D:/ZeroClian/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/ZeroClian/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/ZeroClian/public/categories/Hexo/index.html","a4172441aabc3acb5cd1a9782fdb9b8e"],["D:/ZeroClian/public/categories/Spring全家桶/Spring/index.html","f0ef6664329afc91a44d888b1dda34bf"],["D:/ZeroClian/public/categories/Spring全家桶/index.html","05b76fcfc22edf5c19957c6854d82bd8"],["D:/ZeroClian/public/categories/index.html","fd08ed48acaa80a7518bbe2a7565a266"],["D:/ZeroClian/public/categories/vscode/index.html","2b91a512e052ed7306b32e8b9d3b02b6"],["D:/ZeroClian/public/categories/容器/index.html","8777c1375fa4af0a82592cca90c65978"],["D:/ZeroClian/public/categories/生活/index.html","b08aa8695cef71c005a70716190f1583"],["D:/ZeroClian/public/categories/面试必备/Java基础/index.html","339ef65376be616ea3653f7067649e1c"],["D:/ZeroClian/public/categories/面试必备/MySQL/index.html","3e1a5cc1495085aa6cac238a9f169266"],["D:/ZeroClian/public/categories/面试必备/Spring/index.html","6ffe6e16cffa9ba4fab238283f4035b8"],["D:/ZeroClian/public/categories/面试必备/index.html","b2411f6544f1dd1dec6a180df15e7146"],["D:/ZeroClian/public/categories/面试必备/多线程/index.html","6fbfa7f333f5edcbbe7dcf56d979873c"],["D:/ZeroClian/public/categories/项目/Android/index.html","9331e17e69951766a4c79ccb8c1b3db2"],["D:/ZeroClian/public/categories/项目/index.html","ae6781bce687db91f987cb19efb1479a"],["D:/ZeroClian/public/css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["D:/ZeroClian/public/css/index.css","44bacf810fed2654641b90a8dff2aa81"],["D:/ZeroClian/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/ZeroClian/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/ZeroClian/public/img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["D:/ZeroClian/public/img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["D:/ZeroClian/public/img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["D:/ZeroClian/public/img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["D:/ZeroClian/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/ZeroClian/public/img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["D:/ZeroClian/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/ZeroClian/public/img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["D:/ZeroClian/public/index.html","4f4751b457c0bce7105ecffe6cccbbf6"],["D:/ZeroClian/public/js/main.js","daa594fa296eadb9c43910113c5f8341"],["D:/ZeroClian/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/ZeroClian/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/ZeroClian/public/js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["D:/ZeroClian/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/ZeroClian/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/ZeroClian/public/link/index.html","c9367d4f6a08ba203caaa6230e955330"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/ZeroClian/public/page/2/index.html","aae7a1b8b268388479517c2b8b4dcfa7"],["D:/ZeroClian/public/page/3/index.html","10a8635d53cc246baae26e53f65d1845"],["D:/ZeroClian/public/posts/1e489958.html","3a53d395c95c4eb131c4ecf681c17eb0"],["D:/ZeroClian/public/posts/34fea2ea.html","0aafefe7b972b5617fe6e843ff84f549"],["D:/ZeroClian/public/posts/4a17b156.html","6f3fd56a0dbb4ef88f79336c552dbf44"],["D:/ZeroClian/public/posts/632b531d.html","15047ad27b185b6452765c9e5cb8972f"],["D:/ZeroClian/public/posts/64cd635.html","5c995f82a559a747f4d6ab41adadd6cb"],["D:/ZeroClian/public/posts/7981371.html","c83316f1353a00d1fbd39e367601ad6b"],["D:/ZeroClian/public/posts/9683a4f7.html","6780cda2834ce013e465ec382f1f7116"],["D:/ZeroClian/public/posts/97d452a7.html","fa7f6ccf6f425af1bb6cf6799d61e5e3"],["D:/ZeroClian/public/posts/a0808890.html","9f3bf0ac3884209a4c017592e25b5ba9"],["D:/ZeroClian/public/posts/c8ced817.html","8c928aaaa4b037eec781bceebf1218bc"],["D:/ZeroClian/public/posts/ca4da212.html","88560cd352d65e56216b98c799d285a2"],["D:/ZeroClian/public/posts/d62ead0.html","7d40fae38470ed51833fbb6b192990bc"],["D:/ZeroClian/public/posts/d98c058a.html","4ea647e354e13dc69623e3c1aea78c6b"],["D:/ZeroClian/public/posts/f7ede91d.html","0e2e56fb4b8fc470431f54d8b7157417"],["D:/ZeroClian/public/tags/Docker/index.html","34095621f98a721eaa6b17389db7e414"],["D:/ZeroClian/public/tags/MySQL/index.html","cc2a94f69d5357bbed43f0dfee4ede71"],["D:/ZeroClian/public/tags/Spring/index.html","877b5636c2be6038aa8c5148a50163b2"],["D:/ZeroClian/public/tags/index.html","24cfd77c9676583d9708eafc8a8b5776"],["D:/ZeroClian/public/tags/基础知识/index.html","37ebebeb14749ef70802f5b2d7fa4a73"],["D:/ZeroClian/public/tags/并发编程/index.html","a907bd83cb55e61f1914686a4fd09478"],["D:/ZeroClian/public/tags/总结/index.html","2ca02ce748e29743c946183e6c09fc3a"],["D:/ZeroClian/public/tags/模板/index.html","d6e8702af9b4137bbf8187480ce67103"],["D:/ZeroClian/public/tags/测试/index.html","79ea82ada73a594caa46ca40fc9353ee"],["D:/ZeroClian/public/tags/课程设计/index.html","50d59731b28fc352879308c38c6c70a9"],["D:/ZeroClian/public/tags/配置/index.html","4169996062f00b6a13e51268d7cce989"]];
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







