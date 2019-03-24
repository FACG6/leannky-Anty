const test = require('tape');
// eslint-disable-next-line import/no-extraneous-dependencies
const request = require('supertest');
const app = require('../src/app');

test('Request signup route ', (t) => {
  request(app)
    .post('/signup')
    .send({
      userName: 'aheeemekkkkkkkkm',
      password: '123456',
      confirmPassword: '123456',
    })
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end((err, res) => {
      if (err) {
        t.error(err);
      } else {
        t.equal(JSON.parse(res.text).msg, 'تم انشاء الحساب بنجاح، يمكنكي الآن تسجيل الدخول', 'must return msg of sucsses signup');

        t.end();
      }
    });
});

test('Request / page no cookie', (t) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', 'text/html; charset=utf-8')
    .end((err, res) => {
      if (err) {
        t.error(err);
      } else {
        t.equal(res.type, 'text/html', 'type of reponse from route /signup should be text/html');
        t.equal(res.text.includes('إنشاء حساب جديد'), true, ' reponse html page includes جديد');
        t.end();
      }
    });
});

test('Request / route , cookie', (t) => {
  request(app)
    .get('/')
    .set('Cookie', ['jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Im1vaGFtZWQiLCJ1c2VySWQiOjYsImNvbnN1bHRhbnQiOmZhbHNlLCJsb2dnZWRJbiI6dHJ1ZSwiaWF0IjoxNTUzMTc1NjIxfQ.nXV81b4ySr_-Ez-Qt2Kqe29MWltIU7LHT3ymB4249sU'])
    .expect(302)
    .expect('Content-Type', 'text/plain; charset=utf-8')
    .end((err, res) => {
      if (err) {
        t.error(err);
      } else {
        t.equal(res.text.includes('Redirecting'), true, 'response must includes Redirecting');
        t.end();
      }
    });
});

test('Request userprofile route no cookie', (t) => {
  request(app)
    .get('/userProfile')
    .expect(302)
    .expect('Content-Type', 'text/plain; charset=utf-8')
    .end((err, res) => {
      if (err) {
        t.error(err);
      } else {
        
t.equal(res.header.location, '/', 'must redirect to home');
        t.end();
      }
    });
});

test('Request userprofile route , cookie', (t) => {
  request(app)
    .get('/userProfile')
    .set('Cookie', ['jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Im1vaGFtZWQiLCJ1c2VySWQiOjYsImNvbnN1bHRhbnQiOmZhbHNlLCJsb2dnZWRJbiI6dHJ1ZSwiaWF0IjoxNTUzMTc1NjIxfQ.nXV81b4ySr_-Ez-Qt2Kqe29MWltIU7LHT3ymB4249sU'])
    .expect(200)
    .expect('Content-Type', 'text/html; charset=utf-8')
    .end((err, res) => {
      if (err) {
        t.error(err);
      } else {
        t.equal(res.text.includes('الديانة'), true, 'reponse html page includes الديانة');
        t.end();
      }
    });
});

test('Request user qustion route  no cookie', (t) => {
  request(app)
    .get('/userQ')
    .expect(302)
    .expect('Content-Type', 'text/plain; charset=utf-8')
    .end((err, res) => {
      if (err) {
        t.error(err);
      } else {
        t.equal(res.header.location, '/', 'must redirect to home');
        t.end();
      }
    });
});

test('Request /userQ route ,cookie', (t) => {
  request(app)
    .get('/userQ')
    .set('Cookie', ['jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Im1vaGFtZWQiLCJ1c2VySWQiOjYsImNvbnN1bHRhbnQiOmZhbHNlLCJsb2dnZWRJbiI6dHJ1ZSwiaWF0IjoxNTUzMTc1NjIxfQ.nXV81b4ySr_-Ez-Qt2Kqe29MWltIU7LHT3ymB4249sU'])
    .expect(200)
    .expect('Content-Type', 'text/html; charset=utf-8')
    .end((err, res) => {
      if (err) {
        t.error(err);
      } else {
        t.equal(res.text.includes('مجانية'), true, 'reponse html page includes مجانية');
        t.end();
      }
    });
});

