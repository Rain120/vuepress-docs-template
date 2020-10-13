/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c1082386a4db5b48acaf715df0c59755"
  },
  {
    "url": "assets/css/0.styles.884fca8c.css",
    "revision": "79a03ec2dc7f784c2b72d1935f09104f"
  },
  {
    "url": "assets/img/docs.77834bc4.png",
    "revision": "77834bc47a88da6ebaa3ec6c5085d202"
  },
  {
    "url": "assets/img/new-secrects.89edc940.png",
    "revision": "89edc94007287b7baef6a1313f3da6c8"
  },
  {
    "url": "assets/img/personal-access-token.0991dcb5.png",
    "revision": "0991dcb59a41fb259a56b3d35150c426"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wechat-zhifubao-pay.c574ee9e.png",
    "revision": "c574ee9ea0fcc9370d0c3b5ac12a7981"
  },
  {
    "url": "assets/js/10.f576b329.js",
    "revision": "35f1763c904d70050cdba438cffca339"
  },
  {
    "url": "assets/js/11.fef178eb.js",
    "revision": "6e8c5a20b9bd0b5916245700a364b22d"
  },
  {
    "url": "assets/js/2.4468b9a5.js",
    "revision": "21b7174932705e7d93f516a777d4ffa6"
  },
  {
    "url": "assets/js/3.28267efd.js",
    "revision": "6074697e127eba132421b64dbcbfe4f6"
  },
  {
    "url": "assets/js/4.84a7c1c1.js",
    "revision": "288b6897dfaf3a4991527d1767ba083f"
  },
  {
    "url": "assets/js/5.deac811a.js",
    "revision": "ebc2d84f691c517c68d86c1dfe5dbcbe"
  },
  {
    "url": "assets/js/6.08ce8c7b.js",
    "revision": "e0908e472b5b04b15e3c8c971d449a68"
  },
  {
    "url": "assets/js/7.3430fd2d.js",
    "revision": "8ce801ee7f4bf3656dc9a6c0ec36b4a9"
  },
  {
    "url": "assets/js/8.4f62ae35.js",
    "revision": "3e12f383e46803f15d1a3cc09dddde11"
  },
  {
    "url": "assets/js/9.e33f1633.js",
    "revision": "17b94c4005b12160add821d7ff93b293"
  },
  {
    "url": "assets/js/app.ac5bbe49.js",
    "revision": "efeb66a2ec37ca4da87c3dd8af4956d5"
  },
  {
    "url": "images/docs.png",
    "revision": "77834bc47a88da6ebaa3ec6c5085d202"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "990c5e0b1dfe6fb536ee09eec59465cd"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "f8dc7fb1af07531e2246e9830f51edc7"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "0c311dc8a891275aaf6c470b93aa2074"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "65093a8d112a4d8b45953084fbb16487"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "4d70d214b4def5aabe58cfb017ddd16b"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "4d70d214b4def5aabe58cfb017ddd16b"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "eff562dd276ec4a5989ed0fb74c7fea0"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "a9af55f93b2cf1d325951fde149826f7"
  },
  {
    "url": "index.html",
    "revision": "5cc37884563c2950420f8b65a34d1369"
  },
  {
    "url": "logo.png",
    "revision": "417f7b51b74ff7a1dfe9210c2dc64d1a"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "22ec47f5f034542df1148225e97eb662"
  },
  {
    "url": "zh/how-to-config-docs/index.html",
    "revision": "083171fd7c806ba20dfddc5dfc67e8dd"
  },
  {
    "url": "zh/how-to-write-docs/index.html",
    "revision": "3a4dbbb06229e1f1b6e0fcd3f1afb88d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
