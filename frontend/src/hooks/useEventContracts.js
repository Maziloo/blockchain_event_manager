// src/hooks/useEventContract.js
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import EventMarketplace from '../../blockchain/contracts/EventMarketplace.json';

export default function useEventContract() {
  const [contract, setContract] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const initContract = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        process.env.REACT_APP_CONTRACT_ADDRESS,
        EventMarketplace.abi,
        signer
      );
      setContract(contract);
      return contract;
    }
  };

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const contract = await initContract();
      const events = await contract.getEvents();
      setEvents(events);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      fetchEvents();
      
      // Listen for new events
      const contract = new ethers.Contract(
        process.env.REACT_APP_CONTRACT_ADDRESS,
        EventMarketplace.abi,
        new ethers.BrowserProvider(window.ethereum)
      );

      contract.on("EventCreated", () => {
        fetchEvents(); // Refresh when new event is created
      });

      return () => contract.removeAllListeners();
    }
  }, []);

  return { contract, events, loading, fetchEvents };
}

