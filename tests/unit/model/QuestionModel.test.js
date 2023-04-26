const { expect } = require('chai');
const sinon = require('sinon');

const questionModel = require('../../../src/models/questionModel');
const connection = require('../../../src/models/connection');
const { getAllMockWithData, createMock } = require('./mock/question.mock');

describe('Question Model tests', () => {
  describe('Sucess case', () => {
    afterEach(() => sinon.restore());

    it('GetAll with data', async () => {
      sinon.stub(connection, 'execute').resolves([getAllMockWithData]);

      const result = await questionModel.getAll();
      expect(result).to.be.an('array');
      expect(result).to.have.length(2);
      expect(result[0]).to.contain.keys(['question', 'userId']);
    });
    it('No data', async () => {
      sinon.stub(connection, 'execute').resolves([[]]);

      const result = await questionModel.getAll();
      expect(result).to.be.an('array');
      expect(result).to.have.length(0);
    });
    it('Create Question', async () => {
      sinon.stub(connection, 'execute').resolves([createMock]);

      const result = await questionModel.create({
        question: 'Teste Onde esta Carmen Sandiego?',
      });

      expect(result).to.be.an('object');
      expect(result).to.contain.keys(['id', 'question']);
    });
  });
  describe('My server no response', () => {
    afterEach(() => sinon.restore());
    it('GetAll db fail', async () => {
      sinon.stub(connection, 'execute').throws(new Error('db no response'));

      try {
        await questionModel.getAll();
        expect.fail();
      } catch (error) {
        expect(error.message).to.be.equal('db no response');
      }
    });
  });
});