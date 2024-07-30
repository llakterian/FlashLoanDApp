**FlashLoanDApp**

_About:_
FlashLoanDApp is a decentralized application (DApp) that enables users to perform flash loans on the Ethereum blockchain. The DApp uses smart contracts written in Solidity and is deployed on the Sepolia testnet using Truffle and Alchemy.

_Features_
Flash Loans: Borrow and repay tokens within the same transaction.
Custom ERC20 Token: A sample token (MyToken) is provided for testing purposes.
Smart Contract Interaction: Scripts to deploy and interact with smart contracts.

_Installation_
Clone the repository:
git clone https://github.com/llakterian/FlashLoanDApp.git
cd FlashLoanDApp

_Install dependencies_
npm install

_Configure environment variables_
Create a .env file in the root directory with your Alchemy API key and other necessary configurations.

_Usage_
_Compile Contracts_
Compile the smart contracts using Truffle:
truffle compile

_Deploy Contracts_
Deploy the smart contracts to the Sepolia testnet:
truffle migrate --network sepolia

_Test Contracts_
Run the tests for the smart contracts:
truffle test

_Interact with Contracts_
Scripts for interacting with the deployed contracts are in the scripts/ directory. Run the interaction script:
node scripts/interact.js

_Project Structure_
The repository is organized as follows:

contracts/: Contains the Solidity smart contracts.

MyToken.sol: The custom ERC20 token contract.
FlashLoan.sol: The flash loan contract.
FlashLoanReceiver.sol: The receiver contract for flash loans.
migrations/: Migration scripts to deploy the contracts.

1_initial_migration.js: Migration script for deploying MyToken.
2_deploy_contracts.js: Migration script for deploying FlashLoan and FlashLoanReceiver.
test/: Contains the test scripts for the smart contracts.

myTokenTest.js: Test script for the MyToken contract.
flashLoanTest.js: Test script for the FlashLoan and FlashLoanReceiver contracts.
scripts/: Scripts for deploying and interacting with the smart contracts.

deploy.js: Script to deploy the contracts.
interact.js: Script to interact with the deployed contracts.

_Contributing_
Contributions are welcome! Please fork the repository and submit a pull request for any features, bug fixes, or enhancements.

_License_
This project is licensed under the MIT License.
