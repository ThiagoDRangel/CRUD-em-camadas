const questionModel = require('../models/questionModel');

const getAll = async () => {
  const questions = await questionModel.getAll();
  return questions;
};

const create = async (question) => {
  const createdQuestion = await questionModel.create(question);
  return createdQuestion;
};

module.exports = {
  getAll,
  create,
};