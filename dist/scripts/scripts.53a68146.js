!function(){"use strict";angular.module("moxieApp",["ngAnimate","ngCookies","ui.router","ngSanitize","ngTouch","swipe"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,b,c){c.html5Mode(!0),b.otherwise("/"),a.state("index",{url:"/",views:{main:{templateUrl:"views/index.html",controller:"IndexCtrl",controllerAs:"ic"}}})}])}(),function(){"use strict";angular.module("moxieApp").controller("MainCtrl",["$scope",function(a){}])}(),function(){"use strict";angular.module("moxieApp").controller("AboutCtrl",["$scope",function(a){a.pageClass="page-about"}])}(),function(){"use strict";angular.module("moxieApp").directive("deadCat",function(){return{restrict:"E",replace:!0,template:"<div class='moxie-logo'><div class='moxie-logo__left-ear'></div><div class='moxie-logo__right-ear'></div><div class='moxie-logo__head'></div><div class='moxie-logo__eye'></div><div class='moxie-logo__body'></div><div class='moxie-logo__arms'></div><div class='moxie-logo__legs'></div><div class='moxie-logo__tail'></div></div>",link:function(a,b,c){}}})}(),angular.module("moxieApp").service("GalleryService",function(){var a=this;a.images=[{index:2,path:"/images/gallery/default/jaguar.png",name:"Jaguar",description:"Oil on canvas.",size:'48" x 36"',original_for_sale:!1,original_sold:!1,original_price:3e3,original_purchase_url:null,prints:[{size:'48" x 36"',description:"High Quality Print on Card Stock",price:300,purchase_url:null,for_sale:!1},{size:'24" x 18"',description:"High Quality Print on Card Stock",price:200,purchase_url:null,for_sale:!1}],alignVertically:"top",alignHorizontal:"left"},{index:0,path:"/images/gallery/default/octoheart.png",name:"Octoheart",description:"Acrylic on canvas.",size:'48" x 36"',original_for_sale:!1,original_sold:!1,original_price:6e3,original_purchase_url:null,prints:[{size:'48" x 36"',description:"High Quality Print on Card Stock",price:300,purchase_url:null,for_sale:!1},{size:'24" x 18"',description:"High Quality Print on Card Stock",price:200,purchase_url:null,for_sale:!1}],alignVertically:"top",alignHorizontal:"right"},{index:1,path:"/images/gallery/default/tiger.png",name:"Tiger",description:"Acrylic on wood.",size:'36" x 36"',original_for_sale:!1,original_sold:!0,original_price:2e3,original_purchase_url:null,prints:[{size:'48" x 36"',description:"High Quality Print on Card Stock",price:300,purchase_url:null,for_sale:!1},{size:'24" x 18"',description:"High Quality Print on Card Stock",price:200,purchase_url:null,for_sale:!1}],alignVertically:"top",backgroundSize:"contain"},{index:3,path:"/images/gallery/default/skull_lady.png",name:"Skull Lady",description:"A lady with a skull.",size:'36" x 36"',original_for_sale:!1,original_sold:!1,original_price:2e3,original_purchase_url:null,prints:[{size:'48" x 36"',description:"High Quality Print on Card Stock",price:300,purchase_url:null,for_sale:!1},{size:'24" x 18"',description:"High Quality Print on Card Stock",price:200,purchase_url:null,for_sale:!1}],alignVertically:"top",backgroundSize:"contain"},{index:4,path:"/images/gallery/default/butterfly.png",name:"Butterfly Geometry",description:"A butterfly with some geometry.",size:'36" x 36"',original_for_sale:!1,original_sold:!1,original_price:2e3,original_purchase_url:null,prints:[{size:'48" x 36"',description:"High Quality Print on Card Stock",price:300,purchase_url:null,for_sale:!1},{size:'24" x 18"',description:"High Quality Print on Card Stock",price:200,purchase_url:null,for_sale:!1}],alignVertically:"top",backgroundSize:"contain"},{index:5,path:"/images/gallery/default/bird-skull.png",name:"Bird Skull",description:"A bird skull on wood.",size:'36" x 36"',original_for_sale:!1,original_sold:!1,original_price:2e3,original_purchase_url:null,prints:[{size:'48" x 36"',description:"High Quality Print on Card Stock",price:300,purchase_url:null,for_sale:!1},{size:'24" x 18"',description:"High Quality Print on Card Stock",price:200,purchase_url:null,for_sale:!1}],alignVertically:"top",backgroundSize:"contain"}]}),angular.module("moxieApp").controller("IndexCtrl",["$scope","$log","$timeout","$interval","GalleryService",function(a,b,c,d,e){function f(a){var b=a.path,c=_.isUndefined(a.alignVertically)||!a.alignVertically?"center":a.alignVertically,d=_.isUndefined(a.alignHorizontal)||!a.alignHorizontal?"center":a.alignHorizontal,e=c+" "+d,f=_.isUndefined(a.backgroundSize)||!a.backgroundSize?"cover":a.backgroundSize;return{"background-image":"url("+b+")","background-position":e,"background-size":f,"background-repeat":"no-repeat"}}function g(a){var b=a.path,c=_.isUndefined(a.alignVertically)||!a.alignVertically?"center":a.alignVertically,d=_.isUndefined(a.alignHorizontal)||!a.alignHorizontal?"center":a.alignHorizontal,e=c+" "+d;return{"background-image":"url("+b+")","background-position":e,"background-repeat":"no-repeat"}}function h(a){return a.index===q.currentIndex}function i(a){p(),q.currentIndex=a}function j(){a.isPlaying=!a.isPlaying}function k(){$(function(){$("[data-in-effect]").textillate({loop:!0,autoStart:!0})}),c(l,1e3)}function l(){q.isImagesLoaded||$(".gallery__image").imagesLoaded({background:!0},function(d){b.info("sturdynut:","Done loading gallery images.  Count: "+d.images.length),c(function(){$(".landing-page").toggleClass("page--active"),$(".gallery-page").toggleClass("page--active"),q.currentIndex=q.startIndex,o(),q.isImagesLoaded=!0,a.$apply()},2e3)})}function m(a){_.isUndefined(a)||a!==!0||p();var b=q.currentIndex;q.currentIndex=0===b?q.maxLength-1:b-1}function n(a){_.isUndefined(a)||a!==!0||p();var b=q.currentIndex;q.currentIndex=q.maxLength===b+1?q.startIndex:b+1}function o(){a.galleryInterval=d(function(){a.isPlaying===!0&&n()},q.frequency,0,!0)}function p(){a.isPlaying=!1}var q=this;q.images=e.images,q.thumb_images=angular.copy(q.images),a.pageClass="page-index",a.isPlaying=!0,q.startIndex=0,q.frequency=6e3,q.maxLength=q.images.length,q.getImageStyle=f,q.getImageThumbnailStyle=g,q.toggleByIndex=i,q.togglePlay=j,q.isActive=h,q.next=n,q.prev=m,k()}]),angular.module("moxieApp").run(["$templateCache",function(a){"use strict";a.put("views/about.html",'<section class="about-page"> <div data-ng-include="nav.html"></div> </section>'),a.put("views/index.html",'<section class="landing-page page page--active"> <div data-ng-include="nav.html"></div> <div class="page-content--centered"> <div class="artist"> <img class="arting-logo" src="images/moxie_logo.png" alt="Moxie Cat Logo"> <div class="artist-name">MoxiE</div> <div class="artist-tagline" data-in-effect="fadeIn" data-out-effect="fadeOut">Life Death Art</div> </div> </div> </section> <section id="gallery" class="gallery-page page"> <div class="artist"> <a href="/#/" class="artist-name">MoxiE</a> </div> <ul class="gallery"> <li data-ng-repeat="image in ic.images" data-ng-class="{ &quot;active&quot;: ic.isActive(image) }"> <div class="gallery__image" data-ng-style="ic.getImageStyle(image)" data-ng-swipe-up="ic.next(true);" data-ng-swipe-down="ic.prev(true);" data-ng-swipe-left="ic.prev(true);" data-ng-swipe-right="ic.next(true);"></div> <div class="gallery-image-meta"> <div class="gallery-image-meta__header"> <div class="gallery-image-meta__name" data-ng-bind="image.name"></div> <div class="gallery-image-meta__description" data-ng-bind="image.description"></div> </div> <div class="gallery-image-meta__content"> <div class="gallery-image-meta__prints-label" data-ng-if="image.prints.length > 0 || image.original_for_sale"> Purchase Options </div> <ul class="gallery-image-meta__prints"> <li data-ng-repeat="print in image.prints" class="artwork-card"> <div class="flipper"> <div class="front"> <div>{{ print.size }}</div> <div>Print</div> </div> <div class="back"> <a class="btn-link" rel="nofollow" data-ng-if="print.for_sale" data-ng-href="print.purchase_url"> ${{ print.price }} </a> <span data-ng-if="!print.for_sale"> Not for sale, sorry! </span> </div> </div> </li> <li data-ng-if="image.original_for_sale" class="artwork-card"> <div class="flipper"> <div class="front"> <div>{{ image.size }}</div> <div>Original</div> </div> <div class="back"> <a class="btn-link" rel="nofollow" data-ng-if="image.original_for_sale && !image.original_sold" data-ng-href="image.original_purchase_url"> ${{ image.original_price }} </a> <span data-ng-if="image.original_sold"> SOLD </span> <span data-ng-if="!image.original_for_sale"> Not for sale, sorry! </span> </div> </div> </li> </ul> </div> </div> </li> </ul> <div class="gallery-controls"> <ul class="gallery-mini"> <li class="gallery-mini__image" data-ng-class="{ &quot;active&quot;: ic.isActive(image) }" data-ng-style="ic.getImageThumbnailStyle(image)" data-ng-repeat="image in ic.thumb_images | orderBy: &quot;index&quot;" data-ng-click="ic.toggleByIndex(image.index)"> </li> </ul> </div> </section>'),a.put("views/nav.html",'<nav class="navbar navbar-default navbar-fixed-top"> <div class="container-fluid"> <!-- Brand and toggle get grouped for better mobile display --> <div class="navbar-header"> <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a class="navbar-brand" href="#">Moxie</a> </div> <!-- Collect the nav links, forms, and other content for toggling --> <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"> <ul class="nav navbar-nav navbar-right"> <li><a href="#about">About</a></li> <li><a href="#contact">Contact</a></li> </ul> </div> </div> </nav>')}]);