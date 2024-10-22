import env from "dotenv";
import {
  createWallets,
  mintTokens,
  transferTokensToAddress,
  getWallet,
  checkBalance,
} from "./wallet.js";

env.config();

const wallets = createWallets();

/// ---- Load wallet from privateKeys ----

// const privateKeys = [];
// const wallets = await Promise.all(privateKeys.map((key) => getWallet(key)));

async function mintAndTransfer() {
  const recipientAddress = "0x31bDA42da2d578b801a996db5Fc71f23B48ccA13";
  try {
    await mintTokens(wallets);

    await transferTokensToAddress(wallets, recipientAddress);
  } catch (error) {
    console.log(`error occurred ${error}`);
  }
}

///--- Call mint and transfer once wallets are funded with gas fees ---
//mintAndTransfer()

// ---  Check token balance ---
wallets.map(async (w) => {
  await checkBalance(w.address);
});
