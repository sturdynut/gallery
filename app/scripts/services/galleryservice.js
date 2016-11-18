'use strict';

/**
 * @ngdoc service
 * @name moxieApp.GalleryService
 * @description
 * # GalleryService
 * Service in the moxieApp.
 */
angular.module('moxieApp')
  .service('GalleryService', function() {
    var self = this;

    self.images = [
        {
          index: 2,
          path: '/images/gallery/default/jaguar.png',
          name: 'Jaguar',
          description: 'Oil on canvas.',
          size: '48" x 36"',
          original_for_sale: false,
          original_sold: false,
          original_price: 3000.00,
          original_purchase_url: null,
          prints: [
            // {
            //   size: '48" x 36"',
            //   description: 'High Quality Print on Card Stock',
            //   price: 300.00,
            //   purchase_url: null,
            //   for_sale: false
            // },
            // {
            //   size: '24" x 18"',
            //   description: 'High Quality Print on Card Stock',
            //   price: 200.00,
            //   purchase_url: null,
            //   for_sale: false
            // }
          ],
          alignVertically: 'top',
          alignHorizontal: 'center',
          backgroundSize: 'contain'
        },
        {
          index: 0,
          path: '/images/gallery/default/octoheart.png',
          name: 'Octoheart',
          description: 'Acrylic on canvas.',
          size: '48" x 36"',
          original_for_sale: false,
          original_sold: false,
          original_price: 6000.00,
          original_purchase_url: null,
          prints: [
            // {
            //   size: '48" x 36"',
            //   description: 'High Quality Print on Card Stock',
            //   price: 300.00,
            //   purchase_url: null,
            //   for_sale: false
            // },
            // {
            //   size: '24" x 18"',
            //   description: 'High Quality Print on Card Stock',
            //   price: 200.00,
            //   purchase_url: null,
            //   for_sale: false
            // }
          ],
          alignVertically: 'center',
          alignHorizontal: 'center',
          backgroundSize: 'contain'
        },
        {
          index: 1,
          path: '/images/gallery/default/tiger.png',
          name: 'Tiger',
          description: 'Acrylic on wood.',
          size: '36" x 36"',
          original_for_sale: false,
          original_sold: true,
          original_price: 2000.00,
          original_purchase_url: null,
          prints: [
            // {
            //   size: '48" x 36"',
            //   description: 'High Quality Print on Card Stock',
            //   price: 300.00,
            //   purchase_url: null,
            //   for_sale: false
            // },
            // {
            //   size: '24" x 18"',
            //   description: 'High Quality Print on Card Stock',
            //   price: 200.00,
            //   purchase_url: null,
            //   for_sale: false
            // }
          ],
          alignVertically: 'center',
          backgroundSize: 'contain'
        },
        {
          index: 3,
          path: '/images/gallery/default/skull_lady.png',
          name: 'Skull Lady',
          description: 'A lady with a skull.',
          size: '36" x 36"',
          original_for_sale: false,
          original_sold: false,
          original_price: 2000.00,
          original_purchase_url: null,
          prints: [
            // {
            //   size: '48" x 36"',
            //   description: 'High Quality Print on Card Stock',
            //   price: 300.00,
            //   purchase_url: null,
            //   for_sale: false
            // },
            // {
            //   size: '24" x 18"',
            //   description: 'High Quality Print on Card Stock',
            //   price: 200.00,
            //   purchase_url: null,
            //   for_sale: false
            // }
          ],
          alignHorizontal: 'top',
          alignVertically: 'center',
          backgroundSize: 'container'
        },
        {
          index: 4,
          path: '/images/gallery/default/butterfly.png',
          name: 'Butterfly Geometry',
          description: 'A butterfly with some geometry.',
          size: '36" x 36"',
          original_for_sale: false,
          original_sold: false,
          original_price: 2000.00,
          original_purchase_url: null,
          prints: [
            // {
            //   size: '48" x 36"',
            //   description: 'High Quality Print on Card Stock',
            //   price: 300.00,
            //   purchase_url: null,
            //   for_sale: false
            // },
            // {
            //   size: '24" x 18"',
            //   description: 'High Quality Print on Card Stock',
            //   price: 200.00,
            //   purchase_url: null,
            //   for_sale: false
            // }
          ],
          alignVertically: 'center',
          backgroundSize: 'contain'
        },
        {
          index: 5,
          path: '/images/gallery/default/bird-skull.png',
          name: 'Bird Skull',
          description: 'A bird skull on wood.',
          size: '36" x 36"',
          original_for_sale: false,
          original_sold: false,
          original_price: 2000.00,
          original_purchase_url: null,
          prints: [
            // {
            //   size: '48" x 36"',
            //   description: 'High Quality Print on Card Stock',
            //   price: 300.00,
            //   purchase_url: null,
            //   for_sale: false
            // },
            // {
            //   size: '24" x 18"',
            //   description: 'High Quality Print on Card Stock',
            //   price: 200.00,
            //   purchase_url: null,
            //   for_sale: false
            // }
          ],
          alignVertically: 'center',
          backgroundSize: 'contain'
        },
        {
          index: 6,
          path: '/images/gallery/default/native-man.jpg',
          name: 'Native Man',
          description: 'A native man with a cross.',
          size: '36" x 36"',
          original_for_sale: false,
          original_sold: false,
          original_price: 2000.00,
          original_purchase_url: null,
          prints: [
            // {
            //   size: '48" x 36"',
            //   description: 'High Quality Print on Card Stock',
            //   price: 300.00,
            //   purchase_url: null,
            //   for_sale: false
            // },
            // {
            //   size: '24" x 18"',
            //   description: 'High Quality Print on Card Stock',
            //   price: 200.00,
            //   purchase_url: null,
            //   for_sale: false
            // }
          ],
          alignVertically: 'top',
          backgroundSize: 'contain'
        },
        {
          index: 7,
          path: '/images/gallery/default/egg-carving-1.jpg',
          name: 'Ostrich Egg Carving',
          description: 'A carving of a woman on an ostrich egg.',
          size: '36" x 36"',
          original_for_sale: false,
          original_sold: false,
          original_price: 2000.00,
          original_purchase_url: null,
          prints: [
            // {
            //   size: '48" x 36"',
            //   description: 'High Quality Print on Card Stock',
            //   price: 300.00,
            //   purchase_url: null,
            //   for_sale: false
            // },
            // {
            //   size: '24" x 18"',
            //   description: 'High Quality Print on Card Stock',
            //   price: 200.00,
            //   purchase_url: null,
            //   for_sale: false
            // }
          ],
          alignVertically: 'center',
          backgroundSize: 'contain'
        },
        {
          index: 8,
          path: '/images/gallery/default/egg-carving-2.jpg',
          name: 'Ostrich Egg Carving',
          description: 'A carving of a woman on an ostrich egg.',
          size: '36" x 36"',
          original_for_sale: false,
          original_sold: false,
          original_price: 2000.00,
          original_purchase_url: null,
          prints: [
            // {
            //   size: '48" x 36"',
            //   description: 'High Quality Print on Card Stock',
            //   price: 300.00,
            //   purchase_url: null,
            //   for_sale: false
            // },
            // {
            //   size: '24" x 18"',
            //   description: 'High Quality Print on Card Stock',
            //   price: 200.00,
            //   purchase_url: null,
            //   for_sale: false
            // }
          ],
          alignVertically: 'center',
          backgroundSize: 'contain'
        }
      ];
  });
