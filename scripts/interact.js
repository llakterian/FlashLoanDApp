const Web3 = require("web3");
const MyToken = require("../build/contracts/MyToken.json");
const FlashLoan = require("../build/contracts/FlashLoan.json");

// Replace with your own values
const provider = new Web3.providers.HttpProvider("https://eth-sepolia.alchemyapi.io/v2/YOUR_ALCHEMY_API_KEY");
const web3 = new Web3(provider);

const myTokenAddress = "YOUR_MY_TOKEN_ADDRESS";
const flashLoanAddress = "YOUR_FLASH_LOAN_ADDRESS";

const account = "YOUR_ACCOUNT_ADDRESS"; // Make sure this account has sufficient tokens and gas

const main = async () => {
    const networkId = await web3.eth.net.getId();

    const myTokenInstance = new web3.eth.Contract(MyToken.abi, myTokenAddress);
    const flashLoanInstance = new web3.eth.Contract(FlashLoan.abi, flashLoanAddress);

    // Interact with MyToken contract
    const balance = await myTokenInstance.methods.balanceOf(account).call();
    console.log(`Balance of account ${account}: ${balance}`);

    // Interact with FlashLoan contract
    const loanAmount = 1000;
    await flashLoanInstance.methods.executeFlashLoan(myTokenAddress, loanAmount).send({ from: account });
    console.log(`Executed flash loan of ${loanAmount} tokens`);

    // Check final balance
    const finalBalance = await myTokenInstance.methods.balanceOf(account).call();
    console.log(`Final balance of account ${account}: ${finalBalance}`);
};

main().catch(console.error);
