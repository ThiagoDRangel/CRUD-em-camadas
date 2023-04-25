const questionService = require('../services/questionService');

const getAll = async (req, res) => {
  const questions = await questionService.getAll();
  return res.status(200).json(questions);
};

module.exports = {
  getAll,
};