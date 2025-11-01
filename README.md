# Blockchain Fundamentals Lab

A hands-on Node.js project to practice and explore **core blockchain concepts** including:

- Proof-of-Work (PoW) mining
- Blockchain data structures
- Transaction handling
- Ethereum wallet and Ethers.js interactions

This project is intended for learning purposes and demonstrates the underlying mechanisms behind blockchains like Bitcoin and Ethereum.

---

## Project Modules

### 1. Proof-of-Work Miner (`powminer`)
- Implements a simple PoW algorithm.
- Mines blocks by finding a nonce such that the hash of the block satisfies a target difficulty.
- Supports a mempool for storing transactions and limits the number of transactions per block.

### 2. Blockchain Data Structure (`blockchain.js` & `block.js`)
- Implements a **basic blockchain** with linked blocks.
- Each block stores data and references the previous block’s hash.
- Validates the chain to ensure data integrity.

### 3. Ethers.js Wallet & Transactions (`ethers` directory)
- Practice with **Ethereum wallets** and **transactions** using Ethers.js.
- Includes:
  - Wallet creation from private key or mnemonic.
  - Signing transactions.
  - Sending and receiving Ether via a local provider (Ganache).
  - Querying balances and transaction history.
  - Donation simulation to multiple addresses.
- Designed to explore Ethereum account management and smart contract interactions.

---




