const connection = require('./connection');

const getAll = async () => {
  const [questions] = await connection.execute('SELECT * FROM questions;');
  return questions;
};

const create = async ({ question }) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO questions (question) VALUES (?);',
    [question],
  );
  return { id: insertId, question };
};

const exclude = async (questionId) => {
  await connection.execute(
    'DELETE FROM questions WHERE id = ?;',
    [questionId],
  );
};

const isQuestionSimilar = async (question) => {
  const [questions] = await connection.execute(
    'SELECT * FROM questions WHERE replace(lcase(question), " ", "")',
    [question],
  );
  return questions.length > 0;
}

module.exports = {
  getAll,
  create,
  exclude,
  isQuestionSimilar,
};