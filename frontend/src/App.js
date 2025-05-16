import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { WalletContext } from "./contexts/WalletContext";
import "./App.css";

// src/App.js (updated)
// src/App.js (updated)
import HomePage from './pages/HomePage';
import CreateEventPage from './pages/CreateEventPage';

function App() {
  const { walletConnected, connectWallet } = useContext(WalletContext);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-event" element={<CreateEventPage />} />
        </Routes>
      </div>
    </Router>
  );
}

const Navbar = () => {
  const { walletConnected, connectWallet } = useContext(WalletContext);

  return (
    <nav className="bg-purple-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Event Marketplace</Link>
        <div className="flex items-center gap-4">
          <Link to="/create-event" className="hover:underline">Create Event</Link>
          <WalletButton />
        </div>
      </div>
    </nav>
  );
};

const WalletButton = () => {
  const { walletConnected, connectWallet } = useContext(WalletContext);

  return (
    <button
      onClick={connectWallet}
      className="bg-teal-400 text-black px-4 py-2 rounded hover:bg-teal-500"
    >
      {walletConnected ? "Connected" : "Connect Wallet"}
    </button>
  );
};

export default App;