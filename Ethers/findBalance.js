const { providers, Wallet } = require("ethers");
const { ganacheProvider } = require("./config");
const provider = new providers.Web3Provider(ganacheProvider);

function findBalance(privateKey) {
  const wallet = new Wallet(privateKey, provider);
  return wallet.getBalance();
}
