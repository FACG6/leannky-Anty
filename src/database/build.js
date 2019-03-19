const connect = require('./connection');
const {readFile}= require('fs');
const {join}= require('path');
const sql = readFile(join(__dirname,"build.sql")).toString();
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
module.exports = DBRun;