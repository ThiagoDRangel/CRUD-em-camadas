const connection = require('./connection');

const getById = async (id) => {
  const [[user]] = await connection.execute(
    'SELECT * FROM users WHERE id = ?;',
    [id],
  );
  return user;
};

module.exports = { getById };