import React, { useState } from "react";
import { ethers } from "ethers";
import {
  BitcoinWallet,
  BitcoinProvider,
  BitcoinNetwork,
  EVMWallet,
} from "@catalogfi/wallets";
import {
  Orderbook,
  Chains,
  Assets,
  Actions,
  parseStatus,
} from "@gardenfi/orderbook";
import { GardenJS } from "@gardenfi/core";
import { Input } from "@/components/ui/input";

const SwapInterface = () => {
  const [btcPrivateKey, setBtcPrivateKey] = useState("");
  const [ethAddress, setEthAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [swapStatus, setSwapStatus] = useState(null);

  const handleMetamaskConnection = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });

        if (accounts.length > 0) {
          console.log("Connected to MetaMask:", accounts[0]);
          setEthAddress(accounts[0]);
        }
      } catch (error) {
        console.error("Failed to connect to MetaMask", error);
      }
    } else {
      console.log("Please install MetaMask!");
    }
  };

  const performSwap = async () => {
    try {
      // Ensure that MetaMask is available
      if (typeof window.ethereum === "undefined") {
        throw new Error("MetaMask not available");
      }

      // Initialize Bitcoin wallet
      const bitcoinWallet = BitcoinWallet.fromPrivateKey(
        btcPrivateKey,
        new BitcoinProvider(BitcoinNetwork.Mainnet)
      );

      // Initialize EVM wallet using MetaMask provider
      const provider = new ethers.providers.Web3Provider(
        window.ethereum,
        "any"
      );
      const signer = provider.getSigner();
      const evmWallet = new EVMWallet(signer);

      // Initialize GardenJS
      const orderbook = await Orderbook.init({ signer });
      const garden = new GardenJS(orderbook, {
        [Chains.bitcoin_testnet]: bitcoinWallet,
        [Chains.ethereum_sepolia]: evmWallet,
      });

      // Perform the swap
      const sendAmount = parseFloat(amount) * 1e8; // Convert to Satoshis
      const receiveAmount = (1 - 0.3 / 100) * sendAmount;

      const orderId = await garden.swap(
        Assets.bitcoin.BTC,
        Assets.ethereum.WBTC,
        sendAmount,
        receiveAmount
      );

      // Monitor swap status
      garden.subscribeOrders(await evmWallet.getAddress(), async (orders) => {
        const order = orders.find((order) => order.ID === orderId);
        if (order) {
          const action = parseStatus(order);
          if (
            [Actions.UserCanInitiate, Actions.UserCanRedeem].includes(action)
          ) {
            const swapOutput = await garden.getSwap(order).next();
            setSwapStatus(
              `Completed Action ${swapOutput.action} with transaction hash: ${swapOutput.output}`
            );
          }
        }
      });
    } catch (error) {
      console.error("Swap failed", error);
      setSwapStatus("Swap failed: " + error.message);
    }
  };

  return (
    <div className="bg-[#14162E] h-screen w-screen text-white ">
      <div className="p-8 max-w-lg mx-auto ">
        <h1 className="text-2xl font-bold mb-4">Swap BTC to WBTC</h1>

        <div className="mb-4">
          <label className="block">BTC Private Key:</label>
          <Input
            type="text"
            className="w-full p-2 border text-black border-gray-300 rounded"
            value={btcPrivateKey}
            onChange={(e) => setBtcPrivateKey(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block">Amount in BTC:</label>
          <Input
            type="number"
            className="w-full p-2 text-black border border-gray-300 rounded"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button
          onClick={handleMetamaskConnection}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
          Connect MetaMask
        </button>

        {ethAddress && (
          <div className="mb-4">
            <p>Connected with: {ethAddress}</p>
          </div>
        )}

        <button
          onClick={performSwap}
          className="bg-[#7418ad] text-white px-4 py-2 rounded"
        >
          Swap
        </button>

        {swapStatus && (
          <div className="mt-4">
            <p>{swapStatus}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SwapInterface;
