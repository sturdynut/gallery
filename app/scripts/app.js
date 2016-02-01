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
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true)

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url: '/',
        views: {
          'main': {
            templateUrl: 'views/lp.html',
            controller: 'LPCtrl',
            controllerAs: 'lpc'
          }
        }
      })
      .state('gallery', {
        url: '/gallery',
        views: {
          'main': {
            templateUrl: 'views/gallery.html',
            controller: 'GalleryCtrl',
            controllerAs: 'gc'
          }
        }
      });
  });
