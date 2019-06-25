const app = require('express')();
const common = require('./common');

app.use(...common);

module.exports = app;
