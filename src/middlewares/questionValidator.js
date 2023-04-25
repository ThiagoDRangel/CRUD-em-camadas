const isNumberAndInteger = (userId) => typeof userId !== 'number' || !Number.isInteger(userId);

const questionValidator = async (req, res, next) => {
  const question = req.body;

  if (!question) {
    return res.status(422).json({
      message: 'Invalid question format',
    });
  }
  if (question.question === undefined || question.question === null) {
    return res.status(422).json({
      message: 'Question is required',
    });
  }
  if (typeof question.question !== 'string') {
    return res.status(422).json({
      message: 'Question should be a string',
    });
  }
  next();
}

const userIdValidator = async (req, res, next) => {
  const question = req.body;

  if (!question) {
    return res.status(422).json({
      message: 'Invalid question format',
    });
  }
  const { userId } = question;
  if (userId === undefined || userId === null) {
    return res.status(422).json({
      message: 'userId is required',
    });
  }
  if (isNumberAndInteger(userId)) {
    return res.status(422).json({
      message: 'userId should be a number and a integer',
    });
  }
  next();
}


module.exports = {
  questionValidator,
  userIdValidator,
};