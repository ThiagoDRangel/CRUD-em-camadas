const questionModel = require('../models/questionModel');

const getAll = async () => {
  const questions = await questionModel.getAll();
  return questions;
};

module.exports = {
  getAll,
};