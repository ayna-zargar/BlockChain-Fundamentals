const ethers = require("ethers");
const { Wallet } = ethers;
/*
 Never use this private key and mnemonic to store anything on a mainnet! 
 Once private keys and mnemonics have been shared publicly, they are no 
 longer safe. In fact, there are machines watching activity
 on addresses with known private keys. If you send money to 
 such an address, it will likely be gone in seconds!
*/
const private_key =
  "0xf2f48ee19680706196e2e339e5da3491186e0c4c5030670656b0e0164837257d";
const mnemonic =
  "plate lawn minor crouch bubble evidence palace fringe bamboo laptop dutch ice";

const wallet1 = new Wallet(private_key);
console.log("Wallet 1 Address: ", wallet1.address);

// const wallet2 = Wallet.fromMnemonic(mnemonic);
// console.log("Wallet 2 Address: ", wallet2.address);
module.exports = {
  wallet1,
};
