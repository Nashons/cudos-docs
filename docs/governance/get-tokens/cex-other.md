---
title: Centralised Exchange with no direct CUDOS Tokens
id: cex-other
---
# Centralised Exchange with no direct CUDOS Tokens
:::tip
This exchange doesn't directly support the CUDOS token, but this guide will still show you a method to getting the native CUDOS token. This may not be the only method.
:::

:::tip
We suggest using a computer for this, some of the steps are unsupported on mobile.
:::

:::tip
This section does not constitute financial advice, please do your own research on the platforms you choose to trade on.
:::

You should be able to find either the ATOM (Cosmos Hub) or OSMO (Osmosis) token in the "Swap" or "Trade" section of this exchange application.  
Once you have traded for ATOM or OSMO on the platform, the next steps are: withdraw the tokens to your Cosmos/Osmosis address held within Keplr/Cosmostation wallet, use the Osmosis Frontier DEX to trade them for CUDOS mainnet tokens, withdraw them to your CUDOS address on the CUDOS Blockchain, and then be able to interact with dApps and features on the CUDOS blockchain.

1. If you don't already have a wallet for Cosmos-based blockchains (such as Cosmos Hub, Osmosis, and CUDOS), you can create one with [this link](../../learn/concepts/wallets/keplr-create.md) using Keplr Wallet, which you can think of as MetaMask for the Cosmos ecosystem.

2. Withdraw the ATOM/OSMO tokens from the exchange to your Cosmos/Osmosis address: find the withdraw option in the application and enter your Cosmos/Osmosis address. Also add the amount you wish to withdraw.
:::info
Your Cosmos and Osmosis address will begin with `cosmos1` and `osmo1` respectively - most people use Keplr or Cosmostation Wallet for their Cosmos-ecosystem wallet, CUDOS is also a Cosmos-based blockchain.
:::

3. Swap the ATOM/OSMO tokens on Osmosis Frontier: [frontier.osmosis.zone](https://frontier.osmosis.zone/) - (If you have chosen to use ATOM, you may need to use the deposit feature within Osmosis Frontier first). Find the swap screen and select how many tokens you want to swap for CUDOS tokens. Sign the transaction with your wallet.  

4. Withdraw the tokens from the exchange's blockchain to your CUDOS address via IBC: find the withdraw option in the application and enter your CUDOS address. Also add the amount you wish to withdraw.
:::info
Your CUDOS address will begin with `cudos1`.
:::

5. Once the withdrawal transaction has completed, you will now see your funds sitting in your Keplr/Cosmostation wallet when the `CudosNetwork` is selected.


**Congratulations! You have Mainnet CUDOS tokens!**

Now what?

You can now interact with dApps built on CUDOS, buy computing with CUDOS tokens, purchase tokenised infrastructure NFTs, vote on governance proposals, and stake to earn a passive income on your tokens!