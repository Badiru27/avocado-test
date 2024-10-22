# ERC20 Token Minting & Transfer Script

This project demonstrates how to interact with an ERC20 token contract on the Binance Smart Chain (BSC) Testnet using ethers.js. The script creates multiple wallets, mints tokens for each wallet, and transfers the minted tokens to a designated address. All transaction details (both mint and transfer) are logged and saved to a JSON file.

## Features

- Create 5 random wallets using ethers.js.
- Mint 1000 tokens for each wallet from an ERC20 contract.
- Transfer all tokens from each wallet to a specific recipient address.
- Log and save transaction details to transactions.json.

## Prerequisites

- Node.js installed on your machine
- Test BNB in the generated wallets for gas fees (can be obtained from a BSC Testnet faucet)
- Access to the BSC Testnet

## Setup

1. Clone the repository:

     ```bash
      git clone repo-link
      ```

2. Install the necessary dependencies:

      ```bash
      npm install
      ```

3. Environment Configuration

    Create a `.env` file and add:

      ```bash
      CONTRACT_ADDRESS = "address"
      ```

## Usage

Run the script to mint tokens and transfer them:

   ```bash
    npm run dev
   ```

Check the console for transaction logs. The script will log each mint and transfer transaction.

The transaction details will also be saved in `transactions.json` in the project directory.

## My Submission Transaction Logs

   ```bash
   [
    {
        "type": "Mint",
        "walletAddress": "0x1392558A899bBe535fEd568Ce570FCf2c69393a8",
        "txHash": "0xe1cd720b891b323427b1295b418a8f0cffb46675bcdfc2cbbf0609c046384785"
    },
    {
        "type": "Mint",
        "walletAddress": "0x3365217E4124bdd554ab2CfA65576086dC40da6d",
        "txHash": "0x82e7e54862b8ff78c478d4635b399314950130fa163b09102e0701de78f276cf"
    },
    {
        "type": "Mint",
        "walletAddress": "0x653003F77Ae41AaaDdF0A189d7C7Cf8786F71A16",
        "txHash": "0x1adf878ac5e6a623ce3ccfe2c2501e8c96db33eb46f373c9ffe8107a3b6fb187"
    },
    {
        "type": "Mint",
        "walletAddress": "0xF593d43527270d7b965D95AB3eB11dd920159Fc0",
        "txHash": "0x4af80dcecf108126f668a1632b735b929146c877ef58e32ff07319963daff0f9"
    },
    {
        "type": "Mint",
        "walletAddress": "0x601aDDfB1472B1FDe930062dfE8766e03efd8eEF",
        "txHash": "0xde650c9530af2ff55cdb22b209524389cea8c88aca576e3fd64a032256810373"
    },
    {
        "type": "Transfer",
        "walletAddress": "0x1392558A899bBe535fEd568Ce570FCf2c69393a8",
        "txHash": "0x0f3d1dac1fc82ad827e275425df41785c399437210f0a711758a3636470b34d4"
    },
    {
        "type": "Transfer",
        "walletAddress": "0x3365217E4124bdd554ab2CfA65576086dC40da6d",
        "txHash": "0x492ba9d7d2527dd0c121163437000f3b3066c6cc197512b142836456472ac68e"
    },
    {
        "type": "Transfer",
        "walletAddress": "0x653003F77Ae41AaaDdF0A189d7C7Cf8786F71A16",
        "txHash": "0xcc8136f30385e950c38380e9b303b6b818f11db58444e86c32a3e9ef77df4975"
    },
    {
        "type": "Transfer",
        "walletAddress": "0xF593d43527270d7b965D95AB3eB11dd920159Fc0",
        "txHash": "0xbd0ad5f43db5079cbde75ca05225f6c358556d3b0084dc41687e906ca89ccf49"
    },
    {
        "type": "Transfer",
        "walletAddress": "0x601aDDfB1472B1FDe930062dfE8766e03efd8eEF",
        "txHash": "0x80b81a8beaec3e6aabd89c863c2212a839d4307cdbea66ba8224f5bf0d4a35bd"
    }
]
   ```
