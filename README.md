# mongo-healthcheck

[![NPM](https://nodei.co/npm/mongo-healthcheck.png)](https://nodei.co/npm/mongo-healthcheck/)

[![Build Status](https://travis-ci.org/jeffcharles/mongo-healthcheck.svg?branch=master)](https://travis-ci.org/jeffcharles/mongo-healthcheck)

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
