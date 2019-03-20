const { Pool } = require('pg');
const url = require('url');
require('dotenv').config();

let DB_URL = process.env.DATABASE_LOCAL;
if (process.env.NODE_ENV === 'test') {
  DB_URL = process.env.HEROKU_POSTGRESQL_TEAL_URL;
}
else if(process.env.NODE_ENV === 'dev') {
  // eslint-disable-next-line no-undef
  DB_URL = DATABASE_URL;
}

const allmyinfo = url.parse(DB_URL);
const [user, password] = allmyinfo.auth.split(':');

const somemyInfo = {
  host: allmyinfo.hostname,
  port: allmyinfo.port,
  database: allmyinfo.pathname.split('/')[1],
  max: process.env.MAX_DB_CONNECTION || 2,
  user,
  password,
  ssl: process.env.hostname !== 'localhost',
};
module.exports = new Pool(somemyInfo);
