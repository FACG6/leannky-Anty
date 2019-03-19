const test = require('tape');

test('testing the tape', (assert) => {
  const num = 1;
  assert.equal(num, 1, 'pass');
  assert.end();
});
