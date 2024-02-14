const { ethers, run, network } = require('hardhat');

const verify = async (contractAddress, args) => {
	console.log('Verifying contract...');
	try {
		await run('verify:verify', {
			contractAddress,
			constructorArguments: args,
		});
	} catch (error) {
		if (error.message.toLowerCase().includes('already verified')) {
			console.log('Already Verified');
			return;
		}

		console.error('Failed to verify contract', error);
	}
};

(async () => {
	const SSFactory = await ethers.getContractFactory('SS');
	console.log('Deploying contract...');
	const sS = await SSFactory.deploy();
	console.log(`Deployed contract to: ${await sS.getAddress()}`);

	if (network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY) {
		await sS.deploymentTransaction.wait(6);
		await verify(sS.getAddress(), []);
	}

	const currentValue = await sS.retrieve();
	console.log({ currentValue });

	const transactionResponse = await sS.store(7);
	await transactionResponse.wait(1);
	const updatedValue = await sS.retrieve();
	console.log({ updatedValue });
})()
	.then(() => process.exit(0))
	.catch((error) => {
		console.log(error);
		process.exit(1);
	});
