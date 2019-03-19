const connect = require('./connection');
<<<<<<< HEAD
const {readFile}= require('fs');
const {join}= require('path');
const sql = readFile(join(__dirname,"build.sql")).toString();
=======
const {readFileSync} = require('fs');
const path= require('path');
const sql = readFileSync(path.join(__dirname,"build.sql")).toString();
>>>>>>> 8c36885f0cefc71a31b00d11939e72fd46273e39
const DBRun=(file,cb)=>{
    connect.query(sql,(err,res)=>{
        if(err)  cb(err)
         cb (null,res);
    });
}
DBRun(sql, (err, res) => {
    if (err) console.log("err", err);
    else console.log("DB built");
  });
<<<<<<< HEAD
module.exports = DBRun;
=======
module.exports = DBRun;
>>>>>>> 8c36885f0cefc71a31b00d11939e72fd46273e39
