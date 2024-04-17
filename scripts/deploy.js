const hre = require("hardhat");

async function main() {
  const Deployer = await hre.ethers.getContractFactory("Deployer");
  const deployer = await Deployer.deploy();
  await deployer.deployed();

  console.log("Deployer contract deployed to:", deployer.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });