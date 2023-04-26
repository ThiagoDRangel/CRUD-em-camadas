const { expect } = require('chai');
const sinon = require('sinon');

const questionService = require('../../../src/services/questionService');
const questionModel = require('../../../src/models/questionModel');
const userModel = require('../../../src/models/userModel');

describe('Question Service test', () => {
  describe('Sucess case', () => {
    afterEach(() => sinon.restore());
    it('GetAll with data', async () => {
      sinon.stub(questionModel, 'getAll').resolves([
        { id: 1, question: 'Quem mudou o canal?', userId: 1 },
        { id: 2, question: 'Cade a Leela?', userId: 2 },
      ]);

      const result = await questionService.getAll();

      expect(result).to.be.an('array');
      expect(result).to.have.length(2);
    });
    it('GetAll without data', async () => {
      sinon.stub(questionModel, 'getAll').resolves([]);

      const result = await questionService.getAll();

      expect(result).to.be.an('array');
      expect(result).to.have.length(0);
    });
    it('Create Question', async () => {
      sinon
        .stub(userModel, 'getById')
        .resolves({ id: 1, name: 'Homer Simpson' });
      sinon.stub(questionModel, 'isQuestionSimilar').resolves(false);
      sinon
        .stub(questionModel, 'create')
        .resolves({ id: 8, question: 'Alguem viu esse gatinho?' });

      const result = await questionService.create({
        question: 'Alguem viu esse gatinho?',
        userId: 1,
      });

      expect(result).to.be.an('object');
      expect(result.type).to.be.equal(null);
      expect(result.message.question).to.be.equal('Alguem viu esse gatinho?');
      expect(result.message.id).to.be.equal(8);
    });
  });
  describe('Fail cases', () => {
    describe('create ', () => {
      afterEach(() => sinon.restore());
      it('Create user not exists', async () => {
        sinon.stub(userModel, 'getById').resolves(undefined);
        sinon.stub(questionModel, 'isQuestionSimilar').throws();
        sinon.stub(questionModel, 'create').throws();

        const result = await questionService.create({
          question: 'Alguem viu esse gatinho?',
          userId: 1,
        });

        expect(result).to.be.an('object');
        expect(result.type).to.be.equal(404);
        expect(result.message).to.be.equal('user not found');
      });
    });
  });
});
