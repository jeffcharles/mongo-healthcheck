var assert = require('assert'),
  mongoose = require('mongoose'),
  mongoHealthcheck = require('./');

describe('Mongo healthcheck', function() {
  it('should throw `Disconnected` when it\'s not connected', function() {
    assert.throws(mongoHealthcheck, function(err) {
      return (err instanceof Error) && /Disconnected/.test(err);
    });
  });

  it('should return `Connected` when it\'s connected', function(done) {
    mongoose.connect('mongodb://localhost/test');
    mongoose.connection.once('open', function() {
      assert(mongoHealthcheck(), 'Connected');
      done();
    });
  });
});
