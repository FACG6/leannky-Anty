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
    .expect(302)
    .expect('Content-Type', 'text/plain; charset=utf-8')
    .end((err) => {
      if (err) {
        t.error(err);
      } else {
        t.end();
      }
    });
});

test.onFinish(() => process.exit(0));
