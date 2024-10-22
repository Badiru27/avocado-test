import {
  ethers,
  JsonRpcProvider,
  Contract,
  parseUnits,
  formatUnits,
} from "ethers";
import { readFileSync, writeFileSync } from "fs";

const provider = new JsonRpcProvider(
  "https://data-seed-prebsc-1-s1.binance.org:8545/"
);

export function createWallets() {
  const wallet = [];
  for (let i = 0; i < 5; i++) {
    const wallet = ethers.Wallet.createRandom();
    wallet.push(wallet);
    console.log(
      `Wallet ${i + 1}:`,
      wallet.address,
      `private key: ${wallet.privateKey}`
    );
  }
  return wallet;
}

export async function checkBalance(walletAddress) {
  const contractAddress = process.env.CONTRACT_ADDRESS;
  const abiData = readFileSync(process.cwd() + "/abi.json");
  const contractABI = JSON.parse(abiData);

  const contract = new Contract(contractAddress, contractABI, provider);

  try {
    const balance = await contract.balanceOf(walletAddress);

    const formattedBalance = formatUnits(balance, 18);
    console.log(
      `Token Balance of ${walletAddress}: ${formattedBalance} Tokens`
    );
    return formattedBalance;
  } catch (error) {
    console.error(`Error checking token balance for ${walletAddress}:`, error);
    throw error;
  }
}

async function loadWallet(privateKey) {
  return new ethers.Wallet(privateKey);
}

export async function getWallet(key) {
  return loadWallet(key);
}

export async function mintTokens(wallets) {
  const contractAddress = process.env.CONTRACT_ADDRESS;
  const abiData = readFileSync(process.cwd() + "/abi.json");
  const contractABI = JSON.parse(abiData);

  for (const wallet of wallets) {
    const connectedWallet = wallet.connect(provider);

    const contract = new Contract(
      contractAddress,
      contractABI,
      connectedWallet
    );

    const tx = await contract.mint(wallet.address, parseUnits("1000", 18));

    logTransaction("Mint", wallet.address, tx.hash);

    await tx.wait();

    try {
    } catch (e) {
      console.error(`Error minting tokens for ${wallet.address}:`, error);
    }
  }
}

async function transferToken(wallet, recipientAddress) {
  const connectedWallet = wallet.connect(provider);
  const contractAddress = process.env.CONTRACT_ADDRESS;
  const abiData = readFileSync(process.cwd() + "/abi.json");
  const contractABI = JSON.parse(abiData);

  const contract = new Contract(contractAddress, contractABI, connectedWallet);

  try {
    const balance = await contract.balanceOf(wallet.address);
    console.log({ balance });

    const tx = await contract.transfer(recipientAddress, balance);

    logTransaction("Transfer", wallet.address, tx.hash);

    await tx.wait();
  } catch (error) {
    console.error(`Error transferring tokens from ${wallet.address}:`, error);
  }
}

export async function transferTokensToAddress(wallets, recipientAddress) {
  for (const wallet of wallets) {
    await transferToken(wallet, recipientAddress);
  }
}

async function logTransaction(type, walletAddress, txHash) {
  const transactionDetail = {
    type,
    walletAddress,
    txHash,
  };
  const path = process.cwd() + "/transaction.json";

  const logData = readFileSync(path);

  const transactionHistory = JSON.parse(logData);

  transactionHistory.push(transactionDetail);

  writeFileSync(path, JSON.stringify(transactionHistory), "utf8");

  console.log(`${type} transaction for ${walletAddress}: ${txHash}`);
}
