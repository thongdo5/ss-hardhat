require("@nomicfoundation/hardhat-toolbox");

task("block-number", "Prints the current block number").setAction(async (taskArgs) => {
  const blockNumber = await ethers.provider.getBlockNumber();

  console.log(`Current block number is ${blockNumber}`);
});