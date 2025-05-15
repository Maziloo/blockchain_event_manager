// scripts/deploy.js
async function main() {
    const EventMarketplace = await ethers.getContractFactory("EventMarketplace");
    const contract = await EventMarketplace.deploy();
  
    await contract.deployed();
    console.log("Contract deployed to:", contract.address);
    
    // For frontend access
    fs.writeFileSync(
      "./frontend/src/contracts/contract-address.json",
      JSON.stringify({ address: contract.address }, null, 2)
    );
  
    fs.copyFileSync(
      "./artifacts/contracts/EventMarketplace.sol/EventMarketplace.json",
      "./frontend/src/contracts/EventMarketplace.json"
    );
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });