const connection = require('./connection');

const getAll = async () => {
  const [questions] = await connection.execute('SELECT * FROM questions;');
  return questions;
};

module.exports = {
  getAll,
};