const connection = require('./connection');

const getAll = async () => {
  const [questions] = await connection.execute('SELECT * FROM questions;');
  console.log(questions);
  return questions;
};

getAll();

module.exports = {
  getAll,
};