import env from "dotenv";
import {
  createWallets,
  mintTokens,
  transferTokensToAddress,
} from "./wallet.js";

env.config();

const wallets = createWallets();

async function mintAndTransfer() {
  const recipientAddress = "0x31bDA42da2d578b801a996db5Fc71f23B48ccA13";
  try {

    await mintTokens(wallets);

    await transferTokensToAddress(wallets, recipientAddress);
  } catch (error) {
    console.log(`error occurred ${error}`);
  }
}


/// Call mint and transfer once wallets are funded with gas fees
//mintAndTransfer()