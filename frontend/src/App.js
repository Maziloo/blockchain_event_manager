import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { WalletContext } from "./contexts/WalletContext";
import "./App.css";

function App() {
  const { walletConnected, walletAddress, connectWallet } = useContext(WalletContext);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navbar */}
        <nav className="bg-purple-600 p-4 text-white">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">Event Marketplace</Link>
            <div className="flex items-center gap-4">
              <Link to="/create-event" className="hover:underline">Create Event</Link>
              <button
                onClick={connectWallet}
                className="bg-teal-400 text-black px-4 py-2 rounded hover:bg-teal-500"
              >
                {walletConnected ? `Connected` : "Connect Wallet"}
              </button>
            </div>
          </div>
        </nav>

        {/* Homepage Content */}
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {/* Hero Section */}
                <section className="bg-purple-500 text-white py-20">
                  <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-4">Welcome to the Decentralized Event Marketplace</h1>
                    <p className="text-xl">Discover and join events securely on the blockchain.</p>
                  </div>
                </section>

                {/* Event List */}
                <section className="container mx-auto py-12">
                  <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Hardcoded events for now */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <h3 className="text-2xl font-bold mb-2">Blockchain Conference 2023</h3>
                      <p className="text-gray-600">Date: October 25, 2023</p>
                      <p className="text-gray-600">Location: Virtual</p>
                      <p className="text-gray-600">Price: 0.1 ETH</p>
                      <button className="bg-purple-600 text-white px-4 py-2 mt-4 rounded hover:bg-purple-700 w-full">
                        Buy Ticket
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            }
          />
          <Route path="/create-event" element={<div>Create Event Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;