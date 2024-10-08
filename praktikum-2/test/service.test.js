const sinon = require('sinon');
const { expect } = require('chai');
const Service = require('../src/service');
const PrimaryRepository = require('../src/repository');
const SecondaryRepository = require('../src/secondaryRepository');
describe('Service Integration Tests with Multiple Stubs', () => {
    let service;
    let primaryRepositoryStub;
    let secondaryRepositoryStub;
    beforeEach(() => {
        primaryRepositoryStub = sinon.createStubInstance(PrimaryRepository); secondaryRepositoryStub = sinon.createStubInstance(SecondaryRepository); service = new Service();
        service.primaryRepository = primaryRepositoryStub;
        service.secondaryRepository = secondaryRepositoryStub;
    });
    it('should return item from primary repository if found', () => {
        const item = { id: 1, name: 'Item 1' };
        primaryRepositoryStub.getItemById.withArgs(1).returns(item);
        const result = service.getItemById(1);
        expect(result).to.equal(item);
        expect(primaryRepositoryStub.getItemById.calledOnceWith(1)).to.be.true; expect(secondaryRepositoryStub.getItemById.notCalled).to.be.true;
    });
    it('should return item from secondary repository if not found in primary', () => {
        primaryRepositoryStub.getItemById.withArgs(3).returns(null);
        const item = { id: 3, name: 'Item 3' };
        secondaryRepositoryStub.getItemById.withArgs(3).returns(item);
        const result = service.getItemById(3);
        expect(result).to.equal(item);
        expect(primaryRepositoryStub.getItemById.calledOnceWith(3)).to.be.true; expect(secondaryRepositoryStub.getItemById.calledOnceWith(3)).to.be.true;
    });
    it('should throw an error if item is not found in both repositories', () => {
        primaryRepositoryStub.getItemById.returns(null);
        secondaryRepositoryStub.getItemById.returns(null);
        expect(() => service.getItemById(5)).to.throw('Item not found in both repositories');
        expect(primaryRepositoryStub.getItemById.calledOnceWith(5)).to.be.true; expect(secondaryRepositoryStub.getItemById.calledOnceWith(5)).to.be.true;
    });

    it('should remove item from primary repository if found', () => {
        const item = { id: 1, name: 'Item 1' };
        primaryRepositoryStub.removeItemById.withArgs(1).returns(item);  // Stub removeItemById method

        const result = service.removeItemById(1);
        expect(result).to.equal(item);  // Expect the removed item to be returned
        expect(primaryRepositoryStub.removeItemById.calledOnceWith(1)).to.be.true;  // Ensure it was called once with the correct id
    });

    it('should return null if item is not found in primary repository', () => {
        primaryRepositoryStub.removeItemById.withArgs(2).returns(null);  // Stub the case when item is not found

        const result = service.removeItemById(2);
        expect(result).to.be.null;  // Expect null to be returned
        expect(primaryRepositoryStub.removeItemById.calledOnceWith(2)).to.be.true;  // Ensure it was called once
    });

});
