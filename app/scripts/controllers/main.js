(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name moxieApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the moxieApp
   */
  angular.module('moxieApp')
    .controller('MainCtrl', function($scope) {
      var vm = this;

      vm.navClasses = '.js-site-nav,.js-site-nav-trigger,.js-site-title-wrapper,.js-site-header,.js-site-content';

      init();

      function init() {
        $('.js-site-nav-trigger').on('click', function() { $(vm.navClasses).toggleClass('active');});
      }
    });

})();
