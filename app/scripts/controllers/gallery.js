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
    var vm = this;

    vm.images = [
      {
        index: 2,
        path: '/images/gallery/default/jaguar.png',
        name: 'Jaguar',
        description: 'Oil on canvas.',
        size: '48" x 36"',
        original_for_sale: true,
        original_sold: false,
        original_price: 3000.00,
        original_purchase_url: null,
        prints: [
          {
            size: '48" x 36"',
            description: 'High Quality Print on Card Stock',
            price: 300.00,
            purchase_url: null,
            for_sale: true
          },
          {
            size: '24" x 18"',
            description: 'High Quality Print on Card Stock',
            price: 200.00,
            purchase_url: null,
            for_sale: true
          }
        ]
      },
      {
        index: 0,
        path: '/images/gallery/default/octoheart.png',
        name: 'Octoheart',
        description: 'Acrylic on canvas.',
        size: '48" x 36"',
        original_for_sale: true,
        original_sold: false,
        original_price: 6000.00,
        original_purchase_url: null
      },
      {
        index: 1,
        path: '/images/gallery/default/tiger.png',
        name: 'Tiger',
        description: 'Acrylic on wood.',
        size: '36" x 36"',
        original_for_sale: true,
        original_sold: true,
        original_price: 2000.00,
        original_purchase_url: null
      },
      {
        index: 3,
        path: '/images/gallery/default/jaguar.png',
        name: 'Jaguar',
        description: 'Oil on canvas.',
        size: '48" x 36"',
        original_for_sale: true,
        original_sold: false,
        original_price: 3000.00,
        original_purchase_url: null,
        prints: [
          {
            size: '48" x 36"',
            description: 'High Quality Print on Card Stock',
            price: 300.00,
            purchase_url: null,
            for_sale: true
          },
          {
            size: '24" x 18"',
            description: 'High Quality Print on Card Stock',
            price: 200.00,
            purchase_url: null,
            for_sale: true
          }
        ]
      },
      {
        index: 4,
        path: '/images/gallery/default/octoheart.png',
        name: 'Octoheart',
        description: 'Acrylic on canvas.',
        size: '48" x 36"',
        original_for_sale: true,
        original_sold: false,
        original_price: 6000.00,
        original_purchase_url: null
      },
      {
        index: 5,
        path: '/images/gallery/default/tiger.png',
        name: 'Tiger',
        description: 'Acrylic on wood.',
        size: '36" x 36"',
        original_for_sale: true,
        original_sold: true,
        original_price: 2000.00,
        original_purchase_url: null
      },
      {
        index: 8,
        path: '/images/gallery/default/jaguar.png',
        name: 'Jaguar',
        description: 'Oil on canvas.',
        size: '48" x 36"',
        original_for_sale: true,
        original_sold: false,
        original_price: 3000.00,
        original_purchase_url: null,
        prints: [
          {
            size: '48" x 36"',
            description: 'High Quality Print on Card Stock',
            price: 300.00,
            purchase_url: null,
            for_sale: true
          },
          {
            size: '24" x 18"',
            description: 'High Quality Print on Card Stock',
            price: 200.00,
            purchase_url: null,
            for_sale: true
          }
        ]
      },
      {
        index: 6,
        path: '/images/gallery/default/octoheart.png',
        name: 'Octoheart',
        description: 'Acrylic on canvas.',
        size: '48" x 36"',
        original_for_sale: true,
        original_sold: false,
        original_price: 6000.00,
        original_purchase_url: null
      },
      {
        index: 7,
        path: '/images/gallery/default/tiger.png',
        name: 'Tiger',
        description: 'Acrylic on wood.',
        size: '36" x 36"',
        original_for_sale: true,
        original_sold: true,
        original_price: 2000.00,
        original_purchase_url: null
      },
      {
        index: 9,
        path: '/images/gallery/default/jaguar.png',
        name: 'Jaguar',
        description: 'Oil on canvas.',
        size: '48" x 36"',
        original_for_sale: true,
        original_sold: false,
        original_price: 3000.00,
        original_purchase_url: null,
        prints: [
          {
            size: '48" x 36"',
            description: 'High Quality Print on Card Stock',
            price: 300.00,
            purchase_url: null,
            for_sale: true
          },
          {
            size: '24" x 18"',
            description: 'High Quality Print on Card Stock',
            price: 200.00,
            purchase_url: null,
            for_sale: true
          }
        ]
      },
      {
        index: 11,
        path: '/images/gallery/default/octoheart.png',
        name: 'Octoheart',
        description: 'Acrylic on canvas.',
        size: '48" x 36"',
        original_for_sale: true,
        original_sold: false,
        original_price: 6000.00,
        original_purchase_url: null
      },
      {
        index: 10,
        path: '/images/gallery/default/tiger.png',
        name: 'Tiger',
        description: 'Acrylic on wood.',
        size: '36" x 36"',
        original_for_sale: true,
        original_sold: true,
        original_price: 2000.00,
        original_purchase_url: null
      }
    ];

    $scope.pageClass  = 'page-gallery';
    $scope.isPlaying  = true;

    vm.startIndex     = 0;
    vm.frequency      = 11000;
    vm.maxLength      = vm.images.length;

    vm.getImageStyle  = getImageStyle;
    vm.toggleByIndex  = toggleByIndex;
    vm.togglePlay     = togglePlay;

    init();

    function getImageStyle(path) {
      return {
        'background-image': ('url(' + path + ')')
      };
    }

    function toggleByIndex (index) {
      stop();
      show(index);
    }

    function togglePlay() {
      $scope.isPlaying = !$scope.isPlaying;
    }

    // Private

    function init() {
      show(vm.startIndex);
      start();
    }

    function show (index) {
      var startingImage = _.find(vm.images, { index: index });
      vm.currentIndex = startingImage.index;

      _.each(_.filter(vm.images, { __active: true }), function (image) {
        image.__active = false;
      });

      startingImage.__active = true;
    }

    function next (index) {
      vm.lastIndex = vm.currentIndex;
      vm.currentIndex = vm.maxLength === index + 1
        ? vm.startIndex
        : index + 1;

      vm.images[vm.lastIndex].__active = false;
      vm.images[vm.currentIndex].__active = true;
    }

    function start() {
      $scope.galleryInterval = $interval(function() {
        if (vm.isPlaying === true) {
          next(vm.currentIndex);
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
