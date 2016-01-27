'use strict';

/**
 * @ngdoc function
 * @name moxieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moxieApp
 */
angular.module('moxieApp')
  .controller('GalleryCtrl', function ($scope, $interval) {
    var vm            = this;

    $scope.pageClass  = 'page-gallery';
    $scope.viewImage  = viewImage;
    $scope.isPlaying  = true;

    vm.images         = [
      {
        index: 0,
        path: 'images/gallery/default/jaguar.png',
        name: 'Jaguar',
        description: 'Oil on canvas.',
        active: true
      },
      {
        index: 1,
        path: 'images/gallery/default/octoheart.png',
        name: 'Octoheart',
        description: 'Acrylic on canvas.',
        active: false
      },
      {
        index: 2,
        path: 'images/gallery/default/tiger.png',
        name: 'Tiger',
        description: 'Acrylic on wood.',
        active: false
      }
    ];

    vm.currentIndex   = vm.images[0].index;
    vm.frequency      = 5000;
    vm.getImageStyle  = getImageStyle;
    vm.isActive       = isActive;
    vm.maxLength      = vm.images.length;
    vm.setActive      = setActive;
    vm.togglePlay     = togglePlay;
    vm.toggleByIndex  = toggleByIndex;

    init();

    function init() {
      $('.pt-page-1').addClass('pt-page-current');

      play();

      $scope.$watch('isPlaying', function (prev, current) {
        if (current === true) {
          play();
        }
        else {
          pause();
        }
      })
    }

    function togglePlay() {
      $scope.isPlaying = !$scope.isPlaying;
    }

    function getImageStyle(path) {
      return {
        'background-image': ('url(' + path + ')')
      };
    }

    function isActive (index) {
      return vm.currentIndex === index;
    }

    function setActive (index) {
      vm.lastIndex = vm.currentIndex;
      vm.currentIndex = vm.maxLength === index
        ? 0
        : index;

      vm.images[vm.lastIndex].active = false;
      vm.images[vm.currentIndex].active = true;
    }

    function toggleByIndex (index) {
      pause();
      vm.setActive(index);
    }

    // Private

    function play() {
      $scope.galleryInterval = $interval(function() {
        vm.setActive(vm.currentIndex);
      }, vm.frequency, true);
    }

    function pause() {
      $interval.cancel($scope.galleryInterval);
    }

    function viewImage(from, to) {
      var animEndEventName = 'webkitAnimationEnd';

      var $currPage = $(from);
      var $nextPage = $(to).addClass('pt-page-current');
      var outClass = 'ng-leave';
      var inClass = 'ng-enter';

      $currPage.addClass( outClass ).on( animEndEventName, function() {
        $currPage.off( animEndEventName );
        endCurrPage = true;
        if( endNextPage ) {
          onEndAnimation( $currPage, $nextPage );
        }
      } );

      $nextPage.addClass( inClass ).on( animEndEventName, function() {
        $nextPage.off( animEndEventName );
        endNextPage = true;
        if( endCurrPage ) {
          onEndAnimation( $currPage, $nextPage );
        }
      } );
    }
  });
