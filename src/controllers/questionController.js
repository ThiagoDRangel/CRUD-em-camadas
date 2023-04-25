const questionService = require('../services/questionService');

const getAll = async (req, res) => {
  const questions = await questionService.getAll();
  return res.status(200).json(questions);
};

const create = async (req, res) => {
  const question = req.body;
  const result = await questionService.create(question);
  return res.status(201).json(result);
};

module.exports = {
  getAll,
  create,
};