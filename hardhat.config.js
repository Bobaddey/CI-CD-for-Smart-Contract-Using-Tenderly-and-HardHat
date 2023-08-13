// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.19",
// };


import "@nomiclabs/hardhat-waffle";
import "@tenderly/hardhat-tenderly";
import "dotenv/config";

const {
    TENDERLY_FORK_URL
} = process.env

export default {
  solidity: "0.8.4",
  networks: {
    "tenderly-fork": {
      url: TENDERLY_FORK_URL
    },
  },
};