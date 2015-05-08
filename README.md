# mongo-healthcheck

A simple function for checking if your mongoose connection to MongoDB is good.

## Usage

```javascript
var mongoHealthcheck = require('mongo-healthcheck');

module.exports = function detailedHealthcheck(req, res) {
  var isError = false;
  var mongoResult;
  try {
    mongoResult = mongoHealthcheck();
  } catch (err) {
    isError = true;
    mongoResult = err;
  }
  res.status(isError ? 500: 200).json({mongo: mongoResult});
};
```

## Testing

After cloning the repo run `vagrant up` then `npm test`.
