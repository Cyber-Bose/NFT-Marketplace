// src/components/Auction.js
import React, { useState } from "react";

const Auction = ({ nft }) => {
  const [bidAmount, setBidAmount] = useState("");

  const placeBid = () => {
    console.log(`Bidding ${bidAmount} on NFT: ${nft.name}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-3">
      <h2 className="text-xl font-bold">Auction for {nft.name}</h2>
      <input
        type="number"
        value={bidAmount}
        onChange={(e) => setBidAmount(e.target.value)}
        placeholder="Enter your bid"
        className="form-control mt-2"
      />
      <button onClick={placeBid} className="btn btn-success mt-2">Place Bid</button>
    </div>
  );
};

export default Auction;
