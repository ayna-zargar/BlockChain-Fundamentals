const { providers, Wallet, utils } = require("ethers");
const { ganacheProvider } = require("./config");

const provider = new providers.Web3Provider(ganacheProvider);

async function donate(privateKey, charities) {
  const wallet = new Wallet(privateKey, provider);
  for (let i = 0; i < charities.length; i++) {
    await wallet.sendTransaction({
      to: charities[i],
      value: utils.parseUnits("1.0", "ether"),
    });
  }
}

module.exports = donate;
