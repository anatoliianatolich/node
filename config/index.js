const {NODE_ENV = 'development'} = process.env;
const config = require(`./${NODE_ENV}`);

module.exports = config;
