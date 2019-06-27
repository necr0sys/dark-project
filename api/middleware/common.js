const bodyParser = require('body-parser');
const dotEnv = require('dotenv');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');

module.exports = [
  dotEnv.config(),
  helmet(),
  cors(),
  compression(),
  bodyParser()
];
