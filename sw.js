//install service worker

self.addEventListener('install',evt=>{
    console.log("Service worker has been installed");
})


//activate service worker


self.addEventListener('active',evt=>{
    console.log("Service worker activated");
})

const furniture = "furniture-pwa-v1"
const assets = [
  "/",
  "/index.html",

  //CSS files
    "assets/css/flex-slider.css",
    "assets/css/fontawesome.css",
    "assets/css/owl.css",
    "assets/css/tooplate-main.css",
    // "assets/css/linearicons.css",
    // "assets/css/owl.carousel.min.css",
    // "assets/css/owl.theme.default.min.css",
    // "assets/css/responsive.css",
    // "assets/css/style.css",


    // JS files
    "assets/js/custom.js",
    "assets/js/flex-slider.js",
    "assets/js/isotope.js",
    "assets/js/owl.js",
    // "assets/js/jquery.js",
    // "assets/js/owl.carousel.min.js",

  // Images files
    "assets/images/about-us.jpg",
    "assets/images/banner-bg.jpg",
    "assets/images/big-01.jpg",
    "assets/images/big-02.jpg",
    "assets/images/big-03.jpg",
    "assets/images/big-04.jpg",
    "assets/images/header-logo.png",
    "assets/images/item-01.jpg",
    "assets/images/item-02.jpg",
    "assets/images/item-03.jpg",
    "assets/images/item-04.jpg",
    "assets/images/item-05.jpg",
    "assets/images/item-06.jpg",
    "assets/images/logo.png",
    "assets/images/logo144.png",
    "assets/images/logo512.png",
    "assets/images/product-01.jpg",
    "assets/images/product-02.jpg",
    "assets/images/product-03.jpg",
    "assets/images/product-04.jpg",
    "assets/images/product-05.jpg",
    "assets/images/product-06.jpg",
    "assets/images/thumb-01.jpg",
    "assets/images/thumb-02.jpg",
    "assets/images/thumb-03.jpg",
    "assets/images/thumb-04.jpg",
    // "assets/images/slider/slider2.png",
    // "assets/images/slider/slider3.png",


]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(wearablesPWA).then(cache => {
      cache.addAll(assets)
      // cache.addAll([
      //   "/",
      //   "/index.html",
      
      //   //CSS files
      //   "/css/style.min.css",
      //   "/css/fontawesome.min.css",
      //   "/css/bootstrap.min.css",
      //   "/css/bootstrap.css",
      //   "/css/all.min.css",
      
      //     // JS files
      //   "/js/scrollreveal.min.js",
      //   "/js/script.js",
      //   "/js/popper.min.js",
      //   "/js/mdb.min.js",
      //   "/js/mdb.js",
      //   "/js/jquery-3.3.1.min.js",
      //   "/js/fontawesome.min.js",
      //   "/js/bootstrap.min.js",
      //   "/js/bootstrap.js",
      //   "/js/all.min.js",
      //   "/js/modules/wow.js",
      //   "/js/modules/waves.js",
      //   "/js/modules/velocity.min.js",
      //   "/js/modules/velocity.js",
      //   "/js/modules/scrolling-navbar.js",
      //   "/js/modules/jquery.easing.js",
      //   "/js/modules/forms-free.js",
      //   "/js/modules/enhanced-modals.js",
      //   "/js/modules/chart.js",
      //   "/js/addons/datatables.min.js",
      //   "/js/addons/datatables.js",
      //   "js/app.js",
      
      //   // Images files
      //   "/img/2257fa59a65da0b.jpg",
      //   "/img/304775-105_JORDAN_7_RETRO_1_LARGE.jpg",
      //   "/img/921669-401-pv.png",
      //   "/img/air-jordan-3-retro-bg-gs-infrared-23-white-blackwlf-grey-infrrd-23-011880_2.png",
      //   "/img/AJ8-bb.png,",
      //   "/img/header_03-4493e069.jpg",
      //   "/img/jordan-jumpman-team-1-white-gym-red-cool-grey.jpg",
      //   "/img/kisspng-jumpman-amazon-com-air-jordan-shoe-sneakers-michael-jordan-5ac33dc5331661.6471895515227447732093.jpg",
      //   "/img/kisspng-jumpman-nike-air-jordan-shoe-foot-locker-sneakers-5ac6c636d2b126.257491231522976310863.jpg",
      //   "/img/nike_PNG12.png",
      //   "/img/nike_PNG13.png",
      //   "/img/nike_PNG15.png",
      //   "/img/nike-just-do-it-nikecom-ng.jpg",
      //   "/img/Nike-Shoes-Transparent-Background.png",
      //   "/img/Nike-Shoes-Transparent-PNG.png",
      //   "/img/nike.jpeg",
      //   "/img/nike512.png",
      //   "/img/Original-New-Arrival-2016-NIKE-AIR-MAX-women-s-Skateboarding-Shoes-sneakers-free-shipping.jpg",
      //   "/img/snusa-detail_20-sf.jpg",
      //   "/img/theshoe.jpg",
      //   "/img/transparent-nikes-black-3.png",
      //   "/img/up.png",
      //   "/img/ZoomFly_HP_p3_d.jpg",
            
      // ]);
    })
  )
})


self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })

  self.addEventListener("push", event => {
    let message = event.data.json();
  
    switch(message.type) {
      case "init":
        doInit();
        break;
      case "shutdown":
        doShutdown();
        break;
    }
  }, false);
  



  self.addEventListener('sync', event => {
    if (event.tag === 'my-tag-name') {
        event.waitUntil(doTheWork());
    }
});