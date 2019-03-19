const {Pool}=require('pg');

const url = require('url');
require('dotenv').config();
let DB_URL = process.env.DATABASE_URL;
if (process.env.NODE_ENV == 'test' || process.env.NODE_ENV ==='dev' ) {
    DB_URL = process.env.LOCAL_DB_URL;
}
if (!DB_URL) throw Error('enviroment DB_URL must be set')
const allmyinfo = url.parse(DB_URL);
const [user,password]= allmyinfo.auth.split(':');
const somemyInfo ={
    host:allmyinfo.hostname,
    port:allmyinfo.port,
    database: allmyinfo.pathname.split('/')[1],
    max: process.env.MAX_DB_CONNECTION || 2,
    user,
    password,
    ssl: process.env.hostname !== 'localhost',
}
module.exports = new Pool(somemyInfo);
