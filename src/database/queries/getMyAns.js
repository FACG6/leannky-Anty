const connection = require('../connection');
const getMyAns = (consultant_id) => connection.query(`select * from posts where consultant_id=$1`, [consultant_id]);
module.exports = getMyAns;
