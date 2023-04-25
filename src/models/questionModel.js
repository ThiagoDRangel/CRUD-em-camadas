const connection = require('./connection');

const getAll = async () => {
  const question = await connection.execute('SELECT * FROM questions;');
  console.log(question);
  return question;
};

getAll();

module.exports = {
  getAll,
};