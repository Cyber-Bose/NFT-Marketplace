import React, { useEffect, useState } from "react";
import { ethers } from "ethers"; // Correct import statement
import NFTContract from "../artifacts/NFTContract.json"; // Update with your NFT contract's ABI

const NFTMarketPlace = () => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [nfts, setNfts] = useState([]);
  const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with your NFT contract address

  useEffect(() => {
    const checkWalletConnection = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) {
          setCurrentAccount(accounts[0]);
          fetchNFTs();
        }
      }
    };
    checkWalletConnection();
  }, []);

  const fetchNFTs = async () => {
    if (!currentAccount) return;

    const provider = new ethers.BrowserProvider(window.ethereum); // Updated for ethers v6
    const contract = new ethers.Contract(contractAddress, NFTContract.abi, provider);

    try {
      const data = await contract.fetchNFTs(); // Replace with your contract method
      const nftsData = data.map(nft => ({
        id: nft.id.toString(),
        uri: nft.uri,
        owner: nft.owner,
      }));
      setNfts(nftsData);
    } catch (error) {
      console.error("Error fetching NFTs:", error);
    }
  };

  const mintNFT = async (uri) => {
    if (!currentAccount) return;

    const provider = new ethers.BrowserProvider(window.ethereum); // Updated for ethers v6
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, NFTContract.abi, signer);

    try {
      const transaction = await contract.mintNFT(uri); // Replace with your contract method
      await transaction.wait();
      fetchNFTs(); // Refresh NFT list after minting
    } catch (error) {
      console.error("Error minting NFT:", error);
    }
  };

  return (
    <div>
      <h1>NFT Marketplace</h1>
      <button onClick={() => mintNFT("URI_OF_NEW_NFT")}>Mint NFT</button>
      <h2>Your NFTs:</h2>
      <ul>
        {nfts.map(nft => (
          <li key={nft.id}>
            <p>ID: {nft.id}</p>
            <p>URI: {nft.uri}</p>
            <p>Owner: {nft.owner}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NFTMarketPlace;
