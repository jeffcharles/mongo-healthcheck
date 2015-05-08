var mongoose = require('mongoose');

module.exports = function() {
  if (mongoose.connection.readyState === 1) {
    return 'Connected';
  }
  throw new Error('Disconnected');
};
