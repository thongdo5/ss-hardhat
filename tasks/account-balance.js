require('@nomicfoundation/hardhat-toolbox');
require('@nomicfoundation/hardhat-ethers');

task('balance', "Prints an account's balance").addParam("account", "The account's address").setAction(async (taskArgs) => {
  console.log({ account: taskArgs.account });
  const balance = await ethers.provider.getBalance(taskArgs.account);

  console.log(ethers.formatEther(balance), "ETH");
});