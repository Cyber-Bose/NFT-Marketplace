// src/components/NFTDetails.js
import React from "react";

const NFTDetails = ({ nft }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-3">
      <img src={nft.image} alt={nft.name} className="rounded-lg w-full h-48 object-cover" />
      <h2 className="text-2xl font-bold mt-2">{nft.name}</h2>
      <p className="mt-2">{nft.description}</p>
    </div>
  );
};

export default NFTDetails;
