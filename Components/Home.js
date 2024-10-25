// src/components/Home.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import NFTCard from "./NFTCard";
import CreateNFT from "./CreateNFT";

const Home = ({ createNFT }) => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const fetchNFTs = async () => {
      const response = await axios.get("YOUR_API_ENDPOINT"); // Replace with your API
      setNfts(response.data);
    };
    fetchNFTs();
  }, []);

  return (
    <div className="container mx-auto">
      <CreateNFT createNFT={createNFT} />
      <div className="flex flex-wrap justify-center">
        {nfts.map((nft) => (
          <NFTCard key={nft.id} nft={nft} />
        ))}
      </div>
    </div>
  );
};

export default Home;
