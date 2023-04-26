const questionModel = require('../models/questionModel');
const userModel = require('../models/userModel');

const getAll = async () => {
  const questions = await questionModel.getAll();
  return questions;
};

const create = async (question) => {
  const user = await userModel.getById(question.userId);
  if (!user) return {
    type: 404,
    message: 'user not found',
  };

  const questionWithoutSpace = question.question.replace(/\s/g, '');
  const questionLowerCase = questionWithoutSpace.toLowerCase();
  const isQuestionSimilar = await questionModel.isQuestionSimilar(questionLowerCase);

  if(isQuestionSimilar) {
    return {
      type: 422,
      message: 'there is a similar question',
    };
  }

  const createdQuestion = await questionModel.create(question);
  return {
    type: null,
    message: createdQuestion,
  };
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