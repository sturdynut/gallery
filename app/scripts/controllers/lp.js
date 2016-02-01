'use strict';

/**
 * @ngdoc function
 * @name moxieApp.controller:LPCtrl
 * @description
 * # LPCtrl
 * Controller of the moxieApp
 */
angular.module('moxieApp')
  .controller('LPCtrl', function ($scope, $window, $state) {
    var vm            = this;

    $scope.pageClass  = 'page-lp';

    init();

    function init() {
      $(function () {
        $('.artist-loading').textillate({
          loop: true,
          autoStart: true
        });
      })

      imagesLoaded('#gallery', { background: '.gallery__image' }, function() {
        $window.setTimeout(function () {
          $state.go('gallery');
        }, 2000);
      });
    }

  });
