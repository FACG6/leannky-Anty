const test = require('tape');
const request = require('supertest');
const app = require('../src/app');
const dbRun = require('../src/database/build');

test('Request signup route ', (t) => {
  dbRun((err) => {
    if (err) t.error('error', err);
    request(app)
      .post('/signup')
      .send({
        userName: 'ssadrgvd',
        password: '123456',
        confirmPassword: '123456',
      })
      .expect(200)
      .expect('Content-Type', 'text/html; charset=utf-8')
      .end((errr, res) => {
        if (err) {
          t.error(errr);
        } else {
          t.equal(JSON.parse(res.text).msg, 'تم انشاء الحساب بنجاح، يمكنكي الآن تسجيل الدخول', 'must return msg of sucsses signup');
          t.end();
        }
      });
  });
});
