(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name moxieApp
   * @description
   * # moxieApp
   *
   * Main module of the application.
   */
  angular
    .module('moxieApp', [
      'ngAnimate',
      'ngCookies',
      'ui.router',
      'ngSanitize',
      'ngTouch'
    ])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

      $locationProvider.html5Mode(true);

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('index', {
          url: '/',
          views: {
            'main': {
              templateUrl: 'views/index.html',
              controller: 'IndexCtrl',
              controllerAs: 'ic'
            }
          }
        });
    });

})();
