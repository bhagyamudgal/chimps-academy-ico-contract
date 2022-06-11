const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { CHIMPS_ACADEMY_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
	// Address of the Chimps Academy NFT contract that you deployed in the previous module
	const chimpsAcademyNFTContract = CHIMPS_ACADEMY_NFT_CONTRACT_ADDRESS;

	/*
    A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
    so chimpsAcademyTokenContract here is a factory for instances of our CryptoDevToken contract.
    */
	const chimpsAcademyTokenContract = await ethers.getContractFactory(
		"ChimpsAcademyToken"
	);

	// deploy the contract
	const deployedChimpsAcademyTokenContract =
		await chimpsAcademyTokenContract.deploy(chimpsAcademyNFTContract);

	// print the address of the deployed contract
	console.log(
		"Chimps Academy Token Contract Address:",
		deployedChimpsAcademyTokenContract.address
	);
}

// Call the main function and catch if there is any error
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
