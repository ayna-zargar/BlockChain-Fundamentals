const ethers = require("ethers");
const wallet1 = require("./wallets");
const { utils } = ethers;

const signaturePromise = wallet1.signTransaction({
  value: utils.parseUnits("1.0", "ether"),
  to: "0xdD0DC6FB59E100ee4fA9900c2088053bBe14DE92",
  gasPrice: 21000,
  gasLimit: null,
});

module.exports = {
  signaturePromise,
};
