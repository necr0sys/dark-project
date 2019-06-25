const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');

module.exports = [
  helmet(),
  cors(),
  compression(),
]