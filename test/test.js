const test = require('tape');
const request = require('supertest');
const app = require('../src/app');

test('testing the tape', (assert) => {
  const num = 1;
  assert.equal(num, 1, 'pass');
  assert.end();
});
test('Request userProfile route', (t) => {
  request(app)
    .get('/userProfile')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err) => {
      if (err) {
        t.error(err);
      } else {
        t.end();
      }
    });
});

test.onFinish(() => process.exit(0));
