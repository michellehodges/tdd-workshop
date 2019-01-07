let Cache = require('../cache');
var { expect } = require('chai');


describe('cache', () => {
  
  describe('#set', () => {
    it('set function should exist', () => {
      let cache = new Cache();
      expect(cache.set).to.be.a('function');
    });

    it('should return true after being set', () => {
      let cache = new Cache();
      expect(cache.set(1,2)).to.equal(true);
    });
  });

  describe('#get', function() {
    it('get function should exist', () => {
      let cache = new Cache();
      expect(cache.get).to.be.a('function');
    });


    it('should return cached value', () => {
      let cache = new Cache();
      cache.set('hello', 100);
      expect(cache.get('hello')).to.equal(100);
    });
  });

});