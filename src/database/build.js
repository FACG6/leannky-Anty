const { readFileSync } = require('fs');
const path = require('path');
const connect = require('./connection');

const sql = readFileSync(path.join(__dirname, 'build.sql')).toString();
const DBRun = (file, cb) => {
  connect.query(sql, (err, res) => {
    if (err) cb(err);
    cb(null, res);
  });
};
DBRun(sql, (err) => {
  if (err) console.log('err', err);
  else console.log('DB built');
});
module.exports = DBRun;
