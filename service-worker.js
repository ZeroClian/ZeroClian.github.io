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

var precacheConfig = [["D:/ZeroClian/public/archives/2020/01/index.html","51dd4645b8bd285e0f441c976547b756"],["D:/ZeroClian/public/archives/2020/05/index.html","16709da21da5855874ced866ec4f0b04"],["D:/ZeroClian/public/archives/2020/12/index.html","5864339e51711472b79d98965f1c4881"],["D:/ZeroClian/public/archives/2020/index.html","bb1761ea7981ce1b835f1a06d774ba63"],["D:/ZeroClian/public/archives/2021/01/index.html","19608cd76a3e45284b31d124d5f962f0"],["D:/ZeroClian/public/archives/2021/03/index.html","fab4b30d1574d2a7d9293e73d9205f7f"],["D:/ZeroClian/public/archives/2021/04/index.html","c64ea5daf6df9df81cdb87d4b3fec062"],["D:/ZeroClian/public/archives/2021/05/index.html","c1242ab96cc1bc7bd7ce2e9c0fbb4cbc"],["D:/ZeroClian/public/archives/2021/index.html","04c21141f8ca5152dd820e21aff65424"],["D:/ZeroClian/public/archives/2021/page/2/index.html","dccc560e42b4e284487f373f24aebd44"],["D:/ZeroClian/public/archives/index.html","f4768ed706bdcfd40fa537585585797b"],["D:/ZeroClian/public/archives/page/2/index.html","874d7f79d8b7d9c23582f42fc1c4653e"],["D:/ZeroClian/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/ZeroClian/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/ZeroClian/public/categories/Hexo/index.html","41e57438d809c28aa10580643b261b2d"],["D:/ZeroClian/public/categories/IDEA/index.html","269cfc5d2c102e5a73f3eda1d24ee141"],["D:/ZeroClian/public/categories/index.html","e4eb62af71c6e70aed06d01eb4de44c6"],["D:/ZeroClian/public/categories/vscode/index.html","28a7c4e14952336ac0c312d465818b0a"],["D:/ZeroClian/public/categories/容器/index.html","c8baba7a7d8a4b0c20be719a12151d39"],["D:/ZeroClian/public/categories/工作/index.html","3962d887c34ef17b5d434689a7b6eeeb"],["D:/ZeroClian/public/categories/生活/index.html","ed5cb9bc8d8374f82b984a41c8c83efc"],["D:/ZeroClian/public/categories/面试必备/Java基础/index.html","fdbd6f77fa5d5f6205f845a6946d3f27"],["D:/ZeroClian/public/categories/面试必备/MySQL/index.html","f2ebc7caa2ec24fa1b251fa7d0708b59"],["D:/ZeroClian/public/categories/面试必备/Spring/index.html","987136b0694b8a7dc387efb414f63d47"],["D:/ZeroClian/public/categories/面试必备/index.html","43241c5b62ad3dd0d2aa75d37536f1de"],["D:/ZeroClian/public/categories/面试必备/page/2/index.html","3e6984371497dda147a1d24a6ce5042f"],["D:/ZeroClian/public/categories/面试必备/多线程/index.html","98c09012b60ed0768d8c661572b3c3c6"],["D:/ZeroClian/public/categories/项目/Android/index.html","145fb76edaa83d4ccf0c9bfcb6818fcb"],["D:/ZeroClian/public/categories/项目/index.html","b068c72d2759be9e9de46c0d1d12b542"],["D:/ZeroClian/public/css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["D:/ZeroClian/public/css/index.css","44bacf810fed2654641b90a8dff2aa81"],["D:/ZeroClian/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/ZeroClian/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/ZeroClian/public/img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["D:/ZeroClian/public/img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["D:/ZeroClian/public/img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["D:/ZeroClian/public/img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["D:/ZeroClian/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/ZeroClian/public/img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["D:/ZeroClian/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/ZeroClian/public/img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["D:/ZeroClian/public/index.html","7be3ee25b80aad45bfcb4c05cfae4cb6"],["D:/ZeroClian/public/js/main.js","daa594fa296eadb9c43910113c5f8341"],["D:/ZeroClian/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/ZeroClian/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/ZeroClian/public/js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["D:/ZeroClian/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/ZeroClian/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/ZeroClian/public/link/index.html","69b675667b9daab98b7550f4ea3e2d1a"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/ZeroClian/public/page/2/index.html","361a0de743b44825a8c0d53a73fde94d"],["D:/ZeroClian/public/page/3/index.html","7827eb7aa7f7bbc4769bbd1e65692ead"],["D:/ZeroClian/public/page/4/index.html","8f5cc0e13b0ebbdc319765c1ea645cf2"],["D:/ZeroClian/public/posts/1e489958.html","0932bc16f94879b61e20be16f1fcd48b"],["D:/ZeroClian/public/posts/34fea2ea.html","bde4c7e9d0722e44cef705bea88b0615"],["D:/ZeroClian/public/posts/4a17b156.html","3edefdd35d921f1f22756cffdb29738b"],["D:/ZeroClian/public/posts/566321e7.html","027d6042b443155d12aa450831538ea6"],["D:/ZeroClian/public/posts/5fddb0d.html","29f63ca92e785436eb0cbf7bc8a04a4e"],["D:/ZeroClian/public/posts/632b531d.html","43103abbc968d5eebe19a3127e71d985"],["D:/ZeroClian/public/posts/64cd635.html","7b8fbe00dd9b7361855cd8ea245be086"],["D:/ZeroClian/public/posts/681a2204.html","88786df991715b755b4782c543837748"],["D:/ZeroClian/public/posts/7981371.html","21b51d8572012c1b5358251071707e0d"],["D:/ZeroClian/public/posts/9683a4f7.html","0ea683dd30c0a77c816bc525027976ff"],["D:/ZeroClian/public/posts/97d452a7.html","50fdf25a32b537fd50b5dbd2d2b34652"],["D:/ZeroClian/public/posts/a0808890.html","b41cc1b9e7024c15e78283b7025e4675"],["D:/ZeroClian/public/posts/c352a0f3.html","3c54f6b9548f8c59df64d3c00b9a3c34"],["D:/ZeroClian/public/posts/c8ced817.html","2d13985a4e29feb71f1a02722d1a4e11"],["D:/ZeroClian/public/posts/ca4da212.html","dc60e50e3084e2310d1640343d74af42"],["D:/ZeroClian/public/posts/d62ead0.html","b35a12edb0af754b95efdaed621b8a67"],["D:/ZeroClian/public/posts/d98c058a.html","df082f90d76a4af92e95cb1e60c6b252"],["D:/ZeroClian/public/posts/df083c4d.html","34fe72c833fc60a734de14f6411dcf99"],["D:/ZeroClian/public/posts/f7ede91d.html","7b220fc06e3ddd5c011b21abdd45a48c"],["D:/ZeroClian/public/tags/Docker/index.html","c48114ff90a282eeab46fc4cf85669b3"],["D:/ZeroClian/public/tags/MySQL/index.html","8f8983c13ce8a115f7681be0eb173657"],["D:/ZeroClian/public/tags/Spring/index.html","b3fa98a8b976e7576299e0c5bec5145d"],["D:/ZeroClian/public/tags/Steam/index.html","6746e129bfa20e7f30551d3f9712ce55"],["D:/ZeroClian/public/tags/index.html","3f1dfe83943156e02b6e98d45982f2ab"],["D:/ZeroClian/public/tags/优化/index.html","5aeafcefe2b7d4fc81c10975d4a2ba8e"],["D:/ZeroClian/public/tags/基础知识/index.html","489e04e774579aedfafeee2d91ef0bd5"],["D:/ZeroClian/public/tags/并发编程/index.html","fe3495c9bec94cf97497fb6c64ebf1ae"],["D:/ZeroClian/public/tags/快捷键/index.html","dd5c5f4c930d58b0a36f17533238f69f"],["D:/ZeroClian/public/tags/总结/index.html","7c249c239388c3046f8891308f488f7c"],["D:/ZeroClian/public/tags/模板/index.html","d103a06c639980a8dc956717514b9e8a"],["D:/ZeroClian/public/tags/测试/index.html","de462b8dc16664c279efa4cbc0a825ef"],["D:/ZeroClian/public/tags/课程设计/index.html","35e38a3a8224cc8e649fb3c4844ae88e"],["D:/ZeroClian/public/tags/配置/index.html","dc7c9d550678d8f15d60ef44a0fef7d3"],["D:/ZeroClian/public/tags/集合/index.html","3be4cf76b710b8a2a352f36e2b1a354d"]];
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







