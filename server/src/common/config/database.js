const mysql = require('think-model-mysql');

module.exports = {
  handle: mysql,
  database: 'xbyjshop',
  prefix: 'xbyjshop_',
  encoding: 'utf8mb4',
  host: 'wwww.shlsky.com',
  port: '3306',
  user: 'root',
  password: '18611479605',
  dateStrings: true
};
