const app = require('express')();

const commonMidlewares = require('../middleware/common');

app.set('trust proxy, 1');
app.use(...commonMidlewares);

module.exports = app;
