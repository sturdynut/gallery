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
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'MainCtrl',
        controllerAs: 'mc'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
