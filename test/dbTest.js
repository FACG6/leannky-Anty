const test = require('tape');
const DBRun = require('../src/database/build.js');

test('testing the tape', assert=>{
    const num = 1;
      assert.equal(num, 1, "pass");
      assert.end();
  });
  module.exports = DBRun;