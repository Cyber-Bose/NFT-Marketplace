// src/Components/NFTCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NFTCard = ({ nft }) => {
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const handleClick = () => {
        navigate(`/nft/${nft.id}`); // Navigate to the NFT details page
    };

    return (
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
            <img src={nft.image} alt={nft.name} />
            <h3>{nft.name}</h3>
        </div>
    );
};

export default NFTCard;
