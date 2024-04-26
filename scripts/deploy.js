const hre = require("hardhat");

async function main() {

  const nftMarket = await hre.ethers.getContractFactory("nftMarket");

  const NftMarket = await nftMarket.deploy(); 

  console.log(
    `deployed to the contract address ${nftMarket.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
