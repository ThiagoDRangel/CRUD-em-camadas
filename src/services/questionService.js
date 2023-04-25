const questionModel = require('../models/questionModel');

const getAll = async () => {
  const questions = await questionModel.getAll();
  return questions;
};

const create = async (question) => {
  const createdQuestion = await questionModel.create(question);
  return createdQuestion;
};

const exclude = async (questionId) => {
  const deletedQuestion = await questionModel.exclude(questionId);
  return deletedQuestion;
};

module.exports = {
  getAll,
  create,
  exclude,
};