const FlashLoan = artifacts.require("FlashLoan");
const MyToken = artifacts.require("MyToken");

module.exports = async function (deployer, network, accounts) {
    // Deploy MyToken first
    await deployer.deploy(MyToken, web3.utils.toWei("0.001", "ether")); // Initial supply of 10,000 tokens

    const tokenInstance = await MyToken.deployed();

    // Deploy FlashLoan with the address of the deployed MyToken contract and the initial owner
    await deployer.deploy(FlashLoan, tokenInstance.address, accounts[0]);
};
