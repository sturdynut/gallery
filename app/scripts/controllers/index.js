'use strict';

/**
 * @ngdoc function
 * @name moxieApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the moxieApp
 */
angular.module('moxieApp')
  .controller('IndexCtrl', function($scope, $log, $timeout, $interval, $window, GalleryService) {
    var vm = this;

    $scope.pageClass  = 'page-index';
    $scope.isPlaying  = true;

    vm.images         = GalleryService.images;
    vm.thumb_images   = angular.copy(vm.images);
    vm.started        = false;
    vm.startIndex     = 0;
    vm.frequency      = 6000;
    vm.maxLength      = vm.images.length;
    vm.showGalleryGrid = true;
    vm.getImageStyle            = getImageStyle;
    vm.getImageThumbnailStyle   = getImageThumbnailStyle;
    vm.toggleByIndex            = toggleByIndex;
    vm.isActive                 = isActive;
    vm.next                     = next;
    vm.prev                     = prev;
    vm.onPrevClick                     = onPrevClick;
    vm.onNextClick                     = onNextClick;
    vm.stop                     = stop;
    vm.start                    = start;
    vm.onKey                    = onKey;
    vm.isMobile                 = isMobile;
    vm.isStopped                = isStopped;
    vm.toggleGalleryGrid    = toggleGalleryGrid;
    vm.toggleFullscreen     = toggleFullscreen;

    init();

    function getImageStyle(image) {
      var path = image.path;

      var verticalAlignment = (_.isUndefined(image.alignVertically) || !image.alignVertically) ?
        'center'
        : image.alignVertically;
      var horizontalAlignment = (_.isUndefined(image.alignHorizontal) || !image.alignHorizontal) ?
        'center'
        : image.alignHorizontal;

      var backgroundPosition = verticalAlignment + ' ' + horizontalAlignment;

      var backgroundSize = (_.isUndefined(image.backgroundSize) || !image.backgroundSize) ?
        'cover'
        : image.backgroundSize;

      return {
        'background-image': ('url(' + path + ')'),
        'background-position': backgroundPosition,
        'background-size': backgroundSize,
        'background-repeat': 'no-repeat'
      };
    }

    function getImageThumbnailStyle(image) {
      var path = image.path;

      var verticalAlignment = (_.isUndefined(image.alignVertically) || !image.alignVertically) ?
        'center'
        : image.alignVertically;
      var horizontalAlignment = (_.isUndefined(image.alignHorizontal) || !image.alignHorizontal) ?
        'center'
        : image.alignHorizontal;

      var backgroundPosition = verticalAlignment + ' ' + horizontalAlignment;

      return {
        'background-image': ('url(' + path + ')'),
        'background-position': backgroundPosition,
        'background-repeat': 'no-repeat'
      };
    }

    function isActive(image) {
      return image.index === vm.currentIndex;
    }

    function toggleByIndex(index) {
      stop();
      vm.currentIndex = index;
      vm.toggleGalleryGrid(false);
      $timeout(start, 10000);
    }

    function isMobile() {
      return window.innerWidth < 481;
    }

    function onKey(event) {
      if (event.keyCode === 37) {
        this.prev();
      }

      if (event.keyCode === 39) {
        this.next();
      }
    }

    // Private

    function init() {
      $(function() {
        $('.page-loading-message').textillate({
          in: { effect: 'wobble' },
          out: { effect: 'wobble' },
          loop: true,
          autoStart: true
        });
      });

      $timeout(preloadGallery, 1000);
    }

    function preloadGallery() {
      if (!vm.isImagesLoaded) {
        $('.gallery__image').imagesLoaded({
          background: true
        }, function(imagesLoaded) {
          $log.info('gallery:', 'Done loading gallery images.  Count: ' + imagesLoaded.images.length);

          angular.element($window)
            .on('resize', function() {
              if (vm.isMobile() && !isStopped()) {
                stop();
              }
            })
            .on('keydown', function(event) {
              $scope.$apply(function() {
                stop();
                vm.onKey(event);
              });
            });

          $timeout(function() {
            $('.landing-page').fadeOut(function() {
              $('.gallery-page').toggleClass('page--active');
            }).toggleClass('page--active');
            
            vm.currentIndex = vm.startIndex;
            if (!vm.isMobile()) {
              start();
            }
            vm.isImagesLoaded = true;

            $scope.$apply();
          }, 2000);
        });
      }
    }

    function onPrevClick() {
      stop();
      
      resetFullscreen();

      var index = vm.currentIndex;
      vm.currentIndex = 0 === index ?
        vm.maxLength - 1
        : index - 1;
    }

    function onNextClick() {
      stop();
      
      resetFullscreen();

      var index = vm.currentIndex;
      vm.currentIndex = vm.maxLength === index + 1 ?
        vm.startIndex
        : index + 1;
    }

    function prev(stopGallery) {
      if (isStopped()) { return; }

      resetFullscreen();

      var index = vm.currentIndex;
      vm.currentIndex = 0 === index ?
        vm.maxLength - 1
        : index - 1;
    }

    function next(stopGallery) {
      if (isStopped()) { return; }

      resetFullscreen();

      var index = vm.currentIndex;
      vm.currentIndex = vm.maxLength === index + 1 ?
        vm.startIndex
        : index + 1;
    }

    function start() {
      $scope.isPlaying = true;

      if (!$scope.galleryInterval) {
        $scope.galleryInterval = $interval(next, vm.frequency, 0, true);
      }
    }

    function stop() {
      $scope.isPlaying = false;
    }

    function isStopped() {
      return $scope.isPlaying === false;
    }

    function toggleGalleryGrid(show) {
      vm.showGalleryGrid = show;
    }

    function toggleFullscreen(image) {
      image.fs = !image.fs;
      stop();
    }

    function resetFullscreen() {
      _.each(vm.images, function(image) {
        image.fs = false;
      });
    }
  });
