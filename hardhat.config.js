require('@nomicfoundation/hardhat-toolbox');
require('@nomicfoundation/hardhat-verify');
require('dotenv').config();
require('./tasks/account-balance');
require('./tasks/block-number');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	defaultNetwork: 'hardhat',
	solidity: '0.8.8',
	etherscan: {
		apiKey: process.env.ETHERSCAN_API_KEY,
	},
	networks: {
		localhost: {
			url: 'http://127.0.0.1:8545/',
			chainId: 31337,
		},
	},
	gasReporter: {
		enabled: true,
		outputFile: 'gas-report.txt',
		noColors: true,
		currency: 'USD',
		coinmarketcap: process.env.COINMARKETCAP_API_KEY,
	},
};
