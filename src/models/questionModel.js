const connection = require('./connection');

const getAll = async () => {
  const [questions] = await connection.execute(
    'SELECT id, question, user_id AS userId FROM questions;'
  );
  // console.log('O que mockar no executa', questions);
  // Executar o Thunder Client para pegar a estrutura do mock
  return questions;
};

const create = async ({ question }) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO questions (question) VALUES (?);',
    [question],
  );
  console.log('mock do create', insertId);
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
    'SELECT * FROM questions WHERE replace(lcase(question), " ", "") = ?;',
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