const { expect } = require('chai');
const sinon = require('sinon');

const questionService = require('../../../src/services/questionService');
const questionModel = require('../../../src/models/questionModel');
const userModel = require('../../../src/models/userModel');

describe('Question Service test', () => {
  describe('Sucess case', () => {
    afterEach(() => sinon.restore());
    it('GetAll with data', async () => {
      sinon.stub(questionModel, 'getAll').resolves([]);

      const result = await questionService.getAll();

      expect(result).to.be.an('array');
      expect(result).to.have.length(0);
    });
    it('Create Question', async () => {
      sinon.stub(userModel, 'getById').resolves();
      sinon.stub(questionModel, 'isQuestionSimilar').resolves();
      sinon.stub(questionModel, 'create').resolves();
    });
  });
});