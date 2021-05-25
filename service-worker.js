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

var precacheConfig = [["D:/ZeroClian/public/archives/2020/01/index.html","04499ea5223b20d247501cf7a27789d8"],["D:/ZeroClian/public/archives/2020/12/index.html","60f84191450bcc404e1af014001adf54"],["D:/ZeroClian/public/archives/2020/index.html","dead4d243da976a0fa0276c772c13446"],["D:/ZeroClian/public/archives/2021/01/index.html","897c81ca8f8abb0cf7c8dae4d90d0014"],["D:/ZeroClian/public/archives/2021/03/index.html","a66c2621276e9e25e35373b17289ca82"],["D:/ZeroClian/public/archives/2021/04/index.html","2ae3e8f652cb25226c012e2a3e89ea67"],["D:/ZeroClian/public/archives/2021/index.html","cffb658642d50d0ff8d6034b19ffbda6"],["D:/ZeroClian/public/archives/2021/page/2/index.html","8794526777f45eb7513b61f2a4b3619b"],["D:/ZeroClian/public/archives/index.html","cb2c6f3cce5b45eb33989bc1708d65dc"],["D:/ZeroClian/public/archives/page/2/index.html","ba1949b04e0b3c089ba5d3c8bef7156c"],["D:/ZeroClian/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["D:/ZeroClian/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["D:/ZeroClian/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["D:/ZeroClian/public/categories/Hexo/index.html","c08b71d34250b4305392ec30d22216b0"],["D:/ZeroClian/public/categories/index.html","1dcfba31ab159cde763006e0e492f398"],["D:/ZeroClian/public/categories/vscode/index.html","cd5443c3ebb3ffcfdeba5d178a4125f7"],["D:/ZeroClian/public/categories/容器/index.html","73c11256aa1017048c4c0615fec0827d"],["D:/ZeroClian/public/categories/生活/index.html","d1d8ae7b21472ed5b756ea6b0e28f635"],["D:/ZeroClian/public/categories/面试必备/Java基础/index.html","6b2865a5a9e9e04ee6b7ba932d018b4a"],["D:/ZeroClian/public/categories/面试必备/MySQL/index.html","072d1d1f927f8f1a02d3501524c2f74a"],["D:/ZeroClian/public/categories/面试必备/Spring/index.html","6eb264a07eae8a4bfb07dc1b566c9c58"],["D:/ZeroClian/public/categories/面试必备/index.html","21c4d30dcaa3c4a929c0adc3def2e037"],["D:/ZeroClian/public/categories/面试必备/page/2/index.html","c33950a1f709cfd2c7038a28c790cde1"],["D:/ZeroClian/public/categories/面试必备/多线程/index.html","6fd99954e2d66a0ca56a37e8f05691e5"],["D:/ZeroClian/public/categories/项目/Android/index.html","c48c0f0a9d93867514a1b4c847d45eaf"],["D:/ZeroClian/public/categories/项目/index.html","500b8f0bdf3827a439f1aedcb1f01bda"],["D:/ZeroClian/public/css/background.css","f30ced8555bdf7a73e628f0d6bc0f110"],["D:/ZeroClian/public/css/index.css","44bacf810fed2654641b90a8dff2aa81"],["D:/ZeroClian/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/ZeroClian/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/ZeroClian/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/ZeroClian/public/img/bg.jpg","069c3cc800aa3e1aa568aa330cabac8c"],["D:/ZeroClian/public/img/df.jpg","54fbd16ead43e34b8da0181034479d93"],["D:/ZeroClian/public/img/favicon.jpg","fe69a36d5a019f3a31bd8d07605f7370"],["D:/ZeroClian/public/img/favicon.png","cf1b62c94c51fd8f15f569ba2247282b"],["D:/ZeroClian/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/ZeroClian/public/img/head.jpg","9c851b04824f7ad7557d33da60030f7b"],["D:/ZeroClian/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/ZeroClian/public/img/wechat.jpg","1f6c9f34467d0eaecb144dfe7aa3a75c"],["D:/ZeroClian/public/index.html","fc4a97c1b33b12bcf9c122a7eabc24a4"],["D:/ZeroClian/public/js/main.js","daa594fa296eadb9c43910113c5f8341"],["D:/ZeroClian/public/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["D:/ZeroClian/public/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["D:/ZeroClian/public/js/snow.js","ec5839ee3e36b8c727a9f0a373749ffe"],["D:/ZeroClian/public/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["D:/ZeroClian/public/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["D:/ZeroClian/public/link/index.html","b9391149d9a5aa501c947608bfd3f3f1"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/ZeroClian/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/ZeroClian/public/page/2/index.html","db068f135bcedc11bd61713160516515"],["D:/ZeroClian/public/page/3/index.html","60eff065437433b1da6105d762b0fd80"],["D:/ZeroClian/public/page/4/index.html","93ec6a18626a7f9ee7e5f5ec0794970d"],["D:/ZeroClian/public/posts/1e489958.html","64285375ebb624290b8028d37612def2"],["D:/ZeroClian/public/posts/34fea2ea.html","9a677342e811275f848b53200cf158b4"],["D:/ZeroClian/public/posts/4a17b156.html","22be3c26dbf2ec90ee0d0efdebbc41aa"],["D:/ZeroClian/public/posts/632b531d.html","99b0205c71abc794694668ff39c560cf"],["D:/ZeroClian/public/posts/64cd635.html","9deef0b23f4f9286ffb73b74b4790621"],["D:/ZeroClian/public/posts/681a2204.html","1cc55bb2288a7fead174418af2c34923"],["D:/ZeroClian/public/posts/7981371.html","916da4aa3349c4eac3bb2324d963c746"],["D:/ZeroClian/public/posts/9683a4f7.html","49b7394c9bb907c6a04f8f0143f60add"],["D:/ZeroClian/public/posts/97d452a7.html","0556a5938bc060345ff97baddaff4290"],["D:/ZeroClian/public/posts/a0808890.html","7c0bbfdf33620e231d9a78ee45c48aa6"],["D:/ZeroClian/public/posts/c352a0f3.html","315cb3dddee0b9f5cb5834c161ae8dd5"],["D:/ZeroClian/public/posts/c8ced817.html","178be5e9980f170988b59bf876ba5639"],["D:/ZeroClian/public/posts/ca4da212.html","89a84c56efd8f81f1cc7fe7954145812"],["D:/ZeroClian/public/posts/d62ead0.html","0c3b17b9fcf53aa2bbde254a116616a0"],["D:/ZeroClian/public/posts/d98c058a.html","93c8801f94049f3c0350a2092f1d4eda"],["D:/ZeroClian/public/posts/f7ede91d.html","94aec084e78f9f3feb39d0d30b48fbec"],["D:/ZeroClian/public/tags/Docker/index.html","77eb25a6cdb90c3db82cfa870dca3833"],["D:/ZeroClian/public/tags/MySQL/index.html","751d295e4822b58f22631bfd944f0dea"],["D:/ZeroClian/public/tags/Spring/index.html","c6230a21fb266ada66599deb7d3a0fc2"],["D:/ZeroClian/public/tags/index.html","dd57e6f7d1df690945c0c2fab450e762"],["D:/ZeroClian/public/tags/基础知识/index.html","2a20bae3c15f0105990ddf2f0df50401"],["D:/ZeroClian/public/tags/并发编程/index.html","42bf9cc125bb9f4276998c031157aa8f"],["D:/ZeroClian/public/tags/总结/index.html","fb79fcc21f2f43b92edfd2b694d1ed24"],["D:/ZeroClian/public/tags/模板/index.html","53db14831684dd75905184943f9b9b80"],["D:/ZeroClian/public/tags/测试/index.html","b7211de8bf5ef34d0f189faa082ada93"],["D:/ZeroClian/public/tags/课程设计/index.html","696b69f56bcd550256e69f3a5ed7fcf4"],["D:/ZeroClian/public/tags/配置/index.html","89c2e52c9dcdae484f0449f822e93f45"],["D:/ZeroClian/public/tags/集合/index.html","8b715824ec02cfca764b9ccb2a6bdd16"]];
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







