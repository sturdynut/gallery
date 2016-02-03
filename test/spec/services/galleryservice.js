'use strict';

describe('Service: GalleryService', function () {

  // load the service's module
  beforeEach(module('moxieApp'));

  // instantiate service
  var GalleryService;
  beforeEach(inject(function (_GalleryService_) {
    GalleryService = _GalleryService_;
  }));

  it('should do something', function () {
    expect(!!GalleryService).toBe(true);
  });

});
