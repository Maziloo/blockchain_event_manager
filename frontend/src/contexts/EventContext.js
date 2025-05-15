// src/contexts/EventContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import { useWallet } from './WalletContext';
import { ethers } from 'ethers';
import contractABI from '../contracts/EventMarketplace.json';

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const { walletAddress } = useWallet();
  const [myEvents, setMyEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMyEvents = async () => {
    if (!walletAddress) return;
    
    setLoading(true);
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const contract = new ethers.Contract(
        process.env.REACT_APP_CONTRACT_ADDRESS,
        contractABI.abi,
        provider
      );
      const events = await contract.getMyEvents(walletAddress);
      setMyEvents(events);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  // Refresh when wallet changes
  useEffect(() => {
    fetchMyEvents();
  }, [walletAddress]);

  return (
    <EventContext.Provider value={{ myEvents, loading, refreshEvents: fetchMyEvents }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => useContext(EventContext);