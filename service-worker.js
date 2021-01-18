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

var precacheConfig = [["D:/ZeroClian/public/archives/2020/01/index.html","33c54e875ebe12832f0a87885c11c31b"],["D:/ZeroClian/public/archives/2020/12/index.html","8291235163524fbec51dcbb3584048c1"],["D:/ZeroClian/public/archives/2020/index.html","d680515938a9868a463d6ae2de4d958b"],["D:/ZeroClian/public/archives/2021/01/index.html","e2ba96af08c908a13fb5e4ed23480096"],["D:/ZeroClian/public/archives/2021/index.html","0790a984550ae45065f935d749a31d01"],["D:/ZeroClian/public/archives/index.html","487593c4673a00c4d433e8092dad8617"],["D:/ZeroClian/public/archives/page/2/index.html","78f5db62ee424a3a810ff15b7c041bda"],["D:/ZeroClian/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/ZeroClian/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/ZeroClian/public/categories/Hexo/index.html","4dc571b4ca823d072a27563f94eb4a82"],["D:/ZeroClian/public/categories/Spring全家桶/Spring/index.html","da55d0737d26791e93148d39da30d6be"],["D:/ZeroClian/public/categories/Spring全家桶/index.html","38d895cec0c8a6cf3fe639b8b43c93ae"],["D:/ZeroClian/public/categories/index.html","915aead5ac40bd3520698cb8073b18ee"],["D:/ZeroClian/public/categories/vscode/index.html","60a85dcf773d4beecd1386402f351fe0"],["D:/ZeroClian/public/categories/容器/index.html","3f8b5025e391d5657976279b0239a9c3"],["D:/ZeroClian/public/categories/生活/index.html","76501523cc39c3ce76fe81637c12ef08"],["D:/ZeroClian/public/categories/面试必备/Java基础/index.html","03d643180ed339e82099472e43c3f5bb"],["D:/ZeroClian/public/categories/面试必备/MySQL/index.html","433ec6e97d88b72fd6361d5000989bf1"],["D:/ZeroClian/public/categories/面试必备/Spring/index.html","65d2557c6f62b21bbbe1d73ba33ea46a"],["D:/ZeroClian/public/categories/面试必备/index.html","5f35f26fceae23e3c9d1458f14ecb0c7"],["D:/ZeroClian/public/categories/面试必备/多线程/index.html","ef255927957f8b9fbe0e1a64128be315"],["D:/ZeroClian/public/categories/项目/Android/index.html","452ee07dccd899a161af50ae9fe753b0"],["D:/ZeroClian/public/categories/项目/index.html","35ec301360fbfe763c095134309f5ae8"],["D:/ZeroClian/public/css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["D:/ZeroClian/public/css/index.css","44bacf810fed2654641b90a8dff2aa81"],["D:/ZeroClian/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/ZeroClian/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/ZeroClian/public/img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["D:/ZeroClian/public/img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["D:/ZeroClian/public/img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["D:/ZeroClian/public/img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["D:/ZeroClian/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/ZeroClian/public/img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["D:/ZeroClian/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/ZeroClian/public/img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["D:/ZeroClian/public/index.html","e3a0464171b5e869cee0136cbfb33e6d"],["D:/ZeroClian/public/js/main.js","daa594fa296eadb9c43910113c5f8341"],["D:/ZeroClian/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/ZeroClian/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/ZeroClian/public/js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["D:/ZeroClian/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/ZeroClian/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/ZeroClian/public/link/index.html","0ce4d6d49261095ec2cd581c51c7b42c"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/ZeroClian/public/page/2/index.html","445a184966cab1c2d18e85c4258c2567"],["D:/ZeroClian/public/page/3/index.html","7724234e4e57cfcd63509b21182911ce"],["D:/ZeroClian/public/posts/1e489958.html","e422e208537ed2a518519330ef992e06"],["D:/ZeroClian/public/posts/34fea2ea.html","4cd412911e53c3c566e2b4acdbb6ae0f"],["D:/ZeroClian/public/posts/4a17b156.html","46aef2001cb0c0f1d503c9d50c203b8f"],["D:/ZeroClian/public/posts/632b531d.html","3d6ee446e2d15d3941df613b2cee5b6f"],["D:/ZeroClian/public/posts/64cd635.html","e7f348057d111f9c4ece5eab0df43450"],["D:/ZeroClian/public/posts/7981371.html","25b21018b8c9d410583fa2cb1bde9103"],["D:/ZeroClian/public/posts/9683a4f7.html","2787af154685a667c5c1e155a206f426"],["D:/ZeroClian/public/posts/97d452a7.html","b1bc76e7c523ced6abecbeb0f34863f6"],["D:/ZeroClian/public/posts/a0808890.html","cdc07868cf7457235206251be81d08c7"],["D:/ZeroClian/public/posts/c8ced817.html","096bf9182b5789fc3dc3da14675714df"],["D:/ZeroClian/public/posts/d62ead0.html","36ba1f03c5b1b70d951cb666b1ff2879"],["D:/ZeroClian/public/posts/d98c058a.html","5d8c07b4dd34c5ebd5119b7048805bfa"],["D:/ZeroClian/public/posts/f7ede91d.html","d3bf4e901fa6ceb4bf49220042db8d1a"],["D:/ZeroClian/public/tags/Docker/index.html","e4a7bec284b7e96468c94ce89164d047"],["D:/ZeroClian/public/tags/MySQL/index.html","1396d2d44d26fbc21e67caf39d0fb7cf"],["D:/ZeroClian/public/tags/Spring/index.html","7a4086c28074f7e351f97791a122d600"],["D:/ZeroClian/public/tags/index.html","97c63a894a50e9c1df42bbb62be873ad"],["D:/ZeroClian/public/tags/基础知识/index.html","66ebdd036a2deee98781e99402f9e079"],["D:/ZeroClian/public/tags/并发编程/index.html","a5d80eeff99cc75eed8ad127f7153eb3"],["D:/ZeroClian/public/tags/总结/index.html","3d585e5ad4ae91733ec4587d8c72c8cc"],["D:/ZeroClian/public/tags/模板/index.html","6340a5a88f47c8f195cc6714bf3924e2"],["D:/ZeroClian/public/tags/测试/index.html","240ce971ccaab4e0ef83d338e325efbd"],["D:/ZeroClian/public/tags/课程设计/index.html","20d8b121e33f68cb950558c32242e004"],["D:/ZeroClian/public/tags/配置/index.html","82b4fe09ff349d4bf0ba1bf4058c0795"]];
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







