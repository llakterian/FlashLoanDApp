const MyToken = artifacts.require("MyToken");
const FlashLoan = artifacts.require("FlashLoan");

module.exports = async function (deployer, network, accounts) {
    const [owner] = accounts;

    await deployer.deploy(MyToken, 1000000);
    const myTokenInstance = await MyToken.deployed();

    await deployer.deploy(FlashLoan);
    const flashLoanInstance = await FlashLoan.deployed();

    // Optionally transfer some tokens to FlashLoan contract
    await myTokenInstance.transfer(flashLoanInstance.address, 100000, { from: owner });

    console.log(`MyToken deployed at: ${myTokenInstance.address}`);
    console.log(`FlashLoan deployed at: ${flashLoanInstance.address}`);
};
