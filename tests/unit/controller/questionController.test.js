const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { expect } = chai;

const questionController = require('../../../src/controllers/questionController');
const questionService = require('../../../src/services/questionService');

describe('Question Controller Test', () => {
  describe('Sucess Case', () => {
    afterEach(() => sinon.restore());
    it('Create', async () => {
      sinon.stub(questionService, 'create').resolves({
        type: null,
        message: { id: 9, question: 'Quem mudou o canal 9?' },
      });

      const req = {
        body: {
          question: 'Quem mudou o canal 9?',
          userId: 1,
        },
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await questionController.create(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith({
        id: 9,
        question: 'Quem mudou o canal 9?',
      });
    });
  });
  describe('Fail Case', () => {
    afterEach(() => sinon.restore());
    it('Create user not exists', async () => {
      sinon.stub(questionService, 'create').resolves({
        type: 404,
        message: 'user not found',
      });

      const req = {
        body: {
          question: 'Quem mudou o canal 9?',
          userId: 1,
        },
      };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      await questionController.create(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith('user not found');
    });
  });
});
