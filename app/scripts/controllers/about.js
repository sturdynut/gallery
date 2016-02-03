(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name moxieApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the moxieApp
   */
  angular.module('moxieApp')
    .controller('AboutCtrl', function ($scope) {
      $scope.pageClass = 'page-about';
    });

})();