test('Request userq when post route ', (t) => {
  request(app)
    .post('/userq')
    .set('Cookie', ['jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImRlZW1hIiwidXNlcklkIjoyLCJjb25zdWx0YW50IjpmYWxzZSwibG9nZ2VkSW4iOnRydWUsImlhdCI6MTU1MzQxNDI3NH0.L7LfLwINAryHZ6WY0H7LLklSoNxt6tgQbWUNNLnj-h0'])
    .send({
      qTitle: 'استشارة قانونللللية',
      qContent: 'استشارة مواللللضوع',
    })
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end((err, res) => {
      if (err) {
        t.error(err);
      } else {
        t.equal(JSON.parse(res.text).msg, 'تم اضافة الاستفسار بنجاح، الرجاء انتظار الاجابة خلال 24 ساعة وشكرا', 'regst');
        t.end();
      }
    });
});

test('Request user prev profile route no cookie', (t) => {
  request(app)
    .get('/userPrevQ')
    .expect(302)
    .expect('Content-Type', 'text/plain; charset=utf-8')
    .end((err, res) => {
      if (err) {
        t.error(err);
      } else {
        t.equal(res.header.location, '/', 'must redirect to home');
        t.end();
      }
    });
});

test('Request userprevprofile route , cookie', (t) => {
  request(app)
    .get('/userPrevQ')
    .set('Cookie', ['jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Im1vaGFtZWQiLCJ1c2VySWQiOjYsImNvbnN1bHRhbnQiOmZhbHNlLCJsb2dnZWRJbiI6dHJ1ZSwiaWF0IjoxNTUzMTc1NjIxfQ.nXV81b4ySr_-Ez-Qt2Kqe29MWltIU7LHT3ymB4249sU'])
    .expect(200)
    .expect('Content-Type', 'text/html; charset=utf-8')
    .end((err, res) => {
      if (err) {
        t.error(err);
      } else {
        t.equal(res.text.includes('استفسارات سابقة'), true, 'reponse html page includesاستفسارات سابقة'); 
        t.end();
      }
    });
});

test('Request user /userMyProfile no cookie', (t) => {
  request(app)
    .get('/userMyProfile')
    .expect(302)
    .expect('Content-Type', 'text/plain; charset=utf-8')
    .end((err, res) => {
      if (err) {
        t.error(err);
      } else {
        t.equal(res.headers.location, '/', 'Response redirct to home ');
        t.end();
      }
    });
});

test('Request  /userMyProfile ,cookie', (t) => {
  request(app)
    .get('/userMyProfile')
    .set('Cookie', ['jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Im1vaGFtZWQiLCJ1c2VySWQiOjYsImNvbnN1bHRhbnQiOmZhbHNlLCJsb2dnZWRJbiI6dHJ1ZSwiaWF0IjoxNTUzMTc1NjIxfQ.nXV81b4ySr_-Ez-Qt2Kqe29MWltIU7LHT3ymB4249sU'])
    .expect(200)
    .expect('Content-Type', 'text/html; charset=utf-8')
    .end((err, res) => {
      if (err) {
        t.error(err);
      } else {
        t.equal(res.text.includes('استفساراتي'), true, 'reponse html page includes استفساراتي');
        t.end();
      }
    });
});

test('request logout route no cookie', (t) => {
  request(app)
    .get('/logout')
    .expect(302)
    .expect('Content-Type', 'text/plain; charset=utf-8')
    .end((err, res) => {
      if (err) {
        t.error(err);
      } else {
        t.equal(res.headers.location, '/', 'Response redirct to home ');
        t.end();
      }
    });
});
test('Request logout ,cookie', (t) => {
  request(app)
    .get('/logout')
    .set('Cookie', ['jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6Im1vaGFtZWQiLCJ1c2VySWQiOjYsImNvbnN1bHRhbnQiOmZhbHNlLCJsb2dnZWRJbiI6dHJ1ZSwiaWF0IjoxNTUzMTc1NjIxfQ.nXV81b4ySr_-Ez-Qt2Kqe29MWltIU7LHT3ymB4249sU'])
    .expect(302)
    .expect('Content-Type', 'text/plain; charset=utf-8')
    .end((err, res) => {
      if (err) {
        t.error(err);
      } else {
        t.equal(res.headers.location, '/', 'Response redirct to home ');
        t.end();
      }
    });
});


test.onFinish(() => process.exit(0));
