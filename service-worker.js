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

var precacheConfig = [["D:/ZeroClian/public/archives/2020/01/index.html","759b2abfae778c0bc647ade747ea5c76"],["D:/ZeroClian/public/archives/2020/05/index.html","f5d9e35c8e0ca2839fdff7028a238dac"],["D:/ZeroClian/public/archives/2020/12/index.html","fae871f2a6ea7e98816b92eb6711c5cb"],["D:/ZeroClian/public/archives/2020/index.html","36b5a39ab8b384276c266e051185914c"],["D:/ZeroClian/public/archives/2021/01/index.html","f0ed452e436da288d75c13499d528b78"],["D:/ZeroClian/public/archives/2021/03/index.html","f1dee7e569fd860b7d93998cf5f65423"],["D:/ZeroClian/public/archives/2021/04/index.html","2b540fa943ff10a7e496ab77a3b5ebbf"],["D:/ZeroClian/public/archives/2021/05/index.html","229d5e1f0d5d5b3d85da40d944f739af"],["D:/ZeroClian/public/archives/2021/06/index.html","abdd8546ba6c6a48c2f76ae7086b41b9"],["D:/ZeroClian/public/archives/2021/07/index.html","9d242c7f064af5d4c6061a5feb2eed72"],["D:/ZeroClian/public/archives/2021/index.html","2cc0429410cbab5dc4a9541ccaf04e33"],["D:/ZeroClian/public/archives/2021/page/2/index.html","0817ee18a8f753ff89c03c10aae22eba"],["D:/ZeroClian/public/archives/index.html","b6130657775deac81bf05af1d2bd0a79"],["D:/ZeroClian/public/archives/page/2/index.html","765a916fb04b36157ff1a0f33114a15e"],["D:/ZeroClian/public/archives/page/3/index.html","34588a1089d860e7f8cbeb9e3ca74133"],["D:/ZeroClian/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/ZeroClian/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/ZeroClian/public/categories/Hexo/index.html","ea32ad78b5947ecb01829de26449b973"],["D:/ZeroClian/public/categories/IDEA/index.html","0fd11b0fb3434ed25fb42ebd69755097"],["D:/ZeroClian/public/categories/Netty/index.html","7b8da710cfd9efc53a288148bf912930"],["D:/ZeroClian/public/categories/Redis/index.html","ecfadd5c9af8919dcec3d69e964ae43b"],["D:/ZeroClian/public/categories/index.html","99731796f6aeb2b01574552f40e9aa69"],["D:/ZeroClian/public/categories/vscode/index.html","854bdfdfabba54347dca1833c56be811"],["D:/ZeroClian/public/categories/容器/index.html","8f65aa7e20bae60ed334c9c1909a6390"],["D:/ZeroClian/public/categories/工作/index.html","58a76c71e1728b60d87cb3c48520438c"],["D:/ZeroClian/public/categories/生活/index.html","09b17414533ce7412cac53dbf909b1ab"],["D:/ZeroClian/public/categories/面试必备/Java基础/index.html","2f492fe6103de50ed4bfa2780e51f1ba"],["D:/ZeroClian/public/categories/面试必备/MySQL/index.html","823c93c7c67500d7f65cedadd88a3b6f"],["D:/ZeroClian/public/categories/面试必备/Spring/index.html","be9d08d8401f35da134951bc862089bd"],["D:/ZeroClian/public/categories/面试必备/index.html","f019d938fe557737cb56559b6e7d4049"],["D:/ZeroClian/public/categories/面试必备/page/2/index.html","bd384a10a773d862ee65c9427971832c"],["D:/ZeroClian/public/categories/面试必备/多线程/index.html","b0921c1dc0411570a2486bc16b8518db"],["D:/ZeroClian/public/categories/项目/Android/index.html","12a8a30d07f74b0796315b8af6c215a3"],["D:/ZeroClian/public/categories/项目/index.html","2da8d728ad669e6f606d942653f7f338"],["D:/ZeroClian/public/css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["D:/ZeroClian/public/css/index.css","44bacf810fed2654641b90a8dff2aa81"],["D:/ZeroClian/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/ZeroClian/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/ZeroClian/public/img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["D:/ZeroClian/public/img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["D:/ZeroClian/public/img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["D:/ZeroClian/public/img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["D:/ZeroClian/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/ZeroClian/public/img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["D:/ZeroClian/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/ZeroClian/public/img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["D:/ZeroClian/public/index.html","a86d02e587adcd474c3670d03b8fe73b"],["D:/ZeroClian/public/js/main.js","daa594fa296eadb9c43910113c5f8341"],["D:/ZeroClian/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/ZeroClian/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/ZeroClian/public/js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["D:/ZeroClian/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/ZeroClian/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/ZeroClian/public/link/index.html","281c6b91a0ab244592ac2792c1607aef"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/ZeroClian/public/page/2/index.html","40b271a61951df3db927e8b6a96fff11"],["D:/ZeroClian/public/page/3/index.html","b07f25d97087115ac3fddc60f6cf190e"],["D:/ZeroClian/public/page/4/index.html","2f67eac4d6305f95252bbe8994d3fae2"],["D:/ZeroClian/public/posts/1e489958.html","483b6d8f26ecac65aba6fa538b4187c7"],["D:/ZeroClian/public/posts/277c18f1.html","331b40dbf29e5a7c5d5c525a7aa13f03"],["D:/ZeroClian/public/posts/34fea2ea.html","4c3e75332b72b4ed597b0eb355e3b2a1"],["D:/ZeroClian/public/posts/4a17b156.html","dfbf2399364145dc7f9672c3dddf77fc"],["D:/ZeroClian/public/posts/566321e7.html","c401e83f1b97589ef62cc7f546e39b80"],["D:/ZeroClian/public/posts/5fb5b514.html","64234dd85ef1034ce1e89ba5689bb8d8"],["D:/ZeroClian/public/posts/5fddb0d.html","9623648a70acf919975c1b3d14ef50c0"],["D:/ZeroClian/public/posts/632b531d.html","f358de2e9a963f6d16241d5ac4752f3c"],["D:/ZeroClian/public/posts/64cd635.html","cdc8560a0e734d3afcdf64bfaf3391e0"],["D:/ZeroClian/public/posts/681a2204.html","a34525c27ab276a369a0219c37b48518"],["D:/ZeroClian/public/posts/7981371.html","0cc8254ca995a5909ebcf483e8d31f6e"],["D:/ZeroClian/public/posts/90cf43cc.html","6442a10628547eb0c0012447af4af2b8"],["D:/ZeroClian/public/posts/9683a4f7.html","1c6751c1feb2a502773e09311b2f1dcc"],["D:/ZeroClian/public/posts/97d452a7.html","e279a62a89d02c476127970db0b47386"],["D:/ZeroClian/public/posts/a0808890.html","34a25c7606d1f0d4daa18c1a6496b62f"],["D:/ZeroClian/public/posts/bae4ff13.html","e56b0a5a8cbda38188cd09a58c0892fb"],["D:/ZeroClian/public/posts/c352a0f3.html","250310ca8c1a7e4b8a4f7fe28af11d16"],["D:/ZeroClian/public/posts/c8ced817.html","eed573ed733b90482adac4a7dbdab535"],["D:/ZeroClian/public/posts/ca4da212.html","2375612f167bcba711e07c96a057a3f3"],["D:/ZeroClian/public/posts/d62ead0.html","2052b1537469e39145b1f05d95d7c0c7"],["D:/ZeroClian/public/posts/d98c058a.html","23a53c9b223765f653c1770a22c5d41d"],["D:/ZeroClian/public/posts/df083c4d.html","8cab35ff6d917153dcd80f1022883ffc"],["D:/ZeroClian/public/posts/f7ede91d.html","9250ebdb44900edd7152590b979a2b56"],["D:/ZeroClian/public/tags/Docker/index.html","25eaa8b4ba120479a4ac206ea2d3f16a"],["D:/ZeroClian/public/tags/MySQL/index.html","1bbc4847bd854898d072e5bcc64708a8"],["D:/ZeroClian/public/tags/Netty/index.html","d12359efbbb963df8f0aedb8a9d03aa9"],["D:/ZeroClian/public/tags/Spring/index.html","ab173055b5091dcc7feadc0f8fd12df2"],["D:/ZeroClian/public/tags/Steam/index.html","9837f44c84f0b62ee398120f29df93de"],["D:/ZeroClian/public/tags/index.html","c0c6360418f782ab36af66fb0cadd66c"],["D:/ZeroClian/public/tags/优化/index.html","5a6fe82c5d1ddc504c865d512d7b5739"],["D:/ZeroClian/public/tags/命令/index.html","bb3460c735aa59021b69716b939a6992"],["D:/ZeroClian/public/tags/基础知识/index.html","dc48eda4922a57f10e3e9c9f57d19c0a"],["D:/ZeroClian/public/tags/并发编程/index.html","0b22c187cb38715bdd520c9808f16540"],["D:/ZeroClian/public/tags/快捷键/index.html","2c302522390c94a141942220d24c952b"],["D:/ZeroClian/public/tags/总结/index.html","977c1ef13ca4edd4c18dc21b29d4264d"],["D:/ZeroClian/public/tags/模板/index.html","d5758a90ce86b69e50c7ac8b24d9ab2c"],["D:/ZeroClian/public/tags/知识点/index.html","89af306779bf22d15ea9aec5ae5d8f9e"],["D:/ZeroClian/public/tags/课程设计/index.html","4cb5e3590f5a55ef4e38c433fe1b5fe5"],["D:/ZeroClian/public/tags/配置/index.html","cfca5c3dcac7e3bcf1e226b17af9872b"],["D:/ZeroClian/public/tags/集合/index.html","7d32e2d8c940f32e8e31d8ddb6840468"]];
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







