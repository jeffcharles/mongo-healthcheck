module.exports = function(mongoose) {
  if (mongoose.connection.readyState === 1) {
    return 'Connected';
  }
  throw new Error('Disconnected');
};
