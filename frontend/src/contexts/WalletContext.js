import React, { createContext, useState, useEffect } from "react";
import { BrowserProvider } from "ethers"; // Use BrowserProvider

// Create a context for wallet authentication
export const WalletContext = createContext();

// WalletProvider component to manage wallet state
export const WalletProvider = ({ children }) => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  // Function to connect the wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request account access
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new BrowserProvider(window.ethereum); // Use BrowserProvider
        const signer = await provider.getSigner(); // Await getSigner()
        const address = await signer.getAddress();

        // Update wallet state
        setWalletConnected(true);
        setWalletAddress(address);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  // Check if wallet is already connected on page load
  useEffect(() => {
    const checkWalletConnection = async () => {
      if (window.ethereum) {
        const provider = new BrowserProvider(window.ethereum); // Use BrowserProvider
        const accounts = await provider.listAccounts(); // Use provider.listAccounts()
        if (accounts.length > 0) {
          setWalletConnected(true);
          setWalletAddress(accounts[0].address); // Access address property
        }
      }
    };

    checkWalletConnection();
  }, []);

  return (
    <WalletContext.Provider value={{ walletConnected, walletAddress, connectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};