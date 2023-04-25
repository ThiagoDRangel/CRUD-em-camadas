const express = require('express');
const questionController = require('./controllers/questionController');
const {
  questionValidator,
  userIdValidator,
} = require('./middlewares/questionValidator');

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).json());

app.get('/questions', questionController.getAll);

app.post('/questions', questionValidator, userIdValidator, questionController.create);

app.delete('/questions/:questionId', questionController.exclude);

module.exports = app;
