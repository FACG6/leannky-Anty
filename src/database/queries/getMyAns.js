const connection = require('../connection');

const getMyAns = consultantId => connection.query('select * from posts where consultant_id=$1', [consultantId]);

module.exports = getMyAns;
