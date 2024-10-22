import env from "dotenv";
import {
  createWallets,
  mintTokens,
  transferTokensToAddress,
} from "./wallet.js";

env.config();

async function main() {
  const recipientAddress = "0x31bDA42da2d578b801a996db5Fc71f23B48ccA13";
  try {
    const wallets = createWallets();

    await mintTokens(wallets);

    await transferTokensToAddress(wallets, recipientAddress);
  } catch (error) {
    console.log(`error occurred ${error}`);
  }
}
