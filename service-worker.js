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

var precacheConfig = [["D:/ZeroClian/public/archives/2020/01/index.html","5ea1a05896cb53f1ee00c908b8cc062c"],["D:/ZeroClian/public/archives/2020/12/index.html","2c6806c179d0968bacc370aad4d0e061"],["D:/ZeroClian/public/archives/2020/index.html","d82651e1fcb1dc10dc8fa25d250adea9"],["D:/ZeroClian/public/archives/2021/01/index.html","4cef29d92ff434c68b4e168618ff7f81"],["D:/ZeroClian/public/archives/2021/03/index.html","10e684108ac51c0b6e3b675af991130e"],["D:/ZeroClian/public/archives/2021/04/index.html","9908f626be2057228a23d24c3f6c80e0"],["D:/ZeroClian/public/archives/2021/05/index.html","fc94c8f194fdb15959a4fab9fc4d855b"],["D:/ZeroClian/public/archives/2021/06/index.html","303b11fd4f494020b560d569fd07f131"],["D:/ZeroClian/public/archives/2021/index.html","6744c38b38946e61980365cee0ddf6c0"],["D:/ZeroClian/public/archives/2021/page/2/index.html","e3834ba3b65babee276b79246e8109a9"],["D:/ZeroClian/public/archives/index.html","5c614f172965e9d0896d9cfa6b3e3291"],["D:/ZeroClian/public/archives/page/2/index.html","54193af8b945652de22aa7911a6ebcbc"],["D:/ZeroClian/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/ZeroClian/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/ZeroClian/public/categories/Hexo/index.html","b3685a1fafca64d2af984730c33afb5e"],["D:/ZeroClian/public/categories/index.html","c1413725368efc40566d7358d64218be"],["D:/ZeroClian/public/categories/vscode/index.html","e37f06bc11a61936cdc0c7bea2a47307"],["D:/ZeroClian/public/categories/容器/index.html","c39d9f16591fca7ae73f80a64465c36f"],["D:/ZeroClian/public/categories/生活/index.html","244375d0782532bd747c039fdd783fe9"],["D:/ZeroClian/public/categories/面试必备/Java基础/index.html","33cbdc073fd14a76855874f2efdfcc02"],["D:/ZeroClian/public/categories/面试必备/MySQL/index.html","afdd33e8d1efcbf434c367604c662916"],["D:/ZeroClian/public/categories/面试必备/Spring/index.html","1dc39045e864042055fe67258bd33972"],["D:/ZeroClian/public/categories/面试必备/index.html","7c5887e191de662db31543536bfc6604"],["D:/ZeroClian/public/categories/面试必备/page/2/index.html","db5a9ab2ecc9ea0d724eabc961d2aacd"],["D:/ZeroClian/public/categories/面试必备/多线程/index.html","3b8e55cf8312dd5c5a59967d21f57597"],["D:/ZeroClian/public/categories/项目/Android/index.html","afd6320e296bebd5722cb0083c34b8d9"],["D:/ZeroClian/public/categories/项目/index.html","1b05482b29baa6efbaba9e88398fd9f8"],["D:/ZeroClian/public/css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["D:/ZeroClian/public/css/index.css","44bacf810fed2654641b90a8dff2aa81"],["D:/ZeroClian/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/ZeroClian/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/ZeroClian/public/img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["D:/ZeroClian/public/img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["D:/ZeroClian/public/img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["D:/ZeroClian/public/img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["D:/ZeroClian/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/ZeroClian/public/img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["D:/ZeroClian/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/ZeroClian/public/img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["D:/ZeroClian/public/index.html","1a9f71b758850a86cd13972356ae190d"],["D:/ZeroClian/public/js/main.js","daa594fa296eadb9c43910113c5f8341"],["D:/ZeroClian/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/ZeroClian/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/ZeroClian/public/js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["D:/ZeroClian/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/ZeroClian/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/ZeroClian/public/link/index.html","fdc5962973c19fbb78535fc0d4ed28da"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/ZeroClian/public/page/2/index.html","1ac6f750371d96c1958a639b1b0ac574"],["D:/ZeroClian/public/page/3/index.html","91bc10bbf72c45c4137512afe9129bf4"],["D:/ZeroClian/public/page/4/index.html","a2245323014960d7fe8d817ea47724c5"],["D:/ZeroClian/public/posts/0.html","04e862b78e30a65e700d34e93894e516"],["D:/ZeroClian/public/posts/1e489958.html","aed0ec6d2aedf73c5cced1d058dcf911"],["D:/ZeroClian/public/posts/34fea2ea.html","4ec395bca016b60f87094453f961d20b"],["D:/ZeroClian/public/posts/4a17b156.html","c4a48cc59e8fb6a86aab13312759e15d"],["D:/ZeroClian/public/posts/632b531d.html","01d1d9698c44a0fc03748c7ec7d250a2"],["D:/ZeroClian/public/posts/64cd635.html","1964c6180bbec72c337664cee3ee2f8a"],["D:/ZeroClian/public/posts/681a2204.html","89500285fc2d6d6d842d5381bc493d77"],["D:/ZeroClian/public/posts/7981371.html","eca45ce0d77b32fc03437a89b9542171"],["D:/ZeroClian/public/posts/9683a4f7.html","611395e2f5ac5c01c2f1bff7310a96a2"],["D:/ZeroClian/public/posts/97d452a7.html","5faf72223877938300b05d586e254bfd"],["D:/ZeroClian/public/posts/a0808890.html","b52509932ad5bd82f4bbbba6eaeca03f"],["D:/ZeroClian/public/posts/c352a0f3.html","5c977ec3b7bcc18d73e641dec6830dc5"],["D:/ZeroClian/public/posts/c8ced817.html","40ffdc85b5f6a18400069fe2455c29d4"],["D:/ZeroClian/public/posts/ca4da212.html","532965cbb19296ef129729d26a42cad0"],["D:/ZeroClian/public/posts/d62ead0.html","88a21f10945a3bd850299382da48dad7"],["D:/ZeroClian/public/posts/d98c058a.html","1204a41ab4cb64dcf2ca9ecaaad9608f"],["D:/ZeroClian/public/posts/df083c4d.html","ce85aba4e699019c3b26658cb2c3be2f"],["D:/ZeroClian/public/posts/f7ede91d.html","d0f6ab1da9fc744a31717de95f83145d"],["D:/ZeroClian/public/tags/Docker/index.html","f76dcad8a0aec708518f35a74100e8a6"],["D:/ZeroClian/public/tags/MySQL/index.html","4ac3c7261980a81702a908e582c5ae7e"],["D:/ZeroClian/public/tags/Spring/index.html","781ac3b7d60e12f7f5eac92d8ee5c983"],["D:/ZeroClian/public/tags/index.html","61380397a38a788181aa2701fd76eb09"],["D:/ZeroClian/public/tags/基础知识/index.html","d30516cfe618753064a51ae600e8f9f1"],["D:/ZeroClian/public/tags/并发编程/index.html","61d7f141a25a6937e2b285b5e3971ae3"],["D:/ZeroClian/public/tags/总结/index.html","0d3fb818c6d02d623c09dc13958f911b"],["D:/ZeroClian/public/tags/模板/index.html","22752957fb9ec92754bb30bffbaf2262"],["D:/ZeroClian/public/tags/测试/index.html","c0b4f2c739632c55c8f80404c71032ac"],["D:/ZeroClian/public/tags/课程设计/index.html","d3fe87ad50b07776cbef0872cde99ef9"],["D:/ZeroClian/public/tags/配置/index.html","fc9fa8829a6505a53e4113f110f15c36"],["D:/ZeroClian/public/tags/集合/index.html","762c5ec09c173b59d902533b4d30a29e"]];
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







