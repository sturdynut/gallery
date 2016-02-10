'use strict';

/**
 * @ngdoc function
 * @name moxieApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the moxieApp
 */
angular.module('moxieApp')
  .controller('IndexCtrl', function($scope, $log, $timeout, $interval, GalleryService) {
    var vm = this;

    vm.images         = GalleryService.images;
    vm.thumb_images   = angular.copy(vm.images);

    $scope.pageClass  = 'page-index';
    $scope.isPlaying  = true;

    vm.startIndex     = 0;
    vm.frequency      = 6000;
    vm.maxLength      = vm.images.length;

    vm.getImageStyle            = getImageStyle;
    vm.getImageThumbnailStyle   = getImageThumbnailStyle;
    vm.toggleByIndex            = toggleByIndex;
    vm.togglePlay               = togglePlay;
    vm.isActive                 = isActive;
    vm.next                     = next;
    vm.prev                     = prev;

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
    }

    function togglePlay() {
      $scope.isPlaying = !$scope.isPlaying;
    }

    // Private

    function init() {
      $(function() {
        $('[data-in-effect]').textillate({
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
          $log.info('sturdynut:', 'Done loading gallery images.  Count: ' + imagesLoaded.images.length);

          $timeout(function() {
            $('.landing-page').toggleClass('page--active');
            $('.gallery-page').toggleClass('page--active');
            vm.currentIndex = vm.startIndex;
            start();
            vm.isImagesLoaded = true;

            $scope.$apply();
          }, 2000);
        });
      }
    }

    function prev() {
      var index = vm.currentIndex;
      vm.currentIndex = 0 === index ?
        vm.maxLength - 1
        : index - 1;
    }

    function next() {
      var index = vm.currentIndex;
      vm.currentIndex = vm.maxLength === index + 1 ?
        vm.startIndex
        : index + 1;
    }

    function start() {
      $scope.galleryInterval = $interval(function() {
        if ($scope.isPlaying === true) {
          next();
        }
      }, vm.frequency, 0, true);
    }

    function stop() {
      $scope.isPlaying = false;
    }

    function cancel() {
      $interval.cancel($scope.galleryInterval);
    }
  });
