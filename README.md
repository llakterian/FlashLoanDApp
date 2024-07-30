# FlashLoanDApp

## About

FlashLoanDApp is a decentralized application (DApp) that enables users to perform flash loans on the Ethereum blockchain. The DApp uses smart contracts written in Solidity and is deployed on the Sepolia testnet using Truffle and Alchemy.

### Features
- **Flash Loans**: Borrow and repay tokens within the same transaction.
- **Custom ERC20 Token**: A sample token (`MyToken`) is provided for testing purposes.
- **Smart Contract Interaction**: Scripts to deploy and interact with smart contracts.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/FlashLoanDApp.git
    cd FlashLoanDApp
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Configure environment variables:
    Create a `.env` file in the root directory with your Alchemy API key and other necessary configurations.
    ```plaintext
    ALCHEMY_API_KEY=your-alchemy-api-key
    ```

## Usage

### Compile Contracts
```sh
truffle compile
