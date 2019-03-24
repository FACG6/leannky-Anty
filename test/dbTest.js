const test = require('tape');
const DBRun = require('../src/database/build.js');
const getUser = require('../src/database/queries/getUser.js');
const getPosts = require('../src/database/queries/getPosts.js');
const getMyPosts = require('../src/database/queries/getMyPosts.js');
const getMyAns = require('../src/database/queries/getMyAns.js');
const getCons = require('../src/database/queries/getCons.js');
const addUser = require('../src/database/queries/addUser.js');
const addPost = require('../src/database/queries/addPost.js');
const addAns = require('../src/database/queries/addAns.js');
test('testing the tape', (assert) => {
  const num = 1;
  assert.equal(num, 1, 'pass');
  assert.end();
});
test('test fot getUser', (assert) => {
  DBRun('build.sql', (err, res) => {
    getUser('nour').then((result) => {
      // console.log(result);
      
      assert.equal(typeof (result), 'object', 'getUser successfully');
      assert.end();
    })
  })
})

test('test getPosts', (assert) => {
  DBRun('build.sql', (err, res) => {
    getPosts().then(result => {
      console.log(result.rows[0].content);
      
      // assert.equal(result.rows[0].content,'content my question','should be "content my question"')
      assert.end();
    })
  })
})

test('test getMyPosts', (assert) => {
  DBRun('build.sql', (err, res) => {
    getMyPosts(2).then(result => {
      
      assert.end();
      assert.equal(result.rows[0].title,'welcome user','should return welcome')
     })
     .catch(err => console.log(err))
  })
})

test('test getMyAns', (assert) => {
  DBRun('build.sql', (err, res) => {
    getMyAns(1).then(result => {
      console.log(result.rows[0].answer);

      assert.equal(result.rows[0].answer,'my answer','should return "my answer"')
      assert.end();
    })
  })
})

test('test getCons', (assert) => {
  DBRun('build.sql', (err, res) => {
    getCons('alaabadra').then(result => {
    
      assert.equal(result.rows[0].full_name,'Alaa Badra','should return Alaa Badra')
      assert.end();
    })
  })
})

test('test addUser', (assert) => {
  DBRun('build.sql', (err, res) => {
    addUser('nour' , '14511').then(result => {
     

      assert.equal(result.rows[0].user_name,'nour','should return nour')
      assert.end();
    })
  })
})

test('test addPost', (assert) => {
  DBRun('build.sql', (err, res) => {
    addPost('welcome user', 'to my page user', 2).then(result => {
      

      assert.equal(result.rows[0].content,'to my page user','should return "to my page user"')
      assert.end();
    })
  })
})

test('test addAns', (assert) => {
  DBRun('build.sql', (err, res) => {
    addAns('welcome conultant', 4 , 5).then(result => {

      assert.equal(result.rows[0].consultant_id,4,'should return  consultant_id =4');
      assert.end();
    })
  })
})
