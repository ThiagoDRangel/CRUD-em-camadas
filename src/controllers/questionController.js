const questionService = require('../services/questionService');

const getAll = async (req, res) => {
  const questions = await questionService.getAll();
  return res.status(200).json(questions);
};

const create = async (req, res) => {
  const question = req.body;
  const result = await questionService.create(question);

  if (result.type) return res.status(result.type).json(result.message);

  return res.status(201).json(result.message);
};

const exclude = async (req, res) => {
  const { questionId } = req.params;
  await questionService.exclude(questionId);
  return res.status(204).json();
}

module.exports = {
  getAll,
  create,
  exclude,
};