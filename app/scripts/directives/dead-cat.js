(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name moxieApp.directives:DeadCat
   * @description
   * # DeadCat
   * Directive for the dead cat.  Meow.
   */
  angular.module('moxieApp')
    .directive('deadCat', function() {
      return {
        restrict: 'E',
        replace: true,
        template: "<div class='moxie-logo'><div class='moxie-logo__left-ear'></div><div class='moxie-logo__right-ear'></div><div class='moxie-logo__head'></div><div class='moxie-logo__eye'></div><div class='moxie-logo__body'></div><div class='moxie-logo__arms'></div><div class='moxie-logo__legs'></div><div class='moxie-logo__tail'></div></div>",
        link: function(scope, element, attrs) {
        }
      }
    });

})();