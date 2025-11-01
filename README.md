
# Blockchain Fundamentals Lab

A hands-on Node.js project to explore and practice **core blockchain concepts**, including:

- Proof-of-Work (PoW) mining  
- Blockchain data structures  
- Transaction handling  
- Ethereum wallet and Ethers.js interactions  

This project is intended for **educational purposes**, demonstrating the mechanisms behind blockchains like Bitcoin and Ethereum.

---

## Project Modules

### 1. Proof-of-Work Miner (`ProofOfWorkMiner`)
- Implements a simple PoW algorithm to mine blocks.
- Maintains a **mempool** of transactions.
- Mines a block by finding a nonce such that the block hash meets a **target difficulty**.
- Supports a maximum number of transactions per block (`MAX_TRANSACTIONS`).

**Example usage:**
```javascript
const { addTransaction, mine, blocks } = require("./ProofOfWorkMiner");

addTransaction({ from: "Alice", to: "Bob", amount: 10 });
mine();

console.log(blocks);
```

---

### 2. Blockchain Data Structure (`blockchain.js` & `block.js`)
- Implements a **basic blockchain** with linked blocks.
- Each block stores data and references the previous block’s hash.
- Validates the chain using `isValid()` to ensure integrity.

**Example usage:**
```javascript
const Blockchain = require("./Blockchain");
const Block = require("./block");

const bc = new Blockchain();
const newBlock = new Block("Sample transaction data");
bc.addBlock(newBlock);

console.log("Blockchain valid?", bc.isValid());
```

---

### 3. Ethereum Wallet & Transactions (`ethers` directory)
- Practice with **Ethereum wallets** and **transactions** using Ethers.js.
- Includes:
  - Wallet creation from private key or mnemonic.
  - Signing transactions.
  - Sending and receiving Ether via a local Ethereum provider (Ganache).
  - Querying balances and transaction history.
  - Donation simulation to multiple addresses.

**Example usage:**
```javascript
const { wallet1 } = require("./Ethers/wallets");
console.log("Wallet address:", wallet1.address);
```

Send Ether using your local wallet:
```javascript
const sendEther = require("./Ethers/sendEther");
const { utils } = require("ethers");

(async () => {
  const tx = await sendEther({ value: utils.parseUnits("1.0", "ether"), to: "0xRecipientAddress" });
  console.log("Transaction:", tx);
})();
```

---

## Features

- Simulates **Proof-of-Work mining**.  
- Implements a **blockchain data structure** with validation.  
- Demonstrates Ethereum wallet operations and transaction signing.  
- Node.js based, easy to experiment and extend.  
- Ideal for learning **core blockchain mechanics** hands-on.  

---

## Technologies Used

- Node.js  
- JavaScript (ES6+)  
- Crypto-js (SHA256)  
- Ethers.js  
- Ganache (local Ethereum blockchain)

---

## Notes

- **Educational project only** — do not use provided private keys on any mainnet.  
- Can be extended to include multiple miners, consensus algorithms, or smart contracts.  
- Excellent for understanding **blockchain basics**, mining, and wallet interactions.

---

## Project Structure

```
.
├── ProofOfWorkMiner.js          # Proof-of-Work mining simulation
├── Blockchain DataStructure/        # DataStructure
│   ├── Blockchain.js        # Blockchain data structure
│   ├── block.js             # Block class
├── Ethers/              # Ethereum wallet & transaction practice
│   ├── wallets.js
│   ├── sign.js
│   ├── sendEther.js
│   ├── findBalance.js
│   ├── findEther.js
│   └── donate.js
└── README.md
```

---

## License

MIT License

---

## Contact

Your Name – aynaashraf000@gmail.com
