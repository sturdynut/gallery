'use strict';

/**
 * @ngdoc function
 * @name moxieApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moxieApp
 */
angular.module('moxieApp')
  .controller('GalleryCtrl', function ($scope) {
    $scope.pageClass = 'page-gallery';

    $scope.viewImage = viewImage;

    init();

    function init() {
      $('.pt-page-1').addClass('pt-page-current');
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
