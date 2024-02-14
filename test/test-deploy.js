const { ethers } = require('hardhat');
const { expect } = require('chai');

describe('SS', () => {
	let SSFactory;
	let simpleStorage;
	beforeEach(async () => {
		SSFactory = await ethers.getContractFactory('SS');
		simpleStorage = await SSFactory.deploy();
	});

	it('should always initialize a fav number of 0', async () => {
		const currentFavNumber = await simpleStorage.retrieve();
		expect(currentFavNumber.toString()).equal('0');
	});

	it('should update when we call store', async () => {
		await simpleStorage.store(7);
		const currentFavNumber = await simpleStorage.retrieve();
		expect(currentFavNumber.toString()).equal('7');
	});
});
