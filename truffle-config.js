const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

module.exports = {
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider(
        process.env.MNEMONIC,
        `https://eth-sepolia.g.alchemy.com/v2/...`
      ),
      network_id: 11155111,       // Sepolia's network id
      gas: 5500000,               // Gas limit
      confirmations: 2,           // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 40000,         // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true            // Skip dry run before migrations? (default: false for public nets )
    }
  },
  compilers: {
    solc: {
      version: "^0.8.20"          // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};
