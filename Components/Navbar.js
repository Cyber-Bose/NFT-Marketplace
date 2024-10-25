// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ walletAddress }) => {
  return (
    <nav className="bg-dark text-white p-4">
      <div className="container d-flex justify-content-between align-items-center">
        <h1>NFT Artisan Marketplace</h1>
        <div>
          <Link to="/" className="text-white mx-2">Home</Link>
          {walletAddress && <span className="text-white">Connected as: {walletAddress}</span>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
